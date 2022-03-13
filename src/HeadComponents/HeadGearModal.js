import React, { useState, useEffect, useRef}from 'react';
import ArrowUpSVG from '../SVGComponents/ArrowUpSVG';
import ArrowDownSVG from '../SVGComponents/ArrowDownSVG';
import { Tooltip } from 'bootstrap';
// 変数名の$は-の代用


//アイロニック
import Cady_Sunvisor from '../images/gear/Hed_VIS000.png';
// import SwimmingMogle from '../images/gear/Hed_EYE016.png';
import SquashBand from '../images/gear/Hed_HBD002.png';
import TekkaCycleCap from '../images/gear/Hed_CAP012.png';
import BasukeBand from '../images/gear/Hed_HBD001.png';
// アナアキ
import AnaakiMask from '../images/gear/Hed_MSK005.png';
import AnaakiAnPinBeret from'../images/gear/Hed_NCP009.png';
import AnaakiBuskBeret from '../images/gear/Hed_EYE015.png';
// アロメ
import TennisBand from '../images/gear/Hed_HBD003.png';
import SoccerBand from '../images/gear/Hed_HBD005.png';
import SanSanSunvisor from '../images/gear/Hed_VIS002.png';
import DateContact from '../images/gear/Hed_EYE007.png';
import ChariKingBou from '../images/gear/Hed_CAP014.png';
// エゾッコ
import IroMegane from '../images/gear/Hed_EYE003.png';
import EzokkoMesh from '../images/gear/Hed_CAP008.png';
import BackwardCap from '../images/gear/Hed_CAP009.png';
import RunningBand from '../images/gear/Hed_HBD004.png';
import FIVEPanelCap from '../images/gear/Hed_CAP007.png';
import ArrowBand_Black from '../images/gear/Hed_EYE004.png';
// import EzokkoFlipper from '../images/gear/Hed_EYE013.png';
import DoubleEggSunglass from '../images/gear/Hed_EYE012.png';
import ArrowBand_White from '../images/gear/Hed_EYE006.png';
import TsuyaKeshiMTBMet from '../images/gear/Hed_MET008.png';
import LogoZukushiMTBMet from '../images/gear/Hed_MET006.png';
// エンペリー
import KingOfMask from '../images/gear/Hed_MSK009.png';
import KingTakoStarMask from '../images/gear/Hed_MSK006.png';
import KingFlipMesh from '../images/gear/Hed_CAP019.png';
import KaiserCuff from '../images/gear/Hed_ACC001.png';
// クラーゲス
import TWOLineMesh from '../images/gear/Hed_CAP010.png';
import Eizuri$Bandana from '../images/gear/Hed_MSK002.png';
import MaruBekko$ from '../images/gear/Hed_EYE009.png';
import WoolU$ni$zuClassic from '../images/gear/Hed_CAP021.png';
import Hikkori$WorkCap from '../images/gear/Hed_CAP020.png';
import LongBillCap from '../images/gear/Hed_CAP018.png';
// シグレ二
import CampCap from '../images/gear/Hed_CAP001.png';
import CampHat from '../images/gear/Hed_HAT002.png';
import ShortBeanie from '../images/gear/Hed_NCP001.png';
// import ParasolTulip from '../images/gear/Hed_HAT010.png';
import YamagiriBeanie from '../images/gear/Hed_NCP010.png';
import KaigaraSuge from '../images/gear/Hed_HAT012.png';
import Suge from '../images/gear/Hed_HAT004.png';
// import YamaHat from '../images/gear/Hed_HAT014.png';
// ジモン
import Kurobuchi_Retro from '../images/gear/Hed_EYE000.png';
import BorderBeanie from '../images/gear/Hed_NCP002.png';
import SeruBurou from '../images/gear/Hed_EYE011.png';
import HouseTagDenimCAP from '../images/gear/Hed_CAP024.png';
import BonBonKnit from '../images/gear/Hed_NCP000.png';
import Sennyu$Kurobuchi from '../images/gear/Hed_EYE020.png';
import Sennyu$BonBon from '../images/gear/Hed_NCP006.png';
import FlightBou from '../images/gear/Hed_CAP027.png';
// タタキケンサキ
// import Moggle_TatakiBettyu$ from '../images/gear/Hed_EYE018.png';
import SumiGuardGoggle from '../images/gear/Hed_EYE017.png';
import FaceVisor from '../images/gear/Hed_VIS004.png';
// バトロイカ
import IkaBucket from '../images/gear/Hed_HAT008.png';
import IkaBattenGuard from '../images/gear/Hed_MSK007.png';
import HeadBand_White from '../images/gear/Hed_FST000.png';
import PainterMask from '../images/gear/Hed_MSK004.png';
import AnkouRubberMask from '../images/gear/Hed_HAP003.png';
// import UmiushiKatyu$sya from '../images/gear/Hed_HAP001.png';
// import GigaGyokotsu from '../images/gear/Hed_HAP013.png';
import KyonKyonBou from '../images/gear/Hed_HAP000.png';
import KoushienBandana from '../images/gear/Hed_MSK013.png';
import CozmicAntenna from '../images/gear/Hed_HAP014.png';
// import JusticeBrain from '../images/gear/Hed_HAP015.png';
import NewYearGlassDX from '../images/gear/Hed_HAP005.png';
// import NeziriGorgeous from '../images/gear/Hed_HAP006.png';
// import PartyCornDeko from '../images/gear/Hed_HAP004.png';
import BurningBroiler from '../images/gear/Hed_HAP012.png';
import HappyChinAnagoHat from '../images/gear/Hed_HAP007.png';
// import HokkeKamen from '../images/gear/Hed_HAP002.png';
// import MechaHeadHTR from '../images/gear/Hed_CRC000.png';
// フォーリマ
import Fo$riMask from '../images/gear/Hed_MSK011.png';
import EnperaHookHDP from '../images/gear/Hed_HDP003.png';
import AuroraHeadphone from '../images/gear/Hed_HDP001.png';
import StudioHeadphone from '../images/gear/Hed_HDP000.png';
import SplashGoggle from '../images/gear/Hed_EYE001.png';
import DiverGoggle from '../images/gear/Hed_EYE005.png';
import TreasureMet from '../images/gear/Hed_HAT007.png';
import PilotGoggle from '../images/gear/Hed_EYE002.png';
// import Fo$riMask_DeziKamo from '../images/gear/Hed_MSK012.png';
import RobstarBoonie from '../images/gear/Hed_HAT000.png';
import IkaSkullMask from '../images/gear/Hed_MSK003.png';
import IcarusHKMet from '../images/gear/Hed_MET007.png';
import EarMuff from '../images/gear/Hed_HDP002.png';
import OctoMetPrizeDeko from '../images/gear/Hed_MET009.png';
import SutekaseHeadphone from '../images/gear/Hed_HDP004.png';
import Sennyu$Goggle from '../images/gear/Hed_EYE019.png';
import Sennyu$Headphone from '../images/gear/Hed_HDP006.png';
import TakoMask from '../images/gear/Hed_MSK000.png';
import DekaMetEyeshield from '../images/gear/Hed_MET011.png';
import NightVision from '../images/gear/Hed_MET002.png';
import NoseGuardMotoCross from '../images/gear/Hed_MSK010.png';
import FaceGoggle from '../images/gear/Hed_MSK001.png';
// import MoistWakaMet from '../images/gear/Hed_MET010.png';
import MongouBeret from '../images/gear/Hed_NCP004.png';
// ホタックス
import IkaVaderCap from '../images/gear/Hed_CAP005.png';
import Ikankan from '../images/gear/Hed_HAT005.png';
import U$ni$zuBBCap from '../images/gear/Hed_CAP000.png';
import WinterBonBon from '../images/gear/Hed_NCP003.png';
import BeverageCap from '../images/gear/Hed_CAP003.png';
// import Ikankan_Classic from '../images/gear/Hed_HAT006.png';
import OshinobiKnit from '../images/gear/Hed_NCP011.png';
import CycleMet from '../images/gear/Hed_MET000.png';
import Sukebo$Met from '../images/gear/Hed_MET004.png';
import PatchHat from '../images/gear/Hed_HAT009.png';
// import HotaPlantHat from '../images/gear/Hed_HAT013.png';
import IkaNordic from '../images/gear/Hed_NCP005.png';
import KuragaderCap from '../images/gear/Hed_CAP023.png';
import ChidoriCap from '../images/gear/Hed_CAP004.png';
import DoRagCapGasane from '../images/gear/Hed_CAP026.png';
import VisorMet from '../images/gear/Hed_MET005.png';
// ホッコリー
import KamoMesh from '../images/gear/Hed_CAP006.png';
import KuroYakifuguBandana from '../images/gear/Hed_HBD008.png';
import JetCap from '../images/gear/Hed_CAP011.png';
import FuguBellHat from '../images/gear/Hed_HAT003.png';
import MaskedHokkori$ from '../images/gear/Hed_MSK008.png';
import Yakifugu_Sunvisor from '../images/gear/Hed_VIS001.png';
import YakifuguBiscuitBandana from '../images/gear/Hed_HBD007.png';
import RibKnit from '../images/gear/Hed_NCP008.png';
import FuguHanching from '../images/gear/Hed_CAP025.png';
import FuguBellBellHat from '../images/gear/Hed_HAT011.png';
import OctaGlass from '../images/gear/Hed_EYE010.png';
import SafariHat from '../images/gear/Hed_HAT001.png';
// ヤコ
import YakoMesh from '../images/gear/Hed_CAP002.png';
import YakoVisor from '../images/gear/Hed_VIS003.png';
// ロッケンベルグ
import TareSan18K from '../images/gear/Hed_EYE008.png';
import MaruSanSV925 from '../images/gear/Hed_EYE014.png';
// Amiibo
// import IidachiHeadphone from '../images/gear/Hed_AMB007.png';
// import IkaKageMask from '../images/gear/Hed_AMB004.png';
// import IkaClip from '../images/gear/Hed_AMB003.png';
// import IkaPatchin from '../images/gear/Hed_AMB000.png';
// import EnchantHat from '../images/gear/Hed_AMB008.png';
// import SamuraiHelmet from '../images/gear/Hed_AMB001.png';
// import TakoticalNaHelm from '../images/gear/Hed_AMB009.png';
// import PoweredMask from '../images/gear/Hed_AMB002.png';
// import PoweredMask_Origin from '../images/gear/Hed_AMB005.png';
// import HimeItoCrown from '../images/gear/Hed_AMB006.png';
// import HireoKun from '../images/gear/Hed_AMB010.png';
//アタリメイド
// import ArmorMetReplica from '../images/gear/Hed_MSN004.png';
// import GranpaNaAtama from '../images/gear/Hed_MSN106.png';
// import TacozonesSunglass from '../images/gear/Hed_MSN104.png';
// import NellMetReplica from '../images/gear/Hed_MSN104.png';
// import HeroHeadsReplica from '../images/gear/Hed_MSN000.png';
// import HeroReceiverReplica from '../images/gear/Hed_MSN101.png';
// import MetroBou from '../images/gear/Hed_MSN107.png';
// import StudioOctoHon from '../images/gear/Hed_HDP005.png';
// import KinNoTumayoji from '../images/gear/Hed_MSN108.png';
// クマサン商会
import AianMaskarade from '../images/gear/Hed_COP102.png';
import AsesuTopSoshina from '../images/gear/Hed_COP107.png';
import OceansHelm from '../images/gear/Hed_COP106.png';
import GuardianArmyHat from '../images/gear/Hed_COP103.png';
import Supebou_Replica from '../images/gear/Hed_COP108.png';
import ZonesticScope from '../images/gear/Hed_COP104.png';
import DustBlocker_25 from '../images/gear/Hed_COP101.png';
import HeadLightHelm from '../images/gear/Hed_COP100.png';
import MarilynHatWithPins from '../images/gear/Hed_COP109.png';
import LegendNoBoushi from '../images/gear/Hed_COP105.png';
// ブランドの画像
import Batoroika from '../images/brands/B00.png';
import Aironic from '../images/brands/B01.png';
import Kuragesu from '../images/brands/B02.png';
import Rockenberg from '../images/brands/B03.png';
import Ezokko from '../images/brands/B04.png';
import Forima from '../images/brands/B05.png';
import Hokkori from '../images/brands/B06.png';
import Hotakkusu from '../images/brands/B07.png';
import Zimon from '../images/brands/B08.png';
import Sigureni from '../images/brands/B09.png';
import Arome from '../images/brands/B10.png';
import Yako from '../images/brands/B11.png';
import Anaaki from '../images/brands/B15.png';
import Enperry from '../images/brands/B16.png';
import Tatakikensaki from '../images/brands/B17.png';
import Kumasan from '../images/brands/B97.png';
import Atarimeido from '../images/brands/B98.png';
// ギアパワーの画像
import inkSaverMain from '../images/ability/ISMain.png';
import inkSaverSub from '../images/ability/ISSub.png';
import inkRecovery from '../images/ability/REC.png';
import runSpeed from '../images/ability/RSU.png';
import swimSpeed from '../images/ability/SSU.png';
import specialCharge from '../images/ability/SCU.png';
import specialSaver from '../images/ability/SS.png';
import specialPower from '../images/ability/SpecialPU.png';
import qr from '../images/ability/QR.png';
import quickSuperJump from '../images/ability/QSJ.png';
import subPower from '../images/ability/SubPU.png';
import inkRes from '../images/ability/RES.png';
import bombDefence from '../images/ability/BDU.png';
import mpu from '../images/ability/MPU.png';
import empty from '../images/ability/empty.png';

