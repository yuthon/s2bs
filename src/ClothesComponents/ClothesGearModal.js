import React, {useState} from 'react';
//ギアの画像をインポート
// アイロニック
import AironicLayered from '../images/gear/Clt_TLY004.png';
import AironicLong from '../images/gear/Clt_TEL011.png';
import U$ni$zuBBShirt from '../images/gear/Clt_SHT004.png';
import DekaroTKiwi from '../images/gear/Clt_TES057.png';
import DekaroTGolden from '../images/gear/Clt_TES058.png';
import DekaLogoT_Shiro from '../images/gear/Clt_TES031.png';
import DekaLogoT_Nokon from '../images/gear/Clt_TES040.png';
import TobiUo$zuHKYuni from '../images/gear/Clt_TEL014.png';
import BasukeJergey_Away from '../images/gear/Clt_TNK001.png';
import SchoolJergey from '../images/gear/Clt_JKT004.png';
import TekkaCycleShirt from '../images/gear/Clt_PLO005.png';
import BasukeJergey_Home from '../images/gear/Clt_TNK000.png';
import FCJergey from '../images/gear/Clt_JKT008.png';
// アナアキ
import AnaakiKnit_Aosode from '../images/gear/Clt_SWT010.png';
import AnaakiKnit_Akasode from '../images/gear/Clt_SWT012.png';
import AnaakiKnit_Kisode from '../images/gear/Clt_SWT011.png';
import AnaakiLonT_Drive from '../images/gear/Clt_TEL015.png';
import PeterPunkShirt from '../images/gear/Clt_SHT017.png';
import AnaakiT_PolpoPic from '../images/gear/Clt_TES047.png';
// import AnaakiOnBureneru from '../images/gear/Clt_SHT025.png';
import AnaakiLonT_Evolve from '../images/gear/Clt_TEL017.png';
import ParaShooter_Zakuro from '../images/gear/Clt_SHT020.png';
import ParaShooter_Prune from '../images/gear/Clt_SHT022.png';
import PeterPunkTie_Blood from '../images/gear/Clt_SHT023.png';
import RockenBreakJacket from '../images/gear/Clt_JKT041.png';
// アロメ
import IkanomeT_Black from '../images/gear/Clt_TES001.png';
import IkanomeT_LightBlue from '../images/gear/Clt_TES003.png';
import KakurePirate from '../images/gear/Clt_TLY007.png';
import AromeSloganT from '../images/gear/Clt_TES054.png';
import AromeTechT_Blue from '../images/gear/Clt_TLY011.png';
import AromeTechT_Red from '../images/gear/Clt_TLY010.png';
// import AromeRunVest_Silver from '../images/gear/Clt_VST009.png';
import ChariKingJergey from '../images/gear/Clt_PLO006.png';
// エゾッコ
import EzokkoRaglan from '../images/gear/Clt_TEL004.png';
import EzokkoLonTRadish from '../images/gear/Clt_TEL019.png';
// import PingPongPolo from '../images/gear/Clt_PLO004.png';
import ReelRollSweat from '../images/gear/Clt_SWT005.png';
import UraSukajan from '../images/gear/Clt_JKT015.png';
import EzokkoCoach_Akane from '../images/gear/Clt_JKT026.png';
import EzokkoCoach_Ukon from '../images/gear/Clt_JKT034.png';
import EzokkoCoach_Moegi from '../images/gear/Clt_JKT028.png';
import EzokkoParka_Azuki from '../images/gear/Clt_PRK002.png';
import EzokkoParka_Uguisu from '../images/gear/Clt_PRK009.png';
import EzokkoLonTCarrot from '../images/gear/Clt_TEL018.png';
import GinghamCheck_Aka from '../images/gear/Clt_SHT006.png';
import GinghamCheck_Midori from '../images/gear/Clt_SHT002.png';
import BunnyPop_Black from '../images/gear/Clt_TEL001.png';
import MixShirt_Gray from '../images/gear/Clt_SHT009.png';
import LogoMashiMashiAloha from '../images/gear/Clt_SHT012.png';
import IkaSukajan from '../images/gear/Clt_JKT014.png';
import UraTakoSukajan from '../images/gear/Clt_JKT025.png';
import SutaJanLogoMasi from '../images/gear/Clt_JKT003.png';
import ToriSukaBettin from '../images/gear/Clt_JKT024.png';
// エンペリー
import KingOctoTMidoriVelour from '../images/gear/Clt_TES060.png';
import KingTank_Slash from '../images/gear/Clt_TNK004.png';
import KingTank_White from '../images/gear/Clt_TNK003.png';
import KingTank_Marine from '../images/gear/Clt_TNK005.png';
import KingParka_Grape from '../images/gear/Clt_PRK005.png';
import KingHKShirt from '../images/gear/Clt_TES033.png';
import KingOctoHKShirt from '../images/gear/Clt_TES056.png';
import KingOctoTBlackVelour from '../images/gear/Clt_TES059.png';
import EnPacerTrainer from '../images/gear/Clt_SWT014.png';
import KingBenchNV from '../images/gear/Clt_JKT033.png';
// import KingBenchKaiser from '../images/gear/Clt_JKT032.png';
// クラーゲス
import IkaGottinVest from '../images/gear/Clt_VST004.png';
import IkaStanShirt from '../images/gear/Clt_SHT001.png';
import IkaNoboriVest from '../images/gear/Clt_VST005.png';
import Kura$gesu528 from '../images/gear/Clt_JKT016.png';
import SunnyOrangeT from '../images/gear/Clt_TES007.png';
import RainyBlueT from '../images/gear/Clt_TES008.png';
import TakoBowlerShirt from '../images/gear/Clt_SHT018.png';
import ChirimenTakoAloha from '../images/gear/Clt_SHT024.png';
import MizuShrugT from '../images/gear/Clt_TES051.png';
import MrShrugT from '../images/gear/Clt_TES041.png';
// シグレ二
import BorderMossGreen from '../images/gear/Clt_TEL009.png';
import YamabikoT_Ivory from '../images/gear/Clt_TES016.png';
import YamabikoT_Blue from '../images/gear/Clt_TES015.png';
import YamabikoBorder from '../images/gear/Clt_TEL012.png';
import FishersVest_Ozi from '../images/gear/Clt_VST007.png';
import MountainBerry from '../images/gear/Clt_JKT002.png';
import ForestDown from '../images/gear/Clt_VST001.png';
import MountainOlive from '../images/gear/Clt_JKT000.png';
import MountainDown from '../images/gear/Clt_VST000.png';
import MountainChiliPepper from '../images/gear/Clt_JKT039.png';
import MountainNoriTamago from '../images/gear/Clt_JKT027.png';
import MountainFrozen from '../images/gear/Clt_JKT017.png';
import Matcha_LightDown from '../images/gear/Clt_JKT019.png';
// ジモン
import CollegeSweat_Gray from '../images/gear/Clt_SWT000.png';
import CollegeSweat_Navy from '../images/gear/Clt_SWT004.png';
import CollegeRaglan from '../images/gear/Clt_TEL005.png';
import SakuraEbiPolo from '../images/gear/Clt_PLO000.png';
import ChambrayShirt from '../images/gear/Clt_SHT014.png';
import PirateBorder from '../images/gear/Clt_TES018.png';
import BabyKurageShirt from '../images/gear/Clt_SHT007.png';
import BorderNavy from '../images/gear/Clt_TEL003.png';
import MarineBorder from '../images/gear/Clt_TES019.png';
import YomogiPolo from '../images/gear/Clt_PLO003.png';
import Lettered_Orange from '../images/gear/Clt_JKT009.png';
import ShirtNozokiPink from '../images/gear/Clt_PRK008.png';
import ShirtNozokiBlue from '../images/gear/Clt_PRK004.png';
import TieTsukiBabyKurage from '../images/gear/Clt_SHT021.png';
import BlockStripeShirt from '../images/gear/Clt_SHT013.png';
import BorderWhite from '../images/gear/Clt_TEL000.png';
import YutoriBorder_Pink from '../images/gear/Clt_TEL013.png';
import YutoriBorder_Lime from '../images/gear/Clt_TEL016.png';
import Lettered_Green from '../images/gear/Clt_JKT005.png';
import ShiroShirt from '../images/gear/Clt_SHT003.png';
import TieShirt from '../images/gear/Clt_SHT015.png';
import HouseTagWhaleKnit from '../images/gear/Clt_JKT040.png';
// タタキケンサキ
import SweatT_Gobu from '../images/gear/Clt_TES032.png';
import SumiKakeShirt from '../images/gear/Clt_SHT019.png';
import SumiNukiShirt from '../images/gear/Clt_SHT026.png';
import FrontZipVest from '../images/gear/Clt_VST008.png';
import KungFuJergey from '../images/gear/Clt_JKT042.png';
import KungFuPanJergey from '../images/gear/Clt_JKT043.png';
import KensakiCoach from '../images/gear/Clt_JKT023.png';
import ShortKnitGasane from '../images/gear/Clt_SWT008.png';
import TatakiBBBshirt from '../images/gear/Clt_SHT028.png';
import DropSweat_Nega from '../images/gear/Clt_SWT007.png';
import DropSweat_Pozi from '../images/gear/Clt_SWT009.png';
import PullOverCoat from '../images/gear/Clt_JKT022.png';
import BomberJacket_Nega from '../images/gear/Clt_JKT036.png';
import BomberJacket_Pozi from '../images/gear/Clt_JKT029.png';
// バトロイカ
import IkaBatten_Mustard from '../images/gear/Clt_SWT001.png';
import IkaBattenLong from '../images/gear/Clt_TEL010.png';
import IkaBlack from '../images/gear/Clt_TES006.png';
import IkaWhite from '../images/gear/Clt_TES000.png';
import KamoGasane from '../images/gear/Clt_TLY002.png';
import BatoLong_White from '../images/gear/Clt_TEL008.png';
import FriendT from '../images/gear/Clt_TES053.png';
import MustardGasane from '../images/gear/Clt_TLY001.png';
import Layered_Black from '../images/gear/Clt_TLY003.png';
import Layered_White from '../images/gear/Clt_TLY000.png';
import WakabaIkaT from '../images/gear/Clt_FST001.png';
import IkaYellowVGasane from '../images/gear/Clt_TLY013.png';
import IkaGreenV_Collabo from '../images/gear/Clt_TES045.png';
import IkaBlackV from '../images/gear/Clt_TES044.png';
// import IkaWhiteV from '../images/gear/Clt_TES035.png';
import IkariSweat from '../images/gear/Clt_SWT006.png';
import IkaRedV_Collabo from '../images/gear/Clt_TES044.png';
import GatiGasane from '../images/gear/Clt_TLY005.png';
import GatiBlack from '../images/gear/Clt_TES023.png';
import GatiWhite from '../images/gear/Clt_TES022.png';
import LeagueT from '../images/gear/Clt_TES052.png';
import SWCLogoT from '../images/gear/Clt_TES061.png';
import OuenParka$TakoVer$$ from '../images/gear/Clt_PRK011.png';
import FesT_Replica from '../images/gear/Clt_HAP002.png';
// import MechaBody$AKM from '../images/gear/Clt_CRC000.png';
import RetroJudge from '../images/gear/Clt_SWT002.png';
// フォーリマ
import OdoruIkaAloha from '../images/gear/Clt_SHT005.png';
import GreenT from '../images/gear/Clt_TLY009.png';
import F$010 from '../images/gear/Clt_JKT011.png';
import F$190 from '../images/gear/Clt_JKT010.png';
import FA$11Ura_Custom from '../images/gear/Clt_JKT031.png';
import FA$11Omote_Custom from '../images/gear/Clt_JKT030.png';
import IkaSailor_White from '../images/gear/Clt_JKT013.png';
import F$3_PaintCustom from '../images/gear/Clt_JKT035.png';
import F$3_WhiteLeather from '../images/gear/Clt_JKT038.png';
import FA$01Ura from '../images/gear/Clt_JKT021.png';
import FA$01Omote from '../images/gear/Clt_JKT020.png';
import IkaSailor_Blue from '../images/gear/Clt_JKT012.png';
// import MoistGillieSuit from '../images/gear/Clt_JKT037.png';
// ホタックス
import IceGuradeT from '../images/gear/Clt_TES055.png';
import GrapeT from '../images/gear/Clt_TES012.png';
import ChidoriMelonT from '../images/gear/Clt_TES017.png';
import PearlDotT from '../images/gear/Clt_TES027.png';
import HotGuradeT from '../images/gear/Clt_TES048.png';
import MintT from '../images/gear/Clt_TES011.png';
import HotaParka_Gray from '../images/gear/Clt_PRK006.png';
import HotaParka_Black from '../images/gear/Clt_PRK010.png';
import HotaPlantParka from '../images/gear/Clt_PRK007.png';
import IkaJamaica from '../images/gear/Clt_TES009.png';
import LayerDotShirt from '../images/gear/Clt_SHT027.png';
// ホッコリー
import ω$3T from '../images/gear/Clt_TES046.png';
import SousyokuT from '../images/gear/Clt_TES029.png';
import NikusyokuT from '../images/gear/Clt_TES026.png';
import MarufuguT from '../images/gear/Clt_TES010.png';
import Yakifugu8bit_Gray from '../images/gear/Clt_TES034.png';
import Yakifugu8bit_Black from '../images/gear/Clt_TES021.png';
import Yakifugu8bit_White from '../images/gear/Clt_TES020.png';
import UrbanVest_Yellow from '../images/gear/Clt_VST003.png';
import ZipUp_Green from '../images/gear/Clt_PRK001.png';
import Hokkori$_Navy from '../images/gear/Clt_SWT003.png';
import Yakifugu16bit_Khaki from '../images/gear/Clt_TEL023.png';
import Yakifugu16bit_Blue from '../images/gear/Clt_TEL024.png';
import UrbanVest_Night from '../images/gear/Clt_VST002.png';
import ZipUp_Kamo from '../images/gear/Clt_PRK000.png';
import MrBaseBall from '../images/gear/Clt_SHT008.png';
// ヤコ
import AosaDo$re from '../images/gear/Clt_PLO008.png';
import CamouflaPurple from '../images/gear/Clt_TEL002.png';
import ChocoGasane from '../images/gear/Clt_TLY006.png';
import ToricorollRugger from '../images/gear/Clt_PLO002.png';
import VectorPattern_Gray from '../images/gear/Clt_TES014.png';
import VectorPattern_Red from '../images/gear/Clt_TES013.png';
import VectorLineGasane from '../images/gear/Clt_TLY008.png';
import YakoTieDye_Galaxy from '../images/gear/Clt_TES049.png';
import YakoTieDye_Rainbow from '../images/gear/Clt_TES050.png';
import FCKarasumi from '../images/gear/Clt_PLO007.png';
import OrangeBorderRugger from '../images/gear/Clt_PLO001.png';
import YakoRaglanCrazy from '../images/gear/Clt_TEL021.png';
import YakoNylon_Vintage from '../images/gear/Clt_JKT001.png';
import YakoNylonRetro from '../images/gear/Clt_JKT018.png';
import YakoPisute from '../images/gear/Clt_SWT015.png';
// ロッケンベルグ
import AutumnNeru from '../images/gear/Clt_SHT000.png';
import GangazeRockT_Kuro from '../images/gear/Clt_TES037.png';
import GangazeRockT_Shiro from '../images/gear/Clt_TES036.png';
import HaraGuroRaglan from '../images/gear/Clt_TEL006.png';
import HaraShiroRaglan from '../images/gear/Clt_TEL007.png';
import BandT_ABXY from '../images/gear/Clt_TES042.png';
import BandT_HIGHTIDEERA from '../images/gear/Clt_TES043.png';
import BandT_SQUIDSDUAD from '../images/gear/Clt_TES039.png';
import BandT_WETFLOOR from '../images/gear/Clt_TES038.png';
import RockenbergT_Black from '../images/gear/Clt_TES005.png';
import MaruEriShirt from '../images/gear/Clt_SHT011.png';
import RockenbergT_White from '../images/gear/Clt_TES004.png';
import IkaRiderBLACK from '../images/gear/Clt_JKT006.png';
import IkaRiderWHITE from '../images/gear/Clt_JKT007.png';
import VintageCheck from '../images/gear/Clt_SHT010.png';
// Amiibo
// import IidachiTops from '../images/gear/Clt_AMB007.png';
// import EnchantRobe from '../images/gear/Clt_AMB008.png';
// import SamuraiJacket from '../images/gear/Clt_AMB001.png';
// import SchoolKa$de from '../images/gear/Clt_AMB003.png';
// import SchoolBlazer from '../images/gear/Clt_AMB000.png';
// import TakoticalNaYoroi from '../images/gear/Clt_AMB009.png';
// import NinjaSuit from '../images/gear/Clt_AMB004.png';
// import PoweredSuit from '../images/gear/Clt_AMB002.png';
// import PoweredSuit_Origin from '../images/gear/Clt_AMB005.png';
// import HimeitoParka from '../images/gear/Clt_AMB006.png';
// import HireoKunNoTe from '../images/gear/Clt_AMB010.png';
// アタリメイド
import WakabaTakoT from '../images/gear/Clt_FST002.png';
// import ArmorJacket_Replica from '../images/gear/Clt_MSN004.png';
// import OctarianRetro from '../images/gear/Clt_SWT014.png';
// import GranPaNaFuku from '../images/gear/Clt_MSN106.png';
// import TakozonesProtector_Neo from '../images/gear/Clt_MSN104.png';
import TakoLonT_AKA from '../images/gear/Clt_TEL022.png';
import TakoLonT_KURO from '../images/gear/Clt_TEL020.png';
// import NellArmor_Replica from '../images/gear/Clt_MSN105.png';
// import HeroJacket_Replica from '../images/gear/Clt_MSN000.png';
// import HeroHoodie_Replica from '../images/gear/Clt_MSN101.png';
// import OctoGasane from '../images/gear/Clt_TLY012.png';
// import Sennyu$Suit from '../images/gear/Clt_JKT044.png';
import TakoT from '../images/gear/Clt_TES028.png';
// クマサン商会
import BBshirt_Premium from '../images/gear/Clt_SHT029.png';
import AkashicCoat from '../images/gear/Clt_COP110.png';
import AgeAge$10$Pura$XXL from '../images/gear/Clt_COP104.png';
import AnchorVest from '../images/gear/Clt_COP101.png';
import IkatenKunPolo from '../images/gear/Clt_COP100.png';
import ZimuPersonArmor from '../images/gear/Clt_COP109.png';
import DevelopersWorkWear from '../images/gear/Clt_COP108.png';
import FuelBlouson from '../images/gear/Clt_COP102.png';
import FromKitaguni87 from '../images/gear/Clt_COP105.png';
import MakureGT from '../images/gear/Clt_COP103.png';
import RecoYaLookEP from '../images/gear/Clt_COP107.png';

