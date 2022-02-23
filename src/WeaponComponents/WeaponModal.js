import { useState, useEffect } from 'react';
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



const weaponStatus = [
    {name:"ボールドマーカー", sub:"CurlingBomb", special:"SplashDown", sp:160, weight:"light", path:Sploosh_0},
    {name:"ボールドマーカーネオ", sub:"Beakon", special:"Missiles", sp:170, weight:"light", path:Sploosh_1},
    {name:"ボールドマーカー7", sub:"SplatBomb", special:"Hammer", sp:170, weight:"light", path:Sploosh_2},
    {name:"わかばシューター", sub:"SplatBomb", special:"Armor", sp:180, weight:"light", path:Jr_0},
    {name:"もみじシューター", sub:"AutoBomb", special:"InkStorm", sp:160, weight:"light", path:Jr_1},
    {name:"おちばシューター", sub:"Torpedo", special:"Bubbles", sp:190, weight:"light", path:Jr_2},
    {name:"シャープマーカー", sub:"ToxicMist", special:"Inkjet", sp:170, weight:"light", path:Splash_0},
    {name:"シャープマーカーネオ", sub:"BurstBomb", special:"SuctionRush", sp:210, weight:"light", path:Splash_1},
    {name:"プロモデラーMG", sub:"SuctionBomb", special:"CurlingRush", sp:160, weight:"light", path:Aerospray_0},
    {name:"プロモデラーRG", sub:"Sprinkler", special:"Baller", sp:180, weight:"light", path:Aerospray_1},
    {name:"プロモデラーPG", sub:"BurstBomb", special:"BooyahBomb", sp:190, weight:"light", path:Aerospray_2},
    {name:"スプラシューター", sub:"BurstBomb", special:"SplashDown", sp:170, weight:"middle", path:SplatterShot_0},
    {name:"ヒーローシューターレプリカ", sub:"BurstBomb", special:"SplashDown", sp:170, weight:"middle", path:HeroShot},
    {name:"スプラシューターコラボ", sub:"SplatBomb", special:"Inkjet", sp:200, weight:"middle", path:SplatterShot_1},
    {name:"スプラシューターベッチュー", sub:"SuctionBomb", special:"Missiles", sp:180, weight:"middle", path:SplatterShot_2},
    {name:"オクタシューター", sub:"SplatBomb", special:"Inkjet", sp:200, weight:"middle", path:OctoShot},
    {name:".52ガロン", sub:"Sencor", special:"Baller", sp:170, weight:"middle", path:Gal52_0},
    {name:".52ガロンデコ", sub:"CurlingBomb", special:"Stingray", sp:190, weight:"middle", path:Gal52_1},
    {name:".52ガロンベッチュー", sub:"SplashWall", special:"BooyahBomb", sp:190, weight:"middle", path:Gal52_2},
    {name:"N-ZAP85", sub:"SuctionBomb", special:"Armor", sp:200, weight:"light", path:Nzap_0},
    {name:"N-ZAP89", sub:"AutoBomb", special:"Missiles", sp:180, weight:"light", path:Nzap_1},
    {name:"N-ZAP83", sub:"Sprinkler", special:"InkStorm", sp:170, weight:"middle", path:Nzap_2},
    {name:"プライムシューター", sub:"Sencor",special:"InkStorm", sp:170, weight:"middle", path:Pro_0},
    {name:"プライムシューターコラボ", sub:"SuctionBomb", special:"Bubbles", sp:190, weight:"middle", path:Pro_1},
    {name:"プライムシューターベッチュー", sub:"SplatBomb", special:"BooyahBomb", sp:210, weight:"middle", path:Pro_2},
    {name:".96ガロン", sub:"Sprinkler", special:"Armor", sp:190, weight:"middle", path:Gal96_0},
    {name:".96ガロンデコ", sub:"SplashWall", special:"SplashDown", sp:170, weight:"middle", path:Gal96_1},
    {name:"ジェットスイーパー", sub:"ToxicMist", special:"Missiles", sp:180, weight:"middle", path:Jet_0},
    {name:"ジェットスイーパーカスタム", sub:"BurstBomb", special:"Stingray", sp:190, weight:"middle", path:Jet_1},
    {name:"ノヴァブラスター", sub:"InkMine", special:"SuctionRush", sp:170, weight:"light", path:Luna_0},
    {name:"ノヴァブラスターネオ", sub:"SplatBomb", special:"Baller", sp:170, weight:"light", path:Luna_1},
    {name:"ノヴァブラスターベッチュー", sub:"FizzyBomb", special:"InkStorm", sp:170, weight:"light", path:Luna_2},
    {name:"ホットブラスター", sub:"ToxicMist", special:"SplashDown", sp:170, weight:"middle", path:Blaster_0},
    {name:"ヒーローブラスターレプリカ", sub:"ToxicMist", special:"SplashDown", sp:170, weight:"middle", path:HeroBlaster},
    {name:"ホットブラスターカスタム", sub:"AutoBomb", special:"Inkjet", sp:190, weight:"middle", path:Blaster_1},
    {name:"ロングブラスター", sub:"SuctionBomb", special:"InkStorm", sp:200, weight:"middle", path:Range_0},
    {name:"ロングブラスターカスタム", sub:"CurlingBomb", special:"Bubbles", sp:170, weight:"middle", path:Range_1},
    {name:"ロングブラスターネクロ", sub:"BurstBomb", special:"Missiles", sp:190, weight:"middle", path:Range_2},
    {name:"クラッシュブラスター", sub:"SplatBomb", special:"Stingray", sp:180, weight:"light", path:ClashBlaster_0},
    {name:"クラッシュブラスターネオ", sub:"CurlingBomb", special:"Missiles", p:180, weight:"light", path:ClashBlaster_1},
    {name:"ラピッドブラスター", sub:"InkMine", special:"SplatRush", sp:200, weight:"middle", path:Rapid_0},
    {name:"ラピッドブラスターデコ", sub:"SuctionBomb", special:"Inkjet", sp:190, weight:"middle", path:Rapid_1},
    {name:"ラピッドブラスターベッチュー", sub:"Torpedo", special:"Baller", sp:200, weight:"middle", path:Rapid_2},
    {name:"Rブラスターエリート", sub:"ToxicMist", special:"InkStorm", sp:180, weight:"middle", path:RapidPro_0},
    {name:"Rブラスターエリートデコ", sub:"SplashWall", special:"Armor", sp:180, weight:"middle", path:RapidPro_1},
    {name:"L-3リールガン", sub:"CurlingBomb", special:"Baller", sp:220, weight:"middle", path:L3Nozzle_0},
    {name:"L-3リールガンD", sub:"BurstBomb", special:"Inkjet", sp:200, weight:"middle", path:L3Nozzle_1},
    {name:"L-3リールガンベッチュー", sub:"SplashWall", special:"Hammer", sp:180, weight:"middle", path:L3Nozzle_2},
    {name:"H-3リールガン", sub:"Sencor", special:"Missiles", sp:170, weight:"middle", path:H3Nozzle_0},
    {name:"H-3リールガンD", sub:"SuctionBomb", special:"Armor", sp:220, weight:"middle", path:H3Nozzle_1},
    {name:"H-3リールガンチェリー", sub:"SplashWall", special:"Bubbles", sp:180, weight:"middle", path:H3Nozzle_2},
    {name:"ボトルカイザー", sub:"SplashWall", special:"Stingray", sp:180, weight:"middle", path:Squeezer_0},
    {name:"ボトルカイザーフォイル", sub:"SplatBomb", special:"Bubbles", sp:200, weight:"middle", path:Squeezer_1},
    {name:"カーボンローラー", sub:"AutoBomb", special:"InkStorm", sp:160, weight:"light", path:Carbon_0},
    {name:"カーボンローラーデコ", sub:"BurstBomb", special:"AutoRush", sp:190, weight:"light", path:Carbon_1},
    {name:"スプラローラー", sub:"CurlingBomb", special:"SplashDown", sp:170, weight:"middle", path:Roller_0},
    {name:"ヒーローローラー", sub:"CurlingBomb", special:"SplashDown", sp:170, weight:"middle", path:HeroRoller},
    {name:"スプラローラーコラボ", sub:"Beakon", special:"Baller", sp:170, weight:"middle", path:Roller_1},
    {name:"スプラローラーベッチュー", sub:"SplatBomb", special:"Bubbles", sp:180, weight:"middle", path:Roller_2},
    {name:"ダイナモローラー", sub:"InkMine", special:"Stingray", sp:180, weight:"heavy", path:Dynamo_0},
    {name:"ダイナモローラーテスラ", sub:"SplatBomb", special:"Armor", sp:190, weight:"heavy", path:Dynamo_1},
    {name:"ダイナモローラーベッチュー", sub:"Sprinkler", special:"BooyahBomb", sp:180, weight:"heavy", path:Dynamo_2},
    {name:"ヴァリアブルローラー", sub:"SplashWall", special:"SplatRush", sp:180, weight:"middle", path:Flingza_0},
    {name:"ヴァリアブルローラーフォイル", sub:"SuctionBomb", special:"Missiles", sp:180, weight:"middle", path:Flingza_1},
    {name:"パブロ", sub:"SplatBomb", special:"SplashDown", sp:150, weight:"light", path:Brush_0},
    {name:"パブロ・ヒュー", sub:"InkMine", special:"Baller", sp:180, weight:"light", path:Brush_1},
    {name:"パーマネントパブロ", sub:"Sprinkler", special:"Armor", sp:180, weight:"light", path:Brush_2},
    {name:"ホクサイ", sub:"AutoBomb", special:"Inkjet", sp:170, weight:"middle", path:Octobrush_0},
    {name:"ヒーローブラシレプリカ", sub:"AutoBomb", special:"Inkjet", sp:170, weight:"middle", path:HeroBrush},
    {name:"ホクサイ・ヒュー", sub:"Beakon", special:"Missiles", sp:170, weight:"middle", path:Octobrush_1},
    {name:"ホクサイベッチュー", sub:"SuctionBomb", special:"Hammer", sp:180, weight:"middle", path:Octobrush_2},
    {name:"スクイックリンα", sub:"Sencor", special:"Armor", sp:170, weight:"middle", path:Squiffer_0},
    {name:"スクイックリンβ", sub:"AutoBomb", special:"Baller", sp:180, weight:"middle", path:Squiffer_1},
    {name:"スクイックリンγ", sub:"SuctionBomb", special:"Inkjet", sp:180, weight:"middle", path:Squiffer_2},
    {name:"スプラチャージャー", sub:"SplatBomb", special:"Stingray", sp:220, weight:"middle", path:Charger_0},
    {name:"ヒーローチャージャーレプリカ", sub:"SplatBomb", special:"Stingray", sp:220, weight:"middle", path:HeroCharger},
    {name:"スプラチャージャーコラボ", sub:"SplashWall", special:"SuctionRush", sp:220, weight:"middle", path:Charger_1},
    {name:"スプラチャージャーベッチュー", sub:"Sprinkler", special:"Baller",sp:190, weight:"middle", path:Charger_2},
    {name:"スプラスコープ", sub:"SplatBomb", special:"Stingray", sp:220, weight:"middle", path:ChargerScope_0},
    {name:"スプラスコープコラボ", sub:"SplashWall", special:"SuctionRush", sp:220, weight:"middle", path:ChargerScope_1},
    {name:"スプラスコープベッチュー", sub:"Sprinkler", special:"Baller", sp:190, weight:"middle", path:ChargerScope_2},
    {name:"リッター4K", sub:"InkMine", sp:190, special:"InkStorm", weight:"heavy", path:Eliter_0},
    {name:"リッター4Kカスタム", sub:"Beakon", special:"Bubbles", sp:170, weight:"heavy", path:Eliter_1},
    {name:"4Kスコープ", sub:"InkMine", special:"InkStorm", sp:190, weight:"heavy", path:EliterScope_0},
    {name:"4Kスコープカスタム", sub:"Beakon", special:"Bubbles", sp:170, weight:"heavy", path:EliterScope_1},
    {name:"14式竹筒銃・甲", sub:"CurlingBomb", special:"Missiles", sp:200, weight:"light", path:Bamboo_0},
    {name:"14式竹筒銃・乙", sub:"ToxicMist", special:"BurstRush", sp:160, weight:"light", path:Bamboo_1},
    {name:"14式竹筒銃・丙", sub:"FizzyBomb", special:"Bubbles", sp:190, weight:"light", path:Bamboo_2},
    {name:"ソイチューバー", sub:"SuctionBomb", special:"SplashDown", sp:160, weight:"middle", path:GooTuber_0},
    {name:"ソイチューバーカスタム", sub:"CurlingBomb", special:"Inkjet", sp:170, weight:"middle", path:GooTuber_1},
    {name:"バケットスロッシャー", sub:"SuctionBomb", special:"Missiles", sp:190, weight:"middle", path:Slosher_0},
    {name:"ヒーロースロッシャーレプリカ", sub:"SuctionBomb", special:"Missiles", sp:190, weight:"middle", path:HeroSlosher},
    {name:"バケットスロッシャーデコ", sub:"Sprinkler", special:"Baller", sp:210, weight:"middle", path:Slosher_1},
    {name:"バケットスロッシャーソーダ", sub:"SplatBomb", special:"BurstRush", sp:210, weight:"middle", path:Slosher_2},
    {name:"ヒッセン", sub:"BurstBomb", special:"Armor", sp:190, weight:"light", path:Tri_0},
    {name:"ヒッセン・ヒュー", sub:"SplatBomb", special:"InkStorm", sp:170, weight:"light", path:Tri_1},
    {name:"スクリュースロッシャー", sub:"AutoBomb", special:"Stingray", sp:190, weight:"middle", path:Machine_0},
    {name:"スクリュースロッシャーネオ", sub:"Sencor", special:"SplatRush", sp:180, weight:"middle", path:Machine_1},
    {name:"スクリュースロッシャーベッチュー", sub:"FizzyBomb", special:"SplashDown", sp:190, weight:"middle", path:Machine_2},
    {name:"オーバーフロッシャー", sub:"SplashWall", special:"InkStorm", sp:180, weight:"middle", path:Blob_0},
    {name:"オーバーフロッシャーデコ", sub:"Sprinkler", special:"SuctionRush", sp:190, weight:"middle", path:Blob_1},
    {name:"エクスプロッシャー", sub:"Sprinkler", special:"Bubbles", sp:210, weight:"heavy", path:Explosher_0},
    {name:"エクスプロッシャーカスタム", sub:"Sencor", special:"Baller", sp:220, weight:"heavy", path:Explosher_1},
    {name:"スプラスピナー", sub:"BurstBomb", special:"Missiles", sp:210, weight:"middle", path:Mini_0},
    {name:"スプラスピナーコラボ", sub:"BurstBomb", special:"InkStorm", sp:180, weight:"middle", path:Mini_1},
    {name:"スプラスピナーベッチュー", sub:"ToxicMist", special:"Hammer", sp:180, weight:"middle", path:Mini_2},
    {name:"バレルスピナー", sub:"Sprinkler", special:"Stingray", sp:200, weight:"middle", path:Heavy_0},
    {name:"ヒーロースピナーレプリカ", sub:"Sprinkler", special:"Stingray", sp:200, weight:"middle", path:HeroHeavy},
    {name:"バレルスピナーデコ", sub:"SplashWall", special:"Bubbles", sp:180, weight:"middle", path:Heavy_1},
    {name:"バレルスピナーリミックス", sub:"Sencor", special:"BooyahBomb", sp:190, weight:"middle", path:Heavy_2},
    {name:"ハイドラント", sub:"AutoBomb", special:"SplashDown", sp:170, weight:"heavy", path:Hydra_0},
    {name:"ハイドラントカスタム", sub:"InkMine", special:"Armor", sp:200, weight:"heavy", path:Hydra_1},
    {name:"クーゲルシュライバー", sub:"ToxicMist", special:"Inkjet", sp:200, weight:"middle", path:Ballpoint_0},
    {name:"クーゲルシュライバー・ヒュー", sub:"Beakon", special:"InkStorm", sp:220, weight:"middle", path:Ballpoint_1},
    {name:"ノーチラス47", sub:"Sencor", special:"Baller", sp:180, weight:"middle", path:Nautilus_0},
    {name:"ノーチラス79", sub:"SuctionBomb", special:"Inkjet", sp:180, weight:"middle", path:Nautilus_1},
    {name:"スパッタリー", sub:"Beakon", special:"SuctionRush", sp:170, weight:"light", path:Dapple_0},
    {name:"スパッタリー・ヒュー", sub:"ToxicMist", special:"InkStorm", sp:170, weight:"light", path:Dapple_1},
    {name:"スパッタリークリア", sub:"Torpedo", special:"SplashDown", sp:170, weight:"light", path:Dapple_2},
    {name:"スプラマニューバー", sub:"BurstBomb", special:"Missiles", sp:180, weight:"middle", path:Dualies_0},
    {name:"ヒーローマニューバーレプリカ", sub:"BurstBomb", special:"Missiles", sp:180, weight:"middle", path:HeroDualies},
    {name:"スプラマニューバーコラボ", sub:"CurlingBomb", special:"Inkjet", sp:200, weight:"middle", path:Dualies_1},
    {name:"スプラマニューバーベッチュー", sub:"SuctionBomb", special:"Baller", sp:200, weight:"middle", path:Dualies_2},
    {name:"ケルビン525", sub:"InkMine", special:"Inkjet", sp:180, weight:"middle", path:Glooga_0},
    {name:"ケルビン525デコ", sub:"SplashWall", special:"SplashDown", sp:180, weight:"middle", path:Glooga_1},
    {name:"ケルビン525ベッチュー", sub:"FizzyBomb", special:"Armor", sp:180, weight:"middle", path:Glooga_2},
    {name:"デュアルスイーパー", sub:"Sencor", special:"Missiles", sp:190, weight:"middle", path:DualieSquelcher_0},
    {name:"デュアルスイーパーカスタム", sub:"SplatBomb", special:"InkStorm", sp:220, weight:"middle", path:DualieSquelcher_1},
    {name:"クアッドホッパーブラック", sub:"AutoBomb", special:"SplashDown", sp:190, weight:"middle", path:Tetra_0},
    {name:"クアッドホッパーホワイト", sub:"Sprinkler", special:"AutoRush", sp:200, weight:"middle", path:Tetra_1},
    {name:"パラシェルター", sub:"Sprinkler", special:"InkStorm", sp:190, weight:"middle", path:Brella_0},
    {name:"ヒーローシェルターレプリカ", sub:"Sprinkler", special:"InkStorm", sp:190, weight:"middle", path:HeroBrella},
    {name:"パラシェルターソレーラ", sub:"AutoBomb", special:"SplatRush", sp:200, weight:"middle", path:Brella_1},
    {name:"キャンピングシェルター", sub:"Beakon", special:"Bubbles", sp:200, weight:"heavy", path:TentaBrella_0},
    {name:"キャンピングシェルターソレーラ", sub:"SplashWall", special:"CurlingRush", sp:170, weight:"heavy", path:TentaBrella_1},
    {name:"キャンピングシェルターカーモ", sub:"InkMine", special:"Hammer", sp:210, weight:"heavy", path:TentaBrella_2},
    {name:"スパイガジェット", sub:"InkMine", special:"SplashDown", sp:150, weight:"light", path:Undercover_0},
    {name:"スパイガジェットソレーラ", sub:"SplatBomb", special:"Baller", sp:180, weight:"light", path:Undercover_1},
    {name:"スパイガジェットベッチュー", sub:"Torpedo", special:"Armor", sp:190, weight:"light", path:Undercover_2},
  ];

