import HeadGear from './HeadGear';
import MainSlot0 from '../SlotComponents/MainSlot0';
import SubSlot0 from '../SlotComponents/SubSlot0';
import SubSlot1 from '../SlotComponents/SubSlot1';
import SubSlot2 from '../SlotComponents/SubSlot2';

const Head = (props) => {
  return(
    <div className="headgear-card">
      <div className="container px-0">
        <div className="gear-header"> 
          <div className="font-type1 text-white">
            <span className="h1 my-0">アタマ</span>
          </div>
        </div>
        <HeadGear 
          passImagePath={props.passHeadGearImagePath}
        />
        <div className="slot-row">
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
      </div>
    </div>
  );
};

export default Head;