import { useState,useRef, useEffect } from 'react';
import GearIcon from '../GearIcon';
import SeaHorse_White from '../images/gear/Shs_SLO003.png';
import SeaHorseHi_Zombie from '../images/gear/Shs_SHI001.png';
import SeaHorseHi_Purple from '../images/gear/Shs_SHI003.png';
import SeaHorseHi_Red from '../images/gear/Shs_SHI000.png';
import DekaronicMint from '../images/gear/Shs_SHI011.png';
import DekaroNoLace_Blue from '../images/gear/Shs_SLO016.png';
import SeaHorse_Yellow from '../images/gear/Shs_SLO007.png';
import SeaHorse_BlackLeather from '../images/gear/Shs_SLO005.png';
// import DekaronicChocolate from '../images/gear/Shs_SHI010.png';
import DekaronicBlack from '../images/gear/Shs_SHI012.png';
import DekaroNoLace_White from '../images/gear/Shs_SLO015.png';
import SeaHorseHi_Gold from '../images/gear/Shs_SHI006.png';
import AnaakiSpider6Hole from '../images/gear/Shs_BOT016.png';
import AnaakiRubber_Habanero from '../images/gear/Shs_LTS010.png';
import AnaakiRubber_Fake from '../images/gear/Shs_LTS011.png';
import AromeshYellow from '../images/gear/Shs_SHT012.png';
import Iromaki750_Yellow from '../images/gear/Shs_SHI024.png';
import Iromaki750_Orange from '../images/gear/Shs_SHI033.png';
import Iromaki750_Green from '../images/gear/Shs_SHI029.png';
import Iromaki750_Purple from '../images/gear/Shs_SHI030.png';
// import Iromaki750_Blue from '../images/gear/Shs_SHI032.png';
import Iromaki750_Red from '../images/gear/Shs_SHI031.png';
import UmiushiYellow from '../images/gear/Shs_SHT002.png';
import UmiushiBlue from '../images/gear/Shs_SHT005.png';
import CanaryBeans from '../images/gear/Shs_SHT011.png';
import CyanBeans from '../images/gear/Shs_SHT004.png';
import SumireBeans from '../images/gear/Shs_SHT010.png';
import PinkBeans from '../images/gear/Shs_SHT000.png';
import BlackBeans from '../images/gear/Shs_SHT009.png';
import AromeshVermillion from '../images/gear/Shs_SHT014.png';
import UmiushiPuerple from '../images/gear/Shs_SHT007.png';
// import UmiushiVolt95 from '../images/gear/Shs_SHT018.png';
// import GomaShio270 from '../images/gear/Shs_SHI037.png';
// import Norimaki750_White from '../images/gear/Shs_SHI014.png';
import IceDownBoots from '../images/gear/Shs_BOT011.png';
import UmiushiTownHi_Amber from '../images/gear/Shs_SHI023.png';
import UmiushiTownHi_Gray from '../images/gear/Shs_SHI019.png';
import UmiushiRed from '../images/gear/Shs_SHT006.png';
import Norimaki750_Black from '../images/gear/Shs_SHI015.png';
import MilkyDownBoots from '../images/gear/Shs_BOT010.png';
import BBSandal from '../images/gear/Shs_SDL004.png';
import Gurittyo_Orange from '../images/gear/Shs_SLO004.png';
import Gurittyo_Blue from '../images/gear/Shs_SLO000.png';
import No$ri$Tyakka_Gray from '../images/gear/Shs_SLO017.png';
import No$ri$Tyakka_Robins from '../images/gear/Shs_SLO019.png';
import No$ri$Tyakka_Tribe from '../images/gear/Shs_SLO018.png';
import Gurittyo_Green_GENTEIBAN from '../images/gear/Shs_SLO002.png';
// import No$ri$Tyakka_Iidachi from '../images/gear/Shs_HAP004.png';
// import No$ri$Tyakka_Himeito from '../images/gear/Shs_HAP000.png';
import Eging5_HaniOre from '../images/gear/Shs_SHI026.png';
import EnPacerAg from '../images/gear/Shs_SHT016.png';
import EnPacerCao from '../images/gear/Shs_SHT015.png';
import Eging4_AoKuro from '../images/gear/Shs_SHI018.png';
import Eging4_AkaKuro from '../images/gear/Shs_SHI017.png';
// import Eging4_Iimari from '../images/gear/Shs_HAP005.png';
import Eging4_KiiKon from '../images/gear/Shs_SHI027.png';
// import Eging4_HimeKin from '../images/gear/Shs_HAP001.png';
import Eging5_KuroAo from '../images/gear/Shs_SHI038.png';
import Eging5_ShiroAka from '../images/gear/Shs_SHI025.png';
import Eging5_Premium from '../images/gear/Shs_SHI041.png';
import EnPacerAu from '../images/gear/Shs_SHT017.png';
import EnperrialNV from '../images/gear/Shs_SHI022.png';
// import EnperrialKaiser from '../images/gear/Shs_SHI021.png';
import OysterClog from '../images/gear/Shs_SDL000.png';
import Canvas_Kumanomi from '../images/gear/Shs_SLO006.png';
import Canvas_Banana from '../images/gear/Shs_SLO001.png';
import Canvas_White from '../images/gear/Shs_FST000.png';
import CanvasHi_Truffle from '../images/gear/Shs_SHI040.png';
import CanvasHi_Mushroom from '../images/gear/Shs_SHI002.png';
import CanvasHi_Mulukhiya from '../images/gear/Shs_SHI004.png';
import Slippon_Blue from '../images/gear/Shs_SLP000.png';
import Slippon_Red from '../images/gear/Shs_SLP001.png';
// import BlueberryComfort from '../images/gear/Shs_CFS000.png';
// import AkebiComfort from '../images/gear/Shs_CFS001.png';
import CanvasHi_Tomato from '../images/gear/Shs_SHI005.png';
import Slippon_Chidori from '../images/gear/Shs_SLP002.png';
import Slippon_Polka from '../images/gear/Shs_SLP003.png';
import ChocoClog from '../images/gear/Shs_SDL001.png';
// import MidnightSlippon from '../images/gear/Shs_HAP007.png';
import FujitsuboPetaSan from '../images/gear/Shs_SDL009.png';
import BoulderShoes_Hazakura from '../images/gear/Shs_SLO013.png';
import RainyAcerola from '../images/gear/Shs_BOT005.png';
import RainyShabon from '../images/gear/Shs_BOT009.png';
import DeltaStrap_Neon from '../images/gear/Shs_SDL003.png';
import DeltaStrap_Luminous from '../images/gear/Shs_SDL006.png';
import TrekkingCustom from '../images/gear/Shs_TRS001.png';
import BoulderShoes_Tainoe from '../images/gear/Shs_SLO012.png';
import RainyMossGreen from '../images/gear/Shs_BOT004.png';
import DeltaStrap_Snow from '../images/gear/Shs_SDL005.png';
import TrekkingPro from '../images/gear/Shs_TRS002.png';
import TrekkingLight from '../images/gear/Shs_TRS000.png';
import SharkMoccasin from '../images/gear/Shs_SHI008.png';
import HimoHimoGreen from '../images/gear/Shs_SLO014.png';
import BeriBeriRed from '../images/gear/Shs_SLO009.png';
import JawsMoccasin from '../images/gear/Shs_SHI009.png';
import TyabaHuntingBoots from '../images/gear/Shs_BOT018.png';
import HuntingBoots from '../images/gear/Shs_BOT012.png';
import PiranhaMoccasin from '../images/gear/Shs_SHI013.png';
import BeriBeriWhite from '../images/gear/Shs_SLO008.png';
import Arrows_TatakiBettyu$ from '../images/gear/Shs_SHT013.png';
import Strip_TatakiBettyu$ from '../images/gear/Shs_SHI036.png';
import Supaika_TatakiBettyu$ from '../images/gear/Shs_SLO020.png';
// import MechaLeg$IBS from '../images/gear/Shs_CRC000.png';
// import MoistKonBoots from '../images/gear/Shs_BOT015.png';
import YakifuguSyawaSan_Aka from '../images/gear/Shs_SDL007.png';
import YakifuguSyawaSan_Ki from '../images/gear/Shs_SDL008.png';
// ヤコ
import AthleticArrows from '../images/gear/Shs_SHT019.png';
import OrangeArrows from '../images/gear/Shs_SHT001.png';
import OrcaHi from '../images/gear/Shs_SHI020.png';
import OrcaHiWoven from '../images/gear/Shs_SHI028.png';
import OrcaHiSunSet from '../images/gear/Shs_SHI016.png';
import OrcaHiPassion from '../images/gear/Shs_SHI039.png';
import CrazyArrows from '../images/gear/Shs_SHT008.png';
import PowerStrip_AoAshi from '../images/gear/Shs_SHI035.png';
import PowerStrip_AkaAshi from '../images/gear/Shs_SHI034.png';
import WhiteArrows from '../images/gear/Shs_SHT003.png';
// import AkatsukiArrows from '../images/gear/Shs_HAP003.png';
// import PowerStrip_Trooper from '../images/gear/Shs_HAP006.png';
import YudeSupaika from '../images/gear/Shs_SLO010.png';
import ReaSupaika from '../images/gear/Shs_SLO011.png';
// ロッケンベルグ
import IkaSumiTip from '../images/gear/Shs_LTS003.png';
// import IkaYakiTip from '../images/gear/Shs_LTS004.png';
import RubberSole_White from '../images/gear/Shs_LTS000.png';
import GrayTip_YellowSole from '../images/gear/Shs_LTS008.png';
import ShinryokuLeatherBoots from '../images/gear/Shs_BOT017.png';
import NubuckBoots_Yellow from '../images/gear/Shs_BOT001.png';
import NavyTip_RedSole from '../images/gear/Shs_LTS007.png';
import MotoCrossBoots from '../images/gear/Shs_BOT000.png';
import RubberSole_Turquoise from '../images/gear/Shs_LTS002.png';
import RubberSole_Cherry from '../images/gear/Shs_LTS001.png';
import RockinYellow from '../images/gear/Shs_BOT008.png';
import RockinWhite from '../images/gear/Shs_BOT006.png';
import IkaBouzuCamel from '../images/gear/Shs_LTS005.png';
import IkaBouzuJetBlack from '../images/gear/Shs_LTS009.png';
import ShinkaiLeatherBoots from '../images/gear/Shs_BOT014.png';
import SmokeTip from '../images/gear/Shs_LTS006.png';
import Sennyu$Tip_SumiSole from '../images/gear/Shs_LTS012.png';
import NubuckBoots_Red from '../images/gear/Shs_BOT002.png';
import MotoCross_SolidBlue from '../images/gear/Shs_BOT003.png';
// import RockinCrown from '../images/gear/Shs_HAP002.png';
import RockinCherry from '../images/gear/Shs_BOT007.png';
import RockinBlack from '../images/gear/Shs_BOT013.png';
// Amiibo
// import IidachiSlippon from '../images/gear/Shs_AMB007.png';
// import EnchantBoots from '../images/gear/Shs_AMB008.png';
// import QuiltLoafer from '../images/gear/Shs_AMB003.png';
// import SamuraiShoes from '../images/gear/Shs_AMB001.png';
// import ShinobiAshi from '../images/gear/Shs_AMB004.png';
// import SchoolLoafer from '../images/gear/Shs_AMB000.png';
// import TakoticalNaSuneate from '../images/gear/Shs_AMB009.png';
// import PoweredLegs from '../images/gear/Shs_AMB002.png';
// import PoweredLegs_Origin from '../images/gear/Shs_AMB005.png';
// import HimeItoSneaker from '../images/gear/Shs_AMB006.png';
// import HireoKunNoAshi from '../images/gear/Shs_AMB010.png';
// import ArmorBoots_Replica from '../images/gear/Shs_MSN004.png';
// import GranpaNaKutsu from '../images/gear/Shs_MSN106.png';
// import TakozonesBootsNeo from '../images/gear/Shs_MSN104.png';
// import NellBoots_Replica from '../images/gear/Shs_MSN105.png';
// import HeroKicks_Replica from '../images/gear/Shs_MSN000.png';
// import HeroBinder_Replica from '../images/gear/Shs_MSN101.png';
import GesoBataAssist from '../images/gear/Shs_COP105.png';
import ChigiriNoHimo from '../images/gear/Shs_COP104.png';
import NonSlipTakumi from '../images/gear/Shs_COP102.png';
import BankaraKoron from '../images/gear/Shs_COP106.png';
import MudRubber from '../images/gear/Shs_COP101.png';

