import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';



const Model = (props) => {
  const gltf = useLoader(
    GLTFLoader,
    'splModel042.glb',
    loader => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco-gltf/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
  
  gltf.scene.traverse( function(object) {
    object.frustumCulled = false;
  });
  
  let mixer;
  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    // gltf.animations.forEach(clip => {
    //   const action = mixer.clipAction(clip)
    //   action.play();
    // });
    if (props.CT === "IFML") {  
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
    }
    else if (props.CT === "IML") {
      const action = mixer.clipAction(gltf.animations[1]);
      action.play();
    }
    else if (props.CT === "OFML") {  
      const action = mixer.clipAction(gltf.animations[2]);
      action.play();
    }
    else if (props.CT === "OML") {  
      const action = mixer.clipAction(gltf.animations[3]);
      action.play();
    }
    
  }
  
  
  
  useFrame((state, delta) => {
    mixer?.update(delta);
  });
  
  gltf.scene.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });
  
  console.log(mixer);
  
  //モデルの配列は読み込まれるごとにランダムなので、nameで整列しておく
  gltf.scene.children[0].children.sort((a, b) => (a.name > b.name) ? 1 : -1);
  //どのオブジェクトを非表示にするか確認するため、整列した配列を出力
  console.log(gltf.scene);
  
  // 透明のマテリアルのdepthWriteを書き換え
  // for (let i = 0; i < gltf.scene.children[0].children.length - 1; i++) {
  //   if (gltf.scene.children[0].children[i].material.transparent) {
  //     gltf.scene.children[0].children[i].material.depthWrite = true;
  //   }
  // }

  // モデル
  let armature = gltf.scene.children[0]
  
  // 肌の色
  let skinColor = props.skinColor;

  // イカガール
  // Eyelid
  armature.children[535].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[536].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[537].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[538].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[539].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  // Body
  armature.children[599].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[600].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)

  // イカボーイ
  // Eyelid
  armature.children[609].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[610].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[611].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  // Body
  armature.children[674].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[675].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)

  // オクトガール
  // Eyelid
  armature.children[815].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[816].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[817].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  // Body
  armature.children[834].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[835].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)

  // オクトボーイ
  // Eyelid
  armature.children[845].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[846].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[847].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  // Body
  armature.children[893].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  armature.children[894].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)


  // キャラクタータイプ
  let characterType = props.characterType;
  // 髪型
  let hairStyle = props.hairStyle;
  // インクの色
  let teamColor = props.teamColor;
  // 目の色
  let eyeColor = props.eyeColor
  // ボトムス
  let bottoms = props.bottoms;

  // アタマギアの種類を定義
  const defineHeadGearType = function() {
    if (props.headGear.indexOf("BS") > -1) {
      return "BS";
    } else if (props.headGear.indexOf("HB") > -1) {
      return "HB";
    } else if (props.headGear.indexOf("BN") > -1) {
      return "BN";
    } else if (props.headGear.indexOf("HP") > -1) {
      return "HP";
    } else if (props.headGear.indexOf("KN") > -1) {
      return "KN";
    } else if (props.headGear.indexOf("H0") > -1) {
      return "H0";
    } else if (props.headGear.indexOf("H1") > -1) {
      return "H1";
    } else if (props.headGear.indexOf("H2") > -1) {
      return "H2";
    } else if (props.headGear.indexOf("H3") > -1) {
      return "H3";
    } else if (props.headGear.indexOf("C0") > -1) {
      return "C0";
    } else if (props.headGear.indexOf("C1") > -1) {
      return "C1";
    } else if (props.headGear.indexOf("M0") > -1) {
      return "M0";
    } else if (props.headGear.indexOf("M1") > -1) {
      return "M1";
    } else if (props.headGear.indexOf("V0") > -1) {
      return "V0";
    } else if (props.headGear.indexOf("V1") > -1) {
      return "V1";
    } else if (props.headGear.indexOf("V2") > -1) {
      return "V2";
    } else if (props.headGear.indexOf("V3") > -1) {
      return "V3";
    } else if (props.headGear.indexOf("V4") > -1) {
      return "V4";
    }
  };
  console.log(props.headGear)
  let headGearType = defineHeadGearType();
  
  if (props.CT === "IFML" || props.CT === "OFML") {
   
    for (let i = 0; i < gltf.scene.children[0].children.length; i++) {
      let modelName = gltf.scene.children[0].children[i].name;
      //キャラクター本体
      if (modelName.indexOf(`${props.CT}_M_Body_EarFolded`) > -1) {
        if (props.headGear.indexOf("EF") > -1) {
          gltf.scene.children[0].children[i].visible = true;
          // 肌の色を設定
          // gltf.scene.children[0].children[i].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
        } else {
          gltf.scene.children[0].children[i].visible = false;
        }
      } 
      else if (modelName.indexOf(`${props.CT}_M_Body`) > -1) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // 目
      else if (
        modelName.indexOf(`${props.CT}_Eye`) > -1
      ) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // 髪型
      else if (modelName.indexOf(`${props.CT}_${props.hairStyle}`) > -1 && modelName.indexOf(`${headGearType}`) > -1) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // OFMLでStateに該当する髪型がない時の処理
      else if (
        props.CT === "OFML" &&
        modelName.indexOf("OFML_Hair_0") > -1 &&
        modelName.indexOf(`${headGearType}`) > -1 &&
        props.hairStyle !== "Hair_0" &&
        props.hairStyle !== "Hair_1"
      ) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // ボトムス
      else if (modelName.indexOf(`Female_${props.bottoms}`) > -1) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // アタマギア
      else if (modelName.indexOf(`Hed_${props.headGear}`) > -1) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // フクギア
      else if (
        modelName.indexOf(`Female_Clt_${props.clothesGear}`) > -1 || 
        modelName.indexOf(`All_Clt_${props.clothesGear}`) > -1
      ) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // クツギア
      else if (modelName.indexOf(`Shs_${props.shoesGear}`) > -1) {
        gltf.scene.children[0].children[i].visible = true;
      }
      else {
        gltf.scene.children[0].children[i].visible = false;
      }
    }
  } else if (props.CT === "IML" || props.CT === "OML") {
    for (let i = 0; i < gltf.scene.children[0].children.length; i++) {
      let modelName = gltf.scene.children[0].children[i].name;
      //キャラクター本体
      if (modelName.indexOf(`${props.CT}_M_Body_EarFolded`) > -1) {
        if (props.headGear.indexOf("EF") > -1) {
          gltf.scene.children[0].children[i].visible = true;
          // 肌の色を設定
          gltf.scene.children[0].children[i].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
          console.log("eee")
        } else {
          gltf.scene.children[0].children[i].visible = false;
        }
      } 
      else if (modelName.indexOf(`${props.CT}_M_Body`) > -1) {
        if (props.headGear.indexOf("EF") === -1) {
          gltf.scene.children[0].children[i].visible = true;
          // 肌の色を設定
          gltf.scene.children[0].children[i].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
        } else {
          gltf.scene.children[0].children[i].visible = false;
        }
      }
      // 目
      else if (
        modelName.indexOf(`${props.CT}_Eye`) > -1
      ) {
        gltf.scene.children[0].children[i].visible = true;
      }
      
      else if (
        modelName.indexOf(`${props.CT}_Eyelid_Outer_Fill`) > -1
      ) {
        gltf.scene.children[0].children[i].visible = false;
      }
      else if (
        modelName.indexOf(`${props.CT}_Eyelid_Outer`) > -1
      ) {
        gltf.scene.children[0].children[i].visible = true;
        gltf.scene.children[0].children[i].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
      }
      
      // 髪型
      else if (modelName.indexOf(`${props.CT}_${props.hairStyle}`) > -1 && modelName.indexOf(`${headGearType}`) > -1) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // OMLでStateに該当する髪型がない時の処理
      else if (
        props.CT === "OML" &&
        modelName.indexOf("OML_Hair_0") > -1 &&
        modelName.indexOf(`${headGearType}`) > -1 &&
        props.hairStyle !== "Hair_0" &&
        props.hairStyle !== "Hair_1"
      ) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // ボトムス
      else if (modelName.indexOf(`Male_${props.bottoms}`) > -1) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // アタマギア
      else if (
        modelName.indexOf(`${props.headGear}`) > -1) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // フクギア
      else if (
        modelName.indexOf(`Male_Clt_${props.clothesGear}`) > -1 || 
        modelName.indexOf(`All_Clt_${props.clothesGear}`) > -1
      ) {
        gltf.scene.children[0].children[i].visible = true;
      }
      // クツギア
      else if (
        modelName.indexOf(`Shs_${props.shoesGear}`) > -1) {
        gltf.scene.children[0].children[i].visible = true;
      }
      else {
        gltf.scene.children[0].children[i].visible = false;
      }
    }
  }

  // console.log(gltf.scene.children[0].children[659].material.color)
  console.log(props.skinColor)

  // gltf.scene.children[0].children[594].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  // gltf.scene.children[0].children[595].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  // gltf.scene.children[0].children[596].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  // gltf.scene.children[0].children[597].material.color.setRGB(skinColor.r,skinColor.g,skinColor.b)
  // console.log(gltf.scene.children[0].children[659].material.color)
  return (
      <primitive object={gltf.scene} />
  );
};

export default Model;