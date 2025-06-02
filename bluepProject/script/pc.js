gsap.registerPlugin(ScrollTrigger);
//header영역//

//header 영역의 title이 오른쪽에서 왼쪽으로 이동
const $headerMsg = document.querySelectorAll("header .title li");
gsap.from($headerMsg,{
  x :300,
  opacity: 0,
  duration: 1,
  stagger:0.5
});
//화살표가 위에서 아래로 이동, 1번 화살표 이동 후 2번 화살표 실행
gsap.set(".arrow > p",{y:0});
const tl = gsap.timeline({repeat: -1});
tl.to(".arrow > p",{
  y: 10,
  opacity: 1,
  stagger: 0.2,
  duration: 0.2,
  ease: "power1.out"
})
.to(".arrow > p",{
  y: 20,
  opacity: 0,
  stagger: 0.2,
  duration: 0.2,
  ease: "power1.out"
})

//h1태그는 scale이 변경, bounce.out 처리
gsap.from("header > h1",{
  scale: 0.7,
  opacity: 0,
  duration: 1,
  ease: "bounce.out"
});

//about 영역//

//about 영역을 가로로 스크롤되게 처리
const $aboutWrap = document.querySelector("#about > .about-wrap");
const scrollWidth = $aboutWrap.scrollWidth - window.innerWidth;
const horizonScroll = gsap.to($aboutWrap,{
  x: -scrollWidth,
  duration: 1,
  scrollTrigger:{
    trigger: "#about",
    start: "top top",
    end: "+="+scrollWidth,
    pin: true,
    scrub: true,
    // markers: true
  }
});

//about info에 있는 p태그들은 오른쪽에서 왼쪽으로 이동
const $aboutMsg = document.querySelectorAll("#about .info p");
$aboutMsg.forEach((msg)=>{
  gsap.from(msg,{
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: msg,
      containerAnimation: horizonScroll, //꼭!필수! 가로 스크롤일 경우
      start: "left 90%",
      toggleActions: "play reverse play reverse"
    }
  })
});

//keyword 부분이 가로로 왔다 갔다 실행
const $keywordList = document.querySelectorAll(".keyword > li");
$keywordList.forEach((elem,idx)=>{  //1,2,3번째 li들이 각각 따로 움직여서 순번을 위해 idx값을 받아옴
  const posX = (idx===1)? 50 : -50;
  gsap.fromTo(elem,{
    x: posX
  },{
    x: -posX,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "none"
  });
});

//item-list//

//project 안에 card item을 계단 형식으로 애니메이션 처리
const $project = document.querySelectorAll("#projects > .normal");
$project.forEach((article)=>{
  const $item = article.querySelectorAll(".item");
  $item.forEach((item,idx)=>{
    let posY = 90 - idx*15;
    gsap.from(item,{
      y: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger:{
        trigger: item,
        start: `top ${posY}%`,
        end: "top 25%",
        scrub: true,
        // markers: true
      }
    });
  });
});
