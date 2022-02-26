import subPowerImg from '../images/ability/SubPU.png';
import CurlingBombImg from '../images/subSP/Wsb_Bomb_Curling.png';
import FizzyBombImg from '../images/subSP/Wsb_Bomb_Fizzy.png';
import BurstBombImg from '../images/subSP/Wsb_Bomb_Burst.png';
import AutoBombImg from '../images/subSP/Wsb_Bomb_Auto.png';
import SplatBombImg from '../images/subSP/Wsb_Bomb_Splat.png';
import SuctionBombImg from '../images/subSP/Wsb_Bomb_Suction.png';
import TorpedoImg from '../images/subSP/Wsb_Torpedo.png';
import SquidBeakonImg from '../images/subSP/Wsb_SquidBeakon.png';
import PointSensorImg from '../images/subSP/Wsb_PointSensor.png';
import ToxicMistImg from '../images/subSP/Wsb_ToxicMist.png';
import SplashWallImg from '../images/subSP/Wsb_SplashWall.png';
import SprinklerImg from '../images/subSP/Wsb_Sprinkler.png';
import InkMineImg from '../images/subSP/Wsb_InkMine.png';

const SubPowerUp = (props) => {
  let name = props.weaponStatus.sub;
  let abilityPoint = props.SPUabilityPoint;
  let element;
  let subWeaponImg
  
  // ビーコン
  let superJumpFrame;
  let onGroundFrame;
  let superJumpSecond;
  let onGroundSecond;
  
  let QSJabilityPoint = props.QSJabilityPoint;
  
  const prepareTime = [
    {AP:0,frame:80},{AP:3,frame:55},{AP:6,frame:45},{AP:9,frame:40},{AP:10,frame:39},{AP:12,frame:36},{AP:13,frame:35},{AP:15,frame:33},{AP:16,frame:32},{AP:18,frame:30},{AP:19,frame:30},{AP:20,frame:29},{AP:21,frame:28},{AP:22,frame:28},{AP:23,frame:27},{AP:24,frame:26},{AP:25,frame:26},{AP:26,frame:26},{AP:27,frame:25},{AP:28,frame:25},{AP:29,frame:24},{AP:30,frame:24},{AP:31,frame:24},{AP:32,frame:23},{AP:33,frame:23},{AP:34,frame:23},{AP:35,frame:23},{AP:36,frame:23},{AP:37,frame:22},{AP:38,frame:22},{AP:39,frame:22},{AP:41,frame:22},{AP:42,frame:21},{AP:44,frame:21},{AP:45,frame:21},{AP:47,frame:21},{AP:48,frame:21},{AP:51,frame:21},{AP:54,frame:21},{AP:57,frame:20}
  ];
  const jumpTime = [
    {AP:0,frame:138},{AP:3,frame:138},{AP:6,frame:137},{AP:9,frame:136},{AP:10,frame:135},{AP:12,frame:133},{AP:13,frame:133},{AP:15,frame:130},{AP:16,frame:129},{AP:18,frame:126},{AP:19,frame:125},{AP:20,frame:124},{AP:21,frame:123},{AP:22,frame:122},{AP:23,frame:119},{AP:24,frame:118},{AP:25,frame:117},{AP:26,frame:116},{AP:27,frame:115},{AP:28,frame:114},{AP:29,frame:112},{AP:30,frame:111},{AP:31,frame:110},{AP:32,frame:109},{AP:33,frame:108},{AP:34,frame:107},{AP:35,frame:107},{AP:36,frame:106},{AP:37,frame:105},{AP:38,frame:104},{AP:39,frame:103},{AP:41,frame:102},{AP:42,frame:101},{AP:44,frame:101},{AP:45,frame:100},{AP:47,frame:99},{AP:48,frame:99},{AP:51,frame:98},{AP:54,frame:97},{AP:57,frame:97}
  ];
  const prepareTimeQSJ = [
    {AP:0,frame:80,second:1.33},{AP:3,frame:58,second:0.97},{AP:6,frame:50,second:0.83},{AP:9,frame:45,second:0.75},{AP:10,frame:44,second:0.73},{AP:12,frame:41,second:0.68},{AP:13,frame:40,second:0.67},{AP:15,frame:38,second:0.63},{AP:16,frame:37,second:0.62},{AP:18,frame:35,second:0.58},{AP:19,frame:34,second:0.57},{AP:20,frame:34,second:0.57},{AP:21,frame:33,second:0.55},{AP:22,frame:32,second:0.53},{AP:23,frame:31,second:0.52},{AP:24,frame:31,second:0.52},{AP:25,frame:30,second:0.5},{AP:26,frame:30,second:0.5},{AP:27,frame:29,second:0.48},{AP:28,frame:28,second:0.47},{AP:29,frame:28,second:0.47},{AP:30,frame:27,second:0.45},{AP:31,frame:27,second:0.45},{AP:32,frame:26,second:0.43},{AP:33,frame:26,second:0.43},{AP:34,frame:26,second:0.43},{AP:35,frame:25,second:0.42},{AP:36,frame:25,second:0.42},{AP:37,frame:24,second:0.4},{AP:38,frame:24,second:0.4},{AP:39,frame:24,second:0.4},{AP:41,frame:23,second:0.38},{AP:42,frame:23,second:0.38},{AP:44,frame:22,second:0.37},{AP:45,frame:22,second:0.37},{AP:47,frame:22,second:0.37},{AP:48,frame:21,second:0.35},{AP:51,frame:21,second:0.35},{AP:54,frame:21,second:0.35},{AP:57,frame:20,second:0.33}
  ];
  const jumpTimeQSJ = [
    {AP:0,frame:138,second:2.3},{AP:3,frame:138,second:2.3},{AP:6,frame:138,second:2.3},{AP:9,frame:137,second:2.28},{AP:10,frame:137,second:2.28},{AP:12,frame:136,second:2.27},{AP:13,frame:136,second:2.27},{AP:15,frame:135,second:2.25},{AP:16,frame:134,second:2.23},{AP:18,frame:133,second:2.22},{AP:19,frame:132,second:2.2},{AP:20,frame:131,second:2.18},{AP:21,frame:130,second:2.17},{AP:22,frame:129,second:2.15},{AP:23,frame:128,second:2.13},{AP:24,frame:127,second:2.12},{AP:25,frame:126,second:2.1},{AP:26,frame:125,second:2.08},{AP:27,frame:124,second:2.07},{AP:28,frame:123,second:2.05},{AP:29,frame:122,second:2.03},{AP:30,frame:121,second:2.02},{AP:31,frame:119,second:1.98},{AP:32,frame:118,second:1.97},{AP:33,frame:117,second:1.95},{AP:34,frame:116,second:1.93},{AP:35,frame:115,second:1.92},{AP:36,frame:114,second:1.9},{AP:37,frame:112,second:1.87},{AP:38,frame:111,second:1.85},{AP:39,frame:110,second:1.83},{AP:41,frame:108,second:1.8},{AP:42,frame:107,second:1.78},{AP:44,frame:105,second:1.75},{AP:45,frame:104,second:1.73},{AP:47,frame:102,second:1.7},{AP:48,frame:101,second:1.68},{AP:51,frame:99,second:1.65},{AP:54,frame:98,second:1.63},{AP:57,frame:97,second:1.62}
  ];
  
  // キューバンボム スプラッシュボム、ロボットボム、クイックボム、ポイズンミストも同じ値をとる
  const BombsAndMist = [
    {AP:0,velocity:11.2},{AP:3,velocity:11.74079},{AP:6,velocity:12.25437},{AP:9,velocity:12.74073},{AP:10,velocity:12.8968},{AP:12,velocity:13.19987},{AP:13,velocity:13.34687},{AP:15,velocity:13.6318},{AP:16,velocity:13.76973},{AP:18,velocity:14.03651},{AP:19,velocity:14.16537},{AP:20,velocity:14.2912},{AP:21,velocity:14.41401},{AP:22,velocity:14.53379},{AP:23,velocity:14.65055},{AP:24,velocity:14.76429},{AP:25,velocity:14.875},{AP:26,velocity:14.98269},{AP:27,velocity:15.08735},{AP:28,velocity:15.18899},{AP:29,velocity:15.28761},{AP:30,velocity:15.3832},{AP:31,velocity:15.47577},{AP:32,velocity:15.56531},{AP:33,velocity:15.65183},{AP:34,velocity:15.73533},{AP:35,velocity:15.8158},{AP:36,velocity:15.89325},{AP:37,velocity:15.96767},{AP:38,velocity:16.03907},{AP:39,velocity:16.10745},{AP:41,velocity:16.23513},{AP:42,velocity:16.29443},{AP:44,velocity:16.40397},{AP:45,velocity:16.4542},{AP:47,velocity:16.54559},{AP:48,velocity:16.58675},{AP:51,velocity:16.69209},{AP:54,velocity:16.77021},{AP:57,velocity:16.8}
  ];
  
  let bombRange;
  
  let subName;
  
  // カーリングボム
  const CurlingBomb = [
    {AP:0,velocity:1},{AP:3,velocity:1.02897},{AP:6,velocity:1.05648},{AP:9,velocity:1.08254},{AP:10,velocity:1.0909},{AP:12,velocity:1.10714},{AP:13,velocity:1.11501},{AP:15,velocity:1.13027},{AP:16,velocity:1.13766},{AP:18,velocity:1.15196},{AP:19,velocity:1.15886},{AP:20,velocity:1.1656},{AP:21,velocity:1.17218},{AP:22,velocity:1.1786},{AP:23,velocity:1.18485},{AP:24,velocity:1.19094},{AP:25,velocity:1.19687},{AP:26,velocity:1.20264},{AP:27,velocity:1.20825},{AP:28,velocity:1.2137},{AP:29,velocity:1.21898},{AP:30,velocity:1.2241},{AP:31,velocity:1.22906},{AP:32,velocity:1.23386},{AP:33,velocity:1.23849},{AP:34,velocity:1.24296},{AP:35,velocity:1.24727},{AP:36,velocity:1.25142},{AP:37,velocity:1.25541},{AP:38,velocity:1.25924},{AP:39,velocity:1.2629},{AP:41,velocity:1.26974},{AP:42,velocity:1.27292},{AP:44,velocity:1.27878},{AP:45,velocity:1.28147},{AP:47,velocity:1.28637},{AP:48,velocity:1.28858},{AP:51,velocity:1.29422},{AP:54,velocity:1.2984},{AP:57,velocity:1.3}
  ];
  
  let velocity;
  // スプリンクラー
  const Sprinkler = [
    {AP:0,FF:300,SF:900},{AP:3,FF:329,SF:912},{AP:6,FF:357,SF:923},{AP:9,FF:383,SF:934},{AP:10,FF:391,SF:937},{AP:12,FF:408,SF:943},{AP:13,FF:416,SF:947},{AP:15,FF:431,SF:953},{AP:16,FF:438,SF:956},{AP:18,FF:452,SF:961},{AP:19,FF:459,SF:964},{AP:20,FF:466,SF:967},{AP:21,FF:473,SF:969},{AP:22,FF:479,SF:972},{AP:23,FF:485,SF:974},{AP:24,FF:491,SF:977},{AP:25,FF:497,SF:979},{AP:26,FF:503,SF:982},{AP:27,FF:509,SF:984},{AP:28,FF:514,SF:986},{AP:29,FF:519,SF:988},{AP:30,FF:525,SF:990},{AP:31,FF:530,SF:992},{AP:32,FF:534,SF:994},{AP:33,FF:539,SF:996},{AP:34,FF:543,SF:998},{AP:35,FF:548,SF:999},{AP:36,FF:552,SF:1001},{AP:37,FF:556,SF:1003},{AP:38,FF:560,SF:1004},{AP:39,FF:563,SF:1006},{AP:41,FF:570,SF:1008},{AP:42,FF:573,SF:1010},{AP:44,FF:579,SF:1012},{AP:45,FF:582,SF:1013},{AP:47,FF:587,SF:1015},{AP:48,FF:589,SF:1016},{AP:51,FF:595,SF:1018},{AP:54,FF:599,SF:1020},{AP:57,FF:600,SF:1020}
  ];
  let firstPhaseFrame;
  let firstPhaseSecond;
  let secondPhaseFrame;
  let secondPhaseSecond;
  // ポイズンミスト
  const ToxicMist = [
    {AP:0,velocity:11.2},{AP:3,velocity:11.74079},{AP:6,velocity:12.25437},{AP:9,velocity:12.74073},{AP:10,velocity:12.8968},{AP:12,velocity:13.19987},{AP:13,velocity:13.34687},{AP:15,velocity:13.6318},{AP:16,velocity:13.76973},{AP:18,velocity:14.03651},{AP:19,velocity:14.16537},{AP:20,velocity:14.2912},{AP:21,velocity:14.41401},{AP:22,velocity:14.53379},{AP:23,velocity:14.65055},{AP:24,velocity:14.76429},{AP:25,velocity:14.875},{AP:26,velocity:14.98269},{AP:27,velocity:15.08735},{AP:28,velocity:15.18899},{AP:29,velocity:15.28761},{AP:30,velocity:15.3832},{AP:31,velocity:15.47577},{AP:32,velocity:15.56531},{AP:33,velocity:15.65183},{AP:34,velocity:15.73533},{AP:35,velocity:15.8158},{AP:36,velocity:15.89325},{AP:37,velocity:15.96767},{AP:38,velocity:16.03907},{AP:39,velocity:16.10745},{AP:41,velocity:16.23513},{AP:42,velocity:16.29443},{AP:44,velocity:16.40397},{AP:45,velocity:16.4542},{AP:47,velocity:16.54559},{AP:48,velocity:16.58675},{AP:51,velocity:16.69209},{AP:54,velocity:16.77021},{AP:57,velocity:16.8}
  ];
  // ポイントセンサー
  const PointSencorVelocity = [
    {AP:0,velocity:13.8},{AP:3,velocity:14.37819},{AP:6,velocity:14.86456},{AP:9,velocity:15.30585},{AP:10,velocity:15.44473},{AP:12,velocity:15.71138},{AP:13,velocity:15.83944},{AP:15,velocity:16.08556},{AP:16,velocity:16.2038},{AP:18,velocity:16.43098},{AP:19,velocity:16.54004},{AP:20,velocity:16.64616},{AP:21,velocity:16.74936},{AP:22,velocity:16.8497},{AP:23,velocity:16.94721},{AP:24,velocity:17.04192},{AP:25,velocity:17.13387},{AP:26,velocity:17.22307},{AP:27,velocity:17.30956},{AP:28,velocity:17.39337},{AP:29,velocity:17.4745},{AP:30,velocity:17.55299},{AP:31,velocity:17.62884},{AP:32,velocity:17.70209},{AP:33,velocity:17.77274},{AP:34,velocity:17.8408},{AP:35,velocity:17.90631},{AP:36,velocity:17.96925},{AP:37,velocity:18.02966},{AP:38,velocity:18.08753},{AP:39,velocity:18.14289},{AP:41,velocity:18.24608},{AP:42,velocity:18.29393},{AP:44,velocity:18.38219},{AP:45,velocity:18.42262},{AP:47,velocity:18.49607},{AP:48,velocity:18.52912},{AP:51,velocity:18.6136},{AP:54,velocity:18.67616},{AP:57,velocity:18.7}
  ];
  const PointSencorMarkingTime = [
    {AP:0,MT:480},{AP:3,MT:527},{AP:6,MT:571},{AP:9,MT:613},{AP:10,MT:626},{AP:12,MT:652},{AP:13,MT:665},{AP:15,MT:689},{AP:16,MT:701},{AP:18,MT:724},{AP:19,MT:735},{AP:20,MT:745},{AP:21,MT:756},{AP:22,MT:766},{AP:23,MT:776},{AP:24,MT:786},{AP:25,MT:795},{AP:26,MT:805},{AP:27,MT:814},{AP:28,MT:822},{AP:29,MT:831},{AP:30,MT:839},{AP:31,MT:847},{AP:32,MT:855},{AP:33,MT:862},{AP:34,MT:869},{AP:35,MT:876},{AP:36,MT:883},{AP:37,MT:889},{AP:38,MT:895},{AP:39,MT:901},{AP:41,MT:912},{AP:42,MT:917},{AP:44,MT:927},{AP:45,MT:931},{AP:47,MT:939},{AP:48,MT:942},{AP:51,MT:951},{AP:54,MT:958},{AP:57,MT:960} 
  ];
  
  let markingFrame;
  let markingSecond;
  
  // タンサンボム
  const FizzyBomb = [
    {AP:0,velocity:13.6},{AP:3,velocity:14.06354},{AP:6,velocity:14.50374},{AP:9,velocity:14.92062},{AP:10,velocity:15.0544},{AP:12,velocity:15.31418},{AP:13,velocity:15.44018},{AP:15,velocity:15.6844},{AP:16,velocity:15.80262},{AP:18,velocity:16.0313},{AP:19,velocity:16.14174},{AP:20,velocity:16.2496},{AP:21,velocity:16.35486},{AP:22,velocity:16.45754},{AP:23,velocity:16.55762},{AP:24,velocity:16.6551},{AP:25,velocity:16.75},{AP:26,velocity:16.8423},{AP:27,velocity:16.93202},{AP:28,velocity:17.01914},{AP:29,velocity:17.10366},{AP:30,velocity:17.1856},{AP:31,velocity:17.26494},{AP:32,velocity:17.3417},{AP:33,velocity:17.41586},{AP:34,velocity:17.48742},{AP:35,velocity:17.5564},{AP:36,velocity:17.62278},{AP:37,velocity:17.68658},{AP:38,velocity:17.74778},{AP:39,velocity:17.80638},{AP:41,velocity:17.91582},{AP:42,velocity:17.96666},{AP:44,velocity:18.06054},{AP:45,velocity:18.1036},{AP:47,velocity:18.18194},{AP:48,velocity:18.21722},{AP:51,velocity:18.3075},{AP:54,velocity:18.37446},{AP:57,velocity:18.4}
  ];
  
  // トラップ
  const InkMine = [
    {AP:0,ER:1,DT:300},{AP:3,ER:1.03621,DT:329},{AP:6,ER:1.07061,DT:357},{AP:9,ER:1.10317,DT:383},{AP:10,ER:1.11363,DT:391},{AP:12,ER:1.13392,DT:408},{AP:13,ER:1.14376,DT:416},{AP:15,ER:1.16284,DT:431},{AP:16,ER:1.17208,DT:438},{AP:18,ER:1.18995,DT:452},{AP:19,ER:1.19857,DT:459},{AP:20,ER:1.207,DT:466},{AP:21,ER:1.21522,DT:473},{AP:22,ER:1.22324,DT:479},{AP:23,ER:1.23106,DT:485},{AP:24,ER:1.23868,DT:491},{AP:25,ER:1.24609,DT:497},{AP:26,ER:1.25331,DT:503},{AP:27,ER:1.26031,DT:509},{AP:28,ER:1.26712,DT:514},{AP:29,ER:1.27372,DT:519},{AP:30,ER:1.28012,DT:525},{AP:31,ER:1.28632,DT:530},{AP:32,ER:1.29232,DT:534},{AP:33,ER:1.29811,DT:539},{AP:34,ER:1.3037,DT:543},{AP:35,ER:1.30909,DT:548},{AP:36,ER:1.31428,DT:552},{AP:37,ER:1.31926,DT:556},{AP:38,ER:1.32404,DT:560},{AP:39,ER:1.32862,DT:563},{AP:41,ER:1.33717,DT:570},{AP:42,ER:1.34115,DT:573},{AP:44,ER:1.34848,DT:579},{AP:45,ER:1.35184,DT:582},{AP:47,ER:1.35796,DT:587},{AP:48,ER:1.36072,DT:589},{AP:51,ER:1.36777,DT:595},{AP:54,ER:1.37301,DT:599},{AP:57,ER:1.375,DT:600}
  ];
  
  let explosionRadius;
  
  // スプラッシュシールド
  const SplashWall = [
    {AP:0,HP:800},{AP:3,HP:867.5},{AP:6,HP:931.7},{AP:9,HP:992.5},{AP:10,HP:1012.1},{AP:12,HP:1049.9},{AP:13,HP:1068.3},{AP:15,HP:1103.9},{AP:16,HP:1121.2},{AP:18,HP:1154.5},{AP:19,HP:1170.6},{AP:20,HP:1186.4},{AP:21,HP:1201.7},{AP:22,HP:1216.7},{AP:23,HP:1231.3},{AP:24,HP:1245.5},{AP:25,HP:1259.3},{AP:26,HP:1272.8},{AP:27,HP:1285.9},{AP:28,HP:1298.6},{AP:29,HP:1310.9},{AP:30,HP:1322.9},{AP:31,HP:1334.4},{AP:32,HP:1345.6},{AP:33,HP:1356.4},{AP:34,HP:1366.9},{AP:35,HP:1376.9},{AP:36,HP:1386.6},{AP:37,HP:1395.9},{AP:38,HP:1404.8},{AP:39,HP:1413.4},{AP:41,HP:1429.3},{AP:42,HP:1436.8},{AP:44,HP:1450.4},{AP:45,HP:1456.7},{AP:47,HP:1468.1},{AP:48,HP:1473.3},{AP:51,HP:1486.5},{AP:54,HP:1496.2},{AP:57,HP:1500}
  ];
  
  let wallHP;
  
  if (name === "Beakon") {
    if (QSJabilityPoint === 0 && abilityPoint >= 0) {
      for (let i=0; i<40; i++) {
        if (abilityPoint === prepareTime[i].AP) {
          superJumpFrame = prepareTime[i].frame + jumpTime[i].frame;
          onGroundFrame = prepareTime[i].frame;
        }
      }
    } else if (QSJabilityPoint !== 0 && abilityPoint === 0) {
      for (let i=0; i<40; i++) {
        if (QSJabilityPoint === prepareTimeQSJ[i].AP) {
          superJumpFrame = prepareTimeQSJ[i].frame + jumpTimeQSJ[i].frame;
          onGroundFrame = prepareTimeQSJ[i].frame;
        }
      }
    } else if (QSJabilityPoint !== 0 && abilityPoint !== 0) {
      abilityPoint = abilityPoint + QSJabilityPoint;
      for (let i=0; i<40; i++) {
        if (abilityPoint === prepareTime[i].AP) {
          superJumpFrame = (prepareTime[i].frame + jumpTime[i].frame + prepareTimeQSJ[i].frame + jumpTimeQSJ[i].frame) / 2;
          onGroundFrame = (prepareTime[i].frame + prepareTimeQSJ[i].frame) / 2;
        }
      }
    }
    superJumpSecond = Math.floor(superJumpFrame / 60 * 100) / 100;
    onGroundSecond = Math.floor(onGroundFrame /60 * 100) / 100;
    element = (
      <><div className="ae-text-lg3 ability-effect">
        <p>ビーコンへのスーパージャンプ時間</p>
        <p>ボタン入力からビーコンへのジャンプ開始まで</p>
      </div><div className="ae-colon-xsm ability-effect">
        <p>:</p>
        <p>:</p>
      </div><div className="ae-effect ability-effect">
        <p>{superJumpFrame}F</p>
        <p>{onGroundFrame}F</p>
      </div></>
    );
  } else if (name === "SuctionBomb" || name === "AutoBomb" || name === "SplatBomb" || name === "BurstBomb" || name === "ToxicMist") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === BombsAndMist[i].AP) {
        bombRange = Math.floor(BombsAndMist[i].velocity / BombsAndMist[0].velocity * 10000) / 100;
      }
    }
    if (name === "SuctionBomb") {
      subName = "キューバンボム";
      subWeaponImg = SuctionBombImg;
    } else if (name === "SplatBomb") {
      subName = "スプラッシュボム";
      subWeaponImg = SplatBombImg;
    } else if (name === "BurstBomb") {
      subName = "クイックボム";
      subWeaponImg = BurstBombImg;
    } else if (name === "AutoBomb") {
      subName = "ロボットボム";
      subWeaponImg = AutoBombImg;
    } else if (name === "ToxicMist") {
      subName = "ポイズンミスト";
      subWeaponImg = ToxicMistImg;
    }
    element = (
      <>
      <div className="ae-sub-img">
          <img src={subWeaponImg} className="img-sub-sp" alt=""/>
      </div>
      <div className="ae-text-sm ability-effect">
        <p>飛距離</p>
      </div><div className="ae-colon-lg ability-effect">
        <p>:</p>
      </div><div className="ae-effect ability-effect">
        <p>{bombRange}％</p>
      </div>
      </>
    );
  } else if (name === "CurlingBomb") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === CurlingBomb[i].AP) {
        velocity = Math.floor(2.2 * CurlingBomb[i].velocity * 100) / 100;
        bombRange = Math.floor(CurlingBomb[i].velocity * 10000) / 100;
        subWeaponImg = CurlingBombImg;
      }
    }
    element = (
      <>
      <div className="ae-sub-img">
          <img src={subWeaponImg} className="img-sub-sp" alt=""/>
      </div>
      <div className="ae-text-sm ability-effect">
        <p>初速</p>
        <p>移動距離</p>
      </div><div className="ae-colon-lg ability-effect">
        <p>:</p>
        <p>:</p>
      </div><div className="ae-effect ability-effect">
        <p>{velocity}DU/F</p>
        <p>{bombRange}％</p>
      </div>
      </>
    );
  } else if (name === "Sprinkler") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === Sprinkler[i].AP) {
        firstPhaseFrame = Sprinkler[i].FF;
        firstPhaseSecond = Math.floor(firstPhaseFrame / 60 * 100) / 100;
        secondPhaseFrame = Sprinkler[i].SF;
        secondPhaseSecond = Math.floor(secondPhaseFrame / 60 * 100) / 100;
        subWeaponImg = SprinklerImg;
      }
    }
    element = (
      <><div className="ae-sub-img">
          <img src={subWeaponImg} className="img-sub-sp" alt=""/>
      </div>
      <div className="ae-text-sm ability-effect">
        <p>最大出力の持続時間</p>
        <p>中出力の持続時間</p>
      </div><div className="ae-colon-lg ability-effect">
        <p>:</p>
        <p>:</p>
      </div><div className="ae-effect ability-effect">
        <p>{firstPhaseFrame}F</p>
        <p>{secondPhaseFrame}F</p>
      </div></>
    );
  } else if (name === "Sencor") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === PointSencorMarkingTime[i].AP) {
        bombRange = Math.floor(PointSencorVelocity[i].velocity / PointSencorVelocity[0].velocity * 10000) / 100;
        markingFrame = PointSencorMarkingTime[i].MT
        markingSecond = Math.floor(markingFrame / 60 * 100) / 100;
        subWeaponImg = PointSensorImg;
      }
    }
    element = (
      <><div className="ae-sub-img">
        <img src={subWeaponImg} className="img-sub-sp" alt=""/>
      </div>
      <div className="ae-text-sm ability-effect">
        <p>飛距離</p>
        <p>マーキング時間</p>
      </div><div className="ae-colon-lg ability-effect">
        <p>:</p>
        <p>:</p>
      </div><div className="ae-effect ability-effect">
        <p>{bombRange}％</p>
        <p>{markingFrame}F</p>
      </div></>
    );
  } else if (name === "InkMine") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === InkMine[i].AP) {
        explosionRadius = Math.floor(InkMine[i].ER * 10000) / 100;
        markingFrame = InkMine[i].DT
        markingSecond = Math.floor(markingFrame / 60 * 100) / 100;
        subWeaponImg = InkMineImg;
      }
    }
    element = (
      <><div className="ae-sub-img">
        <img src={subWeaponImg} className="img-sub-sp" alt=""/>
      </div>
      <div className="ae-text-md ability-effect">
        <p>爆風とマーキングの範囲</p>
        <p>マーキング時間</p>
      </div><div className="ae-colon-md ability-effect">
        <p>:</p>
        <p>:</p>
      </div><div className="ae-effect ability-effect">
        <p>{explosionRadius}％</p>
        <p>{markingFrame}F</p>
      </div></>
    );
  } else if (name === "FizzyBomb" || name === "Torpedo") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === FizzyBomb[i].AP) {
        bombRange = Math.floor(FizzyBomb[i].velocity / FizzyBomb[0].velocity * 10000) / 100;
        subWeaponImg = FizzyBombImg;
      }
    }
    element = (
      <><div className="ae-sub-img">
        <img src={subWeaponImg} className="img-sub-sp" alt=""/>
      </div>
      <div className="ae-text-sm ability-effect">
        <p>飛距離</p>
      </div><div className="ae-colon-lg ability-effect">
        <p>:</p>
      </div><div className="ae-effect ability-effect">
        <p>{bombRange}％</p>
      </div></>
    );
  } else if (name === "SplashWall") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === SplashWall[i].AP) {
        wallHP = SplashWall[i].HP;
        subWeaponImg = SplashWallImg;
      }
    }
    element = (
      <><div className="ae-sub-img">
        <img src={subWeaponImg} className="img-sub-sp" alt=""/>
      </div>
      <div className="ae-text-sm ability-effect">
        <p>シールドの耐久値</p>
      </div><div className="ae-colon-lg ability-effect">
        <p>:</p>
      </div><div className="ae-effect ability-effect">
        <p>{wallHP}</p>
      </div></>
    );
  }
  return (
    <div className="ae-card border col-6 d-flex align-items-center">
      <div className="ae-icon">  
        <div className="ability-icon sub-slot slot my-2">
          <img className="subslot-img" src={subPowerImg} alt=""/>
        </div>
      </div>
      {element}
    </div>
  );
};

export default SubPowerUp;