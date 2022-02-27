import { useState, useEffect, useRef } from 'react';
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
    {name:"ボールドマーカー", sub:"CurlingBomb", special:"SplashDown", sp:160, weight:"light", path:Sploosh_0, pathSub:CurlingBomb, pathSpecial:SplashDown},
    {name:"ボールドマーカーネオ", sub:"Beakon", special:"Missiles", sp:170, weight:"light", path:Sploosh_1, pathSub:SquidBeakon,pathSpecial:TentaMissile},
    {name:"ボールドマーカー7", sub:"SplatBomb", special:"Hammer", sp:170, weight:"light", path:Sploosh_2, pathSub:SplatBomb,pathSpecial:UltraStamp},
    {name:"わかばシューター", sub:"SplatBomb", special:"Armor", sp:180, weight:"light", path:Jr_0, pathSub:SplatBomb,pathSpecial:InkArmor},
    {name:"もみじシューター", sub:"AutoBomb", special:"InkStorm", sp:160, weight:"light", path:Jr_1, pathSub:AutoBomb,pathSpecial:InkStorm},
    {name:"おちばシューター", sub:"Torpedo", special:"Bubbles", sp:190, weight:"light", path:Jr_2, pathSub:Torpedo,pathSpecial:BubbleBlower},
    {name:"シャープマーカー", sub:"ToxicMist", special:"Inkjet", sp:170, weight:"light", path:Splash_0, pathSub:ToxicMist,pathSpecial:Inkjet},
    {name:"シャープマーカーネオ", sub:"BurstBomb", special:"SuctionRush", sp:210, weight:"light", path:Splash_1, pathSub:BurstBomb, pathSpecial:SuctionRush},
    {name:"プロモデラーMG", sub:"SuctionBomb", special:"CurlingRush", sp:160, weight:"light", path:Aerospray_0, pathSub:SuctionBomb, pathSpecial:CurlingRush},
    {name:"プロモデラーRG", sub:"Sprinkler", special:"Baller", sp:180, weight:"light", path:Aerospray_1, pathSub:Sprinkler, pathSpecial:Baller},
    {name:"プロモデラーPG", sub:"BurstBomb", special:"BooyahBomb", sp:190, weight:"light", path:Aerospray_2, pathSub:BurstRush, pathSpecial:BooyahBomb},
    {name:"スプラシューター", sub:"BurstBomb", special:"SplashDown", sp:170, weight:"middle", path:SplatterShot_0, pathSub:BurstBomb, pathSpecial:SplashDown},
    {name:"ヒーローシューターレプリカ", sub:"BurstBomb", special:"SplashDown", sp:170, weight:"middle", path:HeroShot, pathSub:BurstBomb, pathSpecial:SplashDown},
    {name:"スプラシューターコラボ", sub:"SplatBomb", special:"Inkjet", sp:200, weight:"middle", path:SplatterShot_1, pathSub:SplatBomb, pathSpecial:Inkjet},
    {name:"スプラシューターベッチュー", sub:"SuctionBomb", special:"Missiles", sp:180, weight:"middle", path:SplatterShot_2, pathSub:SuctionBomb, pathSpecial:TentaMissile},
    {name:"オクタシューター", sub:"SplatBomb", special:"Inkjet", sp:200, weight:"middle", path:OctoShot, pathSub:SplatBomb, pathSpecial:Inkjet},
    {name:".52ガロン", sub:"Sencor", special:"Baller", sp:170, weight:"middle", path:Gal52_0, pathSub:PointSensor, pathSpecial:Baller},
    {name:".52ガロンデコ", sub:"CurlingBomb", special:"Stingray", sp:190, weight:"middle", path:Gal52_1, pathSub:CurlingBomb, pathSpecial:Stingray},
    {name:".52ガロンベッチュー", sub:"SplashWall", special:"BooyahBomb", sp:190, weight:"middle", path:Gal52_2, pathSub:SplashWall, pathSpecial:BooyahBomb},
    {name:"N-ZAP85", sub:"SuctionBomb", special:"Armor", sp:200, weight:"light", path:Nzap_0, pathSub:SuctionBomb, pathSpecial:InkArmor},
    {name:"N-ZAP89", sub:"AutoBomb", special:"Missiles", sp:180, weight:"light", path:Nzap_1, pathSub:AutoBomb, pathSpecial:TentaMissile},
    {name:"N-ZAP83", sub:"Sprinkler", special:"InkStorm", sp:170, weight:"middle", path:Nzap_2, pathSub:Sprinkler, pathSpecial:InkStorm},
    {name:"プライムシューター", sub:"Sencor",special:"InkStorm", sp:170, weight:"middle", path:Pro_0, pathSub:PointSensor, pathSpecial:InkStorm},
    {name:"プライムシューターコラボ", sub:"SuctionBomb", special:"Bubbles", sp:190, weight:"middle", path:Pro_1, pathSub:SuctionBomb, pathSpecial:BubbleBlower},
    {name:"プライムシューターベッチュー", sub:"SplatBomb", special:"BooyahBomb", sp:210, weight:"middle", path:Pro_2, pathSub:SplatBomb, pathSpecial:BooyahBomb},
    {name:".96ガロン", sub:"Sprinkler", special:"Armor", sp:190, weight:"middle", path:Gal96_0, pathSub:Sprinkler, pathSpecial:InkArmor},
    {name:".96ガロンデコ", sub:"SplashWall", special:"SplashDown", sp:170, weight:"middle", path:Gal96_1, pathSub:SplashWall, pathSpecial:SplashDown},
    {name:"ジェットスイーパー", sub:"ToxicMist", special:"Missiles", sp:180, weight:"middle", path:Jet_0, pathSub:ToxicMist, pathSpecial:TentaMissile},
    {name:"ジェットスイーパーカスタム", sub:"BurstBomb", special:"Stingray", sp:190, weight:"middle", path:Jet_1, pathSub:BurstBomb, pathSpecial:Stingray},
    {name:"ノヴァブラスター", sub:"InkMine", special:"SuctionRush", sp:170, weight:"light", path:Luna_0, pathSub:InkMine, pathSpecial:SuctionRush},
    {name:"ノヴァブラスターネオ", sub:"SplatBomb", special:"Baller", sp:170, weight:"light", path:Luna_1, pathSub:SplatBomb, pathSpecial:Baller},
    {name:"ノヴァブラスターベッチュー", sub:"FizzyBomb", special:"InkStorm", sp:170, weight:"light", path:Luna_2, pathSub:FizzyBomb, pathSpecial:InkStorm},
    {name:"ホットブラスター", sub:"ToxicMist", special:"SplashDown", sp:170, weight:"middle", path:Blaster_0, pathSub:ToxicMist, pathSpecial:SplashDown},
    {name:"ヒーローブラスターレプリカ", sub:"ToxicMist", special:"SplashDown", sp:170, weight:"middle", path:HeroBlaster, pathSub:ToxicMist, pathSpecial:SplashDown},
    {name:"ホットブラスターカスタム", sub:"AutoBomb", special:"Inkjet", sp:190, weight:"middle", path:Blaster_1, pathSub:AutoBomb, pathSpecial:Inkjet},
    {name:"ロングブラスター", sub:"SuctionBomb", special:"InkStorm", sp:200, weight:"middle", path:Range_0, pathSub:SuctionBomb, pathSpecial:InkStorm},
    {name:"ロングブラスターカスタム", sub:"CurlingBomb", special:"Bubbles", sp:170, weight:"middle", path:Range_1, pathSub:CurlingBomb, pathSpecial:BubbleBlower},
    {name:"ロングブラスターネクロ", sub:"BurstBomb", special:"Missiles", sp:190, weight:"middle", path:Range_2, pathSub:BurstBomb, pathSpecial:TentaMissile},
    {name:"クラッシュブラスター", sub:"SplatBomb", special:"Stingray", sp:180, weight:"light", path:ClashBlaster_0, pathSub:SplatBomb, pathSpecial:Stingray},
    {name:"クラッシュブラスターネオ", sub:"CurlingBomb", special:"Missiles", p:180, weight:"light", path:ClashBlaster_1, pathSub:CurlingBomb, pathSpecial:TentaMissile},
    {name:"ラピッドブラスター", sub:"InkMine", special:"SplatRush", sp:200, weight:"middle", path:Rapid_0, pathSub:InkMine, pathSpecial:SplatRush},
    {name:"ラピッドブラスターデコ", sub:"SuctionBomb", special:"Inkjet", sp:190, weight:"middle", path:Rapid_1, pathSub:SuctionBomb, pathSpecial:Inkjet},
    {name:"ラピッドブラスターベッチュー", sub:"Torpedo", special:"Baller", sp:200, weight:"middle", path:Rapid_2, pathSub:Torpedo, pathSpecial:Baller},
    {name:"Rブラスターエリート", sub:"ToxicMist", special:"InkStorm", sp:180, weight:"middle", path:RapidPro_0, pathSub:ToxicMist, pathSpecial:InkStorm},
    {name:"Rブラスターエリートデコ", sub:"SplashWall", special:"Armor", sp:180, weight:"middle", path:RapidPro_1, pathSub:SplashWall, pathSpecial:InkArmor},
    {name:"L-3リールガン", sub:"CurlingBomb", special:"Baller", sp:220, weight:"middle", path:L3Nozzle_0, pathSub:CurlingBomb, pathSpecial:Baller},
    {name:"L-3リールガンD", sub:"BurstBomb", special:"Inkjet", sp:200, weight:"middle", path:L3Nozzle_1, pathSub:BurstBomb, pathSpecial:Inkjet},
    {name:"L-3リールガンベッチュー", sub:"SplashWall", special:"Hammer", sp:180, weight:"middle", path:L3Nozzle_2, pathSub:SplashWall, pathSpecial:UltraStamp},
    {name:"H-3リールガン", sub:"Sencor", special:"Missiles", sp:170, weight:"middle", path:H3Nozzle_0, pathSub:PointSensor, pathSpecial:TentaMissile},
    {name:"H-3リールガンD", sub:"SuctionBomb", special:"Armor", sp:220, weight:"middle", path:H3Nozzle_1, pathSub:SuctionBomb, pathSpecial:InkArmor},
    {name:"H-3リールガンチェリー", sub:"SplashWall", special:"Bubbles", sp:180, weight:"middle", path:H3Nozzle_2, pathSub:SplashWall, pathSpecial:BubbleBlower},
    {name:"ボトルカイザー", sub:"SplashWall", special:"Stingray", sp:180, weight:"middle", path:Squeezer_0, pathSub:SplashWall, pathSpecial:Stingray},
    {name:"ボトルカイザーフォイル", sub:"SplatBomb", special:"Bubbles", sp:200, weight:"middle", path:Squeezer_1, pathSub:SplatBomb, pathSpecial:BubbleBlower},
    {name:"カーボンローラー", sub:"AutoBomb", special:"InkStorm", sp:160, weight:"light", path:Carbon_0, pathSub:AutoBomb, pathSpecial:InkStorm},
    {name:"カーボンローラーデコ", sub:"BurstBomb", special:"AutoRush", sp:190, weight:"light", path:Carbon_1, pathSub:BurstBomb, pathSpecial:AutoRush},
    {name:"スプラローラー", sub:"CurlingBomb", special:"SplashDown", sp:170, weight:"middle", path:Roller_0, pathSub:CurlingBomb, pathSpecial:SplashDown},
    {name:"ヒーローローラー", sub:"CurlingBomb", special:"SplashDown", sp:170, weight:"middle", path:HeroRoller, pathSub:CurlingBomb, pathSpecial:SplashDown},
    {name:"スプラローラーコラボ", sub:"Beakon", special:"Baller", sp:170, weight:"middle", path:Roller_1, pathSub:SquidBeakon, pathSpecial:Baller},
    {name:"スプラローラーベッチュー", sub:"SplatBomb", special:"Bubbles", sp:180, weight:"middle", path:Roller_2, pathSub:SplatBomb, pathSpecial:BubbleBlower},
    {name:"ダイナモローラー", sub:"InkMine", special:"Stingray", sp:180, weight:"heavy", path:Dynamo_0, pathSub:InkMine, pathSpecial:Stingray},
    {name:"ダイナモローラーテスラ", sub:"SplatBomb", special:"Armor", sp:190, weight:"heavy", path:Dynamo_1, pathSub:SplatBomb, pathSpecial:InkArmor},
    {name:"ダイナモローラーベッチュー", sub:"Sprinkler", special:"BooyahBomb", sp:180, weight:"heavy", path:Dynamo_2, pathSub:Sprinkler, pathSpecial:BooyahBomb},
    {name:"ヴァリアブルローラー", sub:"SplashWall", special:"SplatRush", sp:180, weight:"middle", path:Flingza_0, pathSub:SplashWall, pathSpecial:SplatRush},
    {name:"ヴァリアブルローラーフォイル", sub:"SuctionBomb", special:"Missiles", sp:180, weight:"middle", path:Flingza_1, pathSub:SuctionBomb, pathSpecial:TentaMissile},
    {name:"パブロ", sub:"SplatBomb", special:"SplashDown", sp:150, weight:"light", path:Brush_0, pathSub:SplatBomb, pathSpecial:SplashDown},
    {name:"パブロ・ヒュー", sub:"InkMine", special:"Baller", sp:180, weight:"light", path:Brush_1, pathSub:InkMine, pathSpecial:Baller},
    {name:"パーマネントパブロ", sub:"Sprinkler", special:"Armor", sp:180, weight:"light", path:Brush_2, pathSub:Sprinkler, pathSpecial:InkArmor},
    {name:"ホクサイ", sub:"AutoBomb", special:"Inkjet", sp:170, weight:"middle", path:Octobrush_0, pathSub:AutoBomb, pathSpecial:Inkjet},
    {name:"ヒーローブラシレプリカ", sub:"AutoBomb", special:"Inkjet", sp:170, weight:"middle", path:HeroBrush, pathSub:AutoBomb, pathSpecial:Inkjet},
    {name:"ホクサイ・ヒュー", sub:"Beakon", special:"Missiles", sp:170, weight:"middle", path:Octobrush_1, pathSub:SquidBeakon, pathSpecial:TentaMissile},
    {name:"ホクサイベッチュー", sub:"SuctionBomb", special:"Hammer", sp:180, weight:"middle", path:Octobrush_2, pathSub:SuctionBomb, pathSpecial:UltraStamp},
    {name:"スクイックリンα", sub:"Sencor", special:"Armor", sp:170, weight:"middle", path:Squiffer_0, pathSub:PointSensor, pathSpecial:InkArmor},
    {name:"スクイックリンβ", sub:"AutoBomb", special:"Baller", sp:180, weight:"middle", path:Squiffer_1, pathSub:AutoBomb, pathSpecial:Baller},
    {name:"スクイックリンγ", sub:"SuctionBomb", special:"Inkjet", sp:180, weight:"middle", path:Squiffer_2, pathSub:SuctionBomb, pathSpecial:Inkjet},
    {name:"スプラチャージャー", sub:"SplatBomb", special:"Stingray", sp:220, weight:"middle", path:Charger_0, pathSub:SplatBomb, pathSpecial:Stingray},
    {name:"ヒーローチャージャーレプリカ", sub:"SplatBomb", special:"Stingray", sp:220, weight:"middle", path:HeroCharger, pathSub:SplatBomb, pathSpecial:Stingray},
    {name:"スプラチャージャーコラボ", sub:"SplashWall", special:"SuctionRush", sp:220, weight:"middle", path:Charger_1, pathSub:SplashWall, pathSpecial:SuctionRush},
    {name:"スプラチャージャーベッチュー", sub:"Sprinkler", special:"Baller",sp:190, weight:"middle", path:Charger_2, pathSub:Sprinkler, pathSpecial:Baller},
    {name:"スプラスコープ", sub:"SplatBomb", special:"Stingray", sp:220, weight:"middle", path:ChargerScope_0, pathSub:SplatBomb, pathSpecial:Stingray},
    {name:"スプラスコープコラボ", sub:"SplashWall", special:"SuctionRush", sp:220, weight:"middle", path:ChargerScope_1, pathSub:SplashWall, pathSpecial:SuctionRush},
    {name:"スプラスコープベッチュー", sub:"Sprinkler", special:"Baller", sp:190, weight:"middle", path:ChargerScope_2, pathSub:Sprinkler, pathSpecial:Baller},
    {name:"リッター4K", sub:"InkMine", sp:190, special:"InkStorm", weight:"heavy", path:Eliter_0, pathSub:InkMine, pathSpecial:InkStorm},
    {name:"リッター4Kカスタム", sub:"Beakon", special:"Bubbles", sp:170, weight:"heavy", path:Eliter_1, pathSub:SquidBeakon, pathSpecial:BubbleBlower},
    {name:"4Kスコープ", sub:"InkMine", special:"InkStorm", sp:190, weight:"heavy", path:EliterScope_0, pathSub:InkMine, pathSpecial:InkStorm},
    {name:"4Kスコープカスタム", sub:"Beakon", special:"Bubbles", sp:170, weight:"heavy", path:EliterScope_1, pathSub:SquidBeakon, pathSpecial:BubbleBlower},
    {name:"14式竹筒銃・甲", sub:"CurlingBomb", special:"Missiles", sp:200, weight:"light", path:Bamboo_0, pathSub:CurlingBomb, pathSpecial:TentaMissile},
    {name:"14式竹筒銃・乙", sub:"ToxicMist", special:"BurstRush", sp:160, weight:"light", path:Bamboo_1, pathSub:ToxicMist, pathSpecial:BurstRush},
    {name:"14式竹筒銃・丙", sub:"FizzyBomb", special:"Bubbles", sp:190, weight:"light", path:Bamboo_2, pathSub:FizzyBomb, pathSpecial:BubbleBlower},
    {name:"ソイチューバー", sub:"SuctionBomb", special:"SplashDown", sp:160, weight:"middle", path:GooTuber_0, pathSub:SuctionBomb, pathSpecial:SplashDown},
    {name:"ソイチューバーカスタム", sub:"CurlingBomb", special:"Inkjet", sp:170, weight:"middle", path:GooTuber_1, pathSub:CurlingBomb, pathSpecial:Inkjet},
    {name:"バケットスロッシャー", sub:"SuctionBomb", special:"Missiles", sp:190, weight:"middle", path:Slosher_0, pathSub:SuctionBomb, pathSpecial:TentaMissile},
    {name:"ヒーロースロッシャーレプリカ", sub:"SuctionBomb", special:"Missiles", sp:190, weight:"middle", path:HeroSlosher, pathSub:SuctionBomb, pathSpecial:TentaMissile},
    {name:"バケットスロッシャーデコ", sub:"Sprinkler", special:"Baller", sp:210, weight:"middle", path:Slosher_1, pathSub:Sprinkler, pathSpecial:Baller},
    {name:"バケットスロッシャーソーダ", sub:"SplatBomb", special:"BurstRush", sp:210, weight:"middle", path:Slosher_2, pathSub:SplatBomb, pathSpecial:BurstRush},
    {name:"ヒッセン", sub:"BurstBomb", special:"Armor", sp:190, weight:"light", path:Tri_0, pathSub:BurstBomb, pathSpecial:InkArmor},
    {name:"ヒッセン・ヒュー", sub:"SplatBomb", special:"InkStorm", sp:170, weight:"light", path:Tri_1, pathSub:SplatBomb, pathSpecial:InkStorm},
    {name:"スクリュースロッシャー", sub:"AutoBomb", special:"Stingray", sp:190, weight:"middle", path:Machine_0, pathSub:AutoBomb, pathSpecial:Stingray},
    {name:"スクリュースロッシャーネオ", sub:"Sencor", special:"SplatRush", sp:180, weight:"middle", path:Machine_1, pathSub:PointSensor, pathSpecial:SplatRush},
    {name:"スクリュースロッシャーベッチュー", sub:"FizzyBomb", special:"SplashDown", sp:190, weight:"middle", path:Machine_2, pathSub:FizzyBomb, pathSpecial:SplashDown},
    {name:"オーバーフロッシャー", sub:"SplashWall", special:"InkStorm", sp:180, weight:"middle", path:Blob_0, pathSub:SplashWall, pathSpecial:InkStorm},
    {name:"オーバーフロッシャーデコ", sub:"Sprinkler", special:"SuctionRush", sp:190, weight:"middle", path:Blob_1, pathSub:Sprinkler, pathSpecial:SuctionRush},
    {name:"エクスプロッシャー", sub:"Sprinkler", special:"Bubbles", sp:210, weight:"heavy", path:Explosher_0, pathSub:Sprinkler, pathSpecial:BubbleBlower},
    {name:"エクスプロッシャーカスタム", sub:"Sencor", special:"Baller", sp:220, weight:"heavy", path:Explosher_1, pathSub:PointSensor, pathSpecial:Baller},
    {name:"スプラスピナー", sub:"BurstBomb", special:"Missiles", sp:210, weight:"middle", path:Mini_0, pathSub:BurstBomb, pathSpecial:TentaMissile},
    {name:"スプラスピナーコラボ", sub:"BurstBomb", special:"InkStorm", sp:180, weight:"middle", path:Mini_1, pathSub:BurstBomb, pathSpecial:InkStorm},
    {name:"スプラスピナーベッチュー", sub:"ToxicMist", special:"Hammer", sp:180, weight:"middle", path:Mini_2, pathSub:ToxicMist, pathSpecial:UltraStamp},
    {name:"バレルスピナー", sub:"Sprinkler", special:"Stingray", sp:200, weight:"middle", path:Heavy_0, pathSub:Sprinkler, pathSpecial:Stingray},
    {name:"ヒーロースピナーレプリカ", sub:"Sprinkler", special:"Stingray", sp:200, weight:"middle", path:HeroHeavy, pathSub:Sprinkler, pathSpecial:Stingray},
    {name:"バレルスピナーデコ", sub:"SplashWall", special:"Bubbles", sp:180, weight:"middle", path:Heavy_1, pathSub:SplashWall, pathSpecial:BubbleBlower},
    {name:"バレルスピナーリミックス", sub:"Sencor", special:"BooyahBomb", sp:190, weight:"middle", path:Heavy_2, pathSub:PointSensor, pathSpecial:BooyahBomb},
    {name:"ハイドラント", sub:"AutoBomb", special:"SplashDown", sp:170, weight:"heavy", path:Hydra_0, pathSub:AutoBomb, pathSpecial:SplashDown},
    {name:"ハイドラントカスタム", sub:"InkMine", special:"Armor", sp:200, weight:"heavy", path:Hydra_1, pathSub:InkMine, pathSpecial:InkArmor},
    {name:"クーゲルシュライバー", sub:"ToxicMist", special:"Inkjet", sp:200, weight:"middle", path:Ballpoint_0, pathSub:ToxicMist, pathSpecial:Inkjet},
    {name:"クーゲルシュライバー・ヒュー", sub:"Beakon", special:"InkStorm", sp:220, weight:"middle", path:Ballpoint_1, pathSub:SquidBeakon, pathSpecial:InkStorm},
    {name:"ノーチラス47", sub:"Sencor", special:"Baller", sp:180, weight:"middle", path:Nautilus_0, pathSub:PointSensor, pathSpecial:Baller},
    {name:"ノーチラス79", sub:"SuctionBomb", special:"Inkjet", sp:180, weight:"middle", path:Nautilus_1, pathSub:SuctionBomb, pathSpecial:Inkjet},
    {name:"スパッタリー", sub:"Beakon", special:"SuctionRush", sp:170, weight:"light", path:Dapple_0, pathSub:SquidBeakon, pathSpecial:SuctionRush},
    {name:"スパッタリー・ヒュー", sub:"ToxicMist", special:"InkStorm", sp:170, weight:"light", path:Dapple_1, pathSub:ToxicMist, pathSpecial:InkStorm},
    {name:"スパッタリークリア", sub:"Torpedo", special:"SplashDown", sp:170, weight:"light", path:Dapple_2, pathSub:Torpedo, pathSpecial:SplashDown},
    {name:"スプラマニューバー", sub:"BurstBomb", special:"Missiles", sp:180, weight:"middle", path:Dualies_0, pathSub:BurstBomb, pathSpecial:TentaMissile},
    {name:"ヒーローマニューバーレプリカ", sub:"BurstBomb", special:"Missiles", sp:180, weight:"middle", path:HeroDualies, pathSub:BurstBomb, pathSpecial:TentaMissile},
    {name:"スプラマニューバーコラボ", sub:"CurlingBomb", special:"Inkjet", sp:200, weight:"middle", path:Dualies_1, pathSub:CurlingBomb, pathSpecial:Inkjet},
    {name:"スプラマニューバーベッチュー", sub:"SuctionBomb", special:"Baller", sp:200, weight:"middle", path:Dualies_2, pathSub:SuctionBomb, pathSpecial:Baller},
    {name:"ケルビン525", sub:"InkMine", special:"Inkjet", sp:180, weight:"middle", path:Glooga_0, pathSub:InkMine, pathSpecial:Inkjet},
    {name:"ケルビン525デコ", sub:"SplashWall", special:"SplashDown", sp:180, weight:"middle", path:Glooga_1, pathSub:SplashWall, pathSpecial:SplashDown},
    {name:"ケルビン525ベッチュー", sub:"FizzyBomb", special:"Armor", sp:180, weight:"middle", path:Glooga_2, pathSub:FizzyBomb, pathSpecial:InkArmor},
    {name:"デュアルスイーパー", sub:"Sencor", special:"Missiles", sp:190, weight:"middle", path:DualieSquelcher_0, pathSub:PointSensor, pathSpecial:TentaMissile},
    {name:"デュアルスイーパーカスタム", sub:"SplatBomb", special:"InkStorm", sp:220, weight:"middle", path:DualieSquelcher_1, pathSub:SplatBomb, pathSpecial:InkStorm},
    {name:"クアッドホッパーブラック", sub:"AutoBomb", special:"SplashDown", sp:190, weight:"middle", path:Tetra_0, pathSub:AutoBomb, pathSpecial:SplashDown},
    {name:"クアッドホッパーホワイト", sub:"Sprinkler", special:"AutoRush", sp:200, weight:"middle", path:Tetra_1, pathSub:Sprinkler, pathSpecial:AutoRush},
    {name:"パラシェルター", sub:"Sprinkler", special:"InkStorm", sp:190, weight:"middle", path:Brella_0, pathSub:Sprinkler, pathSpecial:InkStorm},
    {name:"ヒーローシェルターレプリカ", sub:"Sprinkler", special:"InkStorm", sp:190, weight:"middle", path:HeroBrella, pathSub:Sprinkler, pathSpecial:InkStorm},
    {name:"パラシェルターソレーラ", sub:"AutoBomb", special:"SplatRush", sp:200, weight:"middle", path:Brella_1, pathSub:AutoBomb, pathSpecial:SplatRush},
    {name:"キャンピングシェルター", sub:"Beakon", special:"Bubbles", sp:200, weight:"heavy", path:TentaBrella_0, pathSub:SquidBeakon, pathSpecial:BubbleBlower},
    {name:"キャンピングシェルターソレーラ", sub:"SplashWall", special:"CurlingRush", sp:170, weight:"heavy", path:TentaBrella_1, pathSub:SplashWall, pathSpecial:CurlingRush},
    {name:"キャンピングシェルターカーモ", sub:"InkMine", special:"Hammer", sp:210, weight:"heavy", path:TentaBrella_2, pathSub:InkMine, pathSpecial:UltraStamp},
    {name:"スパイガジェット", sub:"InkMine", special:"SplashDown", sp:150, weight:"light", path:Undercover_0, pathSub:InkMine, pathSpecial:SplashDown},
    {name:"スパイガジェットソレーラ", sub:"SplatBomb", special:"Baller", sp:180, weight:"light", path:Undercover_1, pathSub:SplatBomb, pathSpecial:Baller},
    {name:"スパイガジェットベッチュー", sub:"Torpedo", special:"Armor", sp:190, weight:"light", path:Undercover_2, pathSub:Torpedo, pathSpecial:InkArmor},
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
  
  const ref = useRef();

  // 選択された並び順に応じてstateを変更
  const selectBox = function() {
    let target = ref.current;
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
                <select className="form-select" ref = {ref} aria-label="sort" id="select-box" onClick={()=>{selectBox();}}>
                    <option value="main" defaultValue>メインウェポン</option>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[0].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[0].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[0].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[1].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[1].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[1].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[2].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[2].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[2].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[3].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[3].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[3].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[4].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[4].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[4].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[5].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[5].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[5].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[6].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[6].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[6].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[7].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[7].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[7].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[8].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[8].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[8].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[9].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[9].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[9].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[10].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[10].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[10].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[11].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[11].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[11].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[12].path} className="img-weapon" alt=""/>
                  </div>
                  <div className="row align-items-center justify-content-around sub-sp-bg">
                    <div className="sub-sp">
                      <img src={weaponArray[12].pathSub} className="img-sub-sp" alt=""/>
                    </div>
                    <div className="sub-sp">
                      <img src={weaponArray[12].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[13].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[13].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[13].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[14].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[14].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[14].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[15].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[15].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[15].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[16].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[16].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[16].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[17].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[17].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[17].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[18].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[18].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[18].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[19].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[19].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[19].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[20].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[20].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[20].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[21].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[21].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[21].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[22].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[22].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[22].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[23].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[23].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[23].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[24].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[24].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[24].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[25].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[25].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[25].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[26].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[26].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[26].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[27].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[27].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[27].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[28].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[28].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[28].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[29].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[29].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[29].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[30].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[30].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[30].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[31].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[31].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[31].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[32].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[32].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[32].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[33].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[33].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[33].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[34].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[34].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[34].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[35].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[35].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[35].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[36].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[36].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[36].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[37].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[37].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[37].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[38].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[38].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[38].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[39].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[39].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[39].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[40].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[40].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[40].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[41].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[41].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[41].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[42].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[42].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[42].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[43].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[43].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[43].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[44].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[44].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[44].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[45].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[45].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[45].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[46].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[46].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[46].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[47].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[47].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[47].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[48].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[48].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[48].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[49].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[49].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[49].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[50].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[50].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[50].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[51].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[51].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[51].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[52].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[52].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[52].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[53].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[53].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[53].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[54].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[54].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[54].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[55].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[55].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[55].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[56].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[56].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[56].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[57].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[57].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[57].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[58].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[58].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[58].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[59].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[59].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[59].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[60].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[60].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[60].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[61].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[61].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[61].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[62].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[62].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[62].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[63].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[63].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[63].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[64].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[64].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[64].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[65].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[65].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[65].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[66].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[66].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[66].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[67].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[67].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[67].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[68].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[68].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[68].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[69].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[69].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[69].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[70].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[70].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[70].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[71].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[71].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[71].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[72].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[72].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[72].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[73].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[73].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[73].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[74].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[74].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[74].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[75].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[75].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[75].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[76].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[76].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[76].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[77].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[77].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[77].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[78].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[78].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[78].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[79].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[79].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[79].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[80].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[80].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[80].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[81].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[81].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[81].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[82].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[82].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[82].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[83].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[83].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[83].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[84].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[84].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[84].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[85].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[85].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[85].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[86].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[86].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[86].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[87].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[87].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[87].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[88].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[88].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[88].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[89].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[89].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[89].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[90].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[90].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[90].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[91].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[91].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[91].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[92].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[92].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[92].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[93].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[93].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[93].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[94].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[94].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[94].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[95].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[95].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[95].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[96].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[96].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[96].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[97].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[97].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[97].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[98].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[98].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[98].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[99].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[99].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[99].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[100].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[100].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[100].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[101].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[101].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[101].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[102].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[102].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[102].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[103].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[103].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[103].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[104].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[104].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[104].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[105].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[105].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[105].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[106].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[106].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[106].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[107].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[107].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[107].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[108].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[108].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[108].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[109].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[109].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[109].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[110].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[110].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[110].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[111].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[111].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[111].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[112].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[112].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[112].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[113].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[113].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[113].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[114].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[114].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[114].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[115].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[115].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[115].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[116].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[116].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[116].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[117].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[117].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[117].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[118].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[118].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[118].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[119].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[119].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[119].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[120].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[120].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[120].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[121].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[121].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[121].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[122].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[122].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[122].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[123].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[123].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[123].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[124].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[124].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[124].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[125].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[125].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[125].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[126].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[126].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[126].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[127].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[127].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[127].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[128].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[128].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[128].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[129].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[129].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[129].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[130].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[130].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[130].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[131].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[131].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[131].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[132].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[132].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[132].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[133].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[133].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[133].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[134].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[134].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[134].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[135].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[135].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[135].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[136].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[136].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[136].pathSpecial} className="img-sub-sp" alt=""/>
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
              <div className="container px-0">
                <div className="justify-content-center">
                  <img src = {weaponArray[137].path} className="img-weapon" alt=""/>
                </div>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weaponArray[137].pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weaponArray[137].pathSpecial} className="img-sub-sp" alt=""/>
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
                <div className="container px-0">
                  <div className="justify-content-center">
                    <img src = {weaponArray[138].path} className="img-weapon" alt=""/>
                  </div>
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