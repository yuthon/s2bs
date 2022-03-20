import { useState } from 'react';
//ブキ
import Weapon from './WeaponComponents/Weapon';
import WeaponModal from './WeaponComponents/WeaponModal';
// アビリティ効果コンポーネント
import AbilityPoint from './AbilityEffectComponents/AbilityPoint';
//MainSlotのモーダル
import MainSlotModal0 from './SlotComponents/MainSlotModal0';
import MainSlotModal1 from './SlotComponents/MainSlotModal1';
import MainSlotModal2 from './SlotComponents/MainSlotModal2';
//SubSlotのアビリティ選択のモーダル
import SubSlotModal from './SlotComponents/SubSlotModal';
// アタマ
import Head from './HeadComponents/Head';
// フク
import Clothes from './ClothesComponents/Clothes';
// クツ
import Shoes from './ShoesComponents/Shoes';
//初期表示用の画像
import empty from './images/ability/empty.png';
import Jr_0 from './images/weapon/Splattershot Jr.png';
import SplatBomb from './images/subSP/Wsb_Bomb_Splat.png';
import InkArmor from './images/subSP/Wsp_InkArmor.png';

const AbilityComponents = (props) => {
  //ブキの名前とその他の情報を管理
  const [weaponStatus, passWeaponStatus] = useState({name:"わかばシューター", sub:"スプラッシュボム", special:"インクアーマー", sp:180, weight:"light", path:Jr_0, pathSub:SplatBomb,pathSpecial:InkArmor});
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
  // どのサブスロットからモーダルを開いたか管理
  const [subSlotNumber, setSubSlotNumber] = useState(null);
  
  return (
    <><div className="col-sm-3 col-lg-2" id="gear-components">
      <SubSlotModal
        slotNumber={subSlotNumber}
        passAbilityName0={passSubAbilityName0}
        passImagePath0={passSubAbilityImagePath0}
        passAbilityName1={passSubAbilityName1}
        passImagePath1={passSubAbilityImagePath1}
        passAbilityName2={passSubAbilityName2}
        passImagePath2={passSubAbilityImagePath2}
        passAbilityName3={passSubAbilityName3}
        passImagePath3={passSubAbilityImagePath3}
        passAbilityName4={passSubAbilityName4}
        passImagePath4={passSubAbilityImagePath4}
        passAbilityName5={passSubAbilityName5}
        passImagePath5={passSubAbilityImagePath5}
        passAbilityName6={passSubAbilityName6}
        passImagePath6={passSubAbilityImagePath6}
        passAbilityName7={passSubAbilityName7}
        passImagePath7={passSubAbilityImagePath7}
        passAbilityName8={passSubAbilityName8}
        passImagePath8={passSubAbilityImagePath8}
      />
      <Head
        //ギアモーダルからStateを経由して受け取った画像のパスをpropsで渡す
        passHeadGearImagePath={props.headImagePath}
        //SubSlotModal1から受け取ったアビリティの画像のパスを渡す
        passSubAbilityImagePath0={subAbilityImagePath0}
        //2,3についても同様
        passSubAbilityImagePath1={subAbilityImagePath1}
        passSubAbilityImagePath2={subAbilityImagePath2}
        //メインスロットも同様
        passMainAbilityImagePath={mainAbilityImagePath0}
        setSubSlotNumber={setSubSlotNumber}
      />
      <MainSlotModal0
        passImagePath={passMainAbilityImagePath0}
        passAbilityName={passMainAbilityName0}
      />
      <Clothes
        passClothesGearImagePath={props.clothesImagePath}
        passSubAbilityImagePath3={subAbilityImagePath3}
        passSubAbilityImagePath4={subAbilityImagePath4}
        passSubAbilityImagePath5={subAbilityImagePath5}
        passMainAbilityImagePath={mainAbilityImagePath1}
        setSubSlotNumber={setSubSlotNumber}  
      />
      <MainSlotModal1
        passImagePath={passMainAbilityImagePath1}
        passAbilityName={passMainAbilityName1}
      />
      <Shoes
        passShoesGearImagePath={props.shoesImagePath}
        passSubAbilityImagePath6={subAbilityImagePath6}
        passSubAbilityImagePath7={subAbilityImagePath7}
        passSubAbilityImagePath8={subAbilityImagePath8}
        passMainAbilityImagePath={mainAbilityImagePath2}
        setSubSlotNumber={setSubSlotNumber}
      />
      <MainSlotModal2
        passImagePath={passMainAbilityImagePath2}
        passAbilityName={passMainAbilityName2}
      />
    </div>
    <div className="col-sm-5 ae-container">
    <div className="font-type2 text-white" id="ae-section">
      <WeaponModal
        weaponStatus={passWeaponStatus} 
      />
      <Weapon
        weaponStatus={weaponStatus} 
      />
      <AbilityPoint
        weaponStatus={weaponStatus}
        mainAbilityName0={mainAbilityName0}
        mainAbilityName1={mainAbilityName1}
        mainAbilityName2={mainAbilityName2}
        subAbilityName0={subAbilityName0}
        subAbilityName1={subAbilityName1}
        subAbilityName2={subAbilityName2}
        subAbilityName3={subAbilityName3}
        subAbilityName4={subAbilityName4}
        subAbilityName5={subAbilityName5}
        subAbilityName6={subAbilityName6}
        subAbilityName7={subAbilityName7}
        subAbilityName8={subAbilityName8} 
      />
    </div>
    </div>
    </>
  );
}

export default AbilityComponents;