// デフォルトはブランド順
let gears = [
  {name:"キャディ サンバイザー", path:Cady_Sunvisor, id:"V0_Cady_Sunvisor", brand:"アイロニック"},
  {name:"スカッシュバンド", path:SquashBand, id:"HB_SquashBand", brand:"アイロニック"},
  {name:"テッカサイクルキャップ", path:TekkaCycleCap, id:"C1_TekkaCycleCap", brand:"アイロニック"},
  {name:"バスケバンド", path:BasukeBand, id:"HB_BasukeBand", brand:"アイロニック"},
  {name:"アナアキマスク", path:AnaakiMask, id:"BS_AnaakiMask", brand:"アナアキ"},
  {name:"アナアキピンベレー", path:AnaakiAnPinBeret, id:"H1_AnaakiAnPinBeret", brand:"アナアキ"},
  {name:"アナアキバスクベレー", path:AnaakiBuskBeret, id:"H1_AnaakiBuskBeret", brand:"アナアキ"},
  {name:"テニスバンド", path:TennisBand, id:"HB_TennisBand", brand:"アロメ"},
  {name:"サッカーバンド", path:SoccerBand, id:"BS_SoccerBand", brand:"アロメ"},
  {name:"サンサンサンバイザー", path:SanSanSunvisor, id:"V1_SanSanSunvisor", brand:"アロメ"},
  {name:"ダテコンタクト", path:DateContact, id:"DateContact", brand:"アロメ"},
  {name:"チャリキング帽", path:ChariKingBou, id:"C1_ChariKingBou", brand:"アロメ"},
  {name:"イロメガネ", path:IroMegane, id:"BS_IroMegane", brand:"エゾッコ"},
  {name:"エゾッコメッシュ", path:EzokkoMesh, id:"C0_EzokkoMesh", brand:"エゾッコ"},
  {name:"バックワードキャップ", path:BackwardCap, id:"C1_BackwardCap", brand:"エゾッコ"},
  {name:"ランニングバンド", path:RunningBand, id:"HB_RunningBand", brand:"エゾッコ"},
  {name:"5パネルキャップ", path:FIVEPanelCap, id:"C0_5PanelCap", brand:"エゾッコ"},
  {name:"アローバンド ブラック", path:ArrowBand_Black, id:"BS_ArrowBand_Black", brand:"エゾッコ"},
  // {name:"エゾッコフリッパー", path:EzokkoFlipper, id:"M0_EzokkoFlipper", brand:"エゾッコ"},
  {name:"ダブルエッグサングラス", path:DoubleEggSunglass, id:"BS_DoubleEggSunglass", brand:"エゾッコ"},
  {name:"アローバンド ホワイト", path:ArrowBand_White, id:"BS_ArrowBand_White", brand:"エゾッコ"},
  {name:"ツヤケシMTBメット", path:TsuyaKeshiMTBMet, id:"M0_TsuyaKeshiMTBMet", brand:"エゾッコ"},
  {name:"ロゴヅクシMTBメット", path:LogoZukushiMTBMet, id:"M0_LogoZukushiMTBMet", brand:"エゾッコ"},
  {name:"キングオブマスク", path:KingOfMask, id:"BS_KingOfMask", brand:"エンペリー"},
  {name:"キングタコスターマスク", path:KingTakoStarMask, id:"BS_KingTakoStarMask", brand:"エンペリー"},
  {name:"キングフリップメッシュ", path:KingFlipMesh, id:"C0_KingFlipMesh", brand:"エンペリー"},
  // {name:"カイザーカフ", path:KaiserCuff, id:"C0_KingFlipMesh", brand:"エンペリー"},
  {name:"2ラインメッシュ", path:TWOLineMesh, id:"C0_2LineMesh", brand:"クラーゲス"},
  {name:"エイズリーバンダナ", path:Eizuri$Bandana, id:"BN_Eizuri-Bandana", brand:"クラーゲス"},
  {name:"マルベッコー", path:MaruBekko$, id:"BS_MaruBekko-", brand:"クラーゲス"},
  {name:"ウールウーニーズクラシック", path:WoolU$ni$zuClassic, id:"C1_WoolU-ni-zuClassic", brand:"クラーゲス"},
  {name:"ヒッコリーワークキャップ", path:Hikkori$WorkCap, id:"C0_Hikkori-WorkCap", brand:"クラーゲス"},
  {name:"ロングビルキャップ", path:LongBillCap, id:"C0_LongBillCap", brand:"クラーゲス"},
  {name:"キャンプキャップ", path:CampCap, id:"C0_CampCap", brand:"シグレ二"},
  {name:"キャンプハット", path:CampHat, id:"H0_CampHat", brand:"シグレ二"},
  {name:"ショートビーニー", path:ShortBeanie, id:"M0_ShortBeanie", brand:"シグレ二"},
  {name:"ヤマギリビーニー", path:YamagiriBeanie, id:"KN_YamagiriBeanie", brand:"シグレ二"},
  {name:"カイガラスゲ", path:KaigaraSuge, id:"H1_KaigaraSuge", brand:"シグレ二"},
  {name:"スゲ", path:Suge, id:"H0_Suge", brand:"シグレ二"},
  {name:"クロブチ レトロ", path:Kurobuchi_Retro, id:"BS_Kurobuchi_Retro", brand:"ジモン"},
  {name:"ボーダービーニー", path:BorderBeanie, id:"M0_BorderBeanie", brand:"ジモン"},
  {name:"セルブロウ", path:SeruBurou, id:"BS_SeruBurou", brand:"ジモン"},
  {name:"ハウスタグデニムCAP", path:HouseTagDenimCAP, id:"C0_HouseTagDenimCAP", brand:"ジモン"},
  {name:"ボンボンニット", path:BonBonKnit, id:"KN_BonBonKnit", brand:"ジモン"},
  {name:"センニュークロブチ", path:Sennyu$Kurobuchi, id:"BS_Sennyu-Kurobuchi", brand:"ジモン"},
  {name:"センニューボンボン", path:Sennyu$BonBon, id:"KN_Sennyu-BonBon", brand:"ジモン"},
  {name:"フライトぼう", path:FlightBou, id:"KN_FlightBou", brand:"ジモン"},
  {name:"スミガードゴーグル", path:SumiGuardGoggle, id:"BS_SumiGuardGoggle", brand:"タタキケンサキ"},
  // {name:"フェイスバイザー", path:FaceVisor, id:"FaceVisor", brand:"タタキケンサキ"},
  {name:"イカバケット", path:IkaBucket, id:"M0_IkaBucket", brand:"バトロイカ"},
  {name:"イカバッテンガード", path:IkaBattenGuard, id:"BS_IkaBattenGuard", brand:"バトロイカ"},
  {name:"ヘッドバンド ホワイト", path:HeadBand_White, id:"HB_Headband_White", brand:"バトロイカ"},
  {name:"ペインターマスク", path:PainterMask, id:"BS_PainterMask", brand:"バトロイカ"},
  {name:"アンコウラバーマスク", path:AnkouRubberMask, id:"M1_AnkouRubberMask", brand:"バトロイカ"},
  {name:"キョンキョンぼう", path:KyonKyonBou, id:"H2_KyonKyonBou", brand:"バトロイカ"},
  {name:"こうしえんバンダナ", path:KoushienBandana, id:"BN_KoushienBandana", brand:"バトロイカ"},
  {name:"コズミックアンテナ", path:CozmicAntenna, id:"BS_CozmicAntenna", brand:"バトロイカ"},
  {name:"ニューイヤーグラスDX", path:NewYearGlassDX, id:"BS_NewYearGlassDX", brand:"バトロイカ"},
  {name:"バーニングブロイラー", path:BurningBroiler, id:"M1_BurningBroiler", brand:"バトロイカ"},
  {name:"ハッピーチンアナゴハット", path:HappyChinAnagoHat, id:"H1_HappyChinanagoHat", brand:"バトロイカ"},
  {name:"フォーリマスク", path:Fo$riMask, id:"BS_Fo-riMask", brand:"フォーリマ"},
  {name:"エンペラフックHDP", path:EnperaHookHDP, id:"BS_EnperaHookHDP", brand:"フォーリマ"},
  {name:"オーロラヘッドホン", path:AuroraHeadphone, id:"HP_AuroraHeadphone", brand:"フォーリマ"},
  {name:"スタジオヘッドホン", path:StudioHeadphone, id:"HP_StudioHeadphone", brand:"フォーリマ"},
  {name:"スプラッシュゴーグル", path:SplashGoggle, id:"BS_SplashGoggle", brand:"フォーリマ"},
  {name:"ダイバーゴーグル", path:DiverGoggle, id:"BS_DiverGoggle", brand:"フォーリマ"},
  {name:"トレジャーメット", path:TreasureMet, id:"H2_TreasureMet", brand:"フォーリマ"},
  {name:"パイロットゴーグル", path:PilotGoggle, id:"HB_PilotGoggle", brand:"フォーリマ"},
  {name:"ロブスターブーニー", path:RobstarBoonie, id:"H1_RobstarBoonie", brand:"フォーリマ"},
  {name:"イカスカルマスク", path:IkaSkullMask, id:"BN_IkaSkullMask", brand:"フォーリマ"},
  // {name:"イカロスHKメット", path:IcarusHKMet, id:"M0_IcarusHKMet", brand:"フォーリマ"},
  {name:"イヤーマフ", path:EarMuff, id:"HP_EarMuff", brand:"フォーリマ"},
  {name:"オクトメットプライズデコ", path:OctoMetPrizeDeko, id:"M1_OctoMetPrizeDeco", brand:"フォーリマ"},
  {name:"ステカセヘッドホン", path:SutekaseHeadphone, id:"HP_SutekaseHeadphone", brand:"フォーリマ"},
  {name:"センニューゴーグル", path:Sennyu$Goggle, id:"HB_Sennyu-Goggle", brand:"フォーリマ"},
  {name:"センニューヘッドホン", path:Sennyu$Headphone, id:"HP_Sennyu-Headphone", brand:"フォーリマ"},
  {name:"タコマスク", path:TakoMask, id:"BS_TakoMask", brand:"フォーリマ"},
  // {name:"デカメットアイシールド", path:DekaMetEyeshield, id:"M1_DekaMetEyeshield", brand:"フォーリマ"},
  {name:"ナイトビジョン", path:NightVision, id:"M1_NightVision", brand:"フォーリマ"},
  {name:"ノーズガードモトクロス", path:NoseGuardMotoCross, id:"BS_NoseGuardMotoCross", brand:"フォーリマ"},
  {name:"フェイスゴーグル", path:FaceGoggle, id:"BS_FaceGoggle", brand:"フォーリマ"},
  {name:"モンゴウベレー", path:MongouBeret, id:"H0_MongouBeret", brand:"フォーリマ"},
  {name:"イカベーダーキャップ", path:IkaVaderCap, id:"C1_IkavaderCap", brand:"ホタックス"},
  {name:"イカンカン", path:Ikankan, id:"H2_Ikankan", brand:"ホタックス"},
  {name:"ウーニーズBBキャップ", path:U$ni$zuBBCap, id:"C0_U-ni-zuBBCap", brand:"ホタックス"},
  {name:"ウインターボンボン", path:WinterBonBon, id:"KN_WinterBonBon", brand:"ホタックス"},
  {name:"ビバレッジキャップ", path:BeverageCap, id:"C1_BeverageCap", brand:"ホタックス"},
  // {name:"イカンカン クラシック", path:Ikankan_Classic, id:"Ikankan_Classic"},
  {name:"オシノビニット", path:OshinobiKnit, id:"KN_OshinobiKnit", brand:"ホタックス"},
  {name:"サイクルメット", path:CycleMet, id:"H1_CycleMet", brand:"ホタックス"},
  {name:"スケボーメット", path:Sukebo$Met, id:"M1_Sukebo-Met", brand:"ホタックス"},
  {name:"パッチハット", path:PatchHat, id:"M0_PatchHat", brand:"ホタックス"},
  {name:"イカノルディック", path:IkaNordic, id:"KN_IkaNordic", brand:"ホタックス"},
  {name:"クラゲーダーキャップ", path:KuragaderCap, id:"C1_KuragaderCap", brand:"ホタックス"},
  {name:"チドリキャップ", path:ChidoriCap, id:"C1_ChidoriCap", brand:"ホタックス"},
  {name:"ドゥーラグキャップガサネ", path:DoRagCapGasane, id:"H3_DoRagCapGasane", brand:"ホタックス"},
  {name:"バイザーメット", path:VisorMet, id:"M1_VisorMet", brand:"ホタックス"},
  {name:"カモメッシュ", path:KamoMesh, id:"C0_KamoMesh", brand:"ホッコリー"},
  {name:"クロヤキフグバンダナ", path:KuroYakifuguBandana, id:"HB_KuroYakifuguBandana", brand:"ホッコリー"},
  {name:"ジェットキャップ", path:JetCap, id:"C0_JetCap", brand:"ホッコリー"},
  {name:"フグベルハット", path:FuguBellHat, id:"H2_FuguBellHat", brand:"ホッコリー"},
  {name:"マスクドホッコリー", path:MaskedHokkori$, id:"BS_MaskedHokkori-", brand:"ホッコリー"},
  {name:"ヤキフグ サンバイザー", path:Yakifugu_Sunvisor, id:"V3_Yakifugu_Sunvisor", brand:"ホッコリー"},
  {name:"ヤキフグビスケットバンダナ", path:YakifuguBiscuitBandana, id:"HB_YakifuguBiscuitBandana", brand:"ホッコリー"},
  {name:"リブニット", path:RibKnit, id:"KN_RibKnit", brand:"ホッコリー"},
  {name:"フグハンチング", path:FuguHanching, id:"C1_FuguHanching", brand:"ホッコリー"},
  {name:"フグベルベルハット", path:FuguBellBellHat, id:"H2_FuguBellBellHat", brand:"ホッコリー"},
  {name:"オクタグラス", path:OctaGlass, id:"BS_OctaGlass", brand:"ホッコリー"},
  {name:"サファリハット", path:SafariHat, id:"H1_SafariHat", brand:"ホッコリー"},
  {name:"ヤコメッシュ", path:YakoMesh, id:"C0_YakoMesh", brand:"ヤコ"},
  {name:"ヤコバイザー", path:YakoVisor, id:"V2_YakoVisor", brand:"ヤコ"},
  {name:"タレサン18K", path:TareSan18K, id:"BS_TareSan18K", brand:"ロッケンベルグ"},
  {name:"マルサンSV925", path:MaruSanSV925, id:"BS_MaruSanSV925", brand:"ロッケンベルグ"},
  // {name:"イイダチヘッドホン", path:IidachiHeadphone, id:"IidachiHeadphone"},
  // {name:"イカカゲマスク", path:IkaKageMask, id:"IkaKageMask"},
  // {name:"イカクリップ", path:IkaClip, id:"IkaClip"},
  // {name:"イカパッチン", path:IkaPatchin, id:"IkaPatchin"},
  // {name:"エンチャントハット", path:EnchantHat, id:"EnchantHat"},
  // {name:"サムライヘルメット", path:SamuraiHelmet, id:"SamuraiHelmet"},
  // {name:"タコティカルなヘルム", path:TakoticalNaHelm, id:"TakoticalNaHelm"},
  // {name:"パワードマスク", path:PoweredMask, id:"PoweredMask"},
  // {name:"パワードマスク オリジン", path:PoweredMask_Origin, id:"PoweredMask_Origin"},
  // {name:"ヒメイトクラウン", path:HimeItoCrown, id:"HimeItoCrown"},
  // {name:"ひれおくん", path:HireoKun, id:"HireoKun"},
  // {name:"アーマーメット レプリカ", path:ArmorMetReplica, id:"ArmorMetReplica"},
  // {name:"グランパなアタマ", path:GranpaNaAtama, id:"GranpaNaAtama"},
  // {name:"タコゾネスサングラス", path:TakozonesSunGlass, id:"TakozonesSunGlass"},
  // {name:"ネルメット レプリカ", path:NellMetReplica, id:"NellMetReplica"},
  // {name:"ヒーローヘッズ レプリカ", path:HeroHeadsReplica, id:"HeroHeadsReplica"},
  // {name:"ヒーローレシーバー レプリカ", path:HeroReceiverReplica, id:"HeroReceiverReplica"},
  // {name:"メトロぼう", path:MetroBou, id:"MetroBou"},
  // {name:"スタジオオクトホン", path:StudioOctoHon, id:"StudioOctoHon"},
  // {name:"金のつまようじ", path:KinNoTumayoji, id:"KinNoTumayoji"},
  {name:"アイアンマスカレイド", path:AianMaskarade, id:"V4_AianMaskaRade", brand:"クマサン商会"},
  // {name:"アセストップソシナ", path:AsesuTopSoshina, id:""},
  // {name:"オーシャンズヘルム", path:OceansHelm, id:"H2_OceansHelm", brand:"クマサン商会"},
  // {name:"ガーディアンアーミーハット", path:GuardianArmyHat, id:""},
  // {name:"スペボウ レプリカ", path:Supebou_Replica, id:"Supebou_Replica", brand:"クマサン商会"},
  {name:"ゾネスティックスコープ", path:ZonesticScope, id:"ZonesticScope", brand:"クマサン商会"},
  {name:"ダストブロッカー 2.5", path:DustBlocker_25, id:"DustBlocker_25", brand:"クマサン商会"},
  {name:"ヘッドライトヘルム", path:HeadLightHelm, id:"HeadLightHelm", brand:"クマサン商会"},
  {name:"マリリンハットウィズピンズ", path:MarilynHatWithPins, id:"MarilynHatWithPins", brand:"クマサン商会"},
  {name:"レジェンドのぼうし", path:LegendNoBoushi, id:"H3_LegendNoBoushi", brand:"クマサン商会"}
];

