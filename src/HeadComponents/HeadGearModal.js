import React, { useState, useEffect, useRef}from 'react';
import GearIcon from '../GearIcon';

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
import lastDitchEffort from '../images/ability/LDE.png';
import openingGanbit from '../images/ability/OG.png';
import comeback from '../images/ability/CB.png';
import tenacity from '../images/ability/Tenacity.png';

// デフォルトはブランド順
let gears = [
  {name:"キャディ サンバイザー", path:Cady_Sunvisor, id:"V0_Cady_Sunvisor", brand:"アイロニック",default:runSpeed},
  {name:"スカッシュバンド", path:SquashBand, id:"HB_SquashBand", brand:"アイロニック",default:specialSaver},
  {name:"テッカサイクルキャップ", path:TekkaCycleCap, id:"C1_TekkaCycleCap", brand:"アイロニック",default:subPower},
  {name:"バスケバンド", path:BasukeBand, id:"HB_BasukeBand", brand:"アイロニック",default:openingGanbit},
  {name:"アナアキマスク", path:AnaakiMask, id:"BS_AnaakiMask", brand:"アナアキ",default:openingGanbit},
  {name:"アナアキピンベレー", path:AnaakiAnPinBeret, id:"H1_AnaakiAnPinBeret", brand:"アナアキ",default:inkRes},
  {name:"アナアキバスクベレー", path:AnaakiBuskBeret, id:"H1_AnaakiBuskBeret", brand:"アナアキ",default:inkSaverMain},
  {name:"テニスバンド", path:TennisBand, id:"HB_TennisBand", brand:"アロメ",default:comeback},
  {name:"サッカーバンド", path:SoccerBand, id:"BS_SoccerBand", brand:"アロメ",default:tenacity},
  {name:"サンサンサンバイザー", path:SanSanSunvisor, id:"V1_SanSanSunvisor", brand:"アロメ",default:subPower},
  {name:"ダテコンタクト", path:DateContact, id:"DateContact", brand:"アロメ",default:specialCharge},
  {name:"チャリキング帽", path:ChariKingBou, id:"C1_ChariKingBou", brand:"アロメ",default:bombDefence},
  {name:"イロメガネ", path:IroMegane, id:"BS_IroMegane", brand:"エゾッコ",default:lastDitchEffort},
  {name:"エゾッコメッシュ", path:EzokkoMesh, id:"C0_EzokkoMesh", brand:"エゾッコ",default:quickSuperJump},
  {name:"バックワードキャップ", path:BackwardCap, id:"C1_BackwardCap", brand:"エゾッコ",default:qr},
  {name:"ランニングバンド", path:RunningBand, id:"HB_RunningBand", brand:"エゾッコ",default:inkSaverSub},
  {name:"5パネルキャップ", path:FIVEPanelCap, id:"C0_5PanelCap", brand:"エゾッコ",default:comeback},
  {name:"アローバンド ブラック", path:ArrowBand_Black, id:"BS_ArrowBand_Black", brand:"エゾッコ",default:tenacity},
  // {name:"エゾッコフリッパー", path:EzokkoFlipper, id:"M0_EzokkoFlipper", brand:"エゾッコ",default:openingGanbit},
  {name:"ダブルエッグサングラス", path:DoubleEggSunglass, id:"BS_DoubleEggSunglass", brand:"エゾッコ",default:runSpeed},
  {name:"アローバンド ホワイト", path:ArrowBand_White, id:"BS_ArrowBand_White", brand:"エゾッコ",default:specialPower},
  {name:"ツヤケシMTBメット", path:TsuyaKeshiMTBMet, id:"M0_TsuyaKeshiMTBMet", brand:"エゾッコ",default:subPower},
  {name:"ロゴヅクシMTBメット", path:LogoZukushiMTBMet, id:"M0_LogoZukushiMTBMet", brand:"エゾッコ",default:tenacity},
  {name:"キングオブマスク", path:KingOfMask, id:"BS_KingOfMask", brand:"エンペリー",default:inkSaverSub},
  {name:"キングタコスターマスク", path:KingTakoStarMask, id:"BS_KingTakoStarMask", brand:"エンペリー",default:tenacity},
  {name:"キングフリップメッシュ", path:KingFlipMesh, id:"C0_KingFlipMesh", brand:"エンペリー",default:runSpeed},
  // {name:"カイザーカフ", path:KaiserCuff, id:"C0_KingFlipMesh", brand:"エンペリー",default:inkSaverMain},
  {name:"2ラインメッシュ", path:TWOLineMesh, id:"C0_2LineMesh", brand:"クラーゲス",default:specialSaver},
  {name:"エイズリーバンダナ", path:Eizuri$Bandana, id:"EF_BN_Eizuri-Bandana", brand:"クラーゲス",default:inkSaverSub},
  {name:"マルベッコー", path:MaruBekko$, id:"BS_MaruBekko-", brand:"クラーゲス",default:quickSuperJump},
  {name:"ウールウーニーズクラシック", path:WoolU$ni$zuClassic, id:"C1_WoolU-ni-zuClassic", brand:"クラーゲス",default:comeback},
  {name:"ヒッコリーワークキャップ", path:Hikkori$WorkCap, id:"C0_Hikkori-WorkCap", brand:"クラーゲス",default:specialPower},
  {name:"ロングビルキャップ", path:LongBillCap, id:"C0_LongBillCap", brand:"クラーゲス",default:inkRecovery},
  {name:"キャンプキャップ", path:CampCap, id:"C0_CampCap", brand:"シグレ二",default:swimSpeed},
  {name:"キャンプハット", path:CampHat, id:"H0_CampHat", brand:"シグレ二",default:specialPower},
  {name:"ショートビーニー", path:ShortBeanie, id:"M0_ShortBeanie", brand:"シグレ二",default:inkSaverMain},
  {name:"ヤマギリビーニー", path:YamagiriBeanie, id:"KN_YamagiriBeanie", brand:"シグレ二",default:mpu},
  {name:"カイガラスゲ", path:KaigaraSuge, id:"H1_KaigaraSuge", brand:"シグレ二",default:qr},
  {name:"スゲ", path:Suge, id:"H0_Suge", brand:"シグレ二",default:inkSaverMain},
  {name:"クロブチ レトロ", path:Kurobuchi_Retro, id:"BS_Kurobuchi_Retro", brand:"ジモン",default:qr},
  {name:"ボーダービーニー", path:BorderBeanie, id:"M0_BorderBeanie", brand:"ジモン",default:openingGanbit},
  {name:"セルブロウ", path:SeruBurou, id:"BS_Seruburou", brand:"ジモン",default:specialPower},
  {name:"ハウスタグデニムCAP", path:HouseTagDenimCAP, id:"C0_HouseTagDenimCAP", brand:"ジモン",default:specialCharge},
  {name:"ボンボンニット", path:BonBonKnit, id:"KN_BonBonKnit", brand:"ジモン",default:quickSuperJump},
  {name:"センニュークロブチ", path:Sennyu$Kurobuchi, id:"BS_Sennyu-Kurobuchi", brand:"ジモン",default:swimSpeed},
  {name:"センニューボンボン", path:Sennyu$BonBon, id:"KN_Sennyu-BonBon", brand:"ジモン",default:inkSaverSub},
  {name:"フライトぼう", path:FlightBou, id:"KN_FlightBou", brand:"ジモン",default:inkRes},
  {name:"スミガードゴーグル", path:SumiGuardGoggle, id:"BS_SumiGuardGoggle", brand:"タタキケンサキ",default:runSpeed},
  // {name:"フェイスバイザー", path:FaceVisor, id:"FaceVisor", brand:"タタキケンサキ",default:bombDefence},
  {name:"イカバケット", path:IkaBucket, id:"M0_IkaBucket", brand:"バトロイカ",default:specialSaver},
  {name:"イカバッテンガード", path:IkaBattenGuard, id:"BS_IkaBattenGuard", brand:"バトロイカ",default:inkSaverMain},
  {name:"ヘッドバンド ホワイト", path:HeadBand_White, id:"HB_Headband_White", brand:"バトロイカ",default:inkRecovery},
  {name:"ペインターマスク", path:PainterMask, id:"BS_PainterMask", brand:"バトロイカ",default:mpu},
  {name:"アンコウラバーマスク", path:AnkouRubberMask, id:"M1_AnkouRubberMask", brand:"バトロイカ",default:inkSaverMain},
  {name:"キョンキョンぼう", path:KyonKyonBou, id:"H2_KyonKyonBou", brand:"バトロイカ",default:runSpeed},
  {name:"こうしえんバンダナ", path:KoushienBandana, id:"BN_KoushienBandana", brand:"バトロイカ",default:swimSpeed},
  {name:"コズミックアンテナ", path:CozmicAntenna, id:"BS_CozmicAntenna", brand:"バトロイカ",default:comeback},
  {name:"ニューイヤーグラスDX", path:NewYearGlassDX, id:"BS_NewYearGlassDX", brand:"バトロイカ",default:specialCharge},
  {name:"バーニングブロイラー", path:BurningBroiler, id:"M1_BurningBroiler", brand:"バトロイカ",default:runSpeed},
  {name:"ハッピーチンアナゴハット", path:HappyChinAnagoHat, id:"H1_HappyChinanagoHat", brand:"バトロイカ",default:mpu},
  {name:"フォーリマスク", path:Fo$riMask, id:"BS_Fo-riMask", brand:"フォーリマ",default:mpu},
  {name:"エンペラフックHDP", path:EnperaHookHDP, id:"BS_EnperaHookHDP", brand:"フォーリマ",default:inkRes},
  {name:"オーロラヘッドホン", path:AuroraHeadphone, id:"HP_AuroraHeadphone", brand:"フォーリマ",default:inkSaverSub},
  {name:"スタジオヘッドホン", path:StudioHeadphone, id:"HP_StudioHeadphone", brand:"フォーリマ",default:inkSaverMain},
  // {name:"スプラッシュゴーグル", path:SplashGoggle, id:"BS_SplashGoggle", brand:"フォーリマ",default:bombDefence},
  {name:"ダイバーゴーグル", path:DiverGoggle, id:"BS_DiverGoggle", brand:"フォーリマ",default:inkSaverSub},
  {name:"トレジャーメット", path:TreasureMet, id:"H2_TreasureMet", brand:"フォーリマ",default:inkRecovery},
  {name:"パイロットゴーグル", path:PilotGoggle, id:"HB_PilotGoggle", brand:"フォーリマ",default:subPower},
  {name:"ロブスターブーニー", path:RobstarBoonie, id:"H1_RobstarBoonie", brand:"フォーリマ",default:lastDitchEffort},
  {name:"イカスカルマスク", path:IkaSkullMask, id:"BN_IkaSkullMask", brand:"フォーリマ",default:specialSaver},
  // {name:"イカロスHKメット", path:IcarusHKMet, id:"M0_IcarusHKMet", brand:"フォーリマ",default:mpu},
  {name:"イヤーマフ", path:EarMuff, id:"HP_EarMuff", brand:"フォーリマ",default:qr},
  {name:"オクトメットプライズデコ", path:OctoMetPrizeDeko, id:"M1_OctoMetPrizeDeco", brand:"フォーリマ",default:bombDefence},
  {name:"ステカセヘッドホン", path:SutekaseHeadphone, id:"HP_SutekaseHeadphone", brand:"フォーリマ",default:inkRecovery},
  {name:"センニューゴーグル", path:Sennyu$Goggle, id:"HB_Sennyu-Goggle", brand:"フォーリマ",default:inkRes},
  {name:"センニューヘッドホン", path:Sennyu$Headphone, id:"HP_Sennyu-Headphone", brand:"フォーリマ",default:inkSaverMain},
  {name:"タコマスク", path:TakoMask, id:"BS_TakoMask", brand:"フォーリマ",default:tenacity},
  // {name:"デカメットアイシールド", path:DekaMetEyeshield, id:"M1_DekaMetEyeshield", brand:"フォーリマ",default:subPower},
  {name:"ナイトビジョン", path:NightVision, id:"M1_NightVision", brand:"フォーリマ",default:swimSpeed},
  {name:"ノーズガードモトクロス", path:NoseGuardMotoCross, id:"BS_NoseGuardMotoCross", brand:"フォーリマ",default:specialCharge},
  {name:"フェイスゴーグル", path:FaceGoggle, id:"BS_FaceGoggle", brand:"フォーリマ",default:comeback},
  {name:"モンゴウベレー", path:MongouBeret, id:"H0_MongouBeret", brand:"フォーリマ",default:openingGanbit},
  {name:"イカベーダーキャップ", path:IkaVaderCap, id:"C1_IkavaderCap", brand:"ホタックス",default:specialCharge},
  {name:"イカンカン", path:Ikankan, id:"H2_Ikankan", brand:"ホタックス",default:quickSuperJump},
  {name:"ウーニーズBBキャップ", path:U$ni$zuBBCap, id:"C0_U-ni-zuBBCap", brand:"ホタックス",default:subPower},
  {name:"ウインターボンボン", path:WinterBonBon, id:"KN_WinterBonBon", brand:"ホタックス",default:tenacity},
  {name:"ビバレッジキャップ", path:BeverageCap, id:"C1_BeverageCap", brand:"ホタックス",default:inkSaverSub},
  // {name:"イカンカン クラシック", path:Ikankan_Classic, id:"Ikankan_Classic", brand:"ホタックス",default:specialPower},
  {name:"オシノビニット", path:OshinobiKnit, id:"KN_OshinobiKnit", brand:"ホタックス",default:swimSpeed},
  {name:"サイクルメット", path:CycleMet, id:"H1_CycleMet", brand:"ホタックス",default:inkRecovery},
  {name:"スケボーメット", path:Sukebo$Met, id:"M1_Sukebo-Met", brand:"ホタックス",default:specialSaver},
  {name:"パッチハット", path:PatchHat, id:"M0_PatchHat", brand:"ホタックス",default:mpu},
  {name:"イカノルディック", path:IkaNordic, id:"KN_IkaNordic", brand:"ホタックス",default:comeback},
  {name:"クラゲーダーキャップ", path:KuragaderCap, id:"C1_KuragaderCap", brand:"ホタックス",default:inkSaverSub},
  {name:"チドリキャップ", path:ChidoriCap, id:"C1_ChidoriCap", brand:"ホタックス",default:openingGanbit},
  {name:"ドゥーラグキャップガサネ", path:DoRagCapGasane, id:"H3_DoRagCapGasane", brand:"ホタックス",default:mpu},
  {name:"バイザーメット", path:VisorMet, id:"M1_VisorMet", brand:"ホタックス",default:lastDitchEffort},
  {name:"カモメッシュ", path:KamoMesh, id:"C0_KamoMesh", brand:"ホッコリー",default:swimSpeed},
  {name:"クロヤキフグバンダナ", path:KuroYakifuguBandana, id:"HB_KuroYakifuguBandana", brand:"ホッコリー",default:bombDefence},
  {name:"ジェットキャップ", path:JetCap, id:"C0_JetCap", brand:"ホッコリー",default:specialSaver},
  {name:"フグベルハット", path:FuguBellHat, id:"H2_FuguBellHat", brand:"ホッコリー",default:inkRecovery},
  {name:"マスクドホッコリー", path:MaskedHokkori$, id:"BS_MaskedHokkori-", brand:"ホッコリー",default:runSpeed},
  {name:"ヤキフグ サンバイザー", path:Yakifugu_Sunvisor, id:"V3_Yakifugu_Sunvisor", brand:"ホッコリー",default:specialCharge},
  {name:"ヤキフグビスケットバンダナ", path:YakifuguBiscuitBandana, id:"HB_YakifuguBiscuitBandana", brand:"ホッコリー",default:specialPower},
  {name:"リブニット", path:RibKnit, id:"KN_RibKnit", brand:"ホッコリー",default:inkRes},
  {name:"フグハンチング", path:FuguHanching, id:"C1_FuguHanching", brand:"ホッコリー",default:quickSuperJump},
  {name:"フグベルベルハット", path:FuguBellBellHat, id:"H2_FuguBellBellHat", brand:"ホッコリー",default:qr},
  {name:"オクタグラス", path:OctaGlass, id:"BS_OctaGlass", brand:"ホッコリー",default:lastDitchEffort},
  {name:"サファリハット", path:SafariHat, id:"H1_SafariHat", brand:"ホッコリー",default:inkSaverMain},
  {name:"ヤコメッシュ", path:YakoMesh, id:"C0_YakoMesh", brand:"ヤコ",default:bombDefence},
  {name:"ヤコバイザー", path:YakoVisor, id:"V2_YakoVisor", brand:"ヤコ",default:quickSuperJump},
  {name:"タレサン18K", path:TareSan18K, id:"BS_TareSan18K", brand:"ロッケンベルグ",default:lastDitchEffort},
  {name:"マルサンSV925", path:MaruSanSV925, id:"BS_MaruSanSV925", brand:"ロッケンベルグ",default:swimSpeed},
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
  {name:"アイアンマスカレイド", path:AianMaskarade, id:"V4_AianMaskaRade", brand:"クマサン商会",default:empty},
  // {name:"アセストップソシナ", path:AsesuTopSoshina, id:""},
  // {name:"オーシャンズヘルム", path:OceansHelm, id:"H2_OceansHelm", brand:"クマサン商会",default:empty},
  // {name:"ガーディアンアーミーハット", path:GuardianArmyHat, id:""},
  // {name:"スペボウ レプリカ", path:Supebou_Replica, id:"Supebou_Replica", brand:"クマサン商会",default:empty},
  {name:"ゾネスティックスコープ", path:ZonesticScope, id:"ZonesticScope", brand:"クマサン商会",default:empty},
  {name:"ダストブロッカー 2.5", path:DustBlocker_25, id:"DustBlocker_25", brand:"クマサン商会",default:empty},
  {name:"ヘッドライトヘルム", path:HeadLightHelm, id:"HeadLightHelm", brand:"クマサン商会",default:empty},
  {name:"マリリンハットウィズピンズ", path:MarilynHatWithPins, id:"MarilynHatWithPins", brand:"クマサン商会",default:empty},
  {name:"レジェンドのぼうし", path:LegendNoBoushi, id:"H3_LegendNoBoushi", brand:"クマサン商会",default:empty}
];

