const InkSaverSub = (props) => {
  let subWeaponName = props.weaponStatus.sub;
  let abilityPoint = props.abilityPoint;
  let inkConsumption
  let Beakon = [
    {AP:0,IC:0.75},{AP:3,IC:0.72103},{AP:6,IC:0.69352},{AP:9,IC:0.66746},{AP:10,IC:0.6591},{AP:12,IC:0.64286},{AP:13,IC:0.63499},{AP:15,IC:0.61973},{AP:16,IC:0.61234},{AP:18,IC:0.59804},{AP:19,IC:0.59114},{AP:20,IC:0.5844},{AP:21,IC:0.57782},{AP:22,IC:0.5714},{AP:23,IC:0.56515},{AP:24,IC:0.55906},{AP:25,IC:0.55313},{AP:26,IC:0.54736},{AP:27,IC:0.54175},{AP:28,IC:0.5363},{AP:29,IC:0.53102},{AP:30,IC:0.5259},{AP:31,IC:0.52094},{AP:32,IC:0.51614},{AP:33,IC:0.51151},{AP:34,IC:0.50704},{AP:35,IC:0.50272},{AP:36,IC:0.49858},{AP:37,IC:0.49459},{AP:38,IC:0.49076},{AP:39,IC:0.4871},{AP:41,IC:0.48026},{AP:42,IC:0.47708},{AP:44,IC:0.47122},{AP:45,IC:0.46853},{AP:47,IC:0.46363},{AP:48,IC:0.46142},{AP:51,IC:0.45578},{AP:54,IC:0.4516},{AP:57,IC:0.45}
  ];
  let InkMine = [
    {AP:0,IC:0.6},{AP:3,IC:0.57682},{AP:6,IC:0.55481},{AP:9,IC:0.53397},{AP:10,IC:0.52728},{AP:12,IC:0.51429},{AP:13,IC:0.50799},{AP:15,IC:0.49578},{AP:16,IC:0.48987},{AP:18,IC:0.47844},{AP:19,IC:0.47291},{AP:20,IC:0.46752},{AP:21,IC:0.46226},{AP:22,IC:0.45712},{AP:23,IC:0.45212},{AP:24,IC:0.44724},{AP:25,IC:0.4425},{AP:26,IC:0.43788},{AP:27,IC:0.4334},{AP:28,IC:0.42904},{AP:29,IC:0.42482},{AP:30,IC:0.42072},{AP:31,IC:0.41675},{AP:32,IC:0.41292},{AP:33,IC:0.40921},{AP:34,IC:0.40563},{AP:35,IC:0.40218},{AP:36,IC:0.39886},{AP:37,IC:0.39567},{AP:38,IC:0.39261},{AP:39,IC:0.38968},{AP:41,IC:0.38421},{AP:42,IC:0.38167},{AP:44,IC:0.37697},{AP:45,IC:0.37482},{AP:47,IC:0.3709},{AP:48,IC:0.36914},{AP:51,IC:0.36462},{AP:54,IC:0.36128},{AP:57,IC:0.36}
  ];
  let ToxicMist = [
    {AP:0,IC:0.6},{AP:3,IC:0.58262},{AP:6,IC:0.56611},{AP:9,IC:0.55048},{AP:10,IC:0.54546},{AP:12,IC:0.53572},{AP:13,IC:0.53099},{AP:15,IC:0.52183},{AP:16,IC:0.5174},{AP:18,IC:0.50883},{AP:19,IC:0.50468},{AP:20,IC:0.50064},{AP:21,IC:0.49669},{AP:22,IC:0.49284},{AP:23,IC:0.48909},{AP:24,IC:0.48543},{AP:25,IC:0.48187},{AP:26,IC:0.47841},{AP:27,IC:0.47505},{AP:28,IC:0.47178},{AP:29,IC:0.46861},{AP:30,IC:0.46554},{AP:31,IC:0.46256},{AP:32,IC:0.45969},{AP:33,IC:0.45691},{AP:34,IC:0.45422},{AP:35,IC:0.45163},{AP:36,IC:0.44915},{AP:37,IC:0.44675},{AP:38,IC:0.44446},{AP:39,IC:0.44226},{AP:41,IC:0.43816},{AP:42,IC:0.43625},{AP:44,IC:0.43273},{AP:45,IC:0.43111},{AP:47,IC:0.42818},{AP:48,IC:0.42685},{AP:51,IC:0.42347},{AP:54,IC:0.42096},{AP:57,IC:0.42}
  ];
  let Sencor = [
    {AP:0,IC:0.45},{AP:3,IC:0.43696},{AP:6,IC:0.42458},{AP:9,IC:0.41286},{AP:10,IC:0.4091},{AP:12,IC:0.40179},{AP:13,IC:0.39825},{AP:15,IC:0.39138},{AP:16,IC:0.38805},{AP:18,IC:0.38162},{AP:19,IC:0.37851},{AP:20,IC:0.37548},{AP:21,IC:0.37252},{AP:22,IC:0.36963},{AP:23,IC:0.36682},{AP:24,IC:0.36408},{AP:25,IC:0.36141},{AP:26,IC:0.35881},{AP:27,IC:0.35629},{AP:28,IC:0.35384},{AP:29,IC:0.35146},{AP:30,IC:0.34916},{AP:31,IC:0.34692},{AP:32,IC:0.34476},{AP:33,IC:0.34268},{AP:34,IC:0.34067},{AP:35,IC:0.33873},{AP:36,IC:0.33686},{AP:37,IC:0.33507},{AP:38,IC:0.33334},{AP:39,IC:0.3317},{AP:41,IC:0.32862},{AP:42,IC:0.32719},{AP:44,IC:0.32455},{AP:45,IC:0.32334},{AP:47,IC:0.32113},{AP:48,IC:0.32014},{AP:51,IC:0.3176},{AP:54,IC:0.31572},{AP:57,IC:0.315}
  ];
  let SuctionBomb = [
    {AP:0,IC:0.7},{AP:3,IC:0.67634},{AP:6,IC:0.65387},{AP:9,IC:0.63259},{AP:10,IC:0.62577},{AP:12,IC:0.61251},{AP:13,IC:0.60607},{AP:15,IC:0.59361},{AP:16,IC:0.58757},{AP:18,IC:0.5759},{AP:19,IC:0.57027},{AP:20,IC:0.56476},{AP:21,IC:0.55939},{AP:22,IC:0.55415},{AP:23,IC:0.54904},{AP:24,IC:0.54406},{AP:25,IC:0.53922},{AP:26,IC:0.53451},{AP:27,IC:0.52993},{AP:28,IC:0.52548},{AP:29,IC:0.52117},{AP:30,IC:0.51699},{AP:31,IC:0.51294},{AP:32,IC:0.50902},{AP:33,IC:0.50523},{AP:34,IC:0.50158},{AP:35,IC:0.49806},{AP:36,IC:0.49467},{AP:37,IC:0.49141},{AP:38,IC:0.48829},{AP:39,IC:0.4853},{AP:41,IC:0.47971},{AP:42,IC:0.47712},{AP:44,IC:0.47233},{AP:45,IC:0.47013},{AP:47,IC:0.46613},{AP:48,IC:0.46433},{AP:51,IC:0.45972},{AP:54,IC:0.4563},{AP:57,IC:0.455}
  ];
  let BurstBomb = [
    {AP:0,IC:0.4},{AP:3,IC:0.39227},{AP:6,IC:0.38494},{AP:9,IC:0.37799},{AP:10,IC:0.37576},{AP:12,IC:0.37143},{AP:13,IC:0.36933},{AP:15,IC:0.36526},{AP:16,IC:0.36329},{AP:18,IC:0.35948},{AP:19,IC:0.35764},{AP:20,IC:0.35584},{AP:21,IC:0.35409},{AP:22,IC:0.35237},{AP:23,IC:0.35071},{AP:24,IC:0.34908},{AP:25,IC:0.3475},{AP:26,IC:0.34596},{AP:27,IC:0.34447},{AP:28,IC:0.34301},{AP:29,IC:0.34161},{AP:30,IC:0.34024},{AP:31,IC:0.33892},{AP:32,IC:0.33764},{AP:33,IC:0.3364},{AP:34,IC:0.33521},{AP:35,IC:0.33406},{AP:36,IC:0.33295},{AP:37,IC:0.33189},{AP:38,IC:0.33087},{AP:39,IC:0.32989},{AP:41,IC:0.32807},{AP:42,IC:0.32722},{AP:44,IC:0.32566},{AP:45,IC:0.32494},{AP:47,IC:0.32363},{AP:48,IC:0.32305},{AP:51,IC:0.32154},{AP:54,IC:0.32043},{AP:57,IC:0.32}
  ];
  let SplatBomb = [
    {AP:0,IC:0.7},{AP:3,IC:0.67634},{AP:6,IC:0.65387},{AP:9,IC:0.63259},{AP:10,IC:0.62577},{AP:12,IC:0.61251},{AP:13,IC:0.60607},{AP:15,IC:0.59361},{AP:16,IC:0.58757},{AP:18,IC:0.5759},{AP:19,IC:0.57027},{AP:20,IC:0.56476},{AP:21,IC:0.55939},{AP:22,IC:0.55415},{AP:23,IC:0.54904},{AP:24,IC:0.54406},{AP:25,IC:0.53922},{AP:26,IC:0.53451},{AP:27,IC:0.52993},{AP:28,IC:0.52548},{AP:29,IC:0.52117},{AP:30,IC:0.51699},{AP:31,IC:0.51294},{AP:32,IC:0.50902},{AP:33,IC:0.50523},{AP:34,IC:0.50158},{AP:35,IC:0.49806},{AP:36,IC:0.49467},{AP:37,IC:0.49141},{AP:38,IC:0.48829},{AP:39,IC:0.4853},{AP:41,IC:0.47971},{AP:42,IC:0.47712},{AP:44,IC:0.47233},{AP:45,IC:0.47013},{AP:47,IC:0.46613},{AP:48,IC:0.46433},{AP:51,IC:0.45972},{AP:54,IC:0.4563},{AP:57,IC:0.455}
  ];
  let AutoBomb = [
    {AP:0,IC:0.55},{AP:3,IC:0.53407},{AP:6,IC:0.51893},{AP:9,IC:0.5046},{AP:10,IC:0.50001},{AP:12,IC:0.49108},{AP:13,IC:0.48674},{AP:15,IC:0.47835},{AP:16,IC:0.47428},{AP:18,IC:0.46642},{AP:19,IC:0.46263},{AP:20,IC:0.45892},{AP:21,IC:0.4553},{AP:22,IC:0.45177},{AP:23,IC:0.44833},{AP:24,IC:0.44498},{AP:25,IC:0.44172},{AP:26,IC:0.43855},{AP:27,IC:0.43546},{AP:28,IC:0.43247},{AP:29,IC:0.42956},{AP:30,IC:0.42675},{AP:31,IC:0.42402},{AP:32,IC:0.42138},{AP:33,IC:0.41883},{AP:34,IC:0.41637},{AP:35,IC:0.414},{AP:36,IC:0.41172},{AP:37,IC:0.40952},{AP:38,IC:0.40742},{AP:39,IC:0.40541},{AP:41,IC:0.40164},{AP:42,IC:0.3999},{AP:44,IC:0.39667},{AP:45,IC:0.39519},{AP:47,IC:0.3925},{AP:48,IC:0.39128},{AP:51,IC:0.38818},{AP:54,IC:0.38588},{AP:57,IC:0.385}
  ];
  let FizzyBomb = [
    {AP:0,IC:0.6},{AP:3,IC:0.58262},{AP:6,IC:0.56611},{AP:9,IC:0.55048},{AP:10,IC:0.54546},{AP:12,IC:0.53572},{AP:13,IC:0.53099},{AP:15,IC:0.52183},{AP:16,IC:0.5174},{AP:18,IC:0.50883},{AP:19,IC:0.50468},{AP:20,IC:0.50064},{AP:21,IC:0.49669},{AP:22,IC:0.49284},{AP:23,IC:0.48909},{AP:24,IC:0.48543},{AP:25,IC:0.48187},{AP:26,IC:0.47841},{AP:27,IC:0.47505},{AP:28,IC:0.47178},{AP:29,IC:0.46861},{AP:30,IC:0.46554},{AP:31,IC:0.46256},{AP:32,IC:0.45969},{AP:33,IC:0.45691},{AP:34,IC:0.45422},{AP:35,IC:0.45163},{AP:36,IC:0.44915},{AP:37,IC:0.44675},{AP:38,IC:0.44446},{AP:39,IC:0.44226},{AP:41,IC:0.43816},{AP:42,IC:0.43625},{AP:44,IC:0.43273},{AP:45,IC:0.43111},{AP:47,IC:0.42818},{AP:48,IC:0.42685},{AP:51,IC:0.42347},{AP:54,IC:0.42096},{AP:57,IC:0.42}
  ];
  let Sprinkler = [
    {AP:0,IC:0.6},{AP:3,IC:0.57682},{AP:6,IC:0.55481},{AP:9,IC:0.53397},{AP:10,IC:0.52728},{AP:12,IC:0.51429},{AP:13,IC:0.50799},{AP:15,IC:0.49578},{AP:16,IC:0.48987},{AP:18,IC:0.47844},{AP:19,IC:0.47291},{AP:20,IC:0.46752},{AP:21,IC:0.46226},{AP:22,IC:0.45712},{AP:23,IC:0.45212},{AP:24,IC:0.44724},{AP:25,IC:0.4425},{AP:26,IC:0.43788},{AP:27,IC:0.4334},{AP:28,IC:0.42904},{AP:29,IC:0.42482},{AP:30,IC:0.42072},{AP:31,IC:0.41675},{AP:32,IC:0.41292},{AP:33,IC:0.40921},{AP:34,IC:0.40563},{AP:35,IC:0.40218},{AP:36,IC:0.39886},{AP:37,IC:0.39567},{AP:38,IC:0.39261},{AP:39,IC:0.38968},{AP:41,IC:0.38421},{AP:42,IC:0.38167},{AP:44,IC:0.37697},{AP:45,IC:0.37482},{AP:47,IC:0.3709},{AP:48,IC:0.36914},{AP:51,IC:0.36462},{AP:54,IC:0.36128},{AP:57,IC:0.36}
  ];
  let CurlingBomb = [
    {AP:0,IC:0.7},{AP:3,IC:0.67634},{AP:6,IC:0.65387},{AP:9,IC:0.63259},{AP:10,IC:0.62577},{AP:12,IC:0.61251},{AP:13,IC:0.60607},{AP:15,IC:0.59361},{AP:16,IC:0.58757},{AP:18,IC:0.5759},{AP:19,IC:0.57027},{AP:20,IC:0.56476},{AP:21,IC:0.55939},{AP:22,IC:0.55415},{AP:23,IC:0.54904},{AP:24,IC:0.54406},{AP:25,IC:0.53922},{AP:26,IC:0.53451},{AP:27,IC:0.52993},{AP:28,IC:0.52548},{AP:29,IC:0.52117},{AP:30,IC:0.51699},{AP:31,IC:0.51294},{AP:32,IC:0.50902},{AP:33,IC:0.50523},{AP:34,IC:0.50158},{AP:35,IC:0.49806},{AP:36,IC:0.49467},{AP:37,IC:0.49141},{AP:38,IC:0.48829},{AP:39,IC:0.4853},{AP:41,IC:0.47971},{AP:42,IC:0.47712},{AP:44,IC:0.47233},{AP:45,IC:0.47013},{AP:47,IC:0.46613},{AP:48,IC:0.46433},{AP:51,IC:0.45972},{AP:54,IC:0.4563},{AP:57,IC:0.455}
  ];
  let Torpedo = [
    {AP:0,IC:0.65},{AP:3,IC:0.62803},{AP:6,IC:0.60717},{AP:9,IC:0.58741},{AP:10,IC:0.58107},{AP:12,IC:0.56876},{AP:13,IC:0.56278},{AP:15,IC:0.55121},{AP:16,IC:0.5456},{AP:18,IC:0.53477},{AP:19,IC:0.52953},{AP:20,IC:0.52442},{AP:21,IC:0.51943},{AP:22,IC:0.51456},{AP:23,IC:0.50982},{AP:24,IC:0.5052},{AP:25,IC:0.5007},{AP:26,IC:0.49633},{AP:27,IC:0.49208},{AP:28,IC:0.48795},{AP:29,IC:0.48394},{AP:30,IC:0.48006},{AP:31,IC:0.4763},{AP:32,IC:0.47266},{AP:33,IC:0.46914},{AP:34,IC:0.46575},{AP:35,IC:0.46248},{AP:36,IC:0.45934},{AP:37,IC:0.45631},{AP:38,IC:0.45341},{AP:39,IC:0.45063},{AP:41,IC:0.44545},{AP:42,IC:0.44304},{AP:44,IC:0.43859},{AP:45,IC:0.43655},{AP:47,IC:0.43284},{AP:48,IC:0.43116},{AP:51,IC:0.42688},{AP:54,IC:0.42371},{AP:57,IC:0.4225}
  ];
  let SplashWall = [
    {AP:0,IC:0.6},{AP:3,IC:0.57972},{AP:6,IC:0.56046},{AP:9,IC:0.54222},{AP:10,IC:0.53637},{AP:12,IC:0.525},{AP:13,IC:0.51949},{AP:15,IC:0.50881},{AP:16,IC:0.50364},{AP:18,IC:0.49363},{AP:19,IC:0.4888},{AP:20,IC:0.48408},{AP:21,IC:0.47947},{AP:22,IC:0.47498},{AP:23,IC:0.4706},{AP:24,IC:0.46634},{AP:25,IC:0.46219},{AP:26,IC:0.45815},{AP:27,IC:0.45422},{AP:28,IC:0.45041},{AP:29,IC:0.44671},{AP:30,IC:0.44313},{AP:31,IC:0.43966},{AP:32,IC:0.4363},{AP:33,IC:0.43306},{AP:34,IC:0.42993},{AP:35,IC:0.42691},{AP:36,IC:0.424},{AP:37,IC:0.42121},{AP:38,IC:0.41853},{AP:39,IC:0.41597},{AP:41,IC:0.41118},{AP:42,IC:0.40896},{AP:44,IC:0.40485},{AP:45,IC:0.40297},{AP:47,IC:0.39954},{AP:48,IC:0.398},{AP:51,IC:0.39405},{AP:54,IC:0.39112},{AP:57,IC:0.39}
  ];
  if (subWeaponName.indexOf("Beakon") > -1) {
    for (let i=0; i < 40; i++) {
      if (Beakon[i].AP === abilityPoint) {
        inkConsumption = Beakon[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("InkMine") > -1) {
    for (let i=0; i < 40; i++) {
      if (InkMine[i].AP === abilityPoint) {
        inkConsumption = InkMine[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("ToxicMist") > -1) {
    for (let i=0; i < 40; i++) {
      if (ToxicMist[i].AP === abilityPoint) {
        inkConsumption = ToxicMist[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("Sencor") > -1) {
    for (let i=0; i < 40; i++) {
      if (Sencor[i].AP === abilityPoint) {
        inkConsumption = Sencor[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("SuctionBomb") > -1) {
    for (let i=0; i < 40; i++) {
      if (SuctionBomb[i].AP === abilityPoint) {
        inkConsumption = SuctionBomb[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("BurstBomb") > -1) {
    for (let i=0; i < 40; i++) {
      if (BurstBomb[i].AP === abilityPoint) {
        inkConsumption = BurstBomb[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("SplatBomb") > -1) {
    for (let i=0; i < 40; i++) {
      if (SplatBomb[i].AP === abilityPoint) {
        inkConsumption = SplatBomb[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("AutoBomb") > -1) {
    for (let i=0; i < 40; i++) {
      if (AutoBomb[i].AP === abilityPoint) {
        inkConsumption = AutoBomb[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("Sprinkler") > -1) {
    for (let i=0; i < 40; i++) {
      if (Sprinkler[i].AP === abilityPoint) {
        inkConsumption = Sprinkler[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("FizzyBomb") > -1) {
    for (let i=0; i < 40; i++) {
      if (FizzyBomb[i].AP === abilityPoint) {
        inkConsumption = FizzyBomb[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("CurlingBomb") > -1) {
    for (let i=0; i < 40; i++) {
      if (CurlingBomb[i].AP === abilityPoint) {
        inkConsumption = CurlingBomb[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("Torpedo") > -1) {
    for (let i=0; i < 40; i++) {
      if (Torpedo[i].AP === abilityPoint) {
        inkConsumption = Torpedo[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  } else if (subWeaponName.indexOf("SplashWall") > -1) {
    for (let i=0; i < 40; i++) {
      if (SplashWall[i].AP === abilityPoint) {
        inkConsumption = SplashWall[i].IC;
      }
    }
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption*100000) / 1000;
  }
  return (
    <div className="ability-effect">
      <p>インク消費量 : {inkConsumption}％</p>
    </div>
  );
};

export default InkSaverSub;