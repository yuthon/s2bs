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

const subSlotModal5 = (props) => {
  
  // モーダルを閉じる関数
  const closeGearModal = function() {
    let target = document.getElementById("subSlotModal5")
    target.style.display = "none"
  }

  return (
    <div className="ability-modal subSlotModal-right" id="subSlotModal5">
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
            props.setAbility({name:"empty", path:empty});
            }
          }
        >
          <img className="abilitymodal-img" src={empty} alt=""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"インク効率アップ(メイン)", path:inkSaverMain});
            }
          }
        >
          <img className="abilitymodal-img" src = {inkSaverMain} alt=""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"インク効率アップ(サブ)", path:inkSaverSub});
            }
          }
        >
          <img className="abilitymodal-img" src={inkSaverSub} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"インク回復力アップ", path:inkRecovery});
            }
          }
        >
          <img className="abilitymodal-img" src={inkRecovery} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"ヒト移動速度アップ", path:runSpeed});
            }
          }
        >
          <img className="abilitymodal-img" src={runSpeed} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"イカダッシュ速度アップ", path:swimSpeed});
            }
          }
        >
          <img className="abilitymodal-img" src={swimSpeed} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"スペシャル増加量アップ", path:specialCharge});
            }
          }
        >
          <img className="abilitymodal-img" src={specialCharge} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"スペシャル減少量ダウン", path:specialSaver});
            }
          }
        >
          <img className="abilitymodal-img" src={specialSaver} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"スペシャル性能アップ", path:specialPower});
            }
          }
        >
          <img className="abilitymodal-img" src={specialPower} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"復活時間短縮", path:qr});
            }
          }
        >
          <img className="abilitymodal-img" src={qr} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"スーパージャンプ時間短縮", path:quickSuperJump});
            }
          }
        >
          <img className="abilitymodal-img" src={quickSuperJump} alt= "スーパージャンプ時間短縮"/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"サブ性能アップ", path:subPower});
            }
          }
        >
          <img className="abilitymodal-img" src={subPower} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"相手インク影響軽減", path:inkRes});
            }
          }
        >
          <img className="abilitymodal-img" src={inkRes} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"爆風ダメージ軽減・改", path:bombDefence});
            }
          }
        >
          <img className="abilitymodal-img" src={bombDefence} alt= ""/>
        </div>
        <div
          className="ability-icon ability"
          onClick={()=>{
            props.setAbility({name:"メイン性能アップ", path:mpu});
            }
          }
        >
          <img className="abilitymodal-img" src={mpu} alt= ""/>
        </div>
      </div>
    </div>
  );
};

export default subSlotModal5;