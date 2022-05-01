import React, { FC, ReactElement, useState } from 'react';
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

type WeaponType = {
  name: string,
  sub: string,
  special: string,
  sp: number,
  weight: string,
  path: string,
  pathSub: string,
  pathSpecial: string
};

type AbilityType = {
  name: string,
  path: string
}

type GearType = {
  name: string,
  path: string,
  id: string,
  brand: string,
  default: string,
}

type AbilityComponentsProps = {
  headGear: GearType,
  setHeadGear: React.Dispatch<React.SetStateAction<GearType>>, 
  clothesGear: GearType,
  setClothesGear: React.Dispatch<React.SetStateAction<GearType>>, 
  shoesGear: GearType, 
  setShoesGear: React.Dispatch<React.SetStateAction<GearType>>,
}

const AbilityComponents: FC<AbilityComponentsProps> = ({ headGear, setHeadGear, clothesGear, setClothesGear, shoesGear, setShoesGear }): ReactElement => {
  //ブキの名前とその他の情報を管理
  const [weaponStatus, setWeaponStatus] = useState<WeaponType>({name:"わかばシューター", sub:"スプラッシュボム", special:"インクアーマー", sp:180, weight:"light", path:Jr_0, pathSub:SplatBomb,pathSpecial:InkArmor});
  // メインスロットのギアパワーを管理
  const [mainAbility0, setMainAbility0] = useState<AbilityType>({name:"empty",path:empty});
  const [mainAbility1, setMainAbility1] = useState<AbilityType>({name:"empty",path:empty});
  const [mainAbility2, setMainAbility2] = useState<AbilityType>({name:"empty",path:empty});
  // サブスロットのギアパワーを管理
  const [subAbility0,setSubAbility0] = useState<AbilityType>({name:"empty",path:empty});
  const [subAbility1,setSubAbility1] = useState<AbilityType>({name:"empty",path:empty});
  const [subAbility2,setSubAbility2] = useState<AbilityType>({name:"empty",path:empty});
  const [subAbility3,setSubAbility3] = useState<AbilityType>({name:"empty",path:empty});
  const [subAbility4,setSubAbility4] = useState<AbilityType>({name:"empty",path:empty});
  const [subAbility5,setSubAbility5] = useState<AbilityType>({name:"empty",path:empty});
  const [subAbility6,setSubAbility6] = useState<AbilityType>({name:"empty",path:empty});
  const [subAbility7,setSubAbility7] = useState<AbilityType>({name:"empty",path:empty});
  const [subAbility8,setSubAbility8] = useState<AbilityType>({name:"empty",path:empty});
  
  return (
    <>
      <div className="px-0 d-flex flex-md-row flex-wrap" id="gear-components">
      <Head
        headGear={headGear}
        setHeadGear={setHeadGear}
        mainAbility={mainAbility0}
        setMainAbility={setMainAbility0}
        subAbility0={subAbility0}
        setSubAbility0={setSubAbility0}
        subAbility1={subAbility1}
        setSubAbility1={setSubAbility1}
        subAbility2={subAbility2}
        setSubAbility2={setSubAbility2}
      />
      <Clothes
        clothesGear={clothesGear}
        setClothesGear={setClothesGear}
        mainAbility={mainAbility1}
        setMainAbility={setMainAbility1}
        subAbility3={subAbility3}
        setSubAbility3={setSubAbility3}
        subAbility4={subAbility4}
        setSubAbility4={setSubAbility4}
        subAbility5={subAbility5}
        setSubAbility5={setSubAbility5}
      />
      <Shoes
        shoesGear={shoesGear}
        setShoesGear={setShoesGear}
        mainAbility={mainAbility2}
        setMainAbility={setMainAbility2}
        subAbility6={subAbility6}
        setSubAbility6={setSubAbility6}
        subAbility7={subAbility7}
        setSubAbility7={setSubAbility7}
        subAbility8={subAbility8}
        setSubAbility8={setSubAbility8}
      />
    </div>
    <div className="font-type2 text-white" id="ae-section">
      <WeaponModal
        setWeapon={setWeaponStatus} 
      />
      <Weapon
        weaponStatus={weaponStatus} 
      />
      <AbilityPoint
        weaponStatus={weaponStatus}
        mainAbilityName0={mainAbility0.name}
        mainAbilityName1={mainAbility1.name}
        mainAbilityName2={mainAbility2.name}
        subAbilityName0={subAbility0.name}
        subAbilityName1={subAbility1.name}
        subAbilityName2={subAbility2.name}
        subAbilityName3={subAbility3.name}
        subAbilityName4={subAbility4.name}
        subAbilityName5={subAbility5.name}
        subAbilityName6={subAbility6.name}
        subAbilityName7={subAbility7.name}
        subAbilityName8={subAbility8.name} 
      />
    </div>
    </>
  );
}

export default AbilityComponents;