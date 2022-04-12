import { useRef, useEffect, useState } from 'react';

import { Html, useProgress } from '@react-three/drei'
import { Text } from '../languages/Text';

import CharacterControlModal from '../CharacterControlModal';


import Model from './Model';
import Orbit from './Orbit';

import { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });



const Loader= () => {
  const { progress } = useProgress()
  return (
    <Html center zIndexRange={[5, 0]}>
      <div className="font-type2" id="loader-content">
        <h2><Text tid="loaderText1"/></h2>
        <h2>{Math.floor(progress * 10) /10}％</h2>
        <h4><Text tid="loaderText2"/></h4>
        <h4><Text tid="loaderText3"/></h4>
      </div>
    </Html>
  )
}

const Scene = (props) => {
  
  // キャラクターの操作
  const [isZoomEnabled, setZoomState] = useState(false);
  const [isRotateEnabled, setRotateState] = useState(false);
  // モデルの表示/非表示
  const [isModelDisplayed, toggleModelDisplay] = useState(false);

  const coverRef = useRef();
  // キャラクターの操作が有効化されているとき、キャンバスのカバーをなくす
  useEffect(()=>{
    if (isZoomEnabled || isRotateEnabled) {
      coverRef.current.style.display="none"
    } else {
      coverRef.current.style.display="block"
    }
  })
  
  let buttons;

  if (isModelDisplayed) {
    buttons = (
      <div className="row m-0 font-type2" id="btn-row">
        <div className="col-4 px-0">
          <button type="button" id="hideModel-btn" className="btn btn-dark" onClick={()=>{toggleModelDisplay(false)}}>
          <Text tid="sceneText1"/>
          </button>
        </div>
        <div className="col-4 px-0">
          <button type="button" id="character-btn" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#characterTypeModal">
          <Text tid="sceneText2"/>
          </button>
        </div>
        <div className="col-4 px-0">
          <button type="button" id="control-btn" className="btn btn-dark text-nowrap" data-bs-toggle="modal" data-bs-target="#characterControlModal">
            <p className="mb-1"><Text tid="sceneText3"/></p>
            <p className="my-0"><Text tid="sceneText4"/></p>
          </button>
        </div>
      </div>
    )
  } else {
    buttons = (
      <div className="font-type2" id="displayBtn-section">
      <button type="button" className="btn btn-lg btn-dark text-nowrap" onClick={()=>{toggleModelDisplay(true)}}>
      <Text tid="sceneText5"/>
      </button>
      <h4 id="display-warning"><Text tid="sceneText6"/></h4>
      </div>
    )
  }

  let model;

  if (isModelDisplayed) {
    model = 
      <Model
        headGear={props.headGear}
        clothesGear={props.clothesGear}
        shoesGear={props.shoesGear}
        characterType={props.characterType}
        skinColor={props.skinColor}
        eyeColor={props.eyeColor}
        hairStyle={props.hairStyle}
        bottoms={props.bottoms}
        teamColor={props.teamColor}
      />
  };

  return (
    <>
    <CharacterControlModal 
      isRotateEnabled={isRotateEnabled}
      isZoomEnabled={isZoomEnabled}
      setZoomState={setZoomState}
      setRotateState={setRotateState}
    />
    {buttons}
    <div ref={coverRef} id="canvas-cover"></div>
    <Canvas
      style={{ background: '#f0f0e0' }}
      camera={{ position: [0, 9, 13] }}
    >
      <ambientLight
        color={0xffffff}
        intensity={0.8} />
      <directionalLight
        color={0xffffff}
        intensity={0.6} />
      <pointLight
        position={[0, 11, 20]}
        intensity={0.2} />
      <pointLight
        position={[0, 4, 12]}
        intensity={0.6} />
      <pointLight
        position={[0, 4, -12]}
        intensity={0.6} />
      <pointLight
        position={[0, 11, -20]}
        intensity={0.3} />
      <Orbit 
        isZoomEnabled={props.ZoomEnabled}
        isRotateEnabled={props.RotateEnabled}
      />
      <Suspense fallback={<Loader />}>
        {model}
      </Suspense>
    </Canvas>
    </>
  )
}

export default Scene;