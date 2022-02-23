import { useState, useEffect } from 'react';
//ブキ
import Weapon from './WeaponComponents/Weapon';
import WeaponModal from './WeaponComponents/WeaponModal';

//ギア選択のモーダル
import HeadGearModal from './ModalComponents/HeadGearModal';
import ClothesGearModal from './ModalComponents/ClothesGearModal';
import ShoesGearModal from './ModalComponents/ShoesGearModal';
//MainSlotのモーダル
import MainSlotModal0 from './SlotComponents/MainSlotModal0';
import MainSlotModal1 from './SlotComponents/MainSlotModal1';
import MainSlotModal2 from './SlotComponents/MainSlotModal2';
//SubSlotのアビリティ選択のモーダル
import SubSlotModal0 from './SlotComponents/SubSlotModal0';
import SubSlotModal1 from './SlotComponents/SubSlotModal1';
import SubSlotModal2 from './SlotComponents/SubSlotModal2';
import SubSlotModal3 from './SlotComponents/SubSlotModal3';
import SubSlotModal4 from './SlotComponents/SubSlotModal4';
import SubSlotModal5 from './SlotComponents/SubSlotModal5';
import SubSlotModal6 from './SlotComponents/SubSlotModal6';
import SubSlotModal7 from './SlotComponents/SubSlotModal7';
import SubSlotModal8 from './SlotComponents/SubSlotModal8';
//キャラクターの詳細設定モーダル
import CharacterTypeModal from './ModalComponents/CharacterTypeModal';
import SkinColorModal from './ModalComponents/SkinColorModal';
import IFMLHairStyleModal from './ModalComponents/IFMLHairStyleModal';
import IMLHairStyleModal from './ModalComponents/IMLHairStyleModal';
import OFMLHairStyleModal from './ModalComponents/OFMLHairStyleModal';
import OMLHairStyleModal from './ModalComponents/OMLHairStyleModal';
import MLBottomsModal from './ModalComponents/MLBottomsModal';
import FMLBottomsModal from './ModalComponents/FMLBottomsModal';
import AbilityEffect from './AbilityEffectComponents/AbilityEffect';

import Head from './HeadComponents/Head';
import Clothes from './ClothesComponents/Clothes';
// クツ
import Shoes from './ShoesComponents/Shoes';

import ThreeComponent from './ThreeComponent';
import './main.css';
//初期表示用の画像
import WakabaIkaT from './images/gear/Clt_FST001.png';
import Canvas_White from './images/gear/Shs_FST000.png';
import Headband_White from './images/gear/Hed_FST000.png';
import empty from './images/ability/empty.png';
import Jr_0 from './images/weapon/Splattershot Jr.png';

