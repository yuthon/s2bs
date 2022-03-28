import HeadGear from './HeadGear';
import MainSlot0 from '../SlotComponents/MainSlot0';
import SubSlot0 from '../SlotComponents/SubSlot0';
import SubSlot1 from '../SlotComponents/SubSlot1';
import SubSlot2 from '../SlotComponents/SubSlot2';

const Head = (props) => {
  return(
    <div className="gear-card head-stripe my-3" id="headgear-card">
      <p className="gear-header font-type1">アタマ</p>
      <HeadGear
        passImagePath={props.headImagePath}
      />
      <MainSlot0
        imagePath={props.mainAbilityImagePath}
        setImagePath={props.setMainAbilityImagePath}
        setAbilityName={props.setMainAbilityName}
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
      <div style={{height:"30px"}}></div>
    </div>
  );
};

export default Head;