import qrImg from '../images/ability/QR.png';

const QuickRespawn = (props) => {
  let abilityPoint = props.abilityPoint;
  let abilityName = props.abilityName;
  let respawnFrames;
  let respawnSeconds;
  
  const dyingTime = [
    {AP:0,frame:270,second:4.5},{AP:3,frame:253,second:4.22},{AP:6,frame:237,second:3.95},{AP:9,frame:221,second:3.68},{AP:10,frame:216,second:3.6},{AP:12,frame:206,second:3.43},{AP:13,frame:201,second:3.35},{AP:15,frame:192,second:3.2},{AP:16,frame:188,second:3.13},{AP:18,frame:179,second:2.98},{AP:19,frame:175,second:2.92},{AP:20,frame:171,second:2.85},{AP:21,frame:167,second:2.78},{AP:22,frame:163,second:2.72},{AP:23,frame:160,second:2.67},{AP:24,frame:156,second:2.6},{AP:25,frame:152,second:2.53},{AP:26,frame:149,second:2.48},{AP:27,frame:146,second:2.43},{AP:28,frame:142,second:2.37},{AP:29,frame:139,second:2.32},{AP:30,frame:136,second:2.27},{AP:31,frame:133,second:2.22},{AP:32,frame:130,second:2.17},{AP:33,frame:127,second:2.12},{AP:34,frame:125,second:2.08},{AP:35,frame:122,second:2.03},{AP:36,frame:120,second:2},{AP:37,frame:117,second:1.95},{AP:38,frame:115,second:1.92},{AP:39,frame:113,second:1.88},{AP:41,frame:109,second:1.82},{AP:42,frame:107,second:1.78},{AP:44,frame:103,second:1.72},{AP:45,frame:102,second:1.7},{AP:47,frame:99,second:1.65},{AP:48,frame:97,second:1.62},{AP:51,frame:94,second:1.57},{AP:54,frame:91,second:1.52},{AP:57,frame:90,second:1.5}
  ];
  const deathCamTime = [
    {AP:0,frame:90,second:1.5},{AP:3,frame:85,second:1.42},{AP:6,frame:79,second:1.32},{AP:9,frame:74,second:1.23},{AP:10,frame:72,second:1.2},{AP:12,frame:69,second:1.15},{AP:13,frame:67,second:1.12},{AP:15,frame:64,second:1.07},{AP:16,frame:63,second:1.05},{AP:18,frame:60,second:1},{AP:19,frame:59,second:0.98},{AP:20,frame:57,second:0.95},{AP:21,frame:56,second:0.93},{AP:22,frame:55,second:0.92},{AP:23,frame:54,second:0.9},{AP:24,frame:52,second:0.87},{AP:25,frame:51,second:0.85},{AP:26,frame:50,second:0.83},{AP:27,frame:49,second:0.82},{AP:28,frame:48,second:0.8},{AP:29,frame:47,second:0.78},{AP:30,frame:46,second:0.77},{AP:31,frame:45,second:0.75},{AP:32,frame:44,second:0.73},{AP:33,frame:43,second:0.72},{AP:34,frame:42,second:0.7},{AP:35,frame:41,second:0.68},{AP:36,frame:40,second:0.67},{AP:37,frame:39,second:0.65},{AP:38,frame:39,second:0.65},{AP:39,frame:38,second:0.63},{AP:41,frame:37,second:0.62},{AP:42,frame:36,second:0.6},{AP:44,frame:35,second:0.58},{AP:45,frame:34,second:0.57},{AP:47,frame:33,second:0.55},{AP:48,frame:33,second:0.55},{AP:51,frame:32,second:0.53},{AP:54,frame:31,second:0.52},{AP:57,frame:30,second:0.5}
  ];
  
  for (let i=0; i<40; i++) {
    if (abilityPoint === dyingTime[i].AP) {
      respawnFrames = dyingTime[i].frame + deathCamTime[i].frame;
      respawnSeconds = dyingTime[i].second + deathCamTime[i].second;
    }
  }
  // 復活ペナルティアップをつけている場合
  if (abilityName === "respawnPunisher") {
    respawnFrames = respawnFrames + 68;
    respawnSeconds = respawnSeconds + 1.13;
  }
  return (
    <div className="ae-card row">
      <div className="ap-icon-area col-1">  
        <div className="ability-icon ap-ability-icon">
          <p className="ability-detail-tooltip">復活時間短縮 : 相手を一人も倒せないまま連続でやられた時、復活時間が短くなります。</p>
          <img className="ap-ability-img" src={qrImg} alt=""/>
        </div>
      </div>
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">復活までの時間</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{respawnFrames + 150} F （{respawnSeconds + 2.5} 秒）</p>
        </div>
      </div>
    </div>
  );
};

export default QuickRespawn;