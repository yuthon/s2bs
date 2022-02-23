import ClothesGear from './ClothesGear';
import MainSlot1 from '../SlotComponents/MainSlot1';
import SubSlot3 from '../SlotComponents/SubSlot3';
import SubSlot4 from '../SlotComponents/SubSlot4';
import SubSlot5 from '../SlotComponents/SubSlot5';

const Clothes = (props) => {
  return(
    <div className="ability-wrapper clothes">
      <div className="row cardheader">
        <h1>フク</h1>
      </div>
      <ClothesGear
        passImagePath={props.passClothesGearImagePath}
      />
      <div className="slot-row">
        <MainSlot1
          imagePath={props.passMainAbilityImagePath}
        />
        <SubSlot3
          controlModal={props.passControlSubSlotModal3}
          imagePath={props.passSubAbilityImagePath3}
        />
        <SubSlot4
          controlModal={props.passControlSubSlotModal4}
          imagePath={props.passSubAbilityImagePath4}
        />
        <SubSlot5
          controlModal={props.passControlSubSlotModal5}
          imagePath={props.passSubAbilityImagePath5}
        />
      </div>
    </div>
  );
};

export default Clothes;