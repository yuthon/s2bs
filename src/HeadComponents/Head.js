import HeadGear from './HeadGear';
import MainSlot0 from '../SlotComponents/MainSlot0';
import SubSlot0 from '../SlotComponents/SubSlot0';
import SubSlot1 from '../SlotComponents/SubSlot1';
import SubSlot2 from '../SlotComponents/SubSlot2';

const Head = (props) => {
  return(
    <div className="">
      <div className="">
        <div className="">
          <h1>アタマ</h1>
        </div>
        <div className="">
          <div className="">
            <div className="gear-wrapper">  
              <HeadGear 
                passImagePath={props.passHeadGearImagePath}
              />
            </div>
          </div>
        </div>
        <div className="slot-row">
          <div className="ability-wrapper">
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
    </div>
  );
};

export default Head;