// 名前順に整列した配列を新たに定義
const gearsSortedByName = gears.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);

const brandImagePath = function(brand) {
  if (brand === "バトロイカ") {
    return Batoroika
  } else if (brand === "アイロニック") {
    return Aironic
  } else if (brand === "クラーゲス") {
    return Kuragesu
  } else if (brand === "ロッケンベルグ") {
    return Rockenberg
  } else if (brand === "エゾッコ") {
    return Ezokko
  } else if (brand === "フォーリマ") {
    return Forima
  } else if (brand === "ホッコリー") {
    return Hokkori
  } else if (brand === "ホタックス") {
    return Hotakkusu
  } else if (brand === "ジモン") {
    return Zimon
  } else if (brand === "シグレ二") {
    return Sigureni
  } else if (brand === "アロメ") {
    return Arome
  } else if (brand === "ヤコ") {
    return Yako
  } else if (brand === "アナアキ") {
    return Anaaki
  } else if (brand === "エンペリー") {
    return Enperry
  } else if (brand === "タタキケンサキ") {
    return Tatakikensaki
  } else if (brand === "クマサン商会") {
    return Kumasan
  } else if (brand === "アタリメイド") {
    return Atarimeido
  } 
}

let favoredAbility;
let unfavoredAbility;


const brandDependentAbility = function(brand) {
  if (brand === "アイロニック") {
    favoredAbility = quickSuperJump;
    unfavoredAbility = qr;
  } else if (brand === "クラーゲス") {
    favoredAbility = swimSpeed;
    unfavoredAbility = bombDefence;
  } else if (brand === "ロッケンベルグ") {
    favoredAbility = runSpeed;
    unfavoredAbility = swimSpeed;
  } else if (brand === "エゾッコ") {
    favoredAbility = specialSaver;
    unfavoredAbility = specialCharge;
  } else if (brand === "フォーリマ") {
    favoredAbility = specialPower;
    unfavoredAbility = inkSaverSub;
  } else if (brand === "ホッコリー") {
    favoredAbility = inkSaverSub;
    unfavoredAbility = inkRecovery;
  } else if (brand === "ホタックス") {
    favoredAbility = qr;
    unfavoredAbility = specialSaver;
  } else if (brand === "ジモン") {
    favoredAbility = inkSaverMain;
    unfavoredAbility = runSpeed;
  } else if (brand === "シグレ二") {
    favoredAbility = bombDefence;
    unfavoredAbility = mpu;
  } else if (brand === "アロメ") {
    favoredAbility = inkRecovery;
    unfavoredAbility = quickSuperJump;
  } else if (brand === "ヤコ") {
    favoredAbility = specialCharge;
    unfavoredAbility = specialPower;
  } else if (brand === "アナアキ") {
    favoredAbility = mpu;
    unfavoredAbility = specialSaver;
  } else if (brand === "エンペリー") {
    favoredAbility = subPower;
    unfavoredAbility = inkRes;
  } else if (brand === "タタキケンサキ") {
    favoredAbility = mpu;
    unfavoredAbility = subPower;
  } else if (brand === "クマサン商会" || brand === "アタリメイド") {
    favoredAbility = empty;
    unfavoredAbility = empty;
  }
}  

