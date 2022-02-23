// ClassNameのHSはHairStyleの略

const IFMLHairStyleModal = (props) => {
  //選択されているHSのボタンのクラス名を変更、別のHSが選択されていればクラス名を戻す
  const changeClassName = (HS) => {
    let target = document.getElementById(HS);
    target.className = `IFML-HS-btn ${HS}`;
  };
  
  const btnSelected = (HS) => {
    let target = document.getElementById(HS);
    target.className = "selected";
    if (HS !== "IFML-HS-0") {
      changeClassName("IFML-HS-0");
    }
    if (HS !== "IFML-HS-1") {
      changeClassName("IFML-HS-1");
    }
    if (HS !== "IFML-HS-2") {
      changeClassName("IFML-HS-2");
    }
    if (HS !== "IFML-HS-3") {
      changeClassName("IFML-HS-3");
    }
    if (HS !== "IFML-HS-4") {
      changeClassName("IFML-HS-4");
    }
    if (HS !== "IFML-HS-5") {
      changeClassName("IFML-HS-5");
    }
    
  };
  
  // マウスのボタンを押し下げている間のみクラス名を変更
  const btnRotate = (HS)=> {
    let target = document.getElementById(HS);
    target.className = "rotate";
  };
  
  return (
    <div className="modal fade" id="IFMLHairStyleModal" aria-hidden="true" aria-labelledby="IFMLHairStyleModalLabel" tabindex="-1">  
      <div className="modal-dialog">
        <div className="modal-content bg-dark">  
          <div className="IFML-HS-btn IFML-HS-0" id="IFML-HS-0">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="180" viewBox="0 -10 240 310"
              onClick={()=>{
                props.passHairStyle("Hair_0");
                btnSelected("IFML-HS-0");
              }}
              onMouseDown={()=>{
                btnRotate("IFML-HS-0");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 61 157 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 161 118 90 122 61 157"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 105 243 C 113 321 64 335 49 317 C 36 302 62 279 58 240 C 46 157 54 99 134 102 C 204 106 200 177 191 225 C 181 277 208 309 193 325 C 162 348 130 289 142 245 C 187 237 189 185 167 148 L 166 161 L 156 161 L 152 142 L 149 161 L 87 159 L 88 147 C 64 185 61 234 105 243"
                fill="#ff00b3"
                stroke="none"
              />
              
            </svg>
          </div>
          <div className="IFML-HS-btn IFML-HS-1" id="IFML-HS-1">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="180" viewBox="0 -10 240 310"
              onClick={()=>{
                props.passHairStyle("Hair_1");
                btnSelected("IFML-HS-1");
              }}
              onMouseDown={()=>{
                btnRotate("IFML-HS-1");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 61 157 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 161 118 90 122 61 157"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 91 239 C 89 286 24 276 33 242 C 37 229 51 229 50 177 C 50 80 194 70 202 169 C 202 237 208 225 214 242 C 231 285 157 289 160 239 C 185 232 189 187 170 148 L 169 160 L 107 158 L 107 141 C 103 146 102 152 101 158 L 88 157 L 87 146 C 65 184 61 223 91 239"
                fill="#ff00b3"
                stroke="none"
              />
            </svg>
          </div>
          <div className="IFML-HS-btn IFML-HS-2" id="IFML-HS-2">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="180" viewBox="0 -10 240 310"
              onClick={()=>{
                props.passHairStyle("Hair_2");
                btnSelected("IFML-HS-2");
              }}
              onMouseDown={()=>{
                btnRotate("IFML-HS-2");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 61 157 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 161 118 90 122 61 157"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 82 235 C 87 273 49 263 49 247 C 49 225 60 213 59 191 C 58 159 56 121 107 104 C 99 89 104 70 125 67 C 124 0 211 26 192 72 C 188 84 172 89 161 91 C 163 99 161 104 158 108 C 170 114 197 135 193 163 C 190 187 191 222 198 246 C 204 267 162 277 165 236 C 198 216 173 118 148 146 C 146 137 122 123 108 145 C 87 115 49 206 82 235"
                fill="#ff00b3"
                stroke="none"
              />
              <path 
                className="HS-btn-face"
                d="M 131 67 C 129 48 143 21 165 38 C 175 46 159 68 145 72 C 142 70 134 67 131 67"
                fill="white"
                stroke="none"
              />
            </svg>
          </div>
          <div className="IFML-HS-btn IFML-HS-3" id="IFML-HS-3">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="180" viewBox="0 -10 240 310"
              onClick={()=>{
                props.passHairStyle("Hair_3");
                btnSelected("IFML-HS-3");
              }}
              onMouseDown={()=>{
                btnRotate("IFML-HS-3");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 61 157 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 161 118 90 122 61 157"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-geso-0"
                d="M 90 149 C 117 115 196 130 181 201 L 172 169 C 137 155 132 142 90 149"
                fill="#fecddd"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 68 203 C 47 171 62 141 85 132 C 83 103 142 98 175 121 C 206 142 213 213 195 238 C 179 263 165 278 194 305 C 220 340 194 362 178 355 C 192 350 211 345 184 301 C 170 280 159 256 167 233 C 198 196 177 113 106 138 C 84 147 69 179 68 203"
                fill="#ff00b3"
                stroke="none"
              />
              
              <path 
                className="HS-btn-geso-1"
                d="M 146 243 C 141 280 174 275 165 307 C 152 352 180 363 192 349 C 212 333 183 295 178 286 C 165 271 162 252 167 233 C 163 237 152 242 146 243"
                fill="#fc91b2"
                stroke="none"
              />
            </svg>
          </div>
          <div className="IFML-HS-btn IFML-HS-4" id="IFML-HS-4">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="140" viewBox="20 50 200 330"
              onClick={()=>{
                props.passHairStyle("Hair_4");
                btnSelected("IFML-HS-4");
              }}
              onMouseDown={()=>{
                btnRotate("IFML-HS-4");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 61 157 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 161 118 90 122 61 157"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 57 217 C 42 205 53 188 59 180 C 65 171 52 167 44 175 C 38 180 29 186 17 187 L 17 173 C 37 176 30 166 21 158 C 11 148 25 128 32 130 C 38 118 61 115 63 129 L 74 133 C 80 115 151 98 182 136 L 191 134 C 191 119 220 116 228 136 C 255 153 207 180 235 185 L 230 197 C 220 193 211 186 203 176 C 197 168 185 176 193 187 C 205 200 197 223 185 224 C 174 225 188 199 171 155 C 168 148 155 136 127 146 C 85 132 80 152 73 175 C 68 194 74 226 57 217"
                fill="#ff00b3"
                stroke="none"
              />
              <path 
                className="HS-btn-hairband"
                d="M 63 128 C 67 128 71 129 75 131 L 180 134 C 184 133 187 132 191 133 C 196 140 206 160 191 164 C 190 152 186 141 180 134 L 75 131 C 69 137 63 146 62 161 C 46 155 59 133 63 128"
                fill="#fb69bd"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 37 159 C 21 144 37 121 57 138 C 42 137 37 143 37 159 L 34 182 C 28 183 24 183 17 182 L 17 189 C 26 189 29 187 34 182"
                fill="#fecddd"
                stroke="none"
              />
              <path 
                className="HS-btn-geso"
                d="M 214 158 C 231 156 235 133 217 124 C 223 137 222 151 214 158 L 223 164 C 213 166 209 171 204 178 C 207 181 210 184 213 186 C 210 177 216 169 223 164"
                fill="#fecddd"
                stroke="none"
              />
              
            </svg>
          </div>
          <div className="IFML-HS-btn IFML-HS-5" id="IFML-HS-5">  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="140" viewBox="20 50 200 330"
              onClick={()=>{
                props.passHairStyle("Hair_5");
                btnSelected("IFML-HS-5");
              }}
              onMouseDown={()=>{
                btnRotate("IFML-HS-5");
              }}
            >
              <path 
                className="HS-btn-face"
                d="M 61 157 C 47 170 34 183 23 190 C 16 195 36 226 70 218 C 87 253 160 255 177 221 C 210 231 235 203 225 197 C 218 193 204 178 195 163 C 161 118 90 122 61 157"
                fill="white"
                stroke="none"
              />
              <path 
                className="HS-btn-hair"
                d="M 55 160 C 66 88 187 80 197 165 C 199 193 190 222 197 268 C 200 282 208 304 198 309 L 173 324 C 155 334 166 279 167 256 C 168 241 184 167 166 149 L 167 177 L 86 174 L 89 147 C 73 159 77 224 81 263 C 83 283 88 331 71 320 L 44 302 C 34 295 55 265 55 229 C 55 206 51 183 55 160"
                fill="#ff00b3"
                stroke="none"
              />
              
            </svg>
          </div>
          <div className="close-btn">
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
          <div className="close-btn" data-bs-toggle="modal" data-bs-target="#FMLBottomsModal" data-bs-dismiss="modal">
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
              <text className="svg-text-default" x="450" y="520" fill="white">つぎへ</text>
              <text className="svg-text-hover" x="410" y="540" fill="none">つぎへ</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default IFMLHairStyleModal;