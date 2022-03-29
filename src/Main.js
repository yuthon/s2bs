import { Html, useProgress } from '@react-three/drei'
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
import EyeColorModal from './CharacterSettingComponents/EyeColorModal';
import HairStyleModal from './CharacterSettingComponents/HairStyleModal';
import BottomsModal from './CharacterSettingComponents/BottomsModal';

//初期表示用の画像
import WakabaIkaT from './images/gear/Clt_FST001.png';
import Canvas_White from './images/gear/Shs_FST000.png';
import Headband_White from './images/gear/Hed_FST000.png';
import inkRecovery from './images/ability/REC.png';

import { useState } from 'react';
// 3dモデル
import Model from './ThreeComponents/Model';
import Orbit from './ThreeComponents/Orbit';
import React, { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });





const Loader= () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="font-type2" id="loader-content">
        <h2>3Dモデルをロード中…</h2>
        <h2>{Math.floor(progress * 10) /10}％</h2>
        <h4>※この処理には時間がかかる場合があります</h4>
        <h4>※モデルのロード中はページ内の動作が重くなることがあります</h4>
      </div>
    </Html>
  )
}

const Main = () => {
  //選択されたアタマギアを管理
  const [headGear, setHeadGear] = useState({name:"ヘッドバンド ホワイト", path:Headband_White, id:"HB_Headband_White", brand:"バトロイカ",default:inkRecovery});
  //選択されたフクギアを管理
  const [clothesGear, setClothesGear] = useState({name:"わかばイカT",path:WakabaIkaT,id:"WakabaIkaT",brand:"バトロイカ"});
  //選択されたクツギアを管理
  const [shoesGear, setShoesGear] = useState({name:"キャンバス ホワイト",path:Canvas_White,id:"Canvas_White",brand:"クラーゲス"});
  //キャラ設定モーダルを管理
  const [characterType, setCharacterType] = useState("IFML");
  const [skinColor, setSkinColor] = useState("color_0");
  const [hairStyle, setHairStyle] = useState("Hair_0");
  const [eyeColor, setEyeColor] = useState("color_0");
  const [bottoms, setBottoms] = useState("Btm_0");
  const [teamColor, setTeamColor] = useState("color_5");
  
  return(
    <>
    <header className="" id="header">
      <div className="d-flex header-title">
        <img className="header-image" src={HeaderImg} alt=""/>
        <p className="font-type1 header-name">スプラ2ギアプランナー</p>
        <img className="header-image" src={HeaderImg} alt=""/>
      </div>
    </header>
    <div className="container-xl">
      
      
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
        characterType={characterType}
        teamColor={teamColor}
      />
      <EyeColorModal 
        setEyeColor={setEyeColor}
        eyeColor={eyeColor}
      />
      <HairStyleModal 
        characterType={characterType}
        setHairStyle={setHairStyle}
        hairStyle={hairStyle}
      />
      <BottomsModal
        bottoms={bottoms}
        setBottoms={setBottoms}
        characterType={characterType}
      />
      <div className="row m-0 p-0" id="main">  
        <div className="col-sm-7 col-md-8 col-lg-5 col-xl-5 col-xxl-6" id="three-section">
            <div id="character-btn">
              <button type="button" className="btn btn-dark font-type1 text-nowrap" data-bs-toggle="modal" data-bs-target="#characterTypeModal">
                キャラクターの設定
              </button>
            </div>
            
            <Canvas
              style={{ background: '#f0f0e0' }}
              camera={{ position: [0, 9, 12] }}
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
              <Suspense fallback={<Loader />}>
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
                />
              </Suspense>
            </Canvas>
        </div>
        <div className="col-sm-5 col-md-4 col-lg-7 col-xl-7 col-xxl-6 px-0" id="gear-and-ability">
          <AbilityComponents 
            headImagePath={headGear.path}
            clothesImagePath={clothesGear.path}
            shoesImagePath={shoesGear.path}
          />
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
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Main;