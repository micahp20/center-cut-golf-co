# Center Cut Golf Co. — v1

Mobile-first Next.js site for mobile golf simulator events in Denver, Boulder and Northern Colorado. Includes Home, Experiences, Packages, About, Contact, Booking and private Admin.

## Vercel environment variables

Add under Vercel → Project → Settings → Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`: `https://htanxdeknebmlrapkyvu.supabase.co`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`: Supabase publishable key
- `SUPABASE_SECRET_KEY`: Supabase server secret key (never prefix with NEXT_PUBLIC_)

Do not commit keys. See `.env.example`.

## Database

Review and run `supabase/migrations/20261121000000_initial_schema.sql` using Supabase SQL Editor before testing forms. RLS enabled on every new table. Anonymous database reads/writes are denied; only the validated server endpoint can insert using a server-only secret. Approved owners can read inquiries and update only status.

## Admin account setup

Supabase Dashboard → Authentication → Users → Add user. Create each owner's email/password. Copy the user's UUID (not password). Supabase SQL Editor:

```sql
insert into public.team_members(user_id) values ('REPLACE-WITH-USER-UUID');
```

The admin page uses Supabase Auth. Only users in team_members can read leads. Sign in at /admin.

## Deploy

Vercel → Add New → Project → Import GitHub repo `micahp20/center-cut-golf-co` → Next.js → add environment variables → Deploy. Configure production branch as main. Review and merge the PR when ready. No deployment or database changes were performed by this PR.

## Before launch

- Exact approved logo asset is not available; temporary CC/flag text mark is used.
- Lead notification emails are not configured; inquiries appear in Admin only.
- Add CAPTCHA and durable IP-based rate limiting before public launch; current honeypot and validation alone do not prevent automated spam.
- Confirm packages, equipment details, photos, service area, privacy notice and customer contact information.
- Test form submission and owner-only RLS access before handling real customer data.
- Run `npm install`, `npm run build` (Node 22+) before merging. Lockfile and CI checks should be added before production release.
