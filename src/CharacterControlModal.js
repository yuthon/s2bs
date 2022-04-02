import React, {useEffect, useRef } from 'react';

const CharacterControlModal = React.memo((props) => {
  const rotateBtnRef = useRef();
  const zoomBtnRef = useRef();
  
  const toggleRotate = function() {
    if (rotateBtnRef.current.className === "turned-on") {
      rotateBtnRef.current.className = "turned-off"
      props.setRotateState(false);
    } else if (rotateBtnRef.current.className === "turned-off") {
      rotateBtnRef.current.className = "turned-on"
      props.setRotateState(true);
    }
  }
  const toggleZoom = function() {
    if (zoomBtnRef.current.className === "turned-on") {
      zoomBtnRef.current.className = "turned-off"
      props.setZoomState(false);
    } else if (zoomBtnRef.current.className === "turned-off") {
      zoomBtnRef.current.className = "turned-on"
      props.setZoomState(true);
    }
  }

  // propsの値に応じてスイッチの状態を変更
  useEffect(()=>{
    if (props.isZoomEnabled) {
      zoomBtnRef.current.className="turned-on"
    } else {
      zoomBtnRef.current.className="turned-off"
    }
    if (props.isRotateEnabled) {
      rotateBtnRef.current.className="turned-on"
    } else {
      rotateBtnRef.current.className="turned-off"
    }
  })

  return (
    <div className="modal fade" id="characterControlModal" tabIndex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-secondary text-white font-type2">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">キャラクターの操作設定</h4>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <p className="h5">左クリックでドラッグ : キャラクターを回転</p>
            <div className="row">
              <p className="col-6 text-end">on/off :</p>
              <div className="col-6 px-0">
                <div className="turned-off" ref={rotateBtnRef} onClick={()=>{toggleRotate();}}>
                  <div className="switch-base"></div>
                  <div id="switch-circle"></div>
                </div>
              </div>
            </div>
            <p className="h5">マウスホイール : キャラクターのズーム</p>
            <div className="row">
              <p className="col-6 text-end">on/off :</p>
              <div className="col-6 px-0">
                <div className="turned-off" ref={zoomBtnRef} onClick={()=>{toggleZoom();}}>
                  <div className="switch-base"></div>
                  <div id="switch-circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary m-auto" data-bs-dismiss="modal">とじる</button>
          </div>
        </div>
      </div>
    </div>
  )
});

export default CharacterControlModal;