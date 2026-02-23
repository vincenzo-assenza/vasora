#!/bin/bash
# Simple wrapper to run shopify theme-check in Docker if not installed locally
if command -v theme-check >/dev/null 2>&1; then
  theme-check "$@"
else
  docker run --rm -v "$(pwd)":/workspace ghcr.io/Shopify/theme-check:latest theme-check "$@"
fi
