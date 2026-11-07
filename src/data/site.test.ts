import test from 'node:test';
import assert from 'node:assert/strict';
import { TEAM_MEMBERS } from './team';
import { TECHNOLOGY_CATEGORIES } from './technologies';
import { FEATURED_PROJECTS } from './projects';

test('Byte Builder team roster contains exactly the 3 mandated members', () => {
  assert.equal(TEAM_MEMBERS.length, 3);
  const names = TEAM_MEMBERS.map(m => m.name);
  assert.ok(names.includes('Manav Kumar'), 'Manav Kumar must be in team list');
  assert.ok(names.includes('Anurag Sharma'), 'Anurag Sharma must be in team list');
  assert.ok(names.includes('Sarfaraz'), 'Sarfaraz must be in team list');
});

test('Technology categories cover all five required technical disciplines', () => {
  assert.equal(TECHNOLOGY_CATEGORIES.length, 5);
  const ids = TECHNOLOGY_CATEGORIES.map(c => c.id);
  assert.ok(ids.includes('programming'));
  assert.ok(ids.includes('frontend'));
  assert.ok(ids.includes('backend'));
  assert.ok(ids.includes('ai-ml'));
  assert.ok(ids.includes('dev-tools'));
});

test('Featured projects have valid structure and placeholder descriptions', () => {
  assert.ok(FEATURED_PROJECTS.length >= 3);
  for (const project of FEATURED_PROJECTS) {
    assert.ok(project.title.length > 0);
    assert.ok(project.techStack.length > 0);
    assert.ok(project.placeholderLabel.length > 0);
  }
});

test('Design system defines mandated Dark and Light theme color tokens', async () => {
  const fs = await import('node:fs');
  const css = fs.readFileSync('src/index.css', 'utf-8');
  
  // Dark theme tokens
  assert.ok(css.includes('#080A10'), 'Dark background #080A10 must be defined');
  assert.ok(css.includes('#121722'), 'Dark surface #121722 must be defined');
  assert.ok(css.includes('#F5F5F7'), 'Dark primary text #F5F5F7 must be defined');
  assert.ok(css.includes('#A5ADBC'), 'Dark secondary text #A5ADBC must be defined');
  assert.ok(css.includes('#E11D48'), 'Dark accent #E11D48 must be defined');
  assert.ok(css.includes('#090C14'), 'Dark footer background #090C14 must be defined');

  // Light theme tokens (Task 03 refined values)
  assert.ok(css.includes('#F1F2F5'), 'Light refined off-white background #F1F2F5 must be defined');
  assert.ok(css.includes('#FFFFFF'), 'Light surface #FFFFFF must be defined');
  assert.ok(css.includes('#151925'), 'Light primary text #151925 must be defined');
  assert.ok(css.includes('#596273'), 'Light secondary text #596273 must be defined');
  assert.ok(css.includes('#E1E5EC'), 'Light borders #E1E5EC must be defined');
  assert.ok(css.includes('#D71945'), 'Light accent #D71945 must be defined');
  assert.ok(css.includes('#E9ECF2'), 'Light footer background #E9ECF2 must be defined');
});

test('Footer and Global Background adhere to visibility and layering rules', async () => {
  const fs = await import('node:fs');
  const css = fs.readFileSync('src/index.css', 'utf-8');
  const footerTsx = fs.readFileSync('src/components/layout/Footer.tsx', 'utf-8');
  const layoutTsx = fs.readFileSync('src/components/layout/Layout.tsx', 'utf-8');

  // Stacking context assertions
  assert.ok(footerTsx.includes('z-20'), 'Footer must have z-20 stacking context');
  assert.ok(layoutTsx.includes('z-10'), 'Main content must have z-10 stacking context');
  assert.ok(layoutTsx.includes('GlobalBackground'), 'Layout must mount GlobalBackground');

  // Dedicated light-mode video: the dark Veo video is fully hidden in light theme
  assert.ok(css.includes('html.light .global-bg-video'), 'Light mode video rules must exist');
  assert.ok(css.includes('visibility: hidden'), 'Dark video must be fully hidden in light mode');
  assert.ok(css.includes('global-bg-video-light'), 'Dedicated light-mode video class must exist');
});

test('Global background asset and anti-flash setup are intact', async () => {
  const fs = await import('node:fs');
  assert.ok(fs.existsSync('public/assets/aistudio/gemini_generated_video_0554ba03_6353f93d.mp4'));
  const html = fs.readFileSync('index.html', 'utf-8');
  assert.ok(html.includes('bytebuilder-theme'), 'Anti-flash theme initialization script must be in index.html');
  const globalBg = fs.readFileSync('src/components/layout/GlobalBackground.tsx', 'utf-8');
  assert.ok(globalBg.includes('autoPlay') && globalBg.includes('muted') && globalBg.includes('loop') && globalBg.includes('playsInline'));
});