// ギアの配列 ブランド順
const gears = [
    {name:"アイロニックレイヤード",path:AironicLayered,id:"AironicLayered"},
    {name:"アイロニックロング",path:AironicLong,id:"AironicLong"},
    {name:"ウーニーズBBシャツ",path:U$ni$zuBBShirt,id:"U-ni-zuBBShirt"},
    {name:"デカロTキウイ",path:DekaroTKiwi,id:"DekaroTKiwi"},
    {name:"デカロTゴールデン",path:DekaroTGolden,id:"DekaroTGolden"},
    {name:"デカロゴT シロ",path:DekaLogoT_Shiro,id:"DekaLogoT_Shiro"},
    {name:"デカロゴT ノーコン",path:DekaLogoT_Nokon,id:"DekaLogoT_Nokon"},
    {name:"トビウォーズHKユニ",path:TobiUo$zuHKYuni,id:"TobiUo-zuHKYuni"},
    {name:"バスケジャージ アウェイ",path:BasukeJergey_Away,id:"BasukeJergey_Away"},
    {name:"スクールジャージー",path:SchoolJergey,id:"SchoolJergey"},
    {name:"テッカサイクルシャツ",path:TekkaCycleShirt,id:"TekkaCycleShirt"},
    {name:"バスケジャージ ホーム",path:BasukeJergey_Home,id:"BasukeJergey_Home"},
    {name:"FCジャージー",path:FCJergey,id:"FCJergey"},
    {name:"アナアキニット アオソデ",path:AnaakiKnit_Aosode,id:"AnaakiKnit_Aosode"},
    {name:"アナアキニット アカソデ",path:AnaakiKnit_Akasode,id:"AnaakiKnit_Akasode"},
    {name:"アナアキニット キソデ",path:AnaakiKnit_Kisode,id:"AnaakiKnit_Kisode"},
    {name:"アナアキロンT ドライブ",path:AnaakiLonT_Drive,id:"AnaakiLonT_Drive"},
    {name:"ピーターパンクシャツ",path:PeterPunkShirt,id:"PeterPunkShirt"},
    {name:"アナアキT ポルポピック",path:AnaakiT_PolpoPic,id:"AnaakiT_PolpoPic"},
    // {name:"アナアキオンブレネル",path:AnaakiOnBureneru,id:"AnaakiOnBureneru"},
    {name:"アナアキロンT イボルブ",path:AnaakiLonT_Evolve,id:"AnaakiLonT_Evolve"},
    {name:"パラシューター ザクロ",path:ParaShooter_Zakuro,id:"ParaShooter_Zakuro"},
    {name:"パラシューター プルーン",path:ParaShooter_Prune,id:"ParaShooter_Prune"},
    {name:"ピーターパンクタイ ブラッド",path:PeterPunkTie_Blood,id:"PeterPunkTie_Blood"},
    {name:"ロッケンブレイクジャケット",path:RockenBreakJacket,id:"RockenBreakJacket"},
    {name:"イカノメT ブラック",path:IkanomeT_Black,id:"IkanomeT_Black"},
    {name:"イカノメT ライトブルー",path:IkanomeT_LightBlue,id:"IkanomeT_LightBlue"},
    {name:"かくれパイレーツ",path:KakurePirate,id:"KakurePirate"},
    {name:"アロメスローガンT",path:AromeSloganT,id:"AromeSloganT"},
    {name:"アロメテックT ブルー",path:AromeTechT_Blue,id:"AromeTechT_Blue"},
    {name:"アロメテックT レッド",path:AromeTechT_Red,id:"AromeTechT_Red"},
    // {name:"アロメランベスト シルバー",path:AromeRunVest_Silver,id:"AromeRunVest_Silver"},
    // {name:"ロブスターズユニ",path:RobstarsYuni,id:"RobstarsYuni"},
    {name:"チャリキングジャージ",path:ChariKingJergey,id:"ChariKingJergey"},
    {name:"エゾッコラグラン",path:EzokkoRaglan,id:"EzokkoRaglan"},
    {name:"エゾッコロンTラディッシュ",path:EzokkoLonTRadish,id:"EzokkoLonTRadish"},
    // {name:"ピンポンポロ",path:PingPongPolo,id:"PingPongPolo"},
    {name:"リールロールスウェット",path:ReelRollSweat,id:"ReelRollSweat"},
    {name:"ウラスカジャン",path:UraSukajan,id:"UraSukajan"},
    {name:"エゾッココーチ アカネ",path:EzokkoCoach_Akane,id:"EzokkoCoach_Akane"},
    {name:"エゾッココーチ ウコン",path:EzokkoCoach_Ukon,id:"EzokkoCoach_Ukon"},
    {name:"エゾッココーチ モエギ",path:EzokkoCoach_Moegi,id:"EzokkoCoach_Moegi"},
    {name:"エゾッコパーカー アズキ",path:EzokkoParka_Azuki,id:"EzokkoParka_Azuki"},
    {name:"エゾッコパーカー ウグイス",path:EzokkoParka_Uguisu,id:"EzokkoParka_Uguisu"},
    {name:"エゾッコロンTキャロット",path:EzokkoLonTCarrot,id:"EzokkoLonTCarrot"},
    {name:"ギンガムチェック アカ",path:GinghamCheck_Aka,id:"GinghamCheck_Aka"},
    {name:"ギンガムチェック ミドリ",path:GinghamCheck_Midori,id:"GinghamCheck_Midori"},
    {name:"バニーポップ ブラック",path:BunnyPop_Black,id:"BunnyPop_Black"},
    {name:"ミックスシャツ グレー",path:MixShirt_Gray,id:"MixShirt_Gray"},
    {name:"ロゴマシマシアロハ",path:LogoMashiMashiAloha,id:"LogoMashiMashiAloha"},
    {name:"イカスカジャン",path:IkaSukajan,id:"IkaSukajan"},
    {name:"ウラタコスカジャン",path:UraTakoSukajan,id:"UraTakoSukajan"},
    {name:"スタジャンロゴマシ",path:SutaJanLogoMasi,id:"SutaJanLogoMasi"},
    {name:"トリスカベッチン",path:ToriSukaBettin,id:"ToriSukaBettin"},
    {name:"キングオクトTミドリベロア",path:KingOctoTMidoriVelour,id:"KingOctoTMidoriVelour"},
    {name:"キングタンク スラッシュ",path:KingTank_Slash,id:"KingTank_Slash"},
    {name:"キングタンク ホワイト",path:KingTank_White,id:"KingTank_White"},
    {name:"キングタンク マリン",path:KingTank_Marine,id:"KingTank_Marine"},
    {name:"キングパーカー グレープ",path:KingParka_Grape,id:"KingParka_Grape"},
    {name:"キングHKシャツ",path:KingHKShirt,id:"KingHKShirt"},
    {name:"キングオクトHKシャツ",path:KingOctoHKShirt,id:"KingOctoHKShirt"},
    {name:"キングオクトTブラックベロア",path:KingOctoTBlackVelour,id:"KingOctoTBlackVelour"},
    {name:"エンペーサートレーナー",path:EnPacerTrainer,id:"EnPacerTrainer"},
    {name:"キングベンチNV",path:KingBenchNV,id:"KingBenchNV"},
    // {name:"キングベンチカイザー",path:KingBenchKaiser,id:"KingBenchKaiser"},
    {name:"イカゴッチンベスト",path:IkaGottinVest,id:"IkaGottinVest"},
    {name:"イカスタンシャツ",path:IkaStanShirt,id:"IkaStanShirt"},
    {name:"イカノボリベスト",path:IkaNoboriVest,id:"IkaNoboriVest"},
    {name:"クラーゲス528",path:Kura$gesu528,id:"Kura-gesu528"},
    {name:"サニーオレンジT",path:SunnyOrangeT,id:"SunnyOrangeT"},
    {name:"レイニーブルーT",path:RainyBlueT,id:"RainyBlueT"},
    {name:"タコボウラーシャツ",path:TakoBowlerShirt,id:"TakoBowlerShirt"},
    {name:"チリメンタコアロハ",path:ChirimenTakoAloha,id:"ChirimenTakoAloha"},
    {name:"ミズシュラッグT",path:MizuShrugT,id:"MizuShrugT"},
    {name:"ミスターシュラッグT",path:MrShrugT,id:"MrShrugT"},
    {name:"ボーダーモスグリーン",path:BorderMossGreen,id:"BorderMossGreen"},
    {name:"ヤマビコT アイボリー",path:YamabikoT_Ivory,id:"YamabikoT_Ivory"},
    {name:"ヤマビコT ブルー",path:YamabikoT_Blue,id:"YamabikoT_Blue"},
    {name:"ヤマビコボーダー",path:YamabikoBorder,id:"YamabikoBorder"},
    {name:"フィッシャーズベスト オジ",path:FishersVest_Ozi,id:"FishersVest_Ozi"},
    {name:"マウンテンベリー",path:MountainBerry,id:"MountainBerry"},
    {name:"フォレストダウン",path:ForestDown,id:"ForestDown"},
    {name:"マウンテンオリーブ",path:MountainOlive,id:"MountainOlive"},
    {name:"マウンテンダウン",path:MountainDown,id:"MountainDown"},
    {name:"マウンテンチリペッパー",path:MountainChiliPepper,id:"MountainChiliPepper"},
    {name:"マウンテンノリタマゴ",path:MountainNoriTamago,id:"MountainNoriTamago"},
    {name:"マウンテンフローズン",path:MountainFrozen,id:"MountainFrozen"},
    {name:"マッチャ ライトダウン",path:Matcha_LightDown,id:"Matcha_LightDown"},
    {name:"カレッジスウェット グレー",path:CollegeSweat_Gray,id:"CollegeSweat_Gray"},
    {name:"カレッジスウェット ネイビー",path:CollegeSweat_Navy,id:"CollegeSweat_Navy"},
    {name:"カレッジラグラン",path:CollegeRaglan,id:"CollegeRaglan"},
    {name:"さくらエビポロ",path:SakuraEbiPolo,id:"SakuraEbiPolo"},
    {name:"シャンブレーシャツ",path:ChambrayShirt,id:"ChambrayShirt"},
    {name:"パイレーツボーダー",path:PirateBorder,id:"PirateBorder"},
    {name:"ベイビークラゲシャツ",path:BabyKurageShirt,id:"BabyKurageShirt"},
    {name:"ボーダーネイビー",path:BorderNavy,id:"BorderNavy"},
    {name:"マリンボーダー",path:MarineBorder,id:"MarineBorder"},
    {name:"よもぎポロ",path:YomogiPolo,id:"YomogiPolo"},
    {name:"レタード オレンジ",path:Lettered_Orange,id:"Lettered_Orange"},
    {name:"シャツノゾキピンク",path:ShirtNozokiPink,id:"ShirtNozokiPink"},
    {name:"シャツノゾキブルー",path:ShirtNozokiBlue,id:"ShirtNozokiBlue"},
    {name:"タイツキベイビークラゲ",path:TieTsukiBabyKurage,id:"TieTsukiBabyKurage"},
    {name:"ブロックストライプシャツ",path:BlockStripeShirt,id:"BlockStripeShirt"},
    {name:"ボーダーホワイト",path:BorderWhite,id:"BorderWhite"},
    {name:"ゆとりボーダー ピンク",path:YutoriBorder_Pink,id:"YutoriBorder_Pink"},
    {name:"ゆとりボーダー ライム",path:YutoriBorder_Lime,id:"YutoriBorder_Lime"},
    {name:"レタード グリーン",path:Lettered_Green,id:"Lettered_Green"},
    {name:"シロシャツ",path:ShiroShirt,id:"ShiroShirt"},
    {name:"タイシャツ",path:TieShirt,id:"TieShirt"},
    {name:"ハウスタグホエールニット",path:HouseTagWhaleKnit,id:"HouseTagWhaleKnit"},
    {name:"スウェットT ゴブ",path:SweatT_Gobu,id:"SweatT_Gobu"},
    {name:"スミカケシャツ",path:SumiKakeShirt,id:"SumiKakeShirt"},
    {name:"スミヌキシャツ",path:SumiNukiShirt,id:"SumiNukiShirt"},
    {name:"フロントジップベスト",path:FrontZipVest,id:"FrontZipVest"},
    {name:"クンフージャージ",path:KungFuJergey,id:"KungFuJergey"},
    {name:"クンフーパンジャージ",path:KungFuPanJergey,id:"KungFuPanJergey"},
    {name:"ケンサキコーチ",path:KensakiCoach,id:"KensakiCoach"},
    {name:"ショートニットカサネ",path:ShortKnitGasane,id:"ShortKnitGasane"},
    {name:"タタキBBBシャツ",path:TatakiBBBshirt,id:"TatakiBBBshirt"},
    {name:"ドロップスウェット ネガ",path:DropSweat_Nega,id:"DropSweat_Nega"},
    {name:"ドロップスウェット ポジ",path:DropSweat_Pozi,id:"DropSweat_Pozi"},
    {name:"プルオーバーコート",path:PullOverCoat,id:"PullOverCoat"},
    {name:"ボンバージャケット ネガ",path:BomberJacket_Nega,id:"BomberJacket_Nega"},
    {name:"ボンバージャケット ポジ",path:BomberJacket_Pozi,id:"BomberJacket_Pozi"},
    {name:"イカバッテン マスタード",path:IkaBatten_Mustard,id:"IkaBatten_Mustard"},
    {name:"イカバッテンロング",path:IkaBattenLong,id:"IkaBattenLong"},
    {name:"イカブラック",path:IkaBlack,id:"IkaBlack"},
    {name:"イカホワイト",path:IkaWhite,id:"IkaWhite"},
    {name:"カモガサネ",path:KamoGasane,id:"KamoGasane"},
    {name:"バトロング ホワイト",path:BatoLong_White,id:"BatoLong_White"},
    {name:"フレンドT",path:FriendT,id:"FriendT"},
    {name:"マスタードガサネ",path:MustardGasane,id:"MustardGasane"},
    {name:"レイヤード ブラック",path:Layered_Black,id:"Layered_Black"},
    {name:"レイヤード ホワイト",path:Layered_White,id:"Layered_White"},
    {name:"わかばイカT",path:WakabaIkaT,id:"WakabaIkaT"},
    {name:"イカイエローVガサネ",path:IkaYellowVGasane,id:"IkaYellowVGasane"},
    {name:"イカグリーンV コラボ",path:IkaGreenV_Collabo,id:"IkaGreenV_Collabo"},
    {name:"イカブラックV",path:IkaBlackV,id:"IkaBlackV"},
    {name:"イカホワイトV",path:IkaWhite,id:"IkaWhite"},
    {name:"イカリスウェット",path:IkariSweat,id:"IkariSweat"},
    {name:"イカレッドV コラボ",path:IkaRedV_Collabo,id:"IkaRedV_Collabo"},
    {name:"ガチガサネ",path:GatiGasane,id:"GatiGasane"},
    {name:"ガチブラック",path:GatiBlack,id:"GatiBlack"},
    {name:"ガチホワイト",path:GatiWhite,id:"GatiWhite"},
    {name:"リーグT",path:LeagueT,id:"LeagueT"},
    {name:"SWCロゴT",path:SWCLogoT,id:"SWCLogoT"},
    {name:"おうえんパーカー(タコver.)",path:OuenParka$TakoVer$$,id:"OuenParka(TakoVer.)"},
    // {name:"フェスT",path:FesT,id:"FesT"},
    {name:"フェスT レプリカ",path:FesT_Replica,id:"FesT_Replica"},
    // {name:"メカボディ・AKM",path:MechaBody$AKM,id:"MechaBody・AKM"},
    {name:"レトロジャッジ",path:RetroJudge,id:"RetroJudge"},
    {name:"おどるイカアロハ",path:OdoruIkaAloha,id:"OdoruIkaAloha"},
    {name:"グリーンT",path:GreenT,id:"GreenT"},
    {name:"F-010",path:F$010,id:"F-010"},
    {name:"F-190",path:F$190,id:"F-190"},
    {name:"FA-11ウラ カスタム",path:FA$11Ura_Custom,id:"FA-11Ura_Custom"},
    {name:"FA-11オモテ カスタム",path:FA$11Omote_Custom,id:"FA-11Omote_Custom"},
    {name:"イカセーラー ホワイト",path:IkaSailor_White,id:"IkaSailor_White"},
    {name:"F-3 ペイントカスタム",path:F$3_PaintCustom,id:"F-3_PaintCustom"},
    {name:"F-3 ホワイトレザー",path:F$3_WhiteLeather,id:"F-3_WhiteLeather"},
    {name:"FA-01ウラ",path:FA$01Ura,id:"FA$01Ura"},
    {name:"FA-01オモテ",path:FA$01Omote,id:"FA$01Omote"},
    {name:"イカセーラー ブルー",path:IkaSailor_Blue,id:"IkaSailor_Blue"},
    // {name:"モイストギリースーツ",path:MoistGillieSuit,id:"MoistGillieSuit"},
    {name:"アイスグラデT",path:IceGuradeT,id:"IceGuradeT"},
    {name:"グレープT",path:GrapeT,id:"GrapeT"},
    {name:"チドリメロンT",path:ChidoriMelonT,id:"ChidoriMelonT"},
    {name:"パールドットT",path:PearlDotT,id:"PearlDotT"},
    {name:"ホットグラデT",path:HotGuradeT,id:"HotGuradeT"},
    {name:"ミントT",path:MintT,id:"MintT"},
    {name:"ホタパーカー グレー",path:HotaParka_Gray,id:"HotaParka_Gray"},
    {name:"ホタパーカー ブラック",path:HotaParka_Black,id:"HotaParka_Black"},
    {name:"ホタプラントパーカー",path:HotaPlantParka,id:"HotaPlantParka"},
    {name:"イカジャマイカ",path:IkaJamaica,id:"IkaJamaica"},
    {name:"レイヤードットシャツ",path:LayerDotShirt,id:"LayerDotShirt"},
    {name:"ω-3T",path:ω$3T,id:"ω-3T"},
    {name:"ソウショクT",path:SousyokuT,id:"SousyokuT"},
    {name:"ニクショクT",path:NikusyokuT,id:"NikusyokuT"},
    {name:"マルフグT",path:MarufuguT,id:"MarufuguT"},
    {name:"ヤキフグ8bit グレー",path:Yakifugu8bit_Gray,id:"Yakifugu8bit_Gray"},
    {name:"ヤキフグ8bit ブラック",path:Yakifugu8bit_Black,id:"Yakifugu8bit_Black"},
    {name:"ヤキフグ8bit ホワイト",path:Yakifugu8bit_White,id:"Yakifugu8bit_White"},
    {name:"アーバンベスト イエロー",path:UrbanVest_Yellow,id:"UrbanVest_Yellow"},
    {name:"ジップアップ グリーン",path:ZipUp_Green,id:"ZipUp_Green"},
    {name:"ホッコリー ネイビー",path:Hokkori$_Navy,id:"Hokkori-_Navy"},
    {name:"ヤキフグ16bit カーキ",path:Yakifugu16bit_Khaki,id:"Yakifugu16bit_Khaki"},
    {name:"ヤキフグ16bit ブルー",path:Yakifugu16bit_Blue,id:"Yakifugu16bit_Blue"},
    {name:"アーバンベスト ナイト",path:UrbanVest_Night,id:"UrbanVest_Night"},
    {name:"ジップアップ カモ",path:ZipUp_Kamo,id:"ZipUp_Kamo"},
    {name:"ミスターベースボール",path:MrBaseBall,id:"MrBaseBall"},
    {name:"アオサドーレ",path:AosaDo$re,id:"AosaDo-re"},
    {name:"カモフラパープル",path:CamouflaPurple,id:"CamouflaPurple"},
    {name:"チョコガサネ",path:ChocoGasane,id:"ChocoGasane"},
    {name:"トリコロールラガー",path:ToricorollRugger,id:"ToricorollRugger"},
    {name:"ベクトルパターン グレー",path:VectorPattern_Gray,id:"VectorPattern_Gray"},
    {name:"ベクトルパターン レッド",path:VectorPattern_Red,id:"VectorPattern_Red"},
    {name:"ベクトルラインガサネ",path:VectorLineGasane,id:"VectorLineGasane"},
    {name:"ヤコタイダイ ギャラクシー",path:YakoTieDye_Galaxy,id:"YakoTieDye_Galaxy"},
    {name:"ヤコタイダイ レインボー",path:YakoTieDye_Rainbow,id:"YakoTieDye_Rainbow"},
    {name:"FCカラスミ",path:FCKarasumi,id:"FCKarasumi"},
    {name:"オレンジボーダーラガー",path:OrangeBorderRugger,id:"OrangeBorderRugger"},
    {name:"ヤコラグランクレイジー",path:YakoRaglanCrazy,id:"YakoRaglanCrazy"},
    {name:"ヤコナイロン ヴィンテージ",path:YakoNylon_Vintage,id:"YakoNylon_Vintage"},
    {name:"ヤコナイロンレトロ",path:YakoNylonRetro,id:"YakoNylonRetro"},
    {name:"ヤコピステ",path:YakoPisute,id:"YakoPisute"},
    {name:"オータムネル",path:AutumnNeru,id:"AutumnNeru"},
    {name:"ガンガゼロックT クロ",path:GangazeRockT_Kuro,id:"GangazeRockT_Kuro"},
    {name:"ガンガゼロックT シロ",path:GangazeRockT_Shiro,id:"GangazeRockT_Shiro"},
    {name:"ハラグロラグラン",path:HaraGuroRaglan,id:"HaraGuroRaglan"},
    {name:"ハラシロラグラン",path:HaraShiroRaglan,id:"HaraShiroRaglan"},
    {name:"バンドT ABXY",path:BandT_ABXY,id:"BandT_ABXY"},
    {name:"バンドT HIGHTIDEERA",path:BandT_HIGHTIDEERA,id:"BandT_HIGHTIDEERA"},
    {name:"バンドT SQUIDSQUAD",path:BandT_SQUIDSDUAD,id:"BandT_SQUIDSDUAD"},
    {name:"バンドT WETFLOOR",path:BandT_WETFLOOR,id:"BandT_WETFLOOR"},
    {name:"ロッケンベルグT ブラック",path:RockenbergT_Black,id:"RockenbergT_Black"},
    {name:"マルエリシャツ",path:MaruEriShirt,id:"MaruEriShirt"},
    {name:"ロッケンベルグT ホワイト",path:RockenbergT_White,id:"RockenbergT_White"},
    {name:"イカライダーBLACK",path:IkaRiderBLACK,id:"IkaRiderBLACK"},
    {name:"イカライダーWHITE",path:IkaRiderWHITE,id:"IkaRiderWHITE"},
    {name:"ヴィンテージチェック",path:VintageCheck,id:"VintageCheck"},
    // {name:"イイダチトップス",path:IidachiTops,id:"IidachiTops"},
    // {name:"エンチャントローブ",path:EnchantRobe,id:"EnchantRobe"},
    // {name:"サムライジャケット",path:SamuraiJacket,id:"SamuraiJacket"},
    // {name:"スクールカーデ",path:SchoolKa$de,id:"SchoolKa-de"},
    // {name:"スクールブレザー",path:SchoolBlazer,id:"SchoolBlazer"},
    // {name:"タコティカルなよろい",path:TakoticalNaYoroi,id:"TakoticalNaYoroi"},
    // {name:"ニンジャスーツ",path:NinjaSuit,id:"NinjaSuit"},
    // {name:"パワードスーツ",path:PoweredSuit,id:"PoweredSuit"},
    // {name:"パワードスーツ オリジン",path:PoweredSuit_Origin,id:"PoweredSuit_Origin"},
    // {name:"ヒメイトパーカー",path:HimeitoParka,id:"HimeitoParka"},
    // {name:"ひれおくんのて",path:HireoKunNoTe,id:"HireoKunNoTe"},
    {name:"わかばタコT",path:WakabaTakoT,id:"WakabaTakoT"},
    // {name:"アーマージャケット レプリカ",path:ArmorJacket_Replica,id:"ArmorJacket_Replica"},
    // {name:"オクタリアンレトロ",path:OctarianRetro,id:"OctarianRetro"},
    // {name:"グランパなフク",path:GranPaNaFuku,id:"GranPaNaFuku"},
    // {name:"タコゾネスプロテクターネオ",path:TakozonesProtector_Neo,id:"TakozonesProtector_Neo"},
    {name:"タコロンT 赤",path:TakoLonT_AKA,id:"TakoLonT_AKA"},
    {name:"タコロンT 黒",path:TakoLonT_KURO,id:"TakoLonT_KURO"},
    // {name:"ネルアーマー レプリカ",path:NellArmor_Replica,id:"NellArmor_Replica"},
    // {name:"ヒーロージャケット レプリカ",path:HeroJacket_Replica,id:"HeroJacket_Replica"},
    // {name:"ヒーローフーディー レプリカ",path:HeroHoodie_Replica,id:"HeroHoodie_Replica"},
    // {name:"オクトガサネ",path:OctoGasane,id:"OctoGasane"},
    // {name:"センニュースーツ",path:Sennyu$Suit,id:"Sennyu-Suit"},
    {name:"タコT",path:TakoT,id:"TakoT"},
    {name:"BBシャツ プレミアム",path:BBshirt_Premium,id:"BBshirt_Premium"},
    {name:"アカシックコート",path:AkashicCoat,id:"AkashicCoat"},
    {name:"アゲアゲ・10・プラーXXL",path:AgeAge$10$Pura$XXL,id:"AgeAge・10・Pura-XXL"},
    {name:"アンカーベスト",path:AnchorVest,id:"AnchorVest"},
    {name:"イカテンくんポロ",path:IkatenKunPolo,id:"IkatenKunPolo"},
    {name:"ジムパーソンアーマー",path:ZimuPersonArmor,id:"ZimuPersonArmor"},
    {name:"デベロッパーズワークウエア",path:DevelopersWorkWear,id:"DevelopersWorkWear"},
    {name:"フューエルブルゾン",path:FuelBlouson,id:"FuelBlouson"},
    {name:"フロムキタグニ87",path:FromKitaguni87,id:"FromKitaguni87"},
    {name:"マクレGT",path:MakureGT,id:"MakureGT"},
    {name:"レコヤルックEP",path:RecoYaLookEP,id:"RecoYaLookEP"}
  ];


// 名前順に整列した配列を新たに定義
const gearsSortedByName = gears.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);


const ClothesGearModal = (props) => {
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
  
  return(
    <div className="modal fade" id="clothesGearModal" tabindex="-1" aria-labelledby="clothesGearModalLabel" aria-hidden="true">  
      <div className="modal-dialog modal-lg">
        <div className="modal-content clothesGearModalBg">
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
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[133].id);
                  props.passImagePath(gearsArray[133].path);
                  }
                }
              >
                <img src= {gearsArray[133].path} alt={gearsArray[133].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[134].id);
                  props.passImagePath(gearsArray[134].path);
                  }
                }
              >
                <img src= {gearsArray[134].path} alt={gearsArray[134].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[135].id);
                  props.passImagePath(gearsArray[135].path);
                  }
                }
              >
                <img src= {gearsArray[135].path} alt={gearsArray[135].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[136].id);
                  props.passImagePath(gearsArray[136].path);
                  }
                }
              >
                <img src= {gearsArray[136].path} alt={gearsArray[136].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[137].id);
                  props.passImagePath(gearsArray[137].path);
                  }
                }
              >
                <img src= {gearsArray[137].path} alt={gearsArray[137].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[138].id);
                  props.passImagePath(gearsArray[138].path);
                  }
                }
              >
                <img src= {gearsArray[138].path} alt={gearsArray[138].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[139].id);
                  props.passImagePath(gearsArray[139].path);
                  }
                }
              >
                <img src= {gearsArray[139].path} alt={gearsArray[139].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[140].id);
                  props.passImagePath(gearsArray[140].path);
                  }
                }
              >
                <img src= {gearsArray[140].path} alt={gearsArray[140].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[141].id);
                  props.passImagePath(gearsArray[141].path);
                  }
                }
              >
                <img src= {gearsArray[141].path} alt={gearsArray[141].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[142].id);
                  props.passImagePath(gearsArray[142].path);
                  }
                }
              >
                <img src= {gearsArray[142].path} alt={gearsArray[142].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[143].id);
                  props.passImagePath(gearsArray[143].path);
                  }
                }
              >
                <img src= {gearsArray[143].path} alt={gearsArray[143].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[144].id);
                  props.passImagePath(gearsArray[144].path);
                  }
                }
              >
                <img src= {gearsArray[144].path} alt={gearsArray[144].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[145].id);
                  props.passImagePath(gearsArray[145].path);
                  }
                }
              >
                <img src= {gearsArray[145].path} alt={gearsArray[145].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[146].id);
                  props.passImagePath(gearsArray[146].path);
                  }
                }
              >
                <img src= {gearsArray[146].path} alt={gearsArray[146].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[147].id);
                  props.passImagePath(gearsArray[147].path);
                  }
                }
              >
                <img src= {gearsArray[147].path} alt={gearsArray[147].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[148].id);
                  props.passImagePath(gearsArray[148].path);
                  }
                }
              >
                <img src= {gearsArray[148].path} alt={gearsArray[148].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[149].id);
                  props.passImagePath(gearsArray[149].path);
                  }
                }
              >
                <img src= {gearsArray[149].path} alt={gearsArray[149].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[150].id);
                  props.passImagePath(gearsArray[150].path);
                  }
                }
              >
                <img src= {gearsArray[150].path} alt={gearsArray[150].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[151].id);
                  props.passImagePath(gearsArray[151].path);
                  }
                }
              >
                <img src= {gearsArray[151].path} alt={gearsArray[151].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[152].id);
                  props.passImagePath(gearsArray[152].path);
                  }
                }
              >
                <img src= {gearsArray[152].path} alt={gearsArray[152].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[153].id);
                  props.passImagePath(gearsArray[153].path);
                  }
                }
              >
                <img src= {gearsArray[153].path} alt={gearsArray[153].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[154].id);
                  props.passImagePath(gearsArray[154].path);
                  }
                }
              >
                <img src= {gearsArray[154].path} alt={gearsArray[154].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[155].id);
                  props.passImagePath(gearsArray[155].path);
                  }
                }
              >
                <img src= {gearsArray[155].path} alt={gearsArray[155].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[156].id);
                  props.passImagePath(gearsArray[156].path);
                  }
                }
              >
                <img src= {gearsArray[156].path} alt={gearsArray[156].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[157].id);
                  props.passImagePath(gearsArray[157].path);
                  }
                }
              >
                <img src= {gearsArray[157].path} alt={gearsArray[157].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[158].id);
                  props.passImagePath(gearsArray[158].path);
                  }
                }
              >
                <img src= {gearsArray[158].path} alt={gearsArray[158].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[159].id);
                  props.passImagePath(gearsArray[159].path);
                  }
                }
              >
                <img src= {gearsArray[159].path} alt={gearsArray[159].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[160].id);
                  props.passImagePath(gearsArray[160].path);
                  }
                }
              >
                <img src= {gearsArray[160].path} alt={gearsArray[160].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[161].id);
                  props.passImagePath(gearsArray[161].path);
                  }
                }
              >
                <img src= {gearsArray[161].path} alt={gearsArray[161].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[162].id);
                  props.passImagePath(gearsArray[162].path);
                  }
                }
              >
                <img src= {gearsArray[162].path} alt={gearsArray[162].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[163].id);
                  props.passImagePath(gearsArray[163].path);
                  }
                }
              >
                <img src= {gearsArray[163].path} alt={gearsArray[163].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[164].id);
                  props.passImagePath(gearsArray[164].path);
                  }
                }
              >
                <img src= {gearsArray[164].path} alt={gearsArray[164].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[165].id);
                  props.passImagePath(gearsArray[165].path);
                  }
                }
              >
                <img src= {gearsArray[165].path} alt={gearsArray[165].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[166].id);
                  props.passImagePath(gearsArray[166].path);
                  }
                }
              >
                <img src= {gearsArray[166].path} alt={gearsArray[166].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[167].id);
                  props.passImagePath(gearsArray[167].path);
                  }
                }
              >
                <img src= {gearsArray[167].path} alt={gearsArray[167].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[168].id);
                  props.passImagePath(gearsArray[168].path);
                  }
                }
              >
                <img src= {gearsArray[168].path} alt={gearsArray[168].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[169].id);
                  props.passImagePath(gearsArray[169].path);
                  }
                }
              >
                <img src= {gearsArray[169].path} alt={gearsArray[169].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[170].id);
                  props.passImagePath(gearsArray[170].path);
                  }
                }
              >
                <img src= {gearsArray[170].path} alt={gearsArray[170].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[171].id);
                  props.passImagePath(gearsArray[171].path);
                  }
                }
              >
                <img src= {gearsArray[171].path} alt={gearsArray[171].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[172].id);
                  props.passImagePath(gearsArray[172].path);
                  }
                }
              >
                <img src= {gearsArray[172].path} alt={gearsArray[172].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[173].id);
                  props.passImagePath(gearsArray[173].path);
                  }
                }
              >
                <img src= {gearsArray[173].path} alt={gearsArray[173].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[174].id);
                  props.passImagePath(gearsArray[174].path);
                  }
                }
              >
                <img src= {gearsArray[174].path} alt={gearsArray[174].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[175].id);
                  props.passImagePath(gearsArray[175].path);
                  }
                }
              >
                <img src= {gearsArray[175].path} alt={gearsArray[175].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[176].id);
                  props.passImagePath(gearsArray[176].path);
                  }
                }
              >
                <img src= {gearsArray[176].path} alt={gearsArray[176].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[177].id);
                  props.passImagePath(gearsArray[177].path);
                  }
                }
              >
                <img src= {gearsArray[177].path} alt={gearsArray[177].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[178].id);
                  props.passImagePath(gearsArray[178].path);
                  }
                }
              >
                <img src= {gearsArray[178].path} alt={gearsArray[178].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[179].id);
                  props.passImagePath(gearsArray[179].path);
                  }
                }
              >
                <img src= {gearsArray[179].path} alt={gearsArray[179].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[180].id);
                  props.passImagePath(gearsArray[180].path);
                  }
                }
              >
                <img src= {gearsArray[180].path} alt={gearsArray[180].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[181].id);
                  props.passImagePath(gearsArray[181].path);
                  }
                }
              >
                <img src= {gearsArray[181].path} alt={gearsArray[181].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[182].id);
                  props.passImagePath(gearsArray[182].path);
                  }
                }
              >
                <img src= {gearsArray[182].path} alt={gearsArray[182].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[183].id);
                  props.passImagePath(gearsArray[183].path);
                  }
                }
              >
                <img src= {gearsArray[183].path} alt={gearsArray[183].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[184].id);
                  props.passImagePath(gearsArray[184].path);
                  }
                }
              >
                <img src= {gearsArray[184].path} alt={gearsArray[184].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[185].id);
                  props.passImagePath(gearsArray[185].path);
                  }
                }
              >
                <img src= {gearsArray[185].path} alt={gearsArray[185].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[186].id);
                  props.passImagePath(gearsArray[186].path);
                  }
                }
              >
                <img src= {gearsArray[186].path} alt={gearsArray[186].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[187].id);
                  props.passImagePath(gearsArray[187].path);
                  }
                }
              >
                <img src= {gearsArray[187].path} alt={gearsArray[187].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[188].id);
                  props.passImagePath(gearsArray[188].path);
                  }
                }
              >
                <img src= {gearsArray[188].path} alt={gearsArray[188].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[189].id);
                  props.passImagePath(gearsArray[189].path);
                  }
                }
              >
                <img src= {gearsArray[189].path} alt={gearsArray[189].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[190].id);
                  props.passImagePath(gearsArray[190].path);
                  }
                }
              >
                <img src= {gearsArray[190].path} alt={gearsArray[190].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[191].id);
                  props.passImagePath(gearsArray[191].path);
                  }
                }
              >
                <img src= {gearsArray[191].path} alt={gearsArray[191].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[192].id);
                  props.passImagePath(gearsArray[192].path);
                  }
                }
              >
                <img src= {gearsArray[192].path} alt={gearsArray[192].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[193].id);
                  props.passImagePath(gearsArray[193].path);
                  }
                }
              >
                <img src= {gearsArray[193].path} alt={gearsArray[193].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[194].id);
                  props.passImagePath(gearsArray[194].path);
                  }
                }
              >
                <img src= {gearsArray[194].path} alt={gearsArray[194].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[195].id);
                  props.passImagePath(gearsArray[195].path);
                  }
                }
              >
                <img src= {gearsArray[195].path} alt={gearsArray[195].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[196].id);
                  props.passImagePath(gearsArray[196].path);
                  }
                }
              >
                <img src= {gearsArray[196].path} alt={gearsArray[196].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[197].id);
                  props.passImagePath(gearsArray[197].path);
                  }
                }
              >
                <img src= {gearsArray[197].path} alt={gearsArray[197].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[198].id);
                  props.passImagePath(gearsArray[198].path);
                  }
                }
              >
                <img src= {gearsArray[198].path} alt={gearsArray[198].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[199].id);
                  props.passImagePath(gearsArray[199].path);
                  }
                }
              >
                <img src= {gearsArray[199].path} alt={gearsArray[199].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[200].id);
                  props.passImagePath(gearsArray[200].path);
                  }
                }
              >
                <img src= {gearsArray[200].path} alt={gearsArray[200].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[201].id);
                  props.passImagePath(gearsArray[201].path);
                  }
                }
              >
                <img src= {gearsArray[201].path} alt={gearsArray[201].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[202].id);
                  props.passImagePath(gearsArray[202].path);
                  }
                }
              >
                <img src= {gearsArray[202].path} alt={gearsArray[202].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[203].id);
                  props.passImagePath(gearsArray[203].path);
                  }
                }
              >
                <img src= {gearsArray[203].path} alt={gearsArray[203].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[204].id);
                  props.passImagePath(gearsArray[204].path);
                  }
                }
              >
                <img src= {gearsArray[204].path} alt={gearsArray[204].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[205].id);
                  props.passImagePath(gearsArray[205].path);
                  }
                }
              >
                <img src= {gearsArray[205].path} alt={gearsArray[205].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[206].id);
                  props.passImagePath(gearsArray[206].path);
                  }
                }
              >
                <img src= {gearsArray[206].path} alt={gearsArray[206].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[207].id);
                  props.passImagePath(gearsArray[207].path);
                  }
                }
              >
                <img src= {gearsArray[207].path} alt={gearsArray[207].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[208].id);
                  props.passImagePath(gearsArray[208].path);
                  }
                }
              >
                <img src= {gearsArray[208].path} alt={gearsArray[208].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[209].id);
                  props.passImagePath(gearsArray[209].path);
                  }
                }
              >
                <img src= {gearsArray[209].path} alt={gearsArray[209].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[210].id);
                  props.passImagePath(gearsArray[210].path);
                  }
                }
              >
                <img src= {gearsArray[210].path} alt={gearsArray[210].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[211].id);
                  props.passImagePath(gearsArray[211].path);
                  }
                }
              >
                <img src= {gearsArray[211].path} alt={gearsArray[211].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[212].id);
                  props.passImagePath(gearsArray[212].path);
                  }
                }
              >
                <img src= {gearsArray[212].path} alt={gearsArray[212].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[213].id);
                  props.passImagePath(gearsArray[213].path);
                  }
                }
              >
                <img src= {gearsArray[213].path} alt={gearsArray[213].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[214].id);
                  props.passImagePath(gearsArray[214].path);
                  }
                }
              >
                <img src= {gearsArray[214].path} alt={gearsArray[214].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[215].id);
                  props.passImagePath(gearsArray[215].path);
                  }
                }
              >
                <img src= {gearsArray[215].path} alt={gearsArray[215].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[216].id);
                  props.passImagePath(gearsArray[216].path);
                  }
                }
              >
                <img src= {gearsArray[216].path} alt={gearsArray[216].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[217].id);
                  props.passImagePath(gearsArray[217].path);
                  }
                }
              >
                <img src= {gearsArray[217].path} alt={gearsArray[217].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[218].id);
                  props.passImagePath(gearsArray[218].path);
                  }
                }
              >
                <img src= {gearsArray[218].path} alt={gearsArray[218].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[219].id);
                  props.passImagePath(gearsArray[219].path);
                  }
                }
              >
                <img src= {gearsArray[219].path} alt={gearsArray[219].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[220].id);
                  props.passImagePath(gearsArray[220].path);
                  }
                }
              >
                <img src= {gearsArray[220].path} alt={gearsArray[220].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[221].id);
                  props.passImagePath(gearsArray[221].path);
                  }
                }
              >
                <img src= {gearsArray[221].path} alt={gearsArray[221].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[222].id);
                  props.passImagePath(gearsArray[222].path);
                  }
                }
              >
                <img src= {gearsArray[222].path} alt={gearsArray[222].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[223].id);
                  props.passImagePath(gearsArray[223].path);
                  }
                }
              >
                <img src= {gearsArray[223].path} alt={gearsArray[223].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[224].id);
                  props.passImagePath(gearsArray[224].path);
                  }
                }
              >
                <img src= {gearsArray[224].path} alt={gearsArray[224].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[225].id);
                  props.passImagePath(gearsArray[225].path);
                  }
                }
              >
                <img src= {gearsArray[225].path} alt={gearsArray[225].name}/>
              </div>
            </div>
            <div className="gear-list">
              <div
                className="gear-image"
                onClick={()=>{
                  props.passChosenGear(gearsArray[226].id);
                  props.passImagePath(gearsArray[226].path);
                  }
                }
              >
                <img src= {gearsArray[226].path} alt={gearsArray[226].name}/>
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

export default ClothesGearModal; 