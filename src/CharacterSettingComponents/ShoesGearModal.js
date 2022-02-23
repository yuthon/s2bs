import { useState } from 'react';
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
import Iromaki750_Blue from '../images/gear/Shs_SHI032.png';
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
import Norimaki750_White from '../images/gear/Shs_SHI014.png';
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
import Eging4_AoKuro from '../images/gear/Shs_SHT018.png';
import Eging4_AkaKuro from '../images/gear/Shs_SHI017.png';
// import Eging4_Iimari from '../images/gear/Shs_HAP005.png';
import Eging4_KiiKon from '../images/gear/Shs_SHI027.png';
// import Eging4_HimeKin from '../images/gear/Shs_HAP001.png';
import Eging5_KuroAo from '../images/gear/Shs_SHI038.png';
import Eging5_ShiroAka from '../images/gear/Shs_SHI025.png';
import Eging5_Premium from '../images/gear/Shs_SHI041.png';
import EnPacerAu from '../images/gear/Shs_SHT017.png';
import EnperrialNV from '../images/gear/Shs_SHI022.png';
import EnperrialKaiser from '../images/gear/Shs_SHI021.png';
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
import MidnightSlippon from '../images/gear/Shs_HAP007.png';
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
import WhiteArrows from '../images/gear/Shs_SHI003.png';
// import AkatsukiArrows from '../images/gear/Shs_HAP003.png';
// import PowerStrip_Trooper from '../images/gear/Shs_HAP006.png';
import YudeSupaika from '../images/gear/Shs_SLO010.png';
import ReaSupaika from '../images/gear/Shs_SLO011.png';
// ロッケンベルグ
import IkaSumiTip from '../images/gear/Shs_LTS003.png';
import IkaYakiTip from '../images/gear/Shs_LTS004.png';
import RubberSole_White from '../images/gear/Shs_LTS003.png';
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
    {name:"シーホース ホワイト",path:SeaHorse_White,id:"SeaHorse_White"},
    {name:"シーホースHi ゾンビ",path:SeaHorseHi_Zombie,id:"SeaHorseHi_Zombie"},
    {name:"シーホースHi パープル",path:SeaHorseHi_Purple,id:"SeaHorseHi_Purple"},
    {name:"シーホースHi レッド",path:SeaHorseHi_Red,id:"SeaHorseHi_Red"},
    {name:"デカロニックミント",path:DekaronicMint,id:"DekaronicMint"},
    {name:"デカロノーレース ブルー",path:DekaroNoLace_Blue,id:"DekaroNoLace_Blue"},
    {name:"シーホース イエロー",path:SeaHorse_Yellow,id:"SeaHorse_Yellow"},
    {name:"シーホース ブラックレザー",path:SeaHorse_BlackLeather,id:"SeaHorse_BlackLeather"},
    // {name:"デカロニックチョコレート",path:DekaronicChocolate,id:"DekaronicChocolate"},
    {name:"デカロニックブラック",path:DekaronicBlack,id:"DekaronicBlack"},
    {name:"デカロノーレース ホワイト",path:DekaroNoLace_White,id:"DekaroNoLace_White"},
    {name:"シーホースHi ゴールド",path:SeaHorseHi_Gold,id:"SeaHorseHi_Gold"},
    {name:"アナアキスパイダー6ホール",path:AnaakiSpider6Hole,id:"AnaakiSpider6Hole"},
    {name:"アナアキラバー ハバネロ",path:AnaakiRubber_Habanero,id:"AnaakiRubber_Habanero"},
    {name:"アナアキラバー フェイク",path:AnaakiRubber_Fake,id:"AnaakiRubber_Fake"},
    {name:"アロメッシュイエロー",path:AromeshYellow,id:"AromeshYellow"},
    {name:"イロマキ750 イエロー",path:Iromaki750_Yellow,id:"Iromaki750_Yellow"},
    {name:"イロマキ750 オレンジ",path:Iromaki750_Orange,id:"Iromaki750_Orange"},
    {name:"イロマキ750 グリーン",path:Iromaki750_Green,id:"Iromaki750_Green"},
    {name:"イロマキ750 パープル",path:Iromaki750_Purple,id:"Iromaki750_Purple"},
    {name:"イロマキ750 ブルー",path:Iromaki750_Blue,id:"Iromaki750_Blue"},
    {name:"イロマキ750 レッド",path:Iromaki750_Red,id:"Iromaki750_Red"},
    {name:"ウミウシイエロー",path:UmiushiYellow,id:"UmiushiYellow"},
    {name:"ウミウシブルー",path:UmiushiBlue,id:"UmiushiBlue"},
    {name:"カナリアビーンズ",path:CanaryBeans,id:"CanaryBeans"},
    {name:"シアンビーンズ",path:CyanBeans,id:"CyanBeans"},
    {name:"スミレビーンズ",path:SumireBeans,id:"SumireBeans"},
    {name:"ピンクビーンズ",path:PinkBeans,id:"PinkBeans"},
    {name:"ブラックビーンズ",path:BlackBeans,id:"BlackBeans"},
    {name:"アロメッシュバーミリオン",path:AromeshVermillion,id:"AromeshVermillion"},
    {name:"ウミウシパープル",path:UmiushiPuerple,id:"UmiushiPuerple"},
    // {name:"ウミウシボルト95",path:UmiushiVolt95,id:"UmiushiVolt95"},
    // {name:"ゴマシオ270",path:GomaShio270,id:"GomaShio270"},
    {name:"ノリマキ750 ホワイト",path:Norimaki750_White,id:"Norimaki750_White"},
    {name:"アイスダウンブーツ",path:IceDownBoots,id:"IceDownBoots"},
    {name:"ウミウシタウンHi アンバー",path:UmiushiTownHi_Amber,id:"UmiushiTownHi_Amber"},
    {name:"ウミウシタウンHi グレー",path:UmiushiTownHi_Gray,id:"UmiushiTownHi_Gray"},
    {name:"ウミウシレッド",path:UmiushiRed,id:"UmiushiRed"},
    {name:"ノリマキ750 ブラック",path:Norimaki750_Black,id:"Norimaki750_Black"},
    {name:"ミルキーダウンブーツ",path:MilkyDownBoots,id:"MilkyDownBoots"},
    {name:"BBサンダル",path:BBSandal,id:"BBSandal"},
    {name:"グリッチョ オレンジ",path:Gurittyo_Orange,id:"Gurittyo_Orange"},
    {name:"グリッチョ ブルー",path:Gurittyo_Blue,id:"Gurittyo_Blue"},
    {name:"ノーリーチャッカ グレー",path:No$ri$Tyakka_Gray,id:"No-ri-Tyakka_Gray"},
    {name:"ノーリーチャッカ ロビンズ",path:No$ri$Tyakka_Robins,id:"No-ri-Tyakka_Robins"},
    {name:"ノーリーチャッカ トライブ",path:No$ri$Tyakka_Tribe,id:"No-ri-Tyakka_Tribe"},
    {name:"グリッチョ グリーン 限定版",path:Gurittyo_Green_GENTEIBAN,id:"Gurittyo_Green_GENTEIBAN"},
    // {name:"ノーリーチャッカ イイダチ",path:No$ri$Tyakka_Iidachi,id:"No-ri-Tyakka_Iidachi"},
    // {name:"ノーリーチャッカ ヒメイト",path:No$ri$Tyakka_Himeito,id:"No-ri-Tyakka_Himeito"},
    {name:"エギング5 ハニオレ",path:Eging5_HaniOre,id:"Eging5_HaniOre"},
    {name:"エンペーサーAg",path:EnPacerAg,id:"EnPacerAg"},
    {name:"エンペーサーCaO",path:EnPacerCao,id:"EnPacerCao"},
    {name:"エギング4 アオクロ",path:Eging4_AoKuro,id:"Eging4_AoKuro"},
    {name:"エギング4 アカクロ",path:Eging4_AkaKuro,id:"Eging4_AkaKuro"},
    // {name:"エギング4 イイマリ",path:Eging4_Iimari,id:"Eging4_Iimari"},
    {name:"エギング4 キイコン",path:Eging4_KiiKon,id:"Eging4_KiiKon"},
    // {name:"エギング4 ヒメキン",path:Eging4_HimeKin,id:"Eging4_HimeKin"},
    {name:"エギング5 クロアオ",path:Eging5_KuroAo,id:"Eging5_KuroAo"},
    {name:"エギング5 シロアカ",path:Eging5_ShiroAka,id:"Eging5_ShiroAka"},
    {name:"エギング5 プレミアム",path:Eging5_Premium,id:"Eging5_Premium"},
    {name:"エンペーサーAu",path:EnPacerAu,id:"EnPacerAu"},
    {name:"エンペリアルNV",path:EnperrialNV,id:"EnperrialNV"},
    {name:"エンペリアルカイザー",path:EnperrialKaiser,id:"EnperrialKaiser"},
    {name:"オイスタークロッグ",path:OysterClog,id:"OysterClog"},
    {name:"キャンバス クマノミ",path:Canvas_Kumanomi,id:"Canvas_Kumanomi"},
    {name:"キャンバス バナナ",path:Canvas_Banana,id:"Canvas_Banana"},
    {name:"キャンバス ホワイト",path:Canvas_White,id:"Canvas_White"},
    {name:"キャンバスHi トリュフ",path:CanvasHi_Truffle,id:"CanvasHi_Truffle"},
    {name:"キャンバスHi マッシュルーム",path:CanvasHi_Mushroom,id:"CanvasHi_Mushroom"},
    {name:"キャンバスHi モロヘイヤ",path:CanvasHi_Mulukhiya,id:"CanvasHi_Mulukhiya"},
    {name:"スリッポン ブルー",path:Slippon_Blue,id:"Slippon_Blue"},
    {name:"スリッポン レッド",path:Slippon_Red,id:"Slippon_Red"},
    // {name:"ブルーベリーコンフォート",path:BlueberryComfort,id:"BlueberryComfort"},
    // {name:"アケビコンフォート",path:AkebiComfort,id:"AkebiComfort"},
    {name:"キャンバスHi トマト",path:CanvasHi_Tomato,id:"CanvasHi_Tomato"},
    {name:"スリッポン チドリ",path:Slippon_Chidori,id:"Slippon_Chidori"},
    {name:"スリッポン ポルカ",path:Slippon_Polka,id:"Slippon_Polka"},
    {name:"チョコクロッグ",path:ChocoClog,id:"ChocoClog"},
    {name:"ミッドナイトスリッポン",path:MidnightSlippon,id:"MidnightSlippon"},
    {name:"フジツボペタサン",path:FujitsuboPetaSan,id:"FujitsuboPetaSan"},
    {name:"ボルダーシューズ ハザクラ",path:BoulderShoes_Hazakura,id:"BoulderShoes_Hazakura"},
    {name:"レイニーアセロラ",path:RainyAcerola,id:"RainyAcerola"},
    {name:"レイニーシャボン",path:RainyShabon,id:"RainyShabon"},
    {name:"デルタストラップ ネオン",path:DeltaStrap_Neon,id:"DeltaStrap_Neon"},
    {name:"デルタストラップ ルミナス",path:DeltaStrap_Luminous,id:"DeltaStrap_Luminous"},
    {name:"トレッキングカスタム",path:TrekkingCustom,id:"TrekkingCustom"},
    {name:"ボルダーシューズ タイノエ",path:BoulderShoes_Tainoe,id:"BoulderShoes_Tainoe"},
    {name:"レイニーモスグリーン",path:RainyMossGreen,id:"RainyMossGreen"},
    {name:"デルタストラップ スノー",path:DeltaStrap_Snow,id:"DeltaStrap_Snow"},
    {name:"トレッキングプロ",path:TrekkingPro,id:"TrekkingPro"},
    {name:"トレッキングライト",path:TrekkingLight,id:"TrekkingLight"},
    {name:"シャークモカシン",path:SharkMoccasin,id:"SharkMoccasin"},
    {name:"ヒモヒモグリーン",path:HimoHimoGreen,id:"HimoHimoGreen"},
    {name:"ベリベリレッド",path:BeriBeriRed,id:"BeriBeriRed"},
    {name:"ジョーズモカシン",path:JawsMoccasin,id:"JawsMoccasin"},
    {name:"チャバハンティングブーツ",path:TyabaHuntingBoots,id:"TyabaHuntingBoots"},
    {name:"ハンティングブーツ",path:HuntingBoots,id:"HuntingBoots"},
    {name:"ピラニアモカシン",path:PiranhaMoccasin,id:"PiranhaMoccasin"},
    {name:"ベリベリホワイト",path:BeriBeriWhite,id:"BeriBeriWhite"},
    {name:"アローズ タタキベッチュー",path:Arrows_TatakiBettyu$,id:"Arrows_TatakiBettyu-"},
    {name:"ストリップ タタキベッチュー",path:Strip_TatakiBettyu$,id:"Strip_TatakiBettyu-"},
    {name:"スパイカ タタキベッチュー",path:Supaika_TatakiBettyu$,id:"Supaika_TatakiBettyu-"},
    // {name:"メカレッグ・IBS",path:MechaLeg$IBS,id:"MechaLeg・IBS"},
    // {name:"モイストコンブーツ",path:MoistKonBoots,id:"MoistKonBoots"},
    {name:"ヤキフグシャワサン アカ",path:YakifuguSyawaSan_Aka,id:"YakifuguSyawaSan_Aka"},
    {name:"ヤキフグシャワサン キ",path:YakifuguSyawaSan_Ki,id:"YakifuguSyawaSan_Ki"},
    {name:"アスレチックアローズ",path:AthleticArrows,id:"AthleticArrows"},
    {name:"オレンジアローズ",path:OrangeArrows,id:"OrangeArrows"},
    {name:"オルカHi",path:OrcaHi,id:"OrcaHi"},
    {name:"オルカHiウーブン",path:OrcaHiWoven,id:"OrcaHiWoven"},
    {name:"オルカHiサンセット",path:OrcaHiSunSet,id:"OrcaHiSunSet"},
    {name:"オルカHiパッション",path:OrcaHiPassion,id:"OrcaHiPassion"},
    {name:"クレイジーアローズ",path:CrazyArrows,id:"CrazyArrows"},
    {name:"パワーストリップ アオアシ",path:PowerStrip_AoAshi,id:"PowerStrip_AoAshi"},
    {name:"パワーストリップ アカアシ",path:PowerStrip_AkaAshi,id:"PowerStrip_AkaAshi"},
    {name:"ホワイトアローズ",path:WhiteArrows,id:"WhiteArrows"},
    // {name:"アカツキアローズ",path:AkatsukiArrows,id:"AkatsukiArrows"},
    // {name:"パワーストリップ トルーパー",path:PowerStrip_Trooper,id:"PowerStrip_Trooper"},
    {name:"ユデスパイカ",path:YudeSupaika,id:"YudeSupaika"},
    {name:"レアスパイカ",path:ReaSupaika,id:"ReaSupaika"},
    {name:"イカスミチップ",path:IkaSumiTip,id:"IkaSumiTip"},
    {name:"イカヤキチップ",path:IkaYakiTip,id:"IkaYakiTip"},
    {name:"ラバーソール ホワイト",path:RubberSole_White,id:"RubberSole_White"},
    {name:"グレーチップ イエローソール",path:GrayTip_YellowSole,id:"GrayTip_YellowSole"},
    {name:"シンリョクレザーブーツ",path:ShinryokuLeatherBoots,id:"ShinryokuLeatherBoots"},
    {name:"ヌバックブーツ イエロー",path:NubuckBoots_Yellow,id:"NubuckBoots_Yellow"},
    {name:"ネイビーチップ レッドソール",path:NavyTip_RedSole,id:"NavyTip_RedSole"},
    {name:"モトクロスブーツ",path:MotoCrossBoots,id:"MotoCrossBoots"},
    {name:"ラバーソール ターコイズ",path:RubberSole_Turquoise,id:"RubberSole_Turquoise"},
    {name:"ラバーソール チェリー",path:RubberSole_Cherry,id:"RubberSole_Cherry"},
    {name:"ロッキンイエロー",path:RockinYellow,id:"RockinYellow"},
    {name:"ロッキンホワイト",path:RockinWhite,id:"RockinWhite"},
    {name:"イカボウズキャメル",path:IkaBouzuCamel,id:"IkaBouzuCamel"},
    {name:"イカボウズジェットブラック",path:IkaBouzuJetBlack,id:"IkaBouzuJetBlack"},
    {name:"シンカイレザーブーツ",path:ShinkaiLeatherBoots,id:"ShinkaiLeatherBoots"},
    {name:"スモークチップ",path:SmokeTip,id:"SmokeTip"},
    {name:"センニューチップ スミソール",path:Sennyu$Tip_SumiSole,id:"Sennyu-Tip_SumiSole"},
    {name:"ヌバックブーツ レッド",path:NubuckBoots_Red,id:"NubuckBoots_Red"},
    {name:"モトクロス ソリッドブルー",path:MotoCross_SolidBlue,id:"MotoCross_SolidBlue"},
    // {name:"ロッキンクラウン",path:RockinCrown,id:"RockinCrown"},
    {name:"ロッキンチェリー",path:RockinCherry,id:"RockinCherry"},
    {name:"ロッキンブラック",path:RockinBlack,id:"RockinBlack"},
    // {name:"イイダチスリッポン",path:IidachiSlippon,id:"IidachiSlippon"},
    // {name:"エンチャントブーツ",path:EnchantBoots,id:"EnchantBoots"},
    // {name:"キルトローファー",path:QuiltLoafer,id:"QuiltLoafer"},
    // {name:"サムライシューズ",path:SamuraiShoes,id:"SamuraiShoes"},
    // {name:"シノビアシ",path:ShinobiAshi,id:"ShinobiAshi"},
    // {name:"スクールローファー",path:SchoolLoafer,id:"SchoolLoafer"},
    // {name:"タコティカルなすねあて",path:TakoticalNaSuneate,id:"TakoticalNaSuneate"},
    // {name:"パワードレッグス",path:PoweredLegs,id:"PoweredLegs"},
    // {name:"パワードレッグス オリジン",path:PoweredLegs_Origin,id:"PoweredLegs_Origin"},
    // {name:"ヒメイトスニーカー",path:HimeItoSneaker,id:"HimeItoSneaker"},
    // {name:"ひれおくんのあし",path:HireoKunNoAshi,id:"HireoKunNoAshi"},
    // {name:"アーマーブーツ レプリカ",path:ArmorBoots_Replica,id:"ArmorBoots_Replica"},
    // {name:"グランパなクツ",path:GranpaNaKutsu,id:"GranpaNaKutsu"},
    // {name:"タコゾネスブーツネオ",path:TakozonesBootsNeo,id:"TakozonesBootsNeo"},
    // {name:"ネルブーツ レプリカ",path:NellBoots_Replica,id:"NellBoots_Replica"},
    // {name:"ヒーローキックス レプリカ",path:HeroKicks_Replica,id:"HeroKicks_Replica"},
    // {name:"ヒーローバインダー レプリカ",path:HeroBinder_Replica,id:"HeroBinder_Replica"},
    {name:"ゲソバタアシスト",path:GesoBataAssist,id:"GesoBataAssist"},
    {name:"チギリノヒモ",path:ChigiriNoHimo,id:"ChigiriNoHimo"},
    {name:"ノンスリップタクミ",path:NonSlipTakumi,id:"NonSlipTakumi"},
    {name:"バンカラコロン",path:BankaraKoron,id:"BankaraKoron"},
    {name:"マッドラバー",path:MudRubber,id:"MudRubber"}
  ];

