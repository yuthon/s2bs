import React, { FC, ReactElement } from 'react';
import mpuImg from '../images/ability/MPU.png';
import { mainPowerUp } from './ability-effect-data/mainPowerUp';
import AeCard from './AeCard';
import AePart from './AePart';

interface WeaponType {
  name: string,
  sub: string,
  special: string,
  sp: number,
  weight: string,
  path: string,
  pathSub: string,
  pathSpecial: string
}

interface MainPowerUpProps {
  abilityPoint: number,
  weapon: WeaponType
}

const MainPowerUp: FC<MainPowerUpProps> = React.memo(({ abilityPoint, weapon }): ReactElement => {
  let name: string = weapon.name;
  
  let damage: number;
  // let damageInPercent;
  let damageFar: number;
  // let damageFarInPercent;
  let rng: number;
  let rngInPercent: number;
  let rngJump: number;
  let rngJumpInPercent: number;
  let paintRadius: number;
  let explosionHitbox: number;
  let initVelocityRate: number;
  let inkTrailWidth: number;
  let movementSpeed: number;
  let range: number;
  let inkCoverage: number;
  let recorveryFrame: number;
  let recorverySecond: number;
  let hp: number;
  let element: ReactElement;
  // let damageHeightStart;
  // let damageHeightFinish;
  let fullDamageHeight: number;
  // let shootingFrame;
  let bullets: number;
  let extraBullets: number;
  // let extraHP;
  
  if (name.includes("ボールドマーカー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Sploosh[i].AP === abilityPoint) {
        damage = mainPowerUp.Sploosh[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / 38 *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("シャープマーカー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Splash[i].AP === abilityPoint) {
        damage = mainPowerUp.Splash[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Splash[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("わかば") || name.includes("もみじ") || name.includes("おちば")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Jr[i].AP === abilityPoint) {
        paintRadius = Math.floor(mainPowerUp.Jr[i].PR / mainPowerUp.Jr[0].PR * 10000) / 100;
      }
    }
    element = (
      <AePart
        aeText='塗り範囲'
        aeEffect={`${paintRadius!} ％`}
        col='col-11'
      />
    );
  } else if (name.includes("プロモデラー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Aerospray[i].AP === abilityPoint) {
        paintRadius = Math.floor(mainPowerUp.Aerospray[i].PR / mainPowerUp.Aerospray[0].PR * 10000) / 100;
      }
    }
    element = (
      <AePart
        aeText='塗り範囲'
        aeEffect={`${paintRadius!} ％`}
        col='col-11'
      />
    );
  } else if (name.includes("スプラシューター") || name.includes("ヒーローシューター") || name.includes("オクタシューター")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.SplatterShot[i].AP === abilityPoint) {
        rng = mainPowerUp.SplatterShot[i].DR;
        rngJump = mainPowerUp.SplatterShot[i].DRJ;
      }
    }
    rngInPercent = Math.floor(rng! / mainPowerUp.SplatterShot[0].DR * 10000) / 100;
    rngJumpInPercent = Math.floor(rngJump! / mainPowerUp.SplatterShot[0].DRJ * 10000) / 100;
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='弾の拡散（歩き撃ち）'
          aeEffect={`${rngInPercent!} ％`}
        />
        <AePart
          aeText='弾の拡散（ジャンプ撃ち）'
          aeEffect={`${rngJumpInPercent!} ％`}
        />
      </div>
    );
  } else if (name.includes("52ガロン")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Gal52[i].AP === abilityPoint) {
        rng = mainPowerUp.Gal52[i].DR;
        rngJump = mainPowerUp.Gal52[i].DRJ
      }
    }
    rngInPercent = Math.floor(rng! / mainPowerUp.Gal52[0].DR * 100000) / 1000;
    rngJumpInPercent = Math.floor(rngJump! / mainPowerUp.Gal52[0].DRJ * 100000) / 1000;
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='弾の拡散（歩き撃ち）'
          aeEffect={`${rngInPercent!} ％`}
        />
        <AePart
          aeText='弾の拡散（ジャンプ撃ち）'
          aeEffect={`${rngJumpInPercent!} ％`}
        />
      </div>
    );
  } else if (name.includes("N-ZAP")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Nzap[i].AP === abilityPoint) {
        rng = mainPowerUp.Nzap[i].DR;
        paintRadius = Math.floor(mainPowerUp.Nzap[i].PR / mainPowerUp.Nzap[0].PR * 100000) / 1000;
      }
    }
    rngInPercent = Math.floor(rng! / mainPowerUp.Nzap[0].DR * 100000) / 1000;
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='弾の拡散（歩き撃ち）'
          aeEffect={`${rngInPercent!} ％`}
        />
        <AePart
          aeText='塗り範囲'
          aeEffect={`${paintRadius!} ％`}
        />
      </div>
    );
  } else if (name.includes("プライムシューター")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Pro[i].AP === abilityPoint) {
        damage = mainPowerUp.Pro[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Pro[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("ジェットスイーパー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Jet[i].AP === abilityPoint) {
        rng = mainPowerUp.Jet[i].DR;
        initVelocityRate = Math.floor(mainPowerUp.Jet[i].IVR * 10000) / 100;
      }
    }
    rngInPercent = Math.floor(rng! / mainPowerUp.Jet[0].DR * 100000) / 1000;
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='弾の拡散（歩き撃ち）'
          aeEffect={`${rngInPercent!} ％`}
        />
        <AePart
          aeText='弾の初速と射程'
          aeEffect={`${initVelocityRate!} ％`}
        />
      </div>
    );
  } else if (name.includes("96ガロン")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Gal96[i].AP === abilityPoint) {
        damage = mainPowerUp.Gal96[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Gal96[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("ノヴァブラスター")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Luna[i].AP === abilityPoint) {
        paintRadius = Math.floor(mainPowerUp.Luna[i].PR / mainPowerUp.Luna[0].PR * 10000) / 100;
        explosionHitbox = Math.floor(28.01 / mainPowerUp.Luna[0].EH * mainPowerUp.Luna[i].EH * 100) / 100;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='塗り範囲'
          aeEffect={`${paintRadius!} ％`}
        />
        <AePart
          aeText='爆風全体に対する70ダメージ爆風の大きさ'
          aeEffect={`${explosionHitbox!} ％`}
        />
      </div>
    );
  } else if (name.includes("ホットブラスター") || name.includes("ヒーローブラスター")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Blaster[i].AP === abilityPoint) {
        rngJump = mainPowerUp.Blaster[i].DRJ;
      }
    }
    rngJumpInPercent = Math.floor(rngJump! / mainPowerUp.Blaster[0].DRJ * 10000) / 100;
    element = (
      <AePart
        aeText='弾の拡散（ジャンプ撃ち）'
        aeEffect={`${rngJumpInPercent!} ％`}
        col='col11'
      />
    );
    } else if (name.includes("ロングブラスター")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Range[i].AP === abilityPoint) {
        rngJump = mainPowerUp.Range[i].DRJ;
      }
    }
    rngJumpInPercent = Math.floor(rngJump! / mainPowerUp.Range[0].DRJ * 10000) / 100;
    element = (
      <AePart
        aeText='弾の拡散（ジャンプ撃ち）'
        aeEffect={`${rngJumpInPercent!} ％`}
        col='col11'
      />
    );
  } else if (name.includes("クラッシュブラスター")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Clash[i].AP === abilityPoint) {
        rngJump = mainPowerUp.Clash[i].DRJ;
      }
    }
    rngJumpInPercent = Math.floor(rngJump! / mainPowerUp.Clash[0].DRJ * 10000) / 100;
    element = (
      <AePart
        aeText='弾の拡散（ジャンプ撃ち）'
        aeEffect={`${rngJumpInPercent!} ％`}
        col='col11'
      />
    );
  } else if (name.includes("ラピッドブラスター")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Rapid[i].AP === abilityPoint) {
        rngJump = mainPowerUp.Rapid[i].DRJ;
        explosionHitbox = Math.floor(mainPowerUp.Rapid[i].EH / mainPowerUp.Rapid[0].EH * 10000) / 100;
      }
    }
    rngJumpInPercent = Math.floor(rngJump! / mainPowerUp.Rapid[0].DRJ * 10000) / 100;
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='弾の拡散（ジャンプ撃ち）'
          aeEffect={`${rngJumpInPercent!} ％`}
        />
        <AePart
          aeText='爆風の範囲'
          aeEffect={`${explosionHitbox!} ％`}
        />
      </div>
    );
  } else if (name.includes("Rブラスター")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.RapidPro[i].AP === abilityPoint) {
        rngJump = mainPowerUp.RapidPro[i].DRJ;
        explosionHitbox = Math.floor(mainPowerUp.Rapid[i].EH / mainPowerUp.RapidPro[0].EH * 10000) / 100;
      }
    }
    rngJumpInPercent = Math.floor(rngJump! / mainPowerUp.RapidPro[0].DRJ * 10000) / 100;
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='弾の拡散（ジャンプ撃ち）'
          aeEffect={`${rngJumpInPercent!} ％`}
        />
        <AePart
          aeText='爆風の範囲'
          aeEffect={`${explosionHitbox!} ％`}
        />
      </div>
    );
  } else if (name.includes("L-3")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.L3[i].AP === abilityPoint) {
        damage = mainPowerUp.L3[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / L3[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("H-3")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.H3[i].AP === abilityPoint) {
        damage = mainPowerUp.H3[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / H3[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("ボトルカイザー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Squeezer[i].AP === abilityPoint) {
        damage = mainPowerUp.Squeezer[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Squeezer[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("スプラローラー") || name.includes("ヒーローローラー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.SplatRoller[i].AP === abilityPoint) {
        damage = Math.floor(mainPowerUp.SplatRoller[i].DMG * 100000) / 1000;
      }
    }
    element = (
      <AePart
        aeText='ダメージ'
        aeEffect={`${damage!} ％`}
        col='col-11'
      />
    );
  } else if (name.includes("カーボン")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Carbon[i].AP === abilityPoint) {
        damage = Math.floor(mainPowerUp.Carbon[i].DMG * 100000) / 1000;
      }
    }
    element = (
      <AePart
        aeText='ダメージ'
        aeEffect={`${damage!} ％`}
        col='col-11'
      />
    );
  } else if (name.includes("ヴァリアブルローラー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Flingza[i].AP === abilityPoint) {
        damage = Math.floor(mainPowerUp.Flingza[i].DMG * 100000) / 1000;
      }
    }
    element = (
      <AePart
        aeText='ダメージ'
        aeEffect={`${damage!} ％`}
        col='col-11'
      />
    );
  } else if (name.includes("ダイナモローラー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Dynamo[i].AP === abilityPoint) {
        damage = Math.floor(mainPowerUp.Dynamo[i].DMG * 100000) / 1000;
      }
    }
    element = (
      <AePart
        aeText='ダメージ'
        aeEffect={`${damage!} ％`}
        col='col-11'
      />
    );
  } else if (name.includes("ホクサイ") || name.includes("ヒーローブラシ")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Octobrush[i].AP === abilityPoint) {
        inkTrailWidth = Math.floor(mainPowerUp.Octobrush[i].ITW * 100000) / 1000;
        movementSpeed = Math.floor(mainPowerUp.Octobrush[i].MS / mainPowerUp.Octobrush[0].MS * 100000) / 1000;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='塗り進みのインクの太さ'
          aeEffect={`${inkTrailWidth!} ％`}
        />
        <AePart
          aeText='塗り進みの移動速度'
          aeEffect={`${movementSpeed!} ％`}
        />
      </div>
    );
  } else if (name.includes("パブロ")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Inkbrush[i].AP === abilityPoint) {
        inkTrailWidth = Math.floor(mainPowerUp.Inkbrush[i].ITW * 100000) / 1000;
        movementSpeed = Math.floor(mainPowerUp.Inkbrush[i].MS / mainPowerUp.Inkbrush[0].MS * 100000) / 1000;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='塗り進みのインクの太さ'
          aeEffect={`${inkTrailWidth!} ％`}
        />
        <AePart
          aeText='塗り進みの移動速度'
          aeEffect={`${movementSpeed!} ％`}
        />
      </div>
    );
  } else if (name.includes("スプラチャージャー") || name.includes("スプラスコープ") || name.includes("ヒーローチャージャー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Charger[i].AP === abilityPoint) {
        damage = mainPowerUp.Charger[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Charger[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='ダメージ（フルチャージ）'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("スクイックリン")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Squiffer[i].AP === abilityPoint) {
        paintRadius = Math.floor(mainPowerUp.Squiffer[i].IC / mainPowerUp.Squiffer[0].IC * 100000) / 1000;
        range = Math.floor(mainPowerUp.Squiffer[i].range / mainPowerUp.Squiffer[0].range * 100000) / 1000;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='塗りの太さ'
          aeEffect={`${paintRadius!} ％`}
        />
        <AePart
          aeText='射程'
          aeEffect={`${range!} ％`}
        />
      </div>
    );
  } else if (name.includes("リッター") || name.includes("4Kスコープ")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Eliter[i].AP === abilityPoint) {
        paintRadius = Math.floor(mainPowerUp.Eliter[i].IC / mainPowerUp.Eliter[0].IC * 100000) / 1000;
        range = Math.floor(mainPowerUp.Eliter[i].range / mainPowerUp.Eliter[0].range * 100000) / 1000;
      }
    }
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='塗りの太さ'
          aeEffect={`${paintRadius!} ％`}
        />
        <AePart
          aeText='射程'
          aeEffect={`${range!} ％`}
        />
      </div>
    );
  } else if (name.includes("竹")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Bamboo[i].AP === abilityPoint) {
        damage = mainPowerUp.Bamboo[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Bamboo[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='ダメージ（フルチャージ）'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("ソイチューバー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Gootuber[i].AP === abilityPoint) {
        damage = mainPowerUp.Gootuber[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Gootuber[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='ダメージ（フルチャージ）'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("バケットスロッシャー") || name.includes("ヒーロースロッシャー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Slosher[i].AP === abilityPoint) {
        // damageHeightStart = Math.floor(Slosher[i].height / Slosher[0].height * 100000) / 1000;
        // damageHeightFinish = Math.floor(Slosher[i].heightDown / Slosher[0].heightDown * 100000) / 1000;
        fullDamageHeight = Math.floor(mainPowerUp.Slosher[i].height / mainPowerUp.Slosher[0].height * 100000) / 1000;
      }
    }
    element = (
      <AePart
        aeText='高低差によってダメージが減衰しない範囲'
        aeEffect={`${fullDamageHeight!} ％`}
        col='col-11'
      />
    );
  } else if (name.includes("ヒッセン")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Tri[i].AP === abilityPoint) {
        inkCoverage = Math.floor(mainPowerUp.Tri[i].IC * 100000) / 1000;
      }
    }
    element = (
      <AePart
        aeText='塗り範囲'
        aeEffect={`${inkCoverage!} ％`}
        col='col-11'
      />
    );
  } else if (name.includes("スクリュー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Machine[i].AP === abilityPoint) {
        inkCoverage = Math.floor(mainPowerUp.Tri[i].IC * 100000) / 1000;
      }
    }
    element = (
      <AePart
        aeText='塗り範囲'
        aeEffect={`${inkCoverage!} ％`}
        col='col-11'
      />
    );
  } else if (name.includes("オーバーフロッシャー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Blob[i].AP === abilityPoint) {
        inkCoverage = Math.floor(mainPowerUp.Tri[i].IC * 100000) / 1000;
      }
    }
    element = (
      <AePart
        aeText='塗り範囲'
        aeEffect={`${inkCoverage!} ％`}
        col='col-11'
      />
    );
  } else if (name.includes("エクスプロッシャー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Explosher[i].AP === abilityPoint) {
        inkCoverage = Math.floor(mainPowerUp.Explosher[i].PR * 10000) / 100;
      }
    }
    element = (
      <AePart
        aeText='塗り範囲'
        aeEffect={`${inkCoverage!} ％`}
        col='col-11'
      />
    );
    } else if (name.includes("スプラスピナー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Mini[i].AP === abilityPoint) {
        bullets = Math.floor(mainPowerUp.Mini[i].frame / (mainPowerUp.Mini[0].frame / 19));
        extraBullets = Math.floor(bullets - 19);
      }
    }
    element = (
      <AePart
        aeText='フルチャージの弾数'
        aeEffect={`${bullets!} 発 （＋${extraBullets!}）`}
        col='col-11'
      />
    );
  } else if (name.includes("バレルスピナー") || name.includes("ヒーロースピナー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Heavy[i].AP === abilityPoint) {
        bullets = Math.floor(mainPowerUp.Heavy[i].frame / (mainPowerUp.Heavy[0].frame / 37));
        extraBullets = Math.floor(bullets - 37);
      }
    }
    element = (
      <AePart
        aeText='フルチャージの弾数'
        aeEffect={`${bullets!} 発 （＋${extraBullets!}）`}
        col='col-11'
      />
    );
  } else if (name.includes("ハイドラント")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Hydra[i].AP === abilityPoint) {
        damage = mainPowerUp.Hydra[i].DMG;
        damageFar = mainPowerUp.Hydra[i].DMGFAR;
      }
    }
    // damageInPercent = Math.floor(damage / Hydra[0].DMG *100000) / 1000;
    // damageFarInPercent = Math.floor(damageFar / Hydra[0].DMGFAR *100000) / 1000;
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='1発のダメージ（チャージ1周目）'
          aeEffect={`${damage!} ダメージ`}
        />
        <AePart
          aeText='1発のダメージ（チャージ2周目）'
          aeEffect={`${damageFar!} ダメージ`}
        />
      </div>
    );
  } else if (name.includes("クーゲルシュライバー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Ballpoint[i].AP === abilityPoint) {
        damage = mainPowerUp.Ballpoint[i].DMG;
        damageFar = mainPowerUp.BallpointFar[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Ballpoint[0].DMG *100000) / 1000;
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='1発のダメージ（（短射程モード）'
          aeEffect={`${damage!} ダメージ`}
        />
        <AePart
          aeText='1発のダメージ（長射程モード）'
          aeEffect={`${damageFar!} ダメージ`}
        />
      </div>
    );
  } else if (name.includes("ノーチラス")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Nautilus[i].AP === abilityPoint) {
        bullets = Math.floor(mainPowerUp.Nautilus[i].frame / (mainPowerUp.Nautilus[0].frame / 27));
        extraBullets = Math.floor(bullets - 27);
      }
    }
    element = (
      <AePart
        aeText='フルチャージの弾数'
        aeEffect={`${bullets!} 発 （＋${extraBullets!}）`}
        col='col-11'
      />
    );
  } else if (name.includes("スパッタリー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Dapples[i].AP === abilityPoint) {
        damage = mainPowerUp.Dapples[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Dapples[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("マニューバー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Dualies[i].AP === abilityPoint) {
        damage = mainPowerUp.Dualies[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Dualies[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("ケルビン")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Glooga[i].AP === abilityPoint) {
        damage = mainPowerUp.Glooga[i].DMG0;
        damageFar = mainPowerUp.Glooga[i].DMG1;
      }
    }
    // damageInPercent = Math.floor(damage / Glooga[0].DMG0 *100000) / 1000;
    // damageFarInPercent = Math.floor(damageFar / Glooga[0].DMG1 *100000) / 1000;
    element = (
      <div className="d-flex flex-column col-11 px-0">
        <AePart
          aeText='1発のダメージ（歩き撃ち）'
          aeEffect={`${damage!} ダメージ`}
        />
        <AePart
          aeText='1発のダメージ（スライド後）'
          aeEffect={`${damageFar!} ダメージ`}
        />
      </div>
    );
  } else if (name.includes("デュアル")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.DualieSquelchers[i].AP === abilityPoint) {
        damage = mainPowerUp.DualieSquelchers[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / DualieSquelchers[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("クアッドホッパー")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Tetras[i].AP === abilityPoint) {
        damage = mainPowerUp.Tetras[i].DMG;
      }
    }
    // damageInPercent = Math.floor(damage / Tetras[0].DMG *100000) / 1000;
    element = (
      <AePart
        aeText='1発のダメージ'
        aeEffect={`${damage!} ダメージ`}
        col='col-11'
      />
    );
  } else if (name.includes("パラシェルター") || name.includes("ヒーローシェルター")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Brella[i].AP === abilityPoint) {
        recorveryFrame = mainPowerUp.Brella[i].RT;
      }
    }
    recorverySecond = Math.floor(recorveryFrame! / 60 * 1000) / 1000;
    element = (
      <AePart
        aeText='傘が割れたときの復活時間'
        aeEffect={`${recorveryFrame!} F （${recorverySecond} 秒）`}
        col='col-11'
      />
    );
  } else if (name.includes("キャンピングシェルター")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Tent[i].AP === abilityPoint) {
        hp = mainPowerUp.Tent[i].HP
      }
    }
    // extraHP = Math.floor(hp - Tent[0].HP);
    element = (
      <AePart
        aeText='パージした傘の耐久値'
        aeEffect={`${hp!} ダメージ分`}
        col='col-11'
      />
    );
  } else if (name.includes("スパイガジェット")) {
    for (let i=0; i < 40; i++) {
      if (mainPowerUp.Undercover[i].AP === abilityPoint) {
        recorveryFrame = mainPowerUp.Undercover[i].RT;
      }
    }
    recorverySecond = Math.floor(recorveryFrame! / 60 * 1000) / 1000;
    element = (
      <AePart
        aeText='傘が割れたときの復活時間'
        aeEffect={`${recorveryFrame!} F （${recorverySecond} 秒）`}
        col='col-11'
      />
    );
  }
  
  return (
    <AeCard
      imagePath={mpuImg}
      tooltipWidth='20rem'
      tooltipText='メイン性能アップ : メインウェポンの性能がアップします。具体的な効果はブキによって異なります'
      children={element!}
    />
  );
});

export default MainPowerUp;