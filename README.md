# CHAPTER & CO. — Grand Collection V6.4 / Cinematic Chapter Trail & Scroll Typography

## Deploy
Upload **the entire contents of this directory** to a static web host (GitHub Pages, Netlify, Vercel static). Keep `index.html`, `app.js`, and the `assets/` tree together. No build step, external CSS/JS frameworks, or paid API keys are required.

## Included
- Full-screen envelope → light reveal → A&I + rings → guest welcome → main site.
- Working V6.1 music toggle approach, bundled MP3 and SFX; independent sound controls; browser requires guest gesture for playback.
- Six clickable photographic chapter albums with swipe / arrow navigation.
- Save-the-Date video with local MP4, built-in player, music duck/pause/resume.
- Prenup library with three filters and album viewer.
- Decorative floating elements with reduced-motion handling.
- Preserved V6.1 wedding guide with attire, gift message, venue maps and directions, timeline and FAQ.
- RSVP **demo only**, stored in localStorage; not submitted to couple.

## Critical photography and film disclosure
The local imagery is **fictional Modern Romance concept artwork** (1536 × 1024 source) with multiple distinct scene crops from the approved editorial concept and separate hero, film, story, and prenup image assignments. It is not a true 24–30 photo coordinated fictional shoot, and cannot honestly be represented as one. The demo film is a short silent animation of this concept image; it is not footage of the fictional couple. For real client use, replace `assets/images/editorial-*.webp` with original high-resolution photographs and `assets/video/save-the-date-demo.mp4` with a properly licensed couple film. The background music and SFX are bundled local placeholders. No third-party image hotlinks are required.

## External services
The embedded OpenStreetMap and Google Maps direction links need an internet connection. Static files and audio/video otherwise run locally on a deployed static host.

## Personalization
Use `?guest=Maria%20Santos` for a **demo** personalized welcome. This query-string mechanism is not private or an authenticated guest system.

## Testing checklist
1. On a phone, tap envelope and check intro sequence / skip.
2. Toggle Music On and SFX On, verify actual sound.
3. Open each chapter album, swipe / navigate / close.
4. Play/pause video and confirm background music resumes after closing.
5. Filter prenup photos, select images, return.
6. Switch ceremony/reception maps and follow direction links.
7. Check mobile menu, RSVP demo, and reduced-motion setting.

## Status
Static demo. Real RSVP backend, guest authorization, original couple imagery, and on-device QA required before selling as a client-ready Grand Collection.

## V6.3 photo update
- Preserves the locked V6.2 structure, envelope animation, wedding guide, maps, audio and SFX.
- Six different chapter cover photographs, three curated prenup collections, and separate hero / film stills.
- Albums have intentionally selected images relevant to each chapter rather than cycling through one repeated concept board.
- **Image fidelity limitation:** These images are crops from existing 1536 × 1024 approved mockup boards, not new high-resolution original photographs. Several native crops are small. No artificial upscaling is presented as genuine photo resolution. Replace with an original consistent-couple photoshoot before production.
- Audio and video are local. Maps require network. RSVP is a browser-only demo.

## V6.4 changes
- Restored six sequential chapters as a scrollable, alternating **photo-left / narrative-right**, then reversed on desktop. On mobile, each chapter becomes image-above-description.
- Each chapter photo and its text CTA opens the existing interactive photo album.
- Added IntersectionObserver-driven scroll reveal for headlines, body copy, photographs, and editorial details. Respects reduced motion and degrades to visible content without JavaScript.
- Preserved V6.3 photo assignments, all other sections, and bundled music/SFX/video. No new photo assets were generated in this revision.


## V6.5 — Persistent cinematic atmosphere
Added `atmosphere.js` and an always-visible, click-through canvas of champagne glitter, drifting rose/blush petals, soft luminous orbs, and two slow light blooms. It persists from the sealed envelope through the welcome and entire main site. No changes to V6.4's chapter trail, navigation, audio files, SFX, video, maps, RSVP or photo assignments. Adaptive particle counts (46 mobile/94 desktop), capped device pixel ratio, pause when tab hidden, reduced-motion static fallback, no external dependencies. Test on your own mobile device before public launch.
