import React, { FC, ReactElement } from 'react';

type GearType = {
  name: string,
  path: string,
  id: string,
  brand: string,
  default: string
}

type GearIconProps = {
  setGear: React.Dispatch<React.SetStateAction<GearType>>,
  gear: {name: string, path: string, id: string, brand: string, default: string},
  brandImgPath: string,
}

const GearIcon: FC<GearIconProps> = ({ setGear, gear, brandImgPath }): ReactElement => {
  return (
    <div
      className="gear-icon"
      onClick={()=>{
        setGear(gear);
        }
      }
    > 
      <div className="tooltip-container">
        <p className="gear-icon-tooltip font-type2">{gear.name}</p>
      </div>
      <img className="brand-img-small" src={brandImgPath} alt=""/>
      <img className="gear-icon-img" src={gear.path} alt=""/>
    </div>
  )
}

export default GearIcon;