import { FC, ReactElement } from 'react';
import bombDefenceUpImg from '../images/ability/BDU.png';

type BombDefenceUpProps= {
  abilityPoint: number
};

type StatType = {
  AP: number,
  MDM: number,
  TISF: number,
  TISC: number,
  SDM: number,
  CHSDM: number,
  FHSDM: number
};

const BombDefenceUp: FC<BombDefenceUpProps> = ({ abilityPoint }): ReactElement => {
  const bombDefence: Array<StatType> = [
    {AP:0,MDM:1,TISF:170,TISC:130,SDM:1,CHSDM:1,FHSDM:1},
    {AP:3,MDM:0.9131,TISF:181.5884,TISC:141.5884,SDM:0.9662,CHSDM:0.9517,FHSDM:0.9614},
    {AP:6,MDM:0.8305,TISF:192.5936,TISC:152.5936,SDM:0.9341,CHSDM:0.9059,FHSDM:0.9247},
    {AP:9,MDM:0.7524,TISF:203.0156,TISC:163.0156,SDM:0.9037,CHSDM:0.8624,FHSDM:0.8899},
    {AP:10,MDM:0.7273,TISF:206.36,TISC:166.36,SDM:0.894,CHSDM:0.8485,FHSDM:0.8788},
    {AP:12,MDM:0.6786,TISF:212.8544,TISC:172.8544,SDM:0.875,CHSDM:0.8214,FHSDM:0.8572},
    {AP:13,MDM:0.655,TISF:216.0044,TISC:176.0044,SDM:0.8658,CHSDM:0.8083,FHSDM:0.8467},
    {AP:15,MDM:0.6092,TISF:222.11,TISC:182.11,SDM:0.848,CHSDM:0.7829,FHSDM:0.8263},
    {AP:16,MDM:0.587,TISF:225.0656,TISC:185.0656,SDM:0.8394,CHSDM:0.7706,FHSDM:0.8164},
    {AP:18,MDM:0.5441,TISF:230.7824,TISC:190.7824,SDM:0.8227,CHSDM:0.7467,FHSDM:0.7974},
    {AP:19,MDM:0.5234,TISF:233.5436,TISC:193.5436,SDM:0.8147,CHSDM:0.7352,FHSDM:0.7882},
    {AP:20,MDM:0.5032,TISF:236.24,TISC:196.24,SDM:0.8068,CHSDM:0.724,FHSDM:0.7792},
    {AP:21,MDM:0.4835,TISF:238.8716,TISC:198.8716,SDM:0.7991,CHSDM:0.713,FHSDM:0.7704},
    {AP:22,MDM:0.4642,TISF:241.4384,TISC:201.4384,SDM:0.7916,CHSDM:0.7023,FHSDM:0.7619},
    {AP:23,MDM:0.4454,TISF:243.9404,TISC:203.9404,SDM:0.7843,CHSDM:0.6919,FHSDM:0.7535},
    {AP:24,MDM:0.4272,TISF:246.3776,TISC:206.3776,SDM:0.7772,CHSDM:0.6818,FHSDM:0.7454},
    {AP:25,MDM:0.4094,TISF:248.75,TISC:208.75,SDM:0.7703,CHSDM:0.6719,FHSDM:0.7375},
    {AP:26,MDM:0.3921,TISF:251.0576,TISC:211.0576,SDM:0.7636,CHSDM:0.6623,FHSDM:0.7298},
    {AP:27,MDM:0.3752,TISF:253.3004,TISC:213.3004,SDM:0.757,CHSDM:0.6529,FHSDM:0.7223},
    {AP:28,MDM:0.3589,TISF:255.4784,TISC:215.4784,SDM:0.7507,CHSDM:0.6438,FHSDM:0.7151},
    {AP:29,MDM:0.3431,TISF:257.5916,TISC:217.5916,SDM:0.7445,CHSDM:0.635,FHSDM:0.708},
    {AP:30,MDM:0.3277,TISF:259.64,TISC:219.64,SDM:0.7386,CHSDM:0.6265,FHSDM:0.7012},
    {AP:31,MDM:0.3128,TISF:261.6236,TISC:221.6236,SDM:0.7328,CHSDM:0.6182,FHSDM:0.6946},
    {AP:32,MDM:0.2984,TISF:263.5424,TISC:223.5424,SDM:0.7272,CHSDM:0.6102,FHSDM:0.6882},
    {AP:33,MDM:0.2845,TISF:265.3964,TISC:225.3964,SDM:0.7218,CHSDM:0.6025,FHSDM:0.682},
    {AP:34,MDM:0.2711,TISF:267.1856,TISC:227.1856,SDM:0.7165,CHSDM:0.5951,FHSDM:0.676},
    {AP:35,MDM:0.2582,TISF:268.91,TISC:228.91,SDM:0.7115,CHSDM:0.5879,FHSDM:0.6703},
    {AP:36,MDM:0.2457,TISF:270.5696,TISC:230.5696,SDM:0.7067,CHSDM:0.581,FHSDM:0.6648},
    {AP:37,MDM:0.2338,TISF:272.1644,TISC:232.1644,SDM:0.702,CHSDM:0.5743,FHSDM:0.6595},
    {AP:38,MDM:0.2223,TISF:273.6944,TISC:233.6944,SDM:0.6976,CHSDM:0.5679,FHSDM:0.6544},
    {AP:39,MDM:0.2113,TISF:275.1596,TISC:235.1596,SDM:0.6933,CHSDM:0.5618,FHSDM:0.6495},
    {AP:41,MDM:0.1908,TISF:277.8956,TISC:237.8956,SDM:0.6853,CHSDM:0.5504,FHSDM:0.6403},
    {AP:42,MDM:0.1813,TISF:279.1664,TISC:239.1664,SDM:0.6816,CHSDM:0.5451,FHSDM:0.6361},
    {AP:44,MDM:0.1636,TISF:281.5136,TISC:241.5136,SDM:0.6748,CHSDM:0.5354,FHSDM:0.6283},
    {AP:45,MDM:0.1556,TISF:282.59,TISC:242.59,SDM:0.6716,CHSDM:0.5309,FHSDM:0.6247},
    {AP:47,MDM:0.1409,TISF:284.5484,TISC:244.5484,SDM:0.6659,CHSDM:0.5227,FHSDM:0.6182},
    {AP:48,MDM:0.1343,TISF:285.4304,TISC:245.4304,SDM:0.6633,CHSDM:0.519,FHSDM:0.6152},
    {AP:51,MDM:0.1173,TISF:287.6876,TISC:247.6876,SDM:0.6567,CHSDM:0.5096,FHSDM:0.6077},
    {AP:54,MDM:0.1048,TISF:289.3616,TISC:249.3616,SDM:0.6519,CHSDM:0.5027,FHSDM:0.6021},
    {AP:57,MDM:0.1,TISF:290,TISC:250,SDM:0.65,CHSDM:0.5,FHSDM:0.6}
  ];
  
  
  let markingDuration;
  // let thermalInkSillhoutteFar;
  // let thermalInkSillhoutteClose;
  let specialDamage;
  // let closeHitSubDamageMultiplier;
  let farHitSubDamage;
  
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
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">敵センサーの持続時間</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{markingDuration} ％</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">敵スペシャルの爆風ダメージ</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{specialDamage} ％</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">敵ボムの爆風ダメージ</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{farHitSubDamage} ％</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BombDefenceUp;