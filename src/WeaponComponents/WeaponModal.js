import React, { useState, useRef } from 'react';
import Gal52_0 from '../images/weapon/52 Gal.png';
import Gal52_1 from '../images/weapon/52 Gal Deco.png';
import Gal52_2 from '../images/weapon/Kensa 52 Gal.png';
import Gal96_0 from '../images/weapon/96 Gal.png';
import Gal96_1 from '../images/weapon/96 Gal Deco.png';
import Aerospray_0 from '../images/weapon/Aerospray MG.png';
import Aerospray_1 from '../images/weapon/Aerospray RG.png';
import Aerospray_2 from '../images/weapon/Aerospray PG.png';
import Ballpoint_0 from '../images/weapon/Ballpoint Splatling.png';
import Ballpoint_1 from '../images/weapon/Ballpoint Splatling Nouveau.png';
import Bamboo_0 from '../images/weapon/Bamboozler 14 Mk I.png';
import Bamboo_1 from '../images/weapon/Bamboozler 14 Mk II.png';
import Bamboo_2 from '../images/weapon/Bamboozler 14 Mk III.png';
import Blaster_0 from '../images/weapon/Blaster.png';
import Blaster_1 from '../images/weapon/Custom Blaster.png';
import Blob_0 from '../images/weapon/Bloblobber.png';
import Blob_1 from '../images/weapon/Bloblobber Deco.png';
import Carbon_0 from '../images/weapon/Carbon Roller.png';
import Carbon_1 from '../images/weapon/Carbon Roller Deco.png';
import H3Nozzle_0 from '../images/weapon/H-3 Nozzlenose.png';
import H3Nozzle_1 from '../images/weapon/H-3 Nozzlenose D.png';
import H3Nozzle_2 from '../images/weapon/Cherry H-3 Nozzlenose.png';
import ClashBlaster_0 from '../images/weapon/Clash Blaster.png';
import ClashBlaster_1 from '../images/weapon/Clash Blaster Neo.png';
import Squiffer_0 from '../images/weapon/Classic Squiffer.png';
import Squiffer_2 from '../images/weapon/Fresh Squiffer.png';
import Dapple_0 from '../images/weapon/Dapple Dualies.png';
import Dapple_1 from '../images/weapon/Dapple Dualies Nouveau.png';
import Dapple_2 from '../images/weapon/Clear Dapple Dualies.png';
import DualieSquelcher_0 from '../images/weapon/Dualie Squelchers.png';
import DualieSquelcher_1 from '../images/weapon/Custom Dualie Squelchers.png';
import EliterScope_0 from '../images/weapon/E-liter 4K Scope.png';
import EliterScope_1 from '../images/weapon/Custom E-liter 4K Scope.png';
import Eliter_0 from '../images/weapon/E-liter 4K.png';
import Eliter_1 from '../images/weapon/Custom E-liter 4K.png';
import Explosher_0 from '../images/weapon/Explosher.png';
import Explosher_1 from '../images/weapon/Custom Explosher.png';
import GooTuber_0 from '../images/weapon/Goo Tuber.png';
import GooTuber_1 from '../images/weapon/Custom Goo Tuber.png';
import Hydra_0 from '../images/weapon/Hydra Splatling.png';
import Hydra_1 from '../images/weapon/Custom Hydra Splatling.png';
import Jet_0 from '../images/weapon/Jet Squelcher.png';
import Jet_1 from '../images/weapon/Custom Jet Squelcher.png';
import Range_1 from '../images/weapon/Custom Range Blaster.png';
import Jr_1 from '../images/weapon/Custom Splattershot Jr.png';
import Tetra_0 from '../images/weapon/Dark Tetra Dualies.png';
import Dynamo_0 from '../images/weapon/Dynamo Roller.png';
import Dualies_1 from '../images/weapon/Enperry Splat Dualies.png';
import Charger_1 from '../images/weapon/Firefin Splat Charger.png';
import Charger_2 from '../images/weapon/Kensa Charger.png';
import ChargerScope_1 from '../images/weapon/Firefin Splatterscope.png';
import ChargerScope_2 from '../images/weapon/Kensa Splatterscope.png';
import Flingza_0 from '../images/weapon/Flingza Roller.png';
import Flingza_1 from '../images/weapon/Foil Flingza Roller.png';
import Squeezer_1 from '../images/weapon/Foil Squeezer.png';
import Pro_1 from '../images/weapon/Forge Splattershot Pro.png';
import Glooga_0 from '../images/weapon/Glooga Dualies.png';
import Glooga_1 from '../images/weapon/Glooga Dualies Deco.png';
import Glooga_2 from '../images/weapon/Kensa Glooga Dualies.png';
import Dynamo_1 from '../images/weapon/Gold Dynamo Roller.png';
import Dynamo_2 from '../images/weapon/Kensa Dynamo Roller.png';
import Range_2 from '../images/weapon/Grim Range Blaster.png';
import Heavy_0 from '../images/weapon/Heavy Splatling.png';
import Heavy_1 from '../images/weapon/Heavy Splatling Deco.png';
import Heavy_2 from '../images/weapon/Heavy Splatling Remix.png';
import HeroBlaster from '../images/weapon/Hero Blaster Replica.png';
import HeroBrella from '../images/weapon/Hero Brella Replica.png';
import HeroCharger from '../images/weapon/Hero Charger Replica.png';
import HeroDualies from '../images/weapon/Hero Dualie Replicas.png';
import HeroRoller from '../images/weapon/Hero Roller Replica.png';
import HeroShot from '../images/weapon/Hero Shot Replica.png';
import HeroSlosher from '../images/weapon/Hero Slosher Replica.png';
import HeroHeavy from '../images/weapon/Hero Splatling Replica.png';
import HeroBrush from '../images/weapon/Herobrush Replica.png';
import Brush_0 from '../images/weapon/Inkbrush.png';
import Brush_1 from '../images/weapon/Inkbrush Nouveau.png';
import L3Nozzle_2 from '../images/weapon/Kensa L-3 Nozzlenose.png';
import Luna_2 from '../images/weapon/Kensa Luna Blaster.png';
import Mini_2 from '../images/weapon/Kensa Mini Splatling.png';
import Octobrush_2 from '../images/weapon/Kensa Octobrush.png';
import Rapid_2 from '../images/weapon/Kensa Rapid Blaster.png';
import Machine_2 from '../images/weapon/Kensa Sloshing Machine.png';
import Dualies_2 from '../images/weapon/Kensa Splat Dualies.png';
import Roller_2 from '../images/weapon/Kensa Splat Roller.png';
import Jr_2 from '../images/weapon/Kensa Splattershot Jr.png';
import Pro_2 from '../images/weapon/Kensa Splattershot Pro.png';
import SplatterShot_2 from '../images/weapon/Kensa Splattershot.png';
import Undercover_2 from '../images/weapon/Kensa Undercover Brella.png';
import Roller_1 from '../images/weapon/Krak-On Splat Roller.png';
import L3Nozzle_1 from '../images/weapon/L-3 Nozzlenose D.png';
import L3Nozzle_0 from '../images/weapon/L-3 Nozzlenose.png';
import Tetra_1 from '../images/weapon/Light Tetra Dualies.png';
import Luna_1 from '../images/weapon/Luna Blaster Neo.png';
import Luna_0 from '../images/weapon/Luna Blaster.png';
import Mini_0 from '../images/weapon/Mini Splatling.png';
import Nzap_2 from '../images/weapon/N-ZAP 83.png';
import Nzap_0 from '../images/weapon/N-ZAP 85.png';
import Nzap_1 from '../images/weapon/N-ZAP 89.png';
import Nautilus_0 from '../images/weapon/Nautilus 47.png';
import Nautilus_1 from '../images/weapon/Nautilus 79.png';
import Splash_1 from '../images/weapon/Neo Splash-o-matic.png';
import Sploosh_1 from '../images/weapon/Neo Sploosh-o-matic.png';
import Squiffer_1 from '../images/weapon/New Squiffer.png';
import OctoShot from '../images/weapon/Octo Shot Replica.png';
import Octobrush_1 from '../images/weapon/Octobrush Nouveau.png';
import Octobrush_0 from '../images/weapon/Octobrush.png';
import Brush_2 from '../images/weapon/Permanent Inkbrush.png';
import Range_0 from '../images/weapon/Range Blaster.png';
import Rapid_1 from '../images/weapon/Rapid Blaster Deco.png';
import RapidPro_1 from '../images/weapon/Rapid Blaster Pro Deco.png';
import RapidPro_0 from '../images/weapon/Rapid Blaster Pro.png';
import Rapid_0 from '../images/weapon/Rapid Blaster.png';
import Slosher_1 from '../images/weapon/Slosher Deco.png';
import Slosher_0 from '../images/weapon/Slosher.png';
import Machine_1 from '../images/weapon/Sloshing Machine Neo.png';
import Machine_0 from '../images/weapon/Sloshing Machine.png';
import Slosher_2 from '../images/weapon/Soda Slosher.png';
import Brella_1 from '../images/weapon/Sorella Brella.png';
import Splash_0 from '../images/weapon/Splash-o-matic.png';
import Brella_0 from '../images/weapon/Splat Brella.png';
import Charger_0 from '../images/weapon/Splat Charger.png';
import Dualies_0 from '../images/weapon/Splat Dualies.png';
import Roller_0 from '../images/weapon/Splat Roller.png';
import ChargerScope_0 from '../images/weapon/Splatterscope.png';
import Jr_0 from '../images/weapon/Splattershot Jr.png';
import Pro_0 from '../images/weapon/Splattershot Pro.png';
import SplatterShot_0 from '../images/weapon/Splattershot.png';
import Sploosh_2 from '../images/weapon/Sploosh-o-matic 7.png';
import Sploosh_0 from '../images/weapon/Sploosh-o-matic.png';
import Squeezer_0 from '../images/weapon/Squeezer.png';
import TentaBrella_0 from '../images/weapon/Tenta Brella.png';
import TentaBrella_2 from '../images/weapon/Tenta Camo Brella.png';
import TentaBrella_1 from '../images/weapon/Tenta Sorella Brella.png';
import SplatterShot_1 from '../images/weapon/Tentatek Splattershot.png';
import Tri_1 from '../images/weapon/Tri-Slosher Nouveau.png';
import Tri_0 from '../images/weapon/Tri-Slosher.png';
import Undercover_0 from '../images/weapon/Undercover Brella.png';
import Undercover_1 from '../images/weapon/Undercover Sorella Brella.png';
import Mini_1 from '../images/weapon/Zink Mini Splatling.png';
// サブとスペシャル
import CurlingBomb from '../images/subSP/Wsb_Bomb_Curling.png';
import FizzyBomb from '../images/subSP/Wsb_Bomb_Fizzy.png';
import BurstBomb from '../images/subSP/Wsb_Bomb_Burst.png';
import AutoBomb from '../images/subSP/Wsb_Bomb_Auto.png';
import SplatBomb from '../images/subSP/Wsb_Bomb_Splat.png';
import SuctionBomb from '../images/subSP/Wsb_Bomb_Suction.png';
import Torpedo from '../images/subSP/Wsb_Torpedo.png';
import SquidBeakon from '../images/subSP/Wsb_SquidBeakon.png';
import PointSensor from '../images/subSP/Wsb_PointSensor.png';
import ToxicMist from '../images/subSP/Wsb_ToxicMist.png';
import SplashWall from '../images/subSP/Wsb_SplashWall.png';
import Sprinkler from '../images/subSP/Wsb_Sprinkler.png';
import InkMine from '../images/subSP/Wsb_InkMine.png';
import Baller from '../images/subSP/Wsp_Baller.png';
import Inkjet from '../images/subSP/Wsp_Inkjet.png';
import CurlingRush from '../images/subSP/Wsp_CurlingBombLauncher.png';
import BurstRush from '../images/subSP/Wsp_BurstBombLauncher.png';
import AutoRush from '../images/subSP/Wsp_AutoBombLauncher.png';
import SplatRush from '../images/subSP/Wsp_SplatBombLauncher.png';
import SuctionRush from '../images/subSP/Wsp_SuctionBombLauncher.png';
import InkStorm from '../images/subSP/Wsp_InkStorm.png';
import InkArmor from '../images/subSP/Wsp_InkArmor.png';
import BooyahBomb from '../images/subSP/Wsp_BooyahBomb.png';
import BubbleBlower from '../images/subSP/Wsp_BubbleBlower.png';
import SplashDown from '../images/subSP/Wsp_SplashDown.png';
import TentaMissile from '../images/subSP/Wsp_TentaMissile.png';
import UltraStamp from '../images/subSP/Wsp_UltraStamp.png';
import Stingray from '../images/subSP/Wsp_Stingray.png';


