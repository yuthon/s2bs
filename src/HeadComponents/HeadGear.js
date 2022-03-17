
const HeadGear = (props) => {
  const openHeadGearModal = function() {
    return null
  }
  return (
    <div className="gear-img" data-bs-toggle="modal" data-bs-target="#headGearModal" onClick={()=>{openHeadGearModal()}}>
      <p className="gear-tooltip font-type2">クリックでギアを変更</p>
      <img className="gear-img" src={props.passImagePath} alt=""/>
    </div>
  );
};


export default HeadGear;