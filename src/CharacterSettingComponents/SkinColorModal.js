// ClassNameのSCはSkinColorの略を示す
import { useRef, useEffect } from 'react';

const SkinColorModal = (props) => {
  
  const SC0Ref = useRef();
  const SC1Ref = useRef();
  const SC2Ref = useRef();
  const SC3Ref = useRef();
  const SC4Ref = useRef();
  const SC5Ref = useRef();
  const SC6Ref = useRef();
  
  
  useEffect(()=>{
    //選択されている色のボタンのクラス名を変更
    if (props.skinColor === "color_0") {
      SC0Ref.current.className = "selected"
    } else if (props.skinColor === "color_1") {
      SC1Ref.current.className = "selected"
    } else if (props.skinColor === "color_2") {
      SC2Ref.current.className = "selected"
    } else if (props.skinColor === "color_3") {
      SC3Ref.current.className = "selected"
    } else if (props.skinColor === "color_4") {
      SC4Ref.current.className = "selected"
    } else if (props.skinColor === "color_5") {
      SC5Ref.current.className = "selected"
    } else if (props.skinColor === "color_6") {
      SC6Ref.current.className = "selected"
    }

    // 別の色が選択されていればクラス名を戻す
    if (SC0Ref.current.className === "selected" && props.skinColor !== "color_0") {
      SC0Ref.current.className = "color-btn" 
    }
    if (SC1Ref.current.className === "selected" && props.skinColor !== "color_1") {
      SC1Ref.current.className = "color-btn" 
    }
    if (SC2Ref.current.className === "selected" && props.skinColor !== "color_2") {
      SC2Ref.current.className = "color-btn" 
    }
    if (SC3Ref.current.className === "selected" && props.skinColor !== "color_3") {
      SC3Ref.current.className = "color-btn" 
    }
    if (SC4Ref.current.className === "selected" && props.skinColor !== "color_4") {
      SC4Ref.current.className = "color-btn" 
    }
    if (SC5Ref.current.className === "selected" && props.skinColor !== "color_5") {
      SC5Ref.current.className = "color-btn" 
    }
    if (SC6Ref.current.className === "selected" && props.skinColor !== "color_6") {
      SC6Ref.current.className = "color-btn" 
    }
  })

  return (
    <div className="modal fade" id="skinColorModal" tabIndex="-1" aria-labelledby="SkinColorModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content font-type1 bg-secondary text-white">  
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">肌の色を選択</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="d-flex flex-wrap">
          <div className="color-btn" id="SC-0" ref={SC0Ref}>
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("color_0");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#fddfdb"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#fddfdb"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" id="SC-1" ref={SC1Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("color_1");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#ffcabb"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#ffcabb"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" id="SC-2" ref={SC2Ref}>
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("color_2");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#ffc29e"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#ffc29e"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" id="SC-3" ref={SC3Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("color_3");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#f58d70"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#f58d70"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" id="SC-4" ref={SC4Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("color_4");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#b44f37"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#b44f37"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" id="SC-5" ref={SC5Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("color_5");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#592a20"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#592a20"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" id="SC-6" ref={SC6Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("color_6");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#331110"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#331110"
                stroke="none"
              />
            </svg>
          </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-lg btn-dark font-type1 ms-auto" data-bs-toggle="modal" data-bs-target="#characterTypeModal" data-bs-dismiss="modal">
              もどる
            </button>
            <button type="button" className="btn-lg btn-dark font-type1 mx-auto" data-bs-dismiss="modal">
              とじる
            </button>
            <button type="button" className="btn-lg btn-dark font-type1 me-auto" data-bs-toggle="modal" data-bs-target="#eyeColorModal" data-bs-dismiss="modal">
              つぎへ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinColorModal;