

const Weapon = (props) => {

  return (
    <div className="mb-2" id="weapon-card">
      <div className="row">
        <div className="col-5" data-bs-toggle="modal" data-bs-target="#weaponModal" id="weaponModal-trigger">
          <img style={{width:"8rem", height:"8rem"}} src={props.weaponStatus.path} alt=""/>
          <p className="weaponModal-tooltip font-type2">クリックでブキを変更</p>
        </div>
        <div className="col-7 py-2">
          <div className="weapon-sub-sp row">
            <div className="col-2">  
              <img src={props.weaponStatus.pathSub} alt=""/>
            </div>
            <p className="h5 text-white col-10">{props.weaponStatus.sub}</p>
          </div>
          <div className="weapon-sub-sp row my-1">
            <div className="col-2">  
              <img src={props.weaponStatus.pathSpecial} alt=""/>
            </div>
            <p className="h5 text-white col-10">{props.weaponStatus.special}</p>
          </div>
        </div>
      </div>
      <p className="h5 my-0 font-type1" id="weapon-footer">{props.weaponStatus.name}</p>
    </div>
  );
};

export default Weapon;