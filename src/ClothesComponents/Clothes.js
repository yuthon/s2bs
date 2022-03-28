import ClothesGear from './ClothesGear';
import MainSlot1 from '../SlotComponents/MainSlot1';
import SubSlot3 from '../SlotComponents/SubSlot3';
import SubSlot4 from '../SlotComponents/SubSlot4';
import SubSlot5 from '../SlotComponents/SubSlot5';

const Clothes = (props) => {
  return(
    <div className="gear-card clothes-stripe my-auto" id="clothesgear-card">
      <p className="gear-header font-type1">フク</p>
      <ClothesGear
        imagePath={props.clothesImagePath}
      />
      <MainSlot1
        imagePath={props.mainAbilityImagePath}
        setImagePath={props.setMainAbilityImagePath}
        setAbilityName={props.setMainAbilityName}
      />
      <SubSlot3
        imagePath={props.subAbilityImagePath3}
        setAbilityName={props.setSubAbilityName3}
        setImagePath={props.setSubAbilityImagePath3}
      />
      <SubSlot4
        imagePath={props.subAbilityImagePath4}
        setAbilityName={props.setSubAbilityName4}
        setImagePath={props.setSubAbilityImagePath4}
      />
      <SubSlot5
        imagePath={props.subAbilityImagePath5}
        setAbilityName={props.setSubAbilityName5}
        setImagePath={props.setSubAbilityImagePath5}
      />
      <div style={{height:"30px"}}></div>
    </div>
  );
};

export default Clothes;