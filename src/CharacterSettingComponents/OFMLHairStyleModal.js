// ClassNameのHSはHairStyleの略

const OFMLHairStyleModal = (props) => {
  //選択されているHSのボタンのクラス名を変更、別のHSが選択されていればクラス名を戻す
  const changeClassName = (HS) => {
    let target = document.getElementById(HS);
    target.className = `OFML-HS-btn ${HS}`;
  };
  
  const btnSelected = (HS) => {
    let target = document.getElementById(HS);
    target.className = "selected";
    if (HS !== "OFML-HS-0") {
      changeClassName("OFML-HS-0");
    }
    if (HS !== "OFML-HS-1") {
      changeClassName("OFML-HS-1");
    }
  };
  
  // マウスのボタンを押し下げている間のみクラス名を変更
  const btnRotate = (HS)=> {
    let target = document.getElementById(HS);
    target.className = "rotate";
  };
  
  return (
    <div className="modal fade" id="OFMLHairStyleModal" aria-hidden="true" aria-labelledby="OFMLHairStyleModalLabel" tabIndex="-1">  
      <div className="modal-dialog">
        <div className="modal-content bg-dark">  
          <div className="OFML-HS-btn OFML-HS-0" id="OFML-HS-0">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passHairStyle("Hair_0");
                btnSelected("OFML-HS-0");
              }}
              onMouseDown={()=>{
                btnRotate("OFML-HS-0");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 64 159 C 51 173 35 183 24 192 C 6 212 35 233 69 229 C 93 258 168 253 182 220 C 235 224 231 189 216 181 C 205 174 193 167 177 148 C 144 122 90 122 64 159"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 33 277 C 35 294 78 291 61 249 C 53 227 36 204 39 181 L 34 184 L 33 173 C 15 188 13 117 34 130 C 38 119 42 112 49 105 C 21 103 90 60 82 83 C 104 85 106 78 117 80 C 107 58 181 68 163 85 C 172 88 180 93 186 101 C 199 75 236 144 211 145 C 223 196 203 216 200 252 C 197 277 224 285 232 270 C 225 300 159 278 182 219 C 218 133 135 80 93 148 C 56 146 63 208 74 220 C 116 269 30 315 33 277 M 119 83"
                fill="#ff00b3"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 33 277 C 18 312 100 301 94 242 C 90 239 84 234 81 230 C 90 295 31 302 33 277 L 166 236 C 169 295 238 303 232 270 C 215 300 171 268 182 220 C 179 225 171 233 166 236"
                fill="#ffd2e7"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 93 148 C 116 90 215 115 187 203 C 185 152 158 120 93 148"
                fill="#ffd2e7"
                stroke="none"
              />
              <path 
                className="HS-btn-suc"
                d="M 122 75 C 123 66 162 71 160 78 C 157 88 122 82 122 75 L 195 102 C 205 99 222 132 213 136 C 204 140 190 103 195 102"
                fill="#ffe9f1"
                stroke="none"
              />
              <path 
                className="HS-btn-suc"
                d="M 28 134 C 37 133 37 169 28 169 C 20 169 20 133 28 134"
                fill="#ffe9f1"
                stroke="none"
              />
            </svg>
          </div>
          <div className="OFML-HS-btn OFML-HS-1" id="OFML-HS-1">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="100" viewBox="20 0 210 250"
              onClick={()=>{
                props.passHairStyle("Hair_1");
                btnSelected("OFML-HS-1");
              }}
              onMouseDown={()=>{
                btnRotate("OFML-HS-1");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 64 159 C 51 173 35 183 24 192 C 6 212 35 233 69 229 C 93 258 168 253 182 220 C 235 224 231 189 216 181 C 205 174 193 167 177 148 C 144 122 90 122 64 159"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 55 248 C 52 225 40 232 50 190 C 52 178 47 168 50 158 C 31 160 55 113 65 126 C 70 119 77 113 87 112 C 87 109 89 105 92 103 C 70 70 90 40 118 55 C 121 46 133 33 148 39 C 153 31 179 53 170 62 C 169 80 168 104 182 112 C 172 119 163 99 139 86 L 137 91 C 143 94 151 99 153 103 C 163 102 171 112 174 117 C 185 110 206 144 195 148 C 201 166 188 179 198 197 C 205 211 196 221 197 244 C 162 231 199 204 177 164 C 167 142 153 145 151 134 C 154 156 89 153 89 137 C 87 153 69 157 64 174 C 56 211 84 235 55 248"
                fill="#ff00b3"
                stroke="none"
              />
              <path 
                className="HS-btn-suc"
                d="M 102 98 C 101 90 139 91 138 97 C 137 106 103 106 102 98 L 152 42 C 156 37 172 51 166 59 C 162 64 149 46 152 42"
                fill="#ffe9f1"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 136 85 C 156 58 157 105 175 113 C 168 112 165 105 153 103 C 151 98 144 88 136 85"
                fill="#ffd2e7"
                stroke="none"
              />
              <path 
                className="HS-btn-hairband"
                d="M 104 92 C 102 71 146 80 138 92 C 128 89 115 88 104 92"
                fill="#ff70cc"
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
          <div className="close-btn" data-bs-toggle="#FMLBottomsModal" data-bs-target="#FMLBottomsModal" data-bs-dismiss="modal">
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

export default OFMLHairStyleModal;