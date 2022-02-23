
const HeadGear = (props) => {
  return (
    <div className="btn head-tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="クリックでギアを変更">
      <div className="gear-image btn btn-sm" data-bs-toggle="modal" data-bs-target="#headGearModal">
        <img src={props.passImagePath} alt=""/>
      </div>
    </div>
  );
};


export default HeadGear;