import React, { useState }from 'react';

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
import EzokkoFlipper from '../images/gear/Hed_EYE013.png';
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


// デフォルトはブランド順
let gears = [
  {name:"キャディ サンバイザー", path:Cady_Sunvisor, id:"V0_Cady_Sunvisor"},
  {name:"スカッシュバンド", path:SquashBand, id:"HB_SquashBand"},
  {name:"テッカサイクルキャップ", path:TekkaCycleCap, id:"C1_TekkaCycleCap"},
  {name:"バスケバンド", path:BasukeBand, id:"HB_BasukeBand"},
  {name:"アナアキマスク", path:AnaakiMask, id:"BS_AnaakiMask"},
  {name:"アナアキピンベレー", path:AnaakiAnPinBeret, id:"H1_AnaakiAnPinBeret"},
  {name:"アナアキバスクベレー", path:AnaakiBuskBeret, id:"H1_AnaakiBuskBeret"},
  {name:"テニスバンド", path:TennisBand, id:"HB_TennisBand"},
  {name:"サッカーバンド", path:SoccerBand, id:"BS_SoccerBand"},
  {name:"サンサンサンバイザー", path:SanSanSunvisor, id:"V1_SanSanSunvisor"},
  {name:"ダテコンタクト", path:DateContact, id:"DateContact"},
  {name:"チャリキング帽", path:ChariKingBou, id:"C1_ChariKingBou"},
  {name:"イロメガネ", path:IroMegane, id:"BS_IroMegane"},
  {name:"エゾッコメッシュ", path:EzokkoMesh, id:"C0_EzokkoMesh"},
  {name:"バックワードキャップ", path:BackwardCap, id:"C1_BackwardCap"},
  {name:"ランニングバンド", path:RunningBand, id:"HB_RunningBand"},
  {name:"5パネルキャップ", path:FIVEPanelCap, id:"C0_5PanelCap"},
  {name:"アローバンド ブラック", path:ArrowBand_Black, id:"BS_ArrowBand_Black"},
  {name:"エゾッコフリッパー", path:EzokkoFlipper, id:"M0_EzokkoFlipper"},
  {name:"ダブルエッグサングラス", path:DoubleEggSunglass, id:"BS_DoubleEggSunglass"},
  {name:"アローバンド ホワイト", path:ArrowBand_White, id:"BS_ArrowBand_White"},
  {name:"ツヤケシMTBメット", path:TsuyaKeshiMTBMet, id:"M0_TsuyaKeshiMTBMet"},
  {name:"ロゴヅクシMTBメット", path:LogoZukushiMTBMet, id:"M0_LogoZukushiMTBMet"},
  {name:"キングオブマスク", path:KingOfMask, id:"BS_KingOfMask"},
  {name:"キングタコスターマスク", path:KingTakoStarMask, id:"BS_KingTakoStarMask"},
  {name:"キングフリップメッシュ", path:KingFlipMesh, id:"C0_KingFlipMesh"},
  {name:"カイザーカフ", path:KaiserCuff, id:"C0_KingFlipMesh"},
  {name:"2ラインメッシュ", path:TWOLineMesh, id:"C0_2LineMesh"},
  {name:"エイズリーバンダナ", path:Eizuri$Bandana, id:"BN_Eizuri-Bandana"},
  {name:"マルベッコー", path:MaruBekko$, id:"BS_MaruBekko-"},
  {name:"ウールウーニーズクラシック", path:WoolU$ni$zuClassic, id:"C1_WoolU-ni-zuClassic"},
  {name:"ヒッコリーワークキャップ", path:Hikkori$WorkCap, id:"C0_Hikkori-WorkCap"},
  {name:"ロングビルキャップ", path:LongBillCap, id:"C0_LongBillCap"},
  {name:"キャンプキャップ", path:CampCap, id:"C0_CampCap"},
  {name:"キャンプハット", path:CampHat, id:"H0_CampHat"},
  {name:"ショートビーニー", path:ShortBeanie, id:"M0_ShortBeanie"},
  {name:"ヤマギリビーニー", path:YamagiriBeanie, id:"KN_YamagiriBeanie"},
  {name:"カイガラスゲ", path:KaigaraSuge, id:"H1_KaigaraSuge"},
  {name:"スゲ", path:Suge, id:"H0_Suge"},
  {name:"クロブチ レトロ", path:Kurobuchi_Retro, id:"BS_Kurobuchi_Retro"},
  {name:"ボーダービーニー", path:BorderBeanie, id:"M0_BorderBeanie"},
  {name:"セルブロウ", path:SeruBurou, id:"BS_SeruBurou"},
  {name:"ハウスタグデニムCAP", path:HouseTagDenimCAP, id:"C0_HouseTagDenimCAP"},
  {name:"ボンボンニット", path:BonBonKnit, id:"KN_BonBonKnit"},
  {name:"センニュークロブチ", path:Sennyu$Kurobuchi, id:"BS_Sennyu-Kurobuchi"},
  {name:"センニューボンボン", path:Sennyu$BonBon, id:"KN_Sennyu-BonBon"},
  {name:"フライトぼう", path:FlightBou, id:"KN_FlightBou"},
  {name:"スミガードゴーグル", path:SumiGuardGoggle, id:"BS_SumiGuardGoggle"},
  {name:"フェイスバイザー", path:FaceVisor, id:"FaceVisor"},
  {name:"イカバケット", path:IkaBucket, id:"M0_IkaBucket"},
  {name:"イカバッテンガード", path:IkaBattenGuard, id:"BS_IkaBattenGuard"},
  {name:"ヘッドバンド ホワイト", path:HeadBand_White, id:"HB_Headband_White"},
  {name:"ペインターマスク", path:PainterMask, id:"BS_PainterMask"},
  {name:"アンコウラバーマスク", path:AnkouRubberMask, id:"M1_AnkouRubberMask"},
  {name:"キョンキョンぼう", path:KyonKyonBou, id:"H2_KyonKyonBou"},
  {name:"こうしえんバンダナ", path:KoushienBandana, id:"BN_KoushienBandana"},
  {name:"コズミックアンテナ", path:CozmicAntenna, id:"BS_CozmicAntenna"},
  {name:"ニューイヤーグラスDX", path:NewYearGlassDX, id:"BS_NewYearGlassDX"},
  {name:"バーニングブロイラー", path:BurningBroiler, id:"M1_BurningBroiler"},
  {name:"ハッピーチンアナゴハット", path:HappyChinAnagoHat, id:"H1_HappyChinAnagoHat"},
  {name:"フォーリマスク", path:Fo$riMask, id:"BS_Fo-riMask"},
  {name:"エンペラフックHDP", path:EnperaHookHDP, id:"BS_EnperaHookHDP"},
  {name:"オーロラヘッドホン", path:AuroraHeadphone, id:"HP_AuroraHeadPhone"},
  {name:"スタジオヘッドホン", path:StudioHeadphone, id:"HP_StudioHeadphone"},
  {name:"スプラッシュゴーグル", path:SplashGoggle, id:"BS_SplashGoggle"},
  {name:"ダイバーゴーグル", path:DiverGoggle, id:"BS_DiverGoggle"},
  {name:"トレジャーメット", path:TreasureMet, id:"H2_TreasureMet"},
  {name:"パイロットゴーグル", path:PilotGoggle, id:"HB_PilotGoggle"},
  {name:"ロブスターブーニー", path:RobstarBoonie, id:"H1_RobstarBoonie"},
  {name:"イカスカルマスク", path:IkaSkullMask, id:"BN_IkaSkullMask"},
  {name:"イカロスHKメット", path:IcarusHKMet, id:"M0_IcarusHKMet"},
  {name:"イヤーマフ", path:EarMuff, id:"HP_EarMuff"},
  {name:"オクトメットプライズデコ", path:OctoMetPrizeDeko, id:"M1_OctoMetPrizeDeko"},
  {name:"ステカセヘッドホン", path:SutekaseHeadphone, id:"HP_SutekaseHeadphone"},
  {name:"センニューゴーグル", path:Sennyu$Goggle, id:"HB_Sennyu-Goggle"},
  {name:"センニューヘッドホン", path:Sennyu$Headphone, id:"HP_Sennyu-Headphone"},
  {name:"タコマスク", path:TakoMask, id:"BS_TakoMask"},
  {name:"デカメットアイシールド", path:DekaMetEyeshield, id:"M1_DekaMetEyeshield"},
  {name:"ナイトビジョン", path:NightVision, id:"M1_NightVision"},
  {name:"ノーズガードモトクロス", path:NoseGuardMotoCross, id:"BS_NoseGuardMotoCross"},
  {name:"フェイスゴーグル", path:FaceGoggle, id:"BS_FaceGoggle"},
  {name:"モンゴウベレー", path:MongouBeret, id:"H0_MongouBeret"},
  {name:"イカベーダーキャップ", path:IkaVaderCap, id:"C1_IkaVaderCap"},
  {name:"イカンカン", path:Ikankan, id:"H2_Ikankan"},
  {name:"ウーニーズBBキャップ", path:U$ni$zuBBCap, id:"C0_U-ni-zuBBCap"},
  {name:"ウインターボンボン", path:WinterBonBon, id:"KN_WinterBonBon"},
  {name:"ビバレッジキャップ", path:BeverageCap, id:"C1_BeverageCap"},
  // {name:"イカンカン クラシック", path:Ikankan_Classic, id:"Ikankan_Classic"},
  {name:"オシノビニット", path:OshinobiKnit, id:"KN_OshinobiKnit"},
  {name:"サイクルメット", path:CycleMet, id:"H1_CycleMet"},
  {name:"スケボーメット", path:Sukebo$Met, id:"M1_Sukebo-Met"},
  {name:"パッチハット", path:PatchHat, id:"M0_PatchHat"},
  {name:"イカノルディック", path:IkaNordic, id:"KN_IkaNordic"},
  {name:"クラゲーダーキャップ", path:KuragaderCap, id:"C1_KuragaderCap"},
  {name:"チドリキャップ", path:ChidoriCap, id:"C1_ChidoriCap"},
  {name:"ドゥーラグキャップガサネ", path:DoRagCapGasane, id:"H3_DoRagCapGasane"},
  {name:"バイザーメット", path:VisorMet, id:"M1_VisorMet"},
  {name:"カモメッシュ", path:KamoMesh, id:"C0_KamoMesh"},
  {name:"クロヤキフグバンダナ", path:KuroYakifuguBandana, id:"HB_KuroYakifuguBandana"},
  {name:"ジェットキャップ", path:JetCap, id:"C0_JetCap"},
  {name:"フグベルハット", path:FuguBellHat, id:"H2_FuguBellHat"},
  {name:"マスクドホッコリー", path:MaskedHokkori$, id:"BS_MaskedHokkori-"},
  {name:"ヤキフグ サンバイザー", path:Yakifugu_Sunvisor, id:"V3_Yakifugu_Sunvisor"},
  {name:"ヤキフグビスケットバンダナ", path:YakifuguBiscuitBandana, id:"HB_YakifuguBiscuitBandana"},
  {name:"リブニット", path:RibKnit, id:"KN_RibKnit"},
  {name:"フグハンチング", path:FuguHanching, id:"C1_FuguHanching"},
  {name:"フグベルベルハット", path:FuguBellBellHat, id:"H2_FuguBellBellHat"},
  {name:"オクタグラス", path:OctaGlass, id:"BS_OctaGlass"},
  {name:"サファリハット", path:SafariHat, id:"H1_SafariHat"},
  {name:"ヤコメッシュ", path:YakoMesh, id:"C0_YakoMesh"},
  {name:"ヤコバイザー", path:YakoVisor, id:"V2_YakoVisor"},
  {name:"タレサン18K", path:TareSan18K, id:"BS_TareSan18K"},
  {name:"マルサンSV925", path:MaruSanSV925, id:"BS_MaruSanSV925"},
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
  {name:"アイアンマスカレイド", path:AianMaskarade, id:"V4_AianMaskarade"},
  {name:"アセストップソシナ", path:AsesuTopSoshina, id:""},
  {name:"オーシャンズヘルム", path:OceansHelm, id:"H2_OceansHelm"},
  {name:"ガーディアンアーミーハット", path:GuardianArmyHat, id:""},
  {name:"スペボウ レプリカ", path:Supebou_Replica, id:"Supebou_Replica"},
  {name:"ゾネスティックスコープ", path:ZonesticScope, id:"ZonesticScope"},
  {name:"ダストブロッカー 2.5", path:DustBlocker_25, id:"DustBlocker_25"},
  {name:"ヘッドライトヘルム", path:HeadLightHelm, id:"HeadLightHelm"},
  {name:"マリリンハットウィズピンズ", path:MarilynHatWithPins, id:"MarilynHatWithPins"},
  {name:"レジェンドのぼうし", path:LegendNoBoushi, id:"H3_LegendNoBoushi"}
];

