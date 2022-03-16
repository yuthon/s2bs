
const HeadGear = (props) => {
  return (
    <div className="gear-img" data-bs-toggle="modal" data-bs-target="#headGearModal">
      <p className="gear-tooltip font-type2">クリックでギアを変更</p>
      <img className="gear-img" src={props.passImagePath} alt=""/>
    </div>
  );
};


export default HeadGear;