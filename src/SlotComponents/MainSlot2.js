
const MainSlot2 = (props) => {
  // モーダルを表示する関数
  const openGearModal = function() {
    let target = document.getElementById("mainSlotModal2")
    target.style.display = "block"
  }
  return(
    <div className="ability-icon main-slot" onClick={()=>{openGearModal()}}>
      <div className="tooltip-top-arrow">
        <p className="slot-tooltip font-type2">クリックでギアパワーを変更</p>
      </div>
      <img className="mainslot-img" src={props.imagePath} alt=""/>
    </div>
    );
  };

export default MainSlot2;