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

The unified grammar reader aligns **51 English source chapters with 51 Japanese source sections**. All 51 Japanese sections contain original explanations, examples, and exercises. The Japanese standalone book calls its extra chapters **15A, 15B and 16A**; the unified reader presents these as Chapters 16, 17 and 19 and displays the original numbering. Navigation titles are taken from the corresponding source chapter headings, and the mapping is pinned by `jaSourceId` in `assets/grammar-topics.js` rather than calculated from an outdated 24-chapter edition. B1–B2 lessons provide introductions and practice rather than an exhaustive advanced grammar course.

## Personal study lessons

The 20 speaking lessons are self-paced. Each lesson has the same header with a back-to-home link and Japanese / English / Arabic study views. Dated classroom timetables and teacher instructions are not shown. Vocabulary, grammar, model dialogues, independent speaking missions, listening practice and review remain available.

The Arabic option is an Arabic-only listening-and-speaking practice view. In some early lessons, Japanese is provided for core examples while longer notes retain English fallback.

## Add to Home Screen

Open https://fusha-study-studio-git.vercel.app/ in Safari on iPhone and use Share → Add to Home Screen. On Android, use Chrome's browser menu → Add to Home screen or Install app. The site provides a web app manifest, standalone display settings and 192px/512px app icons. A network connection is required to load material that has not previously been viewed.

## Publishing

GitHub repository: https://github.com/oguraseita-pan/fusha-study-studio

The `main` branch is connected to Vercel. Pushes trigger automatic deployments.

All materials are publicly visible. Do not upload personal teacher/student data, confidential business information or private notes. Local completion toggles are stored in the current browser only, not synced.
