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
import stealthJump from '../images/ability/SJ.png';
import objectShredder from '../images/ability/OS.png';
import dropRoller from '../images/ability/DR.png';

const MainSlotModal2 = (props) => {
  return (
    <div className="modal fade" id="mainSlotModal2" tabIndex="-1" aria-labelledby="MainSlotModal2Label" aria-hidden="true">
      <div className="modal-dialog">  
        <div className="modal-content container">  
          <div className="ability-list">
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(inkSaverMain);
                props.passAbilityName("inkSaverMain");
                }
              }
            >
              <img src = {inkSaverMain} alt="インク効率アップ（メイン）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(inkSaverSub);
                props.passAbilityName("inkSaverSub");
                }
              }
            >
              <img src={inkSaverSub} alt= "インク効率アップ（サブ）"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(inkRecorvery);
                props.passAbilityName("inkRecorvery");
                }
              }
            >
              <img src={inkRecorvery} alt= "インク回復アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(runSpeed);
                props.passAbilityName("runSpeed");
                }
              }
            >
              <img src={runSpeed} alt= "ヒト移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(swimSpeed);
                props.passAbilityName("swimSpeed");
                }
              }
            >
              <img src={swimSpeed} alt= "イカ移動速度アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(specialCharge);
                props.passAbilityName("specialCharge");
                }
              }
            >
              <img src={specialCharge} alt= "スペシャル増加アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(specialSaver);
                props.passAbilityName("specialSaver");
                }
              }
            >
              <img src={specialSaver} alt= "スペシャル減少量ダウン"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(specialPower);
                props.passAbilityName("specialPower");
                }
              }
            >
              <img src={specialPower} alt= "スペシャル性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(qr);
                props.passAbilityName("qr");
                }
              }
            >
              <img src={qr} alt= "復活時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(quickSuperJump);
                props.passAbilityName("quickSuperJump");
                }
              }
            >
              <img src={quickSuperJump} alt= "スーパージャンプ時間短縮"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(subPower);
                props.passAbilityName("subPower");
                }
              }
            >
              <img src={subPower} alt= "サブ性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(inkRes);
                props.passAbilityName("inkRes");
                }
              }
            >
              <img src={inkRes} alt= "相手インク影響軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(bombDefence);
                props.passAbilityName("bombDefence");
                }
              }
            >
              <img src={bombDefence} alt= "爆風軽減"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(mpu);
                props.passAbilityName("mpu");
                }
              }
            >
              <img src={mpu} alt= "メイン性能アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(stealthJump);
                props.passAbilityName("stealthJump");
                }
              }
            >
              <img src={stealthJump} alt= "ステルスジャンプ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(objectShredder);
                props.passAbilityName("objectShredder");
                }
              }
            >
              <img src={objectShredder} alt= "対物攻撃力アップ"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(dropRoller);
                props.passAbilityName("dropRoller");
                }
              }
            >
              <img src={dropRoller} alt= "受け身"/>
            </div>
            <div
              className="ability-icon ability"
              onClick={()=>{
                props.passImagePath(empty);
                props.passAbilityName("empty");
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

export default MainSlotModal2;