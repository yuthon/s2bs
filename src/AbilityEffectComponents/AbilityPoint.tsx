import { FC, ReactElement, useState } from 'react';
// コンポーネント
import InkSaverMain from './InkSaverMain';
import InkSaverSub from './InkSaverSub';
import InkRecovery from './InkRecovery';
import RunSpeed from './RunSpeed';
import SwimSpeed from './SwimSpeed';
import SpecialChargeUp from './SpecialChargeUp';
import SpecialSaver from './SpecialSaver';
import SpecialPower from './SpecialPower';
import QuickRespawn from './QuickRespawn';
import QuickSuperJump from './QuickSuperJump';
import SubPowerUp from './SubPowerUp';
import InkResistance from './InkResistance';
import BombDefenceUp from './BombDefenceUp';
import MainPowerUp from './MainPowerUp';
// アビリティの画像
import ComebackImg from '../images/ability/CB.png';
import LastDitchEffortImg from '../images/ability/LDE.png';
import OpeningGanbitImg from '../images/ability/OG.png';
import DropRollerImg from '../images/ability/DR.png';
import Tenacity from '../images/ability/Tenacity.png';
import ninjaSquid from '../images/ability/NS.png';
import haunt from '../images/ability/Haunt.png';
import respawnPunisher from '../images/ability/RP.png';
import thermalInk from '../images/ability/TI.png';
import abilityDoubler from '../images/ability/AD.png';
import stealthJump from '../images/ability/SJ.png';
import objectShredder from '../images/ability/OS.png';
import { WeaponType } from '../Type'
import { ToggleSwitch } from './toggleSwitch'
import AeCard from './AeCard';

interface AbilityPointProps {
  weapon: WeaponType,
  mainAbilityName0: string,
  mainAbilityName1: string,
  mainAbilityName2: string,
  subAbilityName0: string,
  subAbilityName1: string,
  subAbilityName2: string,
  subAbilityName3: string,
  subAbilityName4: string,
  subAbilityName5: string,
  subAbilityName6: string,
  subAbilityName7: string,
  subAbilityName8: string,
};

