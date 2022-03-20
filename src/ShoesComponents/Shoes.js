import ShoesGear from './ShoesGear';
import MainSlot2 from '../SlotComponents/MainSlot2';
import SubSlot6 from '../SlotComponents/SubSlot6';
import SubSlot7 from '../SlotComponents/SubSlot7';
import SubSlot8 from '../SlotComponents/SubSlot8';
import SubSlotModal6 from '../SlotComponents/SubSlotModal6';
import SubSlotModal7 from '../SlotComponents/SubSlotModal7';
import SubSlotModal8 from '../SlotComponents/SubSlotModal8';

const Shoes = (props) => {
  return(
    <div className="gear-card shoes-stripe my-xxl-auto" id="shoesgear-card">
      <p className="gear-header font-type1">クツ</p>
      <ShoesGear
        imagePath={props.shoesImagePath}
      />
      <MainSlot2
        imagePath={props.mainAbilityImagePath}
      />
      <SubSlot6
        imagePath={props.subAbilityImagePath6}
      />
      <SubSlotModal6
        setAbilityName={props.setSubAbilityName6}
        setImagePath={props.setSubAbilityImagePath6}
      />
      <SubSlot7
        imagePath={props.subAbilityImagePath7}
      />
      <SubSlotModal7
        setAbilityName={props.setSubAbilityName7}
        setImagePath={props.setSubAbilityImagePath7}
      />
      <SubSlot8
        imagePath={props.subAbilityImagePath8}
      />
      <SubSlotModal8
        setAbilityName={props.setSubAbilityName8}
        setImagePath={props.setSubAbilityImagePath8}
      />
    </div>
  );
};

export default Shoes;