// 名前順に整列した配列を新たに定義
const gearsSortedByName = gears.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);



const HeadGearModal = (props) => {
  //  並び順の管理
  const [howToSort, setSort] = useState("byBrand");
  // 表示する配列の管理
  const [gearsArray, setArray] = useState(gears);
  
  const selectBox = function() {
    let target = document.getElementById("select-box");
    if (target.value === "brand" && howToSort === "byName") {
      setSort("byBrand");
      setArray(gears);
    } else if (target.value === "name" && howToSort === "byBrand") {
      setSort("byName");
      setArray(gearsSortedByName);
    }
  };
  return (
    <div className="modal fade" id="headGearModal" tabindex="-1" aria-labelledby="headGearModalLabel" aria-hidden="true">  
      <div className="modal-dialog modal-lg">
        <div className="modal-content headGearModalBg">
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
                <select className="form-select" aria-label="sort" id="select-box" onClick={()=>{selectBox();}}>
                    <option value="brand" selected>ブランド</option>
                    <option value="name">名前</option>
                </select>
              </div>
            </div>
          </div>
          <div className="container d-flex flex-wrap px-0 px-lg-5">
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[0].id);
                    props.passImagePath(gearsArray[0].path);
                    }
                  }
                >
                  <img src= {gearsArray[0].path} alt={gearsArray[0].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[1].id);
                    props.passImagePath(gearsArray[1].path);
                    }
                  }
                >
                  <img src= {gearsArray[1].path} alt={gearsArray[1].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[2].id);
                    props.passImagePath(gearsArray[2].path);
                    }
                  }
                >
                  <img src= {gearsArray[2].path} alt={gearsArray[2].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[3].id);
                    props.passImagePath(gearsArray[3].path);
                    }
                  }
                >
                  <img src= {gearsArray[3].path} alt={gearsArray[3].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[4].id);
                    props.passImagePath(gearsArray[4].path);
                    }
                  }
                >
                  <img src= {gearsArray[4].path} alt={gearsArray[4].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[5].id);
                    props.passImagePath(gearsArray[5].path);
                    }
                  }
                >
                  <img src= {gearsArray[5].path} alt={gearsArray[5].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[6].id);
                    props.passImagePath(gearsArray[6].path);
                    }
                  }
                >
                  <img src= {gearsArray[6].path} alt={gearsArray[6].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[7].id);
                    props.passImagePath(gearsArray[7].path);
                    }
                  }
                >
                  <img src= {gearsArray[7].path} alt={gearsArray[7].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[8].id);
                    props.passImagePath(gearsArray[8].path);
                    }
                  }
                >
                  <img src= {gearsArray[8].path} alt={gearsArray[8].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[9].id);
                    props.passImagePath(gearsArray[9].path);
                    }
                  }
                >
                  <img src= {gearsArray[9].path} alt={gearsArray[9].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[10].id);
                    props.passImagePath(gearsArray[10].path);
                    }
                  }
                >
                  <img src= {gearsArray[10].path} alt={gearsArray[10].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[11].id);
                    props.passImagePath(gearsArray[11].path);
                    }
                  }
                >
                  <img src= {gearsArray[11].path} alt={gearsArray[11].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[12].id);
                    props.passImagePath(gearsArray[12].path);
                    }
                  }
                >
                  <img src= {gearsArray[12].path} alt={gearsArray[12].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[13].id);
                    props.passImagePath(gearsArray[13].path);
                    }
                  }
                >
                  <img src= {gearsArray[13].path} alt={gearsArray[13].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[14].id);
                    props.passImagePath(gearsArray[14].path);
                    }
                  }
                >
                  <img src= {gearsArray[14].path} alt={gearsArray[14].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[15].id);
                    props.passImagePath(gearsArray[15].path);
                    }
                  }
                >
                  <img src= {gearsArray[15].path} alt={gearsArray[15].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[16].id);
                    props.passImagePath(gearsArray[16].path);
                    }
                  }
                >
                  <img src= {gearsArray[16].path} alt={gearsArray[16].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[17].id);
                    props.passImagePath(gearsArray[17].path);
                    }
                  }
                >
                  <img src= {gearsArray[17].path} alt={gearsArray[17].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[18].id);
                    props.passImagePath(gearsArray[18].path);
                    }
                  }
                >
                  <img src= {gearsArray[18].path} alt={gearsArray[18].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[19].id);
                    props.passImagePath(gearsArray[19].path);
                    }
                  }
                >
                  <img src= {gearsArray[19].path} alt={gearsArray[19].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[20].id);
                    props.passImagePath(gearsArray[20].path);
                    }
                  }
                >
                  <img src= {gearsArray[20].path} alt={gearsArray[20].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[21].id);
                    props.passImagePath(gearsArray[21].path);
                    }
                  }
                >
                  <img src= {gearsArray[21].path} alt={gearsArray[21].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[22].id);
                    props.passImagePath(gearsArray[22].path);
                    }
                  }
                >
                  <img src= {gearsArray[22].path} alt={gearsArray[22].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[23].id);
                    props.passImagePath(gearsArray[23].path);
                    }
                  }
                >
                  <img src= {gearsArray[23].path} alt={gearsArray[23].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[24].id);
                    props.passImagePath(gearsArray[24].path);
                    }
                  }
                >
                  <img src= {gearsArray[24].path} alt={gearsArray[24].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[25].id);
                    props.passImagePath(gearsArray[25].path);
                    }
                  }
                >
                  <img src= {gearsArray[25].path} alt={gearsArray[25].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[26].id);
                    props.passImagePath(gearsArray[26].path);
                    }
                  }
                >
                  <img src= {gearsArray[26].path} alt={gearsArray[26].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[27].id);
                    props.passImagePath(gearsArray[27].path);
                    }
                  }
                >
                  <img src= {gearsArray[27].path} alt={gearsArray[27].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[28].id);
                    props.passImagePath(gearsArray[28].path);
                    }
                  }
                >
                  <img src= {gearsArray[28].path} alt={gearsArray[28].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[29].id);
                    props.passImagePath(gearsArray[29].path);
                    }
                  }
                >
                  <img src= {gearsArray[29].path} alt={gearsArray[29].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[30].id);
                    props.passImagePath(gearsArray[30].path);
                    }
                  }
                >
                  <img src= {gearsArray[30].path} alt={gearsArray[30].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[31].id);
                    props.passImagePath(gearsArray[31].path);
                    }
                  }
                >
                  <img src= {gearsArray[31].path} alt={gearsArray[31].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[32].id);
                    props.passImagePath(gearsArray[32].path);
                    }
                  }
                >
                  <img src= {gearsArray[32].path} alt={gearsArray[32].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[33].id);
                    props.passImagePath(gearsArray[33].path);
                    }
                  }
                >
                  <img src= {gearsArray[33].path} alt={gearsArray[33].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[34].id);
                    props.passImagePath(gearsArray[34].path);
                    }
                  }
                >
                  <img src= {gearsArray[34].path} alt={gearsArray[34].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[35].id);
                    props.passImagePath(gearsArray[35].path);
                    }
                  }
                >
                  <img src= {gearsArray[35].path} alt={gearsArray[35].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[36].id);
                    props.passImagePath(gearsArray[36].path);
                    }
                  }
                >
                  <img src= {gearsArray[36].path} alt={gearsArray[36].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[37].id);
                    props.passImagePath(gearsArray[37].path);
                    }
                  }
                >
                  <img src= {gearsArray[37].path} alt={gearsArray[37].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[38].id);
                    props.passImagePath(gearsArray[38].path);
                    }
                  }
                >
                  <img src= {gearsArray[38].path} alt={gearsArray[38].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[39].id);
                    props.passImagePath(gearsArray[39].path);
                    }
                  }
                >
                  <img src= {gearsArray[39].path} alt={gearsArray[39].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[40].id);
                    props.passImagePath(gearsArray[40].path);
                    }
                  }
                >
                  <img src= {gearsArray[40].path} alt={gearsArray[40].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[41].id);
                    props.passImagePath(gearsArray[41].path);
                    }
                  }
                >
                  <img src= {gearsArray[41].path} alt={gearsArray[41].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[42].id);
                    props.passImagePath(gearsArray[42].path);
                    }
                  }
                >
                  <img src= {gearsArray[42].path} alt={gearsArray[42].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[43].id);
                    props.passImagePath(gearsArray[43].path);
                    }
                  }
                >
                  <img src= {gearsArray[43].path} alt={gearsArray[43].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[44].id);
                    props.passImagePath(gearsArray[44].path);
                    }
                  }
                >
                  <img src= {gearsArray[44].path} alt={gearsArray[44].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[45].id);
                    props.passImagePath(gearsArray[45].path);
                    }
                  }
                >
                  <img src= {gearsArray[45].path} alt={gearsArray[45].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[46].id);
                    props.passImagePath(gearsArray[46].path);
                    }
                  }
                >
                  <img src= {gearsArray[46].path} alt={gearsArray[46].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[47].id);
                    props.passImagePath(gearsArray[47].path);
                    }
                  }
                >
                  <img src= {gearsArray[47].path} alt={gearsArray[47].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[48].id);
                    props.passImagePath(gearsArray[48].path);
                    }
                  }
                >
                  <img src= {gearsArray[48].path} alt={gearsArray[48].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[49].id);
                    props.passImagePath(gearsArray[49].path);
                    }
                  }
                >
                  <img src= {gearsArray[49].path} alt={gearsArray[49].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[50].id);
                    props.passImagePath(gearsArray[50].path);
                    }
                  }
                >
                  <img src= {gearsArray[50].path} alt={gearsArray[50].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[51].id);
                    props.passImagePath(gearsArray[51].path);
                    }
                  }
                >
                  <img src= {gearsArray[51].path} alt={gearsArray[51].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[52].id);
                    props.passImagePath(gearsArray[52].path);
                    }
                  }
                >
                  <img src= {gearsArray[52].path} alt={gearsArray[52].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[53].id);
                    props.passImagePath(gearsArray[53].path);
                    }
                  }
                >
                  <img src= {gearsArray[53].path} alt={gearsArray[53].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[54].id);
                    props.passImagePath(gearsArray[54].path);
                    }
                  }
                >
                  <img src= {gearsArray[54].path} alt={gearsArray[54].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[55].id);
                    props.passImagePath(gearsArray[55].path);
                    }
                  }
                >
                  <img src= {gearsArray[55].path} alt={gearsArray[55].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[56].id);
                    props.passImagePath(gearsArray[56].path);
                    }
                  }
                >
                  <img src= {gearsArray[56].path} alt={gearsArray[56].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[57].id);
                    props.passImagePath(gearsArray[57].path);
                    }
                  }
                >
                  <img src= {gearsArray[57].path} alt={gearsArray[57].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[58].id);
                    props.passImagePath(gearsArray[58].path);
                    }
                  }
                >
                  <img src= {gearsArray[58].path} alt={gearsArray[58].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[59].id);
                    props.passImagePath(gearsArray[59].path);
                    }
                  }
                >
                  <img src= {gearsArray[59].path} alt={gearsArray[59].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[60].id);
                    props.passImagePath(gearsArray[60].path);
                    }
                  }
                >
                  <img src= {gearsArray[60].path} alt={gearsArray[60].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[61].id);
                    props.passImagePath(gearsArray[61].path);
                    }
                  }
                >
                  <img src= {gearsArray[61].path} alt={gearsArray[61].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[62].id);
                    props.passImagePath(gearsArray[62].path);
                    }
                  }
                >
                  <img src= {gearsArray[62].path} alt={gearsArray[62].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[63].id);
                    props.passImagePath(gearsArray[63].path);
                    }
                  }
                >
                  <img src= {gearsArray[63].path} alt={gearsArray[63].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[64].id);
                    props.passImagePath(gearsArray[64].path);
                    }
                  }
                >
                  <img src= {gearsArray[64].path} alt={gearsArray[64].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[65].id);
                    props.passImagePath(gearsArray[65].path);
                    }
                  }
                >
                  <img src= {gearsArray[65].path} alt={gearsArray[65].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[66].id);
                    props.passImagePath(gearsArray[66].path);
                    }
                  }
                >
                  <img src= {gearsArray[66].path} alt={gearsArray[66].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[67].id);
                    props.passImagePath(gearsArray[67].path);
                    }
                  }
                >
                  <img src= {gearsArray[67].path} alt={gearsArray[67].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[68].id);
                    props.passImagePath(gearsArray[68].path);
                    }
                  }
                >
                  <img src= {gearsArray[68].path} alt={gearsArray[68].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[69].id);
                    props.passImagePath(gearsArray[69].path);
                    }
                  }
                >
                  <img src= {gearsArray[69].path} alt={gearsArray[69].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[70].id);
                    props.passImagePath(gearsArray[70].path);
                    }
                  }
                >
                  <img src= {gearsArray[70].path} alt={gearsArray[70].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[71].id);
                    props.passImagePath(gearsArray[71].path);
                    }
                  }
                >
                  <img src= {gearsArray[71].path} alt={gearsArray[71].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[72].id);
                    props.passImagePath(gearsArray[72].path);
                    }
                  }
                >
                  <img src= {gearsArray[72].path} alt={gearsArray[72].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[73].id);
                    props.passImagePath(gearsArray[73].path);
                    }
                  }
                >
                  <img src= {gearsArray[73].path} alt={gearsArray[73].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[74].id);
                    props.passImagePath(gearsArray[74].path);
                    }
                  }
                >
                  <img src= {gearsArray[74].path} alt={gearsArray[74].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[75].id);
                    props.passImagePath(gearsArray[75].path);
                    }
                  }
                >
                  <img src= {gearsArray[75].path} alt={gearsArray[75].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[76].id);
                    props.passImagePath(gearsArray[76].path);
                    }
                  }
                >
                  <img src= {gearsArray[76].path} alt={gearsArray[76].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[77].id);
                    props.passImagePath(gearsArray[77].path);
                    }
                  }
                >
                  <img src= {gearsArray[77].path} alt={gearsArray[77].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[78].id);
                    props.passImagePath(gearsArray[78].path);
                    }
                  }
                >
                  <img src= {gearsArray[78].path} alt={gearsArray[78].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[79].id);
                    props.passImagePath(gearsArray[79].path);
                    }
                  }
                >
                  <img src= {gearsArray[79].path} alt={gearsArray[79].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[80].id);
                    props.passImagePath(gearsArray[80].path);
                    }
                  }
                >
                  <img src= {gearsArray[80].path} alt={gearsArray[80].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[81].id);
                    props.passImagePath(gearsArray[81].path);
                    }
                  }
                >
                  <img src= {gearsArray[81].path} alt={gearsArray[81].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[82].id);
                    props.passImagePath(gearsArray[82].path);
                    }
                  }
                >
                  <img src= {gearsArray[82].path} alt={gearsArray[82].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[83].id);
                    props.passImagePath(gearsArray[83].path);
                    }
                  }
                >
                  <img src= {gearsArray[83].path} alt={gearsArray[83].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[84].id);
                    props.passImagePath(gearsArray[84].path);
                    }
                  }
                >
                  <img src= {gearsArray[84].path} alt={gearsArray[84].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[85].id);
                    props.passImagePath(gearsArray[85].path);
                    }
                  }
                >
                  <img src= {gearsArray[85].path} alt={gearsArray[85].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[86].id);
                    props.passImagePath(gearsArray[86].path);
                    }
                  }
                >
                  <img src= {gearsArray[86].path} alt={gearsArray[86].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[87].id);
                    props.passImagePath(gearsArray[87].path);
                    }
                  }
                >
                  <img src= {gearsArray[87].path} alt={gearsArray[87].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[88].id);
                    props.passImagePath(gearsArray[88].path);
                    }
                  }
                >
                  <img src= {gearsArray[88].path} alt={gearsArray[88].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[89].id);
                    props.passImagePath(gearsArray[89].path);
                    }
                  }
                >
                  <img src= {gearsArray[89].path} alt={gearsArray[89].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[90].id);
                    props.passImagePath(gearsArray[90].path);
                    }
                  }
                >
                  <img src= {gearsArray[90].path} alt={gearsArray[90].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[91].id);
                    props.passImagePath(gearsArray[91].path);
                    }
                  }
                >
                  <img src= {gearsArray[91].path} alt={gearsArray[91].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[92].id);
                    props.passImagePath(gearsArray[92].path);
                    }
                  }
                >
                  <img src= {gearsArray[92].path} alt={gearsArray[92].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[93].id);
                    props.passImagePath(gearsArray[93].path);
                    }
                  }
                >
                  <img src= {gearsArray[93].path} alt={gearsArray[93].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[94].id);
                    props.passImagePath(gearsArray[94].path);
                    }
                  }
                >
                  <img src= {gearsArray[94].path} alt={gearsArray[94].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[95].id);
                    props.passImagePath(gearsArray[95].path);
                    }
                  }
                >
                  <img src= {gearsArray[95].path} alt={gearsArray[95].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[96].id);
                    props.passImagePath(gearsArray[96].path);
                    }
                  }
                >
                  <img src= {gearsArray[96].path} alt={gearsArray[96].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[97].id);
                    props.passImagePath(gearsArray[97].path);
                    }
                  }
                >
                  <img src= {gearsArray[97].path} alt={gearsArray[97].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[98].id);
                    props.passImagePath(gearsArray[98].path);
                    }
                  }
                >
                  <img src= {gearsArray[98].path} alt={gearsArray[98].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[99].id);
                    props.passImagePath(gearsArray[99].path);
                    }
                  }
                >
                  <img src= {gearsArray[99].path} alt={gearsArray[99].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[100].id);
                    props.passImagePath(gearsArray[100].path);
                    }
                  }
                >
                  <img src= {gearsArray[100].path} alt={gearsArray[100].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[101].id);
                    props.passImagePath(gearsArray[101].path);
                    }
                  }
                >
                  <img src= {gearsArray[101].path} alt={gearsArray[101].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[102].id);
                    props.passImagePath(gearsArray[102].path);
                    }
                  }
                >
                  <img src= {gearsArray[102].path} alt={gearsArray[102].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[103].id);
                    props.passImagePath(gearsArray[103].path);
                    }
                  }
                >
                  <img src= {gearsArray[103].path} alt={gearsArray[103].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[104].id);
                    props.passImagePath(gearsArray[104].path);
                    }
                  }
                >
                  <img src= {gearsArray[104].path} alt={gearsArray[104].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[105].id);
                    props.passImagePath(gearsArray[105].path);
                    }
                  }
                >
                  <img src= {gearsArray[105].path} alt={gearsArray[105].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[106].id);
                    props.passImagePath(gearsArray[106].path);
                    }
                  }
                >
                  <img src= {gearsArray[106].path} alt={gearsArray[106].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[107].id);
                    props.passImagePath(gearsArray[107].path);
                    }
                  }
                >
                  <img src= {gearsArray[107].path} alt={gearsArray[107].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[108].id);
                    props.passImagePath(gearsArray[108].path);
                    }
                  }
                >
                  <img src= {gearsArray[108].path} alt={gearsArray[108].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[109].id);
                    props.passImagePath(gearsArray[109].path);
                    }
                  }
                >
                  <img src= {gearsArray[109].path} alt={gearsArray[109].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[110].id);
                    props.passImagePath(gearsArray[110].path);
                    }
                  }
                >
                  <img src= {gearsArray[110].path} alt={gearsArray[110].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[111].id);
                    props.passImagePath(gearsArray[111].path);
                    }
                  }
                >
                  <img src= {gearsArray[111].path} alt={gearsArray[111].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[112].id);
                    props.passImagePath(gearsArray[112].path);
                    }
                  }
                >
                  <img src= {gearsArray[112].path} alt={gearsArray[112].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[113].id);
                    props.passImagePath(gearsArray[113].path);
                    }
                  }
                >
                  <img src= {gearsArray[113].path} alt={gearsArray[113].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[114].id);
                    props.passImagePath(gearsArray[114].path);
                    }
                  }
                >
                  <img src= {gearsArray[114].path} alt={gearsArray[114].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[115].id);
                    props.passImagePath(gearsArray[115].path);
                    }
                  }
                >
                  <img src= {gearsArray[115].path} alt={gearsArray[115].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[116].id);
                    props.passImagePath(gearsArray[116].path);
                    }
                  }
                >
                  <img src= {gearsArray[116].path} alt={gearsArray[116].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[117].id);
                    props.passImagePath(gearsArray[117].path);
                    }
                  }
                >
                  <img src= {gearsArray[117].path} alt={gearsArray[117].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[118].id);
                    props.passImagePath(gearsArray[118].path);
                    }
                  }
                >
                  <img src= {gearsArray[118].path} alt={gearsArray[118].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[119].id);
                    props.passImagePath(gearsArray[119].path);
                    }
                  }
                >
                  <img src= {gearsArray[119].path} alt={gearsArray[119].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[120].id);
                    props.passImagePath(gearsArray[120].path);
                    }
                  }
                >
                  <img src= {gearsArray[120].path} alt={gearsArray[120].name}/>
                </div>
              </div>
              <div className="gear-list">
                <div
                  className="gear-image"
                  onClick={()=>{
                    props.passChosenGear(gearsArray[121].id);
                    props.passImagePath(gearsArray[121].path);
                    }
                  }
                >
                  <img src= {gearsArray[121].path} alt={gearsArray[121].name}/>
                </div>
              </div>
              
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