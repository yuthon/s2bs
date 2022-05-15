import { ReactThreeFiber, useFrame, useThree, extend } from '@react-three/fiber';
import { useRef, FC } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
extend({ OrbitControls });

interface OrbitProps {
  isZoomEnabled: boolean;
  isRotateEnabled: boolean;
}

// インターフェイスIntrinsicElementsにorbitControls の定義を追加
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>
    }
  }
}

const Orbit: FC<OrbitProps> = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef<OrbitControls>(null!);
  useFrame(() => controls.current?.update());
  const target: THREE.Vector3 = new THREE.Vector3(0,6,0);
  return (
    <orbitControls 
      ref={controls}
      args={[camera, gl.domElement]}
      target={target}
      enablePan={false}
      enableZoom={props.isZoomEnabled}
      enableRotate={props.isRotateEnabled}
    />
  );
};

export default Orbit;