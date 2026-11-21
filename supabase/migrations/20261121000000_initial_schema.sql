-- Run only after review. No production database changes were made by this PR.
create table if not exists public.team_members (user_id uuid primary key references auth.users(id) on delete cascade, created_at timestamptz not null default now());
create table if not exists public.inquiries (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), name text not null check(length(name) between 1 and 120), email text not null, phone text not null, event_type text not null check(event_type in ('Corporate','Wedding','Birthday','Private Party','Golf Tournament','Fundraiser','Other')), event_date date not null, guest_count integer not null check(guest_count between 1 and 10000), city text not null, duration_hours numeric(4,1) check(duration_hours between 1 and 24), notes text not null default '', status text not null default 'new' check(status in ('new','contacted','quoted','booked','closed')));
alter table public.team_members enable row level security;
alter table public.inquiries enable row level security;
revoke all on public.team_members from anon,authenticated;
revoke all on public.inquiries from anon,authenticated;
grant select on public.team_members to authenticated;
grant select,update on public.inquiries to authenticated;
create policy "team sees own membership" on public.team_members for select to authenticated using (user_id=(select auth.uid()));
create policy "team reads inquiries" on public.inquiries for select to authenticated using (exists(select 1 from public.team_members where user_id=(select auth.uid())));
create policy "team updates inquiries" on public.inquiries for update to authenticated using (exists(select 1 from public.team_members where user_id=(select auth.uid()))) with check (exists(select 1 from public.team_members where user_id=(select auth.uid())));
-- Public visitors never directly access tables. Server-only secret key inserts validated inquiries.
