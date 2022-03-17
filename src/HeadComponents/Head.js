import HeadGear from './HeadGear';
import MainSlot0 from '../SlotComponents/MainSlot0';
import SubSlot0 from '../SlotComponents/SubSlot0';
import SubSlot1 from '../SlotComponents/SubSlot1';
import SubSlot2 from '../SlotComponents/SubSlot2';

const Head = (props) => {
  return(
    <div className="container px-0 gear-card" id="headgear-card">
      <p className="gear-header font-type1">アタマ</p>
      <HeadGear
        passImagePath={props.passHeadGearImagePath}
      />
      <MainSlot0
        imagePath={props.passMainAbilityImagePath}
      />
      <SubSlot0
        imagePath={props.passSubAbilityImagePath0}
        setSubSlotNumber={props.setSubSlotNumber}
      />
      <SubSlot1
        //アビリティの画像のpathを受け取る
        imagePath={props.passSubAbilityImagePath1}
        setSubSlotNumber={props.setSubSlotNumber}
      />
      <SubSlot2
        imagePath={props.passSubAbilityImagePath2}
        setSubSlotNumber={props.setSubSlotNumber}
      />
    </div>
  );
};

export default Head;