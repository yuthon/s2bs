//モーダルで選択されたギアの画像を表示するコンポーネント
const ClothesGear = (props) => {
  return(
    <div className="head-tooltip" data-bs-toggle="tooltip" data-bs-placement="right" title="クリックでギアを変更">
      <div className="gear-img" data-bs-toggle="modal" data-bs-target="#clothesGearModal" >
        <img className="gear-img" src={props.passImagePath} alt=""/>
      </div>
    </div>
  );
};

export default ClothesGear;