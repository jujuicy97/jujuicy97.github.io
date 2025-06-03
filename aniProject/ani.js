/**
 * gsap.set(초기설정)
 * gsap.from : 다른곳에 --> 현재
 * gsap.to : 현재 ---> 다른곳
 * gsap.fromTo : 처음값, 마지값을 같이 설정
 */
const tl = gsap.timeline();
gsap.set(".letter-A", {
  rotateX: -180,
  opacity: 0,
  scale: 0.9,
});
gsap.set(".letter-n", {
  opacity: 0,
  y: 100,
});

tl.to(".letter-A", {
  rotateX: 0,
  opacity: 1,
  scale: 1,
  duration: 0.5,
})
  .to(".letter-n", {
    duration: 0.5,
    rotateY: 360,
    opacity: 1,
    y: 0,
    onComplete: () => {
      const letter = document.querySelector(".letter-n");
      letter.textContent = "n";
    },
  })
  .from(".letter-i", {
    y: -300,
    opacity: 0,
    duration: 0.5,
    ease: "bounce.out",
  })
  .from(".letter-m", {
    x: -300,
    opacity: 0,
    duration: 0.5,
    ease: "expo.out",
  })
  .from(".letter-a,.letter-t,.letter-e", {
    y: 300,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  });

//마우스 처리
let lastTime = 0;
const INTERVAL = 100;
//아래로 떨어지는 애니메이션
const shapeAni = (shape)=>{
  gsap.to(shape,{
    y:300+(Math.random()*300),
    duration: 1,
    opacity: 0,
    onComplete: ()=>{
      shape.remove();
    }
  });
}
//쉐이프가 생성
const createShape = (x, y) => {
  const shape = document.createElement("div");
  shape.classList.add("shape");
  if (Math.random() > 0.5) {
    shape.classList.add("circle");
  } else {
    shape.classList.add("square");
  }
  shape.style.top = `${y}px`;
  shape.style.left = `${x}px`;
  document.body.appendChild(shape);
  shapeAni(shape);
};
//마우스가 움직이면 도형이 위에서 아래로 떨어지게
document.addEventListener("mousemove", (event) => {
  const now = Date.now();
  let time = now - lastTime;
  if( time > INTERVAL ){
    createShape(event.clientX, event.clientY);
    lastTime = now;
  }
});
