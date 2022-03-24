const TeamColorModal = (props) => {
  //選択されているSCのボタンのクラス名を変更、別のSCが選択されていればクラス名を戻す
  const changeClassName = (SC) => {
    let target = document.getElementById(SC);
    target.className = `SC-btn ${SC}`;
  };
  
  const btnSelected = (SC) => {
    let target = document.getElementById(SC);
    target.className = "selected";
    if (SC !== "SC-0") {
      changeClassName("SC-0");
    }
    if (SC !== "SC-1") {
      changeClassName("SC-1");
    }
    if (SC !== "SC-2") {
      changeClassName("SC-2");
    }
    if (SC !== "SC-3") {
      changeClassName("SC-3");
    }
    if (SC !== "SC-4") {
      changeClassName("SC-4");
    }
    if (SC !== "SC-5") {
      changeClassName("SC-5");
    }
    if (SC !== "SC-6") {
      changeClassName("SC-6");
    }
  };
  
  // マウスのボタンを押し下げている間のみクラス名を変更
  const btnAnimate = (CT)=> {
    let target = document.getElementById(CT);
    target.className = "animate";
  };
  
  let buttonNext;
  
  buttonNext = (
    <div className="close-btn" data-bs-toggle="modal" data-bs-target={`#${props.characterType}HairStyleModal`} data-bs-dismiss="modal">
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
  );
  
  return (
    <div className="modal fade" id="skinColorModal" tabIndex="-1" aria-labelledby="SkinColorModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content container">  
          <div className="SC-btn SC-0" id="SC-0">  
            <svg
              className="SC-btn-svg SC-svg-0" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setTeamColor({r:0.238,g:0.009,b:0.730});
                props.setDarkColor({r:0.023,g:0.014,b:0.037});
                btnSelected("SC-0")
              }}
              onMouseDown={()=>{
                btnAnimate("SC-0");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#8618de"
                stroke="none"
              />
              <path 
                className="SC-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="none"
                stroke="none"
              />
            </svg>
          </div>
          <div className="SC-btn SC-1" id="SC-1">  
            <svg
              className="SC-btn-svg SC-svg-1" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setTeamColor({r:0.973,g:0.011,b:0.246});
                props.setDarkColor({r:0.068,g:0.007,b:0.026});
                btnSelected("SC-1")
              }}
              onMouseDown={()=>{
                btnAnimate("SC-1");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#fc1b88"
                stroke="none"
              />
              <path 
                className="SC-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="none"
                stroke="none"
              />
            </svg>
          </div>
          <div className="SC-btn SC-2" id="SC-2">
            <svg
              className="SC-btn-svg SC-svg-2" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setTeamColor({r:1,g:0.181,b:0.047});
                props.setDarkColor({r:0.053,g:0.016,b:0.012});
                btnSelected("SC-2");
              }}
              onMouseDown={()=>{
                btnAnimate("SC-2");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#ff763d"
                stroke="none"
              />
              <path 
                className="SC-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="none"
                stroke="none"
              />
            </svg>
          </div>
          <div className="SC-btn SC-3" id="SC-3">  
            <svg
              className="SC-btn-svg SC-svg-3" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setTeamColor({r:0.004,g:0.672,b:0.165});
                props.setDarkColor({r:0.018,g:0.028,b:0.015});
                btnSelected("SC-3");
              }}
              onMouseDown={()=>{
                btnAnimate("SC-3");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#0ed671"
                stroke="none"
              />
              <path 
                className="SC-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="none"
                stroke="none"
              />
            </svg>
          </div>
          <div className="SC-btn SC-4" id="SC-4">  
            <svg
              className="SC-btn-svg SC-svg-4" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setTeamColor({r:0.024,g:0.452,b:0.855});
                props.setDarkColor({r:0.01,g:0.018,b:0.021});
                btnSelected("SC-4");
              }}
              onMouseDown={()=>{
                btnAnimate("SC-4");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#2ba0ee"
                stroke="none"
              />
              <path 
                className="SC-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="none"
                stroke="none"
              />
            </svg>
          </div>
          <div className="SC-btn SC-5" id="SC-5">  
            <svg
              className="SC-btn-svg SC-svg-5" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setTeamColor({r:0.024,g:0.452,b:0.855});
                props.setDarkColor({r:0.01,g:0.018,b:0.021});
                btnSelected("SC-5");
              }}
              onMouseDown={()=>{
                btnAnimate("SC-5");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#ffb23d"
                stroke="none"
              />
              <path 
                className="SC-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="none"
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
          <div>
            {buttonNext}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamColorModal;