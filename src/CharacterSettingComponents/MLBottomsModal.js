// ClassNameのBtmはBottomsの略

const MLBottomsModal = (props) => {
  //選択されているBtmのボタンのクラス名を変更、別のBtmが選択されていればクラス名を戻す
  const changeClassName = (Btm) => {
    let target = document.getElementById(Btm);
    target.className = `ML-Btm-btn ${Btm}`;
  };
  
  const btnSelected = (Btm) => {
    let target = document.getElementById(Btm);
    target.className = "selected";
    if (Btm !== "ML-Btm-0") {
      changeClassName("ML-Btm-0");
    }
    if (Btm !== "ML-Btm-1") {
      changeClassName("ML-Btm-1");
    }
    if (Btm !== "ML-Btm-2") {
      changeClassName("ML-Btm-2");
    }
    if (Btm !== "ML-Btm-3") {
      changeClassName("ML-Btm-3");
    }
    if (Btm !== "ML-Btm-4") {
      changeClassName("ML-Btm-4");
    }
    
  };
  
  // マウスのボタンを押し下げている間のみクラス名を変更
  const btnRotate = (Btm)=> {
    let target = document.getElementById(Btm);
    target.className = "rotate";
  };
  
  return (
    <div className="modal fade" id="MLBottomsModal" aria-hidden="true" aria-labelledby="MLBottomsModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content container">
          <div className="ML-Btm-btn ML-Btm-0" id="ML-Btm-0">
            <svg
              className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passBottoms("Btm_0");
                btnSelected("ML-Btm-0");
                }
              }
              onMouseDown={()=>{
                btnRotate("ML-Btm-0");
              }}
            >
              <path 
                className="Btm-btn-base"
                d="M 48 196 L 65 61 C 105 44 183 51 202 66 L 209 204 C 197 211 159 214 148 203 L 143 149 C 142 134 120 132 117 149 L 110 201 C 95 208 57 206 48 196"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-color"
                d="M 185 210 L 180 57 C 184 58 192 61 194 62 L 200 208 C 198 209 189 210 185 210"
                fill="#0cd900"
                stroke="none"
              />
            </svg>
          </div>
          <div className="ML-Btm-btn ML-Btm-1" id="ML-Btm-1">  
            <svg
              className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passBottoms("Btm_1");
                btnSelected("ML-Btm-1");
                }
              }
              onMouseDown={()=>{
                btnRotate("ML-Btm-1");
              }}
            >
              <path 
                className="Btm-btn-base"
                d="M 78 164 L 75 245 C 85 250 102 250 109 247 L 113 164 L 151 164 L 157 247 C 168 251 183 248 190 245 L 185 164"
                fill="#4e4a48"
                stroke="none"
              />
              <path 
                className="Btm-btn-color"
                d="M 98 249 L 101 205 C 88 193 93 169 113 169 L 109 247 C 107 248 102 249 98 249 L 157 247 L 151 169 C 166 168 180 186 164 203 L 168 249 C 166 249 159 248 157 247"
                fill="#0cd900"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 65 64 L 53 163 C 62 171 112 173 124 165 C 124 158 128 132 132 128 C 136 132 141 159 141 165 C 155 172 186 172 210 165 L 200 63 C 178 50 90 47 65 64"
                fill="#605e5c"
                stroke="none"
              />
            </svg>
          </div>
          <div className="ML-Btm-btn ML-Btm-2" id="ML-Btm-2">  
            <svg
              className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passBottoms("Btm_2");
                btnSelected("ML-Btm-2");
                }
              }
              onMouseDown={()=>{
                btnRotate("ML-Btm-2");
              }}
            >
              <path 
                className="Btm-btn-base"
                d="M 164 210 C 165 213 166 224 166 227 C 172 229 193 228 199 224 C 198 221 196 210 196 205"
                fill="#4e4a48"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 102 211 C 101 214 100 223 100 228 C 95 229 72 226 66 223 C 67 221 70 206 70 204"
                fill="#4e4a48"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 68 64 C 88 54 163 44 196 65 L 208 207 C 190 221 151 220 149 198 C 146 169 142 145 133 125 C 125 143 120 170 117 198 C 115 220 82 222 58 205"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 210 202 C 250 199 221 243 206 211 L 209 209 C 221 232 235 203 211 206"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d=" M 55 201 C 13 199 45 249 60 210 L 57 208 C 45 235 29 203 56 205"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-color"
                d="M 207 191 C 209 190 216 193 217 195 L 206 217 C 203 217 199 214 197 212"
                fill="#0cd900"
                stroke="none"
              />
              <path 
                className="Btm-btn-color"
                d="M 49 195 C 51 193 57 189 59 189 L 72 212 C 71 214 66 217 62 217"
                fill="#0cd900"
                stroke="none"
              />
            </svg>
          </div>
          <div className="ML-Btm-btn ML-Btm-3" id="ML-Btm-3">  
            <svg
              className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passBottoms("Btm_3");
                btnSelected("ML-Btm-3");
                }
              }
              onMouseDown={()=>{
                btnRotate("ML-Btm-3");
              }}
            >
              <path 
                className="Btm-btn-base"
                d="M 68 67 L 66 240 C 72 245 100 247 110 242 L 120 135 C 121 122 145 123 146 135 L 157 241 C 167 248 194 248 200 244 L 199 66 C 168 48 87 50 68 67"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-color"
                d="M 180 59 C 184 60 189 61 195 64 L 198 245 C 194 246 191 247 189 246"
                fill="#0cd900"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 101 244 L 111 131 C 113 107 150 103 154 131 L 167 245 C 163 244 160 243 157 241 L 146 135 C 145 123 121 122 120 135 L 110 242 C 108 243 103 244 101 244"
                fill="#747270"
                stroke="none"
              />
            </svg>
          </div>
          <div className="ML-Btm-btn ML-Btm-4" id="ML-Btm-4">  
            <svg
              className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passBottoms("Btm_4");
                btnSelected("ML-Btm-4");
                }
              }
              onMouseDown={()=>{
                btnRotate("ML-Btm-4");
              }}
            >
              <path 
                className="Btm-btn-color"
                d="M 67 69 C 101 53 173 53 199 68 L 215 215 C 198 222 165 223 143 214 C 143 202 140 141 134 133 C 129 141 126 202 126 215 C 108 223 74 224 53 215"
                fill="#0cd900"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 54 206 L 54 210 L 64 213 L 64 209 L 76 211 L 86 212 L 86 216 L 76 215 L 76 211 L 64 209"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 97 212 L 97 216 L 107 215 L 107 211 L 119 209 L 119 213 L 126 211 L 126 206 L 119 209 L 107 211"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 143 206 L 143 210 L 150 212 L 150 208 L 162 211 L 162 215 L 173 216 L 173 212 L 162 211 L 150 208"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 214 206 L 214 211 L 205 214 L 204 209 L 194 211 L 194 215 L 184 216 L 184 212 L 194 211 L 204 209"
                fill="#605e5c"
                stroke="none"
              />
            </svg>
          </div>
          <div className="close-btn" data-bs-dismiss="modal" aria-hidden="Close">
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
              <text className="svg-text-default" x="450" y="520" fill="white">つぎへ</text>
              <text className="svg-text-hover" x="410" y="540" fill="none">つぎへ</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default MLBottomsModal;