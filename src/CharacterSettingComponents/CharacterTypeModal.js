
// CTはcharacterTypeの略
import React, { useRef, useEffect } from 'react';


const CharacterSettingModal = React.memo((props) => {

  const IFMLRef = useRef();
  const IMLRef = useRef();
  const OFMLRef = useRef();
  const OMLRef = useRef();
  
  useEffect(()=>{
    //選択されているキャラクタータイプのボタンのクラス名を変更
    if (props.characterType === "IFML") {
      IFMLRef.current.className = "CT-selected"
    } else if (props.characterType === "IML") {
      IMLRef.current.className = "CT-selected"
    } else if (props.characterType === "OFML") {
      OFMLRef.current.className = "CT-selected"
    } else if (props.characterType === "OML") {
      OMLRef.current.className = "CT-selected"
    }
    // 別のキャラクタータイプが選択されていればクラス名を戻す
    if (IFMLRef.current.className === "CT-selected" && props.characterType !== "IFML") {
      IFMLRef.current.className = "CT-btn"
    }
    if (IMLRef.current.className === "CT-selected" && props.characterType !== "IML") {
      IMLRef.current.className = "CT-btn"
    }
    if (OFMLRef.current.className === "CT-selected" && props.characterType !== "OFML") {
      OFMLRef.current.className = "CT-btn"
    }
    if (OMLRef.current.className === "CT-selected" && props.characterType !== "OML") {
      OMLRef.current.className = "CT-btn"
    }
  })
  
  return (
    <div className="modal fade" id="characterTypeModal" aria-hidden="true" aria-labelledby="characterTypeModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog modal-md modal-dialog-centered ">
        <div className="modal-content font-type1 bg-secondary text-white">
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">キャラクタータイプを選択 (1/6)</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="container-fluid d-flex flex-wrap px-0" style={{height: "400px"}}>
            <div className="CT-btn" id="IFML" ref={IFMLRef}>
              <svg 
                className="CT-btn-svg" viewBox="-500 -142 2300 1300"
                onClick={()=>{;
                  props.setCharacterType("IFML");
                }}
              >
                <path 
                  className="CT-btn-default"
                  d="m 220 144 C 423 19 609 67 773 166 C 902 225 952 170 1051 181 C 1266 200 1457 363 1354 611 C 1307 728 1141 820 974 753 C 804 705 748 836 531 843 C 4 869 -61 328 220 144"
                  fill="#6926bb"
                  stroke="none"
                />
                <path
                  className="CT-btn-hover"
                  d="m 86 466 C 78 372 -183 508 -182 363 L -289 419 C -293 491 -412 477 -421 433 C -427 378 -296 358 -289 419 L -182 363 C -119 224 121 455 122 320 C 123 270 -181 297 -182 161 C -184 94 -38 0 101 127 C 132 168 263 262 305 184 C 320 118 145 112 213 21 L 142 2 C 112 82 -14 41 -12 -10 L 29 -100 C -17 -112 15 -151 51 -142 C 107 -125 68 -91 29 -100 L -12 -10 C -2 -90 163 -72 142 2 L 200 -53 C 141 -52 130 -119 203 -119 C 269 -112 269 -62 200 -53 L 142 2 L 213 21 C 283 -43 399 15 403 81 C 404 139 559 158 522 52 C 515 14 338 -111 595 -139 C 769 -133 616 16 651 84 C 684 129 811 138 783 16 C 767 -113 1040 -48 906 80 C 863 135 1051 207 1069 0 C 1113 -179 1549 -80 1270 82 C 1113 149 1099 234 1240 220 C 1334 185 1291 92 1484 112 C 1618 139 1543 256 1331 274 C 1259 274 1272 390 1425 310 L 1607 230 C 1621 174 1731 185 1727 242 C 1723 293 1602 279 1607 230 L 1425 310 C 1501 270 1625 388 1427 398 C 1281 379 1299 525 1475 476 C 1742 351 1879 673 1453 567 C 1287 516 1234 633 1445 632 L 1640 654 C 1644 597 1769 613 1761 661 C 1756 715 1643 715 1640 654 L 1671 750 C 1667 710 1745 709 1751 742 C 1756 775 1678 790 1671 750 L 1640 654 L 1445 632 C 1611 641 1512 769 1388 716 C 1196 602 1104 745 1342 790 C 1514 841 1380 982 1241 877 C 1106 685 920 835 1106 952 L 1193 1030 C 1215 971 1299 1008 1290 1046 C 1276 1095 1183 1075 1193 1030 L 1106 952 C 1244 1048 1008 1159 973 992 C 973 825 730 853 800 984 C 851 1100 588 1104 646 969 C 683 853 433 865 495 1035 C 551 1157 149 1153 357 956 C 426 910 301 766 202 923 C 138 1017 -106 902 157 809 C 232 773 104 706 -10 827 C -113 908 -295 769 -55 707 C 149 683 140 542 -62 642 C -298 712 -385 456 -57 507 C 11 525 101 539 86 466"
                  fill="none"
                  stroke="none"
                />
                <text className="CT-text-default" x="370" y="520" fill="white">イカガール</text>
                <text className="CT-text-hover" x="280" y="540" fill="none">イカガール</text>
              </svg>
            </div>
            <div className="CT-btn" id="IML" ref={IMLRef}>
              <svg 
                className="CT-btn-svg" viewBox="-500 -142 2300 1300"
                onClick={()=>{
                  props.setCharacterType("IML");
                }}
              >
                <path 
                  className="CT-btn-default"
                  d="m 220 144 C 423 19 609 67 773 166 C 902 225 952 170 1051 181 C 1266 200 1457 363 1354 611 C 1307 728 1141 820 974 753 C 804 705 748 836 531 843 C 4 869 -61 328 220 144"
                  fill="#6926bb"
                  stroke="none"
                />
                <path
                  className="CT-btn-hover"
                  d="m 86 466 C 78 372 -183 508 -182 363 L -289 419 C -293 491 -412 477 -421 433 C -427 378 -296 358 -289 419 L -182 363 C -119 224 121 455 122 320 C 123 270 -181 297 -182 161 C -184 94 -38 0 101 127 C 132 168 263 262 305 184 C 320 118 145 112 213 21 L 142 2 C 112 82 -14 41 -12 -10 L 29 -100 C -17 -112 15 -151 51 -142 C 107 -125 68 -91 29 -100 L -12 -10 C -2 -90 163 -72 142 2 L 200 -53 C 141 -52 130 -119 203 -119 C 269 -112 269 -62 200 -53 L 142 2 L 213 21 C 283 -43 399 15 403 81 C 404 139 559 158 522 52 C 515 14 338 -111 595 -139 C 769 -133 616 16 651 84 C 684 129 811 138 783 16 C 767 -113 1040 -48 906 80 C 863 135 1051 207 1069 0 C 1113 -179 1549 -80 1270 82 C 1113 149 1099 234 1240 220 C 1334 185 1291 92 1484 112 C 1618 139 1543 256 1331 274 C 1259 274 1272 390 1425 310 L 1607 230 C 1621 174 1731 185 1727 242 C 1723 293 1602 279 1607 230 L 1425 310 C 1501 270 1625 388 1427 398 C 1281 379 1299 525 1475 476 C 1742 351 1879 673 1453 567 C 1287 516 1234 633 1445 632 L 1640 654 C 1644 597 1769 613 1761 661 C 1756 715 1643 715 1640 654 L 1671 750 C 1667 710 1745 709 1751 742 C 1756 775 1678 790 1671 750 L 1640 654 L 1445 632 C 1611 641 1512 769 1388 716 C 1196 602 1104 745 1342 790 C 1514 841 1380 982 1241 877 C 1106 685 920 835 1106 952 L 1193 1030 C 1215 971 1299 1008 1290 1046 C 1276 1095 1183 1075 1193 1030 L 1106 952 C 1244 1048 1008 1159 973 992 C 973 825 730 853 800 984 C 851 1100 588 1104 646 969 C 683 853 433 865 495 1035 C 551 1157 149 1153 357 956 C 426 910 301 766 202 923 C 138 1017 -106 902 157 809 C 232 773 104 706 -10 827 C -113 908 -295 769 -55 707 C 149 683 140 542 -62 642 C -298 712 -385 456 -57 507 C 11 525 101 539 86 466"
                  fill="none"
                  stroke="none"
                />
                <text className="CT-text-default" x="370" y="520" fill="white">イカボーイ</text>
                <text className="CT-text-hover" x="280" y="540" fill="none">イカボーイ</text>
              </svg>
            </div>
            <div className="CT-btn" id="OFML" ref={OFMLRef}>
              <svg 
                className="CT-btn-svg" viewBox="-500 -142 2300 1300"
                onClick={()=>{
                  props.setCharacterType("OFML");
                }}
              >
                <path 
                  className="CT-btn-default"
                  d="m 220 144 C 423 19 609 67 773 166 C 902 225 952 170 1051 181 C 1266 200 1457 363 1354 611 C 1307 728 1141 820 974 753 C 804 705 748 836 531 843 C 4 869 -61 328 220 144"
                  fill="#6926bb"
                  stroke="none"
                />
                <path
                  className="CT-btn-hover"
                  d="m 86 466 C 78 372 -183 508 -182 363 L -289 419 C -293 491 -412 477 -421 433 C -427 378 -296 358 -289 419 L -182 363 C -119 224 121 455 122 320 C 123 270 -181 297 -182 161 C -184 94 -38 0 101 127 C 132 168 263 262 305 184 C 320 118 145 112 213 21 L 142 2 C 112 82 -14 41 -12 -10 L 29 -100 C -17 -112 15 -151 51 -142 C 107 -125 68 -91 29 -100 L -12 -10 C -2 -90 163 -72 142 2 L 200 -53 C 141 -52 130 -119 203 -119 C 269 -112 269 -62 200 -53 L 142 2 L 213 21 C 283 -43 399 15 403 81 C 404 139 559 158 522 52 C 515 14 338 -111 595 -139 C 769 -133 616 16 651 84 C 684 129 811 138 783 16 C 767 -113 1040 -48 906 80 C 863 135 1051 207 1069 0 C 1113 -179 1549 -80 1270 82 C 1113 149 1099 234 1240 220 C 1334 185 1291 92 1484 112 C 1618 139 1543 256 1331 274 C 1259 274 1272 390 1425 310 L 1607 230 C 1621 174 1731 185 1727 242 C 1723 293 1602 279 1607 230 L 1425 310 C 1501 270 1625 388 1427 398 C 1281 379 1299 525 1475 476 C 1742 351 1879 673 1453 567 C 1287 516 1234 633 1445 632 L 1640 654 C 1644 597 1769 613 1761 661 C 1756 715 1643 715 1640 654 L 1671 750 C 1667 710 1745 709 1751 742 C 1756 775 1678 790 1671 750 L 1640 654 L 1445 632 C 1611 641 1512 769 1388 716 C 1196 602 1104 745 1342 790 C 1514 841 1380 982 1241 877 C 1106 685 920 835 1106 952 L 1193 1030 C 1215 971 1299 1008 1290 1046 C 1276 1095 1183 1075 1193 1030 L 1106 952 C 1244 1048 1008 1159 973 992 C 973 825 730 853 800 984 C 851 1100 588 1104 646 969 C 683 853 433 865 495 1035 C 551 1157 149 1153 357 956 C 426 910 301 766 202 923 C 138 1017 -106 902 157 809 C 232 773 104 706 -10 827 C -113 908 -295 769 -55 707 C 149 683 140 542 -62 642 C -298 712 -385 456 -57 507 C 11 525 101 539 86 466"
                  fill="none"
                  stroke="none"
                />
                <text className="CT-text-default" x="370" y="520" fill="white">タコガール</text>
                <text className="CT-text-hover" x="280" y="540" fill="none">タコガール</text>
              </svg>
            </div>
            <div className="CT-btn" id="OML" ref={OMLRef}>
              <svg 
                className="CT-btn-svg" viewBox="-500 -142 2300 1300"
                onClick={()=>{
                  props.setCharacterType("OML");
                }}
              >
                <path 
                  className="CT-btn-default"
                  d="m 220 144 C 423 19 609 67 773 166 C 902 225 952 170 1051 181 C 1266 200 1457 363 1354 611 C 1307 728 1141 820 974 753 C 804 705 748 836 531 843 C 4 869 -61 328 220 144"
                  fill="#6926bb"
                  stroke="none"
                />
                <path
                  className="CT-btn-hover"
                  d="m 86 466 C 78 372 -183 508 -182 363 L -289 419 C -293 491 -412 477 -421 433 C -427 378 -296 358 -289 419 L -182 363 C -119 224 121 455 122 320 C 123 270 -181 297 -182 161 C -184 94 -38 0 101 127 C 132 168 263 262 305 184 C 320 118 145 112 213 21 L 142 2 C 112 82 -14 41 -12 -10 L 29 -100 C -17 -112 15 -151 51 -142 C 107 -125 68 -91 29 -100 L -12 -10 C -2 -90 163 -72 142 2 L 200 -53 C 141 -52 130 -119 203 -119 C 269 -112 269 -62 200 -53 L 142 2 L 213 21 C 283 -43 399 15 403 81 C 404 139 559 158 522 52 C 515 14 338 -111 595 -139 C 769 -133 616 16 651 84 C 684 129 811 138 783 16 C 767 -113 1040 -48 906 80 C 863 135 1051 207 1069 0 C 1113 -179 1549 -80 1270 82 C 1113 149 1099 234 1240 220 C 1334 185 1291 92 1484 112 C 1618 139 1543 256 1331 274 C 1259 274 1272 390 1425 310 L 1607 230 C 1621 174 1731 185 1727 242 C 1723 293 1602 279 1607 230 L 1425 310 C 1501 270 1625 388 1427 398 C 1281 379 1299 525 1475 476 C 1742 351 1879 673 1453 567 C 1287 516 1234 633 1445 632 L 1640 654 C 1644 597 1769 613 1761 661 C 1756 715 1643 715 1640 654 L 1671 750 C 1667 710 1745 709 1751 742 C 1756 775 1678 790 1671 750 L 1640 654 L 1445 632 C 1611 641 1512 769 1388 716 C 1196 602 1104 745 1342 790 C 1514 841 1380 982 1241 877 C 1106 685 920 835 1106 952 L 1193 1030 C 1215 971 1299 1008 1290 1046 C 1276 1095 1183 1075 1193 1030 L 1106 952 C 1244 1048 1008 1159 973 992 C 973 825 730 853 800 984 C 851 1100 588 1104 646 969 C 683 853 433 865 495 1035 C 551 1157 149 1153 357 956 C 426 910 301 766 202 923 C 138 1017 -106 902 157 809 C 232 773 104 706 -10 827 C -113 908 -295 769 -55 707 C 149 683 140 542 -62 642 C -298 712 -385 456 -57 507 C 11 525 101 539 86 466"
                  fill="none"
                  stroke="none"
                />
                <text className="CT-text-default" x="370" y="520" fill="white">タコボーイ</text>
                <text className="CT-text-hover" x="280" y="540" fill="none">タコボーイ</text>
              </svg>
            </div>
          </div>
          <div className="toggle-between-modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="caret caret-inactive" viewBox="0 0 256 512">
              {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path
                d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"
                fill="#dee2e6"
              />
            </svg>
              <div className="page-active"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#skinColorModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#eyeColorModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#hairStyleModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#teamColorModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#bottomsModal" data-bs-dismiss="modal"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="caret caret-active" viewBox="0 0 256 512" data-bs-toggle="modal" data-bs-target="#skinColorModal" data-bs-dismiss="modal">
              {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path
                d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
                fill="#dee2e6"
              />
            </svg>
          </div>
          <div className="modal-footer py-0">
            <button type="button" className="btn btn-dark font-type1 mx-auto" data-bs-dismiss="modal" aria-hidden="Close">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
});

export default CharacterSettingModal;