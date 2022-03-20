// サブとスペシャル
import CurlingBomb from '../images/subSP/Wsb_Bomb_Curling.png';
import FizzyBomb from '../images/subSP/Wsb_Bomb_Fizzy.png';
import BurstBomb from '../images/subSP/Wsb_Bomb_Burst.png';
import AutoBomb from '../images/subSP/Wsb_Bomb_Auto.png';
import SplatBomb from '../images/subSP/Wsb_Bomb_Splat.png';
import SuctionBomb from '../images/subSP/Wsb_Bomb_Suction.png';
import Torpedo from '../images/subSP/Wsb_Torpedo.png';
import SquidBeakon from '../images/subSP/Wsb_SquidBeakon.png';
import PointSensor from '../images/subSP/Wsb_PointSensor.png';
import ToxicMist from '../images/subSP/Wsb_ToxicMist.png';
import SplashWall from '../images/subSP/Wsb_SplashWall.png';
import Sprinkler from '../images/subSP/Wsb_Sprinkler.png';
import InkMine from '../images/subSP/Wsb_InkMine.png';
import Baller from '../images/subSP/Wsp_Baller.png';
import Inkjet from '../images/subSP/Wsp_Inkjet.png';
import CurlingRush from '../images/subSP/Wsp_CurlingBombLauncher.png';
import BurstRush from '../images/subSP/Wsp_BurstBombLauncher.png';
import AutoRush from '../images/subSP/Wsp_AutoBombLauncher.png';
import SplatRush from '../images/subSP/Wsp_SplatBombLauncher.png';
import SuctionRush from '../images/subSP/Wsp_SuctionBombLauncher.png';
import InkStorm from '../images/subSP/Wsp_InkStorm.png';
import InkArmor from '../images/subSP/Wsp_InkArmor.png';
import BooyahBomb from '../images/subSP/Wsp_BooyahBomb.png';
import BubbleBlower from '../images/subSP/Wsp_BubbleBlower.png';
import SplashDown from '../images/subSP/Wsp_SplashDown.png';
import TentaMissile from '../images/subSP/Wsp_TentaMissile.png';
import UltraStamp from '../images/subSP/Wsp_UltraStamp.png';
import Stingray from '../images/subSP/Wsp_Stingray.png';

const Weapon = (props) => {

  return (
    <div className="mb-2" id="weapon-container">
      <div id="weapon-card">
      <div className="weapon-tooltip row" data-bs-toggle="tooltip" data-bs-placement="bottom" title="クリックでブキを変更">
        <div className="btn btn-sm col-5" data-bs-toggle="modal" data-bs-target="#weaponModal">
            <img src={props.weaponStatus.path} alt=""/>
        </div>
        <div className="col-7 py-2">
          <div className="weapon-sub-sp row">
            <div className="col-2">  
              <img src={props.weaponStatus.pathSub} className="img-sub-sp" alt=""/>
            </div>
            <p className="h5 text-white col-10">{props.weaponStatus.sub}</p>
          </div>
          <div className="weapon-sub-sp row my-1">
            <div className="col-2">  
              <img src={props.weaponStatus.pathSpecial} className="img-sub-sp" alt=""/>
            </div>
            <p className="h5 text-white col-10">{props.weaponStatus.special}</p>
          </div>
        </div>
      </div>
      <div id="weapon-footer">
        <div className="font-type1 text-white">
          <span className="h5 my-0">{props.weaponStatus.name}</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Weapon;