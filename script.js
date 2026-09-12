const $=s=>document.querySelector(s);
const loader=$("#loader"), opening=$("#opening"), envelopeScene=$("#envelopeScene"), envelope=$("#envelope"), story=$("#story"), audio=$("#audio");
const begin=$("#begin"), openLetter=$("#openLetter"), music=$("#music");

setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>loader.remove(),800)},650);

begin.addEventListener("click",async()=>{
  opening.classList.add("hidden");
  envelopeScene.classList.remove("hidden");
  document.body.style.overflowY="auto";
  try{await audio.play();music.innerHTML="♫ <span>Music</span>"}catch(e){music.innerHTML="♫ <span>Tap for music</span>"}
});

openLetter.addEventListener("click",()=>{
  envelope.classList.add("open");
  openLetter.disabled=true;
  openLetter.innerHTML="Your letter is opening… ♥";
  setTimeout(()=>{
    envelopeScene.classList.add("hidden");
    story.classList.remove("hidden");
    window.scrollTo({top:0,behavior:"instant"});
    observe();
  },1350);
});

music.addEventListener("click",async()=>{
  if(audio.paused){try{await audio.play();music.innerHTML="♫ <span>Music</span>"}catch(e){}}
  else{audio.pause();music.innerHTML="🔇 <span>Muted</span>"}
});

function observe(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})
  },{threshold:.13});
  document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));
}
document.body.style.overflow="hidden";
