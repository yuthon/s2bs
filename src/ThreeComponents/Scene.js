import { useRef, useEffect, useState } from 'react';

import { Html, useProgress } from '@react-three/drei'

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
        <h2>3Dモデルをロード中…</h2>
        <h2>{Math.floor(progress * 10) /10}％</h2>
        <h4>※この処理には時間がかかる場合があります</h4>
        <h4>※モデルのロード中はページ内の動作が重くなることがあります</h4>
      </div>
    </Html>
  )
}

const Scene = (props) => {
  
  // キャラクターの操作
  const [isZoomEnabled, setZoomState] = useState(false);
  const [isRotateEnabled, setRotateState] = useState(false);

  const coverRef = useRef();
  // キャラクターの操作が有効化されているとき、キャンバスのカバーをなくす
  useEffect(()=>{
    if (isZoomEnabled || isRotateEnabled) {
      coverRef.current.style.display="none"
    } else {
      coverRef.current.style.display="block"
    }
  })
  
  return (
    <>
    <CharacterControlModal 
      isRotateEnabled={isRotateEnabled}
      isZoomEnabled={isZoomEnabled}
      setZoomState={setZoomState}
      setRotateState={setRotateState}
    />
    <button type="button" id="character-btn" className="btn btn-dark font-type1 text-nowrap" data-bs-toggle="modal" data-bs-target="#characterTypeModal">
      キャラクターの設定
    </button>
    <button type="button" id="control-btn" className="btn btn-dark font-type1 text-nowrap" data-bs-toggle="modal" data-bs-target="#characterControlModal">
      <p className="mb-1">キャラクターの</p>
      <p className="my-0">回転 / ズーム</p>
    </button>
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
      </Suspense>
    </Canvas>
    </>
  )
}

export default Scene;