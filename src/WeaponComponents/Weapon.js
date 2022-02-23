
const Weapon = (props) => {
  return (
    <div className="btn weapon-tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="クリックでブキを変更">  
      <div className="btn btn-sm" data-bs-toggle="modal" data-bs-target="#weaponModal">
          <img src={props.weaponStatus.path} alt=""/>
          <p>{props.weaponStatus.name}</p>
      </div>
    </div>
  );
};

export default Weapon;