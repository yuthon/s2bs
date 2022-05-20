import { FC, ReactElement } from 'react';
import bombDefenceUpImg from '../images/ability/BDU.png';
import { bombDefence } from './ability-effect-data/abilityEffect-data'
import AePart from './AePart';

interface BombDefenceUpProps {
  abilityPoint: number;
};

const BombDefenceUp: FC<BombDefenceUpProps> = ({ abilityPoint }): ReactElement => {

  let markingDuration: number;
  // let thermalInkSillhoutteFar;
  // let thermalInkSillhoutteClose;
  let specialDamage: number;
  // let closeHitSubDamageMultiplier;
  let farHitSubDamage: number;
  
  // APの値に基づいて効果を計算する
  for (let i=0; i<40; i++) {
    if (abilityPoint === bombDefence[i].AP) {
      markingDuration = Math.floor(bombDefence[i].MDM * 10000) / 100;
      // thermalInkSillhoutteClose = bombDefence[i].TISC
      // thermalInkSillhoutteFar = bombDefence[i].TISF
      specialDamage = Math.floor(bombDefence[i].SDM * 10000) / 100;
      // closeHitSubDamageMultiplier = bombDefence[i].CHSDM
      farHitSubDamage = Math.floor(bombDefence[i].FHSDM * 10000) / 100;
    }
  }
  
  return (
    <div className="ae-card row">
      <div className="ap-icon-area col-1">
        <div className="ability-icon ap-ability-icon">
          <p className="ability-detail-tooltip-2" style={{width: "23rem" }}>爆風ダメージ軽減・改 : メインウエポン以外の爆発で受けるダメージと、位置を発見してくる攻撃の効果を軽減します。</p>
          <img className="ap-ability-img" src={bombDefenceUpImg} alt=""/>
        </div>
      </div>
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='敵センサーの持続時間'
          aeEffect={`${markingDuration!} ％`}
        />
        <AePart
          aeText='敵スペシャルの爆風ダメージ'
          aeEffect={`${specialDamage!} ％`}
        />
        <AePart
          aeText='敵ボムの爆風ダメージ'
          aeEffect={`${farHitSubDamage!} ％`}
        />
      </div>
    </div>
  );
};

export default BombDefenceUp;