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
import SubSlotModal0 from './SlotComponents/SubSlotModal0';
import SubSlotModal1 from './SlotComponents/SubSlotModal1';
import SubSlotModal2 from './SlotComponents/SubSlotModal2';
import SubSlotModal3 from './SlotComponents/SubSlotModal3';
import SubSlotModal4 from './SlotComponents/SubSlotModal4';
import SubSlotModal5 from './SlotComponents/SubSlotModal5';
import SubSlotModal6 from './SlotComponents/SubSlotModal6';
import SubSlotModal7 from './SlotComponents/SubSlotModal7';
import SubSlotModal8 from './SlotComponents/SubSlotModal8';
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
  
  return (
    <><div className="col-2 order-1 px-0" id="gear-components">
      <div>
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
        />
        <MainSlotModal0
          passImagePath={passMainAbilityImagePath0}
          passAbilityName={passMainAbilityName0}
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
          passClothesGearImagePath={props.clothesImagePath}
          passSubAbilityImagePath3={subAbilityImagePath3}
          passSubAbilityImagePath4={subAbilityImagePath4}
          passSubAbilityImagePath5={subAbilityImagePath5}
          passMainAbilityImagePath={mainAbilityImagePath1} />
        
        <MainSlotModal1
          passImagePath={passMainAbilityImagePath1}
          passAbilityName={passMainAbilityName1} />
        <SubSlotModal3
          passAbilityName={passSubAbilityName3}
          passImagePath={passSubAbilityImagePath3} />
        <SubSlotModal4
          passAbilityName={passSubAbilityName4}
          passImagePath={passSubAbilityImagePath4} />
        <SubSlotModal5
          passAbilityName={passSubAbilityName5}
          passImagePath={passSubAbilityImagePath5} />
      </div>
      <div>
        <Shoes
          passShoesGearImagePath={props.shoesImagePath}
          passSubAbilityImagePath6={subAbilityImagePath6}
          passSubAbilityImagePath7={subAbilityImagePath7}
          passSubAbilityImagePath8={subAbilityImagePath8}
          passMainAbilityImagePath={mainAbilityImagePath2}
        />
        <MainSlotModal2
          passImagePath={passMainAbilityImagePath2}
          passAbilityName={passMainAbilityName2} />
        <SubSlotModal6
          passAbilityName={passSubAbilityName6}
          passImagePath={passSubAbilityImagePath6} />
        <SubSlotModal7
          passAbilityName={passSubAbilityName7}
          passImagePath={passSubAbilityImagePath7} />
        <SubSlotModal8
          passAbilityName={passSubAbilityName8}
          passImagePath={passSubAbilityImagePath8} />
      </div>
    </div>
    <div className="font-type2 col-5 order-3" id="ae-section">
        <WeaponModal
          weaponStatus={passWeaponStatus} 
        />
        <Weapon
          weaponStatus={weaponStatus} 
        />
      <AbilityPoint
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
    </div></>
  );
}

export default AbilityComponents;