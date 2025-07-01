
//async(비동기식 사용 선언)
export const dictionaty = async (startChar) => {
  const API_KEY = "3F4C1403873E63C07132D8702D836612";
  const base = "https://opendict.korean.go.kr/api/search";
  const params = new URLSearchParams({
    key: API_KEY,
    q: startChar,
    req_type: "json",
    part: "word",
    advanced: "y",
    sort: "popular",
    num: "20",
    pos: "1",        // 명사
    method: "start", // 시작 글자
    target: "1",      // 표제어
    type1: "word"
  });

  const originURL = `${base}?${params.toString()}`;
  console.log(originURL);
  //로컬에서 사용할 때는 주석처리된 링크로 사용
  const proxyURL = `https://corsproxy.io/?${encodeURIComponent(originURL)}`;
  // const proxyURL = originURL;
  try{
    const res = await fetch(proxyURL);
    if( !res.ok ){
      throw new Error( "API 응답 오류",res.status );
    }
    const data = await res.json(); 
    //조건 : -(하이픈)이 없고 2글자 이상
    const filterData = data.channel.item.filter((item)=>{
      return !item.word.includes('-') && item.word.length >= 2;
    });
    const word = filterData[0].word;
    return word;
  } catch(err){
    console.log("API 오류",err);
    return null;
  }
};

// 비동기식 사용때는 기다리라는 명령인 then()이 함께 감. 
// 비동기식은 그냥 던지기만 하고 확인 안해도됨. 알아서 오류 알려줌.
// const res =  fetch(proxyURL).then();
