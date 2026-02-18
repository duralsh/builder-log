---
title: "German Vocabulary CLI with Local LLM Enrichment"
date: 2026-01-11
tags: ["project"]
excerpt: "A self-hosted workflow for lookup, spaced review, and AI-generated quiz batches."
cover: "/covers/project-vocab.svg"
github: "https://github.com/duralsh/wortify"
draft: false
---

This tool started as a personal language-learning utility and grew into a robust local workflow.

Core architecture:

- CLI-first UX for fast lookup and review.
- Local model execution through Ollama.
- Markdown and JSON exports for portability.
- Async quiz generation with dedupe-safe upserts.

The guiding constraint was simple: **no cloud dependency required for daily use**.