const GearIconFooter = (props) => {

  if (props.brand === "アイロニック") {
    favoredAbility = quickSuperJump;
    unfavoredAbility = qr;
  } else if (props.brand === "クラーゲス") {
    favoredAbility = swimSpeed;
    unfavoredAbility = bombDefence;
  } else if (props.brand === "ロッケンベルグ") {
    favoredAbility = runSpeed;
    unfavoredAbility = swimSpeed;
  } else if (props.brand === "エゾッコ") {
    favoredAbility = specialSaver;
    unfavoredAbility = specialCharge;
  } else if (props.brand === "フォーリマ") {
    favoredAbility = specialPower;
    unfavoredAbility = inkSaverSub;
  } else if (props.brand === "ホッコリー") {
    favoredAbility = inkSaverSub;
    unfavoredAbility = inkRecovery;
  } else if (props.brand === "ホタックス") {
    favoredAbility = qr;
    unfavoredAbility = specialSaver;
  } else if (props.brand === "ジモン") {
    favoredAbility = inkSaverMain;
    unfavoredAbility = runSpeed;
  } else if (props.brand === "シグレ二") {
    favoredAbility = bombDefence;
    unfavoredAbility = mpu;
  } else if (props.brand === "アロメ") {
    favoredAbility = inkRecovery;
    unfavoredAbility = quickSuperJump;
  } else if (props.brand === "ヤコ") {
    favoredAbility = specialCharge;
    unfavoredAbility = specialPower;
  } else if (props.brand === "アナアキ") {
    favoredAbility = mpu;
    unfavoredAbility = specialSaver;
  } else if (props.brand === "エンペリー") {
    favoredAbility = subPower;
    unfavoredAbility = inkRes;
  } else if (props.brand === "タタキケンサキ") {
    favoredAbility = mpu;
    unfavoredAbility = subPower;
  } else if (props.brand === "クマサン商会" || props.brand === "アタリメイド") {
    favoredAbility = empty;
    unfavoredAbility = empty;
  }
  return (
    <div className="headgear-icon-footer">
      <div 
        className="brand-ability"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="つきやすいギアパワー"
      >
        <ArrowUpSVG />
        <img className="img-gear-icon-ability" src={favoredAbility} alt=""/>
      </div>
      <div
        className="brand-ability"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="つきにくいギアパワー"
      >
        <ArrowDownSVG />
        <img className="img-gear-icon-ability" src={unfavoredAbility} alt=""/>
      </div>
    </div>
  )
}

