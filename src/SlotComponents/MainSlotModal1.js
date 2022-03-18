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
    <div className="ability-modal" id="mainSlotModal1">
          <button type="button" className="btn-close btn-close-white" onClick={()=>{closeGearModal()}}></button>
          <div className="ability-list d-flex flex-wrap">
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(empty);
                props.passAbilityName("empty");
                }
              }
            >
              <img className="abilitymodal-img" src={empty} alt="スロットを空にする"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(inkSaverMain);
                props.passAbilityName("inkSaverMain");
                }
              }
            >
              <img className="abilitymodal-img" src = {inkSaverMain} alt="インク効率アップ（メイン）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(inkSaverSub);
                props.passAbilityName("inkSaverSub");
                }
              }
            >
              <img className="abilitymodal-img" src={inkSaverSub} alt= "インク効率アップ（サブ）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(inkRecorvery);
                props.passAbilityName("inkRecorvery");
                }
              }
            >
              <img className="abilitymodal-img" src={inkRecorvery} alt= "インク回復アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(runSpeed);
                props.passAbilityName("runSpeed");
                }
              }
            >
              <img className="abilitymodal-img" src={runSpeed} alt= "ヒト移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(swimSpeed);
                props.passAbilityName("swimSpeed");
                }
              }
            >
              <img className="abilitymodal-img" src={swimSpeed} alt= "イカ移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(specialCharge);
                props.passAbilityName("specialCharge");
                }
              }
            >
              <img className="abilitymodal-img" src={specialCharge} alt= "スペシャル増加アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(specialSaver);
                props.passAbilityName("specialSaver");
                }
              }
            >
              <img className="abilitymodal-img" src={specialSaver} alt= "スペシャル減少量ダウン"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(specialPower);
                props.passAbilityName("specialPower");
                }
              }
            >
              <img className="abilitymodal-img" src={specialPower} alt= "スペシャル性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(qr);
                props.passAbilityName("qr");
                }
              }
            >
              <img className="abilitymodal-img" src={qr} alt= "復活時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(quickSuperJump);
                props.passAbilityName("quickSuperJump");
                }
              }
            >
              <img className="abilitymodal-img" src={quickSuperJump} alt= "スーパージャンプ時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(subPower);
                props.passAbilityName("subPower");
                }
              }
            >
              <img className="abilitymodal-img" src={subPower} alt= "サブ性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(inkRes);
                props.passAbilityName("inkRes");
                }
              }
            >
              <img className="abilitymodal-img" src={inkRes} alt= "相手インク影響軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(bombDefence);
                props.passAbilityName("bombDefence");
                }
              }
            >
              <img className="abilitymodal-img" src={bombDefence} alt= "爆風軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(mpu);
                props.passAbilityName("mpu");
                }
              }
            >
              <img className="abilitymodal-img" src={mpu} alt= "メイン性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(ninjaSquid);
                props.passAbilityName("ninjaSquid");
                }
              }
            >
              <img className="abilitymodal-img" src={ninjaSquid} alt= "イカニンジャ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(haunt);
                props.passAbilityName("haunt");
                }
              }
            >
              <img className="abilitymodal-img" src={haunt} alt= "リベンジ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(respawnPunisher);
                props.passAbilityName("respawnPunisher");
                }
              }
            >
              <img className="abilitymodal-img" src={respawnPunisher} alt= "復活ペナルティアップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(thermalInk);
                props.passAbilityName("thermalInk");
                }
              }
            >
              <img className="abilitymodal-img" src={thermalInk} alt= "サーマルインク"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(abilityDoubler);
                props.passAbilityName("abilityDoubler");
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