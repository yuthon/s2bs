
const ShoesGear = (props) => {
  return (
    <div className="btn clothes-tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="クリックでギアを変更">
        <div className="gear-image" data-bs-toggle="modal" data-bs-target="#shoesGearModal" >
          <img src={props.passImagePath} alt=""/>
        </div>
      </div>
  );
};


export default ShoesGear;