const GearIcon = (props) => {
  const tooltipRef = useRef();  
    
  // useEffect(() => {
  //   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  //   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //     return new Tooltip(tooltipTriggerEl);
  //   });
  // },[props.state]);

    useEffect(() => {
        var tooltip = new Tooltip(tooltipRef.current, {
            title: props.gear.name,
            placement: 'top',
            trigger: 'hover',
        })
    })
  
  return (
    <div className="gear-icon-outer">
      <div
        className="gear-icon"
        onClick={()=>{
          props.passChosenGear(props.gear.id);
          props.passImagePath(props.gear.path);
          }
        }
        ref={tooltipRef}
        data-bs-dismiss="modal"
        // data-bs-toggle="tooltip"
        // data-bs-placement="top"
        // title={props.gear.name}
      > 
        <div className="gear-icon-img">
          <img className="gear-icon-img" src={props.gear.path} alt=""/>
        </div>
        <div
          className="brand-img-container"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title={props.gear.brand}
        >
          <img className="brand-img" src={brandImagePath(props.gear.brand)} alt=""/>
        </div>
        <GearIconFooter 
          brand={props.gear.brand}
        />
      </div>
    </div>
  )
}



const HeadGearModal = (props) => {
  //  並び順の管理
  const [howToSort, setSort] = useState("byBrand");
  // 表示する配列の管理
  const [gearsArray, setArray] = useState(gears);
  
  const selectBoxRef = useRef();

  const tooltipRef = useRef();  

  useEffect(()=>{
    console.log("delayed")
    // tooltip.enable();
  },[howToSort]) 

  const selectBox = function() {
    let target = document.getElementById("select-box");
    console.log("excuted")
    console.log(selectBoxRef.current.value);
    if (target.value === "brand" && howToSort === "byName") {
      setSort("byBrand");
      setArray(gears);
    } else if (target.value === "name" && howToSort === "byBrand") {
      setSort("byName");
      setArray(gearsSortedByName);
    }
  };

  
  const disableTooltip = function() {
    if(selectBoxRef.current.value !== howToSort) {
      // tooltip.disable();]
      
    }
  }
  // 再レンダーのときにツールチップが残ってしまった場合それを非表示
  useEffect(() => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[role="tooltip"]'));
    if (tooltipTriggerList.length) {
      console.log(tooltipTriggerList[0]);
      for (let i = 0; i < tooltipTriggerList.length; i++) {
        tooltipTriggerList[i].style.display = "none"
      }
    }
  });
  return (
    <div className="modal fade" id="headGearModal" tabIndex="-1" aria-labelledby="headGearModalLabel" aria-hidden="true">  
      <div className="modal-dialog modal-lg">
        <div className="modal-content headGearModalBg font-type2 bg-secondary text-white">
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">ギアを選択</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="container pt-2 pb-1">
            <div className="d-flex align-items-center">
              <div className="select-index">  
                <span className="align-middle">並び替え :</span>
              </div>
              <div className="selectbox">  
                <select
                  className="form-select"
                  aria-label="sort"
                  ref = {selectBoxRef}
                  id="select-box"
                  onClick={()=>{
                    disableTooltip();
                    selectBox();
                  }}
                >
                    <option value="brand" defaultValue>ブランド</option>
                    <option value="name">名前</option>
                </select>
              </div>
            </div>
          </div>
          <div className="container d-flex flex-wrap px-0 px-lg-5">
              <GearIcon 
                gear={gearsArray[0]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
                state={howToSort}
                tooltipRef={tooltipRef}
              />
              <GearIcon 
                gear={gearsArray[1]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[2]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[3]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[4]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[5]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[6]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[7]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[8]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[9]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[10]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[11]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[12]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[13]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[14]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[15]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[16]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[17]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[18]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[19]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[20]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[21]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[22]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[23]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[24]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[25]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[26]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[27]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[28]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[29]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[30]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[31]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[32]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[33]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[34]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[35]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[36]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[37]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[38]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[39]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[40]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[41]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[42]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[43]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[44]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[45]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[46]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[47]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[48]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[49]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[50]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[51]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[52]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[53]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[54]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[55]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[56]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[57]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[58]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[59]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[60]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[61]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[62]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[63]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[64]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[65]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[66]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[67]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[68]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[69]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[70]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[71]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[72]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[73]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[74]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[75]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[76]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[77]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[78]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[79]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[80]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[81]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[82]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[83]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[84]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[85]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[86]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[87]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[88]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[89]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[90]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[91]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[92]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[93]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[94]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[95]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[96]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[97]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[98]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[99]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[100]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[101]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[102]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[103]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[104]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[105]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[106]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[107]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[108]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[109]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[110]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[111]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
              <GearIcon 
                gear={gearsArray[112]}
                passChosenGear={props.passChosenGear}
                passImagePath={props.passImagePath}
              />
          </div>
        </div>
        <button
          className="modal-close-btn"
          onClick={()=>{props.controlModal(false)}}
        >
          とじる
        </button>
      </div>
    </div>  
  );
};

export default HeadGearModal;