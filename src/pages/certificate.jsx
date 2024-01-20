import React, { useEffect,useState } from 'react'
//did:dht
import { DidDhtMethod } from '@web5/dids'
import { GameQuestionAndTestCases } from '../lib/astrolith5/gameQuestionAndTestCases';
import { PlayerProfile } from '../lib/astrolith5/playerProfile';
import { Certificates } from '../lib/astrolith5/certificates';
import { level1 , arrayManipulationLevel} from "../data/gamescene-1";
import { useAuth } from '../contexts/auth';
import { CONSTANTS } from '../constants';
import { connectToAstrolith } from '../lib/astrolith5/connection';
import {CertificateImage} from "../pages/test";

export default function Certificate() {
  const [cert,setCert]= useState('');
  
  const [imageurl,setImageUrl]= useState('');
  const [show,setShow] = useState(false);
  const [gen,setGen] = useState(false);
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [userName,setUserName] = useState('');
  const [template,setTemplate] = useState('');

  
  const {connections,web5,protocolReady,userDID} = useAuth()
  useEffect(() =>{
    (async function fn(){
        await connections();
        console.log("started connection")
        //Creates a DID using the DHT method and publishes the DID Document to the DHT
        const didDht = await DidDhtMethod.create({ publish: true });
console.log("started connection...")
        //DID and its associated data which can be exported and used in different contexts/apps
        const portableDID = JSON.stringify(didDht);

        //DID string
        const did = didDht.did;

        //DID Document
        const didDocument = JSON.stringify(didDht.document);

        //Cryptographic keys associated with DID
        const keys = JSON.stringify(didDht.keySet);

        //Primary form of a DID. more info: https://www.w3.org/TR/did-core/#dfn-canonicalid
        const canonicalId = didDht.canonicalId;


        console.log("diddht methosed cerateds",didDht)
        console.log(portableDID)
      })();
    },[]);

  const qtc = new GameQuestionAndTestCases(web5,"http://astrolith.com","http://astrolith.com/schemas/game-question-and-test-cases",CONSTANTS.PROTOCOLDID,protocolReady,userDID);
  console.log("certificate",web5) 

  const certificates = new Certificates(web5,"http://astrolith.com","http://astrolith.com/schemas/certificates",CONSTANTS.PROTOCOLDID);

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
  const fetchDocLevel = async()=>{
    const doc = await qtc.getAllQTCLevel("01")
    console.log("fetchdoc leverl",doc)
  }
  const deleteDoc = async()=>{
    const doc = await qtc.deleteGameQTCs("bafyreidwurvbar2l45wogna53k4tsrzllf2ieqvpgbveiot3e4o2yowati")
    console.log("fetchdoc leverl",doc)
  }
  const readProfile = async()=>{
    const doc = await pl.getProfiles()
    console.log("profiles",doc)
  }
  const updateProfile = async()=>{
    const doc = await pl.updateProfile({
      userName:"0xSanta247",
      lastName:"optional@lastnameParadeybody"

    },"bafyreibdle6eldxdn7ezi5jl2mu2ffhlmyqozqoatzvvx6lviibthjfogm")
    console.log("profiles",doc)
  }
  const deleteProfile = async()=>{
    const doc = await pl.deleteProfile("bafyreihqkfheolbsxg5wxron5q7n4dorpq24yy6f62o2dg3aboj4f37sze")
    console.log("profiles",doc)
  }

  const handleCert = async(e)=>{
    e.preventDefault();
    setCert({firstName,lastName,userName,userDID,level:1,stage:1,holder:"Certificate of Excellence, Beginner JS (Variables,Arrays,Objects"});
    console.log("handleCert",e);

    // const i = await genCert();

    setGen((prev)=>!prev)
    console.log("data from cert gen",i);
  }

  const handleImage = async(e)=>{
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    let ct = `
      <div>
          <h2>Certificates</h2>
          <h2>First Name : ${firstName}</h2>
          <h2>Last Name : ${lastName}</h2>
          <h2>User Name : ${userName}</h2>
          <img src="${url}"/>
            <h2>this is to certify that surath is a qualified developer</h2>
      </div>
      `
    setImageUrl(url);
    setShow((prev)=>!prev)
    setTemplate(ct)

    setCert({firstName,lastName,userName,userDID,level:1,stage:1,holder:"Certificate of Excellence, Beginner JS (Variables,Arrays,Objects"});
    console.log("handleImage",cert)
  }

const persistCertification = async(cert)=>{
  console.log("persistCertification",cert)
  if(!Boolean(cert)) return;
  console.log("handleCertification was not called",cert)
  await certificates.issueCertificate(cert)

}

  return (
    <div>
      <button className='px-5  py-1 rounded-3xl border-2' onClick={createDoc}>create game</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={fetchDoc}>fetch game</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={fetchDocLevel}>fetch game level</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={deleteDoc}>delete game</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={creProfile}>create profile</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={readProfile}>read from user profile</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={updateProfile}>update user profile</button>
      <button className='px-5  py-1 rounded-3xl border-2'  onClick={deleteProfile}>delete user profile</button>

      <form id='cert' onSubmit={(e)=>handleCert(e)}>
        <input type="text" className='px-5  py-1 rounded-xl border-2 mt-5'  name="firstName" id="firstName" onChange={(e)=>setFirstName(e.target.value)} />
        <input type="text" className='px-5  py-1 rounded-xl border-2' name="lastName" id="lastName"  onChange={(e)=>setLastName(e.target.value)}/>
        <input type="text" className='px-5  py-1 rounded-xl border-2' name="userName" id="userName"  onChange={(e)=>setUserName(e.target.value)}/>
        <input type="file" name="test" id="test" onChange={(e)=>handleImage(e)} />
        <input className='px-5  py-1 rounded-3xl border-2' type="submit" value="submit" />
      </form>
      {
        show && <img src={imageurl}/>
      }
      {
        // gen && 
      <CertificateImage url={imageurl} persistCertification={persistCertification} certificationDetails={cert}/>
      }
      {/* <button>create doc</button> */}
    </div>
  )
}
