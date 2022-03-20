import specialChargeImg from '../images/ability/SCU.png';

const SpecialChargeUp = (props) => {
  let specialPoints;
  let abilityPoint = props.abilityPoint;
  let sp = props.weaponStatus.sp
  
  let points150 = [
    {AP:0,SP:150},{AP:3,SP:146},{AP:6,SP:142},{AP:9,SP:139},{AP:10,SP:138},{AP:12,SP:136},{AP:13,SP:135},{AP:15,SP:133},{AP:16,SP:132},{AP:18,SP:131},{AP:19,SP:130},{AP:20,SP:129},{AP:21,SP:128},{AP:22,SP:128},{AP:23,SP:127},{AP:24,SP:126},{AP:25,SP:126},{AP:26,SP:125},{AP:27,SP:125},{AP:28,SP:124},{AP:29,SP:124},{AP:30,SP:123},{AP:31,SP:123},{AP:32,SP:122},{AP:33,SP:122},{AP:34,SP:121},{AP:35,SP:121},{AP:36,SP:120},{AP:37,SP:120},{AP:38,SP:120},{AP:39,SP:119},{AP:41,SP:119},{AP:42,SP:118},{AP:44,SP:118},{AP:45,SP:118},{AP:47,SP:117},{AP:48,SP:117},{AP:51,SP:116},{AP:54,SP:116},{AP:57,SP:116}
  ];
  let points160 = [
    {AP:0,SP:160},{AP:3,SP:156},{AP:6,SP:152},{AP:9,SP:148},{AP:10,SP:147},{AP:12,SP:145},{AP:13,SP:144},{AP:15,SP:142},{AP:16,SP:141},{AP:18,SP:139},{AP:19,SP:139},{AP:20,SP:138},{AP:21,SP:137},{AP:22,SP:136},{AP:23,SP:136},{AP:24,SP:135},{AP:25,SP:134},{AP:26,SP:134},{AP:27,SP:133},{AP:28,SP:132},{AP:29,SP:132},{AP:30,SP:131},{AP:31,SP:131},{AP:32,SP:130},{AP:33,SP:130},{AP:34,SP:129},{AP:35,SP:129},{AP:36,SP:128},{AP:37,SP:128},{AP:38,SP:128},{AP:39,SP:127},{AP:41,SP:127},{AP:42,SP:126},{AP:44,SP:126},{AP:45,SP:125},{AP:47,SP:125},{AP:48,SP:125},{AP:51,SP:124},{AP:54,SP:124},{AP:57,SP:124}
  ];
  let points170 = [
    {AP:0,SP:170},{AP:3,SP:166},{AP:6,SP:161},{AP:9,SP:158},{AP:10,SP:156},{AP:12,SP:154},{AP:13,SP:153},{AP:15,SP:151},{AP:16,SP:150},{AP:18,SP:148},{AP:19,SP:147},{AP:20,SP:146},{AP:21,SP:146},{AP:22,SP:145},{AP:23,SP:144},{AP:24,SP:143},{AP:25,SP:143},{AP:26,SP:142},{AP:27,SP:141},{AP:28,SP:141},{AP:29,SP:140},{AP:30,SP:139},{AP:31,SP:139},{AP:32,SP:138},{AP:33,SP:138},{AP:34,SP:137},{AP:35,SP:137},{AP:36,SP:136},{AP:37,SP:136},{AP:38,SP:136},{AP:39,SP:135},{AP:41,SP:134},{AP:42,SP:134},{AP:44,SP:133},{AP:45,SP:133},{AP:47,SP:133},{AP:48,SP:132},{AP:51,SP:132},{AP:54,SP:131},{AP:57,SP:131}
  ];
  let points180 = [
    {AP:0,SP:180},{AP:3,SP:175},{AP:6,SP:171},{AP:9,SP:167},{AP:10,SP:166},{AP:12,SP:163},{AP:13,SP:162},{AP:15,SP:160},{AP:16,SP:159},{AP:18,SP:157},{AP:19,SP:156},{AP:20,SP:155},{AP:21,SP:154},{AP:22,SP:153},{AP:23,SP:152},{AP:24,SP:152},{AP:25,SP:151},{AP:26,SP:150},{AP:27,SP:149},{AP:28,SP:149},{AP:29,SP:148},{AP:30,SP:148},{AP:31,SP:147},{AP:32,SP:146},{AP:33,SP:146},{AP:34,SP:145},{AP:35,SP:145},{AP:36,SP:144},{AP:37,SP:144},{AP:38,SP:143},{AP:39,SP:143},{AP:41,SP:142},{AP:42,SP:142},{AP:44,SP:141},{AP:45,SP:141},{AP:47,SP:140},{AP:48,SP:140},{AP:51,SP:140},{AP:54,SP:139},{AP:57,SP:139}  
  ];
  let points190 = [
    {AP:0,SP:190},{AP:3,SP:185},{AP:6,SP:180},{AP:9,SP:176},{AP:10,SP:175},{AP:12,SP:172},{AP:13,SP:171},{AP:15,SP:169},{AP:16,SP:168},{AP:18,SP:165},{AP:19,SP:164},{AP:20,SP:164},{AP:21,SP:163},{AP:22,SP:162},{AP:23,SP:161},{AP:24,SP:160},{AP:25,SP:159},{AP:26,SP:158},{AP:27,SP:158},{AP:28,SP:157},{AP:29,SP:156},{AP:30,SP:156},{AP:31,SP:155},{AP:32,SP:154},{AP:33,SP:154},{AP:34,SP:153},{AP:35,SP:153},{AP:36,SP:152},{AP:37,SP:152},{AP:38,SP:151},{AP:39,SP:151},{AP:41,SP:150},{AP:42,SP:150},{AP:44,SP:149},{AP:45,SP:149},{AP:47,SP:148},{AP:48,SP:148},{AP:51,SP:147},{AP:54,SP:147},{AP:57,SP:147}
  ];
  let points200 = [
    {AP:0,SP:200},{AP:3,SP:195},{AP:6,SP:190},{AP:9,SP:185},{AP:10,SP:184},{AP:12,SP:181},{AP:13,SP:180},{AP:15,SP:177},{AP:16,SP:176},{AP:18,SP:174},{AP:19,SP:173},{AP:20,SP:172},{AP:21,SP:171},{AP:22,SP:170},{AP:23,SP:169},{AP:24,SP:168},{AP:25,SP:168},{AP:26,SP:167},{AP:27,SP:166},{AP:28,SP:165},{AP:29,SP:165},{AP:30,SP:164},{AP:31,SP:163},{AP:32,SP:163},{AP:33,SP:162},{AP:34,SP:161},{AP:35,SP:161},{AP:36,SP:160},{AP:37,SP:160},{AP:38,SP:159},{AP:39,SP:159},{AP:41,SP:158},{AP:42,SP:158},{AP:44,SP:157},{AP:45,SP:157},{AP:47,SP:156},{AP:48,SP:156},{AP:51,SP:155},{AP:54,SP:155},{AP:57,SP:154}
  ];
  let points210 = [
    {AP:0,SP:210},{AP:3,SP:205},{AP:6,SP:199},{AP:9,SP:194},{AP:10,SP:193},{AP:12,SP:190},{AP:13,SP:189},{AP:15,SP:186},{AP:16,SP:185},{AP:18,SP:183},{AP:19,SP:182},{AP:20,SP:181},{AP:21,SP:180},{AP:22,SP:179},{AP:23,SP:178},{AP:24,SP:177},{AP:25,SP:176},{AP:26,SP:175},{AP:27,SP:174},{AP:28,SP:174},{AP:29,SP:173},{AP:30,SP:172},{AP:31,SP:171},{AP:32,SP:171},{AP:33,SP:170},{AP:34,SP:169},{AP:35,SP:169},{AP:36,SP:168},{AP:37,SP:168},{AP:38,SP:167},{AP:39,SP:167},{AP:41,SP:166},{AP:42,SP:165},{AP:44,SP:165},{AP:45,SP:164},{AP:47,SP:164},{AP:48,SP:163},{AP:51,SP:163},{AP:54,SP:162},{AP:57,SP:162}
  ];
  let points220 = [
    {AP:0,SP:220},{AP:3,SP:214},{AP:6,SP:209},{AP:9,SP:204},{AP:10,SP:202},{AP:12,SP:199},{AP:13,SP:198},{AP:15,SP:195},{AP:16,SP:194},{AP:18,SP:191},{AP:19,SP:190},{AP:20,SP:189},{AP:21,SP:188},{AP:22,SP:187},{AP:23,SP:186},{AP:24,SP:185},{AP:25,SP:184},{AP:26,SP:183},{AP:27,SP:183},{AP:28,SP:182},{AP:29,SP:181},{AP:30,SP:180},{AP:31,SP:179},{AP:32,SP:179},{AP:33,SP:178},{AP:34,SP:177},{AP:35,SP:177},{AP:36,SP:176},{AP:37,SP:176},{AP:38,SP:175},{AP:39,SP:175},{AP:41,SP:174},{AP:42,SP:173},{AP:44,SP:173},{AP:45,SP:172},{AP:47,SP:172},{AP:48,SP:171},{AP:51,SP:170},{AP:54,SP:170},{AP:57,SP:170}
  ];
  
  if (sp === 150) {
    for (let i = 0; i < 40; i++) {
      if (points150[i].AP === abilityPoint) {
        specialPoints = points150[i].SP;
      }
    }
  } else if (sp === 160) {
    for (let i = 0; i < 40; i++) {
      if (points160[i].AP === abilityPoint) {
        specialPoints = points160[i].SP;
      }
    }
  } else if (sp === 170) {
    for (let i = 0; i < 40; i++) {
      if (points170[i].AP === abilityPoint) {
        specialPoints = points170[i].SP;
      }
    }
  } else if (sp === 180) {
    for (let i = 0; i < 40; i++) {
      if (points180[i].AP === abilityPoint) {
        specialPoints = points180[i].SP;
      }
    }
  } else if (sp === 190) {
    for (let i = 0; i < 40; i++) {
      if (points190[i].AP === abilityPoint) {
        specialPoints = points190[i].SP;
      }
    }
  } else if (sp === 200) {
    for (let i = 0; i < 40; i++) {
      if (points200[i].AP === abilityPoint) {
        specialPoints = points200[i].SP;
      }
    }
  } else if (sp === 210) {
    for (let i = 0; i < 40; i++) {
      if (points210[i].AP === abilityPoint) {
        specialPoints = points210[i].SP;
      }
    }
  } else if (sp === 220) {
    for (let i = 0; i < 40; i++) {
      if (points220[i].AP === abilityPoint) {
        specialPoints = points220[i].SP;
      }
    }
  }
  
  return (
    <div className="ae-card border row">
      <div className="col-lg-2 px-0 my-auto">
        <div className="ability-icon ap-ability-icon">
          <img className="ap-ability-img" src={specialChargeImg} alt=""/>
        </div>
      </div>
      <div className="ae-part col-lg-10 row">
        <div className="col-6 px-0 m-auto">
          <p className="ae-text-single">スペシャル必要ポイント</p>
        </div>
        <p className="col-2 ae-colon-single">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{specialPoints} ポイント</p>
        </div>
      </div>
    </div>
  )
};

export default SpecialChargeUp;