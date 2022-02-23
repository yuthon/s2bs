import empty from '../images/ability/empty.png';
import inkSaverMain from '../images/ability/ISMain.png';
import inkSaverSub from '../images/ability/ISSub.png';
import inkRecovery from '../images/ability/REC.png';
import runSpeed from '../images/ability/RSU.png';
import swimSpeed from '../images/ability/SSU.png';
import specialCharge from '../images/ability/SCU.png';
import specialSaver from '../images/ability/SS.png';
import specialPower from '../images/ability/SpecialPU.png';
import qr from '../images/ability/QR.png';
import quickSuperJump from '../images/ability/QSJ.png';
import subPower from '../images/ability/SubPU.png';
import inkRes from '../images/ability/RES.png';
import bombDefence from '../images/ability/BDU.png';
import mpu from '../images/ability/MPU.png';

const SubSlotModal7 = (props) => {
  return (
    <div className="modal fade" id="subSlotModal7">
      <div className="modal-dialog">
        <div className="modal-content container">
          <div className="ability-list">
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("inkSaverMain");
                props.passImagePath(inkSaverMain);
                }
              }
            >
              <img src = {inkSaverMain} alt="インク効率アップ（メイン）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("inkSaverSub");
                props.passImagePath(inkSaverSub);
                }
              }
            >
              <img src = {inkSaverSub} alt="インク効率アップ（サブ）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("inkRecovery");
                props.passImagePath(inkRecovery);
                }
              }
            >
              <img src = {inkRecovery} alt="インク回復アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("runSpeed");
                props.passImagePath(runSpeed);
                }
              }
            >
              <img src = {runSpeed} alt="ヒト移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("swimSpeed");
                props.passImagePath(swimSpeed);
                }
              }
            >
              <img src = {swimSpeed} alt="イカ移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("specialCharge");
                props.passImagePath(specialCharge);
                }
              }
            >
              <img src = {specialCharge} alt="スペシャル増加アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("specialSaver");
                props.passImagePath(specialSaver);
                }
              }
            >
              <img src = {specialSaver} alt="スペシャル減少量ダウン"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("specialPower");
                props.passImagePath(specialPower);
                }
              }
            >
              <img src = {specialPower} alt="スペシャル性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("qr");
                props.passImagePath(qr);
                }
              }
            >
              <img src = {qr} alt="復活時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("quickSuperJump");
                props.passImagePath(quickSuperJump);
                }
              }
            >
              <img src = {quickSuperJump} alt="スーパージャンプ時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("subPower");
                props.passImagePath(subPower);
                }
              }
            >
              <img src = {subPower} alt="サブ性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("inkRes");
                props.passImagePath(inkRes);
                }
              }
            >
              <img src = {inkRes} alt="相手インク影響軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("bombDefence");
                props.passImagePath(bombDefence);
                }
              }
            >
              <img src = {bombDefence} alt="爆風軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("mpu");
                props.passImagePath(mpu);
                }
              }
            >
              <img src = {mpu} alt="メイン性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passAbilityName("empty");
                props.passImagePath(empty);
                }
              }
            >
              <img src={empty} alt="スロットを空にする"/>
            </div>
          </div>
          <button
            className="modal-close-btn"
          >
            とじる
          </button>
        </div>
      </div>
    </div>  
  );
};

export default SubSlotModal7;