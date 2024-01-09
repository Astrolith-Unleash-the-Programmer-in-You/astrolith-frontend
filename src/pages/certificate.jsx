import React, { useEffect,useState } from 'react'
import { GameQuestionAndTestCases } from '../lib/astrolith5/gameQuestionAndTestCases';
import { PlayerProfile } from '../lib/astrolith5/playerProfile';
import { level1 } from "../data/gamescene-1";
import { useAuth } from '../contexts/auth';
import { CONSTANTS } from '../constants';
import { connectToAstrolith } from '../lib/astrolith5/connection';

export default function Certificate() {
  const {connections,web5,protocolReady,userDID} = useAuth()
  useEffect(() =>{
    (async function fn(){
        await connections();
      })();
    },[]);

  const qtc = new GameQuestionAndTestCases(web5,"http://astrolith.com","http://astrolith.com/schemas/game-question-and-test-cases",CONSTANTS.PROTOCOLDID,protocolReady,userDID);
  console.log("certificate",web5)


  const pl = new PlayerProfile(web5,"http://astrolith.com","http://astrolith.com/schemas/profile",CONSTANTS.PROTOCOLDID);

  const creProfile = async()=>{
    const pf = await pl.createProfile({
      userName:"0xSanta",
      avatar:["file:object from image.png"],
      did:userDID,
      email:"optional@email.com",
      firstName:"optional@firstname",
      lastName:"optional@lastname"

    },userDID,protocolReady)
    console.log(pf,"player profile created",pf)
  }
  const createDoc = async ()=>{
    const doc = await qtc.createGameQTCs(level1)
    console.log("createDoc",doc)
  }

  const fetchDoc = async()=>{
    const doc = await qtc.getAllQTCs()
    console.log("fetchdoc",doc)
  }
  const readProfile = async()=>{
    const doc = await pl.getProfiles()
    console.log("profiles",doc)
  }

  return (
    <div>
      <button className='px-5  py-1 rounded-3xl border-2' onClick={createDoc}>create doc</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={fetchDoc}>fetch doc</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={creProfile}>create profiel</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={readProfile}>read from user profiel</button>
      {/* <button>create doc</button> */}
    </div>
  )
}