const gears = [
    {name:"シーホース ホワイト",path:SeaHorse_White,id:"Seahorse_White",brand:"アイロニック"},
    {name:"シーホースHi ゾンビ",path:SeaHorseHi_Zombie,id:"SeahorseHi_Zombie",brand:"アイロニック"},
    {name:"シーホースHi パープル",path:SeaHorseHi_Purple,id:"SeahorseHi_Purple",brand:"アイロニック"},
    {name:"シーホースHi レッド",path:SeaHorseHi_Red,id:"SeahorseHi_Red",brand:"アイロニック"},
    {name:"デカロニックミント",path:DekaronicMint,id:"DekaronicMint",brand:"アイロニック"},
    {name:"デカロノーレース ブルー",path:DekaroNoLace_Blue,id:"DekaroNoLace_Blue",brand:"アイロニック"},
    {name:"シーホース イエロー",path:SeaHorse_Yellow,id:"Seahorse_Yellow",brand:"アイロニック"},
    {name:"シーホース ブラックレザー",path:SeaHorse_BlackLeather,id:"Seahorse_BlackLeather",brand:"アイロニック"},
    // {name:"デカロニックチョコレート",path:DekaronicChocolate,id:"DekaronicChocolate",brand:"アイロニック"},
    {name:"デカロニックブラック",path:DekaronicBlack,id:"DekaronicBlack",brand:"アイロニック"},
    {name:"デカロノーレース ホワイト",path:DekaroNoLace_White,id:"DekaroNoLace_White",brand:"アイロニック"},
    {name:"シーホースHi ゴールド",path:SeaHorseHi_Gold,id:"SeaHorseHi_Gold",brand:"アイロニック"},
    {name:"アナアキスパイダー6ホール",path:AnaakiSpider6Hole,id:"AnaakiSpider6Hole",brand:"アナアキ"},
    {name:"アナアキラバー ハバネロ",path:AnaakiRubber_Habanero,id:"AnaakiRubber_Habanero",brand:"アナアキ"},
    {name:"アナアキラバー フェイク",path:AnaakiRubber_Fake,id:"AnaakiRubber_Fake",brand:"アナアキ"},
    {name:"アロメッシュイエロー",path:AromeshYellow,id:"AromeshYellow",brand:"アロメ"},
    {name:"イロマキ750 イエロー",path:Iromaki750_Yellow,id:"Iromaki750_Yellow",brand:"アロメ"},
    {name:"イロマキ750 オレンジ",path:Iromaki750_Orange,id:"Iromaki750_Orange",brand:"アロメ"},
    {name:"イロマキ750 グリーン",path:Iromaki750_Green,id:"Iromaki750_Green",brand:"アロメ"},
    {name:"イロマキ750 パープル",path:Iromaki750_Purple,id:"Iromaki750_Purple",brand:"アロメ"},
    // {name:"イロマキ750 ブルー",path:Iromaki750_Blue,id:"Iromaki750_Blue",brand:"アロメ"},
    {name:"イロマキ750 レッド",path:Iromaki750_Red,id:"Iromaki750_Red",brand:"アロメ"},
    {name:"ウミウシイエロー",path:UmiushiYellow,id:"UmiushiYellow",brand:"アロメ"},
    {name:"ウミウシブルー",path:UmiushiBlue,id:"UmiushiBlue",brand:"アロメ"},
    {name:"カナリアビーンズ",path:CanaryBeans,id:"CanaryBeans",brand:"アロメ"},
    {name:"シアンビーンズ",path:CyanBeans,id:"CyanBeans",brand:"アロメ"},
    {name:"スミレビーンズ",path:SumireBeans,id:"SumireBeans",brand:"アロメ"},
    {name:"ピンクビーンズ",path:PinkBeans,id:"PinkBeans",brand:"アロメ"},
    {name:"ブラックビーンズ",path:BlackBeans,id:"BlackBeans",brand:"アロメ"},
    {name:"アロメッシュバーミリオン",path:AromeshVermillion,id:"AromeshVermillion",brand:"アロメ"},
    {name:"ウミウシパープル",path:UmiushiPuerple,id:"UmiushiPurple",brand:"アロメ"},
    // {name:"ウミウシボルト95",path:UmiushiVolt95,id:"UmiushiVolt95",brand:"アロメ"},
    // {name:"ゴマシオ270",path:GomaShio270,id:"GomaShio270",brand:"アロメ"},
    // {name:"ノリマキ750 ホワイト",path:Norimaki750_White,id:"Norimaki750_White",brand:"アロメ"},
    {name:"アイスダウンブーツ",path:IceDownBoots,id:"IceDownBoots",brand:"アロメ"},
    {name:"ウミウシタウンHi アンバー",path:UmiushiTownHi_Amber,id:"UmiushiTownHi_Amber",brand:"アロメ"},
    {name:"ウミウシタウンHi グレー",path:UmiushiTownHi_Gray,id:"UmiushiTownHi_Gray",brand:"アロメ"},
    {name:"ウミウシレッド",path:UmiushiRed,id:"UmiushiRed",brand:"アロメ"},
    {name:"ノリマキ750 ブラック",path:Norimaki750_Black,id:"Norimaki750_Black",brand:"アロメ"},
    {name:"ミルキーダウンブーツ",path:MilkyDownBoots,id:"MilkyDownBoots",brand:"アロメ"},
    {name:"BBサンダル",path:BBSandal,id:"BBSandal",brand:"エゾッコ"},
    {name:"グリッチョ オレンジ",path:Gurittyo_Orange,id:"Gurittyo_Orange",brand:"エゾッコ"},
    {name:"グリッチョ ブルー",path:Gurittyo_Blue,id:"Gurittyo_Blue",brand:"エゾッコ"},
    {name:"ノーリーチャッカ グレー",path:No$ri$Tyakka_Gray,id:"No-ri-Tyakka_Gray",brand:"エゾッコ"},
    {name:"ノーリーチャッカ ロビンズ",path:No$ri$Tyakka_Robins,id:"No-ri-Tyakka_Robins",brand:"エゾッコ"},
    {name:"ノーリーチャッカ トライブ",path:No$ri$Tyakka_Tribe,id:"No-ri-Tyakka_Tribe",brand:"エゾッコ"},
    {name:"グリッチョ グリーン 限定版",path:Gurittyo_Green_GENTEIBAN,id:"Gurittyo_Green_GENTEIBAN",brand:"エゾッコ"},
    // {name:"ノーリーチャッカ イイダチ",path:No$ri$Tyakka_Iidachi,id:"No-ri-Tyakka_Iidachi",brand:"エゾッコ"},
    // {name:"ノーリーチャッカ ヒメイト",path:No$ri$Tyakka_Himeito,id:"No-ri-Tyakka_Himeito",brand:"エゾッコ"},
    {name:"エギング5 ハニオレ",path:Eging5_HaniOre,id:"Eging5_HaniOre",brand:"エンペリー"},
    {name:"エンペーサーAg",path:EnPacerAg,id:"EnPacerAg",brand:"エンペリー"},
    {name:"エンペーサーCaO",path:EnPacerCao,id:"EnPacerCao",brand:"エンペリー"},
    {name:"エギング4 アオクロ",path:Eging4_AoKuro,id:"Eging4_AoKuro",brand:"エンペリー"},
    {name:"エギング4 アカクロ",path:Eging4_AkaKuro,id:"Eging4_AkaKuro",brand:"エンペリー"},
    // {name:"エギング4 イイマリ",path:Eging4_Iimari,id:"Eging4_Iimari",brand:"エンペリー"},
    {name:"エギング4 キイコン",path:Eging4_KiiKon,id:"Eging4_KiiKon",brand:"エンペリー"},
    // {name:"エギング4 ヒメキン",path:Eging4_HimeKin,id:"Eging4_HimeKin",brand:"エンペリー"},
    {name:"エギング5 クロアオ",path:Eging5_KuroAo,id:"Eging5_KuroAo",brand:"エンペリー"},
    {name:"エギング5 シロアカ",path:Eging5_ShiroAka,id:"Eging5_ShiroAka",brand:"エンペリー"},
    {name:"エギング5 プレミアム",path:Eging5_Premium,id:"Eging5_Premium",brand:"エンペリー"},
    {name:"エンペーサーAu",path:EnPacerAu,id:"EnPacerAu",brand:"エンペリー"},
    {name:"エンペリアルNV",path:EnperrialNV,id:"EnperrialNV",brand:"エンペリー"},
    // {name:"エンペリアルカイザー",path:EnperrialKaiser,id:"EnperrialKaiser",brand:"エンペリー"},
    {name:"オイスタークロッグ",path:OysterClog,id:"OysterClog",brand:"クラーゲス"},
    {name:"キャンバス クマノミ",path:Canvas_Kumanomi,id:"Canvas_Kumanomi",brand:"クラーゲス"},
    {name:"キャンバス バナナ",path:Canvas_Banana,id:"Canvas_Banana",brand:"クラーゲス"},
    {name:"キャンバス ホワイト",path:Canvas_White,id:"Canvas_White",brand:"クラーゲス"},
    {name:"キャンバスHi トリュフ",path:CanvasHi_Truffle,id:"CanvasHi_Truffle",brand:"クラーゲス"},
    {name:"キャンバスHi マッシュルーム",path:CanvasHi_Mushroom,id:"CanvasHi_Mushroom",brand:"クラーゲス"},
    {name:"キャンバスHi モロヘイヤ",path:CanvasHi_Mulukhiya,id:"CanvasHi_Mulukhiya",brand:"クラーゲス"},
    {name:"スリッポン ブルー",path:Slippon_Blue,id:"Slippon_Blue",brand:"クラーゲス"},
    {name:"スリッポン レッド",path:Slippon_Red,id:"Slippon_Red",brand:"クラーゲス"},
    // {name:"ブルーベリーコンフォート",path:BlueberryComfort,id:"BlueberryComfort",brand:"クラーゲス"},
    // {name:"アケビコンフォート",path:AkebiComfort,id:"AkebiComfort",brand:"クラーゲス"},
    {name:"キャンバスHi トマト",path:CanvasHi_Tomato,id:"CanvasHi_Tomato",brand:"クラーゲス"},
    {name:"スリッポン チドリ",path:Slippon_Chidori,id:"Slippon_Chidori",brand:"クラーゲス"},
    {name:"スリッポン ポルカ",path:Slippon_Polka,id:"Slippon_Polka",brand:"クラーゲス"},
    {name:"チョコクロッグ",path:ChocoClog,id:"ChocoClog",brand:"クラーゲス"},
    // {name:"ミッドナイトスリッポン",path:MidnightSlippon,id:"MidnightSlippon",brand:"クラーゲス"},
    {name:"フジツボペタサン",path:FujitsuboPetaSan,id:"FujitsuboPetaSan",brand:"シグレ二"},
    {name:"ボルダーシューズ ハザクラ",path:BoulderShoes_Hazakura,id:"BoulderShoes_Hazakura",brand:"シグレ二"},
    {name:"レイニーアセロラ",path:RainyAcerola,id:"RainyAcerola",brand:"シグレ二"},
    {name:"レイニーシャボン",path:RainyShabon,id:"RainyShabon",brand:"シグレ二"},
    {name:"デルタストラップ ネオン",path:DeltaStrap_Neon,id:"DeltaStrap_Neon",brand:"シグレ二"},
    {name:"デルタストラップ ルミナス",path:DeltaStrap_Luminous,id:"DeltaStrap_Luminous",brand:"シグレ二"},
    {name:"トレッキングカスタム",path:TrekkingCustom,id:"TrekkingCustom",brand:"シグレ二"},
    {name:"ボルダーシューズ タイノエ",path:BoulderShoes_Tainoe,id:"BoulderShoes_Tainoe",brand:"シグレ二"},
    {name:"レイニーモスグリーン",path:RainyMossGreen,id:"RainyMossGreen",brand:"シグレ二"},
    {name:"デルタストラップ スノー",path:DeltaStrap_Snow,id:"DeltaStrap_Snow",brand:"シグレ二"},
    {name:"トレッキングプロ",path:TrekkingPro,id:"TrekkingPro",brand:"シグレ二"},
    {name:"トレッキングライト",path:TrekkingLight,id:"TrekkingLight",brand:"シグレ二"},
    {name:"シャークモカシン",path:SharkMoccasin,id:"SharkMoccasin",brand:"ジモン"},
    {name:"ヒモヒモグリーン",path:HimoHimoGreen,id:"HimoHimoGreen",brand:"ジモン"},
    {name:"ベリベリレッド",path:BeriBeriRed,id:"BeriBeriRed",brand:"ジモン"},
    {name:"ジョーズモカシン",path:JawsMoccasin,id:"JawsMoccasin",brand:"ジモン"},
    {name:"チャバハンティングブーツ",path:TyabaHuntingBoots,id:"TyabaHuntingBoots",brand:"ジモン"},
    {name:"ハンティングブーツ",path:HuntingBoots,id:"HuntingBoots",brand:"ジモン"},
    {name:"ピラニアモカシン",path:PiranhaMoccasin,id:"PiranhaMoccasin",brand:"ジモン"},
    {name:"ベリベリホワイト",path:BeriBeriWhite,id:"BeriBeriWhite",brand:"ジモン"},
    {name:"アローズ タタキベッチュー",path:Arrows_TatakiBettyu$,id:"Arrows_TatakiBettyu-",brand:"タタキケンサキ"},
    {name:"ストリップ タタキベッチュー",path:Strip_TatakiBettyu$,id:"Strip_TatakiBettyu-",brand:"タタキケンサキ"},
    {name:"スパイカ タタキベッチュー",path:Supaika_TatakiBettyu$,id:"Supaika_TatakiBettyu-",brand:"タタキケンサキ"},
    // {name:"メカレッグ・IBS",path:MechaLeg$IBS,id:"MechaLeg・IBS",brand:"バトロイカ"},
    // {name:"モイストコンブーツ",path:MoistKonBoots,id:"MoistKonBoots",brand:"フォーリマ"},
    {name:"ヤキフグシャワサン アカ",path:YakifuguSyawaSan_Aka,id:"YakifuguSyawaSan_Aka",brand:"ホッコリー"},
    {name:"ヤキフグシャワサン キ",path:YakifuguSyawaSan_Ki,id:"YakifuguSyawaSan_Ki",brand:"ホッコリー"},
    {name:"アスレチックアローズ",path:AthleticArrows,id:"AthleticArrows",brand:"ヤコ"},
    {name:"オレンジアローズ",path:OrangeArrows,id:"OrangeArrows",brand:"ヤコ"},
    {name:"オルカHi",path:OrcaHi,id:"ORCAHI",brand:"ヤコ"},
    {name:"オルカHiウーブン",path:OrcaHiWoven,id:"OrcaHiWoven",brand:"ヤコ"},
    {name:"オルカHiサンセット",path:OrcaHiSunSet,id:"OrcaHiSunset",brand:"ヤコ"},
    {name:"オルカHiパッション",path:OrcaHiPassion,id:"OrcaHiPassion",brand:"ヤコ"},
    {name:"クレイジーアローズ",path:CrazyArrows,id:"CrazyArrows",brand:"ヤコ"},
    {name:"パワーストリップ アオアシ",path:PowerStrip_AoAshi,id:"PowerStrip_AoAshi",brand:"ヤコ"},
    {name:"パワーストリップ アカアシ",path:PowerStrip_AkaAshi,id:"PowerStrip_AkaAshi",brand:"ヤコ"},
    {name:"ホワイトアローズ",path:WhiteArrows,id:"WhiteArrows",brand:"ヤコ"},
    // {name:"アカツキアローズ",path:AkatsukiArrows,id:"AkatsukiArrows",brand:"ヤコ"},
    // {name:"パワーストリップ トルーパー",path:PowerStrip_Trooper,id:"PowerStrip_Trooper",brand:"ヤコ"},
    {name:"ユデスパイカ",path:YudeSupaika,id:"YudeSupaika",brand:"ヤコ"},
    {name:"レアスパイカ",path:ReaSupaika,id:"ReaSupaika",brand:"ヤコ"},
    {name:"イカスミチップ",path:IkaSumiTip,id:"IkaSumiTip",brand:"ロッケンベルグ"},
    // {name:"イカヤキチップ",path:IkaYakiTip,id:"IkaYakiTip",brand:"ロッケンベルグ"},
    {name:"ラバーソール ホワイト",path:RubberSole_White,id:"RubberSole_White",brand:"ロッケンベルグ"},
    {name:"グレーチップ イエローソール",path:GrayTip_YellowSole,id:"GrayTip_YellowSole",brand:"ロッケンベルグ"},
    {name:"シンリョクレザーブーツ",path:ShinryokuLeatherBoots,id:"ShinryokuLeatherBoots",brand:"ロッケンベルグ"},
    {name:"ヌバックブーツ イエロー",path:NubuckBoots_Yellow,id:"NubuckBoots_Yellow",brand:"ロッケンベルグ"},
    {name:"ネイビーチップ レッドソール",path:NavyTip_RedSole,id:"NavyTip_RedSole",brand:"ロッケンベルグ"},
    {name:"モトクロスブーツ",path:MotoCrossBoots,id:"MotoCrossBoots",brand:"ロッケンベルグ"},
    {name:"ラバーソール ターコイズ",path:RubberSole_Turquoise,id:"RubberSole_Turquoise",brand:"ロッケンベルグ"},
    {name:"ラバーソール チェリー",path:RubberSole_Cherry,id:"RubberSole_Cherry",brand:"ロッケンベルグ"},
    {name:"ロッキンイエロー",path:RockinYellow,id:"RockinYellow",brand:"ロッケンベルグ"},
    {name:"ロッキンホワイト",path:RockinWhite,id:"RockinWhite",brand:"ロッケンベルグ"},
    {name:"イカボウズキャメル",path:IkaBouzuCamel,id:"IkaBouzuCamel",brand:"ロッケンベルグ"},
    {name:"イカボウズジェットブラック",path:IkaBouzuJetBlack,id:"IkaBouzuJetBlack",brand:"ロッケンベルグ"},
    {name:"シンカイレザーブーツ",path:ShinkaiLeatherBoots,id:"ShinkaiLeatherBoots",brand:"ロッケンベルグ"},
    {name:"スモークチップ",path:SmokeTip,id:"SmokeTip",brand:"ロッケンベルグ"},
    {name:"センニューチップ スミソール",path:Sennyu$Tip_SumiSole,id:"Sennyu-Tip_SumiSole",brand:"ロッケンベルグ"},
    {name:"ヌバックブーツ レッド",path:NubuckBoots_Red,id:"NubuckBoots_Red",brand:"ロッケンベルグ"},
    {name:"モトクロス ソリッドブルー",path:MotoCross_SolidBlue,id:"MotoCross_SolidBlue",brand:"ロッケンベルグ"},
    // {name:"ロッキンクラウン",path:RockinCrown,id:"RockinCrown",brand:"ロッケンベルグ"},
    {name:"ロッキンチェリー",path:RockinCherry,id:"RockinCherry",brand:"ロッケンベルグ"},
    {name:"ロッキンブラック",path:RockinBlack,id:"RockinBlack",brand:"ロッケンベルグ"},
    // {name:"イイダチスリッポン",path:IidachiSlippon,id:"IidachiSlippon",brand:"amiibo"},
    // {name:"エンチャントブーツ",path:EnchantBoots,id:"EnchantBoots",brand:"amiibo"},
    // {name:"キルトローファー",path:QuiltLoafer,id:"QuiltLoafer",brand:"amiibo"},
    // {name:"サムライシューズ",path:SamuraiShoes,id:"SamuraiShoes",brand:"amiibo"},
    // {name:"シノビアシ",path:ShinobiAshi,id:"ShinobiAshi",brand:"amiibo"},
    // {name:"スクールローファー",path:SchoolLoafer,id:"SchoolLoafer",brand:"amiibo"},
    // {name:"タコティカルなすねあて",path:TakoticalNaSuneate,id:"TakoticalNaSuneate",brand:"amiibo"},
    // {name:"パワードレッグス",path:PoweredLegs,id:"PoweredLegs",brand:"amiibo"},
    // {name:"パワードレッグス オリジン",path:PoweredLegs_Origin,id:"PoweredLegs_Origin",brand:"amiibo"},
    // {name:"ヒメイトスニーカー",path:HimeItoSneaker,id:"HimeItoSneaker",brand:"amiibo"},
    // {name:"ひれおくんのあし",path:HireoKunNoAshi,id:"HireoKunNoAshi",brand:"amiibo"},
    // {name:"アーマーブーツ レプリカ",path:ArmorBoots_Replica,id:"ArmorBoots_Replica",brand:"アタリメイド"},
    // {name:"グランパなクツ",path:GranpaNaKutsu,id:"GranpaNaKutsu",brand:"アタリメイド"},
    // {name:"タコゾネスブーツネオ",path:TakozonesBootsNeo,id:"TakozonesBootsNeo",brand:"アタリメイド"},
    // {name:"ネルブーツ レプリカ",path:NellBoots_Replica,id:"NellBoots_Replica",brand:"アタリメイド"},
    // {name:"ヒーローキックス レプリカ",path:HeroKicks_Replica,id:"HeroKicks_Replica",brand:"アタリメイド"},
    // {name:"ヒーローバインダー レプリカ",path:HeroBinder_Replica,id:"HeroBinder_Replica",brand:"アタリメイド"},
    {name:"ゲソバタアシスト",path:GesoBataAssist,id:"GesoBataAssist",brand:"クマサン商会"},
    {name:"チギリノヒモ",path:ChigiriNoHimo,id:"ChigiriNoHimo",brand:"クマサン商会"},
    {name:"ノンスリップタクミ",path:NonSlipTakumi,id:"NonSlipTakumi",brand:"クマサン商会"},
    {name:"バンカラコロン",path:BankaraKoron,id:"BankaraKoron",brand:"クマサン商会"},
    {name:"マッドラバー",path:MudRubber,id:"MudRubber",brand:"クマサン商会"}
  ];

