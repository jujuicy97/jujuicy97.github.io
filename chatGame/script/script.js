
const $btn = document.querySelector("#input-box>button");
const $main = document.querySelector("main");
const $section = document.querySelector("section");
const $start = document.querySelector("#start");
const $bottomChat = document.querySelector("#bottomChat");
const $chatAll = document.querySelector("#chat-all");
let lastWord = "";

//CLICK!을 클릭하면 2페이지로 넘어가기
$btn.addEventListener("click",()=>{
  const startWord = $start.value.trim();
  if(startWord === ""){
      alert("낱말을 입력해주세요");
      return;
  }
  lastWord = startWord; //시작단어를 이전단어로 저장
  $main.style.display = "none";
  $section.style.display = "block";

//2페이지로 넘어가서 작성한 단어 띄우기

    //user 메시지 생성
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("msg");
    msgDiv.textContent = startWord;

    userDiv.appendChild(msgDiv);
    $chatAll.appendChild(userDiv);
});

//엔터키를 누르면 2페이지로 넘어가기
$start.addEventListener("keydown",(e)=>{
  if(e.key === "Enter"){
    const startWord = $start.value.trim();
    if(startWord === ""){
      alert("낱말을 입력해주세요");
      return;
    }
      lastWord = startWord;  //시작단어를 이전단어로 저장
      $main.style.display = "none";
      $section.style.display = "block";

//2페이지로 넘어가서 작성한 단어 띄우기

    //user 메시지 생성
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("msg");
    msgDiv.textContent = startWord;

    userDiv.appendChild(msgDiv);
    $chatAll.appendChild(userDiv);
    $chatAll.scrollTop = $chatAll.scrollHeight;
  }
});

//하단 채팅창에 단어를 입력하면 새 user창과 작성한 단어 생성

//bottomCha에서 엔터를 누를 때
$bottomChat.addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
      const msg = $bottomChat.value.trim();
    if(msg === ""){
      alert("낱말을 입력해주세요");
      return;
    }

    //끝말잇기 규칙 추가
    const last = lastWord[lastWord.length -1]; //마지막 글자
    const first = msg[0]; //user가 작성한 첫글자
    //올바르게 입력되었는지 체크
    if(last !== first){
      alert(`실패! ${last}로 시작하는 낱말을 작성하세요.`)
      $bottomChat.value = "";
      return;
    }
    //성공하면,
    lastWord = msg;  //성공하면 현재 단어를 다음 단어로 저장
    //이미지 나타내기
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");  // user 메시지 클래스 추가

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("msg");
    msgDiv.textContent = msg;

    userDiv.appendChild(msgDiv);
    $chatAll.appendChild(userDiv);
    $chatAll.scrollTop = $chatAll.scrollHeight;

    $bottomChat.value = "";  // 입력창 비우기
  }
});

