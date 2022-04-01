import React, { useRef, useEffect } from 'react';

const BottomsModal = React.memo((props) => {
  const FMLBtm0Ref = useRef();
  const FMLBtm1Ref = useRef();
  const FMLBtm2Ref = useRef();
  const FMLBtm3Ref = useRef();
  const FMLBtm4Ref = useRef();
  const MLBtm0Ref = useRef();
  const MLBtm1Ref = useRef();
  const MLBtm2Ref = useRef();
  const MLBtm3Ref = useRef();
  const MLBtm4Ref = useRef();

  
  let modalContent;
  
  useEffect(()=>{
    // キャラクターがボーイのとき　ボトムスはイカタコ共通
    if (props.characterType === "IML" || props.characterType === "OML") {
      //選択されているボトムスのボタンのクラス名を変更
      if (props.bottoms === "Btm_0") {
        MLBtm0Ref.current.className = "ML-Btm-selected"
      } else if (props.bottoms === "Btm_1") {
        MLBtm1Ref.current.className = "ML-Btm-selected"
      } else if (props.bottoms === "Btm_2") {
        MLBtm2Ref.current.className = "ML-Btm-selected"
      } else if (props.bottoms === "Btm_3") {
        MLBtm3Ref.current.className = "ML-Btm-selected"
      } else if (props.bottoms === "Btm_4") {
        MLBtm4Ref.current.className = "ML-Btm-selected"
      }
      // 別のボトムスが選択されていればクラス名を戻す
      if (MLBtm0Ref.current.className === "ML-Btm-selected" && props.bottoms !== "Btm_0") {
        MLBtm0Ref.current.className = "ML-Btm-btn"
      } else if (MLBtm1Ref.current.className === "ML-Btm-selected" && props.bottoms !== "Btm_1") {
        MLBtm1Ref.current.className = "ML-Btm-btn"
      } else if (MLBtm2Ref.current.className === "ML-Btm-selected" && props.bottoms !== "Btm_2") {
        MLBtm2Ref.current.className = "ML-Btm-btn"
      } else if (MLBtm3Ref.current.className === "ML-Btm-selected" && props.bottoms !== "Btm_3") {
        MLBtm3Ref.current.className = "ML-Btm-btn"
      } else if (MLBtm4Ref.current.className === "ML-Btm-selected" && props.bottoms !== "Btm_4") {
        MLBtm4Ref.current.className = "ML-Btm-btn"
      }
    }
    // キャラクターがガールのとき　ボトムスはイカタコ共通
    else if (props.characterType === "IFML" || props.characterType === "OFML") {
      //選択されているボトムスのボタンのクラス名を変更
      if (props.bottoms === "Btm_0") {
        FMLBtm0Ref.current.className = "FML-Btm-selected"
      } else if (props.bottoms === "Btm_1") {
        FMLBtm1Ref.current.className = "FML-Btm-selected"
      } else if (props.bottoms === "Btm_2") {
        FMLBtm2Ref.current.className = "FML-Btm-selected"
      } else if (props.bottoms === "Btm_3") {
        FMLBtm3Ref.current.className = "FML-Btm-selected"
      } else if (props.bottoms === "Btm_4") {
        FMLBtm4Ref.current.className = "FML-Btm-selected"
      }
      // 別のボトムスが選択されていればクラス名を戻す
      if (FMLBtm0Ref.current.className === "FML-Btm-selected" && props.bottoms !== "Btm_0") {
        FMLBtm0Ref.current.className = "FML-Btm-btn"
      } else if (FMLBtm1Ref.current.className === "FML-Btm-selected" && props.bottoms !== "Btm_1") {
        FMLBtm1Ref.current.className = "FML-Btm-btn"
      } else if (FMLBtm2Ref.current.className === "FML-Btm-selected" && props.bottoms !== "Btm_2") {
        FMLBtm2Ref.current.className = "FML-Btm-btn"
      } else if (FMLBtm3Ref.current.className === "FML-Btm-selected" && props.bottoms !== "Btm_3") {
        FMLBtm3Ref.current.className = "FML-Btm-btn"
      } else if (FMLBtm4Ref.current.className === "FML-Btm-selected" && props.bottoms !== "Btm_4") {
        FMLBtm4Ref.current.className = "FML-Btm-btn"
      }
    }
  })

  //　キャラクターがボーイである時のモーダルの中身
  if (props.characterType === "IML" || props.characterType === "OML") {
    modalContent = (
      <>
      <div className="ML-Btm-btn" ref={MLBtm0Ref}>
          <svg
            className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
            onClick={()=>{
              props.setBottoms("Btm_0");
              }
            }
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
        <div className="ML-Btm-btn" ref={MLBtm1Ref}>  
          <svg
            className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
            onClick={()=>{
              props.setBottoms("Btm_1");
              }
            }
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
        <div className="ML-Btm-btn" ref={MLBtm2Ref}>  
          <svg
            className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
            onClick={()=>{
              props.setBottoms("Btm_2");
              }
            }
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
        <div className="ML-Btm-btn" ref={MLBtm3Ref}>  
          <svg
            className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
            onClick={()=>{
              props.setBottoms("Btm_3");
              }
            }
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
        <div className="ML-Btm-btn" ref={MLBtm4Ref}>  
          <svg
            className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
            onClick={()=>{
              props.setBottoms("Btm_4");
              }
            }
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
      </>
    )
  } else if (props.characterType === "IFML" || props.characterType === "OFML") {
    modalContent = (
      <>
      <div className="FML-Btm-btn" ref={FMLBtm0Ref}>  
        <svg
          className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
          onClick={()=>{props.setBottoms("Btm_0");}}
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
      <div className="FML-Btm-btn" ref={FMLBtm1Ref}>  
        <svg
          className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
          onClick={()=>{props.setBottoms("Btm_1");}}
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
      <div className="FML-Btm-btn" ref={FMLBtm2Ref}>  
        <svg
          className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
          onClick={()=>{props.setBottoms("Btm_2");}}
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
      <div className="FML-Btm-btn" ref={FMLBtm3Ref}>  
        <svg
          className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
          onClick={()=>{props.setBottoms("Btm_3");}}
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
      <div className="FML-Btm-btn" ref={FMLBtm4Ref}>  
        <svg
          className="Btm-btn-svg Btm-svg" width="110" height="130" viewBox="20 0 210 300"
          onClick={()=>{props.setBottoms("Btm_4");}}
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
      </>
    )
  }

  return (
    <div className="modal fade" id="bottomsModal" tabIndex="-1" aria-labelledby="SkinColorModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content font-type1 bg-secondary text-white">  
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">ボトムスを選択 (6/6)</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="d-flex flex-wrap pt-3">
            {modalContent}
          </div>
          <div className="toggle-between-modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="caret caret-active" viewBox="0 0 256 512" data-bs-toggle="modal" data-bs-target="#teamColorModal" data-bs-dismiss="modal">
              {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path
                d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"
                fill="#dee2e6"
              />
            </svg>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#characterTypeModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#skinColorModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#eyeColorModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#hairStyleModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#teamColorModal" data-bs-dismiss="modal"></div>
              <div className="page-active"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="caret caret-inactive" viewBox="0 0 256 512">
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

export default BottomsModal;