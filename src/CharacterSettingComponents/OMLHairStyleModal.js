// ClassNameのHSはHairStyleの略

const OMLHairStyleModal = (props) => {
  //選択されているHSのボタンのクラス名を変更、別のHSが選択されていればクラス名を戻す
  const changeClassName = (HS) => {
    let target = document.getElementById(HS);
    target.className = `OML-HS-btn ${HS}`;
  };
  
  const btnSelected = (HS) => {
    let target = document.getElementById(HS);
    target.className = "selected";
    if (HS !== "OML-HS-0") {
      changeClassName("OML-HS-0");
    }
    if (HS !== "OML-HS-1") {
      changeClassName("OML-HS-1");
    }
  };
  
  // マウスのボタンを押し下げている間のみクラス名を変更
  const btnRotate = (HS)=> {
    let target = document.getElementById(HS);
    target.className = "rotate";
  };
  
  return (
    <div className="modal fade" id="OMLHairStyleModal" aria-hidden="true" aria-labelledby="OMLHairStyleModalLabel" tabIndex="-1">  
      <div className="modal-dialog">
        <div className="modal-content bg-dark">  
          <div className="OML-HS-btn OML-HS-0" id="OML-HS-0">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passHairStyle("Hair_0");
                btnSelected("OML-HS-0");
              }}
              onMouseDown={()=>{
                btnRotate("OML-HS-0");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 64 159 C 51 173 35 183 24 192 C 6 212 34 234 67 227 C 93 258 168 253 180 223 C 238 224 231 189 216 181 C 205 174 191 169 177 148 C 144 122 90 122 64 159"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 57 198 C 4 57 234 71 188 194 C 188 174 174 135 160 144 C 140 153 104 153 85 148 C 70 140 60 172 57 198"
                fill="#bdf0ce"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 90 100 C 87 86 90 80 97 75 C 80 57 141 50 132 69 C 145 71 182 110 130 157 C 79 196 45 141 84 134 C 60 158 111 163 107 114 C 106 103 101 98 90 100"
                fill="#ffb23d"
                stroke="none"
              />
              
              <path 
                className="HS-btn-suc"
                d="M 124 140 C 113 135 118 112 135 118 C 149 124 138 146 124 140 L 132 103 C 118 103 107 86 126 78 C 140 73 157 100 132 103"
                fill="#effcf2"
                stroke="none"
              />
            </svg>
          </div>
          <div className="OML-HS-btn OML-HS-1" id="OML-HS-1">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="100" viewBox="20 0 210 250"
              onClick={()=>{
                props.passHairStyle("Hair_1");
                btnSelected("OML-HS-1");
              }}
              onMouseDown={()=>{
                btnRotate("OML-HS-1");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 64 159 C 51 173 35 183 24 192 C 6 212 34 234 67 227 C 93 258 168 253 180 223 C 238 224 231 189 216 181 C 205 174 191 169 177 148 C 144 122 90 122 64 159"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 72 210 C 59 200 59 180 59 167 L 48 173 C 9 128 31 77 91 59 C 156 39 258 89 200 171 L 190 164 C 191 180 190 198 178 206 C 183 180 184 140 153 137 C 131 135 135 143 110 138 C 71 132 68 173 72 210"
                fill="#ffb23d"
                stroke="none"
              />
            </svg>
          </div>
          <div className="close-btn">
            <svg className="close-btn-svg" width="240" height="160" viewBox="-500 -142 2300 1300">
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
          <div className="close-btn" data-bs-toggle="modal" data-bs-target="#MLBottomsModal" data-bs-dismiss="modal">
            <svg className="close-btn-svg" width="240" height="160" viewBox="-500 -142 2300 1300">
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
              <text className="svg-text-default" x="450" y="520" fill="white">つぎへ</text>
              <text className="svg-text-hover" x="410" y="540" fill="none">つぎへ</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default OMLHairStyleModal;