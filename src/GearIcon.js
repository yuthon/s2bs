import { useRef, useEffect } from 'react';
import { Tooltip } from 'bootstrap';
import GearIconFooter from './HeadComponents/GearIconFooter';
// ブランドの画像
import Batoroika from './images/brands/B00.png';
import Aironic from './images/brands/B01.png';
import Kuragesu from './images/brands/B02.png';
import Rockenberg from './images/brands/B03.png';
import Ezokko from './images/brands/B04.png';
import Forima from './images/brands/B05.png';
import Hokkori from './images/brands/B06.png';
import Hotakkusu from './images/brands/B07.png';
import Zimon from './images/brands/B08.png';
import Sigureni from './images/brands/B09.png';
import Arome from './images/brands/B10.png';
import Yako from './images/brands/B11.png';
import Anaaki from './images/brands/B15.png';
import Enperry from './images/brands/B16.png';
import Tatakikensaki from './images/brands/B17.png';
import Kumasan from './images/brands/B97.png';
import Atarimeido from './images/brands/B98.png';
// ギアパワーの画像
import inkSaverMain from './images/ability/ISMain.png';
import inkSaverSub from './images/ability/ISSub.png';
import inkRecovery from './images/ability/REC.png';
import runSpeed from './images/ability/RSU.png';
import swimSpeed from './images/ability/SSU.png';
import specialCharge from './images/ability/SCU.png';
import specialSaver from './images/ability/SS.png';
import specialPower from './images/ability/SpecialPU.png';
import qr from './images/ability/QR.png';
import quickSuperJump from './images/ability/QSJ.png';
import subPower from './images/ability/SubPU.png';
import inkRes from './images/ability/RES.png';
import bombDefence from './images/ability/BDU.png';
import mpu from './images/ability/MPU.png';
import empty from './images/ability/empty.png';

const GearIcon = (props) => {
  
  // ブランド名に応じてブランドロゴ、つきにくいギアパワー、つきにくいギアパワーの画像のpathをそれぞれ返す
  let brand = props.gear.brand;
  let brandImagePath;
  let favoredAbility;
  let unfavoredAbility;

  if (brand === "バトロイカ") {
    brandImagePath = Batoroika;
    favoredAbility = inkRes;
    unfavoredAbility = inkSaverMain;
  } else if (brand === "アイロニック") {
    brandImagePath =  Aironic;
    favoredAbility = quickSuperJump;
    unfavoredAbility = qr;
  } else if (brand === "クラーゲス") {
    brandImagePath =  Kuragesu;
    favoredAbility = swimSpeed;
    unfavoredAbility = bombDefence;
  } else if (brand === "ロッケンベルグ") {
    brandImagePath =  Rockenberg;
    favoredAbility = runSpeed;
    unfavoredAbility = swimSpeed;
  } else if (brand === "エゾッコ") {
    brandImagePath =  Ezokko;
    favoredAbility = specialSaver;
    unfavoredAbility = specialCharge;
  } else if (brand === "フォーリマ") {
    brandImagePath =  Forima;
    favoredAbility = specialPower;
    unfavoredAbility = inkSaverSub;
  } else if (brand === "ホッコリー") {
    brandImagePath =  Hokkori;
    favoredAbility = inkSaverSub;
    unfavoredAbility = inkRecovery;
  } else if (brand === "ホタックス") {
    brandImagePath =  Hotakkusu;
    favoredAbility = qr;
    unfavoredAbility = specialSaver;
  } else if (brand === "ジモン") {
    brandImagePath =  Zimon;
    favoredAbility = inkSaverMain;
    unfavoredAbility = runSpeed;
  } else if (brand === "シグレ二") {
    brandImagePath =  Sigureni;
    favoredAbility = bombDefence;
    unfavoredAbility = mpu;
  } else if (brand === "アロメ") {
    brandImagePath =  Arome;
    favoredAbility = inkRecovery;
    unfavoredAbility = quickSuperJump;
  } else if (brand === "ヤコ") {
    brandImagePath =  Yako;
    favoredAbility = specialCharge;
    unfavoredAbility = specialPower;
  } else if (brand === "アナアキ") {
    brandImagePath =  Anaaki;
    favoredAbility = mpu;
    unfavoredAbility = specialSaver;
  } else if (brand === "エンペリー") {
    brandImagePath =  Enperry;
    favoredAbility = subPower;
    unfavoredAbility = inkRes;
  } else if (brand === "タタキケンサキ") {
    brandImagePath =  Tatakikensaki;
    favoredAbility = mpu;
    unfavoredAbility = subPower;
  } else if (brand === "クマサン商会") {
    brandImagePath =  Kumasan;
    favoredAbility = empty;
    unfavoredAbility = empty;
  } else if (brand === "アタリメイド") {
    brandImagePath =  Atarimeido;
    favoredAbility = empty;
    unfavoredAbility = empty;
  }

  // ギアの名前のツールチップ
  const tooltipRef = useRef();  
  
  useEffect(() => {
    const tooltip = new Tooltip(tooltipRef.current, {
        title: props.gear.name,
        placement: 'top',
        trigger: 'hover',
    })
  })
  // ブランドロゴのツールチップ
  const brandImgTooltip = useRef();

  useEffect(() => {
    const tooltip = new Tooltip(brandImgTooltip.current, {
      title: props.gear.brand,
      placement: "left",
      trigger: "hover"
    })
  })

  // どの部分かに応じてフッターに違うクラス名を与える
  const className = `${props.part}gear-icon-footer`
  
  return (
    <div className="gear-icon-outer">
      <div
        className="gear-icon"
        onClick={()=>{
          props.passChosenGear(props.gear.id);
          props.passImagePath(props.gear.path);
          }
        }
        ref={tooltipRef}
        data-bs-dismiss="modal"
      > 
        <div className="gear-icon-img">
          <img className="gear-icon-img" src={props.gear.path} alt=""/>
        </div>
        <div
          className="brand-img-container"
          ref={brandImgTooltip}
        >
          <img className="brand-img" src={brandImagePath} alt=""/>
        </div>
        <div className={className}>
          <GearIconFooter
            favoredAbility={favoredAbility}
            unfavoredAbility={unfavoredAbility}
          />
        </div>
      </div>
    </div>
  )
}

export default GearIcon;