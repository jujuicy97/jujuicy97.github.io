//디바이스별로 js를 따로 가져가려고 이 작업을 하는 것임

let currentScript = ''; //**브라우저에서 현재 읽고 있는 스크립트
//2. 창 사이즈별 js파일 가져오기
const checkDevice = ()=>{
  const device = window.innerWidth <= 768 ? "mobile" : "pc";
  if(currentScript === device){
    return;
  }
  //**이전 스크립트 제거
  const $prev = document.querySelector(`script[data-script]`);
  if($prev){
    $prev.remove();
    location.reload();
  }
  //html에서 js불러오기 위한 태그 요소 생성
  const script = document.createElement("script");
  script.src = `./script/${device}.js`;
  //** ↓ 이전스크립트 제거하기 위한 작업(mobile이 재생되면 pc는 삭제)
  script.setAttribute("data-script", "true");
  document.body.appendChild(script);
  //**현재 상태를 업데이트
  currentScript = device;
}

//1. 윈도우에 로드 + 사이즈별 이벤트 생성하기
window.addEventListener("load",()=>{
  // console.log("로드됨");
  checkDevice();
  //↓ 여기서 한 번만 설정해주면 pc와 mobile 따로 설정할 필요없음.
  gsap.registerPlugin(ScrollTrigger);
});
window.addEventListener("resize",checkDevice);