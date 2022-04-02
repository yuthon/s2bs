import { useFrame, useThree, extend, applyProps } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

const Orbit = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls 
      ref={controls}
      args={[camera, gl.domElement]}
      target={[0, 6, 0]}
      enablePan={false}
      enableZoom={props.isZoomEnabled}
      enableRotate={props.isRotateEnabled}
    />
  );
};

export default Orbit;