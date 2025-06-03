gsap.registerPlugin(ScrollTrigger);

//상단 .top은 실행이되면 자연스럽게 위로 올라가도록
gsap.to("header>.top",{
  y:-100,
  opacity: 0,
  duration: 8,
  ease:"power2.out"
});

//하단 문구 하나씩 나타나게 하기
const $bottom = document.querySelector("ul>li:nth-child(2)");
// console.log(bottomText.textContent);
const bottomText = $bottom.textContent;
//문자열 -> 배열로 만듦(하나하나 배열 가져오기) = forEach 사용하려고!
const textArr = bottomText.split("");
// console.log(textArr);
let createHTML = '';
textArr.forEach((chat)=>{
  //<span>C<span><span>r</span><span>e</span> 만들기
  createHTML += `<span>${chat}</span>`;
});
$bottom.innerHTML = createHTML;
//글자가 하나씩 나타나게 하기
gsap.from("ul > li:nth-child(2) > span",{
  opacity: 0,
  x: -100,
  stagger: 0.1,
  duration: 0.6,
  ease: "power2.out"
});

//span 3~끝까지의 class를 동일하게 down으로 추가(html에서 일일이 추가x)
const $span = document.querySelectorAll("h1>span");
for(let i=2; i<$span.length; i++){
  $span[i].classList.add("down");
}

//h1태그에서 글씨들이 아래에서 위로 올라오게 하기
const tl = gsap.timeline(); //태그마다 순서를 다르게 해서 나타나게 하도록
tl.from("h1>span:nth-child(1)",{
  rotateX: -180,
  opacity: 0,
  duration: 1,
  backgroundColor: "#fffaf0",
  ease: "power4.out"
})
.from("h1>span:nth-child(2)",{
  y: 200,
  scale: 0.7,
  rotation: 360,
  opacity: 0,
  duration: 1,
  onComplete: ()=>{
    const elem = document.querySelector("h1>span:nth-child(2)");
    elem.textContent = "e";
  }
})
.from(".down",{
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2
})
.from(".change",{
  scale: 0.5,
  duration: 0.3,
  ease: "power4.out",
  opacity: 0
})
.from(".change",{
  rotation: 360,
  duration: 3,
  repeat: -1,
  ease: "power4.out"
});

//하단 p태그들이 오른쪽에서 왼쪽으로 이동
gsap.from("p>span",{
  x: 600,
  opacity: 0.1,
  duration: 1,
  stagger: 0.1,
  ease: "bounce.in"
});

gsap.to(".zigzag",{
  x: -30,
  y: -30,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.out"
});

//scrollTrigger 발생 : timeline과 같이 발생
const tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: "main",
    start: "top 30%",
  }
});
tl2.from("main > p:nth-child(1)",{
  x: 300,
  duration: 0.7
})
.from("main > p:nth-child(3)",{
  x: -300,
  duration: 0.7
})
.from("main > p:nth-child(4)",{
  y: 200,
  opacity: 0,
  duration: 0.7
})
.from("main > p:nth-child(2)",{
  scale: 0.2,
  opacity: 0,
  duration: 0.7
})