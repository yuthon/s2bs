export interface WeaponType {
  name: string;
  sub: string;
  special: string;
  sp: number;
  weight: string;
  path: string;
  pathSub: string;
  pathSpecial: string;
}

export interface RunSpeedProps {
  abilityPoint: number;
  weapon: WeaponType;
}

export interface RunSpeedStat {
  AP: number;
  RS: number;
}

export interface SpecialChargeUpProps {
  abilityPoint: number;
  weapon: WeaponType;
}

export interface SpecialPowerProps {
  abilityPoint: number;
  weapon: WeaponType;
}

export interface SpecialSaverProps {
  abilityPoint: number;
  weapon: WeaponType;
  abilityName: string;
}

export interface SubPowerUpProps {
  SPUabilityPoint: number;
  QSJabilityPoint: number;
  weapon: WeaponType;
}

export interface SwimSpeedProps {
  abilityPoint: number;
  weapon: WeaponType;
  abilityName: string;
}

export interface SwimSpeedStat {
  AP: number;
  SS: number;
}