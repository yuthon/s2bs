import GearIconFooter from './GearIconFooter';
// ブランドの画像
import Batoroika from './images/brands/B00.png';
import Aironic from './images/brands/B01.png';
import Kuragesu from './images/brands/B02.png';
import Rockenberg from './images/brands/B03.png';
import Ezokko from './images/brands/B04.png';
import Forima from './images/brands/B05.png';
import Hokkori from './images/brands/B06.png';
import Hotakkusu from './images/brands/B07.png';
import Zimon from './images/brands/B08.png';
import Sigureni from './images/brands/B09.png';
import Arome from './images/brands/B10.png';
import Yako from './images/brands/B11.png';
import Anaaki from './images/brands/B15.png';
import Enperry from './images/brands/B16.png';
import Tatakikensaki from './images/brands/B17.png';
import Kumasan from './images/brands/B97.png';
import Atarimeido from './images/brands/B98.png';
// ギアパワーの画像
import inkSaverMain from './images/ability/ISMain.png';
import inkSaverSub from './images/ability/ISSub.png';
import inkRecovery from './images/ability/REC.png';
import runSpeed from './images/ability/RSU.png';
import swimSpeed from './images/ability/SSU.png';
import specialCharge from './images/ability/SCU.png';
import specialSaver from './images/ability/SS.png';
import specialPower from './images/ability/SpecialPU.png';
import qr from './images/ability/QR.png';
import quickSuperJump from './images/ability/QSJ.png';
import subPower from './images/ability/SubPU.png';
import inkRes from './images/ability/RES.png';
import bombDefence from './images/ability/BDU.png';
import mpu from './images/ability/MPU.png';
import empty from './images/ability/empty.png';

const GearIcon = (props) => {
  
  return (
    <div
      className="gear-icon"
      onClick={()=>{
        props.passChosenGear(props.gear.id);
        props.passImagePath(props.gear.path);
        props.setGear(props.gear);
        }
      }
    > 
      <div className="gear-icon-tooltip-arrow">
        <div className="tooltip-container">
          <span className="gear-icon-tooltip font-type2">{props.gear.name}</span>
        </div>
      </div>
      <img className="gear-icon-img" src={props.gear.path} alt=""/>
    </div>
  )
}

export default GearIcon;