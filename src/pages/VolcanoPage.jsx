/* eslint-disable react/no-unknown-property */
// import { OrbitControls } from "@react-three/drei";
// import VolcanoCanvas from "../canvas/VolcanoCanvas";
import { useState } from 'react';
import Terminal from '../components/Terminal';

const VolcanoPage = () => {
  const [terminalTerminal, setTerminalState] = useState(true);

  return (
    <div>
      <div className="w-full h-screen absolute">{/* <PhaseCanvas /> */}</div>

      {/* <div className="relative  h-[97vh] bg-red">
        <WalkingCanvas />
      </div> */}

     {terminalTerminal && <Terminal setTerminalState={setTerminalState} />}
    </div>
  );
};

export default VolcanoPage;
