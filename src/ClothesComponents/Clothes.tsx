import { FC, ReactElement } from 'react';
import ClothesGear from './ClothesGear';
import { Text } from '../languages/Text';
import MainSlot1 from '../SlotComponents/MainSlot1';
import SubSlot3 from '../SlotComponents/SubSlot3';
import SubSlot4 from '../SlotComponents/SubSlot4';
import SubSlot5 from '../SlotComponents/SubSlot5';
import empty from '../images/ability/empty.png';
import WakabaIkaT from '../images/gear/Clt_FST001.png';

type GearType = {
  name: string,
  path: string,
  id: string,
  brand: string,
  default: string,
};

type AbilityType = {
  name: string,
  path: string,
};

type ClothesProps = {
  clothesGear: GearType,
  setClothesGear: React.Dispatch<React.SetStateAction<GearType>>,
  mainAbility: AbilityType,
  setMainAbility: React.Dispatch<React.SetStateAction<AbilityType>>,
  subAbility3: AbilityType,
  setSubAbility3: React.Dispatch<React.SetStateAction<AbilityType>>,
  subAbility4: AbilityType,
  setSubAbility4: React.Dispatch<React.SetStateAction<AbilityType>>,
  subAbility5: AbilityType,
  setSubAbility5: React.Dispatch<React.SetStateAction<AbilityType>>,
}

const Clothes: FC<ClothesProps> = (props): ReactElement => {
  const resetAbility = function() {
    props.setMainAbility({name:"empty", path:empty});
    props.setSubAbility3({name:"empty", path:empty});
    props.setSubAbility4({name:"empty", path:empty});
    props.setSubAbility5({name:"empty", path:empty});
  }
  
  const resetGear = function() {
    props.setClothesGear({name:"わかばイカT",path:WakabaIkaT,id:"WakabaIkaT",brand:"バトロイカ", default: ''})
  }

  return(
    <div className="gear-card clothes-stripe my-auto" id="clothesgear-card">
      <p className="gear-header font-type1"><Text tid="clothes"/></p>
      <div className="gear-reset">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={()=>{resetGear();}}>
          {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
          <path
            d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.84 0-95.17-15.58-134.2-44.86c-14.12-10.59-16.97-30.66-6.375-44.81c10.59-14.12 30.62-16.94 44.81-6.375c27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63C149.9 52.71 201.5 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"
            fill="white"
          />
        </svg>
        <p className="gear-reset-tooltip font-type2"><Text tid="gearReset"/></p>
      </div>
      <ClothesGear
        imagePath={props.clothesGear.path}
      />
      <MainSlot1
        setAbility={props.setMainAbility}
        ability={props.mainAbility}
        gearName={props.clothesGear.name}
      />
      <SubSlot3
        imagePath={props.subAbility3.path}
        setAbility={props.setSubAbility3}
      />
      <SubSlot4
        imagePath={props.subAbility4.path}
        setAbility={props.setSubAbility4}
      />
      <SubSlot5
        imagePath={props.subAbility5.path}
        setAbility={props.setSubAbility5}
      />
      <div className="ability-reset">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={()=>{resetAbility();}}>
          {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
          <path
            d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.84 0-95.17-15.58-134.2-44.86c-14.12-10.59-16.97-30.66-6.375-44.81c10.59-14.12 30.62-16.94 44.81-6.375c27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63C149.9 52.71 201.5 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"
            fill="white"
          />
        </svg>
        <p className="ability-reset-tooltip font-type2"><Text tid="abilityReset"/></p>
      </div>
    </div>
  );
};

export default Clothes;