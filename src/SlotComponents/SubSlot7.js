
const SubSlot7 = (props) => {
  
  return(
    <div
      className="ability-icon sub-slot subslot-mid"
      data-bs-toggle="modal"
      data-bs-target="#subSlotModal1"
    >
      <div className="tooltip-top-arrow">
        <p className="slot-tooltip font-type2">クリックでギアパワーを変更</p>
      </div>
      <img className="subslot-img" src={props.imagePath} alt=""/>
    </div>
  );
};

export default SubSlot7;