const Main = () => {
  //ブキの名前とその他の情報を管理
  const [weaponStatus, passWeaponStatus] = useState({name:"わかばシューター", sub:"SplatBomb", special:"Armor", sp:180, weight:"light", path:Jr_0});
  //選択されたアタマの画像のパスを管理
  const [headImagePath, passHeadImagePath] = useState(Headband_White);
  //選択されたフクの画像のパスを管理
  const [clothesImagePath, passClothesImagePath] = useState(WakabaIkaT);
  //選択されたクツの画像のパスを管理
  const [shoesImagePath, passShoesImagePath] = useState(Canvas_White);
  //選択されたアタマの名前を管理
  const [chosenHeadGear, passChosenHeadGear] = useState("HB_Headband_White");
  //選択されたフクの名前を管理
  const [chosenClothesGear, passChosenClothesGear] = useState("WakabaIkaT");
  //選択されたクツの名前を管理
  const [chosenShoesGear, passChosenShoesGear] = useState("Canvas_White");
  //メインスロットのアビリティの画像のpathを管理
  const [mainAbilityImagePath0, passMainAbilityImagePath0] = useState(empty);
  const [mainAbilityImagePath1, passMainAbilityImagePath1] = useState(empty);
  const [mainAbilityImagePath2, passMainAbilityImagePath2] = useState(empty);
  //メインスロットのアビリティの名前を管理
  const [mainAbilityName0, passMainAbilityName0] = useState(null);
  const [mainAbilityName1, passMainAbilityName1] = useState(null);
  const [mainAbilityName2, passMainAbilityName2] = useState(null);
  //サブスロットモーダルで選択されたアビリティの画像のパスを管理
  const [subAbilityImagePath0, passSubAbilityImagePath0] = useState(empty);
  const [subAbilityImagePath1, passSubAbilityImagePath1] = useState(empty);
  const [subAbilityImagePath2, passSubAbilityImagePath2] = useState(empty);
  const [subAbilityImagePath3, passSubAbilityImagePath3] = useState(empty);
  const [subAbilityImagePath4, passSubAbilityImagePath4] = useState(empty);
  const [subAbilityImagePath5, passSubAbilityImagePath5] = useState(empty);
  const [subAbilityImagePath6, passSubAbilityImagePath6] = useState(empty);
  const [subAbilityImagePath7, passSubAbilityImagePath7] = useState(empty);
  const [subAbilityImagePath8, passSubAbilityImagePath8] = useState(empty);
  //サブスロットモーダルで選択されたアビリティの名前を管理
  const [subAbilityName0, passSubAbilityName0] = useState(null);
  const [subAbilityName1, passSubAbilityName1] = useState(null);
  const [subAbilityName2, passSubAbilityName2] = useState(null);
  const [subAbilityName3, passSubAbilityName3] = useState(null);
  const [subAbilityName4, passSubAbilityName4] = useState(null);
  const [subAbilityName5, passSubAbilityName5] = useState(null);
  const [subAbilityName6, passSubAbilityName6] = useState(null);
  const [subAbilityName7, passSubAbilityName7] = useState(null);
  const [subAbilityName8, passSubAbilityName8] = useState(null);
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
      <div>
        <div>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>
          <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
            Tooltip on top
          </button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
          <WeaponModal 
            weaponStatus={passWeaponStatus}
          />
          <Weapon 
            weaponStatus={weaponStatus}
          />
          
        </div>
        <div>
          <Head
            //ギアモーダルからStateを経由して受け取った画像のパスをpropsで渡す
            passHeadGearImagePath={headImagePath}
            //SubSlotModal1から受け取ったアビリティの画像のパスを渡す
            passSubAbilityImagePath0={subAbilityImagePath0}
            //2,3についても同様
            passSubAbilityImagePath1={subAbilityImagePath1}
            passSubAbilityImagePath2={subAbilityImagePath2}
            //メインスロットも同様
            passMainAbilityImagePath={mainAbilityImagePath0}
          />
          <MainSlotModal0 
            passImagePath={passMainAbilityImagePath0}
            passAbilityName={passMainAbilityName0}
          />
          <HeadGearModal 
            //モーダルで選択されたギアの名前を受け取る
            passChosenGear = {passChosenHeadGear}
            //ギア画像のパスを受け取る
            passImagePath = {passHeadImagePath}
          />
          <SubSlotModal0
            passAbilityName={passSubAbilityName0}
            passImagePath={passSubAbilityImagePath0}
          />
          <SubSlotModal1
            passAbilityName={passSubAbilityName1}
            passImagePath={passSubAbilityImagePath1}
          />
          <SubSlotModal2
            passAbilityName={passSubAbilityName2}
            passImagePath={passSubAbilityImagePath2}
          />
        </div>
        <div>
          <Clothes 
            passClothesGearImagePath={clothesImagePath}
            passSubAbilityImagePath3={subAbilityImagePath3}
            passSubAbilityImagePath4={subAbilityImagePath4}
            passSubAbilityImagePath5={subAbilityImagePath5}
            passMainAbilityImagePath={mainAbilityImagePath1}
          />
          <ClothesGearModal 
            passChosenGear = {passChosenClothesGear}
            passImagePath = {passClothesImagePath}
          />
          <MainSlotModal1
            passImagePath={passMainAbilityImagePath1}
            passAbilityName={passMainAbilityName1}
          />
          <SubSlotModal3
            passAbilityName={passSubAbilityName3}
            passImagePath={passSubAbilityImagePath3}
          />
          <SubSlotModal4
            passAbilityName={passSubAbilityName4}
            passImagePath={passSubAbilityImagePath4}
          />
          <SubSlotModal5
            passAbilityName={passSubAbilityName5}
            passImagePath={passSubAbilityImagePath5}
          />
        </div>
        <div>
          <Shoes 
            passShoesGearImagePath={shoesImagePath}
            passSubAbilityImagePath6={subAbilityImagePath6}
            passSubAbilityImagePath7={subAbilityImagePath7}
            passSubAbilityImagePath8={subAbilityImagePath8}
            passMainAbilityImagePath={mainAbilityImagePath2}
          />
          <ShoesGearModal 
            passChosenGear = {passChosenShoesGear}
            passImagePath = {passShoesImagePath}
          />
          <MainSlotModal2
            passImagePath={passMainAbilityImagePath2}
            passAbilityName={passMainAbilityName2}
          />
          <SubSlotModal6
            passAbilityName={passSubAbilityName6}
            passImagePath={passSubAbilityImagePath6}
          />
          <SubSlotModal7
            passAbilityName={passSubAbilityName7}
            passImagePath={passSubAbilityImagePath7}
          />
          <SubSlotModal8
            passAbilityName={passSubAbilityName8}
            passImagePath={passSubAbilityImagePath8}
          />
        </div>
        <div>
          <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#characterTypeModal">
            キャラクターの設定
          </button>
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
        </div>
        <div>
          <ThreeComponent 
            chosenHeadGear={chosenHeadGear}
            chosenClothesGear={chosenClothesGear}
            chosenShoesGear={chosenShoesGear}
            characterType={characterType}
            skinColor={skinColor}
            eyeColor={eyeColor}
            hairStyle={hairStyle}
            bottoms={bottoms}
            teamColor={teamColor}
          />
        </div>
        <div>
          <AbilityEffect
            weaponStatus={weaponStatus}
            passMainAbilityName0={mainAbilityName0}
            passMainAbilityName1={mainAbilityName1}
            passMainAbilityName2={mainAbilityName2}
            passSubAbilityName0={subAbilityName0}
            passSubAbilityName1={subAbilityName1}
            passSubAbilityName2={subAbilityName2}
            passSubAbilityName3={subAbilityName3}
            passSubAbilityName4={subAbilityName4}
            passSubAbilityName5={subAbilityName5}
            passSubAbilityName6={subAbilityName6}
            passSubAbilityName7={subAbilityName7}
            passSubAbilityName8={subAbilityName8}
          />
        </div>
      </div>  
    );
};

export default Main;