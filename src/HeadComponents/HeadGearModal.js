import { memo, useState, useRef, useMemo }from 'react';
import GearIcon from '../GearIcon';
import { gears, gearsSortedByName } from './headData';


// ブランドの画像
import Batoroika from '../images/brands/B00.png';
import Aironic from '../images/brands/B01.png';
import Kuragesu from '../images/brands/B02.png';
import Rockenberg from '../images/brands/B03.png';
import Ezokko from '../images/brands/B04.png';
import Forima from '../images/brands/B05.png';
import Hokkori from '../images/brands/B06.png';
import Hotakkusu from '../images/brands/B07.png';
import Zimon from '../images/brands/B08.png';
import Sigureni from '../images/brands/B09.png';
import Arome from '../images/brands/B10.png';
import Yako from '../images/brands/B11.png';
import Anaaki from '../images/brands/B15.png';
import Enperry from '../images/brands/B16.png';
import Tatakikensaki from '../images/brands/B17.png';
import Kumasan from '../images/brands/B97.png';
import Atarimeido from '../images/brands/B98.png';
// ギアパワーの画像
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
import empty from '../images/ability/empty.png';


const HeadGearModal = memo((props) => {
  // 表示する配列の管理
  const [gearsArray, setArray] = useState(gears);
  // SelectBox要素のref
  const selectBoxRef = useRef();

  // SelectBoxで変更が行われない限り再レンダーの必要がないためギアアイコンをメモ化
  const memoizedIcons = useMemo(()=>{
    return gearsArray.map(
      (gear, index) => <GearIcon key={index} gear={gear} setChosenGear={props.setChosenGear}/>
    )
  }, [gearsArray, props.setChosenGear]);

  // SelectBoxで並び替え法を指定しなおしたとき用の関数
  const selectBox = function() {
    let target = selectBoxRef.current;
    if (target.value === "brand") {
      setArray(gears);
    } else if (target.value === "name") {
      setArray(gearsSortedByName);
    }
  };
  // ブランド名に応じてブランドロゴ、つきにくいギアパワー、つきにくいギアパワーの画像のpathをそれぞれ返す
  const brandDependency = (brand) => {
    if (brand === "バトロイカ") {
      return {brandImgPath:Batoroika, favoredAbility:inkRes, unfavoredAbility:inkSaverMain}
    } else if (brand === "アイロニック") {
      return {brandImgPath:Aironic, favoredAbility:quickSuperJump, unfavoredAbility:qr}
    } else if (brand === "クラーゲス") {
      return {brandImgPath:Kuragesu, favoredAbility:swimSpeed, unfavoredAbility:bombDefence}
    } else if (brand === "ロッケンベルグ") {
      return {brandImgPath:Rockenberg, favoredAbility:runSpeed, unfavoredAbility:swimSpeed}
    } else if (brand === "エゾッコ") {
      return {brandImgPath:Ezokko, favoredAbility:specialSaver, unfavoredAbility:specialCharge}
    } else if (brand === "フォーリマ") {
      return {brandImgPath:Forima, favoredAbility:specialPower, unfavoredAbility:inkSaverSub}
    } else if (brand === "ホッコリー") {
      return {brandImgPath:Hokkori, favoredAbility:inkSaverSub, unfavoredAbility:inkRecovery}
    } else if (brand === "ホタックス") {
      return {brandImgPath:Hotakkusu, favoredAbility:qr, unfavoredAbility:specialSaver}
    } else if (brand === "ジモン") {
      return {brandImgPath:Zimon, favoredAbility:inkSaverMain, unfavoredAbility:runSpeed}
    } else if (brand === "シグレ二") {
      return {brandImgPath:Sigureni, favoredAbility:bombDefence, unfavoredAbility:mpu}
    } else if (brand === "アロメ") {
      return {brandImgPath:Arome, favoredAbility:inkRecovery, unfavoredAbility:quickSuperJump}
    } else if (brand === "ヤコ") {
      return {brandImgPath:Yako, favoredAbility:specialCharge, unfavoredAbility:specialPower}
    } else if (brand === "アナアキ") {
      return {brandImgPath:Anaaki, favoredAbility:mpu, unfavoredAbility:specialSaver}
    } else if (brand === "エンペリー") {
      return {brandImgPath:Enperry, favoredAbility:subPower, unfavoredAbility:inkRes}
    } else if (brand === "タタキケンサキ") {
      return {brandImgPath:Tatakikensaki, favoredAbility:mpu, unfavoredAbility:subPower}
    } else if (brand === "クマサン商会") {
      return {brandImgPath:Kumasan, favoredAbility:empty, unfavoredAbility:empty}
    } else if (brand === "アタリメイド") {
      return {brandImgPath:Atarimeido, favoredAbility:empty, unfavoredAbility:empty}
    }
  }

  // モーダルを閉じる関数
  const closeGearModal = function() {
    let target = document.getElementById("headGearModal")
    target.style.display = "none"
  }

  return (
      <div className="gear-modal bg-secondary font-type2 text-white" id="headGearModal">
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">ギアを選択</h5>
            <button type="button" className="btn-close btn-close-white" onClick={()=>{closeGearModal()}}></button>
          </div>
          <div className="container pt-2 pb-1">
            <div className="d-flex align-items-center">
              <div className="select-index"> 
                <span className="align-middle">並び替え :</span>
              </div>
              <div className="selectbox">  
                <select
                  className="form-select"
                  aria-label="sort"
                  ref = {selectBoxRef}
                  onChange={()=>{selectBox();}}
                >
                    <option value="brand" defaultValue>ブランド</option>
                    <option value="name">名前</option>
                </select>
              </div>
            </div>
          </div>
          <div className="px-1 px-sm-0 px-lg-3 d-flex gears-display-area">
            <div className="chosen-gear d-flex flex-column">
            <p className="chosenGear-text h5">選択中のギア</p>
            <p className="chosenGear-name font-type1">{props.chosenGear.name}</p>
              <div className="chosen-gear-icon">
                <div className="brand-img-container">
                  <img className="brand-img" src={brandDependency(props.chosenGear.brand).brandImgPath} alt=""/>
                  <div className="brand-tooltip-container text-start">
                    <span className="brand-tooltip">{props.chosenGear.brand}</span>
                  </div>
                </div>
                <img className="chosen-gear-icon-img" src={props.chosenGear.path} alt=""/>
                <div className="head-stripe gear-icon-footer">
                  <div className="brand-ability">
                    <p className="fav-ability-tooltip">つきやすいギアパワー</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 384 512">
                      {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                      <path 
                        d="M54.63 246.6L192 109.3l137.4 137.4C335.6 252.9 343.8 256 352 256s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-160-160c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25S42.13 259.1 54.63 246.6zM214.6 233.4c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 301.3l137.4 137.4C335.6 444.9 343.8 448 352 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L214.6 233.4z"
                        fill="#dfff00"
                      />
                    </svg>
                    <img className="img-gear-icon-ability" src={brandDependency(props.chosenGear.brand).favoredAbility} alt=""/>
                  </div>
                  <div className="brand-ability">
                    <p className="fav-ability-tooltip">つきにくいギアパワー</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 384 512">
                      {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                      <path
                        d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"
                        fill="#ff0000"
                      />
                    </svg>
                    <img className="img-gear-icon-ability" src={brandDependency(props.chosenGear.brand).unfavoredAbility} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap gearicons-section head-stripe">
              {memoizedIcons}
            </div>
          </div>
          <div className="modal-footer py-0">
            <button type="button" className="btn btn-lg btn-dark m-auto OK-btn" onClick={()=>{closeGearModal()}}><p>OK</p></button>
          </div>
        </div>
  );
});

export default HeadGearModal;