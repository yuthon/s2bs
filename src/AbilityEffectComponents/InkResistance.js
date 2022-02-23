const InkResistance = (props) => {
  const InkRes = [
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
  
  let abilityPoint = props.abilityPoint;
  let framesBeforeTakingDamage;
  let secondsBeforeTakingDamage;
  let damagePerFrame;
  let damagePerSecond;
  let damageLimit;
  let runSpeed;
  
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
  
  return (
    <div className="ability-effect">
      <p>相手インクを踏んでからダメージを受けるまでの時間 : {framesBeforeTakingDamage}F（{secondsBeforeTakingDamage}秒）</p>
      <p>相手インクを踏むことで受けるダメージ : {damagePerFrame}ダメージ/F（{damagePerSecond}ダメージ/秒）</p>
      <p>相手インクから受けるダメージの上限 : {damageLimit}ダメージ</p>
      <p>相手インク上でのヒト移動速度の低減率 : {runSpeed}％減</p>
    </div>
  );
};

export default InkResistance;