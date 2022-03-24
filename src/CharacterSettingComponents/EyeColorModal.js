// ClassNameのECはEyeColorの略を示す
import { useRef, useEffect } from 'react';

const EyeColorModal = (props) => {
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
    if (props.eyeColor === "color-0") {
      EC0Ref.current.className = "selected"
    } else if (props.eyeColor === "color-1") {
      EC1Ref.current.className = "selected"
    } else if (props.eyeColor === "color-2") {
      EC2Ref.current.className = "selected"
    } else if (props.eyeColor === "color-3") {
      EC3Ref.current.className = "selected"
    } else if (props.eyeColor === "color-4") {
      EC4Ref.current.className = "selected"
    } else if (props.eyeColor === "color-5") {
      EC5Ref.current.className = "selected"
    } else if (props.eyeColor === "color-6") {
      EC6Ref.current.className = "selected"
    } else if (props.eyeColor === "color-7") {
      EC7Ref.current.className = "selected"
    } else if (props.eyeColor === "color-8") {
      EC8Ref.current.className = "selected"
    } else if (props.eyeColor === "color-9") {
      EC9Ref.current.className = "selected"
    } else if (props.eyeColor === "color-10") {
      EC10Ref.current.className = "selected"
    } else if (props.eyeColor === "color-11") {
      EC11Ref.current.className = "selected"
    } else if (props.eyeColor === "color-12") {
      EC12Ref.current.className = "selected"
    } else if (props.eyeColor === "color-13") {
      EC13Ref.current.className = "selected"
    } 

    // 別の色が選択されていればクラス名を戻す
    if (EC0Ref.current.className === "selected" && props.eyeColor !== "color-0") {
      EC0Ref.current.className = "color-btn" 
    }
    if (EC1Ref.current.className === "selected" && props.eyeColor !== "color-1") {
      EC1Ref.current.className = "color-btn" 
    }
    if (EC2Ref.current.className === "selected" && props.eyeColor !== "color-2") {
      EC2Ref.current.className = "color-btn" 
    }
    if (EC3Ref.current.className === "selected" && props.eyeColor !== "color-3") {
      EC3Ref.current.className = "color-btn" 
    }
    if (EC4Ref.current.className === "selected" && props.eyeColor !== "color-4") {
      EC4Ref.current.className = "color-btn" 
    }
    if (EC5Ref.current.className === "selected" && props.eyeColor !== "color-5") {
      EC5Ref.current.className = "color-btn"
    }
    if (EC6Ref.current.className === "selected" && props.eyeColor !== "color-6") {
      EC6Ref.current.className = "color-btn" 
    }
    if (EC7Ref.current.className === "selected" && props.eyeColor !== "color-7") {
      EC7Ref.current.className = "color-btn" 
    }
    if (EC8Ref.current.className === "selected" && props.eyeColor !== "color-8") {
      EC8Ref.current.className = "color-btn" 
    }
    if (EC9Ref.current.className === "selected" && props.eyeColor !== "color-9") {
      EC9Ref.current.className = "color-btn" 
    }
    if (EC10Ref.current.className === "selected" && props.eyeColor !== "color-10") {
      EC10Ref.current.className = "color-btn" 
    }
    if (EC11Ref.current.className === "selected" && props.eyeColor !== "color-11") {
      EC11Ref.current.className = "color-btn" 
    }
    if (EC12Ref.current.className === "selected" && props.eyeColor !== "color-12") {
      EC12Ref.current.className = "color-btn" 
    }
    if (EC13Ref.current.className === "selected" && props.eyeColor !== "color-13") {
      EC13Ref.current.className = "color-btn" 
    }
  })

  return (
    <div className="modal fade" id="eyeColorModal" tabIndex="-1" aria-labelledby="SkinColorModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content font-type1 bg-secondary text-white">  
          <div className="modal-header">
            <h5 className="modal-title" id="weaponModalLabel">目の色を選択</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="d-flex flex-wrap">
          <div className="color-btn" ref={EC0Ref}>
            <svg
              className="color-btn-svg" width="110" height="100" viewBox="60 80 380 230"
              onClick={()=>{
                props.setEyeColor("color-0");
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
                props.setEyeColor("color-1");
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
                props.setEyeColor("color-2");
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
                props.setEyeColor("color-3");
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
                props.setEyeColor("color-4");
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
                props.setEyeColor("color-5");
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
                props.setEyeColor("color-6");
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
                props.setEyeColor("color-7");
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
                props.setEyeColor("color-8");
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
                props.setEyeColor("color-9");
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
                props.setEyeColor("color-10");
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
                props.setEyeColor("color-11");
              }}
            >
              <path 
                className="color-btn-default"
                d="m 144 150 C 182 89 227 131 275 97 C 350 52 497 162 413 244 C 384 270 392 306 330 301 C 260 290 267 312 228 306 C 109 287 112 202 144 150"
                fill="6c6a4e"
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
                props.setEyeColor("color-12");
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
                props.setEyeColor("color-13");
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
          <div className="modal-footer">
            <button type="button" className="btn-lg btn-dark font-type1 ms-auto" data-bs-toggle="modal" data-bs-target="#skinColorModal" data-bs-dismiss="modal">
              もどる
            </button>
            <button type="button" className="btn-lg btn-dark font-type1 mx-auto" data-bs-dismiss="modal" aria-hidden="Close">
              とじる
            </button>
            <button type="button" className="btn-lg btn-dark font-type1 me-auto" data-bs-toggle="modal" data-bs-target="#hairStyleModal" data-bs-dismiss="modal">
              つぎへ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeColorModal;