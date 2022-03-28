import { useState } from 'react';
// コンポーネント
import InkSaverMain from './InkSaverMain';
import InkSaverSub from './InkSaverSub';
import InkRecovery from './InkRecovery';
import RunSpeed from './RunSpeed';
import SwimSpeed from './SwimSpeed';
import SpecialChargeUp from './SpecialChargeUp';
import SpecialSaver from './SpecialSaver';
import SpecialPower from './SpecialPower';
import QuickRespawn from './QuickRespawn';
import QuickSuperJump from './QuickSuperJump';
import SubPowerUp from './SubPowerUp';
import InkResistance from './InkResistance';
import BombDefenceUp from './BombDefenceUp';
import MainPowerUp from './MainPowerUp';
// アビリティの画像
import ComebackImg from '../images/ability/CB.png';
import LastDitchEffortImg from '../images/ability/LDE.png';
import OpeningGanbitImg from '../images/ability/OG.png';
import DropRollerImg from '../images/ability/DR.png';


const AbilityPoint = (props) => {
  // 特殊な発動条件を持つギアパワーの発動のONOFFを管理
  const [isComebackActive, Comeback] = useState(true);
  const [isOpeningGanbitActive, OpeningGanbit] = useState(true);
  const [isLastDitchEffortActive, LastDitchEffort] = useState(true);
  const [isDropRollerActive, DropRoller] = useState(true);
  
  const subAbilityName = [
    props.subAbilityName0, props.subAbilityName1, props.subAbilityName2,
    props.subAbilityName3, props.subAbilityName4, props.subAbilityName5,
    props.subAbilityName6, props.subAbilityName7, props.subAbilityName8
    ];
    
  const mainAbilityName = [
    props.mainAbilityName0, props.mainAbilityName1, props.mainAbilityName2,
    ];
  //メイン効率
  
  let inkSaverMainAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "inkSaverMain") {
      inkSaverMainAP = inkSaverMainAP + 3
    }
    if (mainAbilityName[i] === "inkSaverMain") {
      inkSaverMainAP = inkSaverMainAP + 10
    }
  }
  //サブ効率
  let inkSaverSubAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "inkSaverSub") {
      inkSaverSubAP = inkSaverSubAP + 3;
    }
    if (mainAbilityName[i] === "inkSaverSub") {
      inkSaverSubAP = inkSaverSubAP + 10;
    }
  }
  //インク回復
  let inkRecoveryAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "inkRecovery") {
      inkRecoveryAP = inkRecoveryAP + 3;
    }
    if (mainAbilityName[i] === "inkRecovery") {
      inkRecoveryAP = inkRecoveryAP + 10;
    }
  }
  //ヒト速度
  let runSpeedAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "runSpeed") {
      runSpeedAP = runSpeedAP + 3;
    }
    if (mainAbilityName[i] === "runSpeed") {
      runSpeedAP = runSpeedAP + 10;
    }
  }
  //イカ速度
  let swimSpeedAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "swimSpeed") {
      swimSpeedAP = swimSpeedAP + 3;
    }
    if (mainAbilityName[i] === "swimSpeed") {
      swimSpeedAP = swimSpeedAP + 10;
    }
  }
  //スぺ増
  let specialChargeAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "specialCharge") {
      specialChargeAP = specialChargeAP + 3;
    }
    if (mainAbilityName[i] === "specialCharge") {
      specialChargeAP = specialChargeAP + 10;
    }
  }
  //スぺ減
  let specialSaverAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "specialSaver") {
      specialSaverAP = specialSaverAP + 3;
    }
    if (mainAbilityName[i] === "specialSaver") {
      specialSaverAP = specialSaverAP + 10;
    }
  }
  //スぺ性
  let specialPowerAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "specialPower") {
      specialPowerAP = specialPowerAP + 3;
    }
    if (mainAbilityName[i] === "specialPower") {
      specialPowerAP = specialPowerAP + 10;
    }
  }
  //復活短縮
  let qrAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "qr") {
      qrAP = qrAP + 3;
    }
    if (mainAbilityName[i] === "qr") {
      qrAP = qrAP + 10;
    }
  }
  //スパ短
  let quickSuperJumpAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "quickSuperJump") {
      quickSuperJumpAP = quickSuperJumpAP + 3;
    }
    if (mainAbilityName[i] === "quickSuperJump") {
      quickSuperJumpAP = quickSuperJumpAP + 10;
    }
  }
  //サブ性能
  let subPowerAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "subPower") {
      subPowerAP = subPowerAP + 3;
    }
    if (mainAbilityName[i] === "subPower") {
      subPowerAP = subPowerAP + 10;
    }
  }
  //インク影響軽減
  let inkResAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "inkRes") {
      inkResAP = inkResAP + 3;
    }
    if (mainAbilityName[i] === "inkRes") {
      inkResAP = inkResAP + 10;
    }
  }
  //爆減
  let bombDefenceAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "bombDefence") {
      bombDefenceAP = bombDefenceAP + 3;
    }
    if (mainAbilityName[i] === "bombDefence") {
      bombDefenceAP = bombDefenceAP + 10;
    }
  }
  //メイン性能
  let mpuAP = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "mpu") {
      mpuAP = mpuAP + 3;
    }
    if (mainAbilityName[i] === "mpu") {
      mpuAP = mpuAP + 10;
    }
  }
      
  // ボタンのonoffを切り替える関数
  const btnToggle = function(ability) {
    let target = document.getElementById(`switch-${ability}`);
    if (target.className === "turned-on") {
      target.className = "turned-off";
    } else {
      target.className = "turned-on";
    }
  };
  
  // カムバック
  let btnComeback;
  let toggleComeback;
  if (mainAbilityName[0] === "comeback") {
    if (isComebackActive) {
      // ONの時の切り替えスイッチのJSX
      toggleComeback = (
        <div 
          className="turned-on"
          id="switch-comeback"
          onClick={()=>{
            btnToggle("comeback");
            if (isComebackActive) {
              Comeback(false);
            } else {
              Comeback(true);
            }
          }}
        >
          <div className="switch-base"></div>
          <div id="switch-circle"></div>
        </div>
      )
      // APを加算
      inkSaverMainAP = inkSaverMainAP + 10;
      inkSaverSubAP = inkSaverSubAP + 10;
      inkRecoveryAP = inkRecoveryAP + 10;
      runSpeedAP = runSpeedAP + 10;
      swimSpeedAP = swimSpeedAP + 10;
      specialChargeAP = specialChargeAP + 10;
      
    } else {
      // OFFの時の切り替えスイッチのJSX
      toggleComeback = (
        <div
          className="turned-off"
          id="switch-comeback"
          onClick={() => {
            btnToggle("comeback");
            if (isComebackActive) {
              Comeback(false);
            } else {
              Comeback(true);
            }
          } }
        >
          <div className="switch-base"></div>
          <div id="switch-circle"></div>
        </div>
      );
    }
    // 最終的に表示するJSX
    btnComeback = (
      <div className="ae-card row">
        <div className="ap-icon-area col-2">
          <div className="ability-icon ap-ability-icon">
            <img className="ap-ability-img" src={ComebackImg} alt=""/>
          </div>
        </div>
        <div className="ae-part col-10 row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">復活から20秒間、一部のギアパワーが上昇（メインインク効率・サブインク効率・インク回復力アップ・イカ移動速度・ヒト移動速度）</p>
          </div>
          <div className="col-5 m-auto">  
            {toggleComeback}
          </div>
        </div>
      </div>
    );
  }
  
  // スタートダッシュ
  let btnOpeningGanbit;
  let toggleOpeningGanbit;

  if (mainAbilityName[0] === "openingGanbit") {
    if (isOpeningGanbitActive) {
      // ONの時の切り替えスイッチのJSX
      toggleOpeningGanbit = (
        <div 
          className="turned-on"
          id="switch-openingGanbit"
          onClick={()=>{
            btnToggle("openingGanbit");
            if (isOpeningGanbitActive) {
              OpeningGanbit(false);
            } else {
              OpeningGanbit(true);
            }
          }}
        >
          <div className="switch-base"></div>
          <div id="switch-circle"></div>
        </div>
      );
      // APを加算
      runSpeedAP = runSpeedAP + 30;
      swimSpeedAP = swimSpeedAP + 30;
      inkResAP = inkResAP + 30;
    } else {
      // OFFの時の切り替えスイッチのJSX
      toggleOpeningGanbit = (
        <div 
          className="turned-off"
          id="switch-openingGanbit"
          onClick={()=>{
            btnToggle("openingGanbit");
            if (isOpeningGanbitActive) {
              OpeningGanbit(false);
            } else {
              OpeningGanbit(true);
            }
          }}
        >
          <div className="switch-base"></div>
          <div id="switch-circle"></div>
        </div>
      )
    }
    // 最終的に表示するJSX
    btnOpeningGanbit = (
      <div className="ae-card row">
        <div className="ap-icon-area col-2">
          <div className="ability-icon ap-ability-icon">
            <img className="ap-ability-img" src={OpeningGanbitImg} alt=""/>
          </div>
        </div>
        <div className="ae-part col-10 row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">バトル開始から30秒間、一部のギアパワーが上昇（イカ移動速度・ヒト移動速度・相手インク影響軽減）</p>
          </div>
          <div className="col-5 m-auto">  
            {toggleOpeningGanbit}
          </div>
        </div>
      </div>
    );
  }
  
  // ラストスパート
  let btnLastDitchEffort;
  let toggleLastDitchEffort;
  
  if (mainAbilityName[0] === "lde") {
    if (isLastDitchEffortActive) {
      // 切り替えスイッチのJSX
      toggleLastDitchEffort = (
        <div 
          className="turned-on"
          id="switch-lastDitchEffort"
          onClick={()=>{
            btnToggle("lastDitchEffort");
            if (isLastDitchEffortActive) {
              LastDitchEffort(false);
            } else {
              LastDitchEffort(true);
            }
          }}
        >
          <div className="switch-base"></div>
          <div id="switch-circle"></div>
        </div>
      );
      // APを加算
      inkSaverMainAP = inkSaverMainAP + 24;
      inkSaverSubAP = inkSaverSubAP + 24;
      inkRecoveryAP = inkRecoveryAP + 24;
    } else {
      toggleLastDitchEffort = (
        <div 
          className="turned-off"
          id="switch-lastDitchEffort"
          onClick={()=>{
            btnToggle("lastDitchEffort");
            if (isLastDitchEffortActive) {
              LastDitchEffort(false);
            } else {
              LastDitchEffort(true);
            }
          }}
        >
          <div className="switch-base"></div>
          <div id="switch-circle"></div>
        </div>
      )
    }
    // 最終的に表示するJSX
    btnLastDitchEffort = (
      <div className="ae-card row">
        <div className="ap-icon-area col-2">
          <div className="ability-icon ap-ability-icon">
            <img className="ap-ability-img" src={LastDitchEffortImg} alt=""/>
          </div>
        </div>
        <div className="ae-part col-10 row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">試合時間が残り30秒、あるいは相手のオブジェクトのカウントが30になると一部のギアパワーが上昇（メインインク効率・サブインク効率・インク回復力アップ）</p>
          </div>
          <div className="col-5 m-auto">  
            {toggleLastDitchEffort}
          </div>
        </div>
      </div>
    );
  }
  
  // 受け身
  let btnDropRoller;
  let toggleDropRoller;
  
  if (mainAbilityName[2] === "dropRoller") {
    if (isDropRollerActive) {
      // 切り替えスイッチのJSX
      toggleDropRoller = (
        <div 
          className="turned-on"
          id="switch-dropRoller"
          onClick={()=>{
            btnToggle("dropRoller");
            if (isDropRollerActive) {
              DropRoller(false);
            } else {
              DropRoller(true);
            }
          }}
        >
          <div className="switch-base"></div>
          <div id="switch-circle"></div>
        </div>
      );
      // APを加算
      runSpeedAP = runSpeedAP + 30;
      swimSpeedAP = swimSpeedAP + 30;
      inkResAP = inkResAP + 30;
    } else {
      toggleDropRoller = (
        <div 
          className="turned-off"
          id="switch-dropRoller"
          onClick={()=>{
            btnToggle("dropRoller");
            if (isDropRollerActive) {
              DropRoller(false);
            } else {
              DropRoller(true);
            }
          }}
        >
          <div className="switch-base"></div>
          <div id="switch-circle"></div>
        </div>
      )
    }
    // 最終的に表示するJSX
    btnDropRoller = (
      <div className="ae-card row">
        <div className="ap-icon-area col-2">
          <div className="ability-icon ap-ability-icon">
            <img className="ap-ability-img" src={DropRollerImg} alt=""/>
          </div>
        </div>
        <div className="ae-part col-10 row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">受け身術を発動してから3秒間、一部のギアパワーが上昇する（イカ移動速度・ヒト移動速度・インク影響軽減）</p>
          </div>
          <div className="col-5 m-auto">  
            {toggleDropRoller}
          </div>
        </div>
      </div>
    );
  }
  
  // APの上限は57なので特殊ギアによってそれ以上になった場合は強制的に57にする
  if (inkSaverMainAP > 57) {
    inkSaverMainAP = 57;
  }
  if (inkSaverSubAP > 57) {
    inkSaverSubAP = 57;
  }
  if (inkRecoveryAP > 57) {
    inkRecoveryAP = 57;
  }
  if (runSpeedAP > 57) {
    runSpeedAP = 57;
  }
  if (swimSpeedAP > 57) {
    swimSpeedAP = 57;
  } 
  if (inkResAP > 57) {
    inkResAP = 57;
  }
  
  
  return(
      <div className="d-flex flex-column gray-stripe" id="ae-display-area">
        <p id="ae-header">ギアパワー効果</p>
        <div className="special-ability">
          {btnComeback}
          {btnOpeningGanbit}
          {btnLastDitchEffort}
          {btnDropRoller}
        </div>
        <InkSaverMain 
          abilityPoint={inkSaverMainAP}
          weaponStatus={props.weaponStatus}
        />
        <InkSaverSub 
          abilityPoint={inkSaverSubAP}
          weaponStatus={props.weaponStatus}
        />  
        <InkRecovery 
          abilityPoint={inkRecoveryAP}
        />
        <RunSpeed 
          abilityPoint={runSpeedAP}
          weaponStatus={props.weaponStatus}
        /> 
        <SwimSpeed
          abilityPoint={swimSpeedAP}
          weaponStatus={props.weaponStatus}
          abilityName={mainAbilityName[1]}
        />
        <SpecialChargeUp 
          abilityPoint={specialChargeAP}
          weaponStatus={props.weaponStatus}
        />
        <SpecialSaver 
          abilityPoint={specialSaverAP}
          weaponStatus={props.weaponStatus}
          abilityName={mainAbilityName[1]}
        />
        <SpecialPower
          abilityPoint={specialPowerAP}
          weaponStatus={props.weaponStatus}
        />
        <QuickRespawn 
          abilityPoint={qrAP}
          abilityName={mainAbilityName[1]}
        />
        <QuickSuperJump 
          abilityPoint={quickSuperJumpAP}
        />
        <SubPowerUp 
          SPUabilityPoint={subPowerAP}
          QSJabilityPoint={quickSuperJumpAP}
          weaponStatus={props.weaponStatus}
        />
        <BombDefenceUp 
          abilityPoint={bombDefenceAP}
        />
        <InkResistance 
          abilityPoint={inkResAP}
        />
        <MainPowerUp
          abilityPoint={mpuAP}
          weaponStatus={props.weaponStatus}
        />
      </div>
  );
};

export default AbilityPoint;