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
        controlModal={props.passControlSubSlotModal0}
        imagePath={props.passSubAbilityImagePath0}
      />
      <SubSlot1
        //SubSlot1のimg要素がクリックされたときにtrueを受け取る
        controlModal={props.passControlSubSlotModal1}
        //アビリティの画像のpathを受け取る
        imagePath={props.passSubAbilityImagePath1}
      />
      <SubSlot2
        controlModal={props.passControlSubSlotModal2}
        imagePath={props.passSubAbilityImagePath2}
      />
    </div>
  );
};

export default Head;