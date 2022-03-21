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
  //メインスロットのアビリティの画像のpathを管理
  const [mainAbilityImagePath0, setMainAbilityImagePath0] = useState(empty);
  const [mainAbilityImagePath1, setMainAbilityImagePath1] = useState(empty);
  const [mainAbilityImagePath2, setMainAbilityImagePath2] = useState(empty);
  //メインスロットのアビリティの名前を管理
  const [mainAbilityName0, setMainAbilityName0] = useState(null);
  const [mainAbilityName1, setMainAbilityName1] = useState(null);
  const [mainAbilityName2, setMainAbilityName2] = useState(null);
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
      <div className="col-lg-3 col-xl-3 col-xxl-2 px-0 d-flex flex-column" id="gear-components">
      <Head
        headImagePath={props.headImagePath}
        subAbilityImagePath0={subAbilityImagePath0}
        subAbilityImagePath1={subAbilityImagePath1}
        subAbilityImagePath2={subAbilityImagePath2}
        mainAbilityImagePath={mainAbilityImagePath0}
        setMainAbilityImagePath={setMainAbilityImagePath0}
        setMainAbilityName={setMainAbilityName0}
        setSubAbilityName0={setSubAbilityName0}
        setSubAbilityImagePath0={setSubAbilityImagePath0}
        setSubAbilityName1={setSubAbilityName1}
        setSubAbilityImagePath1={setSubAbilityImagePath1}
        setSubAbilityName1={setSubAbilityName2}
        setSubAbilityImagePath1={setSubAbilityImagePath2}
      />
      <Clothes
        clothesImagePath={props.clothesImagePath}
        subAbilityImagePath3={subAbilityImagePath3}
        subAbilityImagePath4={subAbilityImagePath4}
        subAbilityImagePath5={subAbilityImagePath5}
        mainAbilityImagePath={mainAbilityImagePath1}
        setMainAbilityImagePath={setMainAbilityImagePath1}
        setMainAbilityName={setMainAbilityName1}
        setSubAbilityName3={setSubAbilityName3}
        setSubAbilityImagePath3={setSubAbilityImagePath3}
        setSubAbilityName4={setSubAbilityName4}
        setSubAbilityImagePath4={setSubAbilityImagePath4}
        setSubAbilityName5={setSubAbilityName5}
        setSubAbilityImagePath5={setSubAbilityImagePath5}
      />
      <Shoes
        shoesImagePath={props.shoesImagePath}
        subAbilityImagePath6={subAbilityImagePath6}
        subAbilityImagePath7={subAbilityImagePath7}
        subAbilityImagePath8={subAbilityImagePath8}
        mainAbilityImagePath={mainAbilityImagePath2}
        setMainAbilityImagePath={setMainAbilityImagePath2}
        setMainAbilityName={setMainAbilityName2}
        setSubAbilityName6={setSubAbilityName6}
        setSubAbilityImagePath6={setSubAbilityImagePath6}
        setSubAbilityName7={setSubAbilityName7}
        setSubAbilityImagePath7={setSubAbilityImagePath7}
        setSubAbilityName8={setSubAbilityName8}
        setSubAbilityImagePath8={setSubAbilityImagePath8}
      />
    </div>
    <div className="col-lg-5 col-xl-4 col-xxl-4 ae-container">
    <div className="font-type2 text-white" id="ae-section">
      <WeaponModal
        weaponStatus={setWeaponStatus} 
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