
const ClothesGear = (props) => {
  let target;
  const openClothesGearModal = function() {
    target = document.getElementById("clothesGearModal")
    target.style.display = "block"
  }
  
  return(
    <div className="gear-img" onClick={()=>{openClothesGearModal()}}>
      <p className="gear-tooltip font-type2">クリックでギアを変更</p>
      <img className="gear-img" src={props.imagePath} alt=""/>
    </div>
  );
};

export default ClothesGear;