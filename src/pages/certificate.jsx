import React, { useEffect,useState } from 'react'
import { GameQuestionAndTestCases } from '../lib/astrolith5/gameQuestionAndTestCases';
import { level1 } from "../data/gamescene-1";
import { useAuth } from '../contexts/auth';
import { CONSTANTS } from '../constants';
import { connectToAstrolith } from '../lib/astrolith5/connection';

export default function Certificate() {
  const {connections,web5} = useAuth()
  useEffect(() =>{
    (async function fn(){
        await connections();
      })();
    },[]);

  const qtc = new GameQuestionAndTestCases(web5,"http://astrolith.com","http://astrolith.com/schemas/game-question-and-test-cases",CONSTANTS.PROTOCOLDID);
  console.log("certificate",web5)

  const createDoc = async ()=>{
    const doc = await qtc.createGameQTCs(level1)
    console.log("createDoc",doc)
  }

  const fetchDoc = async()=>{
    const doc = await qtc.getAllQTCs()
    console.log("fetchdoc",doc)
  }

  return (
    <div>
      <button className='px-5  py-1 rounded-3xl border-2' onClick={createDoc}>create doc</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={fetchDoc}>fetch doc</button>
      {/* <button>create doc</button> */}
    </div>
  )
}
