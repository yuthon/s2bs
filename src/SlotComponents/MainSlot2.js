
const MainSlot2 = (props) => {
  // モーダルを表示する関数
  const openGearModal = function() {
    let target0 = document.getElementById("mainSlotModal0");
    let target1 = document.getElementById("mainSlotModal1");
    let target2 = document.getElementById("mainSlotModal2");
    let target3 = document.getElementById("subSlotModal");
    target0.style.display = "none";
    target1.style.display = "none";
    target2.style.display = "block";
    target3.style.display = "none";
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