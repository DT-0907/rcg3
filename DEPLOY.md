# Deploying

Live: **https://rcg3.vercel.app** — Vercel project `rcg3` (team `dt-0907s-projects`).

## Automatic deploys

The project is connected to `github.com/DT-0907/rcg3`. Pushing to `main`
builds and promotes to production automatically; other branches get a preview
URL. No command needed:

```bash
git push origin main
```

To deploy the working tree without committing, `vercel deploy --prod` still
works and bypasses git entirely.

### Remotes

`origin` is this repo. `upstream` is the original `dxicheng007/rcg_berkeley`,
which we cannot push to — pull from it with `git fetch upstream`.

## Contact form email

`api/contact.ts` posts the inquiry to [Resend](https://resend.com). Until the
API key is set the endpoint returns `503 {fallback: true}` and the browser
falls back to opening the visitor's mail client, so the form keeps working
either way — it just isn't sending server-side yet.

### Finish the setup

1. Create a Resend account and an API key at
   <https://resend.com/api-keys>.
2. Add it to the Vercel project. Run this yourself so the secret is never
   pasted into a shell transcript:

   ```bash
   vercel env add RESEND_API_KEY production
   ```

3. Redeploy so the function picks it up: `vercel deploy --prod`.

### Sending domain

Resend will only deliver from a domain you have verified. Out of the box the
function sends from `onboarding@resend.dev`, Resend's shared sender, **which
only delivers to the email address that owns the Resend account.** So until
`calrcg.org` is verified, mail will not reach `contact@calrcg.org`.

To send properly, verify the domain at <https://resend.com/domains> (add the
DNS records it gives you), then set:

```bash
vercel env add CONTACT_FROM production     # e.g. RCG Website <noreply@calrcg.org>
```

`CONTACT_TO` is optional and defaults to `contact@calrcg.org`.

### What the endpoint does

- Rejects anything that is not `POST`.
- Requires all five fields, a message of 10+ characters, and a plausible email.
- Drops submissions that fill the hidden `website` honeypot, returning `200`
  so bots get no useful signal.
- Escapes visitor input into the HTML body and strips newlines from the
  subject, so neither can inject markup or mail headers.
- Sets `reply_to` to the sender, so replying from the inbox reaches them
  directly.

## Notes

`vercel.json` holds the SPA rewrite. It must keep excluding `api/`, or the
fallback swallows the function and the form starts receiving `index.html`.
