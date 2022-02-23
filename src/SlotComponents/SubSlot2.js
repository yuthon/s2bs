
const SubSlot2 = (props) => {
  
  return(
    <div>
      <div
        className="ability-icon sub-slot slot"
        data-bs-toggle="modal"
        data-bs-placement="bottom"
        data-bs-target="#subSlotModal2"
      >
        <img src={props.imagePath} alt=""/>
      </div>
    </div>
  );
};

export default SubSlot2;