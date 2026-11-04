# Fuṣḥā Study Studio

An original, publicly accessible Modern Standard Arabic (Fuṣḥā) learning hub for a learner and a private teacher.

**Live website:** https://fusha-study-studio-git.vercel.app

## Three study languages

Use **English**, **日本語**, or **العَرَبِيَّةُ** from the homepage and inside learning materials. The preference is saved in the local browser and shared between pages.

The Arabic-only view of older resources is a reading/listening practice mode, not a complete translation of the teachers' notes.

## Resources

- `index.html` — trilingual homepage
- `content/grammar.html?level=basic` — Grammar A0–A2 (chapters 1–35)
- `content/grammar.html?level=advanced` — Grammar B1–B2 (chapters 36–51, introductions)
- `assets/grammar-topics.js` — shared chapter headings, Arabic titles and Japanese chapter notes
- `content/grammar-en.html` and `content/grammar-ja.html` — original source texts used by the unified grammar reader (keep both)
- `content/lesson-01.html` — Introductions (Nov 2, 4, 6, 2026)
- `content/lesson-02.html` — Café and restaurant (Nov 9, 11, 13, 2026)
- `content/lesson-03.html` — Shopping, prices, quantities (Nov 16, 18, 20, 2026)
- `content/conversation.html` — everyday phrases
- `curriculum.html` — 20-week / 60-class roadmap, linked to grammar chapters

The unified grammar book has **51 English chapters**. Existing Japanese source lessons cover fewer chapters and do not map 1:1; the unified reader shows original Japanese explanations where available and concise Japanese summary notes for uncovered chapters. It does not claim all B1–B2 explanations are fully translated.

## Teacher lesson structure

Each weekly lesson pack contains three 120-minute classes (Mon/Wed/Fri), dialogues, vocabulary, grammar references, listening and role-play, homework and performance checks. In future, add `content/lesson-04.html`, a homepage card, and the curriculum links.

## Publishing

GitHub repository: https://github.com/oguraseita-pan/fusha-study-studio

The `main` branch is connected to Vercel. Pushes trigger automatic deployments.

All materials are publicly visible. Do not upload personal teacher/student data, confidential business information or private notes. Local completion toggles are stored in the current browser only, not synced.
