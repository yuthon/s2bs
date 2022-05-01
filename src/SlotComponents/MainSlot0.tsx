import React, { FC, ReactElement, useEffect, useRef } from 'react';
import MainSlotModal0 from './MainSlotModal0';
import { headAbilityData } from '../HeadComponents/headAbilityData';
import { Text } from '../languages/Text';

type AbilityType = {
  name: string,
  path: string
};

type MainSlotProps = {
  setAbility: React.Dispatch<React.SetStateAction<AbilityType>>,
  ability: AbilityType,
  gearName: string
}

const MainSlot0: FC<MainSlotProps> = React.memo(({ setAbility, ability, gearName }): ReactElement => {
  // モーダルを表示する関数
  const openGearModal = function() {
    let target0 = document.getElementById("mainSlotModal0");
    let target1 = document.getElementById("mainSlotModal1");
    let target2 = document.getElementById("mainSlotModal2");
    let target3 = document.getElementById("subSlotModal0");
    let target4 = document.getElementById("subSlotModal1");
    let target5 = document.getElementById("subSlotModal2");
    let target6 = document.getElementById("subSlotModal3");
    let target7 = document.getElementById("subSlotModal4");
    let target8 = document.getElementById("subSlotModal5");
    let target9 = document.getElementById("subSlotModal6");
    let target10 = document.getElementById("subSlotModal7");
    let target11 = document.getElementById("subSlotModal8");
    target0!.style.display = "block";
    target1!.style.display = "none";
    target2!.style.display = "none";
    target3!.style.display = "none";
    target4!.style.display = "none";
    target5!.style.display = "none";
    target6!.style.display = "none";
    target7!.style.display = "none";
    target8!.style.display = "none";
    target9!.style.display = "none";
    target10!.style.display = "none";
    target11!.style.display = "none";
  }
  
  const warningRef = useRef<HTMLDivElement>(null!);

  // propsで受け取ったギアの名前とギアパワーの名前から、headAbilityDataの配列を検索する
  const checkCombination = function(gearName: string, abilityName: string) {
    // ギアスロットが空のときはツールチップを表示しない
    if (abilityName === "empty") {
      warningRef.current.style.display="none"
    } else {
      for (let i=0; i < headAbilityData.length; i++) {
        // 名前が一致するギアを検索
        if (headAbilityData[i].name === gearName) {
          // ギアが見つかったら選択されているギアパワーが配列に含まれるか調べる
          if (headAbilityData[i].abilityArray.includes(abilityName)) {
            warningRef.current.style.display="none"
          } else {
            warningRef.current.style.display="block"
          }
        }
      }
    }
    
  }
  // ツールチップを閉じる関数
  const closeTooltip = function() {
    warningRef.current.style.display = "none"
  }

  useEffect(()=>{
    checkCombination(gearName, ability.name);
  })

  return(
    <div className="mainSlotModal-wrapper">
      <div ref={warningRef} className="slot-tooltip-warning">
        <svg className="tooltip-close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onClick={()=>{closeTooltip()}}>
        {/* <!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
          <path 
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
            fill="#ebebeb"
          />
        </svg>
        <p className="font-type2"><Text tid="warningText"/></p>
      </div>
      <div className="ability-icon main-slot" onClick={()=>{openGearModal()}}>
        <div className="slot-tooltip-left-container">
          <p className="slot-tooltip-left font-type2"><Text tid="changeAbility"/></p>
        </div>
        <img className="mainslot-img" src={ability.path} alt=""/>
      </div>
      <MainSlotModal0
        setAbility={setAbility}
      />
    </div>
  );
});

export default MainSlot0;