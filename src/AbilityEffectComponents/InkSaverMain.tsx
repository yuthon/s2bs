import React, { FC, ReactElement } from 'react';
import inkSaverMainImg from '../images/ability/ISMain.png';
import { inkSaverMain } from './abilityEffect-data';

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

type InkSaverMainProps = {
  abilityPoint: number,
  weapon: WeaponType
};

const InkSaverMain: FC<InkSaverMainProps> = React.memo(({ abilityPoint, weapon}): ReactElement => {
  // 式を簡単に書くためにxに代入する
  let inkConsumption: number;
  let bullets: number;
  let weaponType: string;
  let element: ReactElement;
  
  if (weapon.name.includes("ボールドマーカー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.sploosh[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.sploosh[i].IC;
      }
    }
    weaponType = "shooter";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*100000) / 1000;
  } else if (weapon.name.includes("シャープマーカー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.splash[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.splash[i].IC;
      }
    }
    weaponType = "shooter";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*100000) / 1000;
  } else if (weapon.name.includes("わかば") || weapon.name.includes("もみじ") || weapon.name.includes("おちば")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Jr[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Jr[i].IC;
      }
    }
    weaponType = "shooter";
    // わかば系統はインク量が多いので1.1で計算
    bullets = Math.floor(1.1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("プロモデラー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.aerospray[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.aerospray[i].IC;
      }
    }
    weaponType = "shooter";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("52ガロン")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.gal52[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.gal52[i].IC;
      }
    }
    weaponType = "shooter";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("N-ZAP")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Nzap[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Nzap[i].IC;
      }
    }
    weaponType = "shooter";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("プライムシューター")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Pro[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Pro[i].IC;
      }
    }
    weaponType = "shooter";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ジェットスイーパー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.JetSquelcher[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.JetSquelcher[i].IC;
      }
    }
    weaponType = "shooter";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("96ガロン")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.gal96[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.gal96[i].IC;
      }
    }
    weaponType = "shooter";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ノヴァブラスター")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Luna[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Luna[i].IC;
      }
    }
    weaponType = "blaster";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ホットブラスター") || weapon.name.includes("ヒーローブラスター")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Blaster[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Blaster[i].IC;
      }
    }
    weaponType = "blaster";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("クラッシュブラスター")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.ClashBlaster[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.ClashBlaster[i].IC;
      }
    }
    weaponType = "blaster";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("スプラシューター") || weapon.name.includes("ヒーローシューター") || weapon.name.includes("オクタシューター")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.SplatterShot[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.SplatterShot[i].IC;
      }
    }
    weaponType = "shooter";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ラピッドブラスター")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.RapidBlaster[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.RapidBlaster[i].IC;
      }
    }
    weaponType = "blaster";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ダイナモローラー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Dynamo[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Dynamo[i].IC;
      }
    }
    weaponType = "roller";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("L-3")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.L3Nozzle[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.L3Nozzle[i].IC;
      }
    }
    weaponType = "nozzle";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("H-3")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.H3Nozzle[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.H3Nozzle[i].IC;
      }
    }
    weaponType = "nozzle";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("Rブラスター")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Rblaster[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Rblaster[i].IC;
      }
    }
    weaponType = "blaster";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ボトルカイザー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Squeezer[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Squeezer[i].IC;
      }
    }
    weaponType = "shooter";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("スプラローラー") || weapon.name.includes("ヒーローローラー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.SplatRoller[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.SplatRoller[i].IC;
      }
    }
    weaponType = "roller";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("カーボン")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Carbon[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Carbon[i].IC;
      }
    }
    weaponType = "roller";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ロングブラスター")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.RangeBlaster[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.RangeBlaster[i].IC;
      }
    }
    weaponType = "blaster";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ヴァリアブルローラー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Flingza[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Flingza[i].IC;
      }
    }
    weaponType = "special";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
    element = (
      <>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">1振りごとのインク消費量（横振り）</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{inkConsumption} ％</p>
        </div>
      </div>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">1振りごとのインク消費量（縦振り）</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{bullets} 振り</p>
        </div>
      </div>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">インク満タン時の弾数 （縦振り）</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{inkConsumption * 1.5} ％</p>
        </div>
      </div>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">インク満タン時の弾数 （横振り）</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{Math.floor(bullets / 1.5)} 振り</p>
        </div>
      </div>
      </>
    );
  } else if (weapon.name.includes("ホクサイ") || weapon.name.includes("ヒーローブラシ")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Octobrush[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Octobrush[i].IC;
      }
    }
    weaponType = "brush";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("パブロ")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Inkbrush[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Inkbrush[i].IC;
      }
    }
    weaponType = "brush";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("スプラチャージャー") || weapon.name.includes("スプラスコープ") || weapon.name.includes("ヒーローチャージャー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.ChargerMin[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.ChargerMax[i].IC;
      }
    }
    weaponType = "charger";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("スクイックリン")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Squiffer[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Squiffer[i].IC;
      }
    }
    weaponType = "charger";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("リッター") || weapon.name.includes("4Kスコープ")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Eliter[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Eliter[i].IC;
      }
    }
    weaponType = "charger";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("竹")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Bamboo[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Bamboo[i].IC;
      }
    }
    weaponType = "charger";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ソイチューバー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.GooTuber[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.GooTuber[i].IC;
      }
    }
    weaponType = "charger";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("バケットスロッシャー") || weapon.name.includes("ヒーロースロッシャー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Slosher[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Slosher[i].IC;
      }
    }
    weaponType = "slosher";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ヒッセン")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Tri[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Tri[i].IC;
      }
    }
    weaponType = "slosher";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("スクリュー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Machine[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Machine[i].IC;
      }
    }
    weaponType = "slosher";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("オーバーフロッシャー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Blob[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Blob[i].IC;
      }
    }
    weaponType = "slosher";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("エクスプロッシャー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Explo[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Explo[i].IC;
      }
    }
    weaponType = "slosher";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("スプラスピナー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Mini[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Mini[i].IC;
      }
    }
    weaponType = "splatling";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("バレルスピナー") || weapon.name.includes("ヒーロースピナー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Heavy[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Heavy[i].IC;
      }
    }
    weaponType = "splatling";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ハイドラント")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Hydra[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Hydra[i].IC;
      }
    }
    weaponType = "splatling";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("クーゲルシュライバー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.BallPoint[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.BallPoint[i].IC;
      }
    }
    weaponType = "splatling";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ノーチラス")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Nautilus[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Nautilus[i].IC;
      }
    }
    weaponType = "splatling";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("スパッタリー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Dapples[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Dapples[i].IC;
      }
    }
    weaponType = "dualies";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("マニューバー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Dualies[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Dualies[i].IC;
      }
    }
    weaponType = "dualies";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("ケルビン")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Glooga[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Glooga[i].IC;
      }
    }
    weaponType = "dualies";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("デュアル")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.DualieSquelcher[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.DualieSquelcher[i].IC;
      }
    }
    weaponType = "dualies";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("クアッドホッパー")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Tetras[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Tetras[i].IC;
      }
    }
    weaponType = "dualies";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("パラシェルター") || weapon.name.includes("ヒーローシェルター")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.SplatBrella[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.SplatBrella[i].IC;
      }
    }
    weaponType = "brella";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("キャンピングシェルター")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Tent[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Tent[i].IC;
      }
    }
    weaponType = "brella";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  } else if (weapon.name.includes("スパイガジェット")) {
    for (let i=0; i < 40; i++) {
      if (inkSaverMain.Undercover[i].AP === abilityPoint) {
        inkConsumption = inkSaverMain.Undercover[i].IC;
      }
    }
    weaponType = "brella";
    bullets = Math.floor(1 / inkConsumption!);
    // 数値を％になおす
    inkConsumption = Math.floor(inkConsumption!*1000000) / 10000;
  }
  // 武器種の判定
  if (weaponType! === "shooter" || weaponType! === "blaster" || weaponType! === "dualies" || weaponType! === "brella") {
    element = (
      <>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">1発ごとのインク消費量</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{inkConsumption!} ％</p>
        </div>
      </div>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">インク満タン時の弾数</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{bullets!} 発</p>
        </div>
      </div>
      </>
    );
  } else if (weaponType! === "roller" || weaponType! === "brush"  || weaponType! === "slosher") {
    element = (
      <>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">1発ごとのインク消費量</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{inkConsumption!} ％</p>
        </div>
      </div>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">インク満タン時の弾数</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{bullets!} 振り</p>
        </div>
      </div>
      </>
    );
  } else if (weaponType! === "charger") {
    element = (
      <>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">1発（フルチャージ）のインク消費量</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{inkConsumption!} ％</p>
        </div>
      </div>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">インク満タン時の弾数</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{bullets!} 発</p>
        </div>
      </div>
      </>
    );
  } else if (weaponType! === "nozzle") {
    element = (
      <>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">1発ごとのインク消費量</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{inkConsumption!} ％</p>
        </div>
      </div>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">インク満タン時の弾数</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{bullets!} 発（{Math.floor(bullets! / 3)}トリガー）</p>
        </div>
      </div>
      </>
    );
  } else if (weaponType! === "splatling") {
    element = (
      <>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">フルチャージ1回のインク消費量</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{inkConsumption!} ％</p>
        </div>
      </div>
      <div className="ae-part row">
        <div className="col-7 px-0 m-auto">
          <p className="ae-text">インク満タン時にフルチャージで射撃可能な回数</p>
        </div>
        <p className="col-1 ae-colon px-0">:</p>
        <div className="col-4 px-0 m-auto">
          <p className="ae-effect">{bullets!} 回</p>
        </div>
      </div>
      </>
    );
  } 
  return (
    <div className="ae-card row">
      <div className="col-1 ap-icon-area">
        <div className="ability-icon ap-ability-icon">
          <p className="ability-detail-tooltip" style={{width: "26rem"}}>インク効率アップ(メイン) : メインウェポンの消費インク量が少なくなります。</p>
          <img className="ap-ability-img" src={inkSaverMainImg} alt=""/>
        </div>
      </div>
      <div className="d-flex flex-column col-11 px-0">
        {element!}
      </div>
    </div>
  );
});

export default InkSaverMain;