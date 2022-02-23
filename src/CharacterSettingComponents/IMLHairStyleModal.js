// ClassNameのHSはHairStyleの略

const IMLHairStyleModal = (props) => {
  //選択されているHSのボタンのクラス名を変更、別のHSが選択されていればクラス名を戻す
  const changeClassName = (HS) => {
    let target = document.getElementById(HS);
    target.className = `IML-HS-btn ${HS}`;
  };
  
  const btnSelected = (HS) => {
    let target = document.getElementById(HS);
    target.className = "selected";
    if (HS !== "IML-HS-0") {
      changeClassName("IML-HS-0");
    }
    if (HS !== "IML-HS-1") {
      changeClassName("IML-HS-1");
    }
    if (HS !== "IML-HS-2") {
      changeClassName("IML-HS-2");
    }
    if (HS !== "IML-HS-3") {
      changeClassName("IML-HS-3");
    }
    if (HS !== "IML-HS-4") {
      changeClassName("IML-HS-4");
    }
    if (HS !== "IML-HS-5") {
      changeClassName("IML-HS-5");
    }
    
  };
  
  // マウスのボタンを押し下げている間のみクラス名を変更
  const btnRotate = (HS)=> {
    let target = document.getElementById(HS);
    target.className = "rotate";
  };
  return (
    <div className="modal fade" id="IMLHairStyleModal" aria-hidden="true" aria-labelledby="IMLHairStyleModalLabel" tabindex="-1">  
      <div className="modal-dialog">
        <div className="modal-content bg-dark">  
          <div className="IML-HS-btn IML-HS-0" id="IML-HS-0">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="180" viewBox="0 -10 240 310"
              onClick={()=>{
                props.passHairStyle("Hair_0");
                btnSelected("IML-HS-0");
              }}
              onMouseDown={()=>{
                btnRotate("IML-HS-0");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 58 158 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 188 80 61 72 58 158"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 63 186 C 47 146 61 101 112 96 L 115 86 C 83 25 201 -18 184 35 L 178 55 C 215 60 209 75 189 95 C 183 101 178 106 165 106 C 204 128 200 166 188 189 C 184 149 184 134 145 145 C 135 148 125 150 104 143 C 73 130 69 157 63 186"
                fill="#ffb23d"
                stroke="none"
              />
              <path 
                className="HS-btn-hairband"
                d="M 111 95 C 105 81 150 75 149 98 C 137 94 125 93 111 95"
                fill="white"
                stroke="none"
              />
            </svg>
          </div>
          <div className="IML-HS-btn IML-HS-1" id="IML-HS-1">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="180" viewBox="0 -10 240 310"
              onClick={()=>{
                props.passHairStyle("Hair_1");
                btnSelected("IML-HS-1");
              }}
              onMouseDown={()=>{
                btnRotate("IML-HS-1");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 58 158 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 188 80 61 72 58 158"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 64 186 C 58 176 54 151 60 137 C 35 116 48 93 64 82 C 76 75 76 51 98 83 C 126 46 132 40 158 84 C 187 55 178 80 195 88 C 209 95 213 131 193 141 C 198 157 195 174 187 189 C 187 159 185 134 152 144 C 137 149 126 149 102 142 C 72 131 67 156 64 186"
                fill="#ffb23d"
                stroke="none"
              />
            </svg>
          </div>
          <div className="IML-HS-btn IML-HS-2" id="IML-HS-2">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="180" viewBox="0 -10 240 310"
              onClick={()=>{
                props.passHairStyle("Hair_2");
                btnSelected("IML-HS-2");
              }}
              onMouseDown={()=>{
                btnRotate("IML-HS-2");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 58 158 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 188 80 61 72 58 158"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 65 186 C 16 49 245 77 186 189 C 187 178 191 131 154 144 C 140 149 117 149 102 141 C 73 127 66 170 65 186"
                fill="#ffb23d"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 72 155 C 65 153 60 145 59 139 C 59 137 62 127 64 124 C 62 144 68 145 75 149 L 72 155 L 81 142 C 73 140 69 135 69 116 C 70 115 73 111 75 110 C 75 124 80 134 86 139 C 84 140 82 141 81 142 L 151 145 C 167 135 175 125 176 112 L 178 114 C 179 127 177 133 169 142 C 164 141 156 143 151 145 L 182 152 C 187 151 192 147 195 143 C 195 143 196 148 196 151 C 193 155 190 158 185 160 C 185 158 183 153 182 152 L 151 145 L 81 142"
                fill="#e8fcef"
                stroke="none"
              />
            </svg>
          </div>
          <div className="IML-HS-btn IML-HS-3" id="IML-HS-3">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="180" viewBox="0 -10 240 310"
              onClick={()=>{
                props.passHairStyle("Hair_3");
                btnSelected("IML-HS-3");
              }}
              onMouseDown={()=>{
                btnRotate("IML-HS-3");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 58 158 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 188 80 61 72 58 158"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 66 219 C 46 166 98 113 130 116 C 139 117 170 123 170 135 C 185 145 187 175 185 195 L 177 221 C 184.3333 223 191.6667 224 198 223 C 207 235 220 282 200 279 C 187 278 157 268 163 237 C 168 233 173 228 177 221 L 185 195 C 196 180 206 145 184 126 C 183 66 44 47 42 157 C 41 186 8 207 38 243 C 69 277 73 235 66 219"
                fill="#ffb23d"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 66 219 C 46 166 98 113 130 116 C 139 117 170 123 170 135 C 135 118 52 130 70 219 C 72 229 88 226 65 252 C 71 242 69 227 66 219"
                fill="#efefef"
                stroke="none"
              />
            </svg>
          </div>
          <div className="IML-HS-btn IML-HS-4" id="IML-HS-4">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="180" viewBox="0 -10 240 310"
              onClick={()=>{
                props.passHairStyle("Hair_4");
                btnSelected("IML-HS-4");
              }}
              onMouseDown={()=>{
                btnRotate("IML-HS-4");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 58 158 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 170 95 76 103 58 158"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 64 192 C 67 169 72 152 88 146 C 91 134 145 122 165 148 C 179 154 188 171 187 193 C 234 94 21 79 64 192"
                fill="#bdf0ce"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 89 145 L 86 122 C 84 106 91 102 98 97 C 101 99 105 104 107 108 C 110 102 115 96 119 92 C 123 94 127 99 129 104 C 132 100 136 96 140 93 C 145 97 149 104 151 109 C 154 105 159 102 162 100 C 168 105 172 115 170 123 L 165 148 C 153 139 142 137 127 141 C 114 134 100 138 89 145"
                fill="#ffb23d"
                stroke="none"
              />
              <path 
                className="HS-btn-hair-1"
                d="M 92 134 C 92 134 97 123 105 116 C 109 119 115 125 117 128 C 119 124 126 113 129 108 C 132 112 140 126 141 129 C 144 124 149 118 153 114 C 156 117 161 123 167 137 L 165 148 C 153 139 142 137 127 141 C 114 134 100 138 92 144 L 92 134"
                fill="#ffb84d"
                stroke="none"
              />
              
            </svg>
          </div>
          <div className="IML-HS-btn IML-HS-5" id="IML-HS-5">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="180" viewBox="0 -10 240 310"
              onClick={()=>{
                props.passHairStyle("Hair_5");
                btnSelected("IML-HS-5");
              }}
              onMouseDown={()=>{
                btnRotate("IML-HS-5");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 58 158 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 170 95 76 103 58 158"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 66 191 C 57 181 56 172 57 162 L 53 157 C 54 88 187 70 197 158 L 194 164 C 196 180 193 190 185 197 C 186 181 186 173 179 162 C 168 167 155 170 142 169 C 138 164 135 158 132 151 C 131 158 132 164 134 170 C 115 171 95 168 82 161 L 82 134 C 74 142 74 155 73 163 L 70 162 C 68 170 66 181 66 191"
                fill="#ffb23d"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 52 157 L 74 160 C 74 153 76 140 81 135 C 79 144 78 153 78 164 L 56 161 L 52 157"
                fill="#e8fcef"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 186 161 C 181 153 177 146 168 143 C 171 148 176 155 179 161 L 182 167 L 195 164 L 198 158 L 186 161"
                fill="#e8fcef"
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

export default IMLHairStyleModal;