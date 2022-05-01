import { FC, ReactElement } from 'react';
import ShoesGear from './ShoesGear';
import { Text } from '../languages/Text';
import MainSlot2 from '../SlotComponents/MainSlot2';
import SubSlot6 from '../SlotComponents/SubSlot6';
import SubSlot7 from '../SlotComponents/SubSlot7';
import SubSlot8 from '../SlotComponents/SubSlot8';
import empty from '../images/ability/empty.png';
import Canvas_White from '../images/gear/Shs_FST000.png';

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

type ShoesProps = {
  shoesGear: GearType,
  setShoesGear: React.Dispatch<React.SetStateAction<GearType>>,
  mainAbility: AbilityType,
  setMainAbility: React.Dispatch<React.SetStateAction<AbilityType>>,
  subAbility6: AbilityType,
  setSubAbility6: React.Dispatch<React.SetStateAction<AbilityType>>,
  subAbility7: AbilityType,
  setSubAbility7: React.Dispatch<React.SetStateAction<AbilityType>>,
  subAbility8: AbilityType,
  setSubAbility8: React.Dispatch<React.SetStateAction<AbilityType>>,
}

const Shoes: FC<ShoesProps> = (props): ReactElement => {
  const resetAbility = function() {
    props.setMainAbility({name:"empty", path:empty});
    props.setSubAbility6({name:"empty", path:empty});
    props.setSubAbility7({name:"empty", path:empty});
    props.setSubAbility8({name:"empty", path:empty});
  }
  
  const resetGear = function() {
    props.setShoesGear({name:"キャンバス ホワイト",path:Canvas_White,id:"Canvas_White",brand:"クラーゲス", default: ''})
  }

  return(
    <div className="gear-card shoes-stripe my-2" id="shoesgear-card">
      <p className="gear-header font-type1"><Text tid="shoes"/></p>
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
      <ShoesGear
        imagePath={props.shoesGear.path}
      />
      <MainSlot2
        setAbility={props.setMainAbility}
        ability={props.mainAbility}
        gearName={props.shoesGear.name}
      />
      <SubSlot6
        imagePath={props.subAbility6.path}
        setAbility={props.setSubAbility6}
      />
      <SubSlot7
        imagePath={props.subAbility7.path}
        setAbility={props.setSubAbility7}
      />
      <SubSlot8
        imagePath={props.subAbility8.path}
        setAbility={props.setSubAbility8}
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

export default Shoes;