// 名前順に整列した配列を新たに定義
const weaponSortedByName = weaponStatus.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);
const weaponSortedBySub = weaponStatus.slice().sort((a, b) => (a.sub > b.sub) ? 1 : -1);
const weaponSortedBySpe = weaponStatus.slice().sort((a, b) => (a.special > b.special) ? 1 : -1);


const WeaponModal = (props) => {
  // 表示する配列
  const [weaponArray, setArray] = useState(weaponStatus);
  //  並び順の管理
  const [howToSort, setSort] = useState("byMain");
  
  // 並び順のstateに対応して表示する配列を変更
  useEffect(
    () => {
      if (howToSort === "byMain") {
        setArray(weaponStatus);
      } else if (howToSort === "bySub") {
        setArray(weaponSortedBySub);
      } else if (howToSort === "bySpe") {
        setArray(weaponSortedBySpe);
      } else if (howToSort === "byName") {
        setArray(weaponSortedByName);
      }
    },
    [howToSort]
  );
  
  // 選択された並び順に応じてstateを変更
  const selectBox = function() {
    let target = document.getElementById("select-box");
    if (target.value === "main" && howToSort !== "byMain") {
      setSort("byMain");
    } else if (target.value === "name" && howToSort !== "byName") {
      setSort("byName");
    } else if (target.value === "sub" && howToSort !== "bySub") {
      setSort("bySub");
    } else if (target.value === "spe" && howToSort !== "bySpe") {
      setSort("bySpe");
    }
  };
  
  // サブウェポンをstringで受け取ってpathを返す
  const subWeapon = function(sub) {
    if (sub === "CurlingBomb") {
      return CurlingBomb
    } else if (sub === "SplatBomb") {
      return SplatBomb
    } else if (sub === "SuctionBomb") {
      return SuctionBomb
    } else if (sub === "AutoBomb") {
      return AutoBomb
    } else if (sub === "BurstBomb") {
      return BurstBomb
    } else if (sub === "FizzyBomb") {
      return FizzyBomb
    } else if (sub === "InkMine") {
      return InkMine
    } else if (sub === "Sprinkler") {
      return Sprinkler
    } else if (sub === "Torpedo") {
      return Torpedo
    } else if (sub === "Beakon") {
      return SquidBeakon
    } else if (sub === "SplashWall") {
      return SplashWall
    } else if (sub === "Sencor") {
      return PointSensor
    } else if (sub === "ToxicMist") {
      return ToxicMist
    } 
  }
  // スペシャルウェポンをstringで受け取ってpathを返す
  const spWeapon = function(sp) {
    if (sp === "SplashDown") {
      return SplashDown
    } else if (sp === "SplatRush") {
      return SplatRush
    } else if (sp === "SuctionRush") {
      return SuctionRush
    } else if (sp === "AutoRush") {
      return AutoRush
    } else if (sp === "BurstRush") {
      return BurstRush
    } else if (sp === "Missiles") {
      return TentaMissile
    } else if (sp === "Baller") {
      return Baller
    } else if (sp === "CurlingRush") {
      return CurlingRush
    } else if (sp === "InkStorm") {
      return InkStorm
    } else if (sp === "Inkjet") {
      return Inkjet
    } else if (sp === "Stingray") {
      return Stingray
    } else if (sp === "BooyahBomb") {
      return BooyahBomb
    } else if (sp === "Armor") {
      return InkArmor
    } else if (sp === "Hammer") {
      return UltraStamp
    } else if (sp === "Bubbles") {
      return BubbleBlower
    } 
  }
  
  
  return (
    <div className="modal fade" id="weaponModal"  tabindex="-1" aria-labelledby="weaponModalLabel" aria-hidden="true">
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
                <select className="form-select" aria-label="sort" id="select-box" onClick={()=>{selectBox();}}>
                    <option value="main" selected>メインウェポン</option>
                    <option value="sub">サブウェポン</option>
                    <option value="spe">スペシャルウェポン</option>
                    <option value="name">名前</option>
                </select>
              </div>
            </div>
          </div>
          <div className="container d-flex flex-wrap px-0 px-lg-5">
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[0]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[0].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[0].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[0].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[0].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[1]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[1].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[1].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[1].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[1].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[2]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[2].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[2].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[2].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[2].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[3]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[3].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[3].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[3].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[3].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[4]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[4].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[4].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[4].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[4].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[5]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[5].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[5].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[5].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[5].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[6]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[6].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[6].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[6].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[6].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[7]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[7].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[7].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[7].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[7].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[8]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[8].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[8].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[8].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[8].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[9]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[9].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[9].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[9].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[9].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[10]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[10].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[10].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[10].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[10].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[11]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[11].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[11].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[11].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[11].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[12]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[12].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[12].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[12].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[12].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[13]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[13].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[13].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[13].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[13].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[14]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[14].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[14].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[14].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[14].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[15]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[15].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[15].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[15].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[15].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[16]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[16].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[16].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[16].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[16].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[17]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[17].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[17].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[17].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[17].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[18]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[18].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[18].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[18].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[18].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[19]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[19].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[19].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[19].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[19].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[20]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[20].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[20].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[20].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[20].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[21]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[21].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[21].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[21].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[21].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[22]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[22].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[22].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[22].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[22].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[23]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[23].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[23].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[23].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[23].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[24]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[24].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[24].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[24].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[24].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[25]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[25].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[25].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[25].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[25].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[26]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[26].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[26].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[26].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[26].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[27]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[27].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[27].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[27].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[27].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[28]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[28].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[28].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[28].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[28].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[29]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[29].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[29].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[29].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[29].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[30]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[30].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[30].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[30].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[30].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[31]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[31].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[31].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[31].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[31].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[32]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[32].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[32].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[32].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[32].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[33]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[33].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[33].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[33].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[33].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[34]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[34].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[34].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[34].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[34].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[35]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[35].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[35].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[35].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[35].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[36]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[36].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[36].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[36].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[36].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[37]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[37].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[37].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[37].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[37].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[38]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[38].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[38].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[38].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[38].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[39]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[39].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[39].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[39].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[39].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[40]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[40].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[40].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[40].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[40].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[41]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[41].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[41].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[41].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[41].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[42]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[42].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[42].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[42].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[42].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[43]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[43].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[43].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[43].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[43].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[44]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[44].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[44].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[44].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[44].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[45]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[45].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[45].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[45].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[45].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[46]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[46].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[46].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[46].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[46].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[47]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[47].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[47].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[47].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[47].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[48]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[48].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[48].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[48].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[48].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[49]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[49].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[49].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[49].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[49].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[50]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[50].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[50].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[50].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[50].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[51]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[51].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[51].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[51].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[51].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[52]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[52].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[52].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[52].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[52].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[53]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[53].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[53].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[53].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[53].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[54]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[54].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[54].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[54].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[54].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[55]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[55].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[55].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[55].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[55].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[56]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[56].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[56].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[56].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[56].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[57]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[57].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[57].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[57].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[57].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[58]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[58].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[58].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[58].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[58].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[59]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[59].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[59].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[59].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[59].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[60]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[60].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[60].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[60].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[60].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[61]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[61].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[61].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[61].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[61].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[62]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[62].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[62].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[62].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[62].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[63]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[63].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[63].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[63].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[63].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[64]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[64].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[64].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[64].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[64].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[65]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[65].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[65].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[65].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[65].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[66]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[66].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[66].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[66].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[66].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[67]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[67].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[67].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[67].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[67].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[68]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[68].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[68].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[68].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[68].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[69]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[69].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[69].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[69].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[69].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[70]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[70].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[70].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[70].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[70].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[71]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[71].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[71].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[71].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[71].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[72]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[72].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[72].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[72].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[72].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[73]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[73].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[73].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[73].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[73].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[74]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[74].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[74].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[74].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[74].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[75]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[75].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[75].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[75].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[75].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[76]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[76].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[76].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[76].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[76].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[77]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[77].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[77].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[77].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[77].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[78]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[78].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[78].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[78].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[78].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[79]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[79].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[79].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[79].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[79].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[80]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[80].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[80].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[80].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[80].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[81]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[81].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[81].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[81].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[81].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[82]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[82].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[82].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[82].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[82].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[83]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[83].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[83].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[83].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[83].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[84]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[84].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[84].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[84].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[84].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[85]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[85].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[85].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[85].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[85].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[86]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[86].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[86].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[86].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[86].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[87]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[87].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[87].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[87].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[87].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[88]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[88].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[88].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[88].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[88].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[89]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[89].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[89].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[89].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[89].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[90]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[90].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[90].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[90].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[90].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[91]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[91].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[91].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[91].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[91].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[92]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[92].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[92].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[92].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[92].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[93]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[93].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[93].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[93].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[93].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[94]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[94].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[94].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[94].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[94].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[95]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[95].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[95].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[95].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[95].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[96]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[96].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[96].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[96].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[96].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[97]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[97].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[97].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[97].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[97].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[98]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[98].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[98].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[98].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[98].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[99]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[99].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[99].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[99].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[99].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[100]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[100].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[100].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[100].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[100].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[101]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[101].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[101].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[101].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[101].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[102]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[102].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[102].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[102].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[102].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[103]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[103].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[103].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[103].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[103].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[104]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[104].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[104].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[104].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[104].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[105]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[105].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[105].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[105].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[105].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[106]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[106].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[106].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[106].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[106].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[107]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[107].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[107].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[107].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[107].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[108]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[108].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[108].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[108].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[108].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[109]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[109].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[109].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[109].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[109].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[110]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[110].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[110].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[110].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[110].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[111]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[111].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[111].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[111].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[111].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[112]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[112].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[112].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[112].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[112].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[113]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[113].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[113].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[113].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[113].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[114]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[114].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[114].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[114].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[114].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[115]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[115].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[115].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[115].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[115].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[116]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[116].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[116].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[116].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[116].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[117]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[117].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[117].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[117].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[117].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[118]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[118].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[118].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[118].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[118].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[119]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[119].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[119].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[119].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[119].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[120]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[120].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[120].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[120].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[120].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[121]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[121].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[121].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[121].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[121].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[122]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[122].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[122].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[122].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[122].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[123]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[123].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[123].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[123].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[123].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[124]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[124].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[124].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[124].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[124].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[125]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[125].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[125].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[125].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[125].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[126]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[126].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[126].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[126].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[126].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[127]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[127].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[127].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[127].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[127].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[128]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[128].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[128].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[128].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[128].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[129]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[129].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[129].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[129].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[129].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[130]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[130].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[130].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[130].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[130].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[131]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[131].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[131].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[131].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[131].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[132]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[132].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[132].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[132].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[132].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[133]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[133].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[133].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[133].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[133].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[134]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[134].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[134].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[134].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[134].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[135]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[135].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[135].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[135].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[135].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[136]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[136].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[136].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[136].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[136].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
            <div
              className="weapon-icon"
              onClick={()=>{
                props.weaponStatus(weaponArray[137]);
                }
              }
              data-bs-dismiss="modal"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={weaponArray[137].name}
            >
              <div className="container">
                <div className="justify-content-center">
                  <img src = {weaponArray[137].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={subWeapon(weaponArray[137].sub)} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={spWeapon(weaponArray[137].special)} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="weapon-outer">
              <div
                className="weapon-icon"
                onClick={()=>{
                  props.weaponStatus(weaponArray[138]);
                  }
                }
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={weaponArray[138].name}
              >
                <div className="container">
                  <div className="justify-content-center">
                    <img src = {weaponArray[138].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={subWeapon(weaponArray[138].sub)} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={spWeapon(weaponArray[138].special)} className="img-sub-sp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn close-btn" data-bs-dismiss="modal">
              <svg 
                className="close-btn-svg" width="240" height="160" viewBox="-500 -142 2300 1300"
              >
                <path 
                  className="close-btn-default"
                  d="m 220 144 C 423 19 609 67 773 166 C 902 225 952 170 1051 181 C 1266 200 1457 363 1354 611 C 1307 728 1141 820 974 753 C 804 705 748 836 531 843 C 4 869 -61 328 220 144"
                  fill="#6926bb"
                  stroke="none"
                />
                <path
                  className="close-btn-hover"
                  d="m 86 466 C 78 372 -183 508 -182 363 L -289 419 C -293 491 -412 477 -421 433 C -427 378 -296 358 -289 419 L -182 363 C -119 224 121 455 122 320 C 123 270 -181 297 -182 161 C -184 94 -38 0 101 127 C 132 168 263 262 305 184 C 320 118 145 112 213 21 L 142 2 C 112 82 -14 41 -12 -10 L 29 -100 C -17 -112 15 -151 51 -142 C 107 -125 68 -91 29 -100 L -12 -10 C -2 -90 163 -72 142 2 L 200 -53 C 141 -52 130 -119 203 -119 C 269 -112 269 -62 200 -53 L 142 2 L 213 21 C 283 -43 399 15 403 81 C 404 139 559 158 522 52 C 515 14 338 -111 595 -139 C 769 -133 616 16 651 84 C 684 129 811 138 783 16 C 767 -113 1040 -48 906 80 C 863 135 1051 207 1069 0 C 1113 -179 1549 -80 1270 82 C 1113 149 1099 234 1240 220 C 1334 185 1291 92 1484 112 C 1618 139 1543 256 1331 274 C 1259 274 1272 390 1425 310 L 1607 230 C 1621 174 1731 185 1727 242 C 1723 293 1602 279 1607 230 L 1425 310 C 1501 270 1625 388 1427 398 C 1281 379 1299 525 1475 476 C 1742 351 1879 673 1453 567 C 1287 516 1234 633 1445 632 L 1640 654 C 1644 597 1769 613 1761 661 C 1756 715 1643 715 1640 654 L 1671 750 C 1667 710 1745 709 1751 742 C 1756 775 1678 790 1671 750 L 1640 654 L 1445 632 C 1611 641 1512 769 1388 716 C 1196 602 1104 745 1342 790 C 1514 841 1380 982 1241 877 C 1106 685 920 835 1106 952 L 1193 1030 C 1215 971 1299 1008 1290 1046 C 1276 1095 1183 1075 1193 1030 L 1106 952 C 1244 1048 1008 1159 973 992 C 973 825 730 853 800 984 C 851 1100 588 1104 646 969 C 683 853 433 865 495 1035 C 551 1157 149 1153 357 956 C 426 910 301 766 202 923 C 138 1017 -106 902 157 809 C 232 773 104 706 -10 827 C -113 908 -295 769 -55 707 C 149 683 140 542 -62 642 C -298 712 -385 456 -57 507 C 11 525 101 539 86 466"
                  fill="none"
                  stroke="none"
                />
                <text className="svg-text-default" x="450" y="520" fill="white">とじる</text>
                <text className="svg-text-hover" x="410" y="540" fill="none">とじる</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default WeaponModal;