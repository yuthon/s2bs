// ヘッダー画像
import HeaderImg from './images/nc113873.png';
import Footer from './Footer';
// アビリティ関連のコンポーネント
import AbilityComponents from './AbilityComponents';

//ギア選択のモーダル
import HeadGearModal from './HeadComponents/HeadGearModal';
import ClothesGearModal from './ClothesComponents/ClothesGearModal';
import ShoesGearModal from './ShoesComponents/ShoesGearModal';
//キャラクターの詳細設定モーダル
import CharacterTypeModal from './CharacterSettingComponents/CharacterTypeModal';
import SkinColorModal from './CharacterSettingComponents/SkinColorModal';
import TeamColorModal from './CharacterSettingComponents/TeamColorModal';
import IFMLHairStyleModal from './CharacterSettingComponents/IFMLHairStyleModal';
import IMLHairStyleModal from './CharacterSettingComponents/IMLHairStyleModal';
import OFMLHairStyleModal from './CharacterSettingComponents/OFMLHairStyleModal';
import OMLHairStyleModal from './CharacterSettingComponents/OMLHairStyleModal';
import MLBottomsModal from './CharacterSettingComponents/MLBottomsModal';
import FMLBottomsModal from './CharacterSettingComponents/FMLBottomsModal';
import EyeColorModal from './CharacterSettingComponents/EyeColorModal';

//初期表示用の画像
import WakabaIkaT from './images/gear/Clt_FST001.png';
import Canvas_White from './images/gear/Shs_FST000.png';
import Headband_White from './images/gear/Hed_FST000.png';
import Jr_0 from './images/weapon/Splattershot Jr.png';
import inkRecovery from './images/ability/REC.png';

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
  //選択されたアタマギアを管理
  const [headGear, setHeadGear] = useState({name:"ヘッドバンド ホワイト", path:Headband_White, id:"HB_Headband_White", brand:"バトロイカ",default:inkRecovery});
  //選択されたフクギアを管理
  const [clothesGear, setClothesGear] = useState({name:"わかばイカT",path:WakabaIkaT,id:"WakabaIkaT",brand:"バトロイカ"});
  //選択されたクツギアを管理
  const [shoesGear, setShoesGear] = useState({name:"キャンバス ホワイト",path:Canvas_White,id:"Canvas_White",brand:"クラーゲス"});
  //キャラ設定モーダルを管理
  const [characterType, setCharacterType] = useState("IML");
  const [skinColor, setSkinColor] = useState("SC-0");
  const [hairStyle, passHairStyle] = useState("Hair_0");
  const [eyeColor, setEyeColor] = useState("#1617ff");
  const [isMLBottomsModalOpen, controlMLBottomsModal] = useState(false);
  const [isFMLBottomsModalOpen, controlFMLBottomsModal] = useState(false);
  const [bottoms, passBottoms] = useState("Btm_0");
  const [teamColor, setTeamColor] = useState("ffb23d");
  const [darkColor, setDarkColor] = useState(null)
  
  return(
    <>
    <header className="" id="header">
      <div className="d-flex header-title">
        <img className="header-image" src={HeaderImg} alt=""/>
        <p className="font-type1 header-name">スプラ2ギアプランナー</p>
        <img className="header-image" src={HeaderImg} alt=""/>
      </div>
    </header>
    <div className="container-xl px-sm-0 px-lg-auto">
      <HeadGearModal
        chosenGear={headGear}
        setChosenGear={setHeadGear}
      />
      <ClothesGearModal
        chosenGear={clothesGear}
        setChosenGear={setClothesGear}
      />
      <ShoesGearModal
        chosenGear={shoesGear}
        setChosenGear={setShoesGear}
      />
      <CharacterTypeModal
        characterType={characterType}
        setCharacterType={setCharacterType}
        characterType={characterType}
      />
      <SkinColorModal
        setSkinColor={setSkinColor}
        skinColor={skinColor}
      />
      <TeamColorModal
        setTeamColor={setTeamColor}
        setDarkColor={setDarkColor}
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
      <EyeColorModal 
        setEyeColor={setEyeColor}
      />
      <div className="row" id="main">  
        <div className="col-sm-6 col-md-4 col-lg-4 col-xxl-6" id="three-section">
          <div id="canvas-container">
            <div id="character-btn">
              <button type="button" className="btn btn-dark font-type1" data-bs-toggle="modal" data-bs-target="#characterTypeModal">
                キャラクターの設定
              </button>
            </div>
            <Canvas
              style={{ background: '#f0f0e0' }}
              camera={{ position: [0, 11, 17] }}
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
                  headGear={headGear.id}
                  clothesGear={clothesGear.id}
                  shoesGear={shoesGear.id}
                  characterType={characterType}
                  skinColor={skinColor}
                  eyeColor={eyeColor}
                  hairStyle={hairStyle}
                  bottoms={bottoms}
                  teamColor={teamColor}
                  darkColor={darkColor}  
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <AbilityComponents 
          headImagePath={headGear.path}
          clothesImagePath={clothesGear.path}
          shoesImagePath={shoesGear.path}
        />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Main;