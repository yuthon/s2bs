
const GearIcon = (props) => {
  
  return (
    <div
      className="gear-icon"
      onClick={()=>{
        props.setChosenGear(props.gear);
        }
      }
    > 
      <div className="gear-icon-tooltip-arrow">
        <div className="tooltip-container">
          <span className="gear-icon-tooltip font-type2">{props.gear.name}</span>
        </div>
      </div>
      <img className="brand-img-small" src={props.brandImgPath} alt=""/>
      <img className="gear-icon-img" src={props.gear.path} alt=""/>
    </div>
  )
}

export default GearIcon;