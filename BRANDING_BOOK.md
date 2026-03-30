# 📘 Branding Book - CP Agenda Pro
**Premium Automation & High-Tech Aesthetic**

This document serves as the definitive source of truth for the visual and interaction design of **CP Agenda Pro**. It is designed to be highly specific so that any AI agent or developer can replicate the established style with 100% fidelity.

---

## 🎨 1. Color Palette (The "Luminous Dark" Theme)
The project uses a deep slate-950 background with vibrant, high-contrast brand colors defined by high-luminance glows.

### Core Brand Colors
| Brand Color | Hex Code | Usage |
| :--- | :--- | :--- |
| **Brand Blue** (Primary) | `#38B6FF` | Primary actions, glows, active states, key spans. |
| **Brand Pink** (Accent) | `#E5157A` | Gradients, secondary accents, badges. |
| **Brand Yellow** (Highlight) | `#FFF200` | Critical indicators, urgency badges, specific glows. |
| **Brand Gray** (Text) | `#B3B3B3` | Secondary text, subheadlines, descriptions. |

### System Colors
| Layer | Hex Code | Tailwind Equivalent |
| :--- | :--- | :--- |
| **Background (Deep)** | `#020617` | `bg-slate-950` |
| **Surface (Card)** | `#0F172A` | `bg-slate-900` |
| **Border / Subtle** | `#1E293B` | `border-slate-800` |
| **Pure White** | `#FFFFFF` | Primary text and CTA buttons. |

---

## ✍️ 2. Typography
The project relies on a modern, geometric sans-serif typeface to convey technical precision and speed.

*   **Primary Font:** `Inter` (Google Fonts)
*   **Weights Used:** 
    *   `300` (Light) - Descriptions
    *   `400` (Regular) - Body text
    *   `700` (Bold) - Sub-headers
    *   `900` (Black) - Main Headlines (H1/H2)
*   **Base Styling:**
    *   **Headings:** `tracking-tighter`, `leading-[1.1]`, `font-black`.
    *   **Sub-headlines:** `font-light`, `leading-relaxed`, `text-lg/xl`.
    *   **Upper-case Tracking:** All buttons and badges use `uppercase tracking-widest`.

---

## ✨ 3. Visual Style & UI Patterns
The "Premium High-Tech" look is achieved through layering and atmospheric effects.

### A. Background System
1.  **Radial Grid:** A fixed background pattern using a white radial gradient with 5% opacity.
    *   *Implementation:* `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1px, transparent 0)` (40px size).
2.  **Ambient Orbs:** Large, blurred circles of color (`blur-[120px]`) at 5% opacity placed behind content to create "atmosphere".
3.  **Atmospheric Gradients:** Transitions between sections using `via-brand-blue/20` to bridge pure dark areas.

### B. Glassmorphism & Gloom
-   **Badges:** Semi-transparent backgrounds with borders and low-opacity backgrounds (`bg-brand-blue/10 border-brand-blue/30`).
-   **Selection:** Text highlighting uses `selection:bg-brand-blue/30`.

### C. Buttons (The "Glow" Standard)
-   **Primary CTA:** White background (`bg-white`), Black text (`text-slate-950`), `font-black`, with a blue drop shadow (`shadow-[0_0_25px_rgba(56,182,255,0.35)]`).
-   **Transition:** Always include `hover:scale-105 active:scale-95 transition-all`.

---

## 🎬 4. Animation Language
Animations are subtle but frequent, creating a sense of life ("Alive UI").

| Name | Effect | Usage |
| :--- | :--- | :--- |
| **Twinkle** | Opacity/Scale cycle (0% to 0.8 to 0%) | Background stars. |
| **Fade In Up** | Opacity 0% → 100% + TranslateY(20px) → 0 | Section entry (0.8s - 1s). |
| **Float** | Y-axis oscillation (0px → -15px → 0px) | Product screens and key icons (6s). |
| **Pulse Slow** | Opacity change (1 → 0.5 → 1) | Ambient light orbs (4s). |
| **WhatsApp Pulse** | Box-shadow expansion (green glow) | WhatsApp Floating CTA (3s). |
| **Bright Pulse** | High opacity scaling (0.1 to 0.6) | Top-left atmosphere light. |

---

## 🛡️ 5. Implementation Prompt for Agents
To replicate this in a new project, feed this snippet to your coding agent:

> "Replicate the CP Agenda Pro style: Implement a Figma-grade dark theme using Tailwind **slate-950** as base. Use **Inter (Black/Ultra)** for headings with **negative tracking**. Color accents: **#38B6FF** (blue) and **#E5157A** (pink). Apply a **background grid** (radial-gradient, 5% white opacity). Add **ambient orbs** (blur-120px) for depth. All primary buttons must be **bg-white** with a **heavy blue glow shadow**. Use **Framer Motion or CSS Keyframes** for floating/pulsing micro-interactions to make the UI feel alive."

---
*Created for CP Agenda Pro - Version 1.0*