const WeaponModal = React.memo((props) => {
  const weaponStatus = [
    {name:"ボールドマーカー", sub:"カーリングボム", special:"スーパーチャクチ", sp:160, weight:"light", path:Sploosh_0, pathSub:CurlingBomb, pathSpecial:SplashDown},
    {name:"ボールドマーカーネオ", sub:"ジャンプビーコン", special:"マルチミサイル", sp:170, weight:"light", path:Sploosh_1, pathSub:SquidBeakon,pathSpecial:TentaMissile},
    {name:"ボールドマーカー7", sub:"スプラッシュボム", special:"ウルトラハンコ", sp:170, weight:"light", path:Sploosh_2, pathSub:SplatBomb,pathSpecial:UltraStamp},
    {name:"わかばシューター", sub:"スプラッシュボム", special:"インクアーマー", sp:180, weight:"light", path:Jr_0, pathSub:SplatBomb,pathSpecial:InkArmor},
    {name:"もみじシューター", sub:"ロボットボム", special:"アメフラシ", sp:160, weight:"light", path:Jr_1, pathSub:AutoBomb,pathSpecial:InkStorm},
    {name:"おちばシューター", sub:"トーピード", special:"バブルランチャー", sp:190, weight:"light", path:Jr_2, pathSub:Torpedo,pathSpecial:BubbleBlower},
    {name:"シャープマーカー", sub:"ポイズンミスト", special:"ジェットパック", sp:170, weight:"light", path:Splash_0, pathSub:ToxicMist,pathSpecial:Inkjet},
    {name:"シャープマーカーネオ", sub:"クイックボム", special:"キューバンボムピッチャー", sp:210, weight:"light", path:Splash_1, pathSub:BurstBomb, pathSpecial:SuctionRush},
    {name:"プロモデラーMG", sub:"キューバンボム", special:"カーリングボムピッチャー", sp:160, weight:"light", path:Aerospray_0, pathSub:SuctionBomb, pathSpecial:CurlingRush},
    {name:"プロモデラーRG", sub:"スプリンクラー", special:"イカスフィア", sp:180, weight:"light", path:Aerospray_1, pathSub:Sprinkler, pathSpecial:Baller},
    {name:"プロモデラーPG", sub:"クイックボム", special:"ナイスダマ", sp:190, weight:"light", path:Aerospray_2, pathSub:BurstRush, pathSpecial:BooyahBomb},
    {name:"スプラシューター", sub:"クイックボム", special:"スーパーチャクチ", sp:170, weight:"middle", path:SplatterShot_0, pathSub:BurstBomb, pathSpecial:SplashDown},
    {name:"ヒーローシューターレプリカ", sub:"クイックボム", special:"スーパーチャクチ", sp:170, weight:"middle", path:HeroShot, pathSub:BurstBomb, pathSpecial:SplashDown},
    {name:"スプラシューターコラボ", sub:"スプラッシュボム", special:"ジェットパック", sp:200, weight:"middle", path:SplatterShot_1, pathSub:SplatBomb, pathSpecial:Inkjet},
    {name:"スプラシューターベッチュー", sub:"キューバンボム", special:"マルチミサイル", sp:180, weight:"middle", path:SplatterShot_2, pathSub:SuctionBomb, pathSpecial:TentaMissile},
    {name:"オクタシューターレプリカ", sub:"スプラッシュボム", special:"ジェットパック", sp:200, weight:"middle", path:OctoShot, pathSub:SplatBomb, pathSpecial:Inkjet},
    {name:".52ガロン", sub:"ポイントセンサー", special:"イカスフィア", sp:170, weight:"middle", path:Gal52_0, pathSub:PointSensor, pathSpecial:Baller},
    {name:".52ガロンデコ", sub:"カーリングボム", special:"ハイパープレッサー", sp:190, weight:"middle", path:Gal52_1, pathSub:CurlingBomb, pathSpecial:Stingray},
    {name:".52ガロンベッチュー", sub:"スプラッシュシールド", special:"ナイスダマ", sp:190, weight:"middle", path:Gal52_2, pathSub:SplashWall, pathSpecial:BooyahBomb},
    {name:"N-ZAP85", sub:"キューバンボム", special:"インクアーマー", sp:200, weight:"light", path:Nzap_0, pathSub:SuctionBomb, pathSpecial:InkArmor},
    {name:"N-ZAP89", sub:"ロボットボム", special:"マルチミサイル", sp:180, weight:"light", path:Nzap_1, pathSub:AutoBomb, pathSpecial:TentaMissile},
    {name:"N-ZAP83", sub:"スプリンクラー", special:"アメフラシ", sp:170, weight:"middle", path:Nzap_2, pathSub:Sprinkler, pathSpecial:InkStorm},
    {name:"プライムシューター", sub:"ポイントセンサー",special:"アメフラシ", sp:170, weight:"middle", path:Pro_0, pathSub:PointSensor, pathSpecial:InkStorm},
    {name:"プライムシューターコラボ", sub:"キューバンボム", special:"バブルランチャー", sp:190, weight:"middle", path:Pro_1, pathSub:SuctionBomb, pathSpecial:BubbleBlower},
    {name:"プライムシューターベッチュー", sub:"スプラッシュボム", special:"ナイスダマ", sp:210, weight:"middle", path:Pro_2, pathSub:SplatBomb, pathSpecial:BooyahBomb},
    {name:".96ガロン", sub:"スプリンクラー", special:"インクアーマー", sp:190, weight:"middle", path:Gal96_0, pathSub:Sprinkler, pathSpecial:InkArmor},
    {name:".96ガロンデコ", sub:"スプラッシュシールド", special:"スーパーチャクチ", sp:170, weight:"middle", path:Gal96_1, pathSub:SplashWall, pathSpecial:SplashDown},
    {name:"ジェットスイーパー", sub:"ポイズンミスト", special:"マルチミサイル", sp:180, weight:"middle", path:Jet_0, pathSub:ToxicMist, pathSpecial:TentaMissile},
    {name:"ジェットスイーパーカスタム", sub:"クイックボム", special:"ハイパープレッサー", sp:190, weight:"middle", path:Jet_1, pathSub:BurstBomb, pathSpecial:Stingray},
    {name:"ノヴァブラスター", sub:"トラップ", special:"キューバンボムピッチャー", sp:170, weight:"light", path:Luna_0, pathSub:InkMine, pathSpecial:SuctionRush},
    {name:"ノヴァブラスターネオ", sub:"スプラッシュボム", special:"イカスフィア", sp:170, weight:"light", path:Luna_1, pathSub:SplatBomb, pathSpecial:Baller},
    {name:"ノヴァブラスターベッチュー", sub:"タンサンボム", special:"アメフラシ", sp:170, weight:"light", path:Luna_2, pathSub:FizzyBomb, pathSpecial:InkStorm},
    {name:"ホットブラスター", sub:"ポイズンミスト", special:"スーパーチャクチ", sp:170, weight:"middle", path:Blaster_0, pathSub:ToxicMist, pathSpecial:SplashDown},
    {name:"ヒーローブラスターレプリカ", sub:"ポイズンミスト", special:"スーパーチャクチ", sp:170, weight:"middle", path:HeroBlaster, pathSub:ToxicMist, pathSpecial:SplashDown},
    {name:"ホットブラスターカスタム", sub:"ロボットボム", special:"ジェットパック", sp:190, weight:"middle", path:Blaster_1, pathSub:AutoBomb, pathSpecial:Inkjet},
    {name:"ロングブラスター", sub:"キューバンボム", special:"アメフラシ", sp:200, weight:"middle", path:Range_0, pathSub:SuctionBomb, pathSpecial:InkStorm},
    {name:"ロングブラスターカスタム", sub:"カーリングボム", special:"バブルランチャー", sp:170, weight:"middle", path:Range_1, pathSub:CurlingBomb, pathSpecial:BubbleBlower},
    {name:"ロングブラスターネクロ", sub:"クイックボム", special:"マルチミサイル", sp:190, weight:"middle", path:Range_2, pathSub:BurstBomb, pathSpecial:TentaMissile},
    {name:"クラッシュブラスター", sub:"スプラッシュボム", special:"ハイパープレッサー", sp:180, weight:"light", path:ClashBlaster_0, pathSub:SplatBomb, pathSpecial:Stingray},
    {name:"クラッシュブラスターネオ", sub:"カーリングボム", special:"マルチミサイル", p:180, weight:"light", path:ClashBlaster_1, pathSub:CurlingBomb, pathSpecial:TentaMissile},
    {name:"ラピッドブラスター", sub:"トラップ", special:"スプラッシュボムピッチャー", sp:200, weight:"middle", path:Rapid_0, pathSub:InkMine, pathSpecial:SplatRush},
    {name:"ラピッドブラスターデコ", sub:"キューバンボム", special:"ジェットパック", sp:190, weight:"middle", path:Rapid_1, pathSub:SuctionBomb, pathSpecial:Inkjet},
    {name:"ラピッドブラスターベッチュー", sub:"トーピード", special:"イカスフィア", sp:200, weight:"middle", path:Rapid_2, pathSub:Torpedo, pathSpecial:Baller},
    {name:"Rブラスターエリート", sub:"ポイズンミスト", special:"アメフラシ", sp:180, weight:"middle", path:RapidPro_0, pathSub:ToxicMist, pathSpecial:InkStorm},
    {name:"Rブラスターエリートデコ", sub:"スプラッシュシールド", special:"インクアーマー", sp:180, weight:"middle", path:RapidPro_1, pathSub:SplashWall, pathSpecial:InkArmor},
    {name:"L-3リールガン", sub:"カーリングボム", special:"イカスフィア", sp:220, weight:"middle", path:L3Nozzle_0, pathSub:CurlingBomb, pathSpecial:Baller},
    {name:"L-3リールガンD", sub:"クイックボム", special:"ジェットパック", sp:200, weight:"middle", path:L3Nozzle_1, pathSub:BurstBomb, pathSpecial:Inkjet},
    {name:"L-3リールガンベッチュー", sub:"スプラッシュシールド", special:"ウルトラハンコ", sp:180, weight:"middle", path:L3Nozzle_2, pathSub:SplashWall, pathSpecial:UltraStamp},
    {name:"H-3リールガン", sub:"ポイントセンサー", special:"マルチミサイル", sp:170, weight:"middle", path:H3Nozzle_0, pathSub:PointSensor, pathSpecial:TentaMissile},
    {name:"H-3リールガンD", sub:"キューバンボム", special:"インクアーマー", sp:220, weight:"middle", path:H3Nozzle_1, pathSub:SuctionBomb, pathSpecial:InkArmor},
    {name:"H-3リールガンチェリー", sub:"スプラッシュシールド", special:"バブルランチャー", sp:180, weight:"middle", path:H3Nozzle_2, pathSub:SplashWall, pathSpecial:BubbleBlower},
    {name:"ボトルカイザー", sub:"スプラッシュシールド", special:"ハイパープレッサー", sp:180, weight:"middle", path:Squeezer_0, pathSub:SplashWall, pathSpecial:Stingray},
    {name:"ボトルカイザーフォイル", sub:"スプラッシュボム", special:"バブルランチャー", sp:200, weight:"middle", path:Squeezer_1, pathSub:SplatBomb, pathSpecial:BubbleBlower},
    {name:"カーボンローラー", sub:"ロボットボム", special:"アメフラシ", sp:160, weight:"light", path:Carbon_0, pathSub:AutoBomb, pathSpecial:InkStorm},
    {name:"カーボンローラーデコ", sub:"クイックボム", special:"ロボットボムピッチャー", sp:190, weight:"light", path:Carbon_1, pathSub:BurstBomb, pathSpecial:AutoRush},
    {name:"スプラローラー", sub:"カーリングボム", special:"スーパーチャクチ", sp:170, weight:"middle", path:Roller_0, pathSub:CurlingBomb, pathSpecial:SplashDown},
    {name:"ヒーローローラー", sub:"カーリングボム", special:"スーパーチャクチ", sp:170, weight:"middle", path:HeroRoller, pathSub:CurlingBomb, pathSpecial:SplashDown},
    {name:"スプラローラーコラボ", sub:"ジャンプビーコン", special:"イカスフィア", sp:170, weight:"middle", path:Roller_1, pathSub:SquidBeakon, pathSpecial:Baller},
    {name:"スプラローラーベッチュー", sub:"スプラッシュボム", special:"バブルランチャー", sp:180, weight:"middle", path:Roller_2, pathSub:SplatBomb, pathSpecial:BubbleBlower},
    {name:"ダイナモローラー", sub:"トラップ", special:"ハイパープレッサー", sp:180, weight:"heavy", path:Dynamo_0, pathSub:InkMine, pathSpecial:Stingray},
    {name:"ダイナモローラーテスラ", sub:"スプラッシュボム", special:"インクアーマー", sp:190, weight:"heavy", path:Dynamo_1, pathSub:SplatBomb, pathSpecial:InkArmor},
    {name:"ダイナモローラーベッチュー", sub:"スプリンクラー", special:"ナイスダマ", sp:180, weight:"heavy", path:Dynamo_2, pathSub:Sprinkler, pathSpecial:BooyahBomb},
    {name:"ヴァリアブルローラー", sub:"スプラッシュシールド", special:"スプラッシュボムピッチャー", sp:180, weight:"middle", path:Flingza_0, pathSub:SplashWall, pathSpecial:SplatRush},
    {name:"ヴァリアブルローラーフォイル", sub:"キューバンボム", special:"マルチミサイル", sp:180, weight:"middle", path:Flingza_1, pathSub:SuctionBomb, pathSpecial:TentaMissile},
    {name:"パブロ", sub:"スプラッシュボム", special:"スーパーチャクチ", sp:150, weight:"light", path:Brush_0, pathSub:SplatBomb, pathSpecial:SplashDown},
    {name:"パブロ・ヒュー", sub:"トラップ", special:"イカスフィア", sp:180, weight:"light", path:Brush_1, pathSub:InkMine, pathSpecial:Baller},
    {name:"パーマネントパブロ", sub:"スプリンクラー", special:"インクアーマー", sp:180, weight:"light", path:Brush_2, pathSub:Sprinkler, pathSpecial:InkArmor},
    {name:"ホクサイ", sub:"ロボットボム", special:"ジェットパック", sp:170, weight:"middle", path:Octobrush_0, pathSub:AutoBomb, pathSpecial:Inkjet},
    {name:"ヒーローブラシレプリカ", sub:"ロボットボム", special:"ジェットパック", sp:170, weight:"middle", path:HeroBrush, pathSub:AutoBomb, pathSpecial:Inkjet},
    {name:"ホクサイ・ヒュー", sub:"ジャンプビーコン", special:"マルチミサイル", sp:170, weight:"middle", path:Octobrush_1, pathSub:SquidBeakon, pathSpecial:TentaMissile},
    {name:"ホクサイベッチュー", sub:"キューバンボム", special:"ウルトラハンコ", sp:180, weight:"middle", path:Octobrush_2, pathSub:SuctionBomb, pathSpecial:UltraStamp},
    {name:"スクイックリンα", sub:"ポイントセンサー", special:"インクアーマー", sp:170, weight:"middle", path:Squiffer_0, pathSub:PointSensor, pathSpecial:InkArmor},
    {name:"スクイックリンβ", sub:"ロボットボム", special:"イカスフィア", sp:180, weight:"middle", path:Squiffer_1, pathSub:AutoBomb, pathSpecial:Baller},
    {name:"スクイックリンγ", sub:"キューバンボム", special:"ジェットパック", sp:180, weight:"middle", path:Squiffer_2, pathSub:SuctionBomb, pathSpecial:Inkjet},
    {name:"スプラチャージャー", sub:"スプラッシュボム", special:"ハイパープレッサー", sp:220, weight:"middle", path:Charger_0, pathSub:SplatBomb, pathSpecial:Stingray},
    {name:"ヒーローチャージャーレプリカ", sub:"スプラッシュボム", special:"ハイパープレッサー", sp:220, weight:"middle", path:HeroCharger, pathSub:SplatBomb, pathSpecial:Stingray},
    {name:"スプラチャージャーコラボ", sub:"スプラッシュシールド", special:"キューバンボムピッチャー", sp:220, weight:"middle", path:Charger_1, pathSub:SplashWall, pathSpecial:SuctionRush},
    {name:"スプラチャージャーベッチュー", sub:"スプリンクラー", special:"イカスフィア",sp:190, weight:"middle", path:Charger_2, pathSub:Sprinkler, pathSpecial:Baller},
    {name:"スプラスコープ", sub:"スプラッシュボム", special:"ハイパープレッサー", sp:220, weight:"middle", path:ChargerScope_0, pathSub:SplatBomb, pathSpecial:Stingray},
    {name:"スプラスコープコラボ", sub:"スプラッシュシールド", special:"キューバンボムピッチャー", sp:220, weight:"middle", path:ChargerScope_1, pathSub:SplashWall, pathSpecial:SuctionRush},
    {name:"スプラスコープベッチュー", sub:"スプリンクラー", special:"イカスフィア", sp:190, weight:"middle", path:ChargerScope_2, pathSub:Sprinkler, pathSpecial:Baller},
    {name:"リッター4K", sub:"トラップ", sp:190, special:"アメフラシ", weight:"heavy", path:Eliter_0, pathSub:InkMine, pathSpecial:InkStorm},
    {name:"リッター4Kカスタム", sub:"ジャンプビーコン", special:"バブルランチャー", sp:170, weight:"heavy", path:Eliter_1, pathSub:SquidBeakon, pathSpecial:BubbleBlower},
    {name:"4Kスコープ", sub:"トラップ", special:"アメフラシ", sp:190, weight:"heavy", path:EliterScope_0, pathSub:InkMine, pathSpecial:InkStorm},
    {name:"4Kスコープカスタム", sub:"ジャンプビーコン", special:"バブルランチャー", sp:170, weight:"heavy", path:EliterScope_1, pathSub:SquidBeakon, pathSpecial:BubbleBlower},
    {name:"14式竹筒銃・甲", sub:"カーリングボム", special:"マルチミサイル", sp:200, weight:"light", path:Bamboo_0, pathSub:CurlingBomb, pathSpecial:TentaMissile},
    {name:"14式竹筒銃・乙", sub:"ポイズンミスト", special:"クイックボムピッチャー", sp:160, weight:"light", path:Bamboo_1, pathSub:ToxicMist, pathSpecial:BurstRush},
    {name:"14式竹筒銃・丙", sub:"タンサンボム", special:"バブルランチャー", sp:190, weight:"light", path:Bamboo_2, pathSub:FizzyBomb, pathSpecial:BubbleBlower},
    {name:"ソイチューバー", sub:"キューバンボム", special:"スーパーチャクチ", sp:160, weight:"middle", path:GooTuber_0, pathSub:SuctionBomb, pathSpecial:SplashDown},
    {name:"ソイチューバーカスタム", sub:"カーリングボム", special:"ジェットパック", sp:170, weight:"middle", path:GooTuber_1, pathSub:CurlingBomb, pathSpecial:Inkjet},
    {name:"バケットスロッシャー", sub:"キューバンボム", special:"マルチミサイル", sp:190, weight:"middle", path:Slosher_0, pathSub:SuctionBomb, pathSpecial:TentaMissile},
    {name:"ヒーロースロッシャーレプリカ", sub:"キューバンボム", special:"マルチミサイル", sp:190, weight:"middle", path:HeroSlosher, pathSub:SuctionBomb, pathSpecial:TentaMissile},
    {name:"バケットスロッシャーデコ", sub:"スプリンクラー", special:"イカスフィア", sp:210, weight:"middle", path:Slosher_1, pathSub:Sprinkler, pathSpecial:Baller},
    {name:"バケットスロッシャーソーダ", sub:"スプラッシュボム", special:"クイックボムピッチャー", sp:210, weight:"middle", path:Slosher_2, pathSub:SplatBomb, pathSpecial:BurstRush},
    {name:"ヒッセン", sub:"クイックボム", special:"インクアーマー", sp:190, weight:"light", path:Tri_0, pathSub:BurstBomb, pathSpecial:InkArmor},
    {name:"ヒッセン・ヒュー", sub:"スプラッシュボム", special:"アメフラシ", sp:170, weight:"light", path:Tri_1, pathSub:SplatBomb, pathSpecial:InkStorm},
    {name:"スクリュースロッシャー", sub:"ロボットボム", special:"ハイパープレッサー", sp:190, weight:"middle", path:Machine_0, pathSub:AutoBomb, pathSpecial:Stingray},
    {name:"スクリュースロッシャーネオ", sub:"ポイントセンサー", special:"スプラッシュボムピッチャー", sp:180, weight:"middle", path:Machine_1, pathSub:PointSensor, pathSpecial:SplatRush},
    {name:"スクリュースロッシャーベッチュー", sub:"タンサンボム", special:"スーパーチャクチ", sp:190, weight:"middle", path:Machine_2, pathSub:FizzyBomb, pathSpecial:SplashDown},
    {name:"オーバーフロッシャー", sub:"スプラッシュシールド", special:"アメフラシ", sp:180, weight:"middle", path:Blob_0, pathSub:SplashWall, pathSpecial:InkStorm},
    {name:"オーバーフロッシャーデコ", sub:"スプリンクラー", special:"キューバンボムピッチャー", sp:190, weight:"middle", path:Blob_1, pathSub:Sprinkler, pathSpecial:SuctionRush},
    {name:"エクスプロッシャー", sub:"スプリンクラー", special:"バブルランチャー", sp:210, weight:"heavy", path:Explosher_0, pathSub:Sprinkler, pathSpecial:BubbleBlower},
    {name:"エクスプロッシャーカスタム", sub:"ポイントセンサー", special:"イカスフィア", sp:220, weight:"heavy", path:Explosher_1, pathSub:PointSensor, pathSpecial:Baller},
    {name:"スプラスピナー", sub:"クイックボム", special:"マルチミサイル", sp:210, weight:"middle", path:Mini_0, pathSub:BurstBomb, pathSpecial:TentaMissile},
    {name:"スプラスピナーコラボ", sub:"クイックボム", special:"アメフラシ", sp:180, weight:"middle", path:Mini_1, pathSub:BurstBomb, pathSpecial:InkStorm},
    {name:"スプラスピナーベッチュー", sub:"ポイズンミスト", special:"ウルトラハンコ", sp:180, weight:"middle", path:Mini_2, pathSub:ToxicMist, pathSpecial:UltraStamp},
    {name:"バレルスピナー", sub:"スプリンクラー", special:"ハイパープレッサー", sp:200, weight:"middle", path:Heavy_0, pathSub:Sprinkler, pathSpecial:Stingray},
    {name:"ヒーロースピナーレプリカ", sub:"スプリンクラー", special:"ハイパープレッサー", sp:200, weight:"middle", path:HeroHeavy, pathSub:Sprinkler, pathSpecial:Stingray},
    {name:"バレルスピナーデコ", sub:"スプラッシュシールド", special:"バブルランチャー", sp:180, weight:"middle", path:Heavy_1, pathSub:SplashWall, pathSpecial:BubbleBlower},
    {name:"バレルスピナーリミックス", sub:"ポイントセンサー", special:"ナイスダマ", sp:190, weight:"middle", path:Heavy_2, pathSub:PointSensor, pathSpecial:BooyahBomb},
    {name:"ハイドラント", sub:"ロボットボム", special:"スーパーチャクチ", sp:170, weight:"heavy", path:Hydra_0, pathSub:AutoBomb, pathSpecial:SplashDown},
    {name:"ハイドラントカスタム", sub:"トラップ", special:"インクアーマー", sp:200, weight:"heavy", path:Hydra_1, pathSub:InkMine, pathSpecial:InkArmor},
    {name:"クーゲルシュライバー", sub:"ポイズンミスト", special:"ジェットパック", sp:200, weight:"middle", path:Ballpoint_0, pathSub:ToxicMist, pathSpecial:Inkjet},
    {name:"クーゲルシュライバー・ヒュー", sub:"ジャンプビーコン", special:"アメフラシ", sp:220, weight:"middle", path:Ballpoint_1, pathSub:SquidBeakon, pathSpecial:InkStorm},
    {name:"ノーチラス47", sub:"ポイントセンサー", special:"イカスフィア", sp:180, weight:"middle", path:Nautilus_0, pathSub:PointSensor, pathSpecial:Baller},
    {name:"ノーチラス79", sub:"キューバンボム", special:"ジェットパック", sp:180, weight:"middle", path:Nautilus_1, pathSub:SuctionBomb, pathSpecial:Inkjet},
    {name:"スパッタリー", sub:"ジャンプビーコン", special:"キューバンボムピッチャー", sp:170, weight:"light", path:Dapple_0, pathSub:SquidBeakon, pathSpecial:SuctionRush},
    {name:"スパッタリー・ヒュー", sub:"ポイズンミスト", special:"アメフラシ", sp:170, weight:"light", path:Dapple_1, pathSub:ToxicMist, pathSpecial:InkStorm},
    {name:"スパッタリークリア", sub:"トーピード", special:"スーパーチャクチ", sp:170, weight:"light", path:Dapple_2, pathSub:Torpedo, pathSpecial:SplashDown},
    {name:"スプラマニューバー", sub:"クイックボム", special:"マルチミサイル", sp:180, weight:"middle", path:Dualies_0, pathSub:BurstBomb, pathSpecial:TentaMissile},
    {name:"ヒーローマニューバーレプリカ", sub:"クイックボム", special:"マルチミサイル", sp:180, weight:"middle", path:HeroDualies, pathSub:BurstBomb, pathSpecial:TentaMissile},
    {name:"スプラマニューバーコラボ", sub:"カーリングボム", special:"ジェットパック", sp:200, weight:"middle", path:Dualies_1, pathSub:CurlingBomb, pathSpecial:Inkjet},
    {name:"スプラマニューバーベッチュー", sub:"キューバンボム", special:"イカスフィア", sp:200, weight:"middle", path:Dualies_2, pathSub:SuctionBomb, pathSpecial:Baller},
    {name:"ケルビン525", sub:"トラップ", special:"ジェットパック", sp:180, weight:"middle", path:Glooga_0, pathSub:InkMine, pathSpecial:Inkjet},
    {name:"ケルビン525デコ", sub:"スプラッシュシールド", special:"スーパーチャクチ", sp:180, weight:"middle", path:Glooga_1, pathSub:SplashWall, pathSpecial:SplashDown},
    {name:"ケルビン525ベッチュー", sub:"タンサンボム", special:"インクアーマー", sp:180, weight:"middle", path:Glooga_2, pathSub:FizzyBomb, pathSpecial:InkArmor},
    {name:"デュアルスイーパー", sub:"ポイントセンサー", special:"マルチミサイル", sp:190, weight:"middle", path:DualieSquelcher_0, pathSub:PointSensor, pathSpecial:TentaMissile},
    {name:"デュアルスイーパーカスタム", sub:"スプラッシュボム", special:"アメフラシ", sp:220, weight:"middle", path:DualieSquelcher_1, pathSub:SplatBomb, pathSpecial:InkStorm},
    {name:"クアッドホッパーブラック", sub:"ロボットボム", special:"スーパーチャクチ", sp:190, weight:"middle", path:Tetra_0, pathSub:AutoBomb, pathSpecial:SplashDown},
    {name:"クアッドホッパーホワイト", sub:"スプリンクラー", special:"ロボットボムピッチャー", sp:200, weight:"middle", path:Tetra_1, pathSub:Sprinkler, pathSpecial:AutoRush},
    {name:"パラシェルター", sub:"スプリンクラー", special:"アメフラシ", sp:190, weight:"middle", path:Brella_0, pathSub:Sprinkler, pathSpecial:InkStorm},
    {name:"ヒーローシェルターレプリカ", sub:"スプリンクラー", special:"アメフラシ", sp:190, weight:"middle", path:HeroBrella, pathSub:Sprinkler, pathSpecial:InkStorm},
    {name:"パラシェルターソレーラ", sub:"ロボットボム", special:"スプラッシュボムピッチャー", sp:200, weight:"middle", path:Brella_1, pathSub:AutoBomb, pathSpecial:SplatRush},
    {name:"キャンピングシェルター", sub:"ジャンプビーコン", special:"バブルランチャー", sp:200, weight:"heavy", path:TentaBrella_0, pathSub:SquidBeakon, pathSpecial:BubbleBlower},
    {name:"キャンピングシェルターソレーラ", sub:"スプラッシュシールド", special:"カーリングボムピッチャー", sp:170, weight:"heavy", path:TentaBrella_1, pathSub:SplashWall, pathSpecial:CurlingRush},
    {name:"キャンピングシェルターカーモ", sub:"トラップ", special:"ウルトラハンコ", sp:210, weight:"heavy", path:TentaBrella_2, pathSub:InkMine, pathSpecial:UltraStamp},
    {name:"スパイガジェット", sub:"トラップ", special:"スーパーチャクチ", sp:150, weight:"light", path:Undercover_0, pathSub:InkMine, pathSpecial:SplashDown},
    {name:"スパイガジェットソレーラ", sub:"スプラッシュボム", special:"イカスフィア", sp:180, weight:"light", path:Undercover_1, pathSub:SplatBomb, pathSpecial:Baller},
    {name:"スパイガジェットベッチュー", sub:"トーピード", special:"インクアーマー", sp:190, weight:"light", path:Undercover_2, pathSub:Torpedo, pathSpecial:InkArmor},
    ];
  
  // 名前順に整列した配列を新たに定義
  const weaponSortedByName = weaponStatus.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);
  const weaponSortedBySub = weaponStatus.slice().sort((a, b) => (a.sub > b.sub) ? 1 : -1);
  const weaponSortedBySpe = weaponStatus.slice().sort((a, b) => (a.special > b.special) ? 1 : -1);
  
  // 表示する配列
  const [weaponArray, setArray] = useState(weaponStatus);
  
  const ref = useRef();

  // 選択された並び順に応じてstateを変更
  const selectBox = function() {
    let target = ref.current;
    if (target.value === "main") {
      setArray(weaponStatus);
    } else if (target.value === "name") {
      setArray(weaponSortedByName);
    } else if (target.value === "sub") {
      setArray(weaponSortedBySub);
    } else if (target.value === "spe") {
      setArray(weaponSortedBySpe);
    }
  };


  return (
    <div className="modal fade" id="weaponModal" tabIndex="-1" aria-labelledby="weaponModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content wpModalbg text-white bg-secondary">
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">ブキを選択</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="container pt-2 pb-1">
            <div className="d-flex align-items-center">
              <div className="select-index">  
                <span className="align-middle">並び替え :</span>
              </div>
              <div className="selectbox">
                <select className="form-select" ref = {ref} aria-label="sort" id="select-box" onChange={()=>{selectBox();}}>
                    <option value="main" defaultValue>メインウェポン</option>
                    <option value="sub">サブウェポン</option>
                    <option value="spe">スペシャルウェポン</option>
                    <option value="name">名前</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap px-0 px-lg-5">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[0]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[0].name}</span>
                </div>
              </div>
              <img src = {weaponArray[0].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[0].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[0].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[1]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[1].name}</span>
                </div>
              </div>
              <img src = {weaponArray[1].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[1].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[1].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[2]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[2].name}</span>
                </div>
              </div>
              <img src = {weaponArray[2].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[2].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[2].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[3]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[3].name}</span>
                </div>
              </div>
              <img src = {weaponArray[3].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[3].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[3].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[4]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[4].name}</span>
                </div>
              </div>
              <img src = {weaponArray[4].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[4].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[4].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[5]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[5].name}</span>
                </div>
              </div>
              <img src = {weaponArray[5].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[5].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[5].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[6]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[6].name}</span>
                </div>
              </div>
              <img src = {weaponArray[6].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[6].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[6].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[7]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[7].name}</span>
                </div>
              </div>
              <img src = {weaponArray[7].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[7].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[7].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[8]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[8].name}</span>
                </div>
              </div>
              <img src = {weaponArray[8].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[8].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[8].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[9]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[9].name}</span>
                </div>
              </div>
              <img src = {weaponArray[9].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[9].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[9].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[10]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[10].name}</span>
                </div>
              </div>
              <img src = {weaponArray[10].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[10].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[10].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[11]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[11].name}</span>
                </div>
              </div>
              <img src = {weaponArray[11].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[11].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[11].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[12]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[12].name}</span>
                </div>
              </div>
              <img src = {weaponArray[12].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[12].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[12].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[13]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[13].name}</span>
                </div>
              </div>
              <img src = {weaponArray[13].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[13].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[13].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[14]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[14].name}</span>
                </div>
              </div>
              <img src = {weaponArray[14].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[14].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[14].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[15]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[15].name}</span>
                </div>
              </div>
              <img src = {weaponArray[15].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[15].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[15].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[16]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[16].name}</span>
                </div>
              </div>
              <img src = {weaponArray[16].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[16].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[16].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[17]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[17].name}</span>
                </div>
              </div>
              <img src = {weaponArray[17].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[17].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[17].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[18]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[18].name}</span>
                </div>
              </div>
              <img src = {weaponArray[18].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[18].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[18].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[19]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[19].name}</span>
                </div>
              </div>
              <img src = {weaponArray[19].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[19].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[19].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[20]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[20].name}</span>
                </div>
              </div>
              <img src = {weaponArray[20].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[20].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[20].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[21]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[21].name}</span>
                </div>
              </div>
              <img src = {weaponArray[21].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[21].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[21].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[22]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[22].name}</span>
                </div>
              </div>
              <img src = {weaponArray[22].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[22].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[22].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[23]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[23].name}</span>
                </div>
              </div>
              <img src = {weaponArray[23].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[23].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[23].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[24]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[24].name}</span>
                </div>
              </div>
              <img src = {weaponArray[24].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[24].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[24].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[25]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[25].name}</span>
                </div>
              </div>
              <img src = {weaponArray[25].path} className="img-weapon" alt=""/>
              <div className="row align-items-center justify-content-around sub-sp-bg">
                <div className="sub-sp">
                  <img src={weaponArray[25].pathSub} className="img-sub-sp" alt=""/>
                </div>
                <div className="sub-sp">
                  <img src={weaponArray[25].pathSpecial} className="img-sub-sp" alt=""/>
                </div>
              </div>
            </div>
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[26]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[26].name}</span>
                </div>
              </div>
              <img src = {weaponArray[26].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[26].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[26].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[27]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[27].name}</span>
                </div>
              </div>
              <img src = {weaponArray[27].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[27].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[27].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[28]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[28].name}</span>
                </div>
              </div>
              <img src = {weaponArray[28].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[28].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[28].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[29]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[29].name}</span>
                </div>
              </div>
              <img src = {weaponArray[29].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[29].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[29].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[30]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[30].name}</span>
                </div>
              </div>
              <img src = {weaponArray[30].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[30].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[30].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[31]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[31].name}</span>
                </div>
              </div>
              <img src = {weaponArray[31].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[31].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[31].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[32]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[32].name}</span>
                </div>
              </div>
              <img src = {weaponArray[32].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[32].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[32].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[33]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[33].name}</span>
                </div>
              </div>
              <img src = {weaponArray[33].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[33].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[33].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[34]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[34].name}</span>
                </div>
              </div>
              <img src = {weaponArray[34].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[34].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[34].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[35]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[35].name}</span>
                </div>
              </div>
              <img src = {weaponArray[35].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[35].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[35].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[36]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[36].name}</span>
                </div>
              </div>
              <img src = {weaponArray[36].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[36].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[36].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[37]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[37].name}</span>
                </div>
              </div>
              <img src = {weaponArray[37].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[37].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[37].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[38]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[38].name}</span>
                </div>
              </div>
              <img src = {weaponArray[38].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[38].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[38].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[39]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[39].name}</span>
                </div>
              </div>
              <img src = {weaponArray[39].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[39].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[39].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[40]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[40].name}</span>
                </div>
              </div>
              <img src = {weaponArray[40].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[40].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[40].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[41]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[41].name}</span>
                </div>
              </div>
              <img src = {weaponArray[41].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[41].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[41].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[42]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[42].name}</span>
                </div>
              </div>
              <img src = {weaponArray[42].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[42].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[42].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[43]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[43].name}</span>
                </div>
              </div>
              <img src = {weaponArray[43].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[43].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[43].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[44]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[44].name}</span>
                </div>
              </div>
              <img src = {weaponArray[44].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[44].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[44].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[45]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[45].name}</span>
                </div>
              </div>
              <img src = {weaponArray[45].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[45].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[45].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[46]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[46].name}</span>
                </div>
              </div>
              <img src = {weaponArray[46].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[46].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[46].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[47]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[47].name}</span>
                </div>
              </div>
              <img src = {weaponArray[47].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[47].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[47].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[48]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[48].name}</span>
                </div>
              </div>
              <img src = {weaponArray[48].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[48].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[48].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[49]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[49].name}</span>
                </div>
              </div>
              <img src = {weaponArray[49].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[49].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[49].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[50]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[50].name}</span>
                </div>
              </div>
              <img src = {weaponArray[50].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[50].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[50].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[51]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[51].name}</span>
                </div>
              </div>
              <img src = {weaponArray[51].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[51].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[51].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[52]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[52].name}</span>
                </div>
              </div>
              <img src = {weaponArray[52].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[52].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[52].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[53]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[53].name}</span>
                </div>
              </div>
              <img src = {weaponArray[53].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[53].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[53].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[54]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[54].name}</span>
                </div>
              </div>
              <img src = {weaponArray[54].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[54].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[54].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[55]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[55].name}</span>
                </div>
              </div>
              <img src = {weaponArray[55].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[55].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[55].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[56]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[56].name}</span>
                </div>
              </div>
              <img src = {weaponArray[56].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[56].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[56].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[57]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[57].name}</span>
                </div>
              </div>
              <img src = {weaponArray[57].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[57].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[57].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[58]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[58].name}</span>
                </div>
              </div>
              <img src = {weaponArray[58].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[58].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[58].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[59]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[59].name}</span>
                </div>
              </div>
              <img src = {weaponArray[59].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[59].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[59].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[60]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[60].name}</span>
                </div>
              </div>
              <img src = {weaponArray[60].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[60].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[60].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[61]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[61].name}</span>
                </div>
              </div>
              <img src = {weaponArray[61].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[61].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[61].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[62]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[62].name}</span>
                </div>
              </div>
              <img src = {weaponArray[62].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[62].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[62].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[63]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[63].name}</span>
                </div>
              </div>
              <img src = {weaponArray[63].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[63].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[63].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[64]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[64].name}</span>
                </div>
              </div>
              <img src = {weaponArray[64].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[64].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[64].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[65]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[65].name}</span>
                </div>
              </div>
              <img src = {weaponArray[65].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[65].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[65].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[66]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[66].name}</span>
                </div>
              </div>
              <img src = {weaponArray[66].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[66].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[66].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[67]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[67].name}</span>
                </div>
              </div>
              <img src = {weaponArray[67].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[67].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[67].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[68]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[68].name}</span>
                </div>
              </div>
              <img src = {weaponArray[68].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[68].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[68].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[69]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[69].name}</span>
                </div>
              </div>
              <img src = {weaponArray[69].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[69].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[69].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[70]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[70].name}</span>
                </div>
              </div>
              <img src = {weaponArray[70].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[70].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[70].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[71]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[71].name}</span>
                </div>
              </div>
              <img src = {weaponArray[71].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[71].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[71].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[72]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[72].name}</span>
                </div>
              </div>
              <img src = {weaponArray[72].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[72].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[72].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[73]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[73].name}</span>
                </div>
              </div>
              <img src = {weaponArray[73].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[73].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[73].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[74]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[74].name}</span>
                </div>
              </div>
              <img src = {weaponArray[74].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[74].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[74].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[75]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[75].name}</span>
                </div>
              </div>
              <img src = {weaponArray[75].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[75].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[75].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[76]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[76].name}</span>
                </div>
              </div>
              <img src = {weaponArray[76].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[76].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[76].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[77]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[77].name}</span>
                </div>
              </div>
              <img src = {weaponArray[77].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[77].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[77].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[78]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[78].name}</span>
                </div>
              </div>
              <img src = {weaponArray[78].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[78].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[78].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[79]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[79].name}</span>
                </div>
              </div>
              <img src = {weaponArray[79].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[79].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[79].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[80]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[80].name}</span>
                </div>
              </div>
              <img src = {weaponArray[80].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[80].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[80].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[81]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[81].name}</span>
                </div>
              </div>
              <img src = {weaponArray[81].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[81].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[81].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[82]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[82].name}</span>
                </div>
              </div>
              <img src = {weaponArray[82].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[82].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[82].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[83]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[83].name}</span>
                </div>
              </div>
              <img src = {weaponArray[83].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[83].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[83].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[84]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[84].name}</span>
                </div>
              </div>
              <img src = {weaponArray[84].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[84].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[84].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[85]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[85].name}</span>
                </div>
              </div>
              <img src = {weaponArray[85].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[85].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[85].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[86]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[86].name}</span>
                </div>
              </div>
              <img src = {weaponArray[86].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[86].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[86].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[87]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[87].name}</span>
                </div>
              </div>
              <img src = {weaponArray[87].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[87].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[87].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[88]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[88].name}</span>
                </div>
              </div>
              <img src = {weaponArray[88].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[88].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[88].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[89]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[89].name}</span>
                </div>
              </div>
              <img src = {weaponArray[89].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[89].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[89].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[90]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[90].name}</span>
                </div>
              </div>
              <img src = {weaponArray[90].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[90].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[90].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[91]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[91].name}</span>
                </div>
              </div>
              <img src = {weaponArray[91].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[91].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[91].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[92]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[92].name}</span>
                </div>
              </div>
              <img src = {weaponArray[92].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[92].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[92].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[93]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[93].name}</span>
                </div>
              </div>
              <img src = {weaponArray[93].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[93].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[93].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[94]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[94].name}</span>
                </div>
              </div>
              <img src = {weaponArray[94].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[94].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[94].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[95]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[95].name}</span>
                </div>
              </div>
              <img src = {weaponArray[95].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[95].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[95].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[96]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[96].name}</span>
                </div>
              </div>
              <img src = {weaponArray[96].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[96].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[96].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[97]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[97].name}</span>
                </div>
              </div>
              <img src = {weaponArray[97].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[97].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[97].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[98]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[98].name}</span>
                </div>
              </div>
              <img src = {weaponArray[98].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[98].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[98].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[99]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[99].name}</span>
                </div>
              </div>
              <img src = {weaponArray[99].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[99].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[99].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[100]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[100].name}</span>
                </div>
              </div>
              <img src = {weaponArray[100].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[100].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[100].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[101]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[101].name}</span>
                </div>
              </div>
              <img src = {weaponArray[101].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[101].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[101].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[102]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[102].name}</span>
                </div>
              </div>
              <img src = {weaponArray[102].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[102].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[102].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[103]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[103].name}</span>
                </div>
              </div>
              <img src = {weaponArray[103].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[103].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[103].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[104]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[104].name}</span>
                </div>
              </div>
              <img src = {weaponArray[104].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[104].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[104].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[105]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[105].name}</span>
                </div>
              </div>
              <img src = {weaponArray[105].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[105].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[105].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[106]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[106].name}</span>
                </div>
              </div>
              <img src = {weaponArray[106].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[106].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[106].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[107]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[107].name}</span>
                </div>
              </div>
              <img src = {weaponArray[107].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[107].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[107].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[108]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[108].name}</span>
                </div>
              </div>
              <img src = {weaponArray[108].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[108].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[108].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[109]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[109].name}</span>
                </div>
              </div>
              <img src = {weaponArray[109].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[109].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[109].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[110]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[110].name}</span>
                </div>
              </div>
              <img src = {weaponArray[110].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[110].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[110].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[111]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[111].name}</span>
                </div>
              </div>
              <img src = {weaponArray[111].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[111].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[111].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[112]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[112].name}</span>
                </div>
              </div>
              <img src = {weaponArray[112].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[112].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[112].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[113]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[113].name}</span>
                </div>
              </div>
              <img src = {weaponArray[113].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[113].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[113].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[114]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[114].name}</span>
                </div>
              </div>
              <img src = {weaponArray[114].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[114].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[114].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[115]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[115].name}</span>
                </div>
              </div>
              <img src = {weaponArray[115].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[115].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[115].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[116]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[116].name}</span>
                </div>
              </div>
              <img src = {weaponArray[116].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[116].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[116].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[117]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[117].name}</span>
                </div>
              </div>
              <img src = {weaponArray[117].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[117].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[117].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[118]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[118].name}</span>
                </div>
              </div>
              <img src = {weaponArray[118].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[118].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[118].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[119]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[119].name}</span>
                </div>
              </div>
              <img src = {weaponArray[119].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[119].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[119].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[120]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[120].name}</span>
                </div>
              </div>
              <img src = {weaponArray[120].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[120].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[120].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[121]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[121].name}</span>
                </div>
              </div>
              <img src = {weaponArray[121].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[121].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[121].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[122]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[122].name}</span>
                </div>
              </div>
              <img src = {weaponArray[122].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[122].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[122].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[123]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[123].name}</span>
                </div>
              </div>
              <img src = {weaponArray[123].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[123].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[123].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[124]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[124].name}</span>
                </div>
              </div>
              <img src = {weaponArray[124].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[124].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[124].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[125]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[125].name}</span>
                </div>
              </div>
              <img src = {weaponArray[125].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[125].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[125].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[126]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[126].name}</span>
                </div>
              </div>
              <img src = {weaponArray[126].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[126].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[126].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[127]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[127].name}</span>
                </div>
              </div>
              <img src = {weaponArray[127].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[127].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[127].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[128]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[128].name}</span>
                </div>
              </div>
              <img src = {weaponArray[128].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[128].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[128].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[129]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[129].name}</span>
                </div>
              </div>
              <img src = {weaponArray[129].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[129].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[129].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[130]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[130].name}</span>
                </div>
              </div>
              <img src = {weaponArray[130].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[130].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[130].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[131]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[131].name}</span>
                </div>
              </div>
              <img src = {weaponArray[131].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[131].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[131].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[132]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[132].name}</span>
                </div>
              </div>
              <img src = {weaponArray[132].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[132].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[132].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[133]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[133].name}</span>
                </div>
              </div>
              <img src = {weaponArray[133].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[133].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[133].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[134]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[134].name}</span>
                </div>
              </div>
              <img src = {weaponArray[134].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[134].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[134].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[135]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[135].name}</span>
                </div>
              </div>
              <img src = {weaponArray[135].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[135].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[135].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[136]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[136].name}</span>
                </div>
              </div>
              <img src = {weaponArray[136].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[136].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[136].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[137]);
                }
              }
            >
              <div className="weapon-icon-tooltip-arrow">
                <div className="tooltip-container">
                  <span className="weapon-icon-tooltip font-type2">{weaponArray[137].name}</span>
                </div>
              </div>
              <img src = {weaponArray[137].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[137].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[137].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[138]);
                  }
                }
              >
                <div className="weapon-icon-tooltip-arrow">
                  <div className="tooltip-container">
                    <span className="weapon-icon-tooltip font-type2">{weaponArray[138].name}</span>
                  </div>
                </div>
                <img src = {weaponArray[138].path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[138].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[138].pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
              
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary m-auto" data-bs-dismiss="modal">とじる</button>
          </div>
        </div>
      </div>
    </div>  
  );
});

export default WeaponModal;