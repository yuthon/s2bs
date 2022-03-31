import { useState } from 'react';
//ブキ
import Weapon from './WeaponComponents/Weapon';
import WeaponModal from './WeaponComponents/WeaponModal';
// アビリティ効果コンポーネント
import AbilityPoint from './AbilityEffectComponents/AbilityPoint';
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
  const [weaponStatus, setWeaponStatus] = useState({name:"わかばシューター", sub:"スプラッシュボム", special:"インクアーマー", sp:180, weight:"light", path:Jr_0, pathSub:SplatBomb,pathSpecial:InkArmor});
  // メインスロットのギアパワーを管理
  const [mainAbility0, setMainAbility0] = useState({name:"empty",path:empty});
  const [mainAbility1, setMainAbility1] = useState({name:"empty",path:empty});
  const [mainAbility2, setMainAbility2] = useState({name:"empty",path:empty});
  //サブスロットモーダルで選択されたアビリティの画像のパスを管理
  const [subAbilityImagePath0, setSubAbilityImagePath0] = useState(empty);
  const [subAbilityImagePath1, setSubAbilityImagePath1] = useState(empty);
  const [subAbilityImagePath2, setSubAbilityImagePath2] = useState(empty);
  const [subAbilityImagePath3, setSubAbilityImagePath3] = useState(empty);
  const [subAbilityImagePath4, setSubAbilityImagePath4] = useState(empty);
  const [subAbilityImagePath5, setSubAbilityImagePath5] = useState(empty);
  const [subAbilityImagePath6, setSubAbilityImagePath6] = useState(empty);
  const [subAbilityImagePath7, setSubAbilityImagePath7] = useState(empty);
  const [subAbilityImagePath8, setSubAbilityImagePath8] = useState(empty);
  //サブスロットモーダルで選択されたアビリティの名前を管理
  const [subAbilityName0, setSubAbilityName0] = useState(null);
  const [subAbilityName1, setSubAbilityName1] = useState(null);
  const [subAbilityName2, setSubAbilityName2] = useState(null);
  const [subAbilityName3, setSubAbilityName3] = useState(null);
  const [subAbilityName4, setSubAbilityName4] = useState(null);
  const [subAbilityName5, setSubAbilityName5] = useState(null);
  const [subAbilityName6, setSubAbilityName6] = useState(null);
  const [subAbilityName7, setSubAbilityName7] = useState(null);
  const [subAbilityName8, setSubAbilityName8] = useState(null);
  
  return (
    <>
      <div className="px-0 d-flex flex-md-row flex-wrap" id="gear-components">
      <Head
        headGear={props.headGear}
        subAbilityImagePath0={subAbilityImagePath0}
        subAbilityImagePath1={subAbilityImagePath1}
        subAbilityImagePath2={subAbilityImagePath2}
        mainAbility={mainAbility0}
        setMainAbility={setMainAbility0}
        setSubAbilityName0={setSubAbilityName0}
        setSubAbilityImagePath0={setSubAbilityImagePath0}
        setSubAbilityName1={setSubAbilityName1}
        setSubAbilityImagePath1={setSubAbilityImagePath1}
        setSubAbilityName2={setSubAbilityName2}
        setSubAbilityImagePath2={setSubAbilityImagePath2}
      />
      <Clothes
        clothesGear={props.clothesGear}
        subAbilityImagePath3={subAbilityImagePath3}
        subAbilityImagePath4={subAbilityImagePath4}
        subAbilityImagePath5={subAbilityImagePath5}
        mainAbility={mainAbility1}
        setMainAbility={setMainAbility1}
        setSubAbilityName3={setSubAbilityName3}
        setSubAbilityImagePath3={setSubAbilityImagePath3}
        setSubAbilityName4={setSubAbilityName4}
        setSubAbilityImagePath4={setSubAbilityImagePath4}
        setSubAbilityName5={setSubAbilityName5}
        setSubAbilityImagePath5={setSubAbilityImagePath5}
      />
      <Shoes
        shoesGear={props.shoesGear}
        subAbilityImagePath6={subAbilityImagePath6}
        subAbilityImagePath7={subAbilityImagePath7}
        subAbilityImagePath8={subAbilityImagePath8}
        mainAbility={mainAbility2}
        setMainAbility={setMainAbility2}
        setSubAbilityName6={setSubAbilityName6}
        setSubAbilityImagePath6={setSubAbilityImagePath6}
        setSubAbilityName7={setSubAbilityName7}
        setSubAbilityImagePath7={setSubAbilityImagePath7}
        setSubAbilityName8={setSubAbilityName8}
        setSubAbilityImagePath8={setSubAbilityImagePath8}
      />
    </div>
    <div className="font-type2 text-white" id="ae-section">
      <WeaponModal
        weaponStatus={setWeaponStatus} 
      />
      <Weapon
        weaponStatus={weaponStatus} 
      />
      <AbilityPoint
        weaponStatus={weaponStatus}
        mainAbilityName0={mainAbility0.name}
        mainAbilityName1={mainAbility1.name}
        mainAbilityName2={mainAbility2.name}
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
    </>
  );
}

export default AbilityComponents;