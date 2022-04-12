import { Text } from "../languages/Text";

const ClothesGear = (props) => {
  let target;
  const openClothesGearModal = function() {
    target = document.getElementById("clothesGearModal")
    target.style.display = "block"
  }
  
  return(
    <div className="gear-img" onClick={()=>{openClothesGearModal()}}>
      <div className="gear-tooltip-arrow">
        <div className="gear-tooltip-container">
          <p className="gear-tooltip font-type2"><Text tid="changeGear"/></p>
        </div>
      </div>
      <img src={props.imagePath} alt=""/>
    </div>
  );
};

export default ClothesGear;