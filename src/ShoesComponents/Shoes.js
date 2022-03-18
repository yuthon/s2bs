import ShoesGear from './ShoesGear';
import MainSlot2 from '../SlotComponents/MainSlot2';
import SubSlot6 from '../SlotComponents/SubSlot6';
import SubSlot7 from '../SlotComponents/SubSlot7';
import SubSlot8 from '../SlotComponents/SubSlot8';

const Shoes = (props) => {
  return(
    <div className="gear-card shoes-stripe" id="shoesgear-card">
      <p className="gear-header font-type1">クツ</p>
      <ShoesGear
        passImagePath={props.passShoesGearImagePath}
      />
      <MainSlot2
        controlModal={props.passControlMainSlotModal}
        imagePath={props.passMainAbilityImagePath}
      />
      <SubSlot6
        controlModal={props.passControlSubSlotModal6}
        imagePath={props.passSubAbilityImagePath6}
        setSubSlotNumber={props.setSubSlotNumber}
      />
      <SubSlot7
        controlModal={props.passControlSubSlotModal7}
        imagePath={props.passSubAbilityImagePath7}
        setSubSlotNumber={props.setSubSlotNumber}
      />
      <SubSlot8
        controlModal={props.passControlSubSlotModal8}
        imagePath={props.passSubAbilityImagePath8}
        setSubSlotNumber={props.setSubSlotNumber}
      />
    </div>
  );
};

export default Shoes;