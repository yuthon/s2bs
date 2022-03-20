import ClothesGear from './ClothesGear';
import MainSlot1 from '../SlotComponents/MainSlot1';
import SubSlot3 from '../SlotComponents/SubSlot3';
import SubSlot4 from '../SlotComponents/SubSlot4';
import SubSlot5 from '../SlotComponents/SubSlot5';
import SubSlotModal3 from '../SlotComponents/SubSlotModal3';
import SubSlotModal4 from '../SlotComponents/SubSlotModal4';
import SubSlotModal5 from '../SlotComponents/SubSlotModal5';

const Clothes = (props) => {
  return(
    <div className="gear-card clothes-stripe my-xxl-auto" id="clothesgear-card">
      <p className="gear-header font-type1">フク</p>
      <ClothesGear
        imagePath={props.clothesImagePath}
      />
      <MainSlot1
        imagePath={props.mainAbilityImagePath}
      />
      <SubSlot3
        imagePath={props.subAbilityImagePath3}
      />
      <SubSlotModal3
        setAbilityName={props.setSubAbilityName3}
        setImagePath={props.setSubAbilityImagePath3}
      />
      <SubSlot4
        imagePath={props.subAbilityImagePath4}
      />
      <SubSlotModal4
        setAbilityName={props.setSubAbilityName4}
        setImagePath={props.setSubAbilityImagePath4}
      />
      <SubSlot5
        imagePath={props.subAbilityImagePath5}
      />
      <SubSlotModal5
        setAbilityName={props.setSubAbilityName5}
        setImagePath={props.setSubAbilityImagePath5}
      />
    </div>
  );
};

export default Clothes;