
import './App.css';

import {useState} from 'react';

function App() {

  const [num , updateNum] = useState(0);

  function minus() {

    if(num === 0)
    {
      alert("Can't go beyond 0!");
      return 0;
    }

    let x = num -1;
    if(x %10 ===0){
      changeBac();
    }

    return x;
  }

  function plus() {

    if(num === 99)
    {
      alert("Can't go beyond 99!");
      return num;
    }

    let x = num+1

    if(x %10 ===0){
      changeBac();
    }
    
    return x;

  }

  function changeBac()
  {
    let color1 = "#";
    let color2 = "#";
    let letter = "1234567890abcd";

    for(let i=0;i<6;i++)
    {
      color1 += letter.charAt(Math.random()*6);
    }

    for(let i=0;i<6;i++)
      {
        color2 += letter.charAt(Math.random()*6);
      }

    document.querySelector('.parent').style.backgroundColor = color1;
    document.querySelector('.child').style.border = "2px solid" +color2;
  }

  return (
    <div className='parent'>

      <div className='child'>

        <button id='minus' onClick={(e)=>{
          let x = minus();
          updateNum(x);

        }}>-</button>
        <h2 id='text'>{num}</h2>

        <button id='plus' onClick={(e)=>{
          let x = plus();
          updateNum(x);

        }}>+</button>

      </div>

      
    </div>
  );
}

export default App;
