
const SubSlot3 = (props) => {
  
  return(
    <div
      className="ability-icon sub-slot subslot-left"
      data-bs-toggle="modal"
      data-bs-target="#subSlotModal"
      onClick={()=>{props.setSubSlotNumber(3)}}
    >
      <div className="tooltip-top-arrow">
        <p className="slot-tooltip font-type2">クリックでギアパワーを変更</p>
      </div>
      <img className="subslot-img" src={props.imagePath} alt=""/>
    </div>
  );
};

export default SubSlot3;