const DM=document.createElement('div'),$=s=>document.querySelector(s)||DM,$$=s=>[...document.querySelectorAll(s)],M=(a,f)=>a.map(f).join('');
const CFG={email:'info@fiveacresng.com',phone:'',endpoint:'https://formsubmit.co/ajax/fadelemichael2@gmail.com'};
const card2=(a)=>M(a,(x,i)=>`<div class="cd rv" style="--d:${(i%4)*.07}s"><h3>${x[0]}</h3><p>${x[1]}</p></div>`);
$('#vals').innerHTML=card2([['Integrity','Honesty, transparency and accountability in every deal.'],['Quality','Quality standards maintained from sourcing through delivery.'],['Reliability','A dependable partner that buyers and suppliers can trust.'],['Professionalism','Structured systems, documentation, market intelligence and disciplined execution.'],['Transparency','Clear commercial relationships with farmers, agents, suppliers, buyers and financial partners.'],['Partnership','Mutually beneficial relationships rather than short-term transactions.'],['Innovation','Technology, data and better processes to make sourcing more efficient and transparent.'],['Sustainability','Responsible production, environmental protection and the welfare of farming communities.']]);
/* sourcing tabs */
const R=[['South-West',['Cocoa','Cashew'],'#4b4f55'],['South-East',['Cashew','Cocoa'],'#5c6066'],['North-Central',['Cashew','Soybeans','Sesame'],'#3f4348'],['North-West',['Sesame','Soybeans'],'#6b6f75'],['North-East',['Soybeans','Sesame'],'#2f3236']];
const tabs=$('#tabs'),pn=$('#pn');
tabs.innerHTML=M(R,(r,i)=>`<button role="tab" aria-selected="${i==0}" data-i="${i}">${r[0]}</button>`);
function showR(i){const r=R[i];$$('#tabs button').forEach((b,j)=>b.setAttribute('aria-selected',j==i));pn.style.setProperty('--k',r[2]);pn.style.animation='none';pn.offsetWidth;pn.style.animation='';pn.innerHTML=`<h3>${r[0]}</h3><div>${M(r[1],c=>`<span class="ch">${c}</span>`)}</div><p>We are building supplier relationships across the ${r[0]} region.</p>`}
tabs.onclick=e=>{const b=e.target.closest('button');if(b)showR(+b.dataset.i)};showR(0);
const ST=[['Source','We reach the places where quality commodities are produced, building relationships with farmers, local buying agents and aggregators across Nigeria.'],['Aggregate','We organise fragmented supply into commercially useful volumes, with inspection and documentation along the way.'],['Deliver','Quality, logistics and dependable fulfilment for processors, exporters and international buyers.'],['Grow','We create sustainable growth for farmers, suppliers, buyers and Five Acres Ltd.']];
$('#acc').innerHTML=M(ST,(x,i)=>`<div class="ac${i?'':' o'}"><button type="button" aria-expanded="${!i}" data-i="${i}"><span>${x[0]}</span><i></i></button><div class="bdy"><div><p>${x[1]}</p></div></div></div>`);
function showS(i){$$('#acc .ac').forEach((a,j)=>{a.classList.toggle('o',j==i);a.querySelector('button').setAttribute('aria-expanded',j==i)})}
$('#acc').onclick=e=>{const b=e.target.closest('button');if(b)showS(+b.dataset.i)};showS(0);
/* contact */
$('#ci').innerHTML='<p><b style="color:var(--ink)">Address</b><br>C18 Yomade Shopping Complex,<br>KM 38 Lekki-Epe Expressway,<br>Awoyaya, Lekki, Lagos</p>'+(CFG.email?`<p><b style="color:var(--ink)">Email</b><br><a href="mailto:${CFG.email}">${CFG.email}</a></p>`:'')+(CFG.phone?`<p><b style="color:var(--ink)">Phone</b><br><a href="tel:${CFG.phone.replace(/\s/g,'')}">${CFG.phone}</a></p>`:'');
$('#fci').innerHTML=(CFG.email?`<p><a href="mailto:${CFG.email}">${CFG.email}</a></p>`:'')+(CFG.phone?`<p><a href="tel:${CFG.phone.replace(/\s/g,'')}">${CFG.phone}</a></p>`:'');
const cf=$('#cf'),fs=$('#fs'),MSG={name:'Please enter your name.',email:'Enter a valid email address.',role:'Choose how you would like to work with us.',message:'Tell us a little more (at least 10 characters).'};
function validate(){let f=null;cf.querySelectorAll('.er').forEach(e=>{const el=e.parentElement.querySelector('input,select,textarea'),ok=el.checkValidity();e.textContent=ok?'':MSG[el.name];el.setAttribute('aria-invalid',!ok);if(!ok&&!f)f=el});f&&f.focus();return!f}
cf.addEventListener('input',e=>{const er=e.target.closest('label')?.querySelector('.er');if(er&&e.target.checkValidity()){er.textContent='';e.target.setAttribute('aria-invalid','false')}});
function done(){cf.reset();fs.textContent='Thank you. Your message has been sent and we will reply soon.';fs.className='ok'}
cf.onsubmit=async ev=>{ev.preventDefault();fs.className='';if(!validate()){fs.textContent='Please fix the highlighted fields.';fs.className='bad';return}
const d=Object.fromEntries(new FormData(cf));if(d.website){done();return}delete d.website;
const bt=cf.querySelector('button');bt.disabled=true;bt.textContent='Sending…';
try{if(CFG.endpoint){const r=await fetch(CFG.endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({...d,_subject:'New enquiry from fiveacresng.com',_template:'table',_captcha:'false'})});const j=await r.json().catch(()=>({}));if(!r.ok||j.success===false||j.success==='false')throw 0;done()}
else if(CFG.email){location.href='mailto:'+CFG.email+'?subject='+encodeURIComponent('Website enquiry from '+d.name)+'&body='+encodeURIComponent(`Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone||'-'}\nCompany: ${d.company||'-'}\nI am a: ${d.role}\nCommodity: ${d.commodity}\n\n${d.message}`);fs.textContent='Your email app should open with the message ready to send.';fs.className='ok'}
else{fs.textContent='This form is not connected to an inbox yet. Add the company email or a form endpoint in the site settings.';fs.className='bad'}}
catch(e){fs.textContent='We could not send your message. Please try again, or email info@fiveacresng.com.';fs.className='bad'}
bt.disabled=false;bt.textContent='Send message'};
/* theme */
const root=document.documentElement,th=$('#th'),I='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">',MOON=I+'<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg>',SUN=I+'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
function setT(t,save){root.dataset.theme=t;th.innerHTML=t=='dark'?SUN:MOON;th.setAttribute('aria-label',t=='dark'?'Switch to light mode':'Switch to dark mode');if(save)try{localStorage.setItem('fa-theme',t)}catch(e){}}
setT(root.dataset.theme);th.onclick=()=>setT(root.dataset.theme=='dark'?'light':'dark',1);
/* nav */
const hd=$('#hd'),nv=$('#nv'),bg=$('#bg'),PP=(location.pathname.replace(/index\.html$/,'').replace(/\.html$/,'').replace(/\/+$/,''))||'/';
function menu(o){nv.classList.toggle('o',o);bg.setAttribute('aria-expanded',o);hd.classList.toggle('op',o)}
$$('nav a').forEach(a=>{const h='/'+(a.getAttribute('href')||'').replace(/^(\.\.?\/|\/)+/,'').replace(/[#?].*$/,'').replace(/\/+$/,'');if(h===PP||(a.dataset.p||'').split(',').includes(PP))a.classList.add('on')});
bg.onclick=()=>menu(!nv.classList.contains('o'));nv.addEventListener('click',e=>{if(e.target.closest('a'))menu(false)});
addEventListener('scroll',()=>hd.classList.toggle('sc',scrollY>24),{passive:true});scrollY>24&&hd.classList.add('sc');
addEventListener('resize',()=>innerWidth>900&&menu(false));
/* reveal + counters */
function count(el){const n=+el.dataset.n,t=1100,s=performance.now();(function f(now){const p=Math.min((now-s)/t,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(f)})(s)}
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('.cn').forEach(c=>rm||count(c));io.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -40px 0px'});
$$('.rv').forEach(el=>io.observe(el));
/* copy address */
$$('[data-copy]').forEach(b=>b.onclick=async()=>{const m=b.closest('.loc').querySelector('.cpm');try{await navigator.clipboard.writeText(b.dataset.copy);m.textContent='Address copied.'}catch(e){m.textContent=b.dataset.copy}});
/* management page */
$$('.acc2').forEach(c=>c.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const a=b.parentElement;[...c.children].forEach(x=>{const on=x===a&&!x.classList.contains('o');x.classList.toggle('o',on);x.firstElementChild.setAttribute('aria-expanded',on)})}));
$$('.flt').forEach(g=>g.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;g.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));$$('.sk>div').forEach(c=>c.classList.toggle('off',!(b.dataset.k==='all'||c.dataset.g===b.dataset.k)))}));
const sn=$$('.sn a');if(sn.length){const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)sn.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -55% 0px'});sn.forEach(a=>{const x=document.querySelector(a.getAttribute('href'));x&&so.observe(x)})}


