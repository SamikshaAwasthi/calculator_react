import React from 'react'
import './style/Buttons.css'
const buttons = ({inputhandler ,clearinput,backspace , changeplusminus,calculateans}) => {
    document.addEventListener('keydown',function(event){
        if(event.key === "Enter") {
            event.preventDefault();
            document.getElementById("equalbtn").click();
        }
    });
    return (
    <div className='show-btn'>
        <button className="btn exp" onClick={inputhandler}>
            ^
        </button>
        <button className="btn exp" onClick={inputhandler}>
          (
        </button>
        <button className="btn exp" onClick={inputhandler}>
          )
      </button>
      <button className="btn exp" onClick={inputhandler}>
        √
      </button>
      <button className="btn exp" onClick={inputhandler}>
        x<sup>2</sup>
      </button>

      <button className="btn clr" onClick={clearinput}>
        AC
      </button>
      <button className="btn clr" onClick={backspace}>
      ⌫
      </button>
      <button className="btn exp" onClick={inputhandler}>
       log
      </button>
      <button className="btn exp" onClick={inputhandler}>
      ÷
      </button>
      <button className="btn exp" onClick={inputhandler}>
      %
      </button>
      <button className="btn " onClick={inputhandler}>
       7
      </button>
      <button className="btn " onClick={inputhandler}>
        8
      </button>
      <button className="btn " onClick={inputhandler}>
       9
      </button>
      <button className="btn exp" onClick={inputhandler}>
      x
      </button>
      <button className="btn exp" onClick={inputhandler}>
      x<sup>3</sup>
      </button>
      <button className="btn " onClick={inputhandler}>
      4
      </button>
      <button className="btn " onClick={inputhandler}>
      5
      </button>
      <button className="btn " onClick={inputhandler}>
      6
      </button>
      <button className="btn exp" onClick={inputhandler}>
        -
      </button>
      <button className="btn exp" onClick={inputhandler}>
        <sup>3</sup>√
      </button>
      <button className="btn " onClick={inputhandler}>
        1
      </button>
      <button className="btn " onClick={inputhandler}>
        2
      </button>
      <button className="btn " onClick={inputhandler}>
        3
      </button>
      <button className="btn exp" onClick={inputhandler}>
        +
      </button>
      <button className="btn exp" onClick={inputhandler}>
        !
      </button>
      <button className="btn exp" onClick={changeplusminus}>
        ±
      </button>
      <button className="btn " onClick={inputhandler}>
        0
      </button>
      <button className="btn exp" onClick={inputhandler}>
        .
      </button>
      <button className="btn exp equal" id="equalbtn" onClick={calculateans}>
        =
      </button>
    </div>
  )
}

export default buttons;
