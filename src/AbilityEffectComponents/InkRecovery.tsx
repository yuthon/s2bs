import { FC, ReactElement } from 'react';
import inkRecoveryImg from '../images/ability/REC.png';
import { recoveryInInk, recoveryStanding } from './abilityEffect-data';
import AePart from './AePart';

type InkRecoveryProps = {
  abilityPoint: number
};

const InkRecovery: FC<InkRecoveryProps> = ({ abilityPoint }): ReactElement => {
  let frameInInk: number;
  let secondInInk: number;
  let frameStanding: number;
  let secondStanding: number;
  
  for (let i=0; i < 40; i++) {
    if (recoveryInInk[i].AP === abilityPoint) {
      frameInInk = recoveryInInk[i].frame;
      secondInInk = recoveryInInk[i].second;
      frameStanding = recoveryStanding[i].frame;
      secondStanding = recoveryStanding[i].second;
    }
  }
  
  return (
    <div className="ae-card row">
      <div className="ap-icon-area col-1">
        <div className="ability-icon ap-ability-icon">
          <p className="ability-detail-tooltip" style={{width: "20.5rem" }}>インク回復力アップ : インクタンク回復速度がアップします。</p>
          <img className="ap-ability-img" src={inkRecoveryImg} alt=""/>
        </div>
      </div>
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='インクタンク100%までの時間（自インク内でイカ状態）'
          aeEffect={`${frameInInk!} F （${secondInInk!} 秒）`}
        />
        <AePart
          aeText='インクタンク100%までの時間（ヒト状態）'
          aeEffect={`${frameStanding!} F （${secondStanding!} 秒）`}
        />
      </div>
    </div>
  );
}

export default InkRecovery;