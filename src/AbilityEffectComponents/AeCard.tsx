import { ReactElement, FC } from "react";

interface AeCardProps {
  imagePath: string;
  tooltipWidth: string;
  tooltipText: string;
  children: ReactElement
} 

const AeCard: FC<AeCardProps> = (props): ReactElement => {
  return (
    <div className="ae-card row border-0">
      <div className="ap-icon-area col-1">  
        <div className="ability-icon ap-ability-icon">
          <p className="ability-detail-tooltip-2" style={{width: props.tooltipWidth }}>{props.tooltipText}</p>
          <img className="ap-ability-img" src={props.imagePath} alt=""/>
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default AeCard;