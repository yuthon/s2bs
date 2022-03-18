
const SubSlot4 = (props) => {
  // モーダルを表示する関数
  const openGearModal = function() {
    let target = document.getElementById("subSlotModal")
    target.style.display = "block"
  }

  return(
    <div
      className="ability-icon sub-slot subslot-mid"
      onClick={()=>{
        props.setSubSlotNumber(4);
        openGearModal();
      }}
    >
      <div className="tooltip-top-arrow">
        <p className="slot-tooltip font-type2">クリックでギアパワーを変更</p>
      </div>
      <img className="subslot-img" src={props.imagePath} alt=""/>
    </div>
  );
};

export default SubSlot4;