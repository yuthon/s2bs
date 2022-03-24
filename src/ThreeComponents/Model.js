import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';



const Model = (props) => {
  const gltf = useLoader(
    GLTFLoader,
    'splModel049.glb',
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
    if (props.characterType === "IFML") {  
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
    }
    else if (props.characterType === "IML") {
      const action = mixer.clipAction(gltf.animations[1]);
      action.play();
    }
    else if (props.characterType === "OFML") {  
      const action = mixer.clipAction(gltf.animations[2]);
      action.play();
    }
    else if (props.characterType === "OML") {  
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
  let armature = gltf.scene.children[0];
  // アタマギア
  let headGear = props.headGear;
  // フクギア
  let clothesGear = props.clothesGear;
  // クツギア
  let shoesGear = props.shoesGear;
  // 髪型
  let hairStyle = props.hairStyle;
  // 肌の色
  
  const SkinColor = function(skinColor) {
    if (skinColor === "SC-0") {
      return {r:1,g:0.638,b:0.604}
    } else if (skinColor === "SC-1") {
      return {r:1,g:0.423,b:0.381}
    } else if (skinColor === "SC-2") {
      return {r:1,g:0.413,b:0.246}
    } else if (skinColor === "SC-3") {
      return {r:1,g:0.283,b:0.198}
    } else if (skinColor === "SC-4") {
      return {r:0.651,g:0.144,b:0.082}
    } else if (skinColor === "SC-5") {
      return {r:0.107,g:0.016,b:0}
    } else if (skinColor === "SC-6") {
      return {r:0.024,g:0.005,b:0}
    }
  }

  let skinColor = SkinColor(props.skinColor);

  // ボトムス
  let bottoms = props.bottoms

  // アタマギアの種類を定義
  const defineHeadGearType = function() {
    if (headGear.indexOf("BS") > -1) {
      return "BS";
    } else if (headGear.indexOf("HB") > -1) {
      return "HB";
    } else if (headGear.indexOf("BN") > -1) {
      return "BN";
    } else if (headGear.indexOf("HP") > -1) {
      return "HP";
    } else if (headGear.indexOf("KN") > -1) {
      return "KN";
    } else if (headGear.indexOf("H0") > -1) {
      return "H0";
    } else if (headGear.indexOf("H1") > -1) {
      return "H1";
    } else if (headGear.indexOf("H2") > -1) {
      return "H2";
    } else if (headGear.indexOf("H3") > -1) {
      return "H3";
    } else if (headGear.indexOf("C0") > -1) {
      return "C0";
    } else if (headGear.indexOf("C1") > -1) {
      return "C1";
    } else if (headGear.indexOf("M0") > -1) {
      return "M0";
    } else if (headGear.indexOf("M1") > -1) {
      return "M1";
    } else if (headGear.indexOf("V0") > -1) {
      return "V0";
    } else if (headGear.indexOf("V1") > -1) {
      return "V1";
    } else if (headGear.indexOf("V2") > -1) {
      return "V2";
    } else if (headGear.indexOf("V3") > -1) {
      return "V3";
    } else if (headGear.indexOf("V4") > -1) {
      return "V4";
    }
  };
  let headGearType = defineHeadGearType();

  // キャラクタータイプを変更
  let characterType = props.characterType;
  
  if (characterType === "IML") {
    for (let i = 0; i < armature.children.length; i++) {
      // モデル
      let model = armature.children[i];
      // モデル名
      let modelName = model.name;
      
      // アタマギア
      // ボーイ限定
      if (modelName.indexOf(headGear) > -1 && modelName.indexOf("Male") > -1 && modelName.indexOf("OML") === -1) {
        model.visible = true;
      }
      // 性別不問
      else if (modelName.indexOf(headGear) > -1 && modelName.indexOf("Female") === -1 && modelName.indexOf("OML") === -1) {
        model.visible = true;
      }
      // フクギア
      // ボーイ限定
      else if (modelName.indexOf(clothesGear) > -1 && modelName.indexOf("Male") > -1) {
        model.visible = true;
      }
      // 性別不問
      else if (modelName.indexOf(clothesGear) > -1 && modelName.indexOf("All") > -1) {
        model.visible = true;
      }
      // クツギアは全て性別不問
      else if (modelName.indexOf(shoesGear) > -1) {
        model.visible = true;
      }
      // 髪型
      else if (modelName.indexOf(`IML_${hairStyle}`)> -1) {
        // モデル名にALLが設定されている場合
        if (headGearType.indexOf("V") > -1 && modelName.indexOf("VALL") > -1) {
          model.visible = true;
        } else if (headGearType.indexOf("H") > -1 && modelName.indexOf("HALL") > -1) {
          model.visible = true;
        } else if (modelName.indexOf(headGearType) > -1) {
          model.visible = true;
        } else {
          model.visible = false;
        }
      }
      // ボトムス
      else if (modelName.indexOf(`Male_${bottoms}`)> -1) {
        model.visible = true;
      }
      // カラダ
      else if (modelName.indexOf("IML_M_Body")> -1) {
        // アタマギアにEFが設定されている場合
        if (headGear.indexOf("EF") > -1 && modelName.indexOf("EarFolded") > -1) {
          model.visible = true;
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        } else if (headGear.indexOf("EF") === -1 && modelName.indexOf("EarFolded") === -1) {
          model.visible = true;
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        } else {
          model.visible = false;
        }
      }
      // 目周辺
      else if (modelName.indexOf("IML_Eye") > -1) {
        model.visible = true;
        if (modelName.indexOf("IML_Eyelid_Outer") > -1) {
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        }
      }
      else {
        model.visible = false;
      }
    }
  }
  if (characterType === "IFML") {
    for (let i = 0; i < armature.children.length; i++) {
      // モデル
      let model = armature.children[i];
      // モデル名
      let modelName = model.name;
      
      // アタマギア
      // ガール限定
      if (modelName.indexOf(headGear) > -1 && modelName.indexOf("Female") > -1 && modelName.indexOf("OML") === -1) {
        model.visible = true;
      }
      // 性別不問
      else if (modelName.indexOf(headGear) > -1 && modelName.indexOf("Male") === -1 && modelName.indexOf("OML") === -1) {
        model.visible = true;
      }
      // フクギア
      // ガール限定
      else if (modelName.indexOf(clothesGear) > -1 && modelName.indexOf("Female") > -1) {
        model.visible = true;
      }
      // 性別不問
      else if (modelName.indexOf(clothesGear) > -1 && modelName.indexOf("All") > -1) {
        model.visible = true;
      }
      // クツギアは全て性別不問
      else if (modelName.indexOf(shoesGear) > -1) {
        model.visible = true;
      }
      // 髪型
      else if (modelName.indexOf(`IFML_${hairStyle}`)> -1) {
        // PT（ポニーテール）が設定されている場合
        if (headGear.indexOf("PT") > -1 && modelName.indexOf("PT") > -1) {
          model.visible = true;
        }
        // モデル名にALLが設定されている場合
        else if (headGearType.indexOf("V") > -1 && modelName.indexOf("VALL") > -1) {
          model.visible = true;
        } else if (headGearType.indexOf("H") > -1 && modelName.indexOf("HALL") > -1) {
          model.visible = true;
        } else if (modelName.indexOf(headGearType) > -1) {
          model.visible = true;
        } else {
          model.visible = false;
        }
      }
      // ボトムス
      else if (modelName.indexOf(`Female_${bottoms}`)> -1) {
        model.visible = true;
      }
      // カラダ
      else if (modelName.indexOf("IFML_M_Body")> -1) {
        // アタマギアにEFが設定されている場合
        if (headGear.indexOf("EF") > -1 && modelName.indexOf("EarFolded") > -1) {
          model.visible = true;
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        } else if (headGear.indexOf("EF") === -1 && modelName.indexOf("EarFolded") === -1) {
          model.visible = true;
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        } else {
          model.visible = false;
        }
      }
      // 目周辺
      else if (modelName.indexOf("IFML_Eye") > -1) {
        model.visible = true;
        if (modelName.indexOf("IFML_Eyelid_Outer") > -1) {
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        }
      }
      else {
        model.visible = false;
      }
    }
  }
  if (characterType === "OFML") {
    // 髪型が2種類のみのため、Stateの値が合致しない場合はHair0に入れ替える
    if (hairStyle !== "Hair_0" && hairStyle !== "Hair_1") {
      hairStyle = "Hair_0"
    }
    for (let i = 0; i < armature.children.length; i++) {
      // モデル
      let model = armature.children[i];
      // モデル名
      let modelName = model.name;
      
      // アタマギア
      // ガール限定
      if (modelName.indexOf(headGear) > -1 && modelName.indexOf("Female") > -1 && modelName.indexOf("OML") === -1) {
        model.visible = true;
      }
      // 性別不問
      else if (modelName.indexOf(headGear) > -1 && modelName.indexOf("Male") === -1 && modelName.indexOf("OML") === -1) {
        model.visible = true;
      }
      // フクギア
      // ガール限定
      else if (modelName.indexOf(clothesGear) > -1 && modelName.indexOf("Female") > -1) {
        model.visible = true;
      }
      // 性別不問
      else if (modelName.indexOf(clothesGear) > -1 && modelName.indexOf("All") > -1) {
        model.visible = true;
      }
      // クツギアは全て性別不問
      else if (modelName.indexOf(shoesGear) > -1) {
        model.visible = true;
      }
      // 髪型
      else if (modelName.indexOf(`OFML_${hairStyle}`)> -1) {
        // PT（ポニーテール）が設定されている場合
        if (headGear.indexOf("PT") > -1 && modelName.indexOf("PT") > -1) {
          model.visible = true;
        }
        // モデル名にALLが設定されている場合
        else if (headGearType.indexOf("V") > -1 && modelName.indexOf("VALL") > -1) {
          model.visible = true;
        } else if (headGearType.indexOf("H") > -1 && modelName.indexOf("HALL") > -1) {
          model.visible = true;
        } else if (modelName.indexOf(headGearType) > -1) {
          model.visible = true;
        } else {
          model.visible = false;
        }
      }
      // ボトムス
      else if (modelName.indexOf(`Female_${bottoms}`)> -1) {
        model.visible = true;
      }
      // カラダ
      else if (modelName.indexOf("OFML_M_Body")> -1) {
        // アタマギアにEFが設定されている場合
        if (headGear.indexOf("EF") > -1 && modelName.indexOf("EarFolded") > -1) {
          model.visible = true;
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        } else if (headGear.indexOf("EF") === -1 && modelName.indexOf("EarFolded") === -1) {
          model.visible = true;
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        } else {
          model.visible = false;
        }
      }
      // 目周辺
      else if (modelName.indexOf("OFML_Eye") > -1) {
        model.visible = true;
        if (modelName.indexOf("OFML_Eyelid_Outer") > -1) {
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        }
      }
      else {
        model.visible = false;
      }
    }
  }
  if (characterType === "OML") {
    // 髪型が2種類のみのため、Stateの値が合致しない場合はHair0に入れ替える
    if (hairStyle !== "Hair_0" && hairStyle !== "Hair_1") {
      hairStyle = "Hair_0"
    }
    for (let i = 0; i < armature.children.length; i++) {
      // モデル
      let model = armature.children[i];
      // モデル名
      let modelName = model.name;
      
      // ボーイ限定
      if (modelName.indexOf(headGear) > -1 && modelName.indexOf("Male") > -1 && modelName.indexOf("OML") === -1 && hairStyle === "Hair_0") {
        model.visible = true;
      }
      // 性別不問
      else if (modelName.indexOf(headGear) > -1 && modelName.indexOf("Female") === -1 && modelName.indexOf("OML") === -1 && hairStyle === "Hair_0") {
        model.visible = true;
      }
      else if (modelName.indexOf(headGear) > -1 && modelName.indexOf("Male") > -1 && hairStyle === "Hair_1") {
        model.visible = true;
      }
      // 性別不問
      else if (modelName.indexOf(headGear) > -1 && modelName.indexOf("Female") === -1 && hairStyle === "Hair_1") {
        model.visible = true;
      }
      
      // フクギア
      // ボーイ限定
      else if (modelName.indexOf(clothesGear) > -1 && modelName.indexOf("Male") > -1) {
        model.visible = true;
      }
      // 性別不問
      else if (modelName.indexOf(clothesGear) > -1 && modelName.indexOf("All") > -1) {
        model.visible = true;
      }
      // クツギアは全て性別不問
      else if (modelName.indexOf(shoesGear) > -1) {
        model.visible = true;
      }
      // 髪型
      else if (modelName.indexOf(`OML_${hairStyle}`)> -1) {
        // モデル名にALLが設定されている場合
        if (headGearType.indexOf("V") > -1 && modelName.indexOf("VALL") > -1) {
          model.visible = true;
        } else if (headGearType.indexOf("H") > -1 && modelName.indexOf("HALL") > -1) {
          model.visible = true;
        } else if (modelName.indexOf(headGearType) > -1) {
          model.visible = true;
        } else {
          model.visible = false;
        }
      }
      // ボトムス
      else if (modelName.indexOf(`Male_${bottoms}`)> -1) {
        model.visible = true;
      }
      // カラダ
      else if (modelName.indexOf("OML_M_Body")> -1) {
        // アタマギアにEFが設定されている場合
        if (headGear.indexOf("EF") > -1 && modelName.indexOf("EarFolded") > -1) {
          model.visible = true;
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        } else if (headGear.indexOf("EF") === -1 && modelName.indexOf("EarFolded") === -1) {
          model.visible = true;
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        } else {
          model.visible = false;
        }
      }
      // 目周辺
      else if (modelName.indexOf("OML_Eye") > -1) {
        model.visible = true;
        if (modelName.indexOf("OML_Eyelid_Outer") > -1) {
          // 肌の色
          model.material.color.setRGB(skinColor.r,skinColor.g,skinColor.b);
        }
      }
      else if (modelName.indexOf("OML_Hed_C0_EzokkoMesh") > -1) {
        model.visible = true;
      }
      else {
        model.visible = false;
      }

      if (hairStyle === "Hair_1") {
        for (let i = 0; i < armature.children.length; i++) {
          let model = armature.children[i];
          let modelName = model.name
          if (model.visible && modelName.indexOf(headGear) > -1 && modelName.indexOf("OML") > -1) {
            for (let n = 0; n < armature.children.length; n++) {
              let model = armature.children[n];
              let modelName = model.name
              if (model.visible && modelName.indexOf(headGear) > -1 && modelName.indexOf("OML") === -1){
                model.visible = false;
              }
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < armature.children.length; i++) {
    let model = armature.children[i];
    let modelName = model.name
    if (model.visible) {
      console.log(modelName);
      
    }
  }
  
  return (
      <primitive object={gltf.scene} />
  );
};

export default Model;