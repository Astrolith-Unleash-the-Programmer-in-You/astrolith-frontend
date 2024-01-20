import React from 'react'
import {useGame } from '../contexts/Game';
import VolcanoPage from './VolcanoPage';
import { logo,settings} from "../assets";

export default function Game() {
    const {showLevels,currentLevel,setCurrentLevel,setShowLevels} = useGame();
    const levels = ['level 1', 'level 2', 'level 3', 'level 4', 'level 5', 'level 6', 'level 7', 'level 8', 'level 9', 'level 10']; //TODO: get all levels
    const lvl = levels.map((item)=>item.replace(" ",""))
  return (
    <div>
        {
            showLevels && <div className="y-6 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 flex flex-col items-center">
                <div className="flex gap-3">
                    <img src={logo} alt="logo"  className="w-10 md:w-16"/>
                    <h2 className="font-worksans font-bold text-6xl md:text-8xl uppercase">Levels</h2>
                </div>
                <ul className="p-5 border-dotted border border-purple-500/85 mt-8 rounded-sm w-[60vw] space-y-3  max-h-[60vh]  overflow-y-auto py-9">
                    {
                        levels.map((level,index)=><li className="border border-orange-400">
                        <button onClick={()=>{setCurrentLevel(lvl[index]);setShowLevels(prev=>!prev);}} className="p-5 w-full text-lg font-poppins font-semibold uppercase text-purple-300 ">level {index + 1}</button>
                    </li>
                    )
                    } 
                </ul>
            </div>

		}
        {/* Render Game screen */}
        {
            currentLevel === lvl[0] && <VolcanoPage/>
        }
        {
            currentLevel === lvl[1] && <div>Comming Soon</div>
        }


    </div>
  )
}
