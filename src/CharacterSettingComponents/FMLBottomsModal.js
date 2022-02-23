// ClassNameのBtmはBottomsの略

const FMLBottomsModal = (props) => {
  //選択されているBtmのボタンのクラス名を変更、別のBtmが選択されていればクラス名を戻す
  const changeClassName = (Btm) => {
    let target = document.getElementById(Btm);
    target.className = `FML-Btm-btn ${Btm}`;
  };
  
  const btnSelected = (Btm) => {
    let target = document.getElementById(Btm);
    target.className = "selected";
    if (Btm !== "FML-Btm-0") {
      changeClassName("FML-Btm-0");
    }
    if (Btm !== "FML-Btm-1") {
      changeClassName("FML-Btm-1");
    }
    if (Btm !== "FML-Btm-2") {
      changeClassName("FML-Btm-2");
    }
    if (Btm !== "FML-Btm-3") {
      changeClassName("FML-Btm-3");
    }
    if (Btm !== "FML-Btm-4") {
      changeClassName("FML-Btm-4");
    }
    
  };
  
  // マウスのボタンを押し下げている間のみクラス名を変更
  const btnRotate = (Btm)=> {
    let target = document.getElementById(Btm);
    target.className = "rotate";
  };
  
  return (
    <div className="modal fade" id="FMLBottomsModal" aria-hidden="true" aria-labelledby="FMLBottomsModalToggleLabel" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content container">
          <div className="FML-Btm-btn FML-Btm-0" id="FML-Btm-0">  
            <svg
              className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passBottoms("Btm_0");
                btnSelected("FML-Btm-0");
                }
              }
              onMouseDown={()=>{
                btnRotate("FML-Btm-0");
              }}
            >
              <path 
                className="Btm-btn-base"
                d="M 72 64 C 98 53 168 51 206 66 L 215 167 C 203 173 169 170 158 163 L 157 154 C 156 123 116 119 113 154 L 112 162 C 98 168 67 168 56 160"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-color"
                d="M 185 60 C 191 61 195.6667 62.6667 201 64 L 211 168 C 206 170 200 170 195 170"
                fill="#ff00b3"
                stroke="none"
              />
            </svg>
          </div>
          <div className="FML-Btm-btn FML-Btm-1" id="FML-Btm-1">  
            <svg
              className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passBottoms("Btm_1");
                btnSelected("FML-Btm-1");
                }
              }
              onMouseDown={()=>{
                btnRotate("FML-Btm-1");
              }}
            >
              <path 
                className="Btm-btn-base"
                d="M 65 159 L 62 189 C 79 195 99 195 113 191 L 115 166 L 159 165 L 160 191 C 176 196 198 195 213 189 L 210 162"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-color"
                d="M 63 69 C 93 56 175 52 212 68 L 233 161 C 193 179 77 173 43 162"
                fill="#ff00b3"
                stroke="none"
              />
              <path 
                className="Btm-btn-line"
                d="M 47 143 L 46 150 L 56 153 L 57 146 L 72 149 L 71 156 L 87 158 L 88 151 L 72 149 L 57 146"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-line"
                d="M 102 152 L 102 159 L 116 160 L 116 153 L 131 154 L 131 160 L 147 160 L 147 154 L 161 153 L 161 160 L 177 159 L 177 152 L 161 153 L 147 154 L 131 154 L 116 153"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-line"
                d="M 191 151 L 192 158 L 206 156 L 205 148 L 219 145 L 220 153 L 230 150 L 229 143 L 219 145 L 205 148"
                fill="#605e5c"
                stroke="none"
              />
            </svg>
          </div>
          <div className="FML-Btm-btn FML-Btm-2" id="FML-Btm-2">  
            <svg
              className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passBottoms("Btm_2");
                btnSelected("FML-Btm-2");
                }
              }
              onMouseDown={()=>{
                btnRotate("FML-Btm-2");
              }}
            >
              <path 
                className="Btm-btn-color"
                d="M 70 68 C 92 56 172 49 205 68 L 215 208 C 215 216 213 220 209 224 L 210 252 C 200 258 182 258 171 252 L 170 224 C 158 218 158 205 157 196 L 154 147 C 152 126 124 127 121 148 L 115 211 C 114 217 110 222 105 223 L 104 252 C 95 258 72 259 64 251 L 65 223 C 53 215 55 198 57 182"
                fill="#ff00b3"
                stroke="none"
              />
              <path 
                className="Btm-btn-line"
                d="M 177 226 L 178 255 L 182 256 L 181 227 L 188 227 L 189 256 L 193 256 L 192 227 L 199 227 L 200 255 L 204 254 L 203 226 L 199 227 L 192 227 L 188 227 L 181 227"
                fill="#534f4b"
                stroke="none"
              />
              <path 
                className="Btm-btn-line"
                d="M 72 225 L 71 255 L 75 256 L 76 226 L 83 227 L 82 257 L 86 257 L 87 227 L 95 226 L 94 256 L 98 255 L 99 225 L 95 226 L 87 227 L 83 227 L 76 226"
                fill="#534f4b"
                stroke="none"
              />
            </svg>
          </div>
          <div className="FML-Btm-btn FML-Btm-3" id="FML-Btm-3">  
            <svg
              className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passBottoms("Btm_3");
                btnSelected("FML-Btm-3");
                }
              }
              onMouseDown={()=>{
                btnRotate("FML-Btm-3");
              }}
            >
              <path 
                className="Btm-btn-base"
                d="M 76 68 C 103 48 174 51 197 67 L 204 249 C 204 253 166 255 164 245 L 147 144 C 144 130 129 128 127 144 L 112 245 C 111 254 67 254 67 245"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d=" M 104 250 C 106 250 111 248 112 245 L 127 144 C 129 128 144 130 147 144 L 164 245 C 165 249 172 251 174 251 L 154 143 C 151 122 123 117 119 144"
                fill="#747270"
                stroke="none"
              />
              <path 
                className="Btm-btn-color"
                d="M 180 60 C 185 61 193 64 196 67 L 204 249 C 204 250 200 251 198 251"
                fill="#ff00b3"
                stroke="none"
              />
            </svg>
          </div>
          <div className="FML-Btm-btn FML-Btm-4" id="FML-Btm-4">  
            <svg
              className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
              onClick={()=>{
                props.passBottoms("Btm_4");
                btnSelected("FML-Btm-4");
                }
              }
              onMouseDown={()=>{
                btnRotate("FML-Btm-4");
              }}
            >
              <path 
                className="Btm-btn-base"
                d="M 67 70 C 89 55 180 55 205 71 L 215 144 C 192 152 166 153 144 149 C 141 129 125 128 123 148 C 101 150 80 146 58 140"
                fill="#605e5c"
                stroke="none"
              />
              
              <path 
                className="Btm-btn-color"
                d="M 174 62 C 178 77 189 88 206 92 L 213 141 C 193 149 168 150 144 147 L 146 156 C 169 161 205 158 218 148 L 207 71 C 196 66 184 63 174 62"
                fill="#ff00b3"
                stroke="none"
              />
              <path 
                className="Btm-btn-color"
                d="M 102 61 C 101 74 85 88 67 92 L 61 137 C 80 147 101 148 123 147 L 122 155 C 103 159 68 152 55 142 L 64 71 C 74 65 88 62 102 61"
                fill="#ff00b3"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 70 68 L 68 84 C 81 82 90 71 93 62 C 85 63 76 65 70 68"
                fill="#605e5c"
                stroke="none"
              />
              <path 
                className="Btm-btn-base"
                d="M 183 63 C 186 75 195 82 204 84 L 202 69 C 199 68 190 64 183 63"
                fill="#605e5c"
                stroke="none"
              />
            </svg>
          </div>
          
          <div className="close-btn" data-bs-dismiss="modal" aria-hidden="Close">
            <svg 
              className="close-btn-svg" width="240" height="160" viewBox="-500 -142 2300 1300"
            >
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
            <svg 
              className="close-btn-svg" width="240" height="160" viewBox="-500 -142 2300 1300"
              onMouseDown={()=>{
                btnRotate("FML-Btm-0");
              }}
            >
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

export default FMLBottomsModal;