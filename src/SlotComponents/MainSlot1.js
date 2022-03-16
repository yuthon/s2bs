
const MainSlot1 = (props) => {
    return(
      <div
      className="ability-icon main-slot"
      data-bs-toggle="modal"
      data-bs-target="#mainSlotModal1"
    >
      <div className="tooltip-top-arrow">
        <p className="mainslot-tooltip font-type2">クリックでギアパワーを変更</p>
      </div>
      <img className="mainslot-img" src={props.imagePath} alt=""/>
    </div>
    );
  };

export default MainSlot1;