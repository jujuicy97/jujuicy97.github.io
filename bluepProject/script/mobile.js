// console.log("모바일용 js 업로드");

(function(){
//header영역//
//header 영역의 title이 오른쪽에서 왼쪽으로 이동
gsap.from(".title > li",{
  y: -300,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  delay: 1
});

//화살표가 위에서 아래로 이동, 1번 화살표 실행 되면서 2번 화살표 실행
const tl3 = gsap.timeline({repeat: -1});
tl3.to(".arrow > p",{
  y: 10,
  opacity: 1,
  stagger: 0.5,
  duration: 0.5,
  ease: "power1.out"
})
.to(".arrow > p",{
  y: 20,
  opacity: 0,
  stagger: 0.5,
  duration: 0.5,
  ease: "power2.out"
},"-=0.1");

//aboutme에 들어가는 텍스트들
//what i do, my journey 부분은 
// 스크롤이 되다가 top에 닿으면 사이즈가 작았지고 안보였다가 커지게 
// gsap.from(".info > p",{
//   scale: 0.8,
//   opacity: 0,
//   duration: 1,
//   ease: "power2.out",
//   scrollTrigger:{
//     trigger: "#about",
//     start: "top top",
//     // end: "+=300",
//     toggleActions: "play none none reverse"
//   }
//   }
// );

const $aboutMsg = document.querySelectorAll(".about-wrap > .info > p");
$aboutMsg.forEach((msg)=>{
  gsap.from(msg,{
    scale: 0.4,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: msg,
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    }
  });
});


//keyword 텍스트들을 움직이기(2번째 열만 다른 방향으로)
const $keywordList = document.querySelectorAll(".keyword > li");
// $keywordList.forEach((elem,idx)=>{
//   const posX = (idx===1) ? 50 : -50; //가운데 index 설정
//   gsap.fromTo(elem,
//     {x: posX},
//     { 
//       x: -posX,
//       duration: 1.5,
//       // delay: idx*0.2,
//       // repeatDelay: idx*0.3,
//       repeat: -1,
//       yoyo: true,
//       ease: "none"
//    });
// });

//timeline을 이용하여 위의 스크립트 만들어보기
const tl2 = gsap.timeline({repeat:-1, yoyo:true});
tl2.to($keywordList,{
  x: (i)=>(i===1 ? -50:50),  //속성에도 함수 사용 가능
  duration: 0.5,
  ease: "sine.inOut",
  stagger: {
    each: 0.2,
  }
});

//project 영역의 item들은 스크롤 될 때마다 아래에서 올라오며 보이도록
const $projects = document.querySelectorAll("#projects > .project-wrap");
$projects.forEach((article)=>{
  const $item = article.querySelectorAll(".item");
  $item.forEach((item)=>{
    gsap.from(item,{
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger:{
        trigger: item,
        start: "top 80%",
        end: "top 40%",
        scrub: true
      }
    });
  });
});

//skill-item들이 작아졌다가 커지게(from)
const $shapes = document.querySelectorAll(".skill-item > li");
gsap.from($shapes,{
  scale: 0.2,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "bounce.out",
  scrollTrigger:{
    trigger: "#skills",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

//footer
gsap.fromTo("footer",{
  backgroundColor: "#2957E2",
},{
  backgroundColor: "#eeeeee",
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger:{
    trigger: "footer",
    start: "top 80%",
    end: "bottom bottom",
    scrub: true,
    toggleActions: "play none none none",
    // markers: true
  }
});

//footer > mail > p태그들이 번갈아가며 색상이 바뀌도록
const $change = document.querySelectorAll(".mail > p");
$change.forEach((elem,idx)=>{
  if(idx%2 === 0){ //만약에 p태그의 순번이 짝수라면
  gsap.fromTo(
    elem,
    { backgroundColor: "#2957E2"},
    {
      backgroundColor: "#eeeeee",
      color: "#2957E2",
      duration: 2,
      repeat: -1,
      yoyo: true,
      delay: 0,
      ease: "power1.inOut"
    }
  );
}else{
  gsap.fromTo(
    elem,
    { backgroundColor: "#eeeeee", color: "#2957E2"},
    {
      backgroundColor: "#2957E2",
      color: "#eeeeee",
      duration: 2,
      repeat: -1,
      yoyo: true,
      delay: 1,
      ease: "power1.inOut"
    }
  );
}
});

//각각 설정
// gsap.fromTo(".mail p:nth-child(1)",{
//   backgroundColor: "#2957E2",
//   color: "#eeeeee",
//   opacity: 0,
//   duration: 1
// },{
//     backgroundColor: "#eeeeee",
//   color: "#2957E2",
//   opacity: 1,
//   duration: 1,
//   repeat: -1,
//   yoyo: true,
//   ease: "step(1)",
//   scrollTrigger:{
//   trigger: "footer",
//   start: "top 50%",
//   toggleActions: "play none none none",
//   }
// }
// );

// gsap.fromTo(".mail p:nth-child(2)",{
//   backgroundColor: "#eeeeee",
//   color: "#2957E2",
//   opacity: 0,
//   duration: 1
// },{
//     backgroundColor: "#2957E2",
//   color: "#eeeeee",
//   opacity: 1,
//   duration: 1,
//   repeat: -1,
//   yoyo: true,
//   ease: "step(1)",
//   scrollTrigger:{
//   trigger: "footer",
//   start: "top 50%",
//   toggleActions: "play none none none",
//   }
// }
// );

// gsap.to(".mail > p",{
//   backgroundColor: (i)=>(i%2===0 ? "#2957E2" : "#eeeeee" ),
//   color: (i)=>(i%2==0 ? "#eeeeee" : "#2957E2"),
//   borderColor: (i)=>(i%2===0 ? "#2957E2" : "#eeeeee"),
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "power2.out",
//   scrollTrigger:{
//     trigger: "footer",
//     start: "top 50%",
//     toggleActions: "play none none none"
//   }
// });
})();