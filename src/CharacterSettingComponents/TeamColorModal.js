import { useRef, useEffect } from 'react';

const TeamColorModal = (props) => {
  const color0Ref = useRef();
  const color1Ref = useRef();
  const color2Ref = useRef();
  const color3Ref = useRef();
  const color4Ref = useRef();
  const color5Ref = useRef();
  
  useEffect(()=>{
    //選択されている色のボタンのクラス名を変更
    if (props.teamColor === "color_0") {
      color0Ref.current.className = "selected"
    } else if (props.teamColor === "color_1") {
      color1Ref.current.className = "selected"
    } else if (props.teamColor === "color_2") {
      color2Ref.current.className = "selected"
    } else if (props.teamColor === "color_3") {
      color3Ref.current.className = "selected"
    } else if (props.teamColor === "color_4") {
      color4Ref.current.className = "selected"
    } else if (props.teamColor === "color_5") {
      color5Ref.current.className = "selected"
    }

    console.log(props.teamColor)
    // 別の色が選択されていればクラス名を戻す
    if (color0Ref.current.className === "selected" && props.teamColor !== "color_0") {
      color0Ref.current.className = "color-btn" 
    }
    if (color1Ref.current.className === "selected" && props.teamColor !== "color_1") {
      color1Ref.current.className = "color-btn" 
    }
    if (color2Ref.current.className === "selected" && props.teamColor !== "color_2") {
      color2Ref.current.className = "color-btn" 
    }
    if (color3Ref.current.className === "selected" && props.teamColor !== "color_3") {
      color3Ref.current.className = "color-btn" 
    }
    if (color4Ref.current.className === "selected" && props.teamColor !== "color_4") {
      color4Ref.current.className = "color-btn" 
    }
    if (color5Ref.current.className === "selected" && props.teamColor !== "color_5") {
      color5Ref.current.className = "color-btn"
    }
  })

  
  return (
    <div className="modal fade" id="TeamColorModal" tabIndex="-1" aria-labelledby="SkinColorModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content font-type1 bg-secondary text-white">  
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">インクの色を選択</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="d-flex flex-wrap pt-3">  
            <div className="color-btn" ref={color0Ref}>  
              <svg
                className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
                onClick={()=>{
                  props.setTeamColor("color_0");
                }}
              >
                <path 
                  className="color-btn-default"
                  d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                  fill="#8618de"
                  stroke="none"
                />
                <path 
                  className="color-btn-hover"
                  d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                  fill="#8618de"
                  stroke="none"
                />
              </svg>
            </div>
            <div className="color-btn" ref={color1Ref}>  
              <svg
                className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
                onClick={()=>{
                  props.setTeamColor("color_1");
                }}
              >
                <path 
                  className="color-btn-default"
                  d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                  fill="#fc1b88"
                  stroke="none"
                />
                <path 
                  className="color-btn-hover"
                  d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                  fill="#fc1b88"
                  stroke="none"
                />
              </svg>
            </div>
            <div className="color-btn" ref={color2Ref}>
              <svg
                className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
                onClick={()=>{
                  props.setTeamColor("color_2");
                }}
              >
                <path 
                  className="color-btn-default"
                  d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                  fill="#ff763d"
                  stroke="none"
                />
                <path 
                  className="color-btn-hover"
                  d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                  fill="#ff763d"
                  stroke="none"
                />
              </svg>
            </div>
            <div className="color-btn" ref={color3Ref}>  
              <svg
                className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
                onClick={()=>{
                  props.setTeamColor("color_3");
                }}
              >
                <path 
                  className="color-btn-default"
                  d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                  fill="#0ed671"
                  stroke="none"
                />
                <path 
                  className="color-btn-hover"
                  d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                  fill="#0ed671"
                  stroke="none"
                />
              </svg>
            </div>
            <div className="color-btn" ref={color4Ref}>  
              <svg
                className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
                onClick={()=>{
                  props.setTeamColor("color_4");
                }}
              >
                <path 
                  className="color-btn-default"
                  d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                  fill="#2ba0ee"
                  stroke="none"
                />
                <path 
                  className="color-btn-hover"
                  d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                  fill="#2ba0ee"
                  stroke="none"
                />
              </svg>
            </div>
            <div className="color-btn" ref={color5Ref}>  
              <svg
                className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
                onClick={()=>{
                  props.setTeamColor("color_5");
                }}
              >
                <path 
                  className="color-btn-default"
                  d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                  fill="#ffb23d"
                  stroke="none"
                />
                <path 
                  className="color-btn-hover"
                  d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                  fill="#ffb23d"
                  stroke="none"
                />
              </svg>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-lg btn-dark font-type1 ms-auto" data-bs-toggle="modal" data-bs-target="#hairStyleModal" data-bs-dismiss="modal">
              もどる
            </button>
            <button type="button" className="btn-lg btn-dark font-type1 mx-auto" data-bs-dismiss="modal" aria-hidden="Close">
              とじる
            </button>
            <button type="button" className="btn-lg btn-dark font-type1 me-auto" data-bs-toggle="modal" data-bs-target="#BottomsModal" data-bs-dismiss="modal">
              つぎへ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamColorModal;