---
title: "Everything That Matters — AI Cheatsheet"
date: 2026-08-03
tags: ["workshop"]
excerpt: "Four workshops of material condensed into one reference deck: how the model actually works, what the dials do, how to spend context, and when not to trust the answer."
cover: "/covers/anthropic.svg"
draft: false
---

The fifth session in the **series**, and a different shape from the first four. Rather than teaching something new, this one condenses everything the earlier sessions covered into a single deck people can keep open while they work. Every claim in it was checked against Anthropic's documentation on 30 July 2026.

**Audience:** anyone who attended some of workshops #1–#4, or none of them.

### Six parts

- **How it works** — it predicts the next chunk of text, everything is measured in tokens, it all has to fit in one window, and the whole conversation is re-sent every turn.
- **What you're driving** — the four models, how much autonomy to grant, how hard it should think, and when to reach for Cowork instead of Chat.
- **Context, in practice** — why more context is not always better, what to do when a conversation gets long, the handover prompt, and the instruction stack your prompt sits on top of.
- **Talking to it** — treat it like a brilliant new colleague who knows nothing about your work; six techniques ordered by payoff.
- **Trusting it** — a model has no way to know that it doesn't know. Four defences, cheapest first, and the situations that need a second thought.
- **Giving it hands** — MCP as the kitchen and a connector as the keys to it, what each connector costs you before you type a word, and how a skill gets deployed.

### The one that changes behaviour

If a room only takes one part away, it's context. Everything downstream of it — prompt quality, hallucination, the cost of a long conversation — is really a context problem wearing a different hat.

## Slides

<div class="deck-embed">
  <iframe src="/workshops/everything-that-matters.html" title="Everything That Matters — slide deck" loading="lazy" allowfullscreen></iframe>
</div>

<p class="handout-link"><a href="/workshops/everything-that-matters.html" target="_blank" rel="noreferrer">Open the deck full screen ↗</a></p>
