import React, { FC, ReactElement } from 'react';
import specialPowerImg from '../images/ability/SpecialPU.png';
import { SpecialChargeUpProps } from '../Type';

const SpecialPower: FC<SpecialChargeUpProps> = React.memo(({ abilityPoint, weapon }): ReactElement => {
  let element;
  let name = weapon.special;
  let durationFrames;
  let durationSeconds;
  let paintRadius;
  let paintRadiusPercent;
  // let circleRadius;
  let circleRadiusPercent;
  let armorActivationFrames;
  let armorActivationSeconds;
  let hitbox180;
  let hitbox70;
  let explosionRadius;
  let chargeSpeedFrames;
  // let chargeSpeedSeconds;
  let ballerHealth;
  let blastRadius;
  let bubbleSize;
  
  const Missiles = [
    {AP:0,PR:30,CR:140},{AP:3,PR:30.57942,CR:149.657},{AP:6,PR:31.12968,CR:158.828},{AP:9,PR:31.65078,CR:167.513},{AP:10,PR:31.818,CR:170.3},{AP:12,PR:32.14272,CR:175.712},{AP:13,PR:32.30022,CR:178.337},{AP:15,PR:32.6055,CR:183.425},{AP:16,PR:32.75328,CR:185.888},{AP:18,PR:33.03912,CR:190.652},{AP:19,PR:33.17718,CR:192.953},{AP:20,PR:33.312,CR:195.2},{AP:21,PR:33.44358,CR:197.393},{AP:22,PR:33.57192,CR:199.532},{AP:23,PR:33.69702,CR:201.617},{AP:24,PR:33.81888,CR:203.648},{AP:25,PR:33.9375,CR:205.625},{AP:26,PR:34.05288,CR:207.548},{AP:27,PR:34.16502,CR:209.417},{AP:28,PR:34.27392,CR:211.232},{AP:29,PR:34.37958,CR:212.993},{AP:30,PR:34.482,CR:214.7},{AP:31,PR:34.58118,CR:216.353},{AP:32,PR:34.67712,CR:217.952},{AP:33,PR:34.76982,CR:219.497},{AP:34,PR:34.85928,CR:220.988},{AP:35,PR:34.9455,CR:222.425},{AP:36,PR:35.02848,CR:223.808},{AP:37,PR:35.10822,CR:225.137},{AP:38,PR:35.18472,CR:226.412},{AP:39,PR:35.25798,CR:227.633},{AP:41,PR:35.39478,CR:229.913},{AP:42,PR:35.45832,CR:230.972},{AP:44,PR:35.57568,CR:232.928},{AP:45,PR:35.6295,CR:233.825},{AP:47,PR:35.72742,CR:235.457},{AP:48,PR:35.77152,CR:236.192},{AP:51,PR:35.88438,CR:238.073},{AP:54,PR:35.96808,CR:239.468},{AP:57,PR:36,CR:240}
  ];
  const InkArmor = [
    {AP:0,WT:90,DT:360},{AP:3,WT:85,DT:378},{AP:6,WT:79,DT:394},{AP:9,WT:74,DT:410},{AP:10,WT:72,DT:415},{AP:12,WT:69,DT:425},{AP:13,WT:67,DT:430},{AP:15,WT:64,DT:439},{AP:16,WT:63,DT:443},{AP:18,WT:60,DT:452},{AP:19,WT:59,DT:456},{AP:20,WT:57,DT:460},{AP:21,WT:56,DT:464},{AP:22,WT:55,DT:468},{AP:23,WT:54,DT:471},{AP:24,WT:52,DT:475},{AP:25,WT:51,DT:479},{AP:26,WT:50,DT:482},{AP:27,WT:49,DT:485},{AP:28,WT:48,DT:489},{AP:29,WT:47,DT:492},{AP:30,WT:46,DT:495},{AP:31,WT:45,DT:498},{AP:32,WT:44,DT:501},{AP:33,WT:43,DT:504},{AP:34,WT:42,DT:506},{AP:35,WT:41,DT:509},{AP:36,WT:40,DT:511},{AP:37,WT:39,DT:514},{AP:38,WT:39,DT:516},{AP:39,WT:38,DT:518},{AP:41,WT:37,DT:522},{AP:42,WT:36,DT:524},{AP:44,WT:35,DT:528},{AP:45,WT:34,DT:529},{AP:47,WT:33,DT:532},{AP:48,WT:33,DT:534},{AP:51,WT:32,DT:537},{AP:54,WT:31,DT:540},{AP:57,WT:30,DT:540}
  ];
  const CurlingRush = [
    {AP:0,DT:400},{AP:3,DT:412},{AP:6,DT:423},{AP:9,DT:434},{AP:10,DT:437},{AP:12,DT:443},{AP:13,DT:447},{AP:15,DT:453},{AP:16,DT:456},{AP:18,DT:461},{AP:19,DT:464},{AP:20,DT:467},{AP:21,DT:469},{AP:22,DT:472},{AP:23,DT:474},{AP:24,DT:477},{AP:25,DT:479},{AP:26,DT:482},{AP:27,DT:484},{AP:28,DT:486},{AP:29,DT:488},{AP:30,DT:490},{AP:31,DT:492},{AP:32,DT:494},{AP:33,DT:496},{AP:34,DT:498},{AP:35,DT:499},{AP:36,DT:501},{AP:37,DT:503},{AP:38,DT:504},{AP:39,DT:506},{AP:41,DT:508},{AP:42,DT:510},{AP:44,DT:512},{AP:45,DT:513},{AP:47,DT:515},{AP:48,DT:516},{AP:51,DT:518},{AP:54,DT:520},{AP:57,DT:520}
  ];
  const SplashDown = [
    {AP:0,HS180:100,HS70:100},{AP:3,HS180:105.518,HS70:102.414},{AP:6,HS180:110.759,HS70:104.707},{AP:9,HS180:115.722,HS70:106.878},{AP:10,HS180:117.314,HS70:107.575},{AP:12,HS180:120.407,HS70:108.928},{AP:13,HS180:121.907,HS70:109.584},{AP:15,HS180:124.814,HS70:110.856},{AP:16,HS180:126.222,HS70:111.472},{AP:18,HS180:128.944,HS70:112.663},{AP:19,HS180:130.259,HS70:113.238},{AP:20,HS180:131.543,HS70:113.8},{AP:21,HS180:132.796,HS70:114.348},{AP:22,HS180:134.018,HS70:114.883},{AP:23,HS180:135.21,HS70:115.404},{AP:24,HS180:136.37,HS70:115.912},{AP:25,HS180:137.5,HS70:116.406},{AP:26,HS180:138.599,HS70:116.887},{AP:27,HS180:139.667,HS70:117.354},{AP:28,HS180:140.704,HS70:117.808},{AP:29,HS180:141.71,HS70:118.248},{AP:30,HS180:142.686,HS70:118.675},{AP:31,HS180:143.63,HS70:119.088},{AP:32,HS180:144.544,HS70:119.488},{AP:33,HS180:145.427,HS70:119.874},{AP:34,HS180:146.279,HS70:120.247},{AP:35,HS180:147.1,HS70:120.606},{AP:36,HS180:147.89,HS70:120.952},{AP:37,HS180:148.65,HS70:121.284},{AP:38,HS180:149.378,HS70:121.603},{AP:39,HS180:150.076,HS70:121.908},{AP:41,HS180:151.379,HS70:122.478},{AP:42,HS180:151.984,HS70:122.743},{AP:44,HS180:153.102,HS70:123.232},{AP:45,HS180:153.614,HS70:123.456},{AP:47,HS180:154.547,HS70:123.864},{AP:48,HS180:154.967,HS70:124.048},{AP:51,HS180:156.042,HS70:124.518},{AP:54,HS180:156.839,HS70:124.867},{AP:57,HS180:157.143,HS70:125}
  ];
  const AutoRush = [
    {AP:0,DT:360},{AP:3,DT:372},{AP:6,DT:383},{AP:9,DT:394},{AP:10,DT:397},{AP:12,DT:403},{AP:13,DT:407},{AP:15,DT:413},{AP:16,DT:416},{AP:18,DT:421},{AP:19,DT:424},{AP:20,DT:427},{AP:21,DT:429},{AP:22,DT:432},{AP:23,DT:434},{AP:24,DT:437},{AP:25,DT:439},{AP:26,DT:442},{AP:27,DT:444},{AP:28,DT:446},{AP:29,DT:448},{AP:30,DT:450},{AP:31,DT:452},{AP:32,DT:454},{AP:33,DT:456},{AP:34,DT:458},{AP:35,DT:459},{AP:36,DT:461},{AP:37,DT:463},{AP:38,DT:464},{AP:39,DT:466},{AP:41,DT:468},{AP:42,DT:470},{AP:44,DT:472},{AP:45,DT:473},{AP:47,DT:475},{AP:48,DT:476},{AP:51,DT:478},{AP:54,DT:480},{AP:57,DT:480}
  ];
  const StingRay = [
    {AP:0,DT:430},{AP:3,DT:438},{AP:6,DT:446},{AP:9,DT:453},{AP:10,DT:455},{AP:12,DT:459},{AP:13,DT:461},{AP:15,DT:465},{AP:16,DT:467},{AP:18,DT:471},{AP:19,DT:473},{AP:20,DT:475},{AP:21,DT:476},{AP:22,DT:478},{AP:23,DT:480},{AP:24,DT:481},{AP:25,DT:483},{AP:26,DT:485},{AP:27,DT:486},{AP:28,DT:487},{AP:29,DT:489},{AP:30,DT:490},{AP:31,DT:492},{AP:32,DT:493},{AP:33,DT:494},{AP:34,DT:495},{AP:35,DT:496},{AP:36,DT:498},{AP:37,DT:499},{AP:38,DT:500},{AP:39,DT:501},{AP:41,DT:502},{AP:42,DT:503},{AP:44,DT:505},{AP:45,DT:506},{AP:47,DT:507},{AP:48,DT:507},{AP:51,DT:509},{AP:54,DT:510},{AP:57,DT:510} 
  ];
  const InkStorm = [
    {AP:0,DT:480},{AP:3,DT:492},{AP:6,DT:503},{AP:9,DT:514},{AP:10,DT:517},{AP:12,DT:523},{AP:13,DT:527},{AP:15,DT:533},{AP:16,DT:536},{AP:18,DT:541},{AP:19,DT:544},{AP:20,DT:547},{AP:21,DT:549},{AP:22,DT:552},{AP:23,DT:554},{AP:24,DT:557},{AP:25,DT:559},{AP:26,DT:562},{AP:27,DT:564},{AP:28,DT:566},{AP:29,DT:568},{AP:30,DT:570},{AP:31,DT:572},{AP:32,DT:574},{AP:33,DT:576},{AP:34,DT:578},{AP:35,DT:579},{AP:36,DT:581},{AP:37,DT:583},{AP:38,DT:584},{AP:39,DT:586},{AP:41,DT:588},{AP:42,DT:590},{AP:44,DT:592},{AP:45,DT:593},{AP:47,DT:595},{AP:48,DT:596},{AP:51,DT:598},{AP:54,DT:600},{AP:57,DT:600} 
  ];
  const SuctionRush = [
    {AP:0,DT:360},{AP:3,DT:372},{AP:6,DT:383},{AP:9,DT:394},{AP:10,DT:397},{AP:12,DT:403},{AP:13,DT:407},{AP:15,DT:413},{AP:16,DT:416},{AP:18,DT:421},{AP:19,DT:424},{AP:20,DT:427},{AP:21,DT:429},{AP:22,DT:432},{AP:23,DT:434},{AP:24,DT:437},{AP:25,DT:439},{AP:26,DT:442},{AP:27,DT:444},{AP:28,DT:446},{AP:29,DT:448},{AP:30,DT:450},{AP:31,DT:452},{AP:32,DT:454},{AP:33,DT:456},{AP:34,DT:458},{AP:35,DT:459},{AP:36,DT:461},{AP:37,DT:463},{AP:38,DT:464},{AP:39,DT:466},{AP:41,DT:468},{AP:42,DT:470},{AP:44,DT:472},{AP:45,DT:473},{AP:47,DT:475},{AP:48,DT:476},{AP:51,DT:478},{AP:54,DT:480},{AP:57,DT:480}  
  ];
  const BooyahBomb = [
    {AP:0,CS:0.002},{AP:3,CS:0.00277},{AP:6,CS:0.00351},{AP:9,CS:0.0042},{AP:10,CS:0.00442},{AP:12,CS:0.00486},{AP:13,CS:0.00507},{AP:15,CS:0.00547},{AP:16,CS:0.00567},{AP:18,CS:0.00605},{AP:19,CS:0.00624},{AP:20,CS:0.00642},{AP:21,CS:0.00659},{AP:22,CS:0.00676},{AP:23,CS:0.00693},{AP:24,CS:0.00709},{AP:25,CS:0.00725},{AP:26,CS:0.0074},{AP:27,CS:0.00755},{AP:28,CS:0.0077},{AP:29,CS:0.00784},{AP:30,CS:0.00798},{AP:31,CS:0.00811},{AP:32,CS:0.00824},{AP:33,CS:0.00836},{AP:34,CS:0.00848},{AP:35,CS:0.00859},{AP:36,CS:0.0087},{AP:37,CS:0.00881},{AP:38,CS:0.00891},{AP:39,CS:0.00901},{AP:41,CS:0.00919},{AP:42,CS:0.00928},{AP:44,CS:0.00943},{AP:45,CS:0.00951},{AP:47,CS:0.00964},{AP:48,CS:0.0097},{AP:51,CS:0.00985},{AP:54,CS:0.00996},{AP:57,CS:0.01}
  ];
  const BurstRush = [
    {AP:0,DT:360},{AP:3,DT:372},{AP:6,DT:383},{AP:9,DT:394},{AP:10,DT:397},{AP:12,DT:403},{AP:13,DT:407},{AP:15,DT:413},{AP:16,DT:416},{AP:18,DT:421},{AP:19,DT:424},{AP:20,DT:427},{AP:21,DT:429},{AP:22,DT:432},{AP:23,DT:434},{AP:24,DT:437},{AP:25,DT:439},{AP:26,DT:442},{AP:27,DT:444},{AP:28,DT:446},{AP:29,DT:448},{AP:30,DT:450},{AP:31,DT:452},{AP:32,DT:454},{AP:33,DT:456},{AP:34,DT:458},{AP:35,DT:459},{AP:36,DT:461},{AP:37,DT:463},{AP:38,DT:464},{AP:39,DT:466},{AP:41,DT:468},{AP:42,DT:470},{AP:44,DT:472},{AP:45,DT:473},{AP:47,DT:475},{AP:48,DT:476},{AP:51,DT:478},{AP:54,DT:480},{AP:57,DT:480}
  ];
  const SplatRush = BurstRush;
  const Baller = [
    {AP:0,ER:120,HP:400},{AP:3,ER:121.9314,HP:419.3},{AP:6,ER:123.7656,HP:437.6},{AP:9,ER:125.5026,HP:455},{AP:10,ER:126.06,HP:460.6},{AP:12,ER:127.1424,HP:471.4},{AP:13,ER:127.6674,HP:476.6},{AP:15,ER:128.685,HP:486.8},{AP:16,ER:129.1776,HP:491.7},{AP:18,ER:130.1304,HP:501.3},{AP:19,ER:130.5906,HP:505.9},{AP:20,ER:131.04,HP:510.4},{AP:21,ER:131.4786,HP:514.7},{AP:22,ER:131.9064,HP:519},{AP:23,ER:132.3234,HP:523.2},{AP:24,ER:132.7296,HP:527.2},{AP:25,ER:133.125,HP:531.2},{AP:26,ER:133.5096,HP:535},{AP:27,ER:133.8834,HP:538.8},{AP:28,ER:134.2464,HP:542.4},{AP:29,ER:134.5986,HP:545.9},{AP:30,ER:134.94,HP:549.4},{AP:31,ER:135.2706,HP:552.7},{AP:32,ER:135.5904,HP:555.9},{AP:33,ER:135.8994,HP:558.9},{AP:34,ER:136.1976,HP:561.9},{AP:35,ER:136.485,HP:564.8},{AP:36,ER:136.7616,HP:567.6},{AP:37,ER:137.0274,HP:570.2},{AP:38,ER:137.2824,HP:572.8},{AP:39,ER:137.5266,HP:575.2},{AP:41,ER:137.9826,HP:579.8},{AP:42,ER:138.1944,HP:581.9},{AP:44,ER:138.5856,HP:585.8},{AP:45,ER:138.765,HP:587.6},{AP:47,ER:139.0914,HP:590.9},{AP:48,ER:139.2384,HP:592.3},{AP:51,ER:139.6146,HP:596.1},{AP:54,ER:139.8936,HP:598.9},{AP:57,ER:140,HP:600}
  ];
  const InkJet = [
    {AP:0,PR:32,DT:450,BR:100},{AP:3,PR:32.77256,DT:456,BR:102.897},{AP:6,PR:33.50624,DT:462,BR:105.648},{AP:9,PR:34.20104,DT:467,BR:108.254},{AP:10,PR:34.424,DT:469,BR:109.09},{AP:12,PR:34.85696,DT:472,BR:110.714},{AP:13,PR:35.06696,DT:474,BR:111.501},{AP:15,PR:35.474,DT:477,BR:113.027},{AP:16,PR:35.67104,DT:478,BR:113.766},{AP:18,PR:36.05216,DT:481,BR:115.196},{AP:19,PR:36.23624,DT:482,BR:115.886},{AP:20,PR:36.416,DT:484,BR:116.56},{AP:21,PR:36.59144,DT:485,BR:117.218},{AP:22,PR:36.76256,DT:486,BR:117.86},{AP:23,PR:36.92936,DT:487,BR:118.485},{AP:24,PR:37.09184,DT:489,BR:119.094},{AP:25,PR:37.25,DT:490,BR:119.687},{AP:26,PR:37.40384,DT:491,BR:120.264},{AP:27,PR:37.55336,DT:492,BR:120.825},{AP:28,PR:37.69856,DT:493,BR:121.37},{AP:29,PR:37.83944,DT:494,BR:121.898},{AP:30,PR:37.976,DT:495,BR:122.41},{AP:31,PR:38.10824,DT:496,BR:122.906},{AP:32,PR:38.23616,DT:497,BR:123.386},{AP:33,PR:38.35976,DT:498,BR:123.849},{AP:34,PR:38.47904,DT:499,BR:124.296},{AP:35,PR:38.594,DT:500,BR:124.727},{AP:36,PR:38.70464,DT:501,BR:125.142},{AP:37,PR:38.81096,DT:502,BR:125.541},{AP:38,PR:38.91296,DT:502,BR:125.924},{AP:39,PR:39.01064,DT:503,BR:126.29},{AP:41,PR:39.19304,DT:504,BR:126.974},{AP:42,PR:39.27776,DT:505,BR:127.22},{AP:44,PR:39.43424,DT:506,BR:127.878},{AP:45,PR:39.506,DT:507,BR:128.147},{AP:47,PR:39.63656,DT:508,BR:128.637},{AP:48,PR:39.69536,DT:508,BR:128.858},{AP:51,PR:39.84584,DT:509,BR:129.422},{AP:54,PR:39.95744,DT:510,BR:129.84},{AP:57,PR:40,DT:510,BR:130}
  ];
  
  const Bubbles = [
    {AP:0,PR:56,BS:100,EH:20},{AP:3,PR:58.31768,BS:105.358,EH:21.44855},{AP:6,PR:60.51872,BS:108.763,EH:22.8242},{AP:9,PR:62.60312,BS:111.59,EH:24.12695},{AP:10,PR:63.272,BS:112.444,EH:24.545},{AP:12,PR:64.57088,BS:114.046,EH:25.3568},{AP:13,PR:65.20088,BS:114.8,EH:25.75055},{AP:15,PR:66.422,BS:116.224,EH:26.51375},{AP:16,PR:67.01312,BS:116.897,EH:26.8832},{AP:18,PR:68.15648,BS:118.173,EH:27.5978},{AP:19,PR:68.70872,BS:118.778,EH:27.94295},{AP:20,PR:69.248,BS:119.362,EH:28.28},{AP:21,PR:69.77432,BS:119.925,EH:28.60895},{AP:22,PR:70.28768,BS:120.47,EH:28.9298},{AP:23,PR:70.78808,BS:120.996,EH:29.24255},{AP:24,PR:71.27552,BS:121.504,EH:29.5472},{AP:25,PR:71.75,BS:121.994,EH:29.84375},{AP:26,PR:72.21152,BS:122.467,EH:30.1322},{AP:27,PR:72.66008,BS:122.924,EH:30.41255},{AP:28,PR:73.09568,BS:123.364,EH:30.6848},{AP:29,PR:73.51832,BS:123.788,EH:30.94895},{AP:30,PR:73.928,BS:124.197,EH:31.205},{AP:31,PR:74.32472,BS:124.591,EH:31.45295},{AP:32,PR:74.70848,BS:124.969,EH:31.6928},{AP:33,PR:75.07928,BS:125.333,EH:31.92455},{AP:34,PR:75.43712,BS:125.682,EH:32.1482},{AP:35,PR:75.782,BS:126.017,EH:32.36375},{AP:36,PR:76.11392,BS:126.338,EH:32.5712},{AP:37,PR:76.43288,BS:126.645,EH:32.77055},{AP:38,PR:76.73888,BS:126.939,EH:32.9618},{AP:39,PR:77.03192,BS:127.219,EH:33.14495},{AP:41,PR:77.57912,BS:127.739,EH:33.48695},{AP:42,PR:77.83328,BS:127.979,EH:33.6458},{AP:44,PR:78.30272,BS:128.421,EH:33.9392},{AP:45,PR:78.518,BS:128.623,EH:34.07375},{AP:47,PR:78.90968,BS:128.989,EH:34.31855},{AP:48,PR:79.08608,BS:129.154,EH:34.4288},{AP:51,PR:79.53752,BS:129.573,EH:34.71095},{AP:54,PR:79.87232,BS:129.882,EH:34.9202},{AP:57,PR:80,BS:130,EH:35}
  ];
  const Hammer = [
    {AP:0,DT:540},{AP:3,DT:552},{AP:6,DT:563},{AP:9,DT:574},{AP:10,DT:577},{AP:12,DT:583},{AP:13,DT:587},{AP:15,DT:593},{AP:16,DT:596},{AP:18,DT:601},{AP:19,DT:604},{AP:20,DT:607},{AP:21,DT:609},{AP:22,DT:612},{AP:23,DT:614},{AP:24,DT:617},{AP:25,DT:619},{AP:26,DT:622},{AP:27,DT:624},{AP:28,DT:626},{AP:29,DT:628},{AP:30,DT:630},{AP:31,DT:632},{AP:32,DT:634},{AP:33,DT:636},{AP:34,DT:638},{AP:35,DT:639},{AP:36,DT:641},{AP:37,DT:643},{AP:38,DT:644},{AP:39,DT:646},{AP:41,DT:648},{AP:42,DT:650},{AP:44,DT:652},{AP:45,DT:653},{AP:47,DT:655},{AP:48,DT:656},{AP:51,DT:658},{AP:54,DT:660},{AP:57,DT:660} 
  ];
  
  if (name === "スーパーチャクチ") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === SplashDown[i].AP) {
        hitbox180 = Math.floor(SplashDown[i].HS180 * 100) / 100;
        hitbox70 = Math.floor(SplashDown[i].HS70 * 100) / 100;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">180ダメージの範囲</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{hitbox180} ％</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">70ダメージの範囲</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{hitbox70} ％</p>
          </div>
        </div>
      </div>
    );
  } else if (name === "マルチミサイル") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === Missiles[i].AP) {
        paintRadius = Missiles[i].PR;
        paintRadiusPercent = Math.floor(Missiles[i].PR / Missiles[0].PR * 10000) / 100;
        // circleRadius = Missiles[i].CR;
        circleRadiusPercent = Math.floor(Missiles[i].CR / Missiles[0].CR * 10000) / 100;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">ロックオンの範囲</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{circleRadiusPercent} ％</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">着弾点の塗り範囲</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{paintRadiusPercent} ％</p>
          </div>
        </div>
      </div>
    );
  } else if (name === "インクアーマー") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === InkArmor[i].AP) {
        armorActivationFrames = InkArmor[i].WT;
        armorActivationSeconds = Math.floor(InkArmor[i].WT / 60 * 100) / 100;
        durationFrames = InkArmor[i].DT;
        durationSeconds = Math.floor(durationFrames / 60 * 100) / 100;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">発動からアーマーが有効になるまでの時間</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{armorActivationFrames} F （{armorActivationSeconds} 秒）</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">持続時間</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{durationFrames} F （{durationSeconds} 秒）</p>
          </div>
        </div>
      </div>
    );
  } else if (name === "カーリングボムピッチャー") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === CurlingRush[i].AP) {
        durationFrames = CurlingRush[i].DT;
        durationSeconds = Math.floor(durationFrames / 60 * 100) / 100;
      }
    }
    element = (
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">  
          <p className="ae-text">ボムピッチャーの持続時間</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{durationFrames} F （{durationSeconds} 秒）</p>
        </div>
      </div>
    );
  } else if (name === "スプラッシュボムピッチャー") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === SplatRush[i].AP) {
        durationFrames = SplatRush[i].DT;
        durationSeconds = Math.floor(durationFrames / 60 * 100) / 100;
      }
    }
    element = (
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">  
          <p className="ae-text">ボムピッチャーの持続時間</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{durationFrames} F （{durationSeconds} 秒）</p>
        </div>
      </div>
    );
  } else if (name === "キューバンボムピッチャー") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === SuctionRush[i].AP) {
        durationFrames = SuctionRush[i].DT;
        durationSeconds = Math.floor(durationFrames / 60 * 100) / 100;
      }
    }
    element = (
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">  
          <p className="ae-text">ボムピッチャーの持続時間</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{durationFrames} F （{durationSeconds} 秒）</p>
        </div>
      </div>
    );
  } else if (name === "クイックボムピッチャー") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === BurstRush[i].AP) {
        durationFrames = BurstRush[i].DT;
        durationSeconds = Math.floor(durationFrames / 60 * 100) / 100;
      }
    }
    element = (
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">  
          <p className="ae-text">ボムピッチャーの持続時間</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{durationFrames} F （{durationSeconds} 秒）</p>
        </div>
      </div>
    );
  } else if (name === "ロボットボムピッチャー") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === AutoRush[i].AP) {
        durationFrames = AutoRush[i].DT;
        durationSeconds = Math.floor(durationFrames / 60 * 100) / 100;
      }
    }
    element = (
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">  
          <p className="ae-text">ボムピッチャーの持続時間</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{durationFrames} F （{durationSeconds} 秒）</p>
        </div>
      </div>
    );
  } else if (name === "ハイパープレッサー") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === StingRay[i].AP) {
        durationFrames = StingRay[i].DT;
        durationSeconds = Math.floor(durationFrames / 60 * 100) / 100;
      }
    }
    element = (
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">  
          <p className="ae-text">ハイパープレッサーの持続時間</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{durationFrames} F （{durationSeconds} 秒）</p>
        </div>
      </div>
    );
  } else if (name === "アメフラシ") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === InkStorm[i].AP) {
        durationFrames = InkStorm[i].DT;
        durationSeconds = Math.floor(durationFrames / 60 * 100) / 100;
      }
    }
    element = (
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">  
          <p className="ae-text">アメフラシの持続時間</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{durationFrames} F （{durationSeconds} 秒）</p>
        </div>
      </div>
    );
  } else if (name === "ナイスダマ") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === BooyahBomb[i].AP) {
        chargeSpeedFrames = Math.floor(1 / BooyahBomb[i].CS * 100) / 100;
        // chargeSpeedSeconds = Math.floor(chargeSpeedFrames / 60 * 100) / 100;
      }
    }
    element = (
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text-first">ナイスダマチャージ時間</p>
          <p className="ae-text-second">（味方と自分のナイスなし）</p>
        </div>
        <p className="col-1 px-0 ae-colon">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{chargeSpeedFrames} F</p>
        </div>
      </div>
    );
  } else if (name === "イカスフィア") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === Baller[i].AP) {
        explosionRadius = Math.floor(Baller[i].ER * 100) / 100;
        ballerHealth = Baller[i].HP;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">55ダメージ爆風の範囲</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{explosionRadius} DU</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">スフィアの耐久値</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{ballerHealth} ダメージ分</p>
          </div>
        </div>
      </div>
    );
  } else if (name === "ジェットパック") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === InkJet[i].AP) {
        durationFrames = InkJet[i].DT;
        durationSeconds = Math.floor(durationFrames / 60 * 100) / 100;
        paintRadius = Math.floor(InkJet[i].PR * 100)/ 100;
        blastRadius = Math.floor(InkJet[i].BR * 100) / 100;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">ジェットパックの持続時間</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{durationFrames} F （{durationSeconds} 秒）</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">着弾点の塗り半径</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{paintRadius} DU</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text-first">爆風によるダメージの範囲</p>
            <p className="ae-text-second">（50ダメージ{'&'}30ダメージ）</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{blastRadius} ％</p>
          </div>
        </div>
      </div>
    );
  } else if (name === "バブルランチャー") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === Bubbles[i].AP) {
        paintRadius = Math.floor(Bubbles[i].PR * 100) / 100;
        bubbleSize = Math.floor(Bubbles[i].BS * 100) / 100;
        blastRadius = Math.floor(Bubbles[i].EH / Bubbles[0].EH * 10000) / 100;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">爆発の塗り範囲</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{paintRadius} DU</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">バブルの大きさ</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{bubbleSize} ％</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">爆風によるダメージの範囲</p>
          </div>
          <p className="col-1 px-0 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{blastRadius} ％</p>
          </div>
        </div>
      </div>
    );
  } else if (name === "ウルトラハンコ") {
    for (let i=0; i<40; i++) {
      if (abilityPoint === Hammer[i].AP) {
        durationFrames = Hammer[i].DT;
        durationSeconds = Math.floor(durationFrames / 60 * 100) / 100;
      }
    }
    element = (
      <div className="ae-part col-11 row">
        <div className="col-7 px-0 m-auto">  
          <p className="ae-text">ウルトラハンコの持続時間</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{durationFrames} F （{durationSeconds} 秒） F</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="ae-card row">
      <div className="ap-icon-area col-1">
        <div className="ability-icon ap-ability-icon">
          <p className="ability-detail-tooltip" style={{width: "23rem" }}>スペシャル性能アップ :	スペシャルウェポンの性能がアップします。</p>
          <img className="ap-ability-img" src={specialPowerImg} alt=""/>
        </div>
      </div>
      {element}
    </div>
  );
});

export default SpecialPower;