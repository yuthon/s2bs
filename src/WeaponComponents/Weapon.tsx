import React, { FC, ReactElement } from 'react';
import { Text } from "../languages/Text";

type WeaponType = {
  name: string,
  sub: string,
  special: string,
  sp: number,
  weight: string,
  path: string,
  pathSub: string,
  pathSpecial: string
};

type WeaponProps = {
  weapon: WeaponType
}

const Weapon: FC<WeaponProps> = ({ weapon }): ReactElement => {
  return (
    <div className="mb-2" id="weapon-card">
      <div className="row">
        <div className="col-5" data-bs-toggle="modal" data-bs-target="#weaponModal" id="weaponModal-trigger">
          <img style={{width:"8rem", height:"8rem"}} src={weapon.path} alt=""/>
          <p className="weaponModal-tooltip font-type2"><Text tid="changeWeapon"/></p>
        </div>
        <div className="col-7 py-2">
          <div className="weapon-sub-sp row">
            <div className="col-2">  
              <img src={weapon.pathSub} alt=""/>
            </div>
            <p className="h5 text-white col-10">{weapon.sub}</p>
          </div>
          <div className="weapon-sub-sp row my-1">
            <div className="col-2">  
              <img src={weapon.pathSpecial} alt=""/>
            </div>
            <p className="h5 text-white col-10">{weapon.special}</p>
          </div>
        </div>
      </div>
      <p className="h5 my-0 font-type1" id="weapon-footer">{weapon.name}</p>
    </div>
  );
};

export default Weapon;