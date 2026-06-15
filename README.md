# aaronsmithx.github.io

Personal website, served via GitHub Pages at **https://aaronsmith.online**.

Plain static HTML + CSS + JS — no build step.

## Local development

Run a local static server with live reload (browser refreshes on file save):

```sh
npm install   # first time only — installs live-server
npm run dev    # serves at http://localhost:3000
```

No Node? Quickest preview without it (no hot reload): `python3 -m http.server 3000`,
or just open `index.html` in a browser.

## Deploy

GitHub Pages serves the `main` branch of the `aaronsmithx.github.io` repo. Pushing
to `main` publishes the site. The `CNAME` file maps it to the custom domain.

### DNS

Point `aaronsmith.online` at GitHub Pages:

- Apex `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- (optional) `www` `CNAME` → `aaronsmithx.github.io`
