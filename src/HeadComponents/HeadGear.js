import { Text } from "../languages/Text";

const HeadGear = (props) => {
  let target;
  const openHeadGearModal = function() {
    target = document.getElementById("headGearModal")
    target.style.display = "block"
  }
  
  return (
    <div className="gear-img" onClick={()=>{openHeadGearModal()}}>
      <div className="gear-tooltip-arrow">
        <div className="gear-tooltip-container">
          <p className="gear-tooltip font-type2"><Text tid="changeGear"/></p>
        </div>
      </div>
      <img src={props.imagePath} alt=""/>
    </div>
  );
};


export default HeadGear;