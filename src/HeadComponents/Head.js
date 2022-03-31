import HeadGear from './HeadGear';
import MainSlot0 from '../SlotComponents/MainSlot0';
import SubSlot0 from '../SlotComponents/SubSlot0';
import SubSlot1 from '../SlotComponents/SubSlot1';
import SubSlot2 from '../SlotComponents/SubSlot2';
import empty from '../images/ability/empty.png';

const Head = (props) => {
  const resetAbility = function() {
    props.setMainAbilityImagePath(empty);
    props.setMainAbilityName("empty");
    props.setSubAbilityName0("empty");
    props.setSubAbilityImagePath0(empty);
    props.setSubAbilityName1("empty");
    props.setSubAbilityImagePath1(empty);
    props.setSubAbilityName2("empty");
    props.setSubAbilityImagePath2(empty);
  }


  return(
    <div className="gear-card head-stripe my-2" id="headgear-card">
      <p className="gear-header font-type1">アタマ</p>
      <HeadGear
        imagePath={props.headGear.path}
      />
      <MainSlot0
        setAbility={props.setMainAbility}
        ability={props.mainAbility}
        gearName={props.headGear.name}
      />
      <SubSlot0
        imagePath={props.subAbilityImagePath0}
        setAbilityName={props.setSubAbilityName0}
        setImagePath={props.setSubAbilityImagePath0}
      />
      <SubSlot1
        //アビリティの画像のpathを受け取る
        imagePath={props.subAbilityImagePath1}
        setAbilityName={props.setSubAbilityName1}
        setImagePath={props.setSubAbilityImagePath1}
      />
      <SubSlot2
        imagePath={props.subAbilityImagePath2}
        setAbilityName={props.setSubAbilityName2}
        setImagePath={props.setSubAbilityImagePath2}
      />
      <div className="ability-reset">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={()=>{resetAbility();}}>
          {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
          <path
            d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.84 0-95.17-15.58-134.2-44.86c-14.12-10.59-16.97-30.66-6.375-44.81c10.59-14.12 30.62-16.94 44.81-6.375c27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63C149.9 52.71 201.5 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"
            fill="white"
          />
        </svg>
        <p className="ability-reset-tooltip font-type2">ギアパワーをリセット</p>
      </div>
    </div>
  );
};

export default Head;