
const SubSlot3 = (props) => {
  
  return(
    <div>
      <div
        className="ability-icon sub-slot slot"
        data-bs-toggle="modal"
        data-bs-placement="bottom"
        data-bs-target="#subSlotModal3"
      >
        <img src={props.imagePath} alt=""/>
      </div>
    </div>
  );
};

export default SubSlot3;