const AbilityPoint: FC<AbilityPointProps> = (props): ReactElement => {
  // 特殊な発動条件を持つギアパワーの発動のONOFFを管理
  const [isComebackActive, setIsComebackActive] = useState<boolean>(true);
  const [isOpeningGanbitActive, setIsOpeningGanbitActive] = useState<boolean>(true);
  const [isLastDitchEffortActive, setIsLastDitchEffortActive] = useState<boolean>(true);
  const [isDropRollerActive, setIsDropRollerActive] = useState<boolean>(true);
  
  const subAbilityName: Array<string> = [
    props.subAbilityName0, props.subAbilityName1, props.subAbilityName2,
    props.subAbilityName3, props.subAbilityName4, props.subAbilityName5,
    props.subAbilityName6, props.subAbilityName7, props.subAbilityName8
  ];
    
  const mainAbilityName: Array<string> = [
    props.mainAbilityName0, props.mainAbilityName1, props.mainAbilityName2,
  ];

  //メイン効率
  let inkSaverMainAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "インク効率アップ(メイン)") {
      inkSaverMainAP = inkSaverMainAP + 3
    }
    if (mainAbilityName[i] === "インク効率アップ(メイン)") {
      inkSaverMainAP = inkSaverMainAP + 10
    }
  }
  //サブ効率
  let inkSaverSubAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "インク効率アップ(サブ)") {
      inkSaverSubAP = inkSaverSubAP + 3;
    }
    if (mainAbilityName[i] === "インク効率アップ(サブ)") {
      inkSaverSubAP = inkSaverSubAP + 10;
    }
  }
  //インク回復
  let inkRecoveryAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "インク回復力アップ") {
      inkRecoveryAP = inkRecoveryAP + 3;
    }
    if (mainAbilityName[i] === "インク回復力アップ") {
      inkRecoveryAP = inkRecoveryAP + 10;
    }
  }
  //ヒト速度
  let runSpeedAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "ヒト移動速度アップ") {
      runSpeedAP = runSpeedAP + 3;
    }
    if (mainAbilityName[i] === "ヒト移動速度アップ") {
      runSpeedAP = runSpeedAP + 10;
    }
  }
  //イカ速度
  let swimSpeedAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "イカダッシュ速度アップ") {
      swimSpeedAP = swimSpeedAP + 3;
    }
    if (mainAbilityName[i] === "イカダッシュ速度アップ") {
      swimSpeedAP = swimSpeedAP + 10;
    }
  }
  //スぺ増
  let specialChargeAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "スペシャル増加量アップ") {
      specialChargeAP = specialChargeAP + 3;
    }
    if (mainAbilityName[i] === "スペシャル増加量アップ") {
      specialChargeAP = specialChargeAP + 10;
    }
  }
  //スぺ減
  let specialSaverAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "スペシャル減少量ダウン") {
      specialSaverAP = specialSaverAP + 3;
    }
    if (mainAbilityName[i] === "スペシャル減少量ダウン") {
      specialSaverAP = specialSaverAP + 10;
    }
  }
  //スぺ性
  let specialPowerAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "スペシャル性能アップ") {
      specialPowerAP = specialPowerAP + 3;
    }
    if (mainAbilityName[i] === "スペシャル性能アップ") {
      specialPowerAP = specialPowerAP + 10;
    }
  }
  //復活短縮
  let qrAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "復活時間短縮") {
      qrAP = qrAP + 3;
    }
    if (mainAbilityName[i] === "復活時間短縮") {
      qrAP = qrAP + 10;
    }
  }
  //スパ短
  let quickSuperJumpAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "スーパージャンプ時間短縮") {
      quickSuperJumpAP = quickSuperJumpAP + 3;
    }
    if (mainAbilityName[i] === "スーパージャンプ時間短縮") {
      quickSuperJumpAP = quickSuperJumpAP + 10;
    }
  }
  //サブ性能
  let subPowerAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "サブ性能アップ") {
      subPowerAP = subPowerAP + 3;
    }
    if (mainAbilityName[i] === "サブ性能アップ") {
      subPowerAP = subPowerAP + 10;
    }
  }
  //インク影響軽減
  let inkResAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "相手インク影響軽減") {
      inkResAP = inkResAP + 3;
    }
    if (mainAbilityName[i] === "相手インク影響軽減") {
      inkResAP = inkResAP + 10;
    }
  }
  //爆減
  let bombDefenceAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "爆風ダメージ軽減・改") {
      bombDefenceAP = bombDefenceAP + 3;
    }
    if (mainAbilityName[i] === "爆風ダメージ軽減・改") {
      bombDefenceAP = bombDefenceAP + 10;
    }
  }
  //メイン性能
  let mpuAP: number = 0;
  
  for (let i = 0; i < 9; i++) {
    if (subAbilityName[i] === "メイン性能アップ") {
      mpuAP = mpuAP + 3;
    }
    if (mainAbilityName[i] === "メイン性能アップ") {
      mpuAP = mpuAP + 10;
    }
  }
      
  // ボタンのonoffを切り替える関数
  const btnToggle = function(ability: string) {
    let target = document.getElementById(`switch-${ability}`);
    if (target!.className === "turned-on") {
      target!.className = "turned-off";
    } else {
      target!.className = "turned-on";
    }
  };
  
  // アタマのメインスロット
  let toggleComeback: ReactElement;
  let mainAbility0Effect: ReactElement;
  let toggleOpeningGanbit: ReactElement;
  let toggleLastDitchEffort: ReactElement;

  if (mainAbilityName[0] === "カムバック") {
    toggleComeback = (
      <ToggleSwitch 
        abilityName='comeback'
        btnToggle={btnToggle}
        isActive={isComebackActive}
        setIsActive={setIsComebackActive}
      />
    )
    if (isComebackActive) {
      // APを加算
      inkSaverMainAP = inkSaverMainAP + 10;
      inkSaverSubAP = inkSaverSubAP + 10;
      inkRecoveryAP = inkRecoveryAP + 10;
      runSpeedAP = runSpeedAP + 10;
      swimSpeedAP = swimSpeedAP + 10;
      specialChargeAP = specialChargeAP + 10;
      
    }
    // 最終的に表示するJSX
    mainAbility0Effect = (
      <AeCard
        abilityName='カムバック'
        imagePath={ComebackImg}
        toggleSwitch={toggleComeback}
        tooltipWidth='4.5rem'
        aeText='プレイヤーがやられて復帰した後の20秒間、一部の能力が上昇 : インク効率アップ(メイン)・インク効率アップ(サブ)・インク回復力アップ・イカ移動速度・ヒト移動速度'
      />
    );
  }
  // スタートダッシュ
  else if (mainAbilityName[0] === "スタートダッシュ") {
    toggleOpeningGanbit = (
      <ToggleSwitch 
        abilityName='openingGanbit'
        btnToggle={btnToggle}
        isActive={isOpeningGanbitActive}
        setIsActive={setIsOpeningGanbitActive}
      />
    )
    if (isOpeningGanbitActive) {
      // APを加算
      runSpeedAP = runSpeedAP + 30;
      swimSpeedAP = swimSpeedAP + 30;
      inkResAP = inkResAP + 30;
    }
    // 最終的に表示するJSX
    mainAbility0Effect = (
      <AeCard
        abilityName='スタートダッシュ'
        imagePath={OpeningGanbitImg}
        toggleSwitch={toggleOpeningGanbit!}
        tooltipWidth='6.5rem'
        aeText='バトル開始から30秒間、一部の能力がかなり上昇（イカ移動速度・ヒト移動速度・相手インク影響軽減）'
      />
    );
  }
  // ラストスパート
  else if (mainAbilityName[0] === "ラストスパート") {
    toggleLastDitchEffort = (
      <ToggleSwitch 
        abilityName='lastDitchEffort'
        btnToggle={btnToggle}
        isActive={isLastDitchEffortActive}
        setIsActive={setIsLastDitchEffortActive}
      />
    )
    if (isLastDitchEffortActive) {
      // APを加算
      inkSaverMainAP = inkSaverMainAP + 24;
      inkSaverSubAP = inkSaverSubAP + 24;
      inkRecoveryAP = inkRecoveryAP + 24;
    }
    // 最終的に表示するJSX
    mainAbility0Effect = (
      <AeCard 
        abilityName='ラストスパート'
        imagePath={LastDitchEffortImg}
        toggleSwitch={toggleLastDitchEffort!}
        tooltipWidth='6rem'
        aeText='試合時間が残り30秒、あるいは相手のオブジェクトのカウントが30になると一部の能力がかなり上昇（メインインク効率・サブインク効率・インク回復力アップ）'
      />
    );
  }
  // 逆境が選択されているとき
  else if (mainAbilityName[0] === "逆境強化") {
    mainAbility0Effect = (
      <AeCard 
        abilityName='逆境強化'
        imagePath={Tenacity}
        tooltipWidth='4rem'
        aeText='自チームの人数が相手チームより少ない場合、少しずつスペシャルゲージが増える（1人の人数不利につき、2.16ポイント/秒）'
      />
    )
  }
  // クツのメインスロット
  let mainAbility2Effect;
  let toggleDropRoller;

  if (mainAbilityName[2] === "受け身術") {
    toggleDropRoller = (
      <ToggleSwitch 
        abilityName='dropRoller'
        btnToggle={btnToggle}
        isActive={isDropRollerActive}
        setIsActive={setIsDropRollerActive}
      />
    )
    if (isDropRollerActive) {
      // APを加算
      runSpeedAP = runSpeedAP + 30;
      swimSpeedAP = swimSpeedAP + 30;
      inkResAP = inkResAP + 30;
    }
    // 最終的に表示するJSX
    mainAbility2Effect = (
      <AeCard 
        abilityName='受け身術'
        imagePath={DropRollerImg}
        toggleSwitch={toggleDropRoller!}
        tooltipWidth='4rem'
        aeText='受け身術を発動してから3秒間、一部のギアパワーが上昇する（イカ移動速度・ヒト移動速度・インク影響軽減）'
      />
    );
  } else if (mainAbilityName[2] === "ステルスジャンプ") {
    mainAbility2Effect = (
      <AeCard 
        abilityName='ステルスジャンプ'
        imagePath={stealthJump}
        tooltipWidth='7rem'
        aeText='スーパージャンプの着地点を示すマーカーが、はなれた場所から見えなくなる'
      />
    )
  } else if (mainAbilityName[2] === "対物攻撃力アップ") {
    mainAbility2Effect = (
      <AeCard 
        abilityName='対物攻撃力アップ'
        imagePath={objectShredder}
        tooltipWidth='7rem'
        aeText='プレイヤー以外の物体に対して攻撃したときのダメージを増やす'
      />
    )
  }
 
  // フクのメインスロット
  let mainAbility1Effect: ReactElement;

  if (mainAbilityName[1] === "イカニンジャ") {
    mainAbility1Effect = (
      <AeCard 
        abilityName='イカニンジャ'
        imagePath={ninjaSquid}
        tooltipWidth='5rem'
        aeText='地面をイカダッシュした時にインクが飛び散らなくなるが、移動速度が少しダウンする'
      />
    )
    } else if (mainAbilityName[1] === "リベンジ") {
    mainAbility1Effect = (
      <AeCard 
        abilityName='リベンジ'
        imagePath={haunt}
        tooltipWidth='4rem'
        aeText='復活したとき、直前に自分を倒した相手の位置が遠くから見えるようになる'
      />
    )
  } else if (mainAbilityName[1] === "復活ペナルティアップ") {
    mainAbility1Effect = (
      <AeCard 
        abilityName='復活ペナルティアップ'
        imagePath={respawnPunisher}
        tooltipWidth='8rem'
        aeText='自プレイヤーと倒した相手のスペシャル減少量と復活時間が増える'
      />
    )
  } else if (mainAbilityName[1] === "サーマルインク") {
    mainAbility1Effect = (
      <AeCard 
        abilityName='サーマルインク'
        imagePath={thermalInk}
        tooltipWidth='6rem'
        aeText='メインウェポンの弾を直接当てた相手が、しばらくの間、遠くから見えるようになる'
      />
    )
  } else if (mainAbilityName[1] === "追加ギアパワー倍化") {
    mainAbility1Effect = (
      <AeCard 
        abilityName='追加ギアパワー倍化'
        imagePath={abilityDoubler}
        tooltipWidth='6rem'
        aeText='このギアについている追加ギアパワーを1つで2コ分の効果にする'
      />
    )
  } 

   // APの上限は57なので特殊ギアによってそれ以上になった場合は強制的に57にする
  if (inkSaverMainAP > 57) {
    inkSaverMainAP = 57;
  }
  if (inkSaverSubAP > 57) {
    inkSaverSubAP = 57;
  }
  if (inkRecoveryAP > 57) {
    inkRecoveryAP = 57;
  }
  if (runSpeedAP > 57) {
    runSpeedAP = 57;
  }
  if (swimSpeedAP > 57) {
    swimSpeedAP = 57;
  } 
  if (inkResAP > 57) {
    inkResAP = 57;
  }
  
  return(
    <div className="d-flex flex-column gray-stripe-dense" id="ae-display-area">
      <p id="ae-header">ギアパワー効果</p>
      <div className="special-ability">
        {mainAbility0Effect!}
        {mainAbility1Effect!}
        {mainAbility2Effect}
      </div>
      <InkSaverMain 
        abilityPoint={inkSaverMainAP}
        weapon={props.weapon}
      />
      <InkSaverSub 
        abilityPoint={inkSaverSubAP}
        weapon={props.weapon}
      />  
      <InkRecovery 
        abilityPoint={inkRecoveryAP}
      />
      <RunSpeed 
        abilityPoint={runSpeedAP}
        weapon={props.weapon}
      /> 
      <SwimSpeed
        abilityPoint={swimSpeedAP}
        weapon={props.weapon}
        abilityName={mainAbilityName[1]}
      />
      <SpecialChargeUp 
        abilityPoint={specialChargeAP}
        weapon={props.weapon}
      />
      <SpecialSaver 
        abilityPoint={specialSaverAP}
        weapon={props.weapon}
        abilityName={mainAbilityName[1]}
      />
      <SpecialPower
        abilityPoint={specialPowerAP}
        weapon={props.weapon}
      />
      <QuickRespawn 
        abilityPoint={qrAP}
        abilityName={mainAbilityName[1]}
      />
      <QuickSuperJump 
        abilityPoint={quickSuperJumpAP}
      />
      <SubPowerUp 
        SPUabilityPoint={subPowerAP}
        QSJabilityPoint={quickSuperJumpAP}
        weapon={props.weapon}
      />
      <BombDefenceUp 
        abilityPoint={bombDefenceAP}
      />
      <InkResistance 
        abilityPoint={inkResAP}
      />
      <MainPowerUp
        abilityPoint={mpuAP}
        weapon={props.weapon}
      />
    </div>
  );
};

export default AbilityPoint;