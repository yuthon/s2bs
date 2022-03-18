import ClothesGear from './ClothesGear';
import MainSlot1 from '../SlotComponents/MainSlot1';
import SubSlot3 from '../SlotComponents/SubSlot3';
import SubSlot4 from '../SlotComponents/SubSlot4';
import SubSlot5 from '../SlotComponents/SubSlot5';

const Clothes = (props) => {
  return(
    <div className="gear-card clothes-stripe" id="clothesgear-card">
      <p className="gear-header font-type1">フク</p>
      <ClothesGear
        passImagePath={props.passClothesGearImagePath}
      />
      <MainSlot1
        imagePath={props.passMainAbilityImagePath}
      />
      <SubSlot3
        controlModal={props.passControlSubSlotModal3}
        imagePath={props.passSubAbilityImagePath3}
        setSubSlotNumber={props.setSubSlotNumber}
      />
      <SubSlot4
        controlModal={props.passControlSubSlotModal4}
        imagePath={props.passSubAbilityImagePath4}
        setSubSlotNumber={props.setSubSlotNumber}
      />
      <SubSlot5
        controlModal={props.passControlSubSlotModal5}
        imagePath={props.passSubAbilityImagePath5}
        setSubSlotNumber={props.setSubSlotNumber}
      />
    </div>
  );
};

export default Clothes;