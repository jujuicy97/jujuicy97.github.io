import { useState } from "react";
import StartScreen from "./Component/StartScreen";
import GameScreen from "./Component/GameScreen";
import './App.scss';

const App = () => {
    const [started,setStarted] = useState(false);
    const [startWord,setStartWord] = useState("");

//app.js(부모) -> startScreen.js(자식)에게 '함수'로 전달
    const handleStart = (word)=>{
// 1-4. App의 startWord(부모)에 input값이 저장(=전달)
      setStartWord(word);
// 1-5. start값이 true값으로 변경
      setStarted(true);
    };


  return (

    <div className="app">
      {
        !started ? (
          <StartScreen onStart={handleStart} />
        ):(
// 1-6. App의 startWord값을 gameScreen에 전달
          <GameScreen startWord={startWord} />
        )
      }
    </div>
  );
};

export default App;