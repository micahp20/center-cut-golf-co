# Center Cut Co. — v1

Mobile-first Next.js site for mobile golf simulator events in Denver, Boulder and Northern Colorado. Includes Home, Experiences, Packages, About, Contact, Booking and private Admin.

## Vercel environment variables

The project already has Supabase URL and publishable key entries. The app expects:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

No service-role or secret key is used by this app. Never expose a Supabase secret key in browser code.

## Database migration

Migration `20261121000000_initial_schema` was applied to the Center Cut Co. Supabase project `yineiteqdhxhuxdtrivb`. Do not rerun it. Both tables have RLS enabled. It creates only the two Center Cut tables. RLS is enabled. Public users can submit new inquiries only; they cannot read, update or delete. Authenticated team members listed in team_members can read inquiries and update only the status column.

## Admin account setup

Supabase Dashboard → Authentication → Users → Add user. Create each owner's email/password. Copy the user's UUID (not password). In Supabase SQL Editor:

```sql
insert into public.team_members(user_id) values ('REPLACE-WITH-USER-UUID');
```

Only add trusted owners. Admin page uses Supabase Auth; users not in team_members cannot read leads. Sign in at /admin.

## Deployment

Vercel project `center-cut-golf-co` is already linked to `micahp20/center-cut-golf-co` under team Peptide Index. Feature branch previews are separate from production. Do not merge until the preview and RLS have been tested.

## Before launch

- The uploaded approved green/silver/gold logo informed the SVG monogram. The exact bitmap asset has not yet been committed; replace the vector interpretation with the supplied logo before final approval.
- Lead notification emails are not configured; inquiries appear in Admin only.
- Add durable rate limiting/CAPTCHA before public promotion. Honeypot and validation are basic spam defenses.
- Confirm event package details, venue requirements, imagery, privacy notice and customer contact information.
- Verify the already-applied migration, authorize owners and test inquiry submission plus unauthorized-access denial.
- Run `npm install && npm run build` (Node 22+) before merging.

## Premium redesign

The `feature/premium-site-redesign` branch adds a premium event-focused layout, redesigned experiences/packages/about/contact/booking pages, Front Range service-area copy, competition concepts, FAQ, and a brand SVG monogram. It is a review preview; do not merge until approved.
