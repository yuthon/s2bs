

const Weapon = (props) => {

  return (
    <div className="mb-2 d-flex" id="weapon-container">
      <div id="weapon-card">
        <div className="row">
          <div className="btn btn-sm col-5" data-bs-toggle="modal" data-bs-target="#weaponModal">
              <img src={props.weaponStatus.path} alt=""/>
          </div>
          <div className="col-7 py-2">
            <div className="weapon-sub-sp row">
              <div className="col-2">  
                <img src={props.weaponStatus.pathSub} className="img-sub-sp" alt=""/>
              </div>
              <p className="h5 text-white col-10">{props.weaponStatus.sub}</p>
            </div>
            <div className="weapon-sub-sp row my-1">
              <div className="col-2">  
                <img src={props.weaponStatus.pathSpecial} className="img-sub-sp" alt=""/>
              </div>
              <p className="h5 text-white col-10">{props.weaponStatus.special}</p>
            </div>
          </div>
        </div>
        <p className="h5 my-0 font-type1" id="weapon-footer">{props.weaponStatus.name}</p>
        </div>
      </div>
  );
};

export default Weapon;