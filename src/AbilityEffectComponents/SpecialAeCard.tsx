import { ReactElement, FC } from "react";

interface AeCardProps{
  abilityName: string;
  imagePath: string;
  toggleSwitch?: ReactElement;
  tooltipWidth: string;
  aeText: string;
}

const SpecialAeCard:FC<AeCardProps> = (props) => {
  return props.toggleSwitch ? (
    <div className="ae-card row">
      <div className="ap-icon-area col-2">
        <div className="ability-icon ap-ability-icon">
        <p className="ability-detail-tooltip" style={{width: props.tooltipWidth }}>{props.abilityName}</p>
          <img className="ap-ability-img" src={props.imagePath} alt="ギアパワー画像"/>
        </div>
      </div>
      <div className="ae-part col-10 row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">{props.aeText}</p>
        </div>
        <div className="col-5 m-auto">
          {props.toggleSwitch}
        </div>
      </div>
    </div>
  ) : (
    <div className="ae-card row">
      <div className="ap-icon-area col-1">
        <div className="ability-icon ap-ability-icon">
          <p className="ability-detail-tooltip" style={{width: props.tooltipWidth }}>{props.abilityName}</p>
          <img className="ap-ability-img" src={props.imagePath} alt="ギアパワー画像"/>
        </div>
      </div>
      <div className="ae-part col-11">
        <p className="ae-text text-center">{props.aeText}</p>
      </div>
    </div>
  )
}

export default SpecialAeCard;