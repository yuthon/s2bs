import { FC, ReactElement } from 'react';
import { Text } from "../languages/Text";

type ShoesGearProps = {
  imagePath: string,
}

const ShoesGear: FC<ShoesGearProps> = (props): ReactElement => {
  let target;
  const openShoesGearModal = function() {
    target = document.getElementById("shoesGearModal")
    target!.style.display = "block"
  }
  
  return (
    <div className="gear-img" onClick={()=>{openShoesGearModal()}}>
      <div className="gear-tooltip-arrow">
        <div className="gear-tooltip-container">
          <p className="gear-tooltip font-type2"><Text tid="changeGear"/></p>
        </div>
      </div>
      <img src={props.imagePath} alt=""/>
    </div>
  );
};


export default ShoesGear;