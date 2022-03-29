import React from 'react';
import specialSaverImg from '../images/ability/SS.png';

const SpecialSaver = React.memo((props) => {
  let remainingPercent;
  let remainingPoints;
  let abilityPoint = props.abilityPoint;
  let sp = props.weaponStatus.sp;
  let abilityName = props.abilityName;
  let lostPercent;
  
  const when150=[
    {AP:0,SP:75,RP:50},{AP:3,SP:89,RP:58.9296},{AP:6,SP:97,RP:64.6058},{AP:9,SP:104,RP:69.3165},{AP:10,SP:107,RP:70.7401},{AP:12,SP:111,RP:73.4104},{AP:13,SP:113,RP:74.6667},{AP:15,SP:116,RP:77.0394},{AP:16,SP:118,RP:78.1614},{AP:18,SP:121,RP:80.2878},{AP:19,SP:122,RP:81.2959},{AP:20,SP:124,RP:82.2692},{AP:21,SP:125,RP:83.2091},{AP:22,SP:127,RP:84.1168},{AP:23,SP:128,RP:84.9934},{AP:24,SP:129,RP:85.8398},{AP:25,SP:130,RP:86.657},{AP:26,SP:132,RP:87.4456},{AP:27,SP:133,RP:88.2064},{AP:28,SP:134,RP:88.9401},{AP:29,SP:135,RP:89.6472},{AP:30,SP:136,RP:90.3285},{AP:31,SP:137,RP:90.9842},{AP:32,SP:138,RP:91.615},{AP:33,SP:139,RP:92.2213},{AP:34,SP:140,RP:92.8035},{AP:35,SP:141,RP:93.3619},{AP:36,SP:141,RP:93.8969},{AP:37,SP:142,RP:94.4089},{AP:38,SP:143,RP:94.898},{AP:39,SP:144,RP:95.3647},{AP:41,SP:145,RP:96.2316},{AP:42,SP:145,RP:96.6323},{AP:44,SP:147,RP:97.3691},{AP:45,SP:147,RP:97.7056},{AP:47,SP:148,RP:98.3158},{AP:48,SP:148,RP:98.5897},{AP:51,SP:149,RP:99.2881},{AP:54,SP:150,RP:99.8038},{AP:57,SP:150,RP:100}
  ];
  const when160 = [
    {AP:0,SP:80,RP:50},{AP:3,SP:95,RP:58.9296},{AP:6,SP:104,RP:64.6058},{AP:9,SP:111,RP:69.3165},{AP:10,SP:114,RP:70.7401},{AP:12,SP:118,RP:73.4104},{AP:13,SP:120,RP:74.6667},{AP:15,SP:124,RP:77.0394},{AP:16,SP:126,RP:78.1614},{AP:18,SP:129,RP:80.2878},{AP:19,SP:131,RP:81.2959},{AP:20,SP:132,RP:82.2692},{AP:21,SP:134,RP:83.2091},{AP:22,SP:135,RP:84.1168},{AP:23,SP:136,RP:84.9934},{AP:24,SP:138,RP:85.8398},{AP:25,SP:139,RP:86.657},{AP:26,SP:140,RP:87.4456},{AP:27,SP:142,RP:88.2064},{AP:28,SP:143,RP:88.9401},{AP:29,SP:144,RP:89.6472},{AP:30,SP:145,RP:90.3285},{AP:31,SP:146,RP:90.9842},{AP:32,SP:147,RP:91.615},{AP:33,SP:148,RP:92.2213},{AP:34,SP:149,RP:92.8035},{AP:35,SP:150,RP:93.3619},{AP:36,SP:151,RP:93.8969},{AP:37,SP:152,RP:94.4089},{AP:38,SP:152,RP:94.898},{AP:39,SP:153,RP:95.3647},{AP:41,SP:154,RP:96.2316},{AP:42,SP:155,RP:96.6323},{AP:44,SP:156,RP:97.3691},{AP:45,SP:157,RP:97.7056},{AP:47,SP:158,RP:98.3158},{AP:48,SP:158,RP:98.5897},{AP:51,SP:159,RP:99.2881},{AP:54,SP:160,RP:99.8038},{AP:57,SP:160,RP:100}
  ];
  const when170 = [
    {AP:0,SP:85,RP:50},{AP:3,SP:101,RP:58.9296},{AP:6,SP:110,RP:64.6058},{AP:9,SP:118,RP:69.3165},{AP:10,SP:121,RP:70.7401},{AP:12,SP:125,RP:73.4104},{AP:13,SP:127,RP:74.6667},{AP:15,SP:131,RP:77.0394},{AP:16,SP:133,RP:78.1614},{AP:18,SP:137,RP:80.2878},{AP:19,SP:139,RP:81.2959},{AP:20,SP:140,RP:82.2692},{AP:21,SP:142,RP:83.2091},{AP:22,SP:143,RP:84.1168},{AP:23,SP:145,RP:84.9934},{AP:24,SP:146,RP:85.8398},{AP:25,SP:148,RP:86.657},{AP:26,SP:149,RP:87.4456},{AP:27,SP:150,RP:88.2064},{AP:28,SP:152,RP:88.9401},{AP:29,SP:153,RP:89.6472},{AP:30,SP:154,RP:90.3285},{AP:31,SP:155,RP:90.9842},{AP:32,SP:156,RP:91.615},{AP:33,SP:157,RP:92.2213},{AP:34,SP:158,RP:92.8035},{AP:35,SP:159,RP:93.3619},{AP:36,SP:160,RP:93.8969},{AP:37,SP:161,RP:94.4089},{AP:38,SP:162,RP:94.898},{AP:39,SP:163,RP:95.3647},{AP:41,SP:164,RP:96.2316},{AP:42,SP:165,RP:96.6323},{AP:44,SP:166,RP:97.3691},{AP:45,SP:167,RP:97.7056},{AP:47,SP:168,RP:98.3158},{AP:48,SP:168,RP:98.5897},{AP:51,SP:169,RP:99.2881},{AP:54,SP:170,RP:99.8038},{AP:57,SP:170,RP:100}
  ];
  const when180 = [
    {AP:0,SP:90,RP:50},{AP:3,SP:107,RP:58.9296},{AP:6,SP:117,RP:64.6058},{AP:9,SP:125,RP:69.3165},{AP:10,SP:128,RP:70.7401},{AP:12,SP:133,RP:73.4104},{AP:13,SP:135,RP:74.6667},{AP:15,SP:139,RP:77.0394},{AP:16,SP:141,RP:78.1614},{AP:18,SP:145,RP:80.2878},{AP:19,SP:147,RP:81.2959},{AP:20,SP:149,RP:82.2692},{AP:21,SP:150,RP:83.2091},{AP:22,SP:152,RP:84.1168},{AP:23,SP:153,RP:84.9934},{AP:24,SP:155,RP:85.8398},{AP:25,SP:156,RP:86.657},{AP:26,SP:158,RP:87.4456},{AP:27,SP:159,RP:88.2064},{AP:28,SP:161,RP:88.9401},{AP:29,SP:162,RP:89.6472},{AP:30,SP:163,RP:90.3285},{AP:31,SP:164,RP:90.9842},{AP:32,SP:165,RP:91.615},{AP:33,SP:166,RP:92.2213},{AP:34,SP:168,RP:92.8035},{AP:35,SP:169,RP:93.3619},{AP:36,SP:170,RP:93.8969},{AP:37,SP:170,RP:94.4089},{AP:38,SP:171,RP:94.898},{AP:39,SP:172,RP:95.3647},{AP:41,SP:174,RP:96.2316},{AP:42,SP:174,RP:96.6323},{AP:44,SP:176,RP:97.3691},{AP:45,SP:176,RP:97.7056},{AP:47,SP:177,RP:98.3158},{AP:48,SP:178,RP:98.5897},{AP:51,SP:179,RP:99.2881},{AP:54,SP:180,RP:99.8038},{AP:57,SP:180,RP:100}
  ];
  const when190 = [
    {AP:0,SP:95,RP:50},{AP:3,SP:112,RP:58.9296},{AP:6,SP:123,RP:64.6058},{AP:9,SP:132,RP:69.3165},{AP:10,SP:135,RP:70.7401},{AP:12,SP:140,RP:73.4104},{AP:13,SP:142,RP:74.6667},{AP:15,SP:147,RP:77.0394},{AP:16,SP:149,RP:78.1614},{AP:18,SP:153,RP:80.2878},{AP:19,SP:155,RP:81.2959},{AP:20,SP:157,RP:82.2692},{AP:21,SP:159,RP:83.2091},{AP:22,SP:160,RP:84.1168},{AP:23,SP:162,RP:84.9934},{AP:24,SP:164,RP:85.8398},{AP:25,SP:165,RP:86.657},{AP:26,SP:167,RP:87.4456},{AP:27,SP:168,RP:88.2064},{AP:28,SP:169,RP:88.9401},{AP:29,SP:171,RP:89.6472},{AP:30,SP:172,RP:90.3285},{AP:31,SP:173,RP:90.9842},{AP:32,SP:175,RP:91.615},{AP:33,SP:176,RP:92.2213},{AP:34,SP:177,RP:92.8035},{AP:35,SP:178,RP:93.3619},{AP:36,SP:179,RP:93.8969},{AP:37,SP:180,RP:94.4089},{AP:38,SP:181,RP:94.898},{AP:39,SP:182,RP:95.3647},{AP:41,SP:183,RP:96.2316},{AP:42,SP:184,RP:96.6323},{AP:44,SP:186,RP:97.3691},{AP:45,SP:186,RP:97.7056},{AP:47,SP:187,RP:98.3158},{AP:48,SP:188,RP:98.5897},{AP:51,SP:189,RP:99.2881},{AP:54,SP:190,RP:99.8038},{AP:57,SP:190,RP:100}
  ];
  const when200 = [
    {AP:0,SP:100,RP:50},{AP:3,SP:118,RP:58.9296},{AP:6,SP:130,RP:64.6058},{AP:9,SP:139,RP:69.3165},{AP:10,SP:142,RP:70.7401},{AP:12,SP:147,RP:73.4104},{AP:13,SP:150,RP:74.6667},{AP:15,SP:155,RP:77.0394},{AP:16,SP:157,RP:78.1614},{AP:18,SP:161,RP:80.2878},{AP:19,SP:163,RP:81.2959},{AP:20,SP:165,RP:82.2692},{AP:21,SP:167,RP:83.2091},{AP:22,SP:169,RP:84.1168},{AP:23,SP:170,RP:84.9934},{AP:24,SP:172,RP:85.8398},{AP:25,SP:174,RP:86.657},{AP:26,SP:175,RP:87.4456},{AP:27,SP:177,RP:88.2064},{AP:28,SP:178,RP:88.9401},{AP:29,SP:180,RP:89.6472},{AP:30,SP:181,RP:90.3285},{AP:31,SP:182,RP:90.9842},{AP:32,SP:184,RP:91.615},{AP:33,SP:185,RP:92.2213},{AP:34,SP:186,RP:92.8035},{AP:35,SP:187,RP:93.3619},{AP:36,SP:188,RP:93.8969},{AP:37,SP:189,RP:94.4089},{AP:38,SP:190,RP:94.898},{AP:39,SP:191,RP:95.3647},{AP:41,SP:193,RP:96.2316},{AP:42,SP:194,RP:96.6323},{AP:44,SP:195,RP:97.3691},{AP:45,SP:196,RP:97.7056},{AP:47,SP:197,RP:98.3158},{AP:48,SP:198,RP:98.5897},{AP:51,SP:199,RP:99.2881},{AP:54,SP:200,RP:99.8038},{AP:57,SP:200,RP:100}
  ];
  const when210 = [
    {AP:0,SP:105,RP:50},{AP:3,SP:124,RP:58.9296},{AP:6,SP:136,RP:64.6058},{AP:9,SP:146,RP:69.3165},{AP:10,SP:149,RP:70.7401},{AP:12,SP:155,RP:73.4104},{AP:13,SP:157,RP:74.6667},{AP:15,SP:162,RP:77.0394},{AP:16,SP:165,RP:78.1614},{AP:18,SP:169,RP:80.2878},{AP:19,SP:171,RP:81.2959},{AP:20,SP:173,RP:82.2692},{AP:21,SP:175,RP:83.2091},{AP:22,SP:177,RP:84.1168},{AP:23,SP:179,RP:84.9934},{AP:24,SP:181,RP:85.8398},{AP:25,SP:182,RP:86.657},{AP:26,SP:184,RP:87.4456},{AP:27,SP:186,RP:88.2064},{AP:28,SP:187,RP:88.9401},{AP:29,SP:189,RP:89.6472},{AP:30,SP:190,RP:90.3285},{AP:31,SP:192,RP:90.9842},{AP:32,SP:193,RP:91.615},{AP:33,SP:194,RP:92.2213},{AP:34,SP:195,RP:92.8035},{AP:35,SP:197,RP:93.3619},{AP:36,SP:198,RP:93.8969},{AP:37,SP:199,RP:94.4089},{AP:38,SP:200,RP:94.898},{AP:39,SP:201,RP:95.3647},{AP:41,SP:203,RP:96.2316},{AP:42,SP:203,RP:96.6323},{AP:44,SP:205,RP:97.3691},{AP:45,SP:206,RP:97.7056},{AP:47,SP:207,RP:98.3158},{AP:48,SP:208,RP:98.5897},{AP:51,SP:209,RP:99.2881},{AP:54,SP:210,RP:99.8038},{AP:57,SP:210,RP:100}
  ];
  const when220 = [
    {AP:0,SP:110,RP:50},{AP:3,SP:130,RP:58.9296},{AP:6,SP:143,RP:64.6058},{AP:9,SP:153,RP:69.3165},{AP:10,SP:156,RP:70.7401},{AP:12,SP:162,RP:73.4104},{AP:13,SP:165,RP:74.6667},{AP:15,SP:170,RP:77.0394},{AP:16,SP:172,RP:78.1614},{AP:18,SP:177,RP:80.2878},{AP:19,SP:179,RP:81.2959},{AP:20,SP:181,RP:82.2692},{AP:21,SP:184,RP:83.2091},{AP:22,SP:186,RP:84.1168},{AP:23,SP:187,RP:84.9934},{AP:24,SP:189,RP:85.8398},{AP:25,SP:191,RP:86.657},{AP:26,SP:193,RP:87.4456},{AP:27,SP:195,RP:88.2064},{AP:28,SP:196,RP:88.9401},{AP:29,SP:198,RP:89.6472},{AP:30,SP:199,RP:90.3285},{AP:31,SP:201,RP:90.9842},{AP:32,SP:202,RP:91.615},{AP:33,SP:203,RP:92.2213},{AP:34,SP:205,RP:92.8035},{AP:35,SP:206,RP:93.3619},{AP:36,SP:207,RP:93.8969},{AP:37,SP:208,RP:94.4089},{AP:38,SP:209,RP:94.898},{AP:39,SP:210,RP:95.3647},{AP:41,SP:212,RP:96.2316},{AP:42,SP:213,RP:96.6323},{AP:44,SP:215,RP:97.3691},{AP:45,SP:215,RP:97.7056},{AP:47,SP:217,RP:98.3158},{AP:48,SP:217,RP:98.5897},{AP:51,SP:219,RP:99.2881},{AP:54,SP:220,RP:99.8038},{AP:57,SP:220,RP:100}
  ];
  
  if (sp === 150) {
    for (let i = 0; i < 40; i++) {
      if (when150[i].AP === abilityPoint) {
        remainingPercent = when150[i].RP;
      }
    }
  } else if (sp === 160) {
    for (let i = 0; i < 40; i++) {
      if (when160[i].AP === abilityPoint) {
        remainingPercent = when160[i].RP;
      }
    }
  } else if (sp === 170) {
    for (let i = 0; i < 40; i++) {
      if (when170[i].AP === abilityPoint) {
        remainingPercent = when170[i].RP;
      }
    }
  } else if (sp === 180) {
    for (let i = 0; i < 40; i++) {
      if (when180[i].AP === abilityPoint) {
        remainingPercent = when180[i].RP;
      }
    }
  } else if (sp === 190) {
    for (let i = 0; i < 40; i++) {
      if (when190[i].AP === abilityPoint) {
        remainingPercent = when190[i].RP;
      }
    }
  } else if (sp === 200) {
    for (let i = 0; i < 40; i++) {
      if (when200[i].AP === abilityPoint) {
        remainingPercent = when200[i].RP;
      }
    }
  } else if (sp === 210) {
    for (let i = 0; i < 40; i++) {
      if (when210[i].AP === abilityPoint) {
        remainingPercent = when210[i].RP;
      }
    }
  } else if (sp === 220) {
    for (let i = 0; i < 40; i++) {
      if (when220[i].AP === abilityPoint) {
        remainingPercent = when220[i].RP;
      }
    }
  }
  
  // 復活ペナルティアップをつけている場合
  if (abilityName === "respawnPunisher") {
    remainingPercent = remainingPercent + 22.5;
  }
  
  
  lostPercent = (1000000 - remainingPercent * 10000) / 10000;
  
  return (
    <div className="ae-card row">
      <div className="ap-icon-area col-1">
        <div className="ability-icon ap-ability-icon">
          <img className="ap-ability-img" src={specialSaverImg} alt=""/>
        </div>
      </div>
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">  
          <p className="ae-text">デスする直前のスペシャルゲージに対する減少量</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{lostPercent} ％</p>
        </div>
      </div>
    </div>
  );
});

export default SpecialSaver;