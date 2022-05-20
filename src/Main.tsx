import { ReactElement, useState } from 'react';
import LanguageSelector from './languages/LanguageSelector';
import { Text } from './languages/Text';
// ヘッダー画像
import HeaderImg from './images/nc113873.png';
import Footer from './Footer';
import Scene from './ThreeComponents/Scene';
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

interface GearType {
  name: string,
  path: string,
  id: string,
  brand: string,
  default: string,
}

const Main = (): ReactElement => {
  //選択されたアタマギアを管理
  const [headGear, setHeadGear] = useState<GearType>({name:"ヘッドバンド ホワイト", path:Headband_White, id:"HB_Headband_White", brand:"バトロイカ",default:inkRecovery});
  //選択されたフクギアを管理
  const [clothesGear, setClothesGear] = useState<GearType>({name:"わかばイカT",path:WakabaIkaT,id:"WakabaIkaT",brand:"バトロイカ", default: ''});
  //選択されたクツギアを管理
  const [shoesGear, setShoesGear] = useState<GearType>({name:"キャンバス ホワイト",path:Canvas_White,id:"Canvas_White",brand:"クラーゲス", default: ''});
  //キャラ設定に関する情報
  const [characterType, setCharacterType] = useState<string>("IFML");
  const [skinColor, setSkinColor] = useState<string>("color_0");
  const [hairStyle, setHairStyle] = useState<string>("Hair_0");
  const [eyeColor, setEyeColor] = useState<string>("color_0");
  const [bottoms, setBottoms] = useState<string>("Btm_0");
  const [teamColor, setTeamColor] = useState<string>("color_5");

  return(
    <>
      <header className="" id="header">
        <div className="d-flex header-title">
          <img className="header-image" src={HeaderImg} alt=""/>
          <p className="font-type1 header-name"><Text tid="titleHeader"/></p>
          <img className="header-image" src={HeaderImg} alt=""/>
        </div>
        <LanguageSelector />
      </header>
      <div className="container-xxl">
        <CharacterTypeModal
          characterType={characterType}
          setCharacterType={setCharacterType}
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
            <Scene
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
          </div>
          <div className="col-sm-5 col-md-4 col-lg-7 col-xl-7 col-xxl-6 px-0" id="gear-and-ability">
            <AbilityComponents 
              headGear={headGear}
              setHeadGear={setHeadGear}
              clothesGear={clothesGear}
              setClothesGear={setClothesGear}
              shoesGear={shoesGear}
              setShoesGear={setShoesGear}
            />
            <HeadGearModal
              chosenGear={headGear}
              setGear={setHeadGear}
            />
            <ClothesGearModal
              chosenGear={clothesGear}
              setGear={setClothesGear}
            />
            <ShoesGearModal
              chosenGear={shoesGear}
              setGear={setShoesGear}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;