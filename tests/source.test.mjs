import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const read=(n)=>fs.readFileSync(path.join(root,n),'utf8');
const js=read('app.js');const config=read('site-config.js');
const routes=['/','/about','/portfolio','/contact','/portfolio/travel-easy','/portfolio/gamma','/portfolio/stream-ai','/portfolio/foome','/portfolio/edbost'];
test('all nine portfolio routes are defined',()=>{
 for(const route of routes.slice(1,4)) assert.ok(js.includes(`path==='${route}'`),route);
 for(const slug of routes.slice(4).map(s=>s.split('/').at(-1)))assert.ok(js.includes(`slug:'${slug}'`),slug);
});
test('legacy placeholder social hostnames are not active anchors',()=>{
 assert.ok(!js.includes("'https://x.com/'"));assert.ok(!js.includes("'https://www.instagram.com/'"));assert.ok(!js.includes("'https://www.linkedin.com/'"));
});
test('footer uses a same-page top action',()=>assert.ok(js.includes('data-scroll-top')));
test('demo contact is not an active recipient or phone link',()=>{assert.ok(js.includes('isDemo?`<span class=\"demo-contact\"'));assert.ok(js.includes('Sample email'));assert.ok(js.includes('Sample number'))});
test('expired May 2026 availability notice is absent',()=>assert.ok(!js.includes('One spot available for May, 2026')));
test('contact endpoint is configurable and preview cannot report delivery',()=>{
 assert.ok(js.includes('siteConfig.formEndpoint'));
 assert.ok(js.includes('Preview only: no message was sent'));
 assert.match(config,/mode:\s*'demo'/);
 assert.match(config,/formEndpoint:\s*''/);
});
test('configurable timezone and location label replace hardcoded city',()=>{
 assert.ok(js.includes('siteConfig.timeZone'));
 assert.ok(js.includes('siteConfig.locationLabel'));
 assert.ok(!js.includes("return 'Pune'"));
});
test('reduced motion, skip to main and route metadata supported',()=>{
 assert.ok(js.includes('skip-link'));
 assert.ok(js.includes('prefers-reduced-motion'));
 assert.ok(js.includes("setMeta('og:title'"));
});
test('CSS has keyboard focus and compact viewport support',()=>{
 const css=read('styles.css');assert.ok(css.includes('.skip-link:focus-visible'));
 assert.ok(css.includes('@media(max-width:699px)'));
});
test('9 + 404 static route entrypoints are built',()=>{
 for(const route of [...routes,'/404']){
  const name=route==='/404'?'404.html':route==='/'?'index.html':route.slice(1)+'/index.html';
  assert.ok(fs.existsSync(path.join(root,name)),name);
 }
});
