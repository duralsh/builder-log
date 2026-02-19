# builder-log

Personal website built with Astro.

## Local development

```bash
npm ci
npm run dev
```

Open: `http://localhost:4321`

## Build

```bash
npm run build
```

Static output is generated in `dist/`.

## VPS deployment

This repo includes a deploy helper:

```bash
./scripts/deploy.sh --site-dir /var/www/builder-log
```

What it does:
- installs dependencies (`npm ci`) unless skipped
- builds Astro (`npm run build`)
- syncs `dist/` into your web root with `rsync --delete`
- validates and reloads Nginx

Useful flags:

```bash
./scripts/deploy.sh --no-install
./scripts/deploy.sh --no-reload
./scripts/deploy.sh --site-dir /var/www/my-site
```

## Update instructions (after new commits)

On the VPS, from repo root:

```bash
git pull
./scripts/deploy.sh --site-dir /var/www/builder-log --no-install
```

If dependencies changed (`package.json` / `package-lock.json`), run:

```bash
./scripts/deploy.sh --site-dir /var/www/builder-log
```

## Nginx note

Use a server block that points to the same deploy directory:

- Nginx `root`: `/var/www/builder-log`
- deploy `--site-dir`: `/var/www/builder-log`

If those differ, you will likely see `404`.
