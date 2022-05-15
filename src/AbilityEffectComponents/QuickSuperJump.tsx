import { FC, ReactElement } from 'react';
import quickSuperJumpImg from '../images/ability/QSJ.png';

type QuickSuperJumpProps= {
  abilityPoint: number;
};

const QuickSuperJump: FC<QuickSuperJumpProps> = ({ abilityPoint }): ReactElement => {
  let superJumpFrame: number;
  let superJumpSecond: number;
  let onGroundFrame: number;
  let onGroundSecond: number;
  
  const prepareTime = [
    {AP:0,frame:80,second:1.33},{AP:3,frame:58,second:0.97},{AP:6,frame:50,second:0.83},{AP:9,frame:45,second:0.75},{AP:10,frame:44,second:0.73},{AP:12,frame:41,second:0.68},{AP:13,frame:40,second:0.67},{AP:15,frame:38,second:0.63},{AP:16,frame:37,second:0.62},{AP:18,frame:35,second:0.58},{AP:19,frame:34,second:0.57},{AP:20,frame:34,second:0.57},{AP:21,frame:33,second:0.55},{AP:22,frame:32,second:0.53},{AP:23,frame:31,second:0.52},{AP:24,frame:31,second:0.52},{AP:25,frame:30,second:0.5},{AP:26,frame:30,second:0.5},{AP:27,frame:29,second:0.48},{AP:28,frame:28,second:0.47},{AP:29,frame:28,second:0.47},{AP:30,frame:27,second:0.45},{AP:31,frame:27,second:0.45},{AP:32,frame:26,second:0.43},{AP:33,frame:26,second:0.43},{AP:34,frame:26,second:0.43},{AP:35,frame:25,second:0.42},{AP:36,frame:25,second:0.42},{AP:37,frame:24,second:0.4},{AP:38,frame:24,second:0.4},{AP:39,frame:24,second:0.4},{AP:41,frame:23,second:0.38},{AP:42,frame:23,second:0.38},{AP:44,frame:22,second:0.37},{AP:45,frame:22,second:0.37},{AP:47,frame:22,second:0.37},{AP:48,frame:21,second:0.35},{AP:51,frame:21,second:0.35},{AP:54,frame:21,second:0.35},{AP:57,frame:20,second:0.33}
  ];
  const jumpTime = [
    {AP:0,frame:138,second:2.3},{AP:3,frame:138,second:2.3},{AP:6,frame:138,second:2.3},{AP:9,frame:137,second:2.28},{AP:10,frame:137,second:2.28},{AP:12,frame:136,second:2.27},{AP:13,frame:136,second:2.27},{AP:15,frame:135,second:2.25},{AP:16,frame:134,second:2.23},{AP:18,frame:133,second:2.22},{AP:19,frame:132,second:2.2},{AP:20,frame:131,second:2.18},{AP:21,frame:130,second:2.17},{AP:22,frame:129,second:2.15},{AP:23,frame:128,second:2.13},{AP:24,frame:127,second:2.12},{AP:25,frame:126,second:2.1},{AP:26,frame:125,second:2.08},{AP:27,frame:124,second:2.07},{AP:28,frame:123,second:2.05},{AP:29,frame:122,second:2.03},{AP:30,frame:121,second:2.02},{AP:31,frame:119,second:1.98},{AP:32,frame:118,second:1.97},{AP:33,frame:117,second:1.95},{AP:34,frame:116,second:1.93},{AP:35,frame:115,second:1.92},{AP:36,frame:114,second:1.9},{AP:37,frame:112,second:1.87},{AP:38,frame:111,second:1.85},{AP:39,frame:110,second:1.83},{AP:41,frame:108,second:1.8},{AP:42,frame:107,second:1.78},{AP:44,frame:105,second:1.75},{AP:45,frame:104,second:1.73},{AP:47,frame:102,second:1.7},{AP:48,frame:101,second:1.68},{AP:51,frame:99,second:1.65},{AP:54,frame:98,second:1.63},{AP:57,frame:97,second:1.62}
  ];
  
  for (let i=0; i<40; i++) {
    if (abilityPoint === prepareTime[i].AP) {
      superJumpFrame = prepareTime[i].frame + jumpTime[i].frame;
      superJumpSecond = (prepareTime[i].second*100 + jumpTime[i].second*100) / 100;
      onGroundFrame = prepareTime[i].frame;
      onGroundSecond = prepareTime[i].second;
    }
  }
  return (
    <div className="ae-card row">
      <div className="col-1 ap-icon-area">
        <div className="ability-icon ap-ability-icon">
          <p className="ability-detail-tooltip" style={{width: "22rem" }}>スーパージャンプ時間短縮 : スーパージャンプの時間が短くなります。</p>
          <img className="ap-ability-img" src={quickSuperJumpImg} alt=""/>
        </div>
      </div>
      <div className="d-flex flex-column col-11 px-0">
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">スーパージャンプ全体の時間</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{superJumpFrame!} F （{superJumpSecond!} 秒）</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">ボタン入力からジャンプ開始まで</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{onGroundFrame!} F （{onGroundSecond!} 秒）</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSuperJump;