import React, { useState, useRef, useEffect} from 'react';
import GearIcon from '../GearIcon';
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
// import IkanomeT_Black from '../images/gear/Clt_TES001.png';
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
// import KingTank_Marine from '../images/gear/Clt_TNK005.png';
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
// import YutoriBorder_Pink from '../images/gear/Clt_TEL013.png';
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
import IkaRedV_Collabo from '../images/gear/Clt_TES044.png';
import IkaBlackV from '../images/gear/Clt_TES030.png';
import IkaWhiteV from '../images/gear/Clt_TES035.png';
import IkariSweat from '../images/gear/Clt_SWT006.png';
import GatiGasane from '../images/gear/Clt_TLY005.png';
import GatiBlack from '../images/gear/Clt_TES023.png';
import GatiWhite from '../images/gear/Clt_TES022.png';
import LeagueT from '../images/gear/Clt_TES052.png';
// import SWCLogoT from '../images/gear/Clt_TES061.png';
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
import ninjaSquid from '../images/ability/NS.png';
import haunt from '../images/ability/Haunt.png';
import respawnPunisher from '../images/ability/RP.png';
import thermalInk from '../images/ability/TI.png';
import abilityDoubler from '../images/ability/AD.png';

// ギアの配列 ブランド順
const gears = [
    {name:"アイロニックレイヤード",path:AironicLayered,id:"AironicLayered",brand:"アイロニック"},
    {name:"アイロニックロング",path:AironicLong,id:"AironicLong",brand:"アイロニック"},
    {name:"ウーニーズBBシャツ",path:U$ni$zuBBShirt,id:"U-ni-zuBBShirt",brand:"アイロニック"},
    {name:"デカロTキウイ",path:DekaroTKiwi,id:"DekaroTKiwi",brand:"アイロニック"},
    {name:"デカロTゴールデン",path:DekaroTGolden,id:"DekaroTGolden",brand:"アイロニック"},
    {name:"デカロゴT シロ",path:DekaLogoT_Shiro,id:"DekaLogoT_Shiro",brand:"アイロニック"},
    {name:"デカロゴT ノーコン",path:DekaLogoT_Nokon,id:"DekaLogoT_No-kon",brand:"アイロニック"},
    {name:"トビウォーズHKユニ",path:TobiUo$zuHKYuni,id:"TobiUo-zuHKYuni",brand:"アイロニック"},
    {name:"バスケジャージ アウェイ",path:BasukeJergey_Away,id:"BasukeJersey_Away",brand:"アイロニック"},
    {name:"スクールジャージー",path:SchoolJergey,id:"SchoolJergey",brand:"アイロニック"},
    {name:"テッカサイクルシャツ",path:TekkaCycleShirt,id:"TekkaCycleShirt",brand:"アイロニック"},
    {name:"バスケジャージ ホーム",path:BasukeJergey_Home,id:"BasukeJersey_Home",brand:"アイロニック"},
    {name:"FCジャージー",path:FCJergey,id:"FCJergey",brand:"アイロニック"},
    {name:"アナアキニット アオソデ",path:AnaakiKnit_Aosode,id:"AnaakiKnit_Aosode",brand:"アナアキ"},
    {name:"アナアキニット アカソデ",path:AnaakiKnit_Akasode,id:"AnaakiKnit_Akasode",brand:"アナアキ"},
    {name:"アナアキニット キソデ",path:AnaakiKnit_Kisode,id:"AnaakiKnit_Kisode",brand:"アナアキ"},
    {name:"アナアキロンT ドライブ",path:AnaakiLonT_Drive,id:"AnaakiLonT_Drive",brand:"アナアキ"},
    {name:"ピーターパンクシャツ",path:PeterPunkShirt,id:"PeterPunkShirt",brand:"アナアキ"},
    {name:"アナアキT ポルポピック",path:AnaakiT_PolpoPic,id:"AnaakiT_PolpoPic",brand:"アナアキ"},
    // {name:"アナアキオンブレネル",path:AnaakiOnBureneru,id:"AnaakiOnBureneru"},
    {name:"アナアキロンT イボルブ",path:AnaakiLonT_Evolve,id:"AnaakiLonT_Evolve",brand:"アナアキ"},
    {name:"パラシューター ザクロ",path:ParaShooter_Zakuro,id:"ParaShooter_Zakuro",brand:"アナアキ"},
    {name:"パラシューター プルーン",path:ParaShooter_Prune,id:"ParaShooter_Prune",brand:"アナアキ"},
    {name:"ピーターパンクタイ ブラッド",path:PeterPunkTie_Blood,id:"PeterPunkTie_Blood",brand:"アナアキ"},
    {name:"ロッケンブレイクジャケット",path:RockenBreakJacket,id:"RockenBreakJacket",brand:"アナアキ"},
    // {name:"イカノメT ブラック",path:IkanomeT_Black,id:"IkanomeT_Black"},
    {name:"イカノメT ライトブルー",path:IkanomeT_LightBlue,id:"IkanomeT_LightBlue",brand:"アロメ"},
    {name:"かくれパイレーツ",path:KakurePirate,id:"KakurePirate",brand:"アロメ"},
    {name:"アロメスローガンT",path:AromeSloganT,id:"AromeSloganT",brand:"アロメ"},
    {name:"アロメテックT ブルー",path:AromeTechT_Blue,id:"AromeTechT_Blue",brand:"アロメ"},
    {name:"アロメテックT レッド",path:AromeTechT_Red,id:"AromeTechT_Red",brand:"アロメ"},
    // {name:"アロメランベスト シルバー",path:AromeRunVest_Silver,id:"AromeRunVest_Silver"},
    // {name:"ロブスターズユニ",path:RobstarsYuni,id:"RobstarsYuni"},
    {name:"チャリキングジャージ",path:ChariKingJergey,id:"ChariKingJergey",brand:"アロメ"},
    {name:"エゾッコラグラン",path:EzokkoRaglan,id:"EzokkoRaglan",brand:"エゾッコ"},
    {name:"エゾッコロンTラディッシュ",path:EzokkoLonTRadish,id:"EzokkoLonTRadish",brand:"エゾッコ"},
    // {name:"ピンポンポロ",path:PingPongPolo,id:"PingPongPolo"},
    {name:"リールロールスウェット",path:ReelRollSweat,id:"ReelRollSweat",brand:"エゾッコ"},
    {name:"ウラスカジャン",path:UraSukajan,id:"UraSukajan",brand:"エゾッコ"},
    {name:"エゾッココーチ アカネ",path:EzokkoCoach_Akane,id:"EzokkoCoach_Akane",brand:"エゾッコ"},
    {name:"エゾッココーチ ウコン",path:EzokkoCoach_Ukon,id:"EzokkoCoach_Ukon",brand:"エゾッコ"},
    {name:"エゾッココーチ モエギ",path:EzokkoCoach_Moegi,id:"EzokkoCoach_Moegi",brand:"エゾッコ"},
    {name:"エゾッコパーカー アズキ",path:EzokkoParka_Azuki,id:"EzokkoParka_Azuki",brand:"エゾッコ"},
    {name:"エゾッコパーカー ウグイス",path:EzokkoParka_Uguisu,id:"EzokkoParka_Uguisu",brand:"エゾッコ"},
    {name:"エゾッコロンTキャロット",path:EzokkoLonTCarrot,id:"EzokkoLonTCarrot",brand:"エゾッコ"},
    {name:"ギンガムチェック アカ",path:GinghamCheck_Aka,id:"GinghamCheck_Aka",brand:"エゾッコ"},
    {name:"ギンガムチェック ミドリ",path:GinghamCheck_Midori,id:"GinghamCheck_Midori",brand:"エゾッコ"},
    {name:"バニーポップ ブラック",path:BunnyPop_Black,id:"BunnyPop_Black",brand:"エゾッコ"},
    {name:"ミックスシャツ グレー",path:MixShirt_Gray,id:"MixShirt_Gray",brand:"エゾッコ"},
    {name:"ロゴマシマシアロハ",path:LogoMashiMashiAloha,id:"LogoMashiMashiAloha",brand:"エゾッコ"},
    {name:"イカスカジャン",path:IkaSukajan,id:"IkaSukajan",brand:"エゾッコ"},
    {name:"ウラタコスカジャン",path:UraTakoSukajan,id:"UraTakoSukajan",brand:"エゾッコ"},
    {name:"スタジャンロゴマシ",path:SutaJanLogoMasi,id:"SutaJanLogoMasi",brand:"エゾッコ"},
    {name:"トリスカベッチン",path:ToriSukaBettin,id:"ToriSukaBettin",brand:"エゾッコ"},
    {name:"キングオクトTミドリベロア",path:KingOctoTMidoriVelour,id:"KingOctoTMidoriVelour",brand:"エンペリー"},
    {name:"キングタンク スラッシュ",path:KingTank_Slash,id:"KingTank_Slash",brand:"エンペリー"},
    {name:"キングタンク ホワイト",path:KingTank_White,id:"KingTank_White",brand:"エンペリー"},
    // {name:"キングタンク マリン",path:KingTank_Marine,id:"KingTank_Marine",brand:"エンペリー"},
    {name:"キングパーカー グレープ",path:KingParka_Grape,id:"KingParka_Grape",brand:"エンペリー"},
    {name:"キングHKシャツ",path:KingHKShirt,id:"KingHKShirt",brand:"エンペリー"},
    {name:"キングオクトHKシャツ",path:KingOctoHKShirt,id:"KingOctoHKShirt",brand:"エンペリー"},
    {name:"キングオクトTブラックベロア",path:KingOctoTBlackVelour,id:"KingOctoTBlackVelour",brand:"エンペリー"},
    {name:"エンペーサートレーナー",path:EnPacerTrainer,id:"EnPacerTrainer",brand:"エンペリー"},
    {name:"キングベンチNV",path:KingBenchNV,id:"KingBenchNV",brand:"エンペリー"},
    // {name:"キングベンチカイザー",path:KingBenchKaiser,id:"KingBenchKaiser",brand:"エンペリー"},
    {name:"イカゴッチンベスト",path:IkaGottinVest,id:"IkaGottinVest",brand:"クラーゲス"},
    {name:"イカスタンシャツ",path:IkaStanShirt,id:"IkaStanShirt",brand:"クラーゲス"},
    {name:"イカノボリベスト",path:IkaNoboriVest,id:"IkaNoboriVest",brand:"クラーゲス"},
    {name:"クラーゲス528",path:Kura$gesu528,id:"Kura-gesu528",brand:"クラーゲス"},
    {name:"サニーオレンジT",path:SunnyOrangeT,id:"SunnyOrangeT",brand:"クラーゲス"},
    {name:"レイニーブルーT",path:RainyBlueT,id:"RainyBlueT",brand:"クラーゲス"},
    {name:"タコボウラーシャツ",path:TakoBowlerShirt,id:"TakoBowlerShirt",brand:"クラーゲス"},
    {name:"チリメンタコアロハ",path:ChirimenTakoAloha,id:"ChirimenTakoAloha",brand:"クラーゲス"},
    {name:"ミズシュラッグT",path:MizuShrugT,id:"MizuShrugT",brand:"クラーゲス"},
    {name:"ミスターシュラッグT",path:MrShrugT,id:"MrShrugT",brand:"クラーゲス"},
    {name:"ボーダーモスグリーン",path:BorderMossGreen,id:"BorderMossGreen",brand:"シグレ二"},
    {name:"ヤマビコT アイボリー",path:YamabikoT_Ivory,id:"YamabikoT_Ivory",brand:"シグレ二"},
    {name:"ヤマビコT ブルー",path:YamabikoT_Blue,id:"YamabikoT_Blue",brand:"シグレ二"},
    {name:"ヤマビコボーダー",path:YamabikoBorder,id:"YamabikoBorder",brand:"シグレ二"},
    {name:"フィッシャーズベスト オジ",path:FishersVest_Ozi,id:"FishersVest_Ozi",brand:"シグレ二"},
    {name:"マウンテンベリー",path:MountainBerry,id:"MountainBerry",brand:"シグレ二"},
    {name:"フォレストダウン",path:ForestDown,id:"ForestDown",brand:"シグレ二"},
    {name:"マウンテンオリーブ",path:MountainOlive,id:"MountainOlive",brand:"シグレ二"},
    {name:"マウンテンダウン",path:MountainDown,id:"MountainDown",brand:"シグレ二"},
    {name:"マウンテンチリペッパー",path:MountainChiliPepper,id:"MountainChiliPepper",brand:"シグレ二"},
    {name:"マウンテンノリタマゴ",path:MountainNoriTamago,id:"MountainNoriTamago",brand:"シグレ二"},
    {name:"マウンテンフローズン",path:MountainFrozen,id:"MountainFrozen",brand:"シグレ二"},
    {name:"マッチャ ライトダウン",path:Matcha_LightDown,id:"Matcha_LightDown",brand:"シグレ二"},
    {name:"カレッジスウェット グレー",path:CollegeSweat_Gray,id:"CollegeSweat_Gray",brand:"ジモン"},
    {name:"カレッジスウェット ネイビー",path:CollegeSweat_Navy,id:"CollegeSweat_Navy",brand:"ジモン"},
    {name:"カレッジラグラン",path:CollegeRaglan,id:"CollegeRaglan",brand:"ジモン"},
    {name:"さくらエビポロ",path:SakuraEbiPolo,id:"SakuraEbiPolo",brand:"ジモン"},
    {name:"シャンブレーシャツ",path:ChambrayShirt,id:"ChambrayShirt",brand:"ジモン"},
    {name:"パイレーツボーダー",path:PirateBorder,id:"PirateBorder",brand:"ジモン"},
    {name:"ベイビークラゲシャツ",path:BabyKurageShirt,id:"BabyKurageShirt",brand:"ジモン"},
    {name:"ボーダーネイビー",path:BorderNavy,id:"BorderNavy",brand:"ジモン"},
    {name:"マリンボーダー",path:MarineBorder,id:"MarineBorder",brand:"ジモン"},
    {name:"よもぎポロ",path:YomogiPolo,id:"YomogiPolo",brand:"ジモン"},
    {name:"レタード オレンジ",path:Lettered_Orange,id:"Lettered_Orange",brand:"ジモン"},
    {name:"シャツノゾキピンク",path:ShirtNozokiPink,id:"ShirtNozokiPink",brand:"ジモン"},
    {name:"シャツノゾキブルー",path:ShirtNozokiBlue,id:"ShirtNozokiBlue",brand:"ジモン"},
    {name:"タイツキベイビークラゲ",path:TieTsukiBabyKurage,id:"TieTsukiBabyKurage",brand:"ジモン"},
    {name:"ブロックストライプシャツ",path:BlockStripeShirt,id:"BlockStripeShirt",brand:"ジモン"},
    {name:"ボーダーホワイト",path:BorderWhite,id:"BorderWhite",brand:"ジモン"},
    // {name:"ゆとりボーダー ピンク",path:YutoriBorder_Pink,id:"YutoriBorder_Pink",brand:"ジモン"},
    {name:"ゆとりボーダー ライム",path:YutoriBorder_Lime,id:"YutoriBorder_Lime",brand:"ジモン"},
    {name:"レタード グリーン",path:Lettered_Green,id:"Lettered_Green",brand:"ジモン"},
    {name:"シロシャツ",path:ShiroShirt,id:"ShiroShirt",brand:"ジモン"},
    {name:"タイシャツ",path:TieShirt,id:"TieShirt",brand:"ジモン"},
    {name:"ハウスタグホエールニット",path:HouseTagWhaleKnit,id:"HouseTagWhaleKnit",brand:"ジモン"},
    {name:"スウェットT ゴブ",path:SweatT_Gobu,id:"SweatT_Gobu",brand:"タタキケンサキ"},
    {name:"スミカケシャツ",path:SumiKakeShirt,id:"SumikakeShirt",brand:"タタキケンサキ"},
    {name:"スミヌキシャツ",path:SumiNukiShirt,id:"SuminukiShirt",brand:"タタキケンサキ"},
    {name:"フロントジップベスト",path:FrontZipVest,id:"FrontZipVest",brand:"タタキケンサキ"},
    {name:"クンフージャージ",path:KungFuJergey,id:"KungFuJergey",brand:"タタキケンサキ"},
    {name:"クンフーパンジャージ",path:KungFuPanJergey,id:"KungFuPanJergey",brand:"タタキケンサキ"},
    {name:"ケンサキコーチ",path:KensakiCoach,id:"KensakiCoach",brand:"タタキケンサキ"},
    {name:"ショートニットカサネ",path:ShortKnitGasane,id:"ShortKnitKasane",brand:"タタキケンサキ"},
    {name:"タタキBBBシャツ",path:TatakiBBBshirt,id:"TatakiBBBShirt",brand:"タタキケンサキ"},
    {name:"ドロップスウェット ネガ",path:DropSweat_Nega,id:"DropSweat_Nega",brand:"タタキケンサキ"},
    {name:"ドロップスウェット ポジ",path:DropSweat_Pozi,id:"DropSweat_Pozi",brand:"タタキケンサキ"},
    {name:"プルオーバーコート",path:PullOverCoat,id:"PulloverCoat",brand:"タタキケンサキ"},
    {name:"ボンバージャケット ネガ",path:BomberJacket_Nega,id:"BomberJacket_Nega",brand:"タタキケンサキ"},
    {name:"ボンバージャケット ポジ",path:BomberJacket_Pozi,id:"BomberJacket_Pozi",brand:"タタキケンサキ"},
    {name:"イカバッテン マスタード",path:IkaBatten_Mustard,id:"IkaBatten_Mustard",brand:"バトロイカ"},
    {name:"イカバッテンロング",path:IkaBattenLong,id:"IkaBattenLong",brand:"バトロイカ"},
    {name:"イカブラック",path:IkaBlack,id:"IKABLACK",brand:"バトロイカ"},
    {name:"イカホワイト",path:IkaWhite,id:"IKAWHITE",brand:"バトロイカ"},
    {name:"カモガサネ",path:KamoGasane,id:"KamoGasane",brand:"バトロイカ"},
    {name:"バトロング ホワイト",path:BatoLong_White,id:"BatoLong_White",brand:"バトロイカ"},
    {name:"フレンドT",path:FriendT,id:"FriendT",brand:"バトロイカ"},
    {name:"マスタードガサネ",path:MustardGasane,id:"MustardGasane",brand:"バトロイカ"},
    {name:"レイヤード ブラック",path:Layered_Black,id:"Layered_Black",brand:"バトロイカ"},
    {name:"レイヤード ホワイト",path:Layered_White,id:"Layered_White",brand:"バトロイカ"},
    {name:"わかばイカT",path:WakabaIkaT,id:"WakabaIkaT",brand:"バトロイカ"},
    {name:"イカイエローVガサネ",path:IkaYellowVGasane,id:"IkaYellowVGasane",brand:"バトロイカ"},
    {name:"イカグリーンV コラボ",path:IkaGreenV_Collabo,id:"IkaGreenV_Collabo",brand:"バトロイカ"},
    {name:"イカブラックV",path:IkaBlackV,id:"IkaBlackV",brand:"バトロイカ"},
    {name:"イカホワイトV",path:IkaWhiteV,id:"IkaWhiteV",brand:"バトロイカ"},
    {name:"イカリスウェット",path:IkariSweat,id:"IkariSweat",brand:"バトロイカ"},
    {name:"イカレッドV コラボ",path:IkaRedV_Collabo,id:"IkaRedV_Collabo",brand:"バトロイカ"},
    {name:"ガチガサネ",path:GatiGasane,id:"GatiGasane",brand:"バトロイカ"},
    {name:"ガチブラック",path:GatiBlack,id:"GatiBlack",brand:"バトロイカ"},
    {name:"ガチホワイト",path:GatiWhite,id:"GatiWhite",brand:"バトロイカ"},
    {name:"リーグT",path:LeagueT,id:"LeagueT",brand:"バトロイカ"},
    // {name:"SWCロゴT",path:SWCLogoT,id:"SWCLogoT",brand:"バトロイカ"},
    {name:"おうえんパーカー(タコver.)",path:OuenParka$TakoVer$$,id:"OuenParka",brand:"バトロイカ"},
    // {name:"フェスT",path:FesT,id:"FesT",brand:"バトロイカ"},
    {name:"フェスT レプリカ",path:FesT_Replica,id:"FesT_Replica",brand:"バトロイカ"},
    // {name:"メカボディ・AKM",path:MechaBody$AKM,id:"MechaBody・AKM",brand:"バトロイカ"},
    {name:"レトロジャッジ",path:RetroJudge,id:"RetroJudge",brand:"バトロイカ"},
    {name:"おどるイカアロハ",path:OdoruIkaAloha,id:"OdoruIkaAloha",brand:"フォーリマ"},
    {name:"グリーンT",path:GreenT,id:"GreenT",brand:"フォーリマ"},
    {name:"F-010",path:F$010,id:"F-010",brand:"フォーリマ"},
    {name:"F-190",path:F$190,id:"F-190",brand:"フォーリマ"},
    {name:"FA-11ウラ カスタム",path:FA$11Ura_Custom,id:"FA-11Ura_Custom",brand:"フォーリマ"},
    {name:"FA-11オモテ カスタム",path:FA$11Omote_Custom,id:"FA-11Omote_Custom",brand:"フォーリマ"},
    {name:"イカセーラー ホワイト",path:IkaSailor_White,id:"IkaSailor_White",brand:"フォーリマ"},
    {name:"F-3 ペイントカスタム",path:F$3_PaintCustom,id:"F-3_PaintCustom",brand:"フォーリマ"},
    {name:"F-3 ホワイトレザー",path:F$3_WhiteLeather,id:"F-3_WhiteLeather",brand:"フォーリマ"},
    {name:"FA-01ウラ",path:FA$01Ura,id:"FA-01Ura",brand:"フォーリマ"},
    {name:"FA-01オモテ",path:FA$01Omote,id:"FA-01Omote",brand:"フォーリマ"},
    {name:"イカセーラー ブルー",path:IkaSailor_Blue,id:"IkaSailor_Blue",brand:"フォーリマ"},
    // {name:"モイストギリースーツ",path:MoistGillieSuit,id:"MoistGillieSuit",brand:"フォーリマ"},
    {name:"アイスグラデT",path:IceGuradeT,id:"IceGuradeT",brand:"ホタックス"},
    {name:"グレープT",path:GrapeT,id:"GrapeT",brand:"ホタックス"},
    {name:"チドリメロンT",path:ChidoriMelonT,id:"ChidoriMelonT",brand:"ホタックス"},
    {name:"パールドットT",path:PearlDotT,id:"PearlDotT",brand:"ホタックス"},
    {name:"ホットグラデT",path:HotGuradeT,id:"HotGuradeT",brand:"ホタックス"},
    {name:"ミントT",path:MintT,id:"MintT",brand:"ホタックス"},
    {name:"ホタパーカー グレー",path:HotaParka_Gray,id:"HotaParka_Gray",brand:"ホタックス"},
    {name:"ホタパーカー ブラック",path:HotaParka_Black,id:"HotaParka_Black",brand:"ホタックス"},
    {name:"ホタプラントパーカー",path:HotaPlantParka,id:"HotaPlantParka",brand:"ホタックス"},
    {name:"イカジャマイカ",path:IkaJamaica,id:"IkaJamaica",brand:"ホタックス"},
    {name:"レイヤードットシャツ",path:LayerDotShirt,id:"LayerDotShirt",brand:"ホタックス"},
    {name:"ω-3T",path:ω$3T,id:"ω-3T",brand:"ホッコリー"},
    {name:"ソウショクT",path:SousyokuT,id:"SousyokuT",brand:"ホッコリー"},
    {name:"ニクショクT",path:NikusyokuT,id:"NikusyokuT",brand:"ホッコリー"},
    {name:"マルフグT",path:MarufuguT,id:"MarufuguT",brand:"ホッコリー"},
    {name:"ヤキフグ8bit グレー",path:Yakifugu8bit_Gray,id:"Yakifugu8bit_Gray",brand:"ホッコリー"},
    {name:"ヤキフグ8bit ブラック",path:Yakifugu8bit_Black,id:"Yakifugu8bit_Black",brand:"ホッコリー"},
    {name:"ヤキフグ8bit ホワイト",path:Yakifugu8bit_White,id:"Yakifugu8bit_White",brand:"ホッコリー"},
    {name:"アーバンベスト イエロー",path:UrbanVest_Yellow,id:"UrbanVest_Yellow",brand:"ホッコリー"},
    {name:"ジップアップ グリーン",path:ZipUp_Green,id:"ZipUp_Green",brand:"ホッコリー"},
    {name:"ホッコリー ネイビー",path:Hokkori$_Navy,id:"Hokkori-_Navy",brand:"ホッコリー"},
    {name:"ヤキフグ16bit カーキ",path:Yakifugu16bit_Khaki,id:"Yakifugu16bit_Khaki",brand:"ホッコリー"},
    {name:"ヤキフグ16bit ブルー",path:Yakifugu16bit_Blue,id:"Yakifugu16bit_Blue",brand:"ホッコリー"},
    {name:"アーバンベスト ナイト",path:UrbanVest_Night,id:"UrbanVest_Night",brand:"ホッコリー"},
    {name:"ジップアップ カモ",path:ZipUp_Kamo,id:"ZipUp_Kamo",brand:"ホッコリー"},
    {name:"ミスターベースボール",path:MrBaseBall,id:"MrBaseBall",brand:"ホッコリー"},
    {name:"アオサドーレ",path:AosaDo$re,id:"AosaDo-re",brand:"ヤコ"},
    {name:"カモフラパープル",path:CamouflaPurple,id:"CamouflaPurple",brand:"ヤコ"},
    {name:"チョコガサネ",path:ChocoGasane,id:"ChocoGasane",brand:"ヤコ"},
    {name:"トリコロールラガー",path:ToricorollRugger,id:"TricorollRugger",brand:"ヤコ"},
    {name:"ベクトルパターン グレー",path:VectorPattern_Gray,id:"VectorPattern_Gray",brand:"ヤコ"},
    {name:"ベクトルパターン レッド",path:VectorPattern_Red,id:"VectorPattern_Red",brand:"ヤコ"},
    {name:"ベクトルラインガサネ",path:VectorLineGasane,id:"VectorLineGasane",brand:"ヤコ"},
    {name:"ヤコタイダイ ギャラクシー",path:YakoTieDye_Galaxy,id:"YakoTieDye_Galaxy",brand:"ヤコ"},
    {name:"ヤコタイダイ レインボー",path:YakoTieDye_Rainbow,id:"YakoTieDye_Rainbow",brand:"ヤコ"},
    {name:"FCカラスミ",path:FCKarasumi,id:"FCKarasumi",brand:"ヤコ"},
    {name:"オレンジボーダーラガー",path:OrangeBorderRugger,id:"OrangeBorderRugger",brand:"ヤコ"},
    {name:"ヤコラグランクレイジー",path:YakoRaglanCrazy,id:"YakoRaglanCrazy",brand:"ヤコ"},
    {name:"ヤコナイロン ヴィンテージ",path:YakoNylon_Vintage,id:"YakoNylon_Vintage",brand:"ヤコ"},
    {name:"ヤコナイロンレトロ",path:YakoNylonRetro,id:"YakoNylonRetro",brand:"ヤコ"},
    {name:"ヤコピステ",path:YakoPisute,id:"YakoPisute",brand:"ヤコ"},
    {name:"オータムネル",path:AutumnNeru,id:"AutumnNeru",brand:"ロッケンベルグ"},
    {name:"ガンガゼロックT クロ",path:GangazeRockT_Kuro,id:"GangazeRockT_Kuro",brand:"ロッケンベルグ"},
    {name:"ガンガゼロックT シロ",path:GangazeRockT_Shiro,id:"GangazeRockT_Shiro",brand:"ロッケンベルグ"},
    {name:"ハラグロラグラン",path:HaraGuroRaglan,id:"HaraGuroRaglan",brand:"ロッケンベルグ"},
    {name:"ハラシロラグラン",path:HaraShiroRaglan,id:"HaraShiroRaglan",brand:"ロッケンベルグ"},
    {name:"バンドT ABXY",path:BandT_ABXY,id:"BandT_ABXY",brand:"ロッケンベルグ"},
    {name:"バンドT HIGHTIDEERA",path:BandT_HIGHTIDEERA,id:"BandT_HIGHTIDEERA",brand:"ロッケンベルグ"},
    {name:"バンドT SQUIDSQUAD",path:BandT_SQUIDSDUAD,id:"BandT_SQUIDSQUAD",brand:"ロッケンベルグ"},
    {name:"バンドT WETFLOOR",path:BandT_WETFLOOR,id:"BandT_WETFLOOR",brand:"ロッケンベルグ"},
    {name:"ロッケンベルグT ブラック",path:RockenbergT_Black,id:"RockenbergT_Black",brand:"ロッケンベルグ"},
    {name:"マルエリシャツ",path:MaruEriShirt,id:"MaruEriShirt",brand:"ロッケンベルグ"},
    {name:"ロッケンベルグT ホワイト",path:RockenbergT_White,id:"RockenbergT_White",brand:"ロッケンベルグ"},
    {name:"イカライダーBLACK",path:IkaRiderBLACK,id:"IkaRiderBLACK",brand:"ロッケンベルグ"},
    {name:"イカライダーWHITE",path:IkaRiderWHITE,id:"IkaRiderWHITE",brand:"ロッケンベルグ"},
    {name:"ヴィンテージチェック",path:VintageCheck,id:"VintageCheck",brand:"ロッケンベルグ"},
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
    {name:"わかばタコT",path:WakabaTakoT,id:"WakabaTakoT",brand:"アタリメイド"},
    // {name:"アーマージャケット レプリカ",path:ArmorJacket_Replica,id:"ArmorJacket_Replica",brand:"アタリメイド"},
    // {name:"オクタリアンレトロ",path:OctarianRetro,id:"OctarianRetro",brand:"アタリメイド"},
    // {name:"グランパなフク",path:GranPaNaFuku,id:"GranPaNaFuku",brand:"アタリメイド"},
    // {name:"タコゾネスプロテクターネオ",path:TakozonesProtector_Neo,id:"TakozonesProtector_Neo",brand:"アタリメイド"},
    {name:"タコロンT 赤",path:TakoLonT_AKA,id:"TakoLonT_AKA",brand:"アタリメイド"},
    {name:"タコロンT 黒",path:TakoLonT_KURO,id:"TakoLonT_KURO",brand:"アタリメイド"},
    // {name:"ネルアーマー レプリカ",path:NellArmor_Replica,id:"NellArmor_Replica",brand:"アタリメイド"},
    // {name:"ヒーロージャケット レプリカ",path:HeroJacket_Replica,id:"HeroJacket_Replica",brand:"アタリメイド"},
    // {name:"ヒーローフーディー レプリカ",path:HeroHoodie_Replica,id:"HeroHoodie_Replica",brand:"アタリメイド"},
    // {name:"オクトガサネ",path:OctoGasane,id:"OctoGasane",brand:"アタリメイド"},
    // {name:"センニュースーツ",path:Sennyu$Suit,id:"Sennyu-Suit",brand:"アタリメイド"},
    {name:"タコT",path:TakoT,id:"TacoT",brand:"アタリメイド"},
    {name:"BBシャツ プレミアム",path:BBshirt_Premium,id:"BBShirt_Premium",brand:"クマサン商会"},
    {name:"アカシックコート",path:AkashicCoat,id:"AkashicCoat",brand:"クマサン商会"},
    {name:"アゲアゲ・10・プラーXXL",path:AgeAge$10$Pura$XXL,id:"Ageage・10・Pura-XXL",brand:"クマサン商会"},
    {name:"アンカーベスト",path:AnchorVest,id:"AnchorVest",brand:"クマサン商会"},
    {name:"イカテンくんポロ",path:IkatenKunPolo,id:"IkatenKunPolo",brand:"クマサン商会"},
    {name:"ジムパーソンアーマー",path:ZimuPersonArmor,id:"ZimuPersonArmor",brand:"クマサン商会"},
    {name:"デベロッパーズワークウエア",path:DevelopersWorkWear,id:"DevelopersWorkWear",brand:"クマサン商会"},
    {name:"フューエルブルゾン",path:FuelBlouson,id:"FuelBlouson",brand:"クマサン商会"},
    {name:"フロムキタグニ87",path:FromKitaguni87,id:"FromKitaguni87",brand:"クマサン商会"},
    {name:"マクレGT",path:MakureGT,id:"MakureGT",brand:"クマサン商会"},
    {name:"レコヤルックEP",path:RecoYaLookEP,id:"RecoYaLookEP",brand:"クマサン商会"}
  ];


// 名前順に整列した配列を新たに定義
const gearsSortedByName = gears.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);


const ClothesGearModal = React.memo((props) => {
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

  let target;

  const closeGearModal = function() {
    target = document.getElementById("clothesGearModal")
    target.style.display = "none"
  }

  return (
    <div className="gear-modal bg-secondary font-type2 text-white" id="clothesGearModal">
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
          <div className="px-1 px-sm-0 px-lg-3 d-flex gears-display-area">
            <div className="chosen-gear d-flex flex-column">
            <p className="chosenGear-text h5">選択中のギア</p>
            <p className="chosenGear-name font-type1">{props.chosenGear.name}</p>
            <div className="chosen-gear-icon">
              <div className="brand-img-container">
                <img className="brand-img" src={brandDependency(props.chosenGear.brand).brandImgPath} alt=""/>
                <div className="brand-tooltip-container text-start">
                  <span className="brand-tooltip">{props.chosenGear.brand}</span>
                </div>
              </div>
              <img className="chosen-gear-icon-img" src={props.chosenGear.path} alt=""/>
              <div className="clothes-stripe gear-icon-footer">
                <div className="brand-ability">
                  <p className="fav-ability-tooltip">つきやすいギアパワー</p>
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
                  <p className="fav-ability-tooltip">つきにくいギアパワー</p>
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
          <div className="col-8 d-flex flex-wrap gearicons-section clothes-stripe">
            {gearsArray.map(
                (gear, index) => <GearIcon key={index} gear={gear} setChosenGear={props.setChosenGear}/>
              )}
          </div>
          </div>
          <div className="modal-footer py-0">
            <button type="button" className="btn btn-lg btn-dark m-auto OK-btn" onClick={()=>{closeGearModal()}}><p>OK</p></button>
          </div>
        </div>
  );
});

export default ClothesGearModal; 