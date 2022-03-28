import runSpeedImg from '../images/ability/RSU.png';

const RunSpeed = (props) => {
  let weaponStatus = props.weaponStatus;
  let abilityPoint = props.abilityPoint;
  let runSpeed;
  let runSpeedShooting;
  let lightClass = [
    {AP:0,RS:1.04},{AP:3,RS:1.07863},{AP:6,RS:1.11531},{AP:9,RS:1.15005},{AP:10,RS:1.1612},{AP:12,RS:1.18285},{AP:13,RS:1.19335},{AP:15,RS:1.2137},{AP:16,RS:1.22355},{AP:18,RS:1.24261},{AP:19,RS:1.25181},{AP:20,RS:1.2608},{AP:21,RS:1.26957},{AP:22,RS:1.27813},{AP:23,RS:1.28647},{AP:24,RS:1.29459},{AP:25,RS:1.3025},{AP:26,RS:1.31019},{AP:27,RS:1.31767},{AP:28,RS:1.32493},{AP:29,RS:1.33197},{AP:30,RS:1.3388},{AP:31,RS:1.34541},{AP:32,RS:1.35181},{AP:33,RS:1.35799},{AP:34,RS:1.36395},{AP:35,RS:1.3697},{AP:36,RS:1.37523},{AP:37,RS:1.38055},{AP:38,RS:1.38565},{AP:39,RS:1.39053},{AP:41,RS:1.39965},{AP:42,RS:1.40389},{AP:44,RS:1.41171},{AP:45,RS:1.4153},{AP:47,RS:1.42183},{AP:48,RS:1.42477},{AP:51,RS:1.43229},{AP:54,RS:1.43787},{AP:57,RS:1.44}
  ];
  let middleClass = [
    {AP:0,RS:0.96},{AP:3,RS:1.00635},{AP:6,RS:1.05037},{AP:9,RS:1.09206},{AP:10,RS:1.10544},{AP:12,RS:1.13142},{AP:13,RS:1.14402},{AP:15,RS:1.16844},{AP:16,RS:1.18026},{AP:18,RS:1.20313},{AP:19,RS:1.21417},{AP:20,RS:1.22496},{AP:21,RS:1.23549},{AP:22,RS:1.24575},{AP:23,RS:1.25576},{AP:24,RS:1.26551},{AP:25,RS:1.275},{AP:26,RS:1.28423},{AP:27,RS:1.2932},{AP:28,RS:1.30191},{AP:29,RS:1.31037},{AP:30,RS:1.31856},{AP:31,RS:1.32649},{AP:32,RS:1.33417},{AP:33,RS:1.34159},{AP:34,RS:1.34874},{AP:35,RS:1.35564},{AP:36,RS:1.36228},{AP:37,RS:1.36866},{AP:38,RS:1.37478},{AP:39,RS:1.38064},{AP:41,RS:1.39158},{AP:42,RS:1.39667},{AP:44,RS:1.40605},{AP:45,RS:1.41036},{AP:47,RS:1.41819},{AP:48,RS:1.42172},{AP:51,RS:1.43075},{AP:54,RS:1.43745},{AP:57,RS:1.44}
  ];
  let heavyClass = [
    {AP:0,RS:0.88},{AP:3,RS:0.93408},{AP:6,RS:0.98544},{AP:9,RS:1.03407},{AP:10,RS:1.04968},{AP:12,RS:1.07999},{AP:13,RS:1.09469},{AP:15,RS:1.12318},{AP:16,RS:1.13697},{AP:18,RS:1.16365},{AP:19,RS:1.17654},{AP:20,RS:1.18912},{AP:21,RS:1.2014},{AP:22,RS:1.21338},{AP:23,RS:1.22506},{AP:24,RS:1.23643},{AP:25,RS:1.2475},{AP:26,RS:1.25827},{AP:27,RS:1.26874},{AP:28,RS:1.2789},{AP:29,RS:1.28876},{AP:30,RS:1.29832},{AP:31,RS:1.30758},{AP:32,RS:1.31653},{AP:33,RS:1.32518},{AP:34,RS:1.33353},{AP:35,RS:1.34158},{AP:36,RS:1.34932},{AP:37,RS:1.35677},{AP:38,RS:1.36391},{AP:39,RS:1.37074},{AP:41,RS:1.38351},{AP:42,RS:1.38944},{AP:44,RS:1.4004},{AP:45,RS:1.40542},{AP:47,RS:1.41456},{AP:48,RS:1.41868},{AP:51,RS:1.42921},{AP:54,RS:1.43702},{AP:57,RS:1.44},
  ];
  let Sploosh = [
    {AP:0,RS:0.8},{AP:3,RS:0.81931},{AP:6,RS:0.83766},{AP:9,RS:0.85503},{AP:10,RS:0.8606},{AP:12,RS:0.87142},{AP:13,RS:0.87667},{AP:15,RS:0.88685},{AP:16,RS:0.89178},{AP:18,RS:0.9013},{AP:19,RS:0.90591},{AP:20,RS:0.9104},{AP:21,RS:0.91479},{AP:22,RS:0.91906},{AP:23,RS:0.92323},{AP:24,RS:0.9273},{AP:25,RS:0.93125},{AP:26,RS:0.9351},{AP:27,RS:0.93883},{AP:28,RS:0.94246},{AP:29,RS:0.94599},{AP:30,RS:0.9494},{AP:31,RS:0.95271},{AP:32,RS:0.9559},{AP:33,RS:0.95899},{AP:34,RS:0.96198},{AP:35,RS:0.96485},{AP:36,RS:0.96762},{AP:37,RS:0.97027},{AP:38,RS:0.97282},{AP:39,RS:0.97527},{AP:41,RS:0.97983},{AP:42,RS:0.98194},{AP:44,RS:0.98586},{AP:45,RS:0.98765},{AP:47,RS:0.99091},{AP:48,RS:0.99238},{AP:51,RS:0.99615},{AP:54,RS:0.99894},{AP:57,RS:1}
  ];
  let Splash = [
    {AP:0,RS:0.72},{AP:3,RS:0.73738},{AP:6,RS:0.75389},{AP:9,RS:0.76952},{AP:10,RS:0.77454},{AP:12,RS:0.78428},{AP:13,RS:0.78901},{AP:15,RS:0.79817},{AP:16,RS:0.8026},{AP:18,RS:0.81117},{AP:19,RS:0.81532},{AP:20,RS:0.81936},{AP:21,RS:0.82331},{AP:22,RS:0.82716},{AP:23,RS:0.83091},{AP:24,RS:0.83457},{AP:25,RS:0.83813},{AP:26,RS:0.84159},{AP:27,RS:0.84495},{AP:28,RS:0.84822},{AP:29,RS:0.85139},{AP:30,RS:0.85446},{AP:31,RS:0.85744},{AP:32,RS:0.86031},{AP:33,RS:0.86309},{AP:34,RS:0.86578},{AP:35,RS:0.86836},{AP:36,RS:0.87085},{AP:37,RS:0.87325},{AP:38,RS:0.87554},{AP:39,RS:0.87774},{AP:41,RS:0.88184},{AP:42,RS:0.88375},{AP:44,RS:0.88727},{AP:45,RS:0.88888},{AP:47,RS:0.89182},{AP:48,RS:0.89315},{AP:51,RS:0.89653},{AP:54,RS:0.89904},{AP:57,RS:0.9}
  ];
  let Aerospray = Splash;
  let SplatterShot = Splash;
  let Jr = Splash;
  let Gal96 = [
    {AP:0,RS:0.4},{AP:3,RS:0.40966},{AP:6,RS:0.41883},{AP:9,RS:0.42751},{AP:10,RS:0.4303},{AP:12,RS:0.43571},{AP:13,RS:0.43834},{AP:15,RS:0.44343},{AP:16,RS:0.44589},{AP:18,RS:0.45065},{AP:19,RS:0.45295},{AP:20,RS:0.4552},{AP:21,RS:0.45739},{AP:22,RS:0.45953},{AP:23,RS:0.46162},{AP:24,RS:0.46365},{AP:25,RS:0.46563},{AP:26,RS:0.46755},{AP:27,RS:0.46942},{AP:28,RS:0.47123},{AP:29,RS:0.47299},{AP:30,RS:0.4747},{AP:31,RS:0.47635},{AP:32,RS:0.47795},{AP:33,RS:0.4795},{AP:34,RS:0.48099},{AP:35,RS:0.48243},{AP:36,RS:0.48381},{AP:37,RS:0.48514},{AP:38,RS:0.48641},{AP:39,RS:0.48763},{AP:41,RS:0.48991},{AP:42,RS:0.49097},{AP:44,RS:0.49293},{AP:45,RS:0.49383},{AP:47,RS:0.49546},{AP:48,RS:0.49619},{AP:51,RS:0.49807},{AP:54,RS:0.49947},{AP:57,RS:0.5}
  ];
  let Blaster = [
    {AP:0,RS:0.45},{AP:3,RS:0.46086},{AP:6,RS:0.47118},{AP:9,RS:0.48095},{AP:10,RS:0.48409},{AP:12,RS:0.49018},{AP:13,RS:0.49313},{AP:15,RS:0.49885},{AP:16,RS:0.50162},{AP:18,RS:0.50698},{AP:19,RS:0.50957},{AP:20,RS:0.5121},{AP:21,RS:0.51457},{AP:22,RS:0.51697},{AP:23,RS:0.51932},{AP:24,RS:0.5216},{AP:25,RS:0.52383},{AP:26,RS:0.52599},{AP:27,RS:0.52809},{AP:28,RS:0.53014},{AP:29,RS:0.53212},{AP:30,RS:0.53404},{AP:31,RS:0.5359},{AP:32,RS:0.5377},{AP:33,RS:0.53943},{AP:34,RS:0.54111},{AP:35,RS:0.54273},{AP:36,RS:0.54428},{AP:37,RS:0.54578},{AP:38,RS:0.54721},{AP:39,RS:0.54859},{AP:41,RS:0.55115},{AP:42,RS:0.55234},{AP:44,RS:0.55454},{AP:45,RS:0.55555},{AP:47,RS:0.55739},{AP:48,RS:0.55822},{AP:51,RS:0.56033},{AP:54,RS:0.5619},{AP:57,RS:0.5625}
  ];
  let Clash = [
    {AP:0,RS:0.65},{AP:3,RS:0.66569},{AP:6,RS:0.6806},{AP:9,RS:0.69471},{AP:10,RS:0.69924},{AP:12,RS:0.70803},{AP:13,RS:0.7123},{AP:15,RS:0.72057},{AP:16,RS:0.72457},{AP:18,RS:0.73231},{AP:19,RS:0.73605},{AP:20,RS:0.7397},{AP:21,RS:0.74326},{AP:22,RS:0.74674},{AP:23,RS:0.75013},{AP:24,RS:0.75343},{AP:25,RS:0.75664},{AP:26,RS:0.75977},{AP:27,RS:0.7628},{AP:28,RS:0.76575},{AP:29,RS:0.76861},{AP:30,RS:0.77139},{AP:31,RS:0.77407},{AP:32,RS:0.77667},{AP:33,RS:0.77918},{AP:34,RS:0.78161},{AP:35,RS:0.78394},{AP:36,RS:0.78619},{AP:37,RS:0.78835},{AP:38,RS:0.79042},{AP:39,RS:0.7924},{AP:41,RS:0.79611},{AP:42,RS:0.79783},{AP:44,RS:0.80101},{AP:45,RS:0.80247},{AP:47,RS:0.80512},{AP:48,RS:0.80631},{AP:51,RS:0.80937},{AP:54,RS:0.81164},{AP:57,RS:0.8125}
  ];
  let Gal52 = [
    {AP:0,RS:0.6},{AP:3,RS:0.61449},{AP:6,RS:0.62824},{AP:9,RS:0.64127},{AP:10,RS:0.64545},{AP:12,RS:0.65357},{AP:13,RS:0.65751},{AP:15,RS:0.66514},{AP:16,RS:0.66883},{AP:18,RS:0.67598},{AP:19,RS:0.67943},{AP:20,RS:0.6828},{AP:21,RS:0.68609},{AP:22,RS:0.6893},{AP:23,RS:0.69243},{AP:24,RS:0.69547},{AP:25,RS:0.69844},{AP:26,RS:0.70132},{AP:27,RS:0.70413},{AP:28,RS:0.70685},{AP:29,RS:0.70949},{AP:30,RS:0.71205},{AP:31,RS:0.71453},{AP:32,RS:0.71693},{AP:33,RS:0.71925},{AP:34,RS:0.72148},{AP:35,RS:0.72364},{AP:36,RS:0.72571},{AP:37,RS:0.72771},{AP:38,RS:0.72962},{AP:39,RS:0.73145},{AP:41,RS:0.73487},{AP:42,RS:0.73646},{AP:44,RS:0.73939},{AP:45,RS:0.74074},{AP:47,RS:0.74319},{AP:48,RS:0.74429},{AP:51,RS:0.74711},{AP:54,RS:0.7492},{AP:57,RS:0.75}
  ];
  let Luna = [
    {AP:0,RS:0.5},{AP:3,RS:0.51207},{AP:6,RS:0.52353},{AP:9,RS:0.53439},{AP:10,RS:0.53787},{AP:12,RS:0.54464},{AP:13,RS:0.54792},{AP:15,RS:0.55428},{AP:16,RS:0.55736},{AP:18,RS:0.56332},{AP:19,RS:0.56619},{AP:20,RS:0.569},{AP:21,RS:0.57174},{AP:22,RS:0.57442},{AP:23,RS:0.57702},{AP:24,RS:0.57956},{AP:25,RS:0.58203},{AP:26,RS:0.58444},{AP:27,RS:0.58677},{AP:28,RS:0.58904},{AP:29,RS:0.59124},{AP:30,RS:0.59337},{AP:31,RS:0.59544},{AP:32,RS:0.59744},{AP:33,RS:0.59937},{AP:34,RS:0.60123},{AP:35,RS:0.60303},{AP:36,RS:0.60476},{AP:37,RS:0.60642},{AP:38,RS:0.60801},{AP:39,RS:0.60954},{AP:41,RS:0.61239},{AP:42,RS:0.61372},{AP:44,RS:0.61616},{AP:45,RS:0.61728},{AP:47,RS:0.61932},{AP:48,RS:0.62024},{AP:51,RS:0.62259},{AP:54,RS:0.62433},{AP:57,RS:0.625}
  ];
  let Range = [
    {AP:0,RS:0.4},{AP:3,RS:0.40966},{AP:6,RS:0.41883},{AP:9,RS:0.42751},{AP:10,RS:0.4303},{AP:12,RS:0.43571},{AP:13,RS:0.43834},{AP:15,RS:0.44343},{AP:16,RS:0.44589},{AP:18,RS:0.45065},{AP:19,RS:0.45295},{AP:20,RS:0.4552},{AP:21,RS:0.45739},{AP:22,RS:0.45953},{AP:23,RS:0.46162},{AP:24,RS:0.46365},{AP:25,RS:0.46563},{AP:26,RS:0.46755},{AP:27,RS:0.46942},{AP:28,RS:0.47123},{AP:29,RS:0.47299},{AP:30,RS:0.4747},{AP:31,RS:0.47635},{AP:32,RS:0.47795},{AP:33,RS:0.4795},{AP:34,RS:0.48099},{AP:35,RS:0.48243},{AP:36,RS:0.48381},{AP:37,RS:0.48514},{AP:38,RS:0.48641},{AP:39,RS:0.48763},{AP:41,RS:0.48991},{AP:42,RS:0.49097},{AP:44,RS:0.49293},{AP:45,RS:0.49383},{AP:47,RS:0.49546},{AP:48,RS:0.49619},{AP:51,RS:0.49807},{AP:54,RS:0.49947},{AP:57,RS:0.5}
  ];
  let Pro = [
    {AP:0,RS:0.55},{AP:3,RS:0.56328},{AP:6,RS:0.57589},{AP:9,RS:0.58783},{AP:10,RS:0.59166},{AP:12,RS:0.5991},{AP:13,RS:0.60271},{AP:15,RS:0.60971},{AP:16,RS:0.6131},{AP:18,RS:0.61965},{AP:19,RS:0.62281},{AP:20,RS:0.6259},{AP:21,RS:0.62892},{AP:22,RS:0.63186},{AP:23,RS:0.63472},{AP:24,RS:0.63752},{AP:25,RS:0.64023},{AP:26,RS:0.64288},{AP:27,RS:0.64545},{AP:28,RS:0.64794},{AP:29,RS:0.65037},{AP:30,RS:0.65271},{AP:31,RS:0.65499},{AP:32,RS:0.65718},{AP:33,RS:0.65931},{AP:34,RS:0.66136},{AP:35,RS:0.66333},{AP:36,RS:0.66524},{AP:37,RS:0.66706},{AP:38,RS:0.66882},{AP:39,RS:0.6705},{AP:41,RS:0.67363},{AP:42,RS:0.67509},{AP:44,RS:0.67778},{AP:45,RS:0.67901},{AP:47,RS:0.68125},{AP:48,RS:0.68226},{AP:51,RS:0.68485},{AP:54,RS:0.68677},{AP:57,RS:0.6875}
  ];
  let JetSquelcher = Gal52;
  let Rapid = [
    {AP:0,RS:0.55},{AP:3,RS:0.56328},{AP:6,RS:0.57589},{AP:9,RS:0.58783},{AP:10,RS:0.59166},{AP:12,RS:0.5991},{AP:13,RS:0.60271},{AP:15,RS:0.60971},{AP:16,RS:0.6131},{AP:18,RS:0.61965},{AP:19,RS:0.62281},{AP:20,RS:0.6259},{AP:21,RS:0.62892},{AP:22,RS:0.63186},{AP:23,RS:0.63472},{AP:24,RS:0.63752},{AP:25,RS:0.64023},{AP:26,RS:0.64288},{AP:27,RS:0.64545},{AP:28,RS:0.64794},{AP:29,RS:0.65037},{AP:30,RS:0.65271},{AP:31,RS:0.65499},{AP:32,RS:0.65718},{AP:33,RS:0.65931},{AP:34,RS:0.66136},{AP:35,RS:0.66333},{AP:36,RS:0.66524},{AP:37,RS:0.66706},{AP:38,RS:0.66882},{AP:39,RS:0.6705},{AP:41,RS:0.67363},{AP:42,RS:0.67509},{AP:44,RS:0.67778},{AP:45,RS:0.67901},{AP:47,RS:0.68125},{AP:48,RS:0.68226},{AP:51,RS:0.68485},{AP:54,RS:0.68677},{AP:57,RS:0.6875}
  ];
  let Dynamo = [
    {AP:0,RS:0.88},{AP:3,RS:0.90125},{AP:6,RS:0.92142},{AP:9,RS:0.94053},{AP:10,RS:0.94666},{AP:12,RS:0.95857},{AP:13,RS:0.96434},{AP:15,RS:0.97554},{AP:16,RS:0.98095},{AP:18,RS:0.99143},{AP:19,RS:0.9965},{AP:20,RS:1.00144},{AP:21,RS:1.00626},{AP:22,RS:1.01097},{AP:23,RS:1.01556},{AP:24,RS:1.02003},{AP:25,RS:1.02438},{AP:26,RS:1.02861},{AP:27,RS:1.03272},{AP:28,RS:1.03671},{AP:29,RS:1.04058},{AP:30,RS:1.04434},{AP:31,RS:1.04798},{AP:32,RS:1.05149},{AP:33,RS:1.05489},{AP:34,RS:1.05817},{AP:35,RS:1.06134},{AP:36,RS:1.06438},{AP:37,RS:1.0673},{AP:38,RS:1.07011},{AP:39,RS:1.07279},{AP:41,RS:1.07781},{AP:42,RS:1.08014},{AP:44,RS:1.08444},{AP:45,RS:1.08641},{AP:47,RS:1.09001},{AP:48,RS:1.09162},{AP:51,RS:1.09576},{AP:54,RS:1.09883},{AP:57,RS:1.1}
  ];
  let L3 = [
    {AP:0,RS:0.8},{AP:3,RS:0.81931},{AP:6,RS:0.83766},{AP:9,RS:0.85503},{AP:10,RS:0.8606},{AP:12,RS:0.87142},{AP:13,RS:0.87667},{AP:15,RS:0.88685},{AP:16,RS:0.89178},{AP:18,RS:0.9013},{AP:19,RS:0.90591},{AP:20,RS:0.9104},{AP:21,RS:0.91479},{AP:22,RS:0.91906},{AP:23,RS:0.92323},{AP:24,RS:0.9273},{AP:25,RS:0.93125},{AP:26,RS:0.9351},{AP:27,RS:0.93883},{AP:28,RS:0.94246},{AP:29,RS:0.94599},{AP:30,RS:0.9494},{AP:31,RS:0.95271},{AP:32,RS:0.9559},{AP:33,RS:0.95899},{AP:34,RS:0.96198},{AP:35,RS:0.96485},{AP:36,RS:0.96762},{AP:37,RS:0.97027},{AP:38,RS:0.97282},{AP:39,RS:0.97527},{AP:41,RS:0.97983},{AP:42,RS:0.98194},{AP:44,RS:0.98586},{AP:45,RS:0.98765},{AP:47,RS:0.99091},{AP:48,RS:0.99238},{AP:51,RS:0.99615},{AP:54,RS:0.99894},{AP:57,RS:1},
  ];
  let Squeezer = [
    {AP:0,RS:0.72},{AP:3,RS:0.73738},{AP:6,RS:0.75389},{AP:9,RS:0.76952},{AP:10,RS:0.77454},{AP:12,RS:0.78428},{AP:13,RS:0.78901},{AP:15,RS:0.79817},{AP:16,RS:0.8026},{AP:18,RS:0.81117},{AP:19,RS:0.81532},{AP:20,RS:0.81936},{AP:21,RS:0.82331},{AP:22,RS:0.82716},{AP:23,RS:0.83091},{AP:24,RS:0.83457},{AP:25,RS:0.83813},{AP:26,RS:0.84159},{AP:27,RS:0.84495},{AP:28,RS:0.84822},{AP:29,RS:0.85139},{AP:30,RS:0.85446},{AP:31,RS:0.85744},{AP:32,RS:0.86031},{AP:33,RS:0.86309},{AP:34,RS:0.86578},{AP:35,RS:0.86836},{AP:36,RS:0.87085},{AP:37,RS:0.87325},{AP:38,RS:0.87554},{AP:39,RS:0.87774},{AP:41,RS:0.88184},{AP:42,RS:0.88375},{AP:44,RS:0.88727},{AP:45,RS:0.88888},{AP:47,RS:0.89182},{AP:48,RS:0.89315},{AP:51,RS:0.89653},{AP:54,RS:0.89904},{AP:57,RS:0.9}
  ];
  let RapidPro = [
    {AP:0,RS:0.5},{AP:3,RS:0.51207},{AP:6,RS:0.52353},{AP:9,RS:0.53439},{AP:10,RS:0.53787},{AP:12,RS:0.54464},{AP:13,RS:0.54792},{AP:15,RS:0.55428},{AP:16,RS:0.55736},{AP:18,RS:0.56332},{AP:19,RS:0.56619},{AP:20,RS:0.569},{AP:21,RS:0.57174},{AP:22,RS:0.57442},{AP:23,RS:0.57702},{AP:24,RS:0.57956},{AP:25,RS:0.58203},{AP:26,RS:0.58444},{AP:27,RS:0.58677},{AP:28,RS:0.58904},{AP:29,RS:0.59124},{AP:30,RS:0.59337},{AP:31,RS:0.59544},{AP:32,RS:0.59744},{AP:33,RS:0.59937},{AP:34,RS:0.60123},{AP:35,RS:0.60303},{AP:36,RS:0.60476},{AP:37,RS:0.60642},{AP:38,RS:0.60801},{AP:39,RS:0.60954},{AP:41,RS:0.61239},{AP:42,RS:0.61372},{AP:44,RS:0.61616},{AP:45,RS:0.61728},{AP:47,RS:0.61932},{AP:48,RS:0.62024},{AP:51,RS:0.62259},{AP:54,RS:0.62433},{AP:57,RS:0.625}
  ];
  let Flingza = [
    {AP:0,RS:1.08},{AP:3,RS:1.10607},{AP:6,RS:1.13084},{AP:9,RS:1.15429},{AP:10,RS:1.16181},{AP:12,RS:1.17642},{AP:13,RS:1.18351},{AP:15,RS:1.19725},{AP:16,RS:1.2039},{AP:18,RS:1.21676},{AP:19,RS:1.22297},{AP:20,RS:1.22904},{AP:21,RS:1.23496},{AP:22,RS:1.24074},{AP:23,RS:1.24637},{AP:24,RS:1.25185},{AP:25,RS:1.25719},{AP:26,RS:1.26238},{AP:27,RS:1.26743},{AP:28,RS:1.27233},{AP:29,RS:1.27708},{AP:30,RS:1.28169},{AP:31,RS:1.28615},{AP:32,RS:1.29047},{AP:33,RS:1.29464},{AP:34,RS:1.29867},{AP:35,RS:1.30255},{AP:36,RS:1.30628},{AP:37,RS:1.30987},{AP:38,RS:1.31331},{AP:39,RS:1.31661},{AP:41,RS:1.32277},{AP:42,RS:1.32562},{AP:44,RS:1.33091},{AP:45,RS:1.33333},{AP:47,RS:1.33773},{AP:48,RS:1.33972},{AP:51,RS:1.3448},{AP:54,RS:1.34856},{AP:57,RS:1.35}
  ];
  let SplatRoller = Flingza;
  let Carbon = [
    {AP:0,RS:1.28},{AP:3,RS:1.3109},{AP:6,RS:1.34025},{AP:9,RS:1.36804},{AP:10,RS:1.37696},{AP:12,RS:1.39428},{AP:13,RS:1.40268},{AP:15,RS:1.41896},{AP:16,RS:1.42684},{AP:18,RS:1.44209},{AP:19,RS:1.44945},{AP:20,RS:1.45664},{AP:21,RS:1.46366},{AP:22,RS:1.4705},{AP:23,RS:1.47717},{AP:24,RS:1.48367},{AP:25,RS:1.49},{AP:26,RS:1.49615},{AP:27,RS:1.50213},{AP:28,RS:1.50794},{AP:29,RS:1.51358},{AP:30,RS:1.51904},{AP:31,RS:1.52433},{AP:32,RS:1.52945},{AP:33,RS:1.53439},{AP:34,RS:1.53916},{AP:35,RS:1.54376},{AP:36,RS:1.54819},{AP:37,RS:1.55244},{AP:38,RS:1.55652},{AP:39,RS:1.56043},{AP:41,RS:1.56772},{AP:42,RS:1.57111},{AP:44,RS:1.57737},{AP:45,RS:1.58024},{AP:47,RS:1.58546},{AP:48,RS:1.58781},{AP:51,RS:1.59383},{AP:54,RS:1.5983},{AP:57,RS:1.6}
  ];
  let Inkbrush = [
    {AP:0,RS:1.92},{AP:3,RS:1.96635},{AP:6,RS:2.01037},{AP:9,RS:2.05206},{AP:10,RS:2.06544},{AP:12,RS:2.09142},{AP:13,RS:2.10402},{AP:15,RS:2.12844},{AP:16,RS:2.14026},{AP:18,RS:2.16313},{AP:19,RS:2.17417},{AP:20,RS:2.18496},{AP:21,RS:2.19549},{AP:22,RS:2.20575},{AP:23,RS:2.21576},{AP:24,RS:2.22551},{AP:25,RS:2.235},{AP:26,RS:2.24423},{AP:27,RS:2.2532},{AP:28,RS:2.26191},{AP:29,RS:2.27037},{AP:30,RS:2.27856},{AP:31,RS:2.28649},{AP:32,RS:2.29417},{AP:33,RS:2.30159},{AP:34,RS:2.30874},{AP:35,RS:2.31564},{AP:36,RS:2.32228},{AP:37,RS:2.32866},{AP:38,RS:2.33478},{AP:39,RS:2.34064},{AP:41,RS:2.35158},{AP:42,RS:2.35667},{AP:44,RS:2.36605},{AP:45,RS:2.37036},{AP:47,RS:2.37819},{AP:48,RS:2.38172},{AP:51,RS:2.39075},{AP:54,RS:2.39745},{AP:57,RS:2.4},
  ];
  let Octobrush = [
    {AP:0,RS:1.68},{AP:3,RS:1.72056},{AP:6,RS:1.75908},{AP:9,RS:1.79555},{AP:10,RS:1.80726},{AP:12,RS:1.82999},{AP:13,RS:1.84102},{AP:15,RS:1.86239},{AP:16,RS:1.87273},{AP:18,RS:1.89274},{AP:19,RS:1.9024},{AP:20,RS:1.91184},{AP:21,RS:1.92105},{AP:22,RS:1.93003},{AP:23,RS:1.93879},{AP:24,RS:1.94732},{AP:25,RS:1.95562},{AP:26,RS:1.9637},{AP:27,RS:1.97155},{AP:28,RS:1.97917},{AP:29,RS:1.98657},{AP:30,RS:1.99374},{AP:31,RS:2.00068},{AP:32,RS:2.0074},{AP:33,RS:2.01389},{AP:34,RS:2.02015},{AP:35,RS:2.02618},{AP:36,RS:2.03199},{AP:37,RS:2.03758},{AP:38,RS:2.04293},{AP:39,RS:2.04806},{AP:41,RS:2.05763},{AP:42,RS:2.06208},{AP:44,RS:2.0703},{AP:45,RS:2.07407},{AP:47,RS:2.08092},{AP:48,RS:2.08401},{AP:51,RS:2.09191},{AP:54,RS:2.09777},{AP:57,RS:2.1},
  ];
  let Charger = [
    {AP:0,RS:0.2},{AP:3,RS:0.20483},{AP:6,RS:0.20941},{AP:9,RS:0.21376},{AP:10,RS:0.21515},{AP:12,RS:0.21786},{AP:13,RS:0.21917},{AP:15,RS:0.22171},{AP:16,RS:0.22294},{AP:18,RS:0.22533},{AP:19,RS:0.22648},{AP:20,RS:0.2276},{AP:21,RS:0.2287},{AP:22,RS:0.22977},{AP:23,RS:0.23081},{AP:24,RS:0.23182},{AP:25,RS:0.23281},{AP:26,RS:0.23377},{AP:27,RS:0.23471},{AP:28,RS:0.23562},{AP:29,RS:0.2365},{AP:30,RS:0.23735},{AP:31,RS:0.23818},{AP:32,RS:0.23898},{AP:33,RS:0.23975},{AP:34,RS:0.24049},{AP:35,RS:0.24121},{AP:36,RS:0.2419},{AP:37,RS:0.24257},{AP:38,RS:0.24321},{AP:39,RS:0.24382},{AP:41,RS:0.24496},{AP:42,RS:0.24549},{AP:44,RS:0.24646},{AP:45,RS:0.24691},{AP:47,RS:0.24773},{AP:48,RS:0.2481},{AP:51,RS:0.24904},{AP:54,RS:0.24973},{AP:57,RS:0.25}
  ];
  let Squiffer = [
    {AP:0,RS:0.3},{AP:3,RS:0.30724},{AP:6,RS:0.31412},{AP:9,RS:0.32063},{AP:10,RS:0.32272},{AP:12,RS:0.32678},{AP:13,RS:0.32875},{AP:15,RS:0.33257},{AP:16,RS:0.33442},{AP:18,RS:0.33799},{AP:19,RS:0.33971},{AP:20,RS:0.3414},{AP:21,RS:0.34304},{AP:22,RS:0.34465},{AP:23,RS:0.34621},{AP:24,RS:0.34774},{AP:25,RS:0.34922},{AP:26,RS:0.35066},{AP:27,RS:0.35206},{AP:28,RS:0.35342},{AP:29,RS:0.35474},{AP:30,RS:0.35602},{AP:31,RS:0.35726},{AP:32,RS:0.35846},{AP:33,RS:0.35962},{AP:34,RS:0.36074},{AP:35,RS:0.36182},{AP:36,RS:0.36286},{AP:37,RS:0.36385},{AP:38,RS:0.36481},{AP:39,RS:0.36572},{AP:41,RS:0.36743},{AP:42,RS:0.36823},{AP:44,RS:0.3697},{AP:45,RS:0.37037},{AP:47,RS:0.37159},{AP:48,RS:0.37214},{AP:51,RS:0.37355},{AP:54,RS:0.3746},{AP:57,RS:0.375}
  ];
  let Eliter = [
    {AP:0,RS:0.15},{AP:3,RS:0.15362},{AP:6,RS:0.15706},{AP:9,RS:0.16032},{AP:10,RS:0.16136},{AP:12,RS:0.16339},{AP:13,RS:0.16438},{AP:15,RS:0.16628},{AP:16,RS:0.16721},{AP:18,RS:0.16899},{AP:19,RS:0.16986},{AP:20,RS:0.1707},{AP:21,RS:0.17152},{AP:22,RS:0.17232},{AP:23,RS:0.17311},{AP:24,RS:0.17387},{AP:25,RS:0.17461},{AP:26,RS:0.17533},{AP:27,RS:0.17603},{AP:28,RS:0.17671},{AP:29,RS:0.17737},{AP:30,RS:0.17801},{AP:31,RS:0.17863},{AP:32,RS:0.17923},{AP:33,RS:0.17981},{AP:34,RS:0.18037},{AP:35,RS:0.18091},{AP:36,RS:0.18143},{AP:37,RS:0.18193},{AP:38,RS:0.1824},{AP:39,RS:0.18286},{AP:41,RS:0.18372},{AP:42,RS:0.18411},{AP:44,RS:0.18485},{AP:45,RS:0.18518},{AP:47,RS:0.1858},{AP:48,RS:0.18607},{AP:51,RS:0.18678},{AP:54,RS:0.1873},{AP:57,RS:0.1875}
  ];
  let Bamboo = Gal52;
  let GooTuber = [
    {AP:0,RS:0.3},{AP:3,RS:0.30724},{AP:6,RS:0.31412},{AP:9,RS:0.32063},{AP:10,RS:0.32272},{AP:12,RS:0.32678},{AP:13,RS:0.32875},{AP:15,RS:0.33257},{AP:16,RS:0.33442},{AP:18,RS:0.33799},{AP:19,RS:0.33971},{AP:20,RS:0.3414},{AP:21,RS:0.34304},{AP:22,RS:0.34465},{AP:23,RS:0.34621},{AP:24,RS:0.34774},{AP:25,RS:0.34922},{AP:26,RS:0.35066},{AP:27,RS:0.35206},{AP:28,RS:0.35342},{AP:29,RS:0.35474},{AP:30,RS:0.35602},{AP:31,RS:0.35726},{AP:32,RS:0.35846},{AP:33,RS:0.35962},{AP:34,RS:0.36074},{AP:35,RS:0.36182},{AP:36,RS:0.36286},{AP:37,RS:0.36385},{AP:38,RS:0.36481},{AP:39,RS:0.36572},{AP:41,RS:0.36743},{AP:42,RS:0.36823},{AP:44,RS:0.3697},{AP:45,RS:0.37037},{AP:47,RS:0.37159},{AP:48,RS:0.37214},{AP:51,RS:0.37355},{AP:54,RS:0.3746},{AP:57,RS:0.375  },
  ];
  let Slosher = Range;
  let Tri = [
    {AP:0,RS:0.66},{AP:3,RS:0.67593},{AP:6,RS:0.69107},{AP:9,RS:0.7054},{AP:10,RS:0.71},{AP:12,RS:0.71892},{AP:13,RS:0.72326},{AP:15,RS:0.73165},{AP:16,RS:0.73572},{AP:18,RS:0.74358},{AP:19,RS:0.74737},{AP:20,RS:0.75108},{AP:21,RS:0.7547},{AP:22,RS:0.75823},{AP:23,RS:0.76167},{AP:24,RS:0.76502},{AP:25,RS:0.76828},{AP:26,RS:0.77145},{AP:27,RS:0.77454},{AP:28,RS:0.77753},{AP:29,RS:0.78044},{AP:30,RS:0.78326},{AP:31,RS:0.78598},{AP:32,RS:0.78862},{AP:33,RS:0.79117},{AP:34,RS:0.79363},{AP:35,RS:0.796},{AP:36,RS:0.79828},{AP:37,RS:0.80048},{AP:38,RS:0.80258},{AP:39,RS:0.80459},{AP:41,RS:0.80836},{AP:42,RS:0.8101},{AP:44,RS:0.81333},{AP:45,RS:0.81481},{AP:47,RS:0.8175},{AP:48,RS:0.81872},{AP:51,RS:0.82182},{AP:54,RS:0.82412},{AP:57,RS:0.825}
  ];
  let Machine = [
    {AP:0,RS:0.7},{AP:3,RS:0.7169},{AP:6,RS:0.73295},{AP:9,RS:0.74815},{AP:10,RS:0.75302},{AP:12,RS:0.7625},{AP:13,RS:0.76709},{AP:15,RS:0.77599},{AP:16,RS:0.7803},{AP:18,RS:0.78864},{AP:19,RS:0.79267},{AP:20,RS:0.7966},{AP:21,RS:0.80044},{AP:22,RS:0.80418},{AP:23,RS:0.80783},{AP:24,RS:0.81138},{AP:25,RS:0.81484},{AP:26,RS:0.81821},{AP:27,RS:0.82148},{AP:28,RS:0.82466},{AP:29,RS:0.82774},{AP:30,RS:0.83072},{AP:31,RS:0.83362},{AP:32,RS:0.83642},{AP:33,RS:0.83912},{AP:34,RS:0.84173},{AP:35,RS:0.84424},{AP:36,RS:0.84666},{AP:37,RS:0.84899},{AP:38,RS:0.85122},{AP:39,RS:0.85336},{AP:41,RS:0.85735},{AP:42,RS:0.8592},{AP:44,RS:0.86262},{AP:45,RS:0.86419},{AP:47,RS:0.86705},{AP:48,RS:0.86834},{AP:51,RS:0.87163},{AP:54,RS:0.87407},{AP:57,RS:0.875}
  ];
  let Mini = [
    {AP:0,RS:0.86},{AP:3,RS:0.89322},{AP:6,RS:0.92477},{AP:9,RS:0.95464},{AP:10,RS:0.96423},{AP:12,RS:0.98285},{AP:13,RS:0.99188},{AP:15,RS:1.00938},{AP:16,RS:1.01785},{AP:18,RS:1.03424},{AP:19,RS:1.04216},{AP:20,RS:1.04989},{AP:21,RS:1.05743},{AP:22,RS:1.06479},{AP:23,RS:1.07196},{AP:24,RS:1.07895},{AP:25,RS:1.08575},{AP:26,RS:1.09237},{AP:27,RS:1.09879},{AP:28,RS:1.10504},{AP:29,RS:1.1111},{AP:30,RS:1.11697},{AP:31,RS:1.12265},{AP:32,RS:1.12815},{AP:33,RS:1.13347},{AP:34,RS:1.1386},{AP:35,RS:1.14354},{AP:36,RS:1.1483},{AP:37,RS:1.15287},{AP:38,RS:1.15726},{AP:39,RS:1.16146},{AP:41,RS:1.1693},{AP:42,RS:1.17294},{AP:44,RS:1.17967},{AP:45,RS:1.18276},{AP:47,RS:1.18837},{AP:48,RS:1.1909},{AP:51,RS:1.19737},{AP:54,RS:1.20217},{AP:57,RS:1.204}
  ];
  let Heavy = [
    {AP:0,RS:0.7},{AP:3,RS:0.72366},{AP:6,RS:0.74613},{AP:9,RS:0.76741},{AP:10,RS:0.77423},{AP:12,RS:0.78749},{AP:13,RS:0.79393},{AP:15,RS:0.80639},{AP:16,RS:0.81243},{AP:18,RS:0.8241},{AP:19,RS:0.82973},{AP:20,RS:0.83524},{AP:21,RS:0.84061},{AP:22,RS:0.84585},{AP:23,RS:0.85096},{AP:24,RS:0.85594},{AP:25,RS:0.86078},{AP:26,RS:0.86549},{AP:27,RS:0.87007},{AP:28,RS:0.87452},{AP:29,RS:0.87883},{AP:30,RS:0.88301},{AP:31,RS:0.88706},{AP:32,RS:0.89098},{AP:33,RS:0.89477},{AP:34,RS:0.89842},{AP:35,RS:0.90194},{AP:36,RS:0.90533},{AP:37,RS:0.90859},{AP:38,RS:0.91171},{AP:39,RS:0.9147},{AP:41,RS:0.92029},{AP:42,RS:0.92288},{AP:44,RS:0.92767},{AP:45,RS:0.92987},{AP:47,RS:0.93387},{AP:48,RS:0.93567},{AP:51,RS:0.94028},{AP:54,RS:0.9437},{AP:57,RS:0.945}
  ];
  let Hydra = [
    {AP:0,RS:0.6},{AP:3,RS:0.62028},{AP:6,RS:0.63954},{AP:9,RS:0.65778},{AP:10,RS:0.66363},{AP:12,RS:0.675},{AP:13,RS:0.68051},{AP:15,RS:0.69119},{AP:16,RS:0.69636},{AP:18,RS:0.70637},{AP:19,RS:0.7112},{AP:20,RS:0.71592},{AP:21,RS:0.72053},{AP:22,RS:0.72502},{AP:23,RS:0.7294},{AP:24,RS:0.73366},{AP:25,RS:0.73781},{AP:26,RS:0.74185},{AP:27,RS:0.74578},{AP:28,RS:0.74959},{AP:29,RS:0.75329},{AP:30,RS:0.75687},{AP:31,RS:0.76034},{AP:32,RS:0.7637},{AP:33,RS:0.76694},{AP:34,RS:0.77007},{AP:35,RS:0.77309},{AP:36,RS:0.776},{AP:37,RS:0.77879},{AP:38,RS:0.78147},{AP:39,RS:0.78403},{AP:41,RS:0.78882},{AP:42,RS:0.79104},{AP:44,RS:0.79515},{AP:45,RS:0.79703},{AP:47,RS:0.80046},{AP:48,RS:0.802},{AP:51,RS:0.80595},{AP:54,RS:0.80888},{AP:57,RS:0.81}
  ];
  let BallPoint = [
    {AP:0,RS:0.86},{AP:3,RS:0.88076},{AP:6,RS:0.90048},{AP:9,RS:0.91915},{AP:10,RS:0.92514},{AP:12,RS:0.93678},{AP:13,RS:0.94242},{AP:15,RS:0.95336},{AP:16,RS:0.95866},{AP:18,RS:0.9689},{AP:19,RS:0.97385},{AP:20,RS:0.97868},{AP:21,RS:0.98339},{AP:22,RS:0.98799},{AP:23,RS:0.99248},{AP:24,RS:0.99684},{AP:25,RS:1.00109},{AP:26,RS:1.00523},{AP:27,RS:1.00925},{AP:28,RS:1.01315},{AP:29,RS:1.01693},{AP:30,RS:1.0206},{AP:31,RS:1.02416},{AP:32,RS:1.0276},{AP:33,RS:1.03092},{AP:34,RS:1.03412},{AP:35,RS:1.03721},{AP:36,RS:1.04019},{AP:37,RS:1.04304},{AP:38,RS:1.04579},{AP:39,RS:1.04841},{AP:41,RS:1.05331},{AP:42,RS:1.05559},{AP:44,RS:1.0598},{AP:45,RS:1.06172},{AP:47,RS:1.06523},{AP:48,RS:1.06681},{AP:51,RS:1.07086},{AP:54,RS:1.07386},{AP:57,RS:1.075},
  ];
  let Nautilus = [
    {AP:0,RS:0.7},{AP:3,RS:0.72028},{AP:6,RS:0.73954},{AP:9,RS:0.75778},{AP:10,RS:0.76363},{AP:12,RS:0.775},{AP:13,RS:0.78051},{AP:15,RS:0.79119},{AP:16,RS:0.79636},{AP:18,RS:0.80637},{AP:19,RS:0.8112},{AP:20,RS:0.81592},{AP:21,RS:0.82053},{AP:22,RS:0.82502},{AP:23,RS:0.8294},{AP:24,RS:0.83366},{AP:25,RS:0.83781},{AP:26,RS:0.84185},{AP:27,RS:0.84578},{AP:28,RS:0.84959},{AP:29,RS:0.85329},{AP:30,RS:0.85687},{AP:31,RS:0.86034},{AP:32,RS:0.8637},{AP:33,RS:0.86694},{AP:34,RS:0.87007},{AP:35,RS:0.87309},{AP:36,RS:0.876},{AP:37,RS:0.87879},{AP:38,RS:0.88147},{AP:39,RS:0.88403},{AP:41,RS:0.88882},{AP:42,RS:0.89104},{AP:44,RS:0.89515},{AP:45,RS:0.89703},{AP:47,RS:0.90046},{AP:48,RS:0.902},{AP:51,RS:0.90595},{AP:54,RS:0.90888},{AP:57,RS:0.91}
  ];
  let Dapples = L3;
  let Dualies = L3;
  let Glooga = Gal52;
  let DualieSquelcher = Squeezer;
  let Blob = Luna;
  let Explo = Blaster;
  let Brella = Clash;
  let Tetras = Splash;
  let Tenta = Luna;
  let Undercover = Splash;
  let Nzap = [
    {AP:0,RS:0.84},{AP:3,RS:0.86028},{AP:6,RS:0.87954},{AP:9,RS:0.89778},{AP:10,RS:0.90363},{AP:12,RS:0.915},{AP:13,RS:0.92051},{AP:15,RS:0.93119},{AP:16,RS:0.93636},{AP:18,RS:0.94637},{AP:19,RS:0.9512},{AP:20,RS:0.95592},{AP:21,RS:0.96053},{AP:22,RS:0.96502},{AP:23,RS:0.9694},{AP:24,RS:0.97366},{AP:25,RS:0.97781},{AP:26,RS:0.98185},{AP:27,RS:0.98578},{AP:28,RS:0.98959},{AP:29,RS:0.99329},{AP:30,RS:0.99687},{AP:31,RS:1.00034},{AP:32,RS:1.0037},{AP:33,RS:1.00694},{AP:34,RS:1.01007},{AP:35,RS:1.01309},{AP:36,RS:1.016},{AP:37,RS:1.01879},{AP:38,RS:1.02147},{AP:39,RS:1.02403},{AP:41,RS:1.02882},{AP:42,RS:1.03104},{AP:44,RS:1.03515},{AP:45,RS:1.03703},{AP:47,RS:1.04046},{AP:48,RS:1.042},{AP:51,RS:1.04595},{AP:54,RS:1.04888},{AP:57,RS:1.05}
  ];
  let H3 = Gal52;

  // 一部のギアパワー効果によって発生する特殊なAPに対する処理
  const irregularValues = function(array) {
   if (abilityPoint === 40) {
    return Math.floor((array[30].RS + array[31].RS) / 2 * 100) /100
  } else if (abilityPoint === 43) {
    return Math.floor((array[32].RS + array[33].RS) / 2 * 100) /100
  } else if (abilityPoint === 46) {
    return Math.floor((array[34].RS + array[35].RS) / 2 * 100) /100
  } else if (abilityPoint === 49) {
    return Math.floor(((array[37].RS - array[36].RS) / 3 + array[36].RS) * 100) /100
  } else if (abilityPoint === 50) {
    return Math.floor(((array[37].RS - array[36].RS) / 3 * 2 + array[36].RS) * 100) /100
  } else if (abilityPoint === 52) {
    return Math.floor(((array[38].RS - array[37].RS) / 3 + array[37].RS) * 100) /100
  } else if (abilityPoint === 53) {
    return Math.floor(((array[38].RS - array[37].RS) / 3 * 2 + array[37].RS) * 100) /100
  } else if (abilityPoint === 55) {
    return Math.floor(((array[39].RS - array[38].RS) / 3 + array[38].RS) * 100) /100
  } else if (abilityPoint === 56) {
    return Math.floor(((array[39].RS - array[38].RS) / 3 * 2 + array[38].RS) * 100) /100
  } 
  }


  if (weaponStatus.name.indexOf("ボールドマーカー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Sploosh[i].AP === abilityPoint) {
        runSpeedShooting = Math.floor(Sploosh[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Sploosh);
    }
  } else if (weaponStatus.name.indexOf("シャープマーカー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Splash[i].AP === abilityPoint) {
        runSpeedShooting = Math.floor(Splash[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Splash);
    }
  } else if (weaponStatus.name.indexOf("わかば") > -1 || weaponStatus.name.indexOf("もみじ") > -1 || weaponStatus.name.indexOf("おちば") > -1) {
    for (let i=0; i < 40; i++) {
      if (Jr[i].AP === abilityPoint) {
        runSpeedShooting = Math.floor(Jr[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Jr);
    }
  } else if (weaponStatus.name.indexOf("プロモデラー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Aerospray[i].AP === abilityPoint) {
        runSpeedShooting = Math.floor(Aerospray[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Aerospray);
    }
  } else if (weaponStatus.name.indexOf("52ガロン") > -1) {
    for (let i=0; i < 40; i++) {
      if (Gal52[i].AP === abilityPoint) {
        runSpeedShooting = Math.floor(Gal52[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Gal52);
    }
  } else if (weaponStatus.name.indexOf("N-ZAP") > -1) {
    for (let i=0; i < 40; i++) {
      if (Nzap[i].AP === abilityPoint) {
        runSpeedShooting = Math.floor(Nzap[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Nzap);
    }
  } else if (weaponStatus.name.indexOf("プライムシューター") > -1) {
    for (let i=0; i < 40; i++) {
      if (Pro[i].AP === abilityPoint) {
        runSpeedShooting = Math.floor(Pro[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Pro);
    }
  } else if (weaponStatus.name.indexOf("ジェットスイーパー") > -1) {
    for (let i=0; i < 40; i++) {
      if (JetSquelcher[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(JetSquelcher[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(JetSquelcher);
    }
  } else if (weaponStatus.name.indexOf("96ガロン") > -1) {
    for (let i=0; i < 40; i++) {
      if (Gal96[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Gal96[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Gal96);
    }
    // APが特殊な値をとる時
  } else if (weaponStatus.name.indexOf("ノヴァブラスター") > -1) {
    for (let i=0; i < 40; i++) {
      if (Luna[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Luna[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Luna);
    }
  } else if (weaponStatus.name.indexOf("ホットブラスター") > -1 || weaponStatus.name.indexOf("ヒーローブラスター") > -1) {
    for (let i=0; i < 40; i++) {
      if (Blaster[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Blaster[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Blaster);
    }
  } else if (weaponStatus.name.indexOf("クラッシュブラスター") > -1) {
    for (let i=0; i < 40; i++) {
      if (Clash[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Clash[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Clash);
    }
  } else if (weaponStatus.name.indexOf("スプラシューター") > -1 || weaponStatus.name.indexOf("ヒーローシューター") > -1 || weaponStatus.name.indexOf("オクタシューター") > -1) {
    for (let i=0; i < 40; i++) {
      if (SplatterShot[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(SplatterShot[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(SplatterShot);
    }
  } else if (weaponStatus.name.indexOf("ラピッドブラスター") > -1) {
    for (let i=0; i < 40; i++) {
      if (Rapid[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Rapid[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Rapid);
    }
  } else if (weaponStatus.name.indexOf("ダイナモローラー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Dynamo[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Dynamo[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Dynamo);
    }
  } else if (weaponStatus.name.indexOf("L-3") > -1) {
    for (let i=0; i < 40; i++) {
      if (L3[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(L3[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(L3);
    }
  } else if (weaponStatus.name.indexOf("H-3") > -1) {
    for (let i=0; i < 40; i++) {
      if (H3[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(H3[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(H3);
    }
  } else if (weaponStatus.name.indexOf("Rブラスター") > -1) {
    for (let i=0; i < 40; i++) {
      if (RapidPro[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(RapidPro[i].RS * 100) /100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(RapidPro);
    }
  } else if (weaponStatus.name.indexOf("ボトルカイザー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Squeezer[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Squeezer[i].RS * 100) /100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Squeezer);
    }
  } else if (weaponStatus.name.indexOf("スプラローラー") > -1) {
    for (let i=0; i < 40; i++) {
      if (SplatRoller[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(SplatRoller[i].RS * 100) /100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(SplatRoller);
    }
  } else if (weaponStatus.name.indexOf("カーボン") > -1) {
    for (let i=0; i < 40; i++) {
      if (Carbon[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Carbon[i].RS * 100) /100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Carbon);
    }
  } else if (weaponStatus.name.indexOf("ロングブラスター") > -1) {
    for (let i=0; i < 40; i++) {
      if (Range[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Range[i].RS * 100) /100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Range);
    }
  } else if (weaponStatus.name.indexOf("ヴァリアブルローラー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Flingza[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Flingza[i].RS * 100) /100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Flingza);
    }
  } else if (weaponStatus.name.indexOf("ホクサイ") > -1) {
    for (let i=0; i < 40; i++) {
      if (Octobrush[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Octobrush[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Octobrush);
    }
  } else if (weaponStatus.name.indexOf("パブロ") > -1) {
    for (let i=0; i < 40; i++) {
      if (Inkbrush[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Inkbrush[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Inkbrush);
    }
  } else if (weaponStatus.name.indexOf("スプラチャージャー") > -1 || weaponStatus.name.indexOf("スプラスコープ") > -1) {
    for (let i=0; i < 40; i++) {
      if (Charger[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Charger[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Charger);
    }
  } else if (weaponStatus.name.indexOf("スクイックリン") > -1) {
    for (let i=0; i < 40; i++) {
      if (Squiffer[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Squiffer[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Squiffer);
    }
  } else if (weaponStatus.name.indexOf("リッター") > -1 || weaponStatus.name.indexOf("4Kスコープ") > -1) {
    for (let i=0; i < 40; i++) {
      if (Eliter[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Eliter[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Eliter);
    }
  } else if (weaponStatus.name.indexOf("竹") > -1) {
    for (let i=0; i < 40; i++) {
      if (Bamboo[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Bamboo[i].RS * 100) / 100;
      }
    }
    // APが特殊な値をとる時
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Bamboo);
    }
  } else if (weaponStatus.name.indexOf("ソイチューバー") > -1) {
    for (let i=0; i < 40; i++) {
      if (GooTuber[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(GooTuber[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(GooTuber);
    }
  } else if (weaponStatus.name.indexOf("バケットスロッシャー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Slosher[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Slosher[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Slosher);
    }
  } else if (weaponStatus.name.indexOf("ヒッセン") > -1) {
    for (let i=0; i < 40; i++) {
      if (Tri[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Tri[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Tri);
    }
  } else if (weaponStatus.name.indexOf("スクリュー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Machine[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Machine[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Machine);
    }
  } else if (weaponStatus.name.indexOf("オーバーフロッシャー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Blob[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Blob[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Blob);
    }
  } else if (weaponStatus.name.indexOf("エクスプロッシャー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Explo[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Explo[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Explo);
    }
  } else if (weaponStatus.name.indexOf("スプラスピナー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Mini[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Mini[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Mini);
    }
  } else if (weaponStatus.name.indexOf("バレルスピナー") > -1 || weaponStatus.name.indexOf("ヒーロースピナー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Heavy[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Heavy[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Heavy);
    }
  } else if (weaponStatus.name.indexOf("ハイドラント") > -1) {
    for (let i=0; i < 40; i++) {
      if (Hydra[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Hydra[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Hydra);
    }
  } else if (weaponStatus.name.indexOf("クーゲルシュライバー") > -1) {
    for (let i=0; i < 40; i++) {
      if (BallPoint[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(BallPoint[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(BallPoint);
    }
  } else if (weaponStatus.name.indexOf("ノーチラス") > -1) {
    for (let i=0; i < 40; i++) {
      if (Nautilus[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Nautilus[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Nautilus);
    }
  } else if (weaponStatus.name.indexOf("スパッタリー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Dapples[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Dapples[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Dapples);
    }
  } else if (weaponStatus.name.indexOf("マニューバー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Dualies[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Dualies[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Dualies);
    }
  } else if (weaponStatus.name.indexOf("ケルビン") > -1) {
    for (let i=0; i < 40; i++) {
      if (Glooga[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Glooga[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Glooga);
    }
  } else if (weaponStatus.name.indexOf("デュアル") > -1) {
    for (let i=0; i < 40; i++) {
      if (DualieSquelcher[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(DualieSquelcher[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(DualieSquelcher);
    }
  } else if (weaponStatus.name.indexOf("クアッドホッパー") > -1) {
    for (let i=0; i < 40; i++) {
      if (Tetras[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Tetras[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Tetras);
    }
  } else if (weaponStatus.name.indexOf("パラシェルター") > -1) {
    for (let i=0; i < 40; i++) {
      if (Brella[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Brella[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Brella);
    }
  } else if (weaponStatus.name.indexOf("キャンピングシェルター") > -1) {
    for (let i=0; i < 40; i++) {
      if (Tenta[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Tenta[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Tenta);
    }
  } else if (weaponStatus.name.indexOf("スパイガジェット") > -1) {
    for (let i=0; i < 40; i++) {
      if (Undercover[i].AP === abilityPoint) {
         runSpeedShooting = Math.floor(Undercover[i].RS * 100) / 100;
      }
    }
    if (!runSpeedShooting) {
      runSpeedShooting = irregularValues(Undercover);
    }
  }
  
  // ブキのweightによって決まるヒト移動速度
  if (weaponStatus.weight === "light") {
    for (let i=0; i < 40; i++) {
      if (lightClass[i].AP === abilityPoint) {
        runSpeed = Math.floor(lightClass[i].RS * 100) / 100;
      } 
    }
    if (!runSpeed) {
      runSpeed = irregularValues(lightClass);
    }
  } else if (weaponStatus.weight === "middle") {
    for (let i=0; i < 40; i++) {
      if (middleClass[i].AP === abilityPoint) {
        runSpeed = Math.floor(middleClass[i].RS * 100) / 100;
      }
    }
    if (!runSpeed) {
      runSpeed = irregularValues(middleClass);
    }
  } else if (weaponStatus.weight === "heavy") {
    for (let i=0; i < 40; i++) {
      if (heavyClass[i].AP === abilityPoint) {
        runSpeed = Math.floor(heavyClass[i].RS * 100) / 100;
      }
    }
    if (!runSpeed) {
      runSpeed = irregularValues(heavyClass);
    }
  }
  return (
    <div className="ae-card row">
      <div className="ap-icon-area col-1">
        <div className="ability-icon ap-ability-icon">
          <img className="ap-ability-img" src={runSpeedImg} alt=""/>
        </div>
      </div>
      <div className="col-11 d-flex flex-column px-0">
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">ヒト移動速度</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{runSpeed} DU/F</p>
          </div>
        </div>
        <div className="ae-part row">
          <div className="col-7 px-0 m-auto">
            <p className="ae-text">ヒト移動速度（射撃中）</p>
          </div>
          <p className="col-1 ae-colon">:</p>
          <div className="col-4 px-0 m-auto">
            <p className="ae-effect">{runSpeedShooting} DU/F</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RunSpeed;