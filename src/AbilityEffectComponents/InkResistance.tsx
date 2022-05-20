import { FC, ReactElement } from 'react';
import InkResImg from '../images/ability/RES.png';
import { InkRes } from './ability-effect-data/abilityEffect-data';
import AePart from './AePart';

type InkResistanceProps = {
  abilityPoint: number
};

type InkResStatType = {
  AP: number,
  FBTD: number,
  DPF: number,
  DL: number,
  RS: number,
};

const InkResistance: FC<InkResistanceProps> = ({ abilityPoint }): ReactElement => {
  let framesBeforeTakingDamage: number;
  let secondsBeforeTakingDamage: number;
  let damagePerFrame: number;
  let damagePerSecond: number;
  let damageLimit: number;
  let runSpeed: number;

  // 一部のギアパワー効果によって発生する特殊なAPに対する処理
  const irregularValues = function(array: Array<InkResStatType>) {
    if (abilityPoint === 40) {
      return {
        FBTD : Math.floor((array[30].FBTD + array[31].FBTD) / 2 * 100) /100,
        DPF : Math.floor((array[30].DPF + array[31].DPF) / 2 * 100) /100,
        DL : Math.floor((array[30].DL + array[31].DL) / 2 * 100) /100,
        RS : Math.floor((array[30].RS + array[31].RS) / 2 * 100) /100
      }
    } else if (abilityPoint === 43) {
      return {
        FBTD : Math.floor((array[32].FBTD + array[33].FBTD) / 2 * 100) /100,
        DPF : Math.floor((array[32].DPF + array[33].DPF) / 2 * 100) /100,
        DL : Math.floor((array[32].DL + array[33].DL) / 2 * 100) /100,
        RS : Math.floor((array[32].RS + array[33].RS) / 2 * 100) /100
      }
    } else if (abilityPoint === 46) {
      return {
        FBTD : Math.floor((array[34].FBTD + array[35].FBTD) / 2 * 100) /100,
        DPF : Math.floor((array[34].DPF + array[35].DPF) / 2 * 100) /100,
        DL : Math.floor((array[34].DL + array[35].DL) / 2 * 100) /100,
        RS : Math.floor((array[34].RS + array[35].RS) / 2 * 100) /100
      }
    } else if (abilityPoint === 49) {
      return {
        FBTD : Math.floor(((array[37].FBTD - array[36].FBTD) / 3 + array[36].FBTD) * 100) /100,
        DPF : Math.floor(((array[37].DPF - array[36].DPF) / 3 + array[36].DPF) * 100) /100,
        DL : Math.floor(((array[37].DL - array[36].DL) / 3 + array[36].DL) * 100) /100,
        RS : Math.floor(((array[37].RS - array[36].RS) / 3 + array[36].RS) * 100) /100
      }
    } else if (abilityPoint === 50) {
      return {
        FBTD : Math.floor(((array[37].FBTD - array[36].FBTD) / 3 * 2 + array[36].FBTD) * 100) /100,
        DPF : Math.floor(((array[37].DPF - array[36].DPF) / 3 * 2 + array[36].DPF) * 100) /100,
        DL : Math.floor(((array[37].DL - array[36].DL) / 3 * 2 + array[36].DL) * 100) /100,
        RS : Math.floor(((array[37].RS - array[36].RS) / 3 * 2 + array[36].RS) * 100) /100
      }
    } else if (abilityPoint === 52) {
      return {
        FBTD : Math.floor(((array[38].FBTD - array[37].FBTD) / 3 + array[37].FBTD) * 100) /100,
        DPF : Math.floor(((array[38].DPF - array[37].DPF) / 3 + array[37].DPF) * 100) /100,
        DL : Math.floor(((array[38].DL - array[37].DL) / 3 + array[37].DL) * 100) /100,
        RS : Math.floor(((array[38].RS - array[37].RS) / 3 + array[37].RS) * 100) /100
      }
    } else if (abilityPoint === 53) {
      return {
        FBTD : Math.floor(((array[38].FBTD - array[37].FBTD) / 3 * 2 + array[37].FBTD) * 100) /100,
        DPF : Math.floor(((array[38].DPF - array[37].DPF) / 3 * 2 + array[37].DPF) * 100) /100,
        DL : Math.floor(((array[38].DL - array[37].DL) / 3 * 2 + array[37].DL) * 100) /100,
        RS : Math.floor(((array[38].RS - array[37].RS) / 3 * 2 + array[37].RS) * 100) /100
      }
    } else if (abilityPoint === 55) {
      return {
        FBTD : Math.floor(((array[39].FBTD - array[38].FBTD) / 3 + array[38].FBTD) * 100) /100,
        DPF : Math.floor(((array[39].DPF - array[38].DPF) / 3 + array[38].DPF) * 100) /100,
        DL : Math.floor(((array[39].DL - array[38].DL) / 3 + array[38].DL) * 100) /100,
        RS : Math.floor(((array[39].RS - array[38].RS) / 3 + array[38].RS) * 100) /100
      }
    } else if (abilityPoint === 56) {
      return {
        FBTD : Math.floor(((array[39].FBTD - array[38].FBTD) / 3 * 2 + array[38].FBTD) * 100) /100,
        DPF : Math.floor(((array[39].DPF - array[38].DPF) / 3 * 2 + array[38].DPF) * 100) /100,
        DL : Math.floor(((array[39].DL - array[38].DL) / 3 * 2 + array[38].DL) * 100) /100,
        RS : Math.floor(((array[39].RS - array[38].RS) / 3 * 2 + array[38].RS) * 100) /100
      }
    } 
  }

  for (let i=0; i<40; i++) {
    if (abilityPoint === InkRes[i].AP) {
      framesBeforeTakingDamage = InkRes[i].FBTD;
      secondsBeforeTakingDamage = Math.floor(framesBeforeTakingDamage / 60 * 1000) / 1000;
      damagePerFrame = InkRes[i].DPF;
      damagePerSecond = damagePerFrame * 60;
      damageLimit = Math.floor(InkRes[i].DL * 10000) / 100;
      runSpeed = Math.floor((0.96 - InkRes[i].RS) / 0.96 * 100);
    }
  }
  // APが特殊な値をとる時
  if (!damagePerFrame!) {
    framesBeforeTakingDamage = irregularValues(InkRes)!.FBTD;
    secondsBeforeTakingDamage = Math.floor(framesBeforeTakingDamage / 60 * 1000) / 1000;
    damagePerFrame = irregularValues(InkRes)!.DPF;
    damagePerSecond = damagePerFrame * 60;
    damageLimit = Math.floor(irregularValues(InkRes)!.DL * 10000) / 100;
    runSpeed = Math.floor((0.96 - irregularValues(InkRes)!.RS) / 0.96 * 100);
  }

  return (
    <div className="ae-card row">
      <div className="ap-icon-area col-1">  
        <div className="ability-icon ap-ability-icon">
          <p className="ability-detail-tooltip-2" style={{width: "20rem" }}>相手インク影響軽減 : 相手のインクをふんだ時のダメージや移動速度の減少が少なくなります。</p>
          <img className="ap-ability-img" src={InkResImg} alt=""/>
        </div>
      </div>
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='敵インクを踏んでからダメージを受けるまで'
          aeEffect={`${framesBeforeTakingDamage!} F （${secondsBeforeTakingDamage!} 秒）`}
        />
        <AePart
          aeText='敵インクから受けるダメージ'
          aeEffect={`${damagePerFrame!} ダメージ/F （${damagePerSecond!} ダメージ/秒）`}
        />
        <AePart
          aeText='敵インクから受けるダメージの上限'
          aeEffect={`${damageLimit!} ダメージ`}
        />
        <AePart
          aeText='敵インクを踏んでいるときのヒト移動速度の低減率'
          aeEffect={`${runSpeed!} ％減`}
        />
      </div>
    </div>
  );
};

export default InkResistance;