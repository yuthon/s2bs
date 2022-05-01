import { FC, useRef, useEffect, useState } from 'react';

import { useProgress } from '@react-three/drei'
import { Text } from '../languages/Text';

import CharacterControlModal from '../CharacterControlModal';


import Model from './Model';
import Orbit from './Orbit';

import { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

type SceneProps = {
  headGear: string,
  clothesGear: string,
  shoesGear: string,
  characterType: string,
  skinColor: string,
  eyeColor: string,
  hairStyle: string,
  bottoms: string,
  teamColor: string,
}

const Scene: FC<SceneProps> = ({ headGear, clothesGear, shoesGear, characterType, skinColor, eyeColor, hairStyle, bottoms, teamColor }) => {
  
  const { progress } = useProgress()

  let loader;

  // モデルのロード中
  if (progress > 0 && progress < 100) {
    loader = (
      <div className="font-type2" id="loader-content">
        <h2><Text tid="loaderText1"/></h2>
        <h2>{Math.floor(progress * 10) /10}％</h2>
        <h4><Text tid="loaderText2"/></h4>
        <h4><Text tid="loaderText3"/></h4>
      </div> 
    )
  }

  // キャラクターの操作
  const [isZoomEnabled, setZoomState] = useState<boolean>(false);
  const [isRotateEnabled, setRotateState] = useState<boolean>(false);
  // モデルの表示/非表示
  const [isModelDisplayed, toggleModelDisplay] = useState<boolean>(false);

  const coverRef = useRef<HTMLDivElement>(null!);
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
        headGear={headGear}
        clothesGear={clothesGear}
        shoesGear={shoesGear}
        characterType={characterType}
        skinColor={skinColor}
        eyeColor={eyeColor}
        hairStyle={hairStyle}
        bottoms={bottoms}
        teamColor={teamColor}
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
    {loader}
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
        isZoomEnabled={isZoomEnabled}
        isRotateEnabled={isRotateEnabled}
      />
      <Suspense fallback={null}>
        {model}
      </Suspense>
    </Canvas>
    </>
  )
}

export default Scene;