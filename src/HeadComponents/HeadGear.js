
const HeadGear = (props) => {
  let target;
  const openHeadGearModal = function() {
    target = document.getElementById("headGearModal")
    target.style.display = "block"
  }
  
  return (
    <div className="gear-img" onClick={()=>{openHeadGearModal()}}>
      <p className="gear-tooltip font-type2">クリックでギアを変更</p>
      <img className="gear-img" src={props.imagePath} alt=""/>
    </div>
  );
};


export default HeadGear;