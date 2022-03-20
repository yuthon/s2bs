
const SubSlot0 = (props) => {
  // モーダルを表示する関数
  const openGearModal = function() {
    let target0 = document.getElementById("mainSlotModal0");
    let target1 = document.getElementById("mainSlotModal1");
    let target2 = document.getElementById("mainSlotModal2");
    let target3 = document.getElementById("subSlotModal0");
    let target4 = document.getElementById("subSlotModal1");
    let target5 = document.getElementById("subSlotModal2");
    let target6 = document.getElementById("subSlotModal3");
    let target7 = document.getElementById("subSlotModal4");
    let target8 = document.getElementById("subSlotModal5");
    let target9 = document.getElementById("subSlotModal6");
    let target10 = document.getElementById("subSlotModal7");
    let target11 = document.getElementById("subSlotModal8");
    target0.style.display = "none";
    target1.style.display = "none";
    target2.style.display = "none";
    target3.style.display = "block";
    target4.style.display = "none";
    target5.style.display = "none";
    target6.style.display = "none";
    target7.style.display = "none";
    target8.style.display = "none";
    target9.style.display = "none";
    target10.style.display = "none";
    target11.style.display = "none";
  }

  return(
    <div
      className="ability-icon sub-slot subslot-left"
      onClick={()=>{
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

export default SubSlot0;