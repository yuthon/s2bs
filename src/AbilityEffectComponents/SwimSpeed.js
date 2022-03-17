
import swimSpeedImg from '../images/ability/SSU.png';

const SwimSpeed = (props) => {
  let swimSpeed;
  let abilityPoint = props.abilityPoint
  let weight = props.weaponStatus.weight
  let abilityName = props.abilityName
  
  // APはabilityPoint  SSはSwimSpeed
  let light = [
    {AP:0,SS:2.016},{AP:3,SS:2.05308},{AP:6,SS:2.0883},{AP:9,SS:2.12165},{AP:10,SS:2.13235},{AP:12,SS:2.15313},{AP:13,SS:2.16321},{AP:15,SS:2.18275},{AP:16,SS:2.19221},{AP:18,SS:2.2105},{AP:19,SS:2.21934},{AP:20,SS:2.22797},{AP:21,SS:2.23639},{AP:22,SS:2.2446},{AP:23,SS:2.25261},{AP:24,SS:2.26041},{AP:25,SS:2.268},{AP:26,SS:2.27538},{AP:27,SS:2.28256},{AP:28,SS:2.28953},{AP:29,SS:2.29629},{AP:30,SS:2.30285},{AP:31,SS:2.3092},{AP:32,SS:2.31534},{AP:33,SS:2.32127},{AP:34,SS:2.32699},{AP:35,SS:2.33251},{AP:36,SS:2.33782},{AP:37,SS:2.34293},{AP:38,SS:2.34782},{AP:39,SS:2.35251},{AP:41,SS:2.36127},{AP:42,SS:2.36533},{AP:44,SS:2.37284},{AP:45,SS:2.37629},{AP:47,SS:2.38255},{AP:48,SS:2.38538},{AP:51,SS:2.3926},{AP:54,SS:2.39796},{AP:57,SS:2.4},
  ];
  let lightNinja = [
    {AP:0,SS:1.8144},{AP:3,SS:1.8411},{AP:6,SS:1.86646},{AP:9,SS:1.89047},{AP:10,SS:1.89817},{AP:12,SS:1.91314},{AP:13,SS:1.92039},{AP:15,SS:1.93446},{AP:16,SS:1.94127},{AP:18,SS:1.95444},{AP:19,SS:1.9608},{AP:20,SS:1.96702},{AP:21,SS:1.97308},{AP:22,SS:1.97899},{AP:23,SS:1.98476},{AP:24,SS:1.99037},{AP:25,SS:1.99584},{AP:26,SS:2.00116},{AP:27,SS:2.00632},{AP:28,SS:2.01134},{AP:29,SS:2.01621},{AP:31,SS:2.0255},{AP:32,SS:2.02992},{AP:34,SS:2.03832},{AP:35,SS:2.04229},{AP:37,SS:2.04979},{AP:38,SS:2.05331},{AP:41,SS:2.06299},{AP:44,SS:2.07133},{AP:47,SS:2.07832}
  ];
  let middle = [
    {AP:0,SS:1.92},{AP:3,SS:1.96635},{AP:6,SS:2.01037},{AP:9,SS:2.05206},{AP:10,SS:2.06544},{AP:12,SS:2.09142},{AP:13,SS:2.10402},{AP:15,SS:2.12844},{AP:16,SS:2.14026},{AP:18,SS:2.16313},{AP:19,SS:2.17417},{AP:20,SS:2.18496},{AP:21,SS:2.19549},{AP:22,SS:2.20575},{AP:23,SS:2.21576},{AP:24,SS:2.22551},{AP:25,SS:2.235},{AP:26,SS:2.24423},{AP:27,SS:2.2532},{AP:28,SS:2.26191},{AP:29,SS:2.27037},{AP:30,SS:2.27856},{AP:31,SS:2.28649},{AP:32,SS:2.29417},{AP:33,SS:2.30159},{AP:34,SS:2.30874},{AP:35,SS:2.31564},{AP:36,SS:2.32228},{AP:37,SS:2.32866},{AP:38,SS:2.33478},{AP:39,SS:2.34064},{AP:41,SS:2.35158},{AP:42,SS:2.35667},{AP:44,SS:2.36605},{AP:45,SS:2.37036},{AP:47,SS:2.37819},{AP:48,SS:2.38172},{AP:51,SS:2.39075},{AP:54,SS:2.39745},{AP:57,SS:2.4},
  ];
  let middleNinja = [
    {AP:0,SS:1.728},{AP:3,SS:1.76137},{AP:6,SS:1.79307},{AP:9,SS:1.82308},{AP:10,SS:1.83272},{AP:12,SS:1.85142},{AP:13,SS:1.86049},{AP:15,SS:1.87808},{AP:16,SS:1.88659},{AP:18,SS:1.90305},{AP:19,SS:1.91101},{AP:20,SS:1.91877},{AP:21,SS:1.92635},{AP:22,SS:1.93374},{AP:23,SS:1.94095},{AP:24,SS:1.94797},{AP:25,SS:1.9548},{AP:26,SS:1.96145},{AP:27,SS:1.96791},{AP:28,SS:1.97418},{AP:29,SS:1.98026},{AP:31,SS:1.99188},{AP:32,SS:1.9974},{AP:34,SS:2.00789},{AP:35,SS:2.01286},{AP:37,SS:2.02223},{AP:38,SS:2.02664},{AP:41,SS:2.03874},{AP:44,SS:2.04916},{AP:47,SS:2.0579}
  ];
  let heavy = [
    {AP:0,SS:1.728},{AP:3,SS:1.87945},{AP:6,SS:1.9598},{AP:9,SS:2.0232},{AP:10,SS:2.04192},{AP:12,SS:2.07659},{AP:13,SS:2.09272},{AP:15,SS:2.12287},{AP:16,SS:2.137},{AP:18,SS:2.16358},{AP:19,SS:2.17609},{AP:20,SS:2.18812},{AP:21,SS:2.19969},{AP:22,SS:2.21082},{AP:23,SS:2.22154},{AP:24,SS:2.23184},{AP:25,SS:2.24176},{AP:26,SS:2.25131},{AP:27,SS:2.26049},{AP:28,SS:2.26933},{AP:29,SS:2.27782},{AP:30,SS:2.28598},{AP:31,SS:2.29382},{AP:32,SS:2.30135},{AP:33,SS:2.30856},{AP:34,SS:2.31548},{AP:35,SS:2.3221},{AP:36,SS:2.32844},{AP:37,SS:2.33449},{AP:38,SS:2.34027},{AP:39,SS:2.34577},{AP:41,SS:2.35596},{AP:42,SS:2.36067},{AP:44,SS:2.36931},{AP:45,SS:2.37324},{AP:47,SS:2.38038},{AP:48,SS:2.38357},{AP:51,SS:2.39172},{AP:54,SS:2.39772},{AP:57,SS:2.4}
  ];
  let heavyNinja = [
    {AP:0,SS:1.5552},{AP:3,SS:1.67344},{AP:6,SS:1.73616},{AP:9,SS:1.78565},{AP:10,SS:1.80027},{AP:12,SS:1.82734},{AP:13,SS:1.83992},{AP:15,SS:1.86346},{AP:16,SS:1.8745},{AP:18,SS:1.89525},{AP:19,SS:1.90501},{AP:20,SS:1.91441},{AP:21,SS:1.92344},{AP:22,SS:1.93213},{AP:23,SS:1.94049},{AP:24,SS:1.94854},{AP:25,SS:1.95628},{AP:26,SS:1.96373},{AP:27,SS:1.9709},{AP:28,SS:1.9778},{AP:29,SS:1.98443},{AP:31,SS:1.99692},{AP:32,SS:2.0028},{AP:34,SS:2.01383},{AP:35,SS:2.019},{AP:37,SS:2.02867},{AP:38,SS:2.03318},{AP:41,SS:2.04543},{AP:44,SS:2.05585},{AP:47,SS:2.06449},
  ];
  
  if (abilityName !== "ninjaSquid") {
    if (weight === "light") {
      for (let i=0; i < 40; i++) {
        if (light[i].AP === abilityPoint) {
          swimSpeed = Math.floor(light[i].SS * 100) / 100;
        }
      }
    } else if (weight === "middle") {
      for (let i=0; i < 40; i++) {
        if (middle[i].AP === abilityPoint) {
          swimSpeed = Math.floor(middle[i].SS * 100) / 100;
        }
      }
    } else if (weight === "heavy") {
      for (let i=0; i < 40; i++) {
        if (heavy[i].AP === abilityPoint) {
          swimSpeed = Math.floor(heavy[i].SS * 100) / 100;
        }
      }
    }
  } else {
    if (weight === "light") {
      for (let i=0; i < 30; i++) {
        if (lightNinja[i].AP === abilityPoint) {
          swimSpeed = Math.floor(lightNinja[i].SS * 100) / 100;
        }
      }
    } else if (weight === "middle") {
      for (let i=0; i < 30; i++) {
        if (middleNinja[i].AP === abilityPoint) {
          swimSpeed = Math.floor(middleNinja[i].SS * 100) / 100;
        }
      }
    } else if (weight === "heavy") {
      for (let i=0; i < 30; i++) {
        if (heavyNinja[i].AP === abilityPoint) {
          swimSpeed = Math.floor(heavyNinja[i].SS * 100) / 100;
        }
      }
    }
  }
  console.log(abilityPoint)
  return (
    <div className="ae-card border d-flex align-items-center">
      <div className="ability-icon ap-ability-icon">
        <img className="ap-ability-img" src={swimSpeedImg} alt=""/>
      </div>
      <div className="ae-text-md ability-effect">
        <p>イカ移動速度</p>
      </div>
      <div className="ae-colon-lg ability-effect">
        <p>:</p>
      </div>
      <div className="ae-effect ability-effect">
        <p>{swimSpeed} DU/F</p>
      </div>
    </div>
  )
}

export default SwimSpeed;