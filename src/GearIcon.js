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

const GearIcon = (props) => {
  // ブランド名に応じてブランドロゴの画像のpathを返す
  const brandDependency = (brand) => {
    if (brand === "バトロイカ") {
      return Batoroika
    } else if (brand === "アイロニック") {
      return Aironic
    } else if (brand === "クラーゲス") {
      return Kuragesu
    } else if (brand === "ロッケンベルグ") {
      return Rockenberg
    } else if (brand === "エゾッコ") {
      return Ezokko
    } else if (brand === "フォーリマ") {
      return Forima
    } else if (brand === "ホッコリー") {
      return Hokkori
    } else if (brand === "ホタックス") {
      return Hotakkusu
    } else if (brand === "ジモン") {
      return Zimon
    } else if (brand === "シグレ二") {
      return Sigureni
    } else if (brand === "アロメ") {
      return Arome
    } else if (brand === "ヤコ") {
      return Yako
    } else if (brand === "アナアキ") {
      return Anaaki
    } else if (brand === "エンペリー") {
      return Enperry
    } else if (brand === "タタキケンサキ") {
      return Tatakikensaki
    } else if (brand === "クマサン商会") {
      return Kumasan
    } else if (brand === "アタリメイド") {
      return Atarimeido
    }
  }
  return (
    <div
      className="gear-icon"
      onClick={()=>{
        props.setChosenGear(props.gear);
        }
      }
    > 
      <div className="gear-icon-tooltip-arrow">
        <div className="tooltip-container">
          <span className="gear-icon-tooltip font-type2">{props.gear.name}</span>
        </div>
      </div>
      <img className="brand-img-small" src={brandDependency(props.gear.brand)} alt=""/>
      <img className="gear-icon-img" src={props.gear.path} alt=""/>
    </div>
  )
}

export default GearIcon;