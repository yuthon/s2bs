import { FC, ReactElement } from 'react';
import InkResImg from '../images/ability/RES.png';

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
  const InkRes: Array<InkResStatType> = [
    {AP:0,FBTD:0,DPF:0.3,DL:0.4,RS:	0.24},
    {AP:3,FBTD:10,DPF:0.2,DL:0.3807,RS:0.3343},
    {AP:6,FBTD:15,DPF:0.2,DL:0.3623,RS:0.3942},
    {AP:9,FBTD:19,DPF:0.2,DL:0.345,RS:0.444},
    {AP:10,FBTD:20,DPF:0.2,DL:0.3394,RS:0.459},
    {AP:12,FBTD:22,DPF:0.2,DL:0.3286,RS:0.4872},
    {AP:13,FBTD:23,DPF:0.2,DL:0.3233,RS:0.5005},
    {AP:15,FBTD:24,DPF:0.2,DL:0.3131,RS:0.5255},
    {AP:16,FBTD:25,DPF:0.2,DL:0.3082,RS:0.5374},
    {AP:18,FBTD:27,DPF:0.2,DL:0.2987,RS:0.5598},
    {AP:19,FBTD:27,DPF:0.2,DL:0.2941,RS:0.5705},
    {AP:20,FBTD:28,DPF:0.2,DL:0.2896,RS:0.5808},
    {AP:21,FBTD:29,DPF:0.2,DL:0.2852,RS:0.5907},
    {AP:22,FBTD:29,DPF:0.2,DL:0.2809,RS:0.6003},
    {AP:23,FBTD:30,DPF:0.2,DL:0.2768,RS:0.6095},
    {AP:24,FBTD:30,DPF:0.2,DL:0.2727,RS:0.6185},
    {AP:25,FBTD:31,DPF:0.2,DL:0.2687,RS:0.6271},
    {AP:26,FBTD:32,DPF:0.2,DL:0.2649,RS:0.6354},
    {AP:27,FBTD:32,DPF:0.1,DL:0.2612,RS:0.6435},
    {AP:28,FBTD:32,DPF:0.1,DL:0.2575,RS:0.6512},
    {AP:29,FBTD:33,DPF:0.1,DL:0.254,RS:0.6587},
    {AP:30,FBTD:33,DPF:0.1,DL:0.2506,RS:0.6659},
    {AP:31,FBTD:34,DPF:0.1,DL:0.2473,RS:0.6728},
    {AP:32,FBTD:34,DPF:0.1,DL:0.2441,RS:0.6795},
    {AP:33,FBTD:35,DPF:0.1,DL:0.241,RS:0.6859},
    {AP:34,FBTD:35,DPF:0.1,DL:0.238,RS:0.692},
    {AP:35,FBTD:35,DPF:0.1,DL:0.2352,RS:0.6979},
    {AP:36,FBTD:36,DPF:0.1,DL:0.2324,RS:0.7036},
    {AP:37,FBTD:36,DPF:0.1,DL:0.2297,RS:0.709},
    {AP:38,FBTD:36,DPF:0.1,DL:0.2272,RS:0.7141},
    {AP:39,FBTD:37,DPF:0.1,DL:0.2247,RS:0.7191},
    {AP:41,FBTD:37,DPF:0.1,DL:0.2202,RS:0.7282},
    {AP:42,FBTD:37,DPF:0.1,DL:0.2181,RS:0.7324},
    {AP:44,FBTD:38,DPF:0.1,DL:0.2141,RS:0.7402},
    {AP:45,FBTD:38,DPF:0.1,DL:0.2124,RS:0.7438},
    {AP:47,FBTD:38,DPF:0.1,DL:0.2091,RS:0.7502},
    {AP:48,FBTD:39,DPF:0.1,DL:0.2076,RS:0.7531},
    {AP:51,FBTD:39,DPF:0.1,DL:0.2039,RS:0.7605},
    {AP:54,FBTD:39,DPF:0.1,DL:0.2011,RS:0.7659},
    {AP:57,FBTD:39,DPF:0.1,DL:0.2,RS:0.768}
  ];
  
  let framesBeforeTakingDamage;
  let secondsBeforeTakingDamage;
  let damagePerFrame;
  let damagePerSecond;
  let damageLimit;
  let runSpeed;

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
  if (!damagePerFrame) {
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
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">敵インクを踏んでからダメージを受けるまで</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{framesBeforeTakingDamage} F （{secondsBeforeTakingDamage} 秒）</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">敵インクから受けるダメージ</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{damagePerFrame} ダメージ/F （{damagePerSecond} ダメージ/秒）</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">敵インクから受けるダメージの上限</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{damageLimit} ダメージ</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">敵インクを踏んでいるときのヒト移動速度の低減率</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{runSpeed} ％減</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InkResistance;