// 名前順に整列した配列を新たに定義
  const gearsSortedByName = gears.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);

const ShoesGearModal = (props) => {
  //  並び順の管理
  const [howToSort, setSort] = useState("byBrand");
  // 表示する配列の管理
  const [gearsArray, setArray] = useState(gears);
  
  const selectBoxRef = useRef();

  const selectBox = function() {
    let target = selectBoxRef.current;
    if (target.value === "brand" && howToSort === "byName") {
      setSort("byBrand");
      setArray(gears);
    } else if (target.value === "name" && howToSort === "byBrand") {
      setSort("byName");
      setArray(gearsSortedByName);
    }
  };

  // 再レンダーのときにツールチップが残ってしまった場合それを非表示
  // useEffect(() => {
  //   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[role="tooltip"]'));
  //   if (tooltipTriggerList.length) {
  //     for (let i = 0; i < tooltipTriggerList.length; i++) {
  //       tooltipTriggerList[i].style.display = "none"
  //     }
  //   }
  // });

  return (
    <div className="modal fade" id="shoesGearModal" tabIndex="-1" aria-labelledby="shoesGearModalLabel" aria-hidden="true">  
      <div className="modal-dialog modal-lg">
      <div className="modal-content font-type2 bg-secondary text-white">
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
                onClick={()=>{
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
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[1]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[2]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[3]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[4]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[5]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[6]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[7]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[8]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[9]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[10]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[11]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[12]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[13]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[14]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[15]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[16]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[17]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[18]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[19]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[20]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[21]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[22]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[23]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[24]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[25]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[26]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[27]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[28]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[29]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[30]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[31]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[32]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[33]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[34]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[35]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[36]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[37]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[38]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[39]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[40]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[41]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[42]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[43]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[44]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[45]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[46]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[47]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[48]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[49]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[50]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[51]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[52]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[53]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[54]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[55]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[56]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[57]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[58]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[59]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[60]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[61]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[62]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[63]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[64]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[65]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[66]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[67]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[68]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[69]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[70]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[71]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[72]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[73]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[74]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[75]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[76]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[77]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[78]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[79]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[80]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[81]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[82]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[83]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[84]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[85]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[86]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[87]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[88]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[89]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[90]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[91]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[92]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[93]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[94]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[95]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[96]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[97]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[98]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[99]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[100]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[101]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[102]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[103]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[104]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[105]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[106]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[107]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[108]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[109]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[110]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[111]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[112]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[113]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[114]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[115]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[116]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[117]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[118]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[119]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[120]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[121]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[122]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[123]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[124]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[125]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[126]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
            />
            <GearIcon
              gear={gearsArray[127]}
              passChosenGear={props.passChosenGear}
              passImagePath={props.passImagePath}
              part="shoes"
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

export default ShoesGearModal;