
const SubSlot2 = (props) => {
  
  return(
    <div className="subslot-right">
      <div
        className="ability-icon sub-slot slot"
        data-bs-toggle="modal"
        data-bs-target="#subSlotModal2"
      >
        <div className="subslot-tooltip">  
          <svg viewBox="0 0 200 200" width="48" height="48">
            <a href="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="クリックでギアパワーを変更">
              <circle cx="100" cy="100" r="100" opacity="0"/>
            </a>
          </svg>
        </div>
        <img className="subslot-img" src={props.imagePath} alt=""/>
      </div>
    </div>
  );
};

export default SubSlot2;