import React, { FC, ReactElement, useRef, useEffect } from 'react';

type HairStyleModalProps = {
  characterType: string,
  setHairStyle: React.Dispatch<React.SetStateAction<string>>,
  hairStyle: string,
}

const HairStyleModal: FC<HairStyleModalProps> = React.memo(({characterType, setHairStyle, hairStyle}): ReactElement => {
  const IMLHair0Ref = useRef<HTMLDivElement>(null!);
  const IMLHair1Ref = useRef<HTMLDivElement>(null!);
  const IMLHair2Ref = useRef<HTMLDivElement>(null!);
  const IMLHair3Ref = useRef<HTMLDivElement>(null!);
  const IMLHair4Ref = useRef<HTMLDivElement>(null!);
  const IMLHair5Ref = useRef<HTMLDivElement>(null!);
  const IFMLHair0Ref = useRef<HTMLDivElement>(null!);
  const IFMLHair1Ref = useRef<HTMLDivElement>(null!);
  const IFMLHair2Ref = useRef<HTMLDivElement>(null!);
  const IFMLHair3Ref = useRef<HTMLDivElement>(null!);
  const IFMLHair4Ref = useRef<HTMLDivElement>(null!);
  const IFMLHair5Ref = useRef<HTMLDivElement>(null!);
  const OFMLHair0Ref = useRef<HTMLDivElement>(null!);
  const OFMLHair1Ref = useRef<HTMLDivElement>(null!);
  const OMLHair0Ref = useRef<HTMLDivElement>(null!);
  const OMLHair1Ref = useRef<HTMLDivElement>(null!);
  
  let hairStyleModal;

  useEffect(()=>{
    if (characterType === "IFML") {
    //選択されているヘアスタイルのボタンのクラス名を変更
    if (hairStyle === "Hair_0") {
      IFMLHair0Ref.current.className = "HS-selected"
    } else if (hairStyle === "Hair_1") {
      IFMLHair1Ref.current.className = "HS-selected"
    } else if (hairStyle === "Hair_2") {
      IFMLHair2Ref.current.className = "HS-selected"
    } else if (hairStyle === "Hair_3") {
      IFMLHair3Ref.current.className = "HS-selected"
    } else if (hairStyle === "Hair_4") {
      IFMLHair4Ref.current.className = "HS-selected"
    } else if (hairStyle === "Hair_5") {
      IFMLHair5Ref.current.className = "HS-selected"
    }
    // 別のヘアスタイルが選択されていればクラス名を戻す
    if (IFMLHair0Ref.current.className === "HS-selected" && hairStyle!== "Hair_0") {
      IFMLHair0Ref.current.className = "HS-btn"
    }
    if (IFMLHair1Ref.current.className === "HS-selected" && hairStyle!== "Hair_1") {
      IFMLHair1Ref.current.className = "HS-btn"
    }
    if (IFMLHair2Ref.current.className === "HS-selected" && hairStyle!== "Hair_2") {
      IFMLHair2Ref.current.className = "HS-btn"
    }
    if (IFMLHair3Ref.current.className === "HS-selected" && hairStyle!== "Hair_3") {
      IFMLHair3Ref.current.className = "HS-btn"
    }
    if (IFMLHair4Ref.current.className === "HS-selected" && hairStyle!== "Hair_4") {
      IFMLHair4Ref.current.className = "HS-btn"
    }
    if (IFMLHair5Ref.current.className === "HS-selected" && hairStyle!== "Hair_5") {
      IFMLHair5Ref.current.className = "HS-btn"
    }
  } else if (characterType === "IML") {
    //選択されているヘアスタイルのボタンのクラス名を変更
    if (hairStyle === "Hair_0") {
      IMLHair0Ref.current.className = "HS-ML-selected"
    } else if (hairStyle === "Hair_1") {
      IMLHair1Ref.current.className = "HS-ML-selected"
    } else if (hairStyle === "Hair_2") {
      IMLHair2Ref.current.className = "HS-ML-selected"
    } else if (hairStyle === "Hair_3") {
      IMLHair3Ref.current.className = "HS-ML-selected"
    } else if (hairStyle === "Hair_4") {
      IMLHair4Ref.current.className = "HS-ML-selected"
    } else if (hairStyle === "Hair_5") {
      IMLHair5Ref.current.className = "HS-ML-selected"
    }
    // 別のヘアスタイルが選択されていればクラス名を戻す
    if (IMLHair0Ref.current.className === "HS-ML-selected" && hairStyle!== "Hair_0") {
      IMLHair0Ref.current.className = "HS-ML-btn"
    }
    if (IMLHair1Ref.current.className === "HS-ML-selected" && hairStyle!== "Hair_1") {
      IMLHair1Ref.current.className = "HS-ML-btn"
    }
    if (IMLHair2Ref.current.className === "HS-ML-selected" && hairStyle!== "Hair_2") {
      IMLHair2Ref.current.className = "HS-ML-btn"
    }
    if (IMLHair3Ref.current.className === "HS-ML-selected" && hairStyle!== "Hair_3") {
      IMLHair3Ref.current.className = "HS-ML-btn"
    }
    if (IMLHair4Ref.current.className === "HS-ML-selected" && hairStyle!== "Hair_4") {
      IMLHair4Ref.current.className = "HS-ML-btn"
    }
    if (IMLHair5Ref.current.className === "HS-ML-selected" && hairStyle!== "Hair_5") {
      IMLHair5Ref.current.className = "HS-ML-btn"
    }
  } else if (characterType === "OFML") {
    //選択されているヘアスタイルのボタンのクラス名を変更
    if (hairStyle === "Hair_0") {
      OFMLHair0Ref.current.className = "HS-selected"
    } else if (hairStyle === "Hair_1") {
      OFMLHair1Ref.current.className = "HS-selected"
    } else if (hairStyle === "Hair_2") {
      OFMLHair0Ref.current.className = "HS-selected"
    } else if (hairStyle === "Hair_3") {
      OFMLHair0Ref.current.className = "HS-selected"
    } else if (hairStyle === "Hair_4") {
      OFMLHair0Ref.current.className = "HS-selected"
    } else if (hairStyle === "Hair_5") {
      OFMLHair0Ref.current.className = "HS-selected"
    }
    // 別のヘアスタイルが選択されていればクラス名を戻す
    if (OFMLHair0Ref.current.className === "HS-selected" && hairStyle!== "Hair_0") {
      OFMLHair0Ref.current.className = "HS-btn"
    }
    if (OFMLHair1Ref.current.className === "HS-selected" && hairStyle!== "Hair_1") {
      OFMLHair1Ref.current.className = "HS-btn"
    }
  }　else if (characterType === "OML") {
    //選択されているヘアスタイルのボタンのクラス名を変更
    if (hairStyle === "Hair_0") {
      OMLHair0Ref.current.className = "HS-ML-selected"
    } else if (hairStyle === "Hair_1") {
      OMLHair1Ref.current.className = "HS-ML-selected"
    } else if (hairStyle === "Hair_2") {
      OMLHair0Ref.current.className = "HS-ML-selected"
    } else if (hairStyle === "Hair_3") {
      OMLHair0Ref.current.className = "HS-ML-selected"
    } else if (hairStyle === "Hair_4") {
      OMLHair0Ref.current.className = "HS-ML-selected"
    } else if (hairStyle === "Hair_5") {
      OMLHair0Ref.current.className = "HS-ML-selected"
    }
    // 別のヘアスタイルが選択されていればクラス名を戻す
    if (OMLHair0Ref.current.className === "HS-ML-selected" && hairStyle!== "Hair_0") {
      OMLHair0Ref.current.className = "HS-ML-btn"
    }
    if (OMLHair1Ref.current.className === "HS-ML-selected" && hairStyle!== "Hair_1") {
      OMLHair1Ref.current.className = "HS-ML-btn"
    }
  }
  })

    if (characterType === "IFML") {
      hairStyleModal = (
        <>
        <div className="HS-btn" ref={IFMLHair0Ref}>  
            <svg
              className="HS-btn-svg HS-svg" viewBox="0 10 240 310"
              onClick={()=>{
                setHairStyle("Hair_0");
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
          <div className="HS-btn" ref={IFMLHair1Ref}>  
            <svg
              className="HS-btn-svg HS-svg" viewBox="0 10 240 310"
              onClick={()=>{
                setHairStyle("Hair_1");
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
          <div className="HS-btn" ref={IFMLHair2Ref}>  
            <svg
              className="HS-btn-svg HS-svg" viewBox="0 10 240 310"
              onClick={()=>{
                setHairStyle("Hair_2");
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
          <div className="HS-btn" ref={IFMLHair3Ref}>  
            <svg
              className="HS-btn-svg HS-svg" viewBox="0 40 240 310"
              onClick={()=>{
                setHairStyle("Hair_3");
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
          <div className="HS-btn" ref={IFMLHair4Ref}>  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="140" viewBox="20 30 200 330"
              onClick={()=>{
                setHairStyle("Hair_4");
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
          <div className="HS-btn" ref={IFMLHair5Ref}>  
            <svg
              className="HS-btn-svg HS-svg" width="110" height="140" viewBox="20 30 200 330"
              onClick={()=>{
                setHairStyle("Hair_5");
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
          </>
      )
    } else if (characterType === "IML") {
      hairStyleModal = (
        <>
        <div className="HS-ML-btn" ref={IMLHair0Ref}>  
            <svg
              className="HS-btn-svg HS-svg" viewBox="0 -10 240 310"
              onClick={()=>{
                setHairStyle("Hair_0");
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
                fill="#0cd900"
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
          <div className="HS-ML-btn" ref={IMLHair1Ref}>  
            <svg
              className="HS-btn-svg HS-svg" viewBox="0 -10 240 310"
              onClick={()=>{
                setHairStyle("Hair_1");
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
                fill="#0cd900"
                stroke="none"
              />
            </svg>
          </div>
          <div className="HS-ML-btn" ref={IMLHair2Ref}>  
            <svg
              className="HS-btn-svg HS-svg" viewBox="0 -10 240 310"
              onClick={()=>{
                setHairStyle("Hair_2");
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
                fill="#0cd900"
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
          <div className="HS-ML-btn" ref={IMLHair3Ref}>  
            <svg
              className="HS-btn-svg HS-svg" viewBox="0 -10 240 310"
              onClick={()=>{
                setHairStyle("Hair_3");
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
                fill="#0cd900"
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
          <div className="HS-ML-btn" ref={IMLHair4Ref}>  
            <svg
              className="HS-btn-svg HS-svg" viewBox="0 -10 240 310"
              onClick={()=>{
                setHairStyle("Hair_4");
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
                fill="#0cd900"
                stroke="none"
              />
              <path 
                className="HS-btn-hair-1"
                d="M 92 134 C 92 134 97 123 105 116 C 109 119 115 125 117 128 C 119 124 126 113 129 108 C 132 112 140 126 141 129 C 144 124 149 118 153 114 C 156 117 161 123 167 137 L 165 148 C 153 139 142 137 127 141 C 114 134 100 138 92 144 L 92 134"
                fill="#0cd000"
                stroke="none"
              />
              
            </svg>
          </div>
          <div className="HS-ML-btn" ref={IMLHair5Ref}>  
            <svg
              className="HS-btn-svg HS-svg" viewBox="0 -10 240 310"
              onClick={()=>{
                setHairStyle("Hair_5");
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
                fill="#0cd900"
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
        </>
      )
    } else if (characterType === "OFML") {
      hairStyleModal=(
        <>
        <div className="HS-btn" ref={OFMLHair0Ref}>  
            <svg
              className="HS-btn-svg OFML-HS-svg" viewBox="20 0 210 300"
              onClick={()=>{
                setHairStyle("Hair_0");
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
          <div className="HS-btn" ref={OFMLHair1Ref}>  
            <svg
              className="HS-btn-svg OFML-HS-svg" viewBox="20 20 200 250"
              onClick={()=>{
                setHairStyle("Hair_1");
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
          </>
      )
    } else if (characterType === "OML") {
      hairStyleModal = (
        <>
        <div className="HS-ML-btn" ref={OMLHair0Ref}>  
            <svg
              className="HS-btn-svg OML-HS-svg" viewBox="20 0 210 300"
              onClick={()=>{
                setHairStyle("Hair_0");
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
                fill="#0cd900"
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
          <div className="HS-ML-btn" ref={OMLHair1Ref}>  
            <svg
              className="HS-btn-svg OML-HS-svg" viewBox="15 20 220 250"
              onClick={()=>{
                setHairStyle("Hair_1");
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
                fill="#0cd900"
                stroke="none"
              />
            </svg>
          </div>
        </>
      )
    }
  
  return (
    <div className="modal fade" id="hairStyleModal" aria-labelledby="SkinColorModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content font-type1 bg-secondary text-white">  
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">ヘアスタイルを選択 (4/6)</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="d-flex flex-wrap" style={{height: "400px"}}>
            {hairStyleModal}
          </div>
          <div className="toggle-between-modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="caret caret-active" viewBox="0 0 256 512" data-bs-toggle="modal" data-bs-target="#eyeColorModal" data-bs-dismiss="modal">
              {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path
                d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"
                fill="#dee2e6"
              />
            </svg>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#characterTypeModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#skinColorModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#eyeColorModal" data-bs-dismiss="modal"></div>
              <div className="page-active"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#teamColorModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#bottomsModal" data-bs-dismiss="modal"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="caret caret-active" viewBox="0 0 256 512" data-bs-toggle="modal" data-bs-target="#teamColorModal" data-bs-dismiss="modal">
              {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path
                d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
                fill="#dee2e6"
              />
            </svg>
          </div>
          <div className="modal-footer py-0">
            <button type="button" className="btn btn-dark font-type1 mx-auto" data-bs-dismiss="modal">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
});

export default HairStyleModal;