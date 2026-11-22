# Center Cut Co. — v1

Mobile-first Next.js site for mobile golf simulator events in Denver, Boulder and Northern Colorado. Includes Home, Experiences, Packages, About, Contact, Booking and private Admin.

## Vercel environment variables

The project already has Supabase URL and publishable key entries. The app expects:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

No service-role or secret key is used by this app. Never expose a Supabase secret key in browser code.

## Database migration

The owner reports that migration `20261121000000_initial_schema` has already been applied. Do not run it again. Verify its tables and RLS policies once the correct Supabase project becomes visible to the connected account. It creates only the two Center Cut tables. RLS is enabled. Public users can submit new inquiries only; they cannot read, update or delete. Authenticated team members listed in team_members can read inquiries and update only the status column.

## Admin account setup

Supabase Dashboard → Authentication → Users → Add user. Create each owner's email/password. Copy the user's UUID (not password). In Supabase SQL Editor:

```sql
insert into public.team_members(user_id) values ('REPLACE-WITH-USER-UUID');
```

Only add trusted owners. Admin page uses Supabase Auth; users not in team_members cannot read leads. Sign in at /admin.

## Deployment

Vercel project `center-cut-golf-co` is already linked to `micahp20/center-cut-golf-co` under team Peptide Index. Feature branch previews are separate from production. Do not merge until the preview and RLS have been tested.

## Before launch

- Exact approved logo artwork is not yet in the repository; temporary CC/flag mark is used.
- Lead notification emails are not configured; inquiries appear in Admin only.
- Add durable rate limiting/CAPTCHA before public promotion. Honeypot and validation are basic spam defenses.
- Confirm event package details, venue requirements, imagery, privacy notice and customer contact information.
- Verify the already-applied migration, authorize owners and test inquiry submission plus unauthorized-access denial.
- Run `npm install && npm run build` (Node 22+) before merging.
