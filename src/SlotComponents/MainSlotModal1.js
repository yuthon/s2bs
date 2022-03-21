import empty from '../images/ability/empty.png';
import specialCharge from '../images/ability/SCU.png';
import inkSaverMain from '../images/ability/ISMain.png';
import inkSaverSub from '../images/ability/ISSub.png';
import inkRecorvery from '../images/ability/REC.png';
import runSpeed from '../images/ability/RSU.png';
import swimSpeed from '../images/ability/SSU.png';
import specialSaver from '../images/ability/SS.png';
import specialPower from '../images/ability/SpecialPU.png';
import qr from '../images/ability/QR.png';
import quickSuperJump from '../images/ability/QSJ.png';
import subPower from '../images/ability/SubPU.png';
import inkRes from '../images/ability/RES.png';
import bombDefence from '../images/ability/BDU.png';
import mpu from '../images/ability/MPU.png';
import ninjaSquid from '../images/ability/NS.png';
import haunt from '../images/ability/Haunt.png';
import respawnPunisher from '../images/ability/RP.png';
import thermalInk from '../images/ability/TI.png';
import abilityDoubler from '../images/ability/AD.png';

const MainSlotModal1 = (props) => {
   // モーダルを閉じる関数
   const closeGearModal = function() {
    let target = document.getElementById("mainSlotModal1")
    target.style.display = "none"
  }

  return (
    <div className="ability-modal mainSlotModal" id="mainSlotModal1">
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
                props.setImagePath(empty);
                props.setAbilityName("empty");
                }
              }
            >
              <img className="abilitymodal-img" src={empty} alt="スロットを空にする"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(inkSaverMain);
                props.setAbilityName("inkSaverMain");
                }
              }
            >
              <img className="abilitymodal-img" src = {inkSaverMain} alt="インク効率アップ（メイン）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(inkSaverSub);
                props.setAbilityName("inkSaverSub");
                }
              }
            >
              <img className="abilitymodal-img" src={inkSaverSub} alt= "インク効率アップ（サブ）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(inkRecorvery);
                props.setAbilityName("inkRecorvery");
                }
              }
            >
              <img className="abilitymodal-img" src={inkRecorvery} alt= "インク回復アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(runSpeed);
                props.setAbilityName("runSpeed");
                }
              }
            >
              <img className="abilitymodal-img" src={runSpeed} alt= "ヒト移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(swimSpeed);
                props.setAbilityName("swimSpeed");
                }
              }
            >
              <img className="abilitymodal-img" src={swimSpeed} alt= "イカ移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(specialCharge);
                props.setAbilityName("specialCharge");
                }
              }
            >
              <img className="abilitymodal-img" src={specialCharge} alt= "スペシャル増加アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(specialSaver);
                props.setAbilityName("specialSaver");
                }
              }
            >
              <img className="abilitymodal-img" src={specialSaver} alt= "スペシャル減少量ダウン"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(specialPower);
                props.setAbilityName("specialPower");
                }
              }
            >
              <img className="abilitymodal-img" src={specialPower} alt= "スペシャル性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(qr);
                props.setAbilityName("qr");
                }
              }
            >
              <img className="abilitymodal-img" src={qr} alt= "復活時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(quickSuperJump);
                props.setAbilityName("quickSuperJump");
                }
              }
            >
              <img className="abilitymodal-img" src={quickSuperJump} alt= "スーパージャンプ時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(subPower);
                props.setAbilityName("subPower");
                }
              }
            >
              <img className="abilitymodal-img" src={subPower} alt= "サブ性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(inkRes);
                props.setAbilityName("inkRes");
                }
              }
            >
              <img className="abilitymodal-img" src={inkRes} alt= "相手インク影響軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(bombDefence);
                props.setAbilityName("bombDefence");
                }
              }
            >
              <img className="abilitymodal-img" src={bombDefence} alt= "爆風軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(mpu);
                props.setAbilityName("mpu");
                }
              }
            >
              <img className="abilitymodal-img" src={mpu} alt= "メイン性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(ninjaSquid);
                props.setAbilityName("ninjaSquid");
                }
              }
            >
              <img className="abilitymodal-img" src={ninjaSquid} alt= "イカニンジャ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(haunt);
                props.setAbilityName("haunt");
                }
              }
            >
              <img className="abilitymodal-img" src={haunt} alt= "リベンジ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(respawnPunisher);
                props.setAbilityName("respawnPunisher");
                }
              }
            >
              <img className="abilitymodal-img" src={respawnPunisher} alt= "復活ペナルティアップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(thermalInk);
                props.setAbilityName("thermalInk");
                }
              }
            >
              <img className="abilitymodal-img" src={thermalInk} alt= "サーマルインク"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.setImagePath(abilityDoubler);
                props.setAbilityName("abilityDoubler");
                }
              }
            >
              <img className="abilitymodal-img" src={abilityDoubler} alt="アビリティ効果2倍"/>
            </div>
          </div>
        </div>
  );
};

export default MainSlotModal1;