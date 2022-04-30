import React, { FC, ReactElement, useRef, useEffect } from 'react';

type TeamColorModalProps = {
  teamColor: string,
  characterType: string,
  setTeamColor: React.Dispatch<React.SetStateAction<string>>
}

const TeamColorModal: FC<TeamColorModalProps> = React.memo(({teamColor, characterType ,setTeamColor}): ReactElement => {
  const color0Ref = useRef<HTMLDivElement>(null!);
  const color1Ref = useRef<HTMLDivElement>(null!);
  const color2Ref = useRef<HTMLDivElement>(null!);
  const color3Ref = useRef<HTMLDivElement>(null!);
  const color4Ref = useRef<HTMLDivElement>(null!);
  const color5Ref = useRef<HTMLDivElement>(null!);
  
  useEffect(()=>{
    //選択されている色のボタンのクラス名を変更
    if (teamColor === "color_0") {
      color0Ref.current.className = "selected"
    } else if (teamColor === "color_1") {
      color1Ref.current.className = "selected"
    } else if (teamColor === "color_2") {
      color2Ref.current.className = "selected"
    } else if (teamColor === "color_3") {
      color3Ref.current.className = "selected"
    } else if (teamColor === "color_4") {
      color4Ref.current.className = "selected"
    } else if (teamColor === "color_5") {
      color5Ref.current.className = "selected"
    }

    // 別の色が選択されていればクラス名を戻す
    if (color0Ref.current.className === "selected" && teamColor !== "color_0") {
      color0Ref.current.className = "color-btn" 
    }
    if (color1Ref.current.className === "selected" && teamColor !== "color_1") {
      color1Ref.current.className = "color-btn" 
    }
    if (color2Ref.current.className === "selected" && teamColor !== "color_2") {
      color2Ref.current.className = "color-btn" 
    }
    if (color3Ref.current.className === "selected" && teamColor !== "color_3") {
      color3Ref.current.className = "color-btn" 
    }
    if (color4Ref.current.className === "selected" && teamColor !== "color_4") {
      color4Ref.current.className = "color-btn" 
    }
    if (color5Ref.current.className === "selected" && teamColor !== "color_5") {
      color5Ref.current.className = "color-btn"
    }
  })

  
  return (
    <div className="modal fade" id="teamColorModal" aria-labelledby="SkinColorModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content font-type1 bg-secondary text-white">  
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">インクの色を選択 (5/6)</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="d-flex flex-wrap px-4 py-4" style={{height: "400px"}}>  
            <div className="color-btn" ref={color0Ref}>  
              <svg
                className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
                onClick={()=>{
                  setTeamColor("color_0");
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
                  setTeamColor("color_1");
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
                  setTeamColor("color_2");
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
                  setTeamColor("color_3");
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
                  setTeamColor("color_4");
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
                  setTeamColor("color_5");
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
          <div className="toggle-between-modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="caret caret-active" viewBox="0 0 256 512" data-bs-toggle="modal" data-bs-target="#hairStyleModal" data-bs-dismiss="modal">
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
              <div className="page-active"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#bottomsModal" data-bs-dismiss="modal"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="caret caret-active" viewBox="0 0 256 512" data-bs-toggle="modal" data-bs-target="#bottomsModal" data-bs-dismiss="modal">
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

export default TeamColorModal;