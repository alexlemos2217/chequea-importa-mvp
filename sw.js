// Caché exclusivo de la interfaz. No almacena documentos ni respuestas de APIs.
const CACHE='chequea-ui-v3-2026-10';
const ASSETS=['./','./index.html','./styles.css','./app.js','./favicon.svg','./manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(names=>Promise.all(names.filter(n=>n.startsWith('chequea-ui-')&&n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(e.request.method!=='GET'||u.origin!==self.location.origin)return;
 if(u.pathname.endsWith('/')){e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html')));return}
 if(/\.(html|js|css|svg|webmanifest)$/.test(u.pathname)){
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const clone=r.clone();caches.open(CACHE).then(c=>c.put(e.request,clone))}return r}).catch(()=>caches.match(e.request)));}
});
