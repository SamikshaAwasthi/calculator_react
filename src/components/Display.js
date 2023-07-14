import React from 'react'
import './style/Display.css'

const Display = ({input,setInput,answer}) => {
    const onChangeinput =(e) =>{
        const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

        if(e.target.value === "" || re.test(e.target.value)){
            setInput(e.target.value)
        }
    };
    return (
    <>
     <div className="display">
        {answer === ""?(
            <>
            <input type='text'
            name='input'
            className='input'
            style={{padding:'29px'}}
            value={input}
            placeholder='0'
            maxLength={12}
            onChange={onChangeinput}
            autoComplete='off'            />
            </>
        ):(
    <>
        <input 
         type="text" 
         name='input'
         className='input'
         value={input}
         placeholder='0'
         maxLength={12}
         disabled
        />

        <input 
          type="text" 
          name='value'
          className='input'
          value={answer}
          disabled
        />
    </>
    )}
     </div>
    </>
   
  );
};

export default Display

