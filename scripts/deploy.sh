#!/usr/bin/env bash
set -euo pipefail

# Deploy Astro static output to a local VPS web root.
# Usage:
#   ./scripts/deploy.sh
#   ./scripts/deploy.sh --site-dir /var/www/my-site --no-install
#   ./scripts/deploy.sh --no-reload

SITE_DIR="/var/www/builder-log"
INSTALL_DEPS=1
RELOAD_NGINX=1
BUILD_CMD="npm run build"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --site-dir)
      SITE_DIR="$2"
      shift 2
      ;;
    --no-install)
      INSTALL_DEPS=0
      shift
      ;;
    --no-reload)
      RELOAD_NGINX=0
      shift
      ;;
    --help|-h)
      echo "Usage: ./scripts/deploy.sh [--site-dir DIR] [--no-install] [--no-reload]"
      exit 0
      ;;
    *)
      echo "Unknown argument: $1"
      echo "Usage: ./scripts/deploy.sh [--site-dir DIR] [--no-install] [--no-reload]"
      exit 1
      ;;
  esac
done

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "==> Deploying from: $ROOT_DIR"
echo "==> Target web root: $SITE_DIR"

command -v npm >/dev/null 2>&1 || { echo "ERROR: npm is required."; exit 1; }
command -v rsync >/dev/null 2>&1 || { echo "ERROR: rsync is required."; exit 1; }

if [[ "$INSTALL_DEPS" -eq 1 ]]; then
  echo "==> Installing dependencies (npm ci)"
  npm ci
else
  echo "==> Skipping dependency install (--no-install)"
fi

echo "==> Building site ($BUILD_CMD)"
$BUILD_CMD

echo "==> Ensuring web root exists"
sudo mkdir -p "$SITE_DIR"

echo "==> Syncing dist/ to $SITE_DIR"
sudo rsync -av --delete "$ROOT_DIR/dist/" "$SITE_DIR/"

if [[ "$RELOAD_NGINX" -eq 1 ]]; then
  echo "==> Validating Nginx config"
  sudo nginx -t
  echo "==> Reloading Nginx"
  sudo systemctl reload nginx
else
  echo "==> Skipping Nginx reload (--no-reload)"
fi

echo "==> Deployment complete."