// 名前順に整列した配列を新たに定義
  const gearsSortedByName = gears.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);

const ShoesGearModal = (props) => {
  

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
    <div className="modal fade" id="shoesGearModal" tabindex="-1" aria-labelledby="shoesGearModalLabel" aria-hidden="true">  
      <div className="modal-dialog modal-lg">
        <div className="modal-content shoesGearModalBg">
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
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[122].id);
                  props.passImagePath(gearsArray[122].path);
                  }
                }
              >
                <img src= {gearsArray[122].path} alt={gearsArray[122].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[123].id);
                  props.passImagePath(gearsArray[123].path);
                  }
                }
              >
                <img src= {gearsArray[123].path} alt={gearsArray[123].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[124].id);
                  props.passImagePath(gearsArray[124].path);
                  }
                }
              >
                <img src= {gearsArray[124].path} alt={gearsArray[124].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[125].id);
                  props.passImagePath(gearsArray[125].path);
                  }
                }
              >
                <img src= {gearsArray[125].path} alt={gearsArray[125].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[126].id);
                  props.passImagePath(gearsArray[126].path);
                  }
                }
              >
                <img src= {gearsArray[126].path} alt={gearsArray[126].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[127].id);
                  props.passImagePath(gearsArray[127].path);
                  }
                }
              >
                <img src= {gearsArray[127].path} alt={gearsArray[127].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[128].id);
                  props.passImagePath(gearsArray[128].path);
                  }
                }
              >
                <img src= {gearsArray[128].path} alt={gearsArray[128].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[129].id);
                  props.passImagePath(gearsArray[129].path);
                  }
                }
              >
                <img src= {gearsArray[129].path} alt={gearsArray[129].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[130].id);
                  props.passImagePath(gearsArray[130].path);
                  }
                }
              >
                <img src= {gearsArray[130].path} alt={gearsArray[130].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[131].id);
                  props.passImagePath(gearsArray[131].path);
                  }
                }
              >
                <img src= {gearsArray[131].path} alt={gearsArray[131].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[132].id);
                  props.passImagePath(gearsArray[132].path);
                  }
                }
              >
                <img src= {gearsArray[132].path} alt={gearsArray[132].name}/>
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

export default ShoesGearModal;