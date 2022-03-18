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
  // どのサブスロットから開かれたかに応じて適切な関数を返す
  // 矢印とモーダルが適切な位置に表示されるようにする
  let passAbilityName;
  let passImagePath;

  if (props.slotNumber === 0) {
    passAbilityName = props.passAbilityName0;
    passImagePath = props.passImagePath0;
  } else if (props.slotNumber === 1) {
    passAbilityName = props.passAbilityName1;
    passImagePath = props.passImagePath1;
  } else if (props.slotNumber === 2) {
    passAbilityName = props.passAbilityName2;
    passImagePath = props.passImagePath2;
  } else if (props.slotNumber === 3) {
    passAbilityName = props.passAbilityName3;
    passImagePath = props.passImagePath3;
  } else if (props.slotNumber === 4) {
    passAbilityName = props.passAbilityName4;
    passImagePath = props.passImagePath4;
  } else if (props.slotNumber === 5) {
    passAbilityName = props.passAbilityName5;
    passImagePath = props.passImagePath5;
  } else if (props.slotNumber === 6) {
    passAbilityName = props.passAbilityName6;
    passImagePath = props.passImagePath6;
  } else if (props.slotNumber === 7) {
    passAbilityName = props.passAbilityName7;
    passImagePath = props.passImagePath7;
  } else if (props.slotNumber === 8) {
    passAbilityName = props.passAbilityName8;
    passImagePath = props.passImagePath8;
  } 


  // const passAbilityName = (ability) => {
  //   if (props.slotNumber === 0) {
  //     return props.passAbilityName0(ability)
  //   } else if (props.slotNumber === 1) {
  //     return props.passAbilityName1(ability)
  //   } else if (props.slotNumber === 2) {
  //     return props.passAbilityName2(ability)
  //   } else if (props.slotNumber === 3) {
  //     return props.passAbilityName3(ability)
  //   } else if (props.slotNumber === 4) {
  //     return props.passAbilityName4(ability)
  //   } else if (props.slotNumber === 5) {
  //     return props.passAbilityName5(ability)
  //   } else if (props.slotNumber === 6) {
  //     return props.passAbilityName6(ability)
  //   } else if (props.slotNumber === 7) {
  //     return props.passAbilityName7(ability)
  //   } else if (props.slotNumber === 8) {
  //     return props.passAbilityName8(ability)
  //   }
  // }

  // const passImagePath = (path) => {
  //   if (props.slotNumber === 0) {
  //     return props.passImagePath0(path)
  //   } else if (props.slotNumber === 1) {
  //     return props.passImagePath1(path)
  //   } else if (props.slotNumber === 2) {
  //     return props.passImagePath2(path)
  //   } else if (props.slotNumber === 3) {
  //     return props.passImagePath3(path)
  //   } else if (props.slotNumber === 4) {
  //     return props.passImagePath4(path)
  //   } else if (props.slotNumber === 5) {
  //     return props.passImagePath5(path)
  //   } else if (props.slotNumber === 6) {
  //     return props.passImagePath6(path)
  //   } else if (props.slotNumber === 7) {
  //     return props.passImagePath7(path)
  //   } else if (props.slotNumber === 8) {
  //     return props.passImagePath8(path)
  //   }
  // }

  // モーダルを閉じる関数
  const closeGearModal = function() {
    let target = document.getElementById("subSlotModal")
    target.style.display = "none"
  }

  return (
    <div className="ability-modal" id="subSlotModal">
          <button type="button" className="btn-close btn-close-white" onClick={()=>{closeGearModal()}}></button>
          <div className="ability-list d-flex flex-wrap">
          
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("inkSaverMain");
                passImagePath(inkSaverMain);
                }
              }
            >
              <img className="abilitymodal-img" src = {inkSaverMain} alt="インク効率アップ（メイン）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("inkSaverSub");
                passImagePath(inkSaverSub);
                }
              }
            >
              <img className="abilitymodal-img" src = {inkSaverSub} alt="インク効率アップ（サブ）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("inkRecovery");
                passImagePath(inkRecovery);
                }
              }
            >
              <img className="abilitymodal-img" src = {inkRecovery} alt="インク回復アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("runSpeed");
                passImagePath(runSpeed);
                }
              }
            >
              <img className="abilitymodal-img" src = {runSpeed} alt="ヒト移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("swimSpeed");
                passImagePath(swimSpeed);
                }
              }
            >
              <img className="abilitymodal-img" src = {swimSpeed} alt="イカ移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("specialCharge");
                passImagePath(specialCharge);
                }
              }
            >
              <img className="abilitymodal-img" src = {specialCharge} alt="スペシャル増加アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("specialSaver");
                passImagePath(specialSaver);
                }
              }
            >
              <img className="abilitymodal-img" src = {specialSaver} alt="スペシャル減少量ダウン"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("specialPower");
                passImagePath(specialPower);
                }
              }
            >
              <img className="abilitymodal-img" src = {specialPower} alt="スペシャル性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("qr");
                passImagePath(qr);
                }
              }
            >
              <img className="abilitymodal-img" src = {qr} alt="復活時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("quickSuperJump");
                passImagePath(quickSuperJump);
                }
              }
            >
              <img className="abilitymodal-img" src = {quickSuperJump} alt="スーパージャンプ時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("subPower");
                passImagePath(subPower);
                }
              }
            >
              <img className="abilitymodal-img" src = {subPower} alt="サブ性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("inkRes");
                passImagePath(inkRes);
                }
              }
            >
              <img className="abilitymodal-img" src = {inkRes} alt="相手インク影響軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("bombDefence");
                passImagePath(bombDefence);
                }
              }
            >
              <img className="abilitymodal-img" src = {bombDefence} alt="爆風軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("mpu");
                passImagePath(mpu);
                }
              }
            >
              <img className="abilitymodal-img" src = {mpu} alt="メイン性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                passAbilityName("empty");
                passImagePath(empty);
                }
              }
            >
              <img className="abilitymodal-img" src={empty} alt="スロットを空にする"/>
            </div>
          </div>
        </div>
  );
};

export default SubSlotModal;