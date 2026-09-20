const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));

document.querySelectorAll(".tilt").forEach(card=>{
  card.addEventListener("pointermove",e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(1000px) rotateX(${-y*5}deg) rotateY(${x*7}deg)`;
  });
  card.addEventListener("pointerleave",()=>card.style.transform="perspective(1000px) rotateX(0) rotateY(0)");
});

const hero=document.querySelector(".hero-visual");
if(hero&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
  let tx=0,ty=0,x=0,y=0;
  window.addEventListener("pointermove",e=>{tx=(e.clientX/innerWidth-.5)*12;ty=(e.clientY/innerHeight-.5)*-8});
  function frame(){x+=(tx-x)*.035;y+=(ty-y)*.035;hero.querySelector(".signal-card")?.style.setProperty("transform",`rotateY(${-7+x*.18}deg) rotateX(${4+y*.12}deg)`);hero.querySelector(".orbit-1")?.style.setProperty("transform",`rotateX(${68+y}deg) rotateZ(${22+x}deg)`);hero.querySelector(".orbit-2")?.style.setProperty("transform",`rotateX(${68-y*.7}deg) rotateZ(${-35-x*.8}deg)`);requestAnimationFrame(frame)}frame();
}