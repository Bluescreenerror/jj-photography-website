(function(){
/* ============ EDIT ME ============ */
var EMAIL="jeeshaan.j@gmail.com", IGH="jj__photoworks", IG="https://instagram.com/"+IGH;
var SITE="https://www.jj-photography.ca"; /* your live domain, no trailing slash */
var LOGO="images/logo-header.png"; /* jj mark, replaces the text logo in the header */
var CAT={ /* gallery categories: name, accent colour, handwritten note */
 portraits:{n:"Portraits",v:"var(--neon-pink)",notes:["honest faces, good light", "let them forget the camera", "the laugh after the laugh", "hold still... or don't", "everyone has a good side", "soft hands, loud colours", "small moments, big feelings", "say nothing, just look"]},
 events:{n:"Events",v:"var(--azure-blue)",notes:["the moment between moments", "be there before it happens", "caught mid-chaos", "dance floor evidence", "nobody was posing", "turn the lights up (or down)", "you had to be there", "this one slipped past everyone"]},
 automotive:{n:"Automotive",v:"var(--blaze-orange)",notes:["chrome, curves, details", "all the little details", "reflections for days", "built, not bought", "wheel talk", "patina is a personality", "engine off, still loud", "found at golden hour"]},
 creative:{n:"Creative",v:"var(--amber-gold)",notes:["rules are suggestions", "what if it looked like this", "slow shutter, big mood", "one more try", "made at 2am", "light does the work", "try it upside down", "not sure, shot it anyway"]},
 wildlife:{n:"Wildlife",v:"var(--neon-green)",notes:["patience pays off", "stay quiet, stay low", "five minutes, one frame", "they never sit still", "tiny neighbours", "green and gold hour", "the long lens day", "blink and you'd miss it"]}};
/* PHOTOS. To add one: put images/<cat>/<slug>-800.webp (+ -1600.webp) and add a line.
   c=category s=slug t=title w/h=size of the first file z=widths a=alt text d=description (optional)
   loc=location yr=year (optional) f=1 shows on the home page */
var P=[
{c:"events",s:"silhouette-kiss",t:"Backlit",w:800,h:1200,z:[800,1600],f:1,a:"Silhouette of a couple kissing against a blue sky, lace veil catching the light"},
{c:"events",s:"bride-golden-light",t:"Golden hour",w:800,h:1200,z:[800,1600],f:1,a:"Bride in a lace gown and veil looking down, lit by low golden sun"},
{c:"creative",s:"smoke-black-and-white",t:"Slow burn",w:800,h:1200,z:[800,1600],f:1,a:"Black and white portrait of a couple in dark light, hands raised to their lips"},
{c:"creative",s:"hands",t:"Hands",w:800,h:1200,z:[800,1600],f:1,a:"Black and white detail of hands, rings and cigarettes against dark suits"},
{c:"portraits",s:"half-birthday",t:"Half a year",w:800,h:533,z:[800,1600],a:"Baby laughing in a high chair with a pink tassel banner reading one half",d:"A half-birthday set against black, with a pink tassel banner and a very big laugh."},
{c:"creative",s:"light-trails",t:"Slow lane",w:800,h:533,z:[800,1600],a:"Long exposure of a curving night road with red, orange and blue light trails",d:"A long exposure on a bend in the road, with taillights drawn into red, amber and blue."},
{c:"wildlife",s:"damselfly",t:"Little blue",w:800,h:549,z:[800,1600],f:1,a:"Dark blue damselfly perched on a bright green leaf with a soft green background",d:"A damselfly on a leaf, metallic blue against every shade of green."},
{c:"portraits",s:"lift",t:"Up",w:800,h:1200,z:[800,1600],a:"Silhouette of a woman lifting a child toward the sun over a lake shore",d:"Sun straight behind them at the water's edge."},
{c:"automotive",s:"mg-front-wheel",t:"Chrome and blue",w:533,h:800,z:[533],a:"Close-up of a blue vintage MG headlight, amber indicator and silver alloy wheel"},
{c:"events",s:"smoke-and-light",t:"Haze",w:800,h:1200,z:[800,1600],a:"Silhouette of a man with hand to his headphones in pink and blue smoke",d:"Stage smoke catching the colour, a figure holding still in the middle of it."},
{c:"portraits",s:"holding-hands",t:"Small grip",w:800,h:1200,z:[800,1600],f:1,a:"Close-up of a small child's hand with a silver bangle holding an adult hand in a lace sleeve",d:"Lace, a silver bangle and the water soft behind them."},
{c:"creative",s:"harbour-reflections",t:"After dark",w:800,h:533,z:[800,1600],a:"City lights reflected in long streaks of colour on dark harbour water",d:"City lights pulled long and soft on still water."},
{c:"portraits",s:"shoreline-sisters",t:"Waterline",w:800,h:533,z:[800,1600],f:1,a:"Two silhouetted figures in white dresses holding hands in shallow water with the sun low behind them",d:"Two figures at the edge of the lake, sun low and sparkling on the water."},
{c:"wildlife",s:"singing-sparrow",t:"Mid-song",w:800,h:1200,z:[800,1600],f:1,a:"Sparrow with its beak open perched on a branch, framed by dark trunks and soft bokeh",d:"Framed by dark branches, beak open, mid-song."},
{c:"creative",s:"tiny-planet",t:"Tiny planet",w:800,h:428,z:[800,1600],f:1,a:"Drone panorama bent into a tiny planet: a waterfront park and harbour against deep blue sky",d:"A drone panorama bent into a small planet."},
{c:"portraits",s:"neon-night",t:"Neon hours",w:533,h:800,z:[533],a:"Man in a patterned beanie and pale coat lit by red and blue neon at night"},
{c:"portraits",s:"fire-escape",t:"Fire escape",w:533,h:800,z:[533],a:"Man leaning on a fire escape against an orange brick wall in hard evening light"},
{c:"events",s:"groom-street-light",t:"Waiting",w:800,h:1200,z:[800,1600],a:"Groom in a black tuxedo and bow tie looking off-frame in warm street light"},
{c:"automotive",s:"mg-gear-shift",t:"Wood and leather",w:533,h:800,z:[533],a:"Wooden gear knob and wood-rimmed steering wheel inside a classic MG"},
{c:"portraits",s:"phone-booth",t:"Hold the line",w:533,h:800,z:[533],a:"Man in a shearling vest and shorts on a payphone inside a glass booth, shot from below"},
{c:"portraits",s:"cavalier-puppy",t:"Ruby",w:800,h:1200,z:[800,1600],f:1,a:"Ruby cavalier puppy looking up in dappled sunlight on a wooden table"},
{c:"portraits",s:"shadow-portrait",t:"Out of the dark",w:533,h:800,z:[533],a:"Low-key portrait of a man in a patterned beanie and shearling vest emerging from darkness"},
{c:"creative",s:"green-light-trails",t:"Green light",w:800,h:533,z:[800,1600],a:"Night road with red light trails and a green traffic light over a winding street",d:"Taillights tracing the road under a green light."},
{c:"creative",s:"intersection-trails",t:"Crossing",w:800,h:533,z:[800,1600],a:"Night intersection with red and white light trails under glowing starburst street lamps",d:"Street lamps as starbursts, traffic as streaks."},
{c:"wildlife",s:"chipmunk",t:"Snack break",w:533,h:799,z:[533,1067],a:"Chipmunk clinging to a wooden post eating seeds in hard sunlight",d:"A chipmunk, a wooden post and one beam of hard light."},
{c:"events",s:"strike",t:"Strike",w:800,h:1200,z:[800],a:"Soccer player in black mid-kick on a grass field, shot through the goal net",d:"Shot through the net at the moment of the kick."},
{c:"events",s:"match-balls",t:"Warm-up",w:800,h:533,z:[800,1600],a:"Pile of worn red and pink soccer balls on grass in low hazy sun",d:"Worn balls in low, hazy sun."},
{c:"portraits",s:"family-beach",t:"Together",w:800,h:1200,z:[800,1600],a:"Family of four dressed in white standing close together on a beach in golden light",d:"Four in white at the waterline in golden light."},
{c:"portraits",s:"under-the-vines",t:"Under the vines",w:800,h:1200,z:[800,1600],a:"Smiling couple standing under a grapevine in warm evening light",d:"Warm evening light coming through the vines."},
{c:"automotive",s:"pro-street-wheel",t:"Pro street",w:800,h:1200,z:[800,1600],a:"Close-up of a polished black racing wheel with drilled brake disc under a red and white body",d:"Polished lip, black spokes, drilled rotor."},
{c:"automotive",s:"chrome-and-violet",t:"Chrome and violet",w:800,h:1200,z:[800,1600],f:1,a:"Chrome headlight and bumper on a classic car with blue to purple colour-shifting paint",d:"Paint that slides from blue to purple, framed in chrome."},
{c:"automotive",s:"scrambler-wheel",t:"Scrambler",w:800,h:1200,z:[800,1600],a:"White steel wheel and knobby tire on a dark blue Jeep Scrambler",d:"White steel wheel, chunky tread, lettering on the hood."},
{c:"automotive",s:"patina",t:"Patina",w:800,h:1200,z:[800,1600],a:"Rusted fender over a gold wheel with a whitewall tire on a lowered car",d:"Rust, gold paint and whitewalls."},
{c:"automotive",s:"blue-streak",t:"Blue streak",w:800,h:1200,z:[800,1600],f:1,a:"Round headlight and amber indicator on a bright blue sports car",d:"Round glass, amber indicator, deep blue paint."},
{c:"events",s:"spoon-race",t:"Steady",w:800,h:1200,z:[800,1600],a:"Bearded man in glasses balancing a red ball on a blue spoon in his mouth, others behind him",d:"Spoon race, full concentration."},
{c:"events",s:"spoon-race-walk",t:"Eyes forward",w:800,h:533,z:[800,1600],a:"Group walking across a park field each balancing a red ball on a spoon in their mouth",d:"A spoon-and-ball race across the field."},
{c:"automotive",s:"race-car-nine",t:"Number nine",w:800,h:533,z:[800,1600],a:"Low angle on the rear wheel arch of a silver and red plaid race car numbered nine, parked under a tent and covered in sponsor decals",d:"Low angle under the paddock tent: plaid livery and a wall of decals."},
{c:"portraits",s:"lace-headband",t:"Little lace",w:800,h:1200,z:[800,1600],a:"Baby girl in a cream lace headband and dress looking at the camera in warm window light, a silver bangle on her wrist",d:"Window light, a lace headband and a curious stare."},
{c:"portraits",s:"birthday-point",t:"Look up",w:800,h:1200,z:[800,1600],a:"Baby in a floral dress pointing up with her mouth open in delight, held by a smiling man in front of a pastel balloon arch",d:"Pointing at something wonderful, in front of a pastel balloon arch."},
{c:"wildlife",s:"petunias",t:"Petunias",w:800,h:1200,z:[800,1600],a:"White and yellow petunias in a hanging basket against a blue sky, with a bulb light hanging above",d:"White and yellow petunias in hard summer sun."},
{c:"creative",s:"open-all-night",t:"Open all night",w:800,h:533,z:[800,1600],a:"Brightly lit laundromat window on a dark street at night, a car passing in the foreground with its tail light glowing red",d:"The only light on the block, and a car sliding past in the dark."}
];
/* ================================== */
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var page=document.body.dataset.page,main=$('main');

/* shell: header, drawer, footer (one place to edit) */
var IGI='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.25" fill="currentColor"/></svg>';
var IGL='<a class="ig" href="'+IG+'" rel="noopener" aria-label="'+IGH+' on Instagram">'+IGI+'@'+IGH+'</a>';
var NAV=[["Home","index.html","home","hello"],["Gallery","gallery.html","gallery","the wall"],["About","about.html","about","who's this"],["Services","about.html#services","","what I shoot"],["Book","book.html","book","let's go"],["Contact","mailto:"+EMAIL,"","say hi"]];
var links=NAV.map(function(n){return'<a href="'+n[1]+'"'+(n[2]===page?' aria-current="page"':'')+'>'+n[0]+'<small>'+n[3]+'</small></a>'}).join('');
main.insertAdjacentHTML('beforebegin','<header class="nav"><a class="brand" href="index.html" aria-label="jj_photography home">'+(LOGO?'<img src="'+LOGO+'" alt="">':'')+'<span>jj_photography</span></a><button class="mbtn" type="button" aria-expanded="false" aria-controls="drawer"><span>Menu</span><i></i></button></header><div class="scrim"></div><aside class="drawer" id="drawer" aria-label="Site menu"><nav aria-label="Main">'+links+'</nav><div class="dfoot"><p class="hand">brampton / toronto / gta</p><a href="mailto:'+EMAIL+'">'+EMAIL+'</a>'+IGL+'</div></aside>');
var FL=Object.keys(CAT).map(function(k){return'<a style="--c:'+CAT[k].v+'" href="gallery.html?c='+k+'">'+CAT[k].n+'</a>'}).join('');
main.insertAdjacentHTML('afterend','<footer class="foot"><div class="fgrid"><div><h2>say hi</h2><a class="fbig" href="mailto:'+EMAIL+'">'+EMAIL+'</a>'+IGL+'</div><nav aria-label="Footer"><h2>work</h2>'+FL+'</nav><div><h2>studio</h2><span>Brampton, Ontario</span><span>Toronto / GTA</span><a href="book.html">Book a shoot</a></div><a class="totop" href="#main">back up &uarr;</a></div><p class="fmark" aria-hidden="true">jj_photography</p><div class="fbar"><small>&copy; '+new Date().getFullYear()+' jj_photography</small><small>Photographer in Brampton &amp; Toronto</small></div></footer>');
if(page!=='book')document.body.insertAdjacentHTML('beforeend','<div class="mbar"><a class="btn solid" href="book.html">Book a shoot</a><a class="mig" href="'+IG+'" rel="noopener" aria-label="'+IGH+' on Instagram">'+IGI+'</a></div>');
var bar=$('.mbar'),nav=$('.nav'),mb=$('.mbtn'),dr=$('#drawer'),sc=$('.scrim'),lbl=$('span',mb),isOpen=false;
function setMenu(o){isOpen=o;document.body.classList.toggle('menu-open',o);document.body.classList.toggle('locked',o);mb.setAttribute('aria-expanded',o);lbl.textContent=o?'Close':'Menu';
 main.inert=o;$('.foot').inert=o;if(o)setTimeout(function(){$('a',dr).focus()},60);else mb.focus()}
mb.onclick=function(){setMenu(!isOpen)};sc.onclick=function(){setMenu(false)};
$$('a',dr).forEach(function(a){a.onclick=function(){if(isOpen&&a.getAttribute('href').charAt(0)!=='m')setMenu(false)}});
addEventListener('keydown',function(e){if(!isOpen)return;if(e.key==='Escape')setMenu(false);
 if(e.key==='Tab'){var f=[mb].concat($$('a',dr)),i=f.indexOf(document.activeElement);
  if(e.shiftKey&&(i<=0)){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&(i===f.length-1||i<0)){e.preventDefault();f[0].focus()}}});
function onScroll(){document.documentElement.style.setProperty('--sp',(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)).toFixed(3));nav.classList.toggle('solid',scrollY>40);
 /* phone bar: after the first screen, until the footer shows */
 if(bar)bar.classList.toggle('on',scrollY>innerHeight*.6&&$('.foot').getBoundingClientRect().top>innerHeight-60)}onScroll();addEventListener('scroll',onScroll,{passive:true});

/* helpers */
function src(p,w){return'images/'+p.c+'/'+p.s+'-'+w+'.webp'}
function img(p,sizes,lazy){return'<img src="'+src(p,p.z[0])+'" srcset="'+p.z.map(function(w){return src(p,w)+' '+w+'w'}).join(', ')+'" sizes="'+sizes+'" width="'+p.w+'" height="'+p.h+'" alt="'+p.a+'"'+(lazy?' loading="lazy" decoding="async"':'')+'>'}
function fig(p,i,link){var k=CAT[p.c],cap='<span class="cap">'+p.t+'<span>'+k.n+'</span></span>';
 return'<figure class="it'+(p.w>p.h?' wd':'')+'" id="'+p.s+'" data-c="'+p.c+'" style="--c:'+k.v+'">'+(link?'<a href="gallery.html#'+p.s+'" aria-label="View '+p.t+' in the gallery">':'<button type="button" data-i="'+i+'" aria-label="Open '+p.t+'">')+img(p,p.w>p.h?'(min-width:1000px) 67vw, 100vw':'(min-width:1000px) 34vw, (min-width:480px) 50vw, 100vw',1)+cap+(link?'</a>':'</button>')+'</figure>'}
var io='IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1}):null;
function reveal(r){if(io)$$('.rv:not(.in)',r).forEach(function(el){io.observe(el)})}
if(io)$$('.strip,.a-txt>*').forEach(function(el){el.classList.add('rv')});reveal();
/* random askew colour block behind photos on hover */
var R=function(a,b){return a+Math.random()*(b-a)};
document.addEventListener('mouseover',function(e){var t=e.target.closest&&e.target.closest('.it,.row-img');if(!t||t.contains(e.relatedTarget))return;
 var s=Math.floor(R(0,4)),d=R(6,12),o=R(-5,5),g=s%2?-1:1,x=s<2?g*d:o,y=s<2?o:g*d,r=R(1,2.5)*(Math.random()<.5?-1:1);
 t.style.setProperty('--tx',x.toFixed(1)+'px');t.style.setProperty('--ty',y.toFixed(1)+'px');t.style.setProperty('--rot',r.toFixed(1)+'deg')});

/* home: hero viewfinder. Click (or wait) and the shutter fires, the next photo appears. */
var vf=$('#vf');
if(vf){
 var ph=$('img',vf),af=$('.af',vf),now=$('#now'),F=P.filter(function(p){return p.f}),k=0,tm=null,still=matchMedia('(prefers-reduced-motion:reduce)').matches,
 pick=function(a){return a[Math.floor(Math.random()*a.length)]};
 var BD=['var(--azure-blue)','var(--blaze-orange)','var(--amber-gold)','var(--neon-green)','var(--neon-pink)'],bi=BD.length-1; /* site palette; the block behind the frame steps through it each shot */
 now.textContent='click the frame, take a shot';
 function focus(){af.classList.remove('lock');af.style.left=R(15,60)+'%';af.style.top=R(15,60)+'%';
  setTimeout(function(){af.style.left=R(25,50)+'%';af.style.top=R(25,50)+'%'},600);setTimeout(function(){af.classList.add('lock')},1200)}
 function shoot(){var p=F[k=(k+1)%F.length],n=new Image(),u=src(p,p.z[p.z.length-1]);
  n.onload=function(){vf.classList.add('shot');
   setTimeout(function(){ph.removeAttribute('srcset');ph.src=u;ph.alt=p.a;vf.style.setProperty('--c',CAT[p.c].v);vf.style.setProperty('--bd',BD[bi=(bi+1)%BD.length]);$('#vfc').textContent=CAT[p.c].n;
    $('#vfx').textContent=pick(['1/125','1/250','1/500','1/1000','1/60']);$('#vff').textContent=pick(['f/1.8','f/2.8','f/4','f/5.6','f/8']);$('#vfi').textContent='ISO '+pick([100,200,400,800,1600]);
    vf.querySelector('.meter').style.setProperty('--m',R(35,65)+'%')},170);
   setTimeout(function(){vf.classList.remove('shot');focus()},470)};n.src=u}
 function go(){stop();if(!still)tm=setInterval(shoot,5200)}function stop(){clearInterval(tm)}
 $('.vf-btn',vf).onclick=function(){shoot();go()};
 vf.addEventListener('mouseenter',stop);vf.addEventListener('mouseleave',go);
 document.addEventListener('visibilitychange',function(){document.hidden?stop():go()});
 focus();setTimeout(go,2500);
}

/* home: selected work */
var sw=$('#selected');
/* featured photos in a new random order on every load (Fisher-Yates) */
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
if(sw)sw.innerHTML=shuffle(P.filter(function(p){return p.f})).map(function(p){return fig(p,0,1)}).join('');

/* gallery */
var wall=$('#wall');
if(wall){
 var eds=$('#eds'),cats=$('#cats'),lb=$('#lb'),li=$('img',lb),lt=$('.lt',lb),VIS=[],pos=0,active='all';
 cats.innerHTML=['all'].concat(Object.keys(CAT)).map(function(c){var n=c==='all'?P.length:P.filter(function(p){return p.c===c}).length;
  return'<button type="button" class="cat" data-c="'+c+'" style="--c:'+(c==='all'?'var(--amber-gold)':CAT[c].v)+'" aria-pressed="false">'+(c==='all'?'All':CAT[c].n)+'<sup>'+n+'</sup></button>'}).join('');

 var D={all:["Photo Gallery","Portrait, event, automotive, wildlife and creative photography by jj_photography in Brampton, Toronto and the GTA."],
 portraits:["Portrait Photography","Family, couple, baby and pet portrait photography in Brampton, Toronto and the GTA."],
 events:["Event Photography","Candid wedding and event photography in Brampton, Toronto and the GTA."],
 automotive:["Automotive Photography","Car photography in Brampton and Toronto: details, wheels and the character of classic and custom cars."],
 creative:["Creative Photography","Styled, long exposure and experimental photography shoots in Toronto and the GTA."],
 wildlife:["Wildlife Photography","Bird, insect and flower photography from Ontario parks and backyards."]};
 function seo(c){var d=D[c],u=SITE+'/gallery.html'+(c==='all'?'':'?c='+c),T=d[0]+' | jj_photography Brampton & Toronto';document.title=T;
  [['meta[name=description]',d[1]],['meta[property="og:description"]',d[1]],['meta[name="twitter:description"]',d[1]],['meta[property="og:title"]',T],['meta[name="twitter:title"]',T],['meta[property="og:url"]',u]].forEach(function(a){var m=$(a[0]);if(m)m.setAttribute('content',a[1])});
  var l=$('link[rel=canonical]');if(l)l.href=u}
 function row(p,i,n){var k=CAT[p.c];
  return'<article class="row rv" id="'+p.s+'" style="--c:'+k.v+'"><div class="row-img"><button type="button" data-i="'+i+'" aria-label="Open '+p.t+'">'+img(p,'(min-width:760px) 58vw, 100vw',i>1)+'</button></div><div class="row-txt"><span class="row-n" aria-hidden="true">'+String(n).padStart(2,'0')+'</span><p class="meta">'+k.n+(p.loc?' / '+p.loc:'')+(p.yr?' / '+p.yr:'')+'</p><h2>'+p.t+'</h2><span class="rule"></span>'+(p.d?'<p>'+p.d+'</p>':'')+'<span class="hand note">'+k.notes[i%k.notes.length]+'</span>'+'</div></article>'}
 function render(c,push){active=c;seo(c);VIS=P.filter(function(p){return c==='all'||p.c===c});
  $$('.cat',cats).forEach(function(b){b.setAttribute('aria-pressed',b.dataset.c===c)});
  var at=$('.cat[aria-pressed=true]',cats);if(at)cats.scrollLeft=Math.max(0,at.getBoundingClientRect().left-cats.getBoundingClientRect().left+cats.scrollLeft-16);
  wall.hidden=c!=='all';eds.hidden=c==='all';
  if(c==='all')wall.innerHTML=VIS.map(function(p,i){return fig(p,i)}).join('');
  else{eds.innerHTML=VIS.map(function(p,i){return row(p,i,i+1)}).join('');reveal(eds)}
  if(push)history.pushState(null,'',c==='all'?'gallery.html':'gallery.html?c='+c)}
 cats.onclick=function(e){var b=e.target.closest('.cat');if(b)render(b.dataset.c,1)};
 addEventListener('popstate',function(){render(new URLSearchParams(location.search).get('c')||'all')});
 function show(i){pos=(i+VIS.length)%VIS.length;var p=VIS[pos];li.srcset=p.z.map(function(w){return src(p,w)+' '+w+'w'}).join(', ');li.sizes='92vw';li.src=src(p,p.z[p.z.length-1]);li.alt=p.a;
  lt.innerHTML='<b>'+p.t+'</b><span>'+CAT[p.c].n+' &middot; '+(pos+1)+'/'+VIS.length+'</span>';history.replaceState(null,'','#'+p.s)}
 var hint=document.createElement('p');hint.className='lhint hand';hint.textContent='swipe for the next one';lb.appendChild(hint);
 function swipeHint(){if(!matchMedia('(hover:none)').matches)return;try{if(sessionStorage.lbHint)return;sessionStorage.lbHint=1}catch(e){}
  hint.classList.add('on');setTimeout(function(){hint.classList.remove('on')},2800)}
 function open(i){show(i);if(!lb.open)lb.showModal();swipeHint()}
 document.addEventListener('click',function(e){var b=e.target.closest('[data-i]');if(b&&!b.closest('dialog'))open(+b.dataset.i)});
 $('.lx',lb).onclick=function(){lb.close()};$('.lp',lb).onclick=function(){show(pos-1)};$('.ln',lb).onclick=function(){show(pos+1)};
 lb.addEventListener('close',function(){history.replaceState(null,'',location.pathname+location.search)});
 lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});
 lb.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')show(pos-1);if(e.key==='ArrowRight')show(pos+1)});
 var sx=0;lb.addEventListener('touchstart',function(e){sx=e.changedTouches[0].clientX},{passive:true});
 lb.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(pos+(d<0?1:-1))},{passive:true});
 render(new URLSearchParams(location.search).get('c')||'all');
 /* image credit for Google Images: creator must be a full object, not just an @id reference */
 var OWN={'@type':'Organization','@id':SITE+'/#business','name':'jj_photography','url':SITE};
 var ld=document.createElement('script');ld.type='application/ld+json';ld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'ImageGallery','name':'jj_photography photo gallery','url':SITE+'/gallery.html','author':OWN,'image':P.map(function(p){return{'@type':'ImageObject','contentUrl':SITE+'/'+src(p,p.z[p.z.length-1]),'name':p.t+' | '+CAT[p.c].n+' photography','description':p.d||p.a,'caption':p.a,'creator':OWN,'copyrightHolder':OWN,'creditText':'jj_photography','copyrightNotice':'\u00a9 '+new Date().getFullYear()+' jj_photography. All rights reserved.','license':SITE+'/book.html','acquireLicensePage':SITE+'/book.html','contentLocation':'Greater Toronto Area, Ontario, Canada'}})});document.head.appendChild(ld);
 var h=location.hash.slice(1),t=h&&P.filter(function(p){return p.s===h})[0];
 if(t){if(active!=='all'&&t.c!==active)render(t.c);open(VIS.indexOf(t))}
}