/* ===== v3: hero slider, ticker, toc ===== */
(function(){
const HERO=[['../assets/img/hero-market.jpg','70% 50%'],['../assets/img/hero-cocoa.jpg','50% 50%'],['../assets/img/hero-soybeans.jpg','50% 50%'],['../assets/img/hero-cashew.jpg','50% 55%']];
const h=document.querySelector('#hero');
if(h){
 h.querySelectorAll('.hs,.dots').forEach(x=>x.remove());
 const hs=document.createElement('div'),dots=document.createElement('div');hs.className='hs';hs.setAttribute('aria-hidden','true');
 hs.innerHTML=HERO.map((x,i)=>`<div class="${i?'':'on'}" style="--i:url('${x[0]}');--p:${x[1]}"></div>`).join('');h.prepend(hs);h.classList.add('im');
 dots.className='w dots';dots.setAttribute('role','group');dots.setAttribute('aria-label','Hero slideshow');
 dots.innerHTML=HERO.map((x,i)=>`<button type="button" aria-label="Show slide ${i+1}" aria-current="${!i}" data-i="${i}"></button>`).join('')+'<button type="button" class="pp" aria-label="Pause slideshow"></button>';h.appendChild(dots);
 let cur=0,t=null,paused=matchMedia('(prefers-reduced-motion:reduce)').matches;const sl=[...hs.children],db=[...dots.querySelectorAll('[data-i]')],pp=dots.querySelector('.pp');
 pp.classList.toggle('on',paused);pp.setAttribute('aria-label',paused?'Play slideshow':'Pause slideshow');
 const show=n=>{cur=(n+sl.length)%sl.length;sl.forEach((e,i)=>e.classList.toggle('on',i==cur));db.forEach((b,i)=>b.setAttribute('aria-current',i==cur))};
 const run=()=>{clearInterval(t);if(!paused)t=setInterval(()=>show(cur+1),6500)};
 dots.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b===pp){paused=!paused;pp.classList.toggle('on',paused);pp.setAttribute('aria-label',paused?'Play slideshow':'Pause slideshow')}else show(+b.dataset.i);run()};
 h.addEventListener('mouseenter',()=>clearInterval(t));h.addEventListener('mouseleave',run);run();
}
/* live market ticker: cocoa, soybeans and NGN exchange rates */
const box=document.querySelector('#mktv');
if(box){const init=()=>{const c=document.createElement('div');c.className='tradingview-widget-container';const w=document.createElement('div');w.className='tradingview-widget-container__widget';c.appendChild(w);
 const s=document.createElement('script');s.src='https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';s.async=true;
 s.text=JSON.stringify({symbols:[{proName:'ICEUS:CC1!',title:'Cocoa'},{proName:'CBOT:ZS1!',title:'Soybeans'},{proName:'CBOT:ZM1!',title:'Soybean meal'},{proName:'CBOT:ZL1!',title:'Soybean oil'},{proName:'FX_IDC:USDNGN',title:'USD/NGN'},{proName:'FX_IDC:EURNGN',title:'EUR/NGN'},{proName:'FX_IDC:GBPNGN',title:'GBP/NGN'}],showSymbolLogo:false,colorTheme:'dark',isTransparent:true,displayMode:'regular',locale:'en'});
 c.appendChild(s);box.appendChild(c)};
 addEventListener('load',()=>setTimeout(init,400))}
/* article table of contents scroll-spy */
const toc=[...document.querySelectorAll('.toc a')];
if(toc.length){const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)toc.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-30% 0px -60% 0px'});toc.forEach(a=>{const x=document.querySelector(a.getAttribute('href'));x&&io2.observe(x)})}
})();
