
const MainSlot2 = (props) => {
    return(
      <div  className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="クリックでギアパワーを変更">
        <div
          className="ability-icon main-slot slot"
          data-bs-toggle="modal"
          data-bs-target="#mainSlotModal2"
        >
          <img src={props.imagePath} alt=""/>
        </div>
      </div>
    );
  };

export default MainSlot2;