/* booking form (Web3Forms) */
var f=$('#bookForm');
if(f){
 var st=$('#fs'),btn=$('button[type=submit]',f),busy=false;
 function say(m,c){st.textContent=m;st.className=c||''}
 f.addEventListener('submit',function(e){
  e.preventDefault();if(busy)return;
  var bad=null;$$('[required]',f).forEach(function(x){var ok=x.value.trim()&&x.checkValidity();x.setAttribute('aria-invalid',!ok);if(!ok&&!bad)bad=x});
  if(bad){say('Please fill in the highlighted required fields.','err');bad.focus();return}
  var key=f.dataset.accessKey;
  if(!key||key.indexOf('YOUR_')===0){say('This form is not connected yet. Add your Web3Forms access key to book.html (see the TODO comment).','err');return}
  var d=new FormData(f),o={};d.forEach(function(v,k){o[k]=v});
  o.access_key=key;o.subject='New jj_photography inquiry: '+o.type;o.from_name='jj_photography website';
  busy=true;btn.disabled=true;btn.textContent='Sending...';say('Sending your inquiry...');
  fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(o)})
  .then(function(r){return r.json()}).then(function(j){
   if(j.success){f.reset();say('Sent. I will reply by email soon.','ok');btn.textContent='Sent'}
   else throw new Error(j.message||'failed')})
  .catch(function(){busy=false;btn.disabled=false;btn.textContent='Send inquiry';say('Your inquiry was not sent. Check your connection and try again.','err')})
 })}
})();
