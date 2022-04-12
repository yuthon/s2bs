import { memo, useState, useRef } from 'react';
import { weaponStatus, weaponSortedByName, weaponSortedBySub, weaponSortedBySpe } from './weaponData';

const WeaponModal = memo((props) => {
  // 表示する配列
  const [weaponArray, setArray] = useState(weaponStatus);
  
  const ref = useRef();

  // 選択された並び順に応じてstateを変更
  const selectBox = function() {
    let target = ref.current;
    if (target.value === "main") {
      setArray(weaponStatus);
    } else if (target.value === "name") {
      setArray(weaponSortedByName);
    } else if (target.value === "sub") {
      setArray(weaponSortedBySub);
    } else if (target.value === "spe") {
      setArray(weaponSortedBySpe);
    }
  };


  return (
    <div className="modal fade" id="weaponModal" tabIndex="-1" aria-labelledby="weaponModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content wpModalbg text-white bg-secondary">
          <div className="modal-header">
            <div className="d-flex">
              <h3 className="modal-title" id="weaponModalLabel">ブキを選択</h3>
              <h5 className="my-auto ms-3">※キャラクターのモデルには反映されません</h5>
            </div>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="container pt-2 pb-1">
            <div className="d-flex align-items-center">
              <div className="select-index">  
                <span className="align-middle">並び替え :</span>
              </div>
              <div className="selectbox">
                <select className="form-select" ref = {ref} aria-label="sort" id="select-box" onChange={()=>{selectBox();}}>
                    <option value="main" defaultValue>メインウェポン</option>
                    <option value="sub">サブウェポン</option>
                    <option value="spe">スペシャルウェポン</option>
                    <option value="name">名前</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap px-0 px-lg-5">
            {weaponArray.map(
                (weapon, index) => 
              <div
                key={index}
                className="weapon-icon"
                onClick={()=>{
                  props.setWeaponStatus(weapon);
                  }
                }
                data-bs-dismiss="modal"
              >
                <div className="weapon-icon-tooltip-container">
                  <p className="weapon-icon-tooltip font-type2">{weapon.name}</p>
                </div>
                <img src = {weapon.path} className="img-weapon" alt=""/>
                <div className="row align-items-center justify-content-around sub-sp-bg">
                  <div className="sub-sp">
                    <img src={weapon.pathSub} className="img-sub-sp" alt=""/>
                  </div>
                  <div className="sub-sp">
                    <img src={weapon.pathSpecial} className="img-sub-sp" alt=""/>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-lg btn-dark m-auto OK-btn m-auto" data-bs-dismiss="modal">とじる</button>
          </div>
        </div>
      </div>
    </div>  
  );
});

export default WeaponModal;