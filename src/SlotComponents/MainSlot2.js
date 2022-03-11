
const MainSlot2 = (props) => {
    return(
        <div
          className="ability-icon main-slot slot"
          data-bs-toggle="modal"
          data-bs-target="#mainSlotModal2"
        >
          <div className="mainslot-tooltip">  
            <svg viewBox="0 0 200 200" width="55" height="55">
              <a href="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="クリックでギアパワーを変更">
                <circle cx="100" cy="100" r="100" opacity="0"/>
              </a>
            </svg>
          </div>
          <img className="mainslot-img" src={props.imagePath} alt=""/>
        </div>
    );
  };

export default MainSlot2;