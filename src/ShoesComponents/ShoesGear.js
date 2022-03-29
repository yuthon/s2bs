

const ShoesGear = (props) => {
  let target;
  const openShoesGearModal = function() {
    target = document.getElementById("shoesGearModal")
    target.style.display = "block"
  }
  
  return (
    <div className="gear-img" onClick={()=>{openShoesGearModal()}}>
      <p className="gear-tooltip font-type2">クリックでギアを変更</p>
      <img className="gear-img" src={props.imagePath} alt=""/>
    </div>
  );
};


export default ShoesGear;