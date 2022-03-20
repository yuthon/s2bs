import HeadGear from './HeadGear';
import MainSlot0 from '../SlotComponents/MainSlot0';
import SubSlot0 from '../SlotComponents/SubSlot0';
import SubSlot1 from '../SlotComponents/SubSlot1';
import SubSlot2 from '../SlotComponents/SubSlot2';
import SubSlotModal0 from '../SlotComponents/SubSlotModal0';
import SubSlotModal1 from '../SlotComponents/SubSlotModal1';
import SubSlotModal2 from '../SlotComponents/SubSlotModal2';

const Head = (props) => {
  return(
    <div className="gear-card head-stripe my-xxl-auto" id="headgear-card">
      <p className="gear-header font-type1">アタマ</p>
      <HeadGear
        passImagePath={props.headImagePath}
      />
      <MainSlot0
        imagePath={props.mainAbilityImagePath}
      />
      <SubSlot0
        imagePath={props.subAbilityImagePath0}
      />
      <SubSlotModal0
        setAbilityName={props.setSubAbilityName0}
        setImagePath={props.setSubAbilityImagePath0}
      />
      <SubSlot1
        //アビリティの画像のpathを受け取る
        imagePath={props.subAbilityImagePath1}
      />
      <SubSlotModal1
        setAbilityName={props.setSubAbilityName1}
        setImagePath={props.setSubAbilityImagePath1}
      />
      <SubSlot2
        imagePath={props.subAbilityImagePath2}
      />
      <SubSlotModal2
        setAbilityName={props.setSubAbilityName2}
        setImagePath={props.setSubAbilityImagePath2}
      />
    </div>
  );
};

export default Head;