// 名前順に整列した配列を新たに定義
const gearsSortedByName = gears.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);

const HeadGearModal = (props) => {
  // 表示する配列の管理
  const [gearsArray, setArray] = useState(gears);

  const selectBoxRef = useRef();

  const selectBox = function() {
    let target = selectBoxRef.current;
    if (target.value === "brand") {
      setArray(gears);
    } else if (target.value === "name") {
      setArray(gearsSortedByName);
    }
  };
  // ブランド名に応じてブランドロゴ、つきにくいギアパワー、つきにくいギアパワーの画像のpathをそれぞれ返す
  const brandDependency = (brand) => {
    if (brand === "バトロイカ") {
      return {brandImgPath:Batoroika, favoredAbility:inkRes, unfavoredAbility:inkSaverMain}
    } else if (brand === "アイロニック") {
      return {brandImgPath:Aironic, favoredAbility:quickSuperJump, unfavoredAbility:qr}
    } else if (brand === "クラーゲス") {
      return {brandImgPath:Kuragesu, favoredAbility:swimSpeed, unfavoredAbility:bombDefence}
    } else if (brand === "ロッケンベルグ") {
      return {brandImgPath:Rockenberg, favoredAbility:runSpeed, unfavoredAbility:swimSpeed}
    } else if (brand === "エゾッコ") {
      return {brandImgPath:Ezokko, favoredAbility:specialSaver, unfavoredAbility:specialCharge}
    } else if (brand === "フォーリマ") {
      return {brandImgPath:Forima, favoredAbility:specialPower, unfavoredAbility:inkSaverSub}
    } else if (brand === "ホッコリー") {
      return {brandImgPath:Hokkori, favoredAbility:inkSaverSub, unfavoredAbility:inkRecovery}
    } else if (brand === "ホタックス") {
      return {brandImgPath:Hotakkusu, favoredAbility:qr, unfavoredAbility:specialSaver}
    } else if (brand === "ジモン") {
      return {brandImgPath:Zimon, favoredAbility:inkSaverMain, unfavoredAbility:runSpeed}
    } else if (brand === "シグレ二") {
      return {brandImgPath:Sigureni, favoredAbility:bombDefence, unfavoredAbility:mpu}
    } else if (brand === "アロメ") {
      return {brandImgPath:Arome, favoredAbility:inkRecovery, unfavoredAbility:quickSuperJump}
    } else if (brand === "ヤコ") {
      return {brandImgPath:Yako, favoredAbility:specialCharge, unfavoredAbility:specialPower}
    } else if (brand === "アナアキ") {
      return {brandImgPath:Anaaki, favoredAbility:mpu, unfavoredAbility:specialSaver}
    } else if (brand === "エンペリー") {
      return {brandImgPath:Enperry, favoredAbility:subPower, unfavoredAbility:inkRes}
    } else if (brand === "タタキケンサキ") {
      return {brandImgPath:Tatakikensaki, favoredAbility:mpu, unfavoredAbility:subPower}
    } else if (brand === "クマサン商会") {
      return {brandImgPath:Kumasan, favoredAbility:empty, unfavoredAbility:empty}
    } else if (brand === "アタリメイド") {
      return {brandImgPath:Atarimeido, favoredAbility:empty, unfavoredAbility:empty}
    }
  }

  const closeGearModal = function() {
    let target = document.getElementById("headGearModal")
    target.style.display = "none"
  }

  return (
      <div className="gear-modal bg-secondary font-type2 text-white" id="headGearModal">
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">ギアを選択</h5>
            <button type="button" className="btn-close btn-close-white" onClick={()=>{closeGearModal()}}></button>
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
                  onChange={()=>{selectBox();}}
                >
                    <option value="brand" defaultValue>ブランド</option>
                    <option value="name">名前</option>
                </select>
              </div>
            </div>
          </div>
          <div className="px-0 px-lg-5 row gears-display-area">
            <div className="col-4">
              <div
                className="chosen-gear-icon"
              >
                <img className="chosen-gear-icon-img" src={props.chosenGear.path} alt=""/>
                <img className="brand-img" src={brandDependency(props.chosenGear.brand).brandImgPath} alt=""/>
                <div className="head-stripe gear-icon-footer">  
                  <div className="ability-icon default-ability">
                    <img className="default-ability-img" src={props.chosenGear.default} alt=""/>
                  </div>
                  <div className="brand-ability">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 384 512">
                      {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                      <path 
                        d="M54.63 246.6L192 109.3l137.4 137.4C335.6 252.9 343.8 256 352 256s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-160-160c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25S42.13 259.1 54.63 246.6zM214.6 233.4c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 301.3l137.4 137.4C335.6 444.9 343.8 448 352 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L214.6 233.4z"
                        fill="#dfff00"
                      />
                    </svg>
                    <img className="img-gear-icon-ability" src={brandDependency(props.chosenGear.brand).favoredAbility} alt=""/>
                  </div>
                  <div className="brand-ability">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 384 512">
                      {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                      <path
                        d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"
                        fill="#ff0000"
                      />
                    </svg>
                    <img className="img-gear-icon-ability" src={brandDependency(props.chosenGear.brand).unfavoredAbility} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 d-flex flex-wrap gearicons-section head-stripe">
                <GearIcon
                  gear={gearsArray[0]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[1]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[2]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[3]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[4]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[5]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[6]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[7]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[8]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[9]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[10]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[11]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[12]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[13]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[14]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[15]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[16]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[17]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[18]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[19]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[20]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[21]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[22]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[23]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[24]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[25]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[26]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[27]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[28]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[29]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[30]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[31]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[32]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[33]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[34]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[35]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[36]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[37]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[38]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[39]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[40]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[41]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[42]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[43]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[44]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[45]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[46]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[47]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[48]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[49]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[50]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[51]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[52]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[53]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[54]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[55]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[56]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[57]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[58]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[59]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[60]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[61]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[62]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[63]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[64]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[65]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[66]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[67]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[68]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[69]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[70]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[71]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[72]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[73]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[74]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[75]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[76]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[77]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[78]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[79]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[80]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[81]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[82]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[83]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[84]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[85]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[86]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[87]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[88]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[89]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[90]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[91]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[92]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[93]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[94]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[95]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[96]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[97]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[98]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[99]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[100]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[101]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[102]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[103]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[104]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[105]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[106]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[107]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[108]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[109]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[110]}
                  setChosenGear={props.setChosenGear}
                />
                <GearIcon 
                  gear={gearsArray[111]}
                  setChosenGear={props.setChosenGear}
                />
            </div>
          </div>
        </div>
  );
};

export default HeadGearModal;