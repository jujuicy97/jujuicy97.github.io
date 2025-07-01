import { useState } from "react";

const StartScreen = ({onStart}) => {
// 1-1. 저장하기 위해 필요    
    const [input,setInput] = useState('');
// 1-7
    const handleSubmit = (event)=>{
      event.preventDefault();
      if(input.trim()){
        onStart(input);
    }else{
      alert("시작 단어를 입력하세요");
    }
  };

  return (
    <div className="start-screen">
      <h1>MARI<br />Chain Game</h1>
{/* 1-3. 변경은 form에서 일어나기 때문에, onSubmit으로 전달 받음 */}
      <form className="input-form" onSubmit={handleSubmit}>
        <h2>시작 단어를 입력하세요</h2>
{/* 1-2. input값을 변경하는 속성 만들기(onChange)(= startScreen의 input값을 읽어오기) */}
        <input onChange={(e) => setInput(e.target.value)}/>
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
};

export default StartScreen;