import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { FC } from 'react';

interface ModelProps {
  headGear: string;
  clothesGear: string;
  shoesGear: string;
  characterType: string;
  skinColor: string;
  eyeColor: string;
  hairStyle: string;
  bottoms: string;
  teamColor: string;
}

const Model: FC<ModelProps> = (props) => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + '/splModel049.glb',
    (loader) => {
      const dracoLoader: DRACOLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(process.env.PUBLIC_URL + "/draco-gltf/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  gltf.scene.traverse((object: THREE.Object3D) => {
    object.frustumCulled = false;
    object.castShadow = true;
    object.receiveShadow = true;
    // object.material.side = THREE.FrontSide;
  });

  let mixer: THREE.AnimationMixer;
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
    mixer.update(delta);
  });
  
  //モデルの配列は読み込まれるごとにランダムなので、nameで整列しておく
  gltf.scene.children[0].children.sort((a, b) => (a.name > b.name) ? 1 : -1);
  

  // モデル
  let armature: THREE.Object3D = gltf.scene.children[0];
  // アタマギア
  let headGear: string = props.headGear;
  // フクギア
  let clothesGear: string = props.clothesGear;
  // クツギア
  let shoesGear: string = props.shoesGear;
  // 髪型
  let hairStyle: string = props.hairStyle;
  // 肌の色
  const SkinColor = function(skinColor: string) {
    if (skinColor === "color_0") {
      return {r:1,g:0.638,b:0.604}
    } else if (skinColor === "color_1") {
      return {r:1,g:0.423,b:0.381}
    } else if (skinColor === "color_2") {
      return {r:1,g:0.413,b:0.246}
    } else if (skinColor === "color_3") {
      return {r:1,g:0.283,b:0.198}
    } else if (skinColor === "color_4") {
      return {r:0.651,g:0.144,b:0.082}
    } else if (skinColor === "color_5") {
      return {r:0.107,g:0.016,b:0}
    } else if (skinColor === "color_6") {
      return {r:0.024,g:0.005,b:0}
    }
  }

  let skinColor = SkinColor(props.skinColor);
  // 目の色
  const EyeColor = function(eyeColor: string) {
    if (eyeColor === "color_0") {
      return {r:0.005,g:0.009,b:0.423}
    } else if (eyeColor === "color_1") {
      return {r:0.000303,g:0.413,b:0.184}
    } else if (eyeColor === "color_2") {
      return {r:0.423,g:0.305,b:0.000304}
    } else if (eyeColor === "color_3") {
      return {r:0.839,g:0.191,b:0.010}
    } else if (eyeColor === "color_4") {
      return {r:0.694,g:0.010,b:0.012}
    } else if (eyeColor === "color_5") {
      return {r:0.753,g:0.015,b:0.509}
    } else if (eyeColor === "color_6") {
      return {r:0.314,g:0.023,b:1}
    } else if (eyeColor === "color_7") {
      return {r:0.023,g:0.025,b:0.025}
    } else if (eyeColor === "color_8") {
      return {r:0.539,g:0.552,b:0.539}
    } else if (eyeColor === "color_9") {
      return {r:0.175,g:0.287,b:0.095}
    } else if (eyeColor === "color_10") {
      return {r:0.220,g:0.352,b:0.136}
    } else if (eyeColor === "color_11") {
      return {r:0.150,g:0.144,b:0.076}
    } else if (eyeColor === "color_12") {
      return {r:0.120,g:0.044,b:0.042}
    } else if (eyeColor === "color_13") {
      return {r:0.175,g:0.202,b:0.337}
    }
  }

  let eyeColor = EyeColor(props.eyeColor);

  // インクの色
  const TeamColor = function(teamColor: string) {
    if (teamColor === "color_0") {
      return {r:0.238,g:0.009,b:0.730}
    } else if (teamColor === "color_1") {
      return {r:0.973,g:0.011,b:0.246}
    } else if (teamColor === "color_2") {
      return {r:1,g:0.181,b:0.047}
    } else if (teamColor === "color_3") {
      return {r:0.004,g:0.672,b:0.165}
    } else if (teamColor === "color_4") {
      return {r:0.024,g:0.452,b:0.855}
    } else if (teamColor === "color_5") {
      return {r:1,g:0.445,b:0.047}
    }
  }
  const DarkColor = function(teamColor: string) {
    if (teamColor === "color_0") {
      return {r:0.023,g:0.014,b:0.037}
    } else if (teamColor === "color_1") {
      return {r:0.068,g:0.007,b:0.026}
    } else if (teamColor === "color_2") {
      return {r:0.053,g:0.016,b:0.012}
    } else if (teamColor === "color_3") {
      return {r:0.018,g:0.028,b:0.015}
    } else if (teamColor === "color_4") {
      return {r:0.01,g:0.018,b:0.021}
    } else if (teamColor === "color_5") {
      return {r:0.195,g:0.053,b:0.007}
    }
  }

  let teamColor = TeamColor(props.teamColor);
  let darkColor = DarkColor(props.teamColor);

  // ボトムス
  let bottoms: string = props.bottoms

  // アタマギアの種類を定義
  const defineHeadGearType = function() {
    if (headGear.includes("BS")) {
      return "BS";
    } else if (headGear.includes("HB")) {
      return "HB";
    } else if (headGear.includes("BN")) {
      return "BN";
    } else if (headGear.includes("HP")) {
      return "HP";
    } else if (headGear.includes("KN")) {
      return "KN";
    } else if (headGear.includes("H0")) {
      return "H0";
    } else if (headGear.includes("H1")) {
      return "H1";
    } else if (headGear.includes("H2")) {
      return "H2";
    } else if (headGear.includes("H3")) {
      return "H3";
    } else if (headGear.includes("C0")) {
      return "C0";
    } else if (headGear.includes("C1")) {
      return "C1";
    } else if (headGear.includes("M0")) {
      return "M0";
    } else if (headGear.includes("M1")) {
      return "M1";
    } else if (headGear.includes("V0")) {
      return "V0";
    } else if (headGear.includes("V1")) {
      return "V1";
    } else if (headGear.includes("V2")) {
      return "V2";
    } else if (headGear.includes("V3")) {
      return "V3";
    } else if (headGear.includes("V4")) {
      return "V4";
    }
  };
  let headGearType = defineHeadGearType();

  // キャラクタータイプを変更
  let characterType = props.characterType;
  
  if (characterType === "IML") {
    for (let i = 0; i < armature.children.length; i++) {
      // モデル
      let model = armature.children[i] as THREE.Mesh;
      // マテリアル
      let material = model.material as THREE.MeshStandardMaterial;
      // モデル名
      let modelName: string = model.name;
      
      // アタマギア
      // ボーイ限定
      if (modelName.includes(headGear) && modelName.includes("Male") && !modelName.includes("OML")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 性別不問
      else if (modelName.includes(headGear) && !modelName.includes("Female") && !modelName.includes("OML")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // フクギア
      // ボーイ限定
      else if (modelName.includes(clothesGear) && modelName.includes("Male")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 性別不問
      else if (modelName.includes(clothesGear) && modelName.includes("All")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // クツギアは全て性別不問
      else if (modelName.includes(shoesGear)) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 髪型
      else if (modelName.includes(`IML_${hairStyle}`)) {
        // モデル名にALLが設定されている場合
        if (headGearType!.includes("V") && modelName.includes("VALL")) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else if (headGearType!.includes("H") && modelName.includes("HALL")) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else if (modelName.includes(headGearType!)) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else {
          model.visible = false;
        }
      }
      // ボトムス
      else if (modelName.includes(`Male_${bottoms}`)) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // カラダ
      else if (modelName.includes("IML_M_Body")) {
        // アタマギアにEFが設定されている場合
        if (headGear.includes("EF") && modelName.includes("EarFolded")) {
          model.visible = true;
          // 肌の色
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        } else if (!headGear.includes("EF") && !modelName.includes("EarFolded")) {
          model.visible = true;
          // 肌の色
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        } else {
          model.visible = false;
        }
      }
      // 目周辺
      else if (modelName.includes("IML_Eye")) {
        model.visible = true;
        // 目の色
        if (modelName.includes("Eye_Color")) {
          model.visible = true;
          material.color.setRGB(eyeColor!.r, eyeColor!.g, eyeColor!.b);
        }
        // 眉の色
        else if (modelName.includes("Eyebrow")) {
          model.visible = true;
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b);
        }
        // 目の周りの肌の色
        else if (modelName.includes("Eyelid_Outer")) {
          model.visible = true;
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
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
      let model = armature.children[i] as THREE.Mesh;
      // マテリアル
      let material = model.material as THREE.MeshStandardMaterial;
      // モデル名
      let modelName = model.name;
      
      // アタマギア
      // ガール限定
      if (modelName.includes(headGear) && modelName.includes("Female") && !modelName.includes("OML")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 性別不問
      else if (modelName.includes(headGear) && !modelName.includes("Male") && !modelName.includes("OML")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // フクギア
      // ガール限定
      else if (modelName.includes(clothesGear) && modelName.includes("Female")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 性別不問
      else if (modelName.includes(clothesGear) && modelName.includes("All")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // クツギアは全て性別不問
      else if (modelName.includes(shoesGear)) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 髪型
      else if (modelName.includes(`IFML_${hairStyle}`)) {
        // PT（ポニーテール）が設定されている場合
        if (headGear.includes("PT") && modelName.includes("PT")) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        }
        // モデル名にALLが設定されている場合
        else if (headGearType!.includes("V") && modelName.includes("VALL")) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else if (headGearType!.includes("H") && modelName.includes("HALL")) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else if (modelName.includes(headGearType!)) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else {
          model.visible = false;
        }
      }
      // ボトムス
      else if (modelName.includes(`Female_${bottoms}`)) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // カラダ
      else if (modelName.includes("IFML_M_Body")) {
        // アタマギアにEFが設定されている場合
        if (headGear.includes("EF") && modelName.includes("EarFolded")) {
          model.visible = true;
          // 肌の色
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        } else if (!headGear.includes("EF") && !modelName.includes("EarFolded")) {
          model.visible = true;
          // 肌の色
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        } else {
          model.visible = false;
        }
      }
      // 目周辺
      else if (modelName.includes("IFML_Eye")) {
        model.visible = true;
        // 目の色
        if (modelName.includes("Eye_Color")) {
          model.visible = true;
          material.color.setRGB(eyeColor!.r, eyeColor!.g, eyeColor!.b);
        }
        // 眉の色
        else if (modelName.includes("Eyebrow")) {
          model.visible = true;
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b);
        }
        // 目の周りの肌の色
        else if (modelName.includes("Eyelid_Outer")) {
          model.visible = true;
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        }
      }
      else {
        model.visible = false;
      }
    }
    // PTの時の処理
    if (hairStyle === "Hair_4" && headGear.includes("PT"))  {
      for (let i = 0; i < armature.children.length; i++) {
        let model = armature.children[i];
        let modelName = model.name
        if (model.visible && modelName.includes("IFML_Hair_4") && modelName.includes(headGearType!)) {
          model.visible = false;
        }
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
      let model = armature.children[i] as THREE.Mesh;
      // マテリアル
      let material = model.material as THREE.MeshStandardMaterial;
      // モデル名
      let modelName = model.name;
      
      // アタマギア
      // ガール限定
      if (modelName.includes(headGear) && modelName.includes("Female") && !modelName.includes("OML")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 性別不問
      else if (modelName.includes(headGear) && !modelName.includes("Male") && !modelName.includes("OML")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // フクギア
      // ガール限定
      else if (modelName.includes(clothesGear) && modelName.includes("Female")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 性別不問
      else if (modelName.includes(clothesGear) && modelName.includes("All")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // クツギアは全て性別不問
      else if (modelName.includes(shoesGear)) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 髪型
      else if (modelName.includes(`OFML_${hairStyle}`)) {
        // PT（ポニーテール）が設定されている場合
        if (headGear.includes("PT") && modelName.includes("PT")) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        }
        // モデル名にALLが設定されている場合
        else if (headGearType!.includes("V") && modelName.includes("VALL")) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else if (headGearType!.includes("H") && modelName.includes("HALL")) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else if (modelName.includes(headGearType!)) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else {
          model.visible = false;
        }
      }
      // ボトムス
      else if (modelName.includes(`Female_${bottoms}`)) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // カラダ
      else if (modelName.includes("OFML_M_Body")) {
        // アタマギアにEFが設定されている場合
        if (headGear.includes("EF") && modelName.includes("EarFolded")) {
          model.visible = true;
          // 肌の色
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        } else if (!headGear.includes("EF") && !modelName.includes("EarFolded")) {
          model.visible = true;
          // 肌の色
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        } else {
          model.visible = false;
        }
      }
      // 目周辺
      else if (modelName.includes("OFML_Eye")) {
        model.visible = true;
        // 目の色
        if (modelName.includes("Eye_Color")) {
          model.visible = true;
          material.color.setRGB(eyeColor!.r, eyeColor!.g, eyeColor!.b);
        }
        // 眉の色
        else if (modelName.includes("Eyebrow")) {
          model.visible = true;
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b);
        }
        // 目の周りの肌の色
        else if (modelName.includes("Eyelid_Outer")) {
          model.visible = true;
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        }
      }
      else {
        model.visible = false;
      }
    }
    // PTの時の処理
    if (hairStyle === "Hair_1" && headGear.includes("PT"))  {
      for (let i = 0; i < armature.children.length; i++) {
        let model = armature.children[i];
        let modelName = model.name
        if (model.visible && modelName.includes("OFML_Hair_1") && modelName.includes(headGearType!)) {
          model.visible = false;
        }
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
      let model = armature.children[i] as THREE.Mesh;
      // マテリアル
      let material = model.material as THREE.MeshStandardMaterial;
      // モデル名
      let modelName = model.name;
      
      // ボーイ限定
      if (modelName.includes(headGear) && modelName.includes("Male") && !modelName.includes("OML") && hairStyle === "Hair_0") {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 性別不問
      else if (modelName.includes(headGear) && !modelName.includes("Female") && !modelName.includes("OML") && hairStyle === "Hair_0") {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      else if (modelName.includes(headGear) && modelName.includes("Male") && hairStyle === "Hair_1") {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 性別不問
      else if (modelName.includes(headGear) && !modelName.includes("Female") && hairStyle === "Hair_1") {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      
      // フクギア
      // ボーイ限定
      else if (modelName.includes(clothesGear) && modelName.includes("Male")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 性別不問
      else if (modelName.includes(clothesGear) && modelName.includes("All")) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // クツギアは全て性別不問
      else if (modelName.includes(shoesGear)) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // 髪型
      else if (modelName.includes(`OML_${hairStyle}`)) {
        // モデル名にALLが設定されている場合
        if (headGearType!.includes("V") && modelName.includes("VALL")) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else if (headGearType!.includes("H") && modelName.includes("HALL")) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else if (modelName.includes(headGearType!)) {
          model.visible = true;
          // 髪色を変更
          if (modelName.includes("TeamColor")) {
            material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
          }
          if (modelName.includes("Dark")) {
            material.color.setRGB(darkColor!.r, darkColor!.g, darkColor!.b)
          }
        } else {
          model.visible = false;
        }
      }
      // ボトムス
      else if (modelName.includes(`Male_${bottoms}`)) {
        model.visible = true;
        // 色を変更
        if (modelName.includes("TeamColor")) {
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b)
        }
      }
      // カラダ
      else if (modelName.includes("OML_M_Body")) {
        // アタマギアにEFが設定されている場合
        if (headGear.includes("EF") && modelName.includes("EarFolded")) {
          model.visible = true;
          // 肌の色
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        } else if (!headGear.includes("EF") && !modelName.includes("EarFolded")) {
          model.visible = true;
          // 肌の色
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        } else {
          model.visible = false;
        }
      }
      // 目周辺
      else if (modelName.includes("OML_Eye")) {
        model.visible = true;
        // 目の色
        if (modelName.includes("Eye_Color")) {
          model.visible = true;
          material.color.setRGB(eyeColor!.r, eyeColor!.g, eyeColor!.b);
        }
        // 眉の色
        else if (modelName.includes("Eyebrow")) {
          model.visible = true;
          material.color.setRGB(teamColor!.r, teamColor!.g, teamColor!.b);
        }
        // 目の周りの肌の色
        else if (modelName.includes("Eyelid_Outer")) {
          model.visible = true;
          material.color.setRGB(skinColor!.r,skinColor!.g,skinColor!.b);
        }
      }
      else {
        model.visible = false;
      }
      // アフロの時の処理
      if (hairStyle === "Hair_1") {
        for (let i = 0; i < armature.children.length; i++) {
          let model = armature.children[i];
          let modelName = model.name
          // アフロが表示されている
          if (model.visible && modelName.includes(headGear) && modelName.includes("OML")) {
            for (let n = 0; n < armature.children.length; n++) {
              let model = armature.children[n];
              let modelName = model.name
              // アフロ用のアタマギアのモデルを残して他を非表示
              if (model.visible && modelName.includes(headGear) && !modelName.includes("OML")){
                model.visible = false;
              }
            }
          }
        }
      }
    }
  }
  
  // デバック用　表示されているモデルの名前を出力する
  // for (let i = 0; i < armature.children.length; i++) {
  //   // モデル
  //   let model = armature.children[i];
  //   // モデル名
  //   let modelName = model.name;
  //   if(model.visible) {
  //     console.log(modelName)
  //   }
  // }
  return (
      <primitive object={gltf.scene} />
  );
};

export default Model;