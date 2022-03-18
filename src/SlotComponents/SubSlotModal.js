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
  let target = document.getElementById("subSlotModal");
  let arrow = document.getElementById("subSlotModal-arrow");
  let arrowDown = document.getElementById("subSlotModal-arrow-down")

  if (props.slotNumber === 0) {
    passAbilityName = props.passAbilityName0;
    passImagePath = props.passImagePath0;
    target.style.top = "245px"
    arrow.style.left = "180px"
    arrow.style.display = "block"
    arrowDown.style.display = "none"
  } else if (props.slotNumber === 1) {
    passAbilityName = props.passAbilityName1;
    passImagePath = props.passImagePath1;
    target.style.top = "245px"
    arrow.style.left = "228px"
    arrow.style.display = "block"
    arrowDown.style.display = "none"
  } else if (props.slotNumber === 2) {
    passAbilityName = props.passAbilityName2;
    passImagePath = props.passImagePath2;
    target.style.top = "245px"
    arrow.style.left = "275px"
    arrow.style.display = "block"
    arrowDown.style.display = "none"
  } else if (props.slotNumber === 3) {
    passAbilityName = props.passAbilityName3;
    passImagePath = props.passImagePath3;
    target.style.top = "470px"
    arrow.style.left = "180px"
    arrow.style.display = "block"
    arrowDown.style.display = "none"
  } else if (props.slotNumber === 4) {
    passAbilityName = props.passAbilityName4;
    passImagePath = props.passImagePath4;
    target.style.top = "470px"
    arrow.style.left = "228px"
    arrow.style.display = "block"
    arrowDown.style.display = "none"
  } else if (props.slotNumber === 5) {
    passAbilityName = props.passAbilityName5;
    passImagePath = props.passImagePath5;
    target.style.top = "470px"
    arrow.style.left = "275px"
    arrow.style.display = "block"
    arrowDown.style.display = "none"
  } else if (props.slotNumber === 6) {
    passAbilityName = props.passAbilityName6;
    passImagePath = props.passImagePath6;
    target.style.top = "390px"
    arrowDown.style.left = "180px"
    arrow.style.display = "none"
    arrowDown.style.display = "block"
  } else if (props.slotNumber === 7) {
    passAbilityName = props.passAbilityName7;
    passImagePath = props.passImagePath7;
    target.style.top = "390px"
    arrowDown.style.left = "228px"
    arrow.style.display = "none"
    arrowDown.style.display = "block"
  } else if (props.slotNumber === 8) {
    passAbilityName = props.passAbilityName8;
    passImagePath = props.passImagePath8;
    target.style.top = "390px"
    arrowDown.style.left = "275px"
    arrow.style.display = "none"
    arrowDown.style.display = "block"
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
      <div id="subSlotModal-arrow"></div>
      <div id="subSlotModal-arrow-down"></div>
        <svg className="modal-close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onClick={()=>{closeGearModal()}}>
          {/* <!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
          <path 
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
            fill="#ebebeb"
          />
        </svg>
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