---
title: "Shipping Embedded Wallets Across EVM + Solana"
date: 2025-07-14
tags: ["work"]
excerpt: "How we designed social-login wallet provisioning with clean defaults and low cognitive load."
cover: "/covers/work-wallets.svg"
links:
  - label: "Arena"
    url: "https://arena.social"
draft: true
---

The best wallet onboarding flow is the one users barely notice.

At Arena, we rebuilt sign-up around social login and provisioned non-custodial wallets behind the scenes. The core challenge was preserving user control without forcing users through cryptographic decisions on day one.

What worked:

- Social login first, cryptography second.
- Progressive disclosure for key-management details.
- Frictionless fallback paths for failed wallet provisioning.

The result: dramatically improved activation without compromising self-custody principles.
