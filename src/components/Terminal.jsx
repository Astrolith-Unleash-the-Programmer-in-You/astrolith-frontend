import React, { useEffect, useState,useRef } from 'react'
import Draggable, {DraggableCore} from 'react-draggable'; 

export default function Terminal({setTerminalState}) {
    const [userName,setUserName] = useState('asthrolith');
    const [level,setLevel] = useState('level');
    const [scene,setScene] = useState('scene');

    const [minTerminal,setMinTerminal] = useState(false);
    const [terminalValue,setTerminalValue] = useState('');
    const [fullScreen,setFullScreen] = useState(false);
    const [position,setPosition] = useState({x: 0, y: 0});
    const termPosition = useRef();

    const handleDrag = ()=>{
        if (termPosition.current) {
                const { x, y } = termPosition.current.getBoundingClientRect();
                setPosition({ x, y });
        }
    }

    const closeTerminal = ()=>{
        setTerminalState(false);
    }

    const minimizeTerminal = ()=>{
        setMinTerminal(true);
        console.log("minimizeTerminal")
    };

    const expandTerminal = ()=>{
        setMinTerminal(false);
        console.log("expandTerminal")
    };

    const clearTerminal = ()=>{
        setTerminalValue('');
    };

    const submitCode = ()=>{console.log(terminalValue)};

  return (
    <section className='h-screen mt-0 overflow-hidden'>
    
        {
            !minTerminal &&   
            <Draggable
                defaultPosition={{x: 0, y: 0}}
                position={position}
                onDrag={handleDrag}
                >

                        <div ref={termPosition} className='absolute'>
                        <div className={` grid relative ${ !fullScreen?"container  w-[90vw] md:w-[60vw] h-[75vh md:h-[60vh]":"w-[97vw] md:w-[99%] h-[90vh] md:h-[92vh]"} bg-red-300 border-0 border-red-400 border-opacity-15 rounded-xl   overflow-hidden`}>
                            <div className='grid grid-cols-5 h-[9%] w-full bg-gray-800 absolute p-1.5'>
                                <div className='left-action flex gap-1 span'>
                                    <button onClick={closeTerminal} className='w-[14px] h-[14px] p-2 rounded-full bg-red-500 text-white relative' ><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xs'>X</span></button>
                                    <button onClick={minimizeTerminal}  className='w-[14px] h-[14px] p-2 rounded-full bg-yellow-500 text-white relative' ><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xs'>-</span></button>
                                    <button onClick={()=>setFullScreen(prev=>!prev)}  className='w-[14px] h-[14px] p-2 rounded-full bg-green-500 text-white relative' ><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xs'>++</span></button>
                                </div>
                                <div className="path gap-1 col-start-2 col-span-5 text-xs md:text-sm"> 
                                    <p className='flex gap-1'>
                                        <h4> {'>>>'}</h4>
                                        <h4>folder icon</h4>
                                        <h4>@{userName}</h4>--
                                        <h4>{level}</h4>--
                                        <h4>{scene}</h4>
                                    <Time/>
                                    </p> 
                                </div>
                            </div>
                            <textarea onChange={(e)=>setTerminalValue(e.target.value)} value={terminalValue} className='text-white cursor-text p-2 pt-10' name="terminal" id="terminal" cols="30" rows="40"></textarea>

                        </div>
                        <div className={`clear-submit m-auto relative ${!fullScreen?"w-[90%] md:w-[60%]mr-0":"w-[90%] md:w-full "} flex justify-end gap-1 mt-1`}>
                            <button onClick={clearTerminal} className='bg-red-500 border-2 rounded-lg border-red-500 p-2 '>Clear</button>
                            <button onClick={submitCode} className='bg-green-500 border-2 rounded-lg border-green-500 p-2'>Submit</button>
                        </div>
                        </div>  
                
            </Draggable>
                
        }
    {
      minTerminal&&  <button className='fixed bottom-2 right-2 h-16 w-16 rounded-full bg-orange-500' onClick={expandTerminal}>terminal</button>
    }
    </section>
  )
}




export const Time = ()=>{
    const [date,setDate] = useState(``);
    useEffect(()=>{
       const interval =  setInterval(()=>{
            const t = new Date().toISOString().slice(0, -5);
            setDate(t);
        },1000);
        clearInterval(()=>interval())
    },[date])
    return (
        <div className='relative'>{date}</div>
    )
}

//TODO: ADD REVELVANT ICONS