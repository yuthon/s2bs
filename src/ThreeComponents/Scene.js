import { Html, useProgress } from '@react-three/drei'

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
  return (
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
        isZoomEnabled={props.isZoomEnabled}
        isRotateEnabled={props.isRotateEnabled}
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
  )
}

export default Scene;