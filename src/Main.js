// アビリティ関連のコンポーネント
import AbilityComponents from './AbilityComponents';

//ギア選択のモーダル
import HeadGearModal from './HeadComponents/HeadGearModal';
import ClothesGearModal from './ClothesComponents/ClothesGearModal';
import ShoesGearModal from './ShoesComponents/ShoesGearModal';
//キャラクターの詳細設定モーダル
import CharacterTypeModal from './CharacterSettingComponents/CharacterTypeModal';
import SkinColorModal from './CharacterSettingComponents/SkinColorModal';
import IFMLHairStyleModal from './CharacterSettingComponents/IFMLHairStyleModal';
import IMLHairStyleModal from './CharacterSettingComponents/IMLHairStyleModal';
import OFMLHairStyleModal from './CharacterSettingComponents/OFMLHairStyleModal';
import OMLHairStyleModal from './CharacterSettingComponents/OMLHairStyleModal';
import MLBottomsModal from './CharacterSettingComponents/MLBottomsModal';
import FMLBottomsModal from './CharacterSettingComponents/FMLBottomsModal';
//初期表示用の画像
import WakabaIkaT from './images/gear/Clt_FST001.png';
import Canvas_White from './images/gear/Shs_FST000.png';
import Headband_White from './images/gear/Hed_FST000.png';
import Jr_0 from './images/weapon/Splattershot Jr.png';

import { useState } from 'react';
// 3dモデル
import Model from './ThreeComponents/Model';
import Orbit from './ThreeComponents/Orbit';
import React, { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

// const HeadGearModal = React.lazy(() => import('./HeadComponents/HeadGearModal'))
// const ClothesGearModal = React.lazy(() => import('./ClothesComponents/ClothesGearModal'))
// const ShoesGearModal = React.lazy(() => import('./ShoesComponents/ShoesGearModal'))

const Main = () => {
  //ブキの名前とその他の情報を管理
  const [weaponStatus, passWeaponStatus] = useState({name:"わかばシューター", sub:"SplatBomb", special:"Armor", sp:180, weight:"light", path:Jr_0});
  //選択されたアタマの画像のパスを管理
  const [headImagePath, setHeadImagePath] = useState(Headband_White);
  //選択されたフクの画像のパスを管理
  const [clothesImagePath, setClothesImagePath] = useState(WakabaIkaT);
  //選択されたクツの画像のパスを管理
  const [shoesImagePath, setShoesImagePath] = useState(Canvas_White);
  //選択されたアタマの名前を管理
  const [headGear, setHeadGear] = useState("HB_Headband_White");
  //選択されたフクの名前を管理
  const [clothesGear, setClothesGear] = useState("WakabaIkaT");
  //選択されたクツの名前を管理
  const [shoesGear, setShoesGear] = useState("Canvas_White");
  //キャラ設定モーダルを管理
  const [characterType, passCharacterType] = useState("IML");
  const [skinColor, passSkinColor] = useState("#ffd1cc");
  const [hairStyle, passHairStyle] = useState("Hair_0");
  const [eyeColor, passEyeColor] = useState("#1617ff");
  const [isMLBottomsModalOpen, controlMLBottomsModal] = useState(false);
  const [isFMLBottomsModalOpen, controlFMLBottomsModal] = useState(false);
  const [bottoms, passBottoms] = useState("Btm_0");
  const [teamColor, passTeamColor] = useState("ffb23d");
  
  return(
    <div className="container">
      <Suspense fallback={null}>
        <HeadGearModal
          passChosenGear={setHeadGear}
          passImagePath={setHeadImagePath}
        />
      </Suspense>
      <Suspense fallback={null}>
      <ClothesGearModal
        passChosenGear={setClothesGear}
        passImagePath={setClothesImagePath}
      />
      </Suspense>
      <Suspense fallback={null}>
      <ShoesGearModal
        passChosenGear={setShoesGear}
        passImagePath={setShoesImagePath}
      />
      </Suspense>
      <CharacterTypeModal
        passCharacterType={passCharacterType}
        characterType={characterType}
      />
      <SkinColorModal
        passSkinColor={passSkinColor}
        characterType={characterType}
      />
      <IFMLHairStyleModal
        passHairStyle={passHairStyle}
      />
      <IMLHairStyleModal
        passHairStyle={passHairStyle}
      />
      <OFMLHairStyleModal
        passHairStyle={passHairStyle}
      />
      <OMLHairStyleModal
        passHairStyle={passHairStyle}
      />
      <MLBottomsModal
        passBottoms={passBottoms}
      />
      <FMLBottomsModal
        passBottoms={passBottoms}
      />
      <div className="row">  
        <AbilityComponents 
          headImagePath={headImagePath}
          clothesImagePath={clothesImagePath}
          shoesImagePath={shoesImagePath}
        />
        <div className="col-5 order-2" id="three-section">
          <div style={{ height: '100vh', width: '100%' }}>
            <div id="character-btn">
              <button type="button" className="btn btn-dark font-type1" data-bs-toggle="modal" data-bs-target="#characterTypeModal">
                キャラクターの設定
              </button>
            </div>
            <Canvas
              style={{ background: '#f0f0e0' }}
              camera={{ position: [0, 11, 20] }}
            >
              <ambientLight
                color={0xffffff}
                intensity={0.8} />
              <directionalLight
                color={0xffffff}
                intensity={0.6} />
              <pointLight
                position={[0, 11, 20]}
                intensity={0.7} />
              <pointLight
                position={[0, 11, -20]}
                intensity={0.7} />
              <Orbit />
              <axesHelper args={[5]} />
              <Suspense fallback={null}>
                <Model
                  headGear={headGear}
                  clothesGear={clothesGear}
                  shoesGear={shoesGear}
                  CT={characterType}
                  skinColor={skinColor}
                  eyeColor={eyeColor}
                  hairStyle={hairStyle}
                  bottoms={bottoms}
                  teamColor={teamColor} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;