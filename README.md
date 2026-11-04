# Fuṣḥā Study Studio

Modern Standard Arabic learning hub — [Live website](https://fusha-study-studio.vercel.app)

## Contents

- `index.html`: bilingual (Japanese/English) course homepage
- `content/grammar-en.html`: grammar A0–B2, English teacher edition
- `content/grammar-ja.html`: grammar A0–B2, Japanese edition
- `content/lesson-01.html`: introduction and daily routine practice
- `content/lesson-02.html`: café and restaurant conversation
- `content/conversation.html`: everyday phrasebook

Each resource is a standalone HTML page; speech synthesis relies on Arabic voices installed in the browser/device. Study completion is saved only in localStorage of the current browser. This repository contains publicly accessible learning materials; do not commit private notes or student personal details.

## Publishing

Vercel automatically deploys pushes to the production branch once this repository is connected. For new lessons, add `content/lesson-03.html` and a new card linking to it in `index.html`. No build step or dependencies are needed.
