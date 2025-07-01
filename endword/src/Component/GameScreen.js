import { useEffect, useRef, useState } from "react";
import {dictionaty} from "../api/dictionaty.js";

const GameScreen = ({startWord}) => {
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const [words,setWords] = useState([startWord]);
  const [input,setInput] = useState('');
  const [loading,setLoading] = useState(false);

//woeds에 배열이 변경될때 마다 bottomRef 객체로 이동
  useEffect(()=>{
    if( bottomRef.current ){
      bottomRef.current.scrollIntoView({behavior:"smooth"});
    }
  },[words]);

  const addWord = (text)=>{
    setWords((prev)=>{return [...prev,text]});
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
//사용자에게 값을 입력받으면 공백을 제거
    const userWord = input.trim();
    if( !userWord ) return;
//마지막 글자와 같은지 비교
// words(li의 마지막)의 마지막 단어의 마지막 글자 === userWord의 첫번째 글자인지 확인 
const lastWord = words[words.length-1]; //마지막 단어
if( userWord[0] !== lastWord[lastWord.length-1] ){ //마지막 단어의 마지막 글자
  alert(`${lastWord[lastWord.length-1]}로 시작해야 합니다`);
  setInput('');
  return;
}
//사용자가 입력한 단어 먼저 추가
    addWord(userWord);
    setInput('');
    setLoading(true);
    
//1초 후에 API를 호출(비동기처리)
    setTimeout(async()=>{
      const lastChar = userWord[userWord.length-1];
      const word = await dictionaty(lastChar); //마지막 글자
      if( word ){
        addWord(word);
        } else{
          alert("MARI가 단어를 찾지 못했습니다");
        }
        setLoading(false);
        inputRef.current.focus();
      },1000)
    }
  return (
    <div className="game-screen">
      <h2>Hello, I'm MARI</h2>
      <ul className="word-list">
        {
          words.map((item,idx)=>{
            return <li key={idx}><span>💡</span><span>{item}</span></li>
          })
        }
{/* ref가 quriselector역할 */}
        <li ref={bottomRef}></li>
      </ul>

{/* ref가 quriselector역할 */}
      {/* <div ref={bottomRef}></div> */}

      {
        loading && <p className="loading">MARI가 단어를 고민중입니다...</p>
      }
      <form className="game-form" onSubmit={handleSubmit}>
        <input 
          type="text"
          ref={inputRef}
          value={input}
    //input에 입력되는 값 가져오기
          onChange={(e)=>{setInput(e.target.value)}}
          placeholder="단어 입력"
        />
        <button type="submit">✈</button>
      </form>
    </div>
  );
};

export default GameScreen;