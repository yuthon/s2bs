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
  
  //選択されているSCのボタンのクラス名を変更、別のSCが選択されていればクラス名を戻す
  const changeClassName = (SC) => {
    let target = document.getElementById(SC);
    target.className = `SC-btn ${SC}`;
  };
  
  useEffect(()=>{
    //選択されている色のボタンのクラス名を変更
    let target = document.getElementById(props.skinColor);
    target.className="selected"
    // 別の色が選択されていればクラス名を戻す
    if (SC0Ref.current.className === "selected" && props.skinColor !== "SC-0") {
      changeClassName("SC-0");
    }
    if (SC1Ref.current.className === "selected" && props.skinColor !== "SC-1") {
      changeClassName("SC-1");
    }
    if (SC2Ref.current.className === "selected" && props.skinColor !== "SC-2") {
      changeClassName("SC-2");
    }
    if (SC3Ref.current.className === "selected" && props.skinColor !== "SC-3") {
      changeClassName("SC-3");
    }
    if (SC4Ref.current.className === "selected" && props.skinColor !== "SC-4") {
      changeClassName("SC-4");
    }
    if (SC5Ref.current.className === "selected" && props.skinColor !== "SC-5") {
      changeClassName("SC-5");
    }
    if (SC6Ref.current.className === "selected" && props.skinColor !== "SC-6") {
      changeClassName("SC-6");
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
          <div className="SC-btn SC-0" id="SC-0" ref={SC0Ref}>
            <svg
              className="SC-btn-svg SC-svg-0" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("SC-0");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#fddfdb"
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
          <div className="SC-btn SC-1" id="SC-1" ref={SC1Ref}>  
            <svg
              className="SC-btn-svg SC-svg-1" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("SC-1");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#ffcabb"
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
          <div className="SC-btn SC-2" id="SC-2" ref={SC2Ref}>
            <svg
              className="SC-btn-svg SC-svg-2" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("SC-2");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#ffc29e"
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
          <div className="SC-btn SC-3" id="SC-3" ref={SC3Ref}>  
            <svg
              className="SC-btn-svg SC-svg-3" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("SC-3");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#f58d70"
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
          <div className="SC-btn SC-4" id="SC-4" ref={SC4Ref}>  
            <svg
              className="SC-btn-svg SC-svg-4" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("SC-4");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#b44f37"
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
          <div className="SC-btn SC-5" id="SC-5" ref={SC5Ref}>  
            <svg
              className="SC-btn-svg SC-svg-5" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("SC-5");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#592a20"
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
          <div className="SC-btn SC-6" id="SC-6" ref={SC6Ref}>  
            <svg
              className="SC-btn-svg SC-svg-6" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setSkinColor("SC-6");
              }}
            >
              <path 
                className="SC-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#331110"
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
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-lg btn-dark font-type1 ms-auto" data-bs-dismiss="modal" aria-hidden="Close">
              とじる
            </button>
            <button type="button" className="btn-lg btn-dark font-type1 me-auto" data-bs-toggle="modal" data-bs-target="#skinColorModal" data-bs-dismiss="modal">
              つぎへ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinColorModal;