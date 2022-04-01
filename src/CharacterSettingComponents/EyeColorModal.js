// ClassNameのECはEyeColorの略を示す
import React, { useRef, useEffect } from 'react';

const EyeColorModal = React.memo((props) => {
  const EC0Ref = useRef();
  const EC1Ref = useRef();
  const EC2Ref = useRef();
  const EC3Ref = useRef();
  const EC4Ref = useRef();
  const EC5Ref = useRef();
  const EC6Ref = useRef();
  const EC7Ref = useRef();
  const EC8Ref = useRef();
  const EC9Ref = useRef();
  const EC10Ref = useRef();
  const EC11Ref = useRef();
  const EC12Ref = useRef();
  const EC13Ref = useRef();
  
  useEffect(()=>{
    //選択されている色のボタンのクラス名を変更
    if (props.eyeColor === "color_0") {
      EC0Ref.current.className = "selected"
    } else if (props.eyeColor === "color_1") {
      EC1Ref.current.className = "selected"
    } else if (props.eyeColor === "color_2") {
      EC2Ref.current.className = "selected"
    } else if (props.eyeColor === "color_3") {
      EC3Ref.current.className = "selected"
    } else if (props.eyeColor === "color_4") {
      EC4Ref.current.className = "selected"
    } else if (props.eyeColor === "color_5") {
      EC5Ref.current.className = "selected"
    } else if (props.eyeColor === "color_6") {
      EC6Ref.current.className = "selected"
    } else if (props.eyeColor === "color_7") {
      EC7Ref.current.className = "selected"
    } else if (props.eyeColor === "color_8") {
      EC8Ref.current.className = "selected"
    } else if (props.eyeColor === "color_9") {
      EC9Ref.current.className = "selected"
    } else if (props.eyeColor === "color_10") {
      EC10Ref.current.className = "selected"
    } else if (props.eyeColor === "color_11") {
      EC11Ref.current.className = "selected"
    } else if (props.eyeColor === "color_12") {
      EC12Ref.current.className = "selected"
    } else if (props.eyeColor === "color_13") {
      EC13Ref.current.className = "selected"
    } 

    // 別の色が選択されていればクラス名を戻す
    if (EC0Ref.current.className === "selected" && props.eyeColor !== "color_0") {
      EC0Ref.current.className = "color-btn" 
    }
    if (EC1Ref.current.className === "selected" && props.eyeColor !== "color_1") {
      EC1Ref.current.className = "color-btn" 
    }
    if (EC2Ref.current.className === "selected" && props.eyeColor !== "color_2") {
      EC2Ref.current.className = "color-btn" 
    }
    if (EC3Ref.current.className === "selected" && props.eyeColor !== "color_3") {
      EC3Ref.current.className = "color-btn" 
    }
    if (EC4Ref.current.className === "selected" && props.eyeColor !== "color_4") {
      EC4Ref.current.className = "color-btn" 
    }
    if (EC5Ref.current.className === "selected" && props.eyeColor !== "color_5") {
      EC5Ref.current.className = "color-btn"
    }
    if (EC6Ref.current.className === "selected" && props.eyeColor !== "color_6") {
      EC6Ref.current.className = "color-btn" 
    }
    if (EC7Ref.current.className === "selected" && props.eyeColor !== "color_7") {
      EC7Ref.current.className = "color-btn" 
    }
    if (EC8Ref.current.className === "selected" && props.eyeColor !== "color_8") {
      EC8Ref.current.className = "color-btn" 
    }
    if (EC9Ref.current.className === "selected" && props.eyeColor !== "color_9") {
      EC9Ref.current.className = "color-btn" 
    }
    if (EC10Ref.current.className === "selected" && props.eyeColor !== "color_10") {
      EC10Ref.current.className = "color-btn" 
    }
    if (EC11Ref.current.className === "selected" && props.eyeColor !== "color_11") {
      EC11Ref.current.className = "color-btn" 
    }
    if (EC12Ref.current.className === "selected" && props.eyeColor !== "color_12") {
      EC12Ref.current.className = "color-btn" 
    }
    if (EC13Ref.current.className === "selected" && props.eyeColor !== "color_13") {
      EC13Ref.current.className = "color-btn" 
    }
  })

  return (
    <div className="modal fade" id="eyeColorModal" tabIndex="-1" aria-labelledby="SkinColorModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content font-type1 bg-secondary text-white">  
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">目の色を選択 (3/6)</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="d-flex flex-wrap px-5" style={{height: "400px"}}>
          <div className="color-btn" ref={EC0Ref}>
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_0");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#0f18ae"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#0f18ae"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC1Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_1");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#01ac77"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#01ac77"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC2Ref}>
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_2");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#ae9601"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#ae9601"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC3Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_3");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#ec7919"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#ec7919"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC4Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_4");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#d91a1d"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#d91a1d"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC5Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_5");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#e121bd"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#e121bd"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC6Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_6");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#982aff"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#982aff"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC7Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_7");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#2a2c2c"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#2a2c2c"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC8Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_8");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#c2c4c2"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#c2c4c2"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC9Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_9");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#749257"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#749257"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC10Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_10");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#81a067"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#81a067"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC11Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_11");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#6c6a4e"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#6c6a4e"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC12Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_12");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#613b3a"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#613b3a"
                stroke="none"
              />
            </svg>
          </div>
          <div className="color-btn" ref={EC13Ref}>  
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color_13");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="#747c9d"
                stroke="none"
              />
              <path 
                className="color-btn-hover"
                d="m 280 98 C 268 137 296 140 304 108 C 315 70 384 74 367 134 L 393 125 C 386 97 429 86 435 115 C 443 144 404 158 393 125 L 367 134 C 360 157 374 175 401 158 C 433 140 461 205 415 220 C 401 223 381 211 373 235 C 367 255 422 253 394 294 C 375 319 343 306 339 276 C 337 258 300 256 318 307 C 330 337 252 358 260 294 C 266 257 231 254 230 294 C 227 347 156 324 185 275 C 200 248 173 246 159 271 C 133 307 74 235 129 217 C 168 209 140 193 123 192 L 111 198 C 123 225 88 239 74 221 C 59 199 99 173 111 198 L 123 192 C 99 190 113 122 155 166 C 173 184 196 151 159 141 C 124 130 169 77 189 106 L 180 85 C 155 91 157 61 172 57 C 194 50 204 78 180 85 L 189 106 C 209 143 222 128 217 104 C 211 58 289 61 280 98"
                fill="#747c9d"
                stroke="none"
              />
            </svg>
          </div>
          </div>
          <div className="toggle-between-modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="caret caret-active" viewBox="0 0 256 512" data-bs-toggle="modal" data-bs-target="#skinColorModal" data-bs-dismiss="modal">
              {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path
                d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"
                fill="#dee2e6"
              />
            </svg>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#characterTypeModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#skinColorModal" data-bs-dismiss="modal"></div>
              <div className="page-active"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#hairStyleModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#teamColorModal" data-bs-dismiss="modal"></div>
              <div className="page-inactive" data-bs-toggle="modal" data-bs-target="#bottomsModal" data-bs-dismiss="modal"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="caret caret-active" viewBox="0 0 256 512" data-bs-toggle="modal" data-bs-target="#hairStyleModal" data-bs-dismiss="modal">
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
  );
});

export default EyeColorModal;