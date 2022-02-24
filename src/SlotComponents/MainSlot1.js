
const MainSlot1 = (props) => {
    return(
      <div className="">
          
        <div
          className="ability-icon main-slot slot"
          data-bs-toggle="modal"
          data-bs-target="#mainSlotModal1"
        >
          <div className="mainslot-tooltip">  
            <svg viewBox="0 0 200 200" width="58" height="58">
              <a href="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="クリックでギアパワーを変更">
                <circle cx="100" cy="100" r="100" opacity="0"/>
              </a>
            </svg>
          </div>
          <img className="mainslot-img" src={props.imagePath} alt=""/>
        </div>
      </div>
    );
  };

export default MainSlot1;