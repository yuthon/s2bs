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

const SubSlotModal = (props) => {
  
  const passAbilityName = (ability) => {
    if (props.slotNumber === 0) {
      return props.passAbilityName0(ability)
    } else if (props.slotNumber === 1) {
      return props.passAbilityName1(ability)
    } else if (props.slotNumber === 2) {
      return props.passAbilityName2(ability)
    } else if (props.slotNumber === 3) {
      return props.passAbilityName3(ability)
    } else if (props.slotNumber === 4) {
      return props.passAbilityName4(ability)
    } else if (props.slotNumber === 5) {
      return props.passAbilityName5(ability)
    } else if (props.slotNumber === 6) {
      return props.passAbilityName6(ability)
    } else if (props.slotNumber === 7) {
      return props.passAbilityName7(ability)
    } else if (props.slotNumber === 8) {
      return props.passAbilityName8(ability)
    }
  }

  const passImagePath = (path) => {
    if (props.slotNumber === 0) {
      return props.passImagePath0(path)
    } else if (props.slotNumber === 1) {
      return props.passImagePath1(path)
    } else if (props.slotNumber === 2) {
      return props.passImagePath2(path)
    } else if (props.slotNumber === 3) {
      return props.passImagePath3(path)
    } else if (props.slotNumber === 4) {
      return props.passImagePath4(path)
    } else if (props.slotNumber === 5) {
      return props.passImagePath5(path)
    } else if (props.slotNumber === 6) {
      return props.passImagePath6(path)
    } else if (props.slotNumber === 7) {
      return props.passImagePath7(path)
    } else if (props.slotNumber === 8) {
      return props.passImagePath8(path)
    }
  }

  return (
    <div className="modal fade" id="subSlotModal" tabIndex="-1" aria-labelledby="SubSlotModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content container">
          <div className="ability-list">
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("inkSaverMain");
                passImagePath(inkSaverMain);
                }
              }
            >
              <img src = {inkSaverMain} alt="インク効率アップ（メイン）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("inkSaverSub");
                passImagePath(inkSaverSub);
                }
              }
            >
              <img src = {inkSaverSub} alt="インク効率アップ（サブ）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("inkRecovery");
                passImagePath(inkRecovery);
                }
              }
            >
              <img src = {inkRecovery} alt="インク回復アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("runSpeed");
                passImagePath(runSpeed);
                }
              }
            >
              <img src = {runSpeed} alt="ヒト移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("swimSpeed");
                passImagePath(swimSpeed);
                }
              }
            >
              <img src = {swimSpeed} alt="イカ移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("specialCharge");
                passImagePath(specialCharge);
                }
              }
            >
              <img src = {specialCharge} alt="スペシャル増加アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("specialSaver");
                passImagePath(specialSaver);
                }
              }
            >
              <img src = {specialSaver} alt="スペシャル減少量ダウン"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("specialPower");
                passImagePath(specialPower);
                }
              }
            >
              <img src = {specialPower} alt="スペシャル性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("qr");
                passImagePath(qr);
                }
              }
            >
              <img src = {qr} alt="復活時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("quickSuperJump");
                passImagePath(quickSuperJump);
                }
              }
            >
              <img src = {quickSuperJump} alt="スーパージャンプ時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("subPower");
                passImagePath(subPower);
                }
              }
            >
              <img src = {subPower} alt="サブ性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("inkRes");
                passImagePath(inkRes);
                }
              }
            >
              <img src = {inkRes} alt="相手インク影響軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("bombDefence");
                passImagePath(bombDefence);
                }
              }
            >
              <img src = {bombDefence} alt="爆風軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("mpu");
                passImagePath(mpu);
                }
              }
            >
              <img src = {mpu} alt="メイン性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("empty");
                passImagePath(empty);
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

export default SubSlotModal;