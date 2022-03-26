import inkRecoveryImg from '../images/ability/REC.png';

const InkRecovery = (props) => {
  let abilityPoint = props.abilityPoint
  let frameInInk;
  let secondInInk;
  let frameStanding;
  let secondStanding;
  let recoveryInInk = [
    {AP:0, frame:180, second:3},
    {AP:3, frame:174, second:2.9},
    {AP:6, frame:169, second:2.82},
    {AP:9, frame:163, second:2.72},
    {AP:10, frame:161, second:2.68},
    {AP:12, frame:158, second:2.63},
    {AP:13, frame:156, second:2.6},
    {AP:15, frame:153, second:2.55},
    {AP:16, frame:152, second:2.53},
    {AP:18, frame:149, second:2.48},
    {AP:19, frame:147, second:2.45},
    {AP:20, frame:146, second:2.43},
    {AP:21, frame:144, second:2.4},
    {AP:22, frame:143, second:2.38},
    {AP:23, frame:142, second:2.37},
    {AP:24, frame:140, second:2.33},
    {AP:25, frame:139, second:2.32},
    {AP:26, frame:138, second:2.3},
    {AP:27, frame:137, second:2.28},
    {AP:28, frame:136, second:2.27},
    {AP:29, frame:135, second:2.25},
    {AP:30, frame:133, second:2.22},
    {AP:31, frame:132, second:2.2},
    {AP:32, frame:131, second:2.18},
    {AP:33, frame:130, second:2.17},
    {AP:34, frame:129, second:2.15},
    {AP:35, frame:129, second:2.15},
    {AP:36, frame:128, second:2.13},
    {AP:37, frame:127, second:2.12},
    {AP:38, frame:126, second:2.1},
    {AP:39, frame:125, second:2.08},
    {AP:41, frame:124, second:2.07},
    {AP:42, frame:123, second:2.05},
    {AP:44, frame:122, second:2.03},
    {AP:45, frame:121, second:2.02},
    {AP:47, frame:120, second:2},
    {AP:48, frame:120, second:2},
    {AP:51, frame:119, second:1.98},
    {AP:54, frame:118, second:1.97},
    {AP:57, frame:117, second:1.95}
  ];
  let recoveryStanding = [
    {AP:0, frame:600, second:10},
    {AP:3, frame:564, second:9.4},
    {AP:6, frame:529, second:8.82},
    {AP:9, frame:496, second:8.27},
    {AP:10, frame:485, second:8.08},
    {AP:12, frame:465, second:7.75},
    {AP:13, frame:455, second:7.58},
    {AP:15, frame:435, second:7.25},
    {AP:16, frame:426, second:7.1},
    {AP:18, frame:408, second:6.8},
    {AP:19, frame:399, second:6.65},
    {AP:20, frame:391, second:6.52},
    {AP:21, frame:382, second:6.37},
    {AP:22, frame:374, second:6.23},
    {AP:23, frame:366, second:6.1},
    {AP:24, frame:359, second:5.98},
    {AP:25, frame:351, second:5.85},
    {AP:26, frame:344, second:5.73},
    {AP:27, frame:337, second:5.62},
    {AP:28, frame:330, second:5.5},
    {AP:29, frame:323, second:5.38},
    {AP:30, frame:317, second:5.28},
    {AP:31, frame:310, second:5.17},
    {AP:32, frame:304, second:5.07},
    {AP:33, frame:298, second:4.97},
    {AP:34, frame:293, second:4.88},
    {AP:35, frame:287, second:4.78},
    {AP:36, frame:282, second:4.7},
    {AP:37, frame:277, second:4.62},
    {AP:38, frame:272, second:4.53},
    {AP:39, frame:267, second:4.45},
    {AP:41, frame:259, second:4.32},
    {AP:42, frame:255, second:4.25},
    {AP:44, frame:247, second:4.12},
    {AP:45, frame:244, second:4.07},
    {AP:47, frame:238, second:3.97},
    {AP:48, frame:235, second:3.92},
    {AP:51, frame:228, second:3.8},
    {AP:54, frame:223, second:3.72},
    {AP:57, frame:220, second:3.67},
  ];
  
  for (let i=0; i < 40; i++) {
    if (recoveryInInk[i].AP === abilityPoint) {
      frameInInk = recoveryInInk[i].frame;
      secondInInk = recoveryInInk[i].second;
      frameStanding = recoveryStanding[i].frame;
      secondStanding = recoveryStanding[i].second;
    }
  }
  
  return (
    <div className="ae-card border d-flex">
      <div className="ap-icon-area">
        <div className="ability-icon ap-ability-icon">
          <img className="ap-ability-img" src={inkRecoveryImg} alt=""/>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text-first">インクタンク100%までの時間</p>
            <p className="ae-text-second">（自インク内でイカ状態）</p>
          </div>
          <p className="col-2 ae-colon">:</p>
          <div className="col-3 px-0 m-auto">
            <p className="ae-effect">{secondInInk} 秒</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text-first">インクタンク100%までの時間</p>
            <p className="ae-text-second">（ヒト状態）</p>
          </div>
          <p className="col-2 ae-colon">:</p>
          <div className="col-3 px-0 m-auto">
            <p className="ae-effect">{secondStanding} 秒</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InkRecovery;