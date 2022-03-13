import { useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';
import ArrowUpSVG from './SVGComponents/ArrowUpSVG';
import ArrowDownSVG from './SVGComponents/ArrowDownSVG';

const GearIconFooter = (props) => {

  const favoredAbilityTooltip = useRef();
  const unfavoredAbilityTooltip = useRef();

  // ツールチップ
  useEffect(() => {
    const tooltip = new Tooltip(favoredAbilityTooltip.current, {
        title: "つきやすいギアパワー",
        placement: 'bottom',
        trigger: 'hover',
    })
  })
  // ツールチップ
  useEffect(() => {
    const tooltip = new Tooltip(unfavoredAbilityTooltip.current, {
        title: "つきにくいギアパワー",
        placement: 'bottom',
        trigger: 'hover',
    })
  })

  return (
    <div className="headgear-icon-footer">
      <div 
        className="brand-ability"
        ref={favoredAbilityTooltip}
      >
        <ArrowUpSVG />
        <img className="img-gear-icon-ability" src={props.favoredAbility} alt=""/>
      </div>
      <div
        className="brand-ability"
        ref={unfavoredAbilityTooltip}
      >
        <ArrowDownSVG />
        <img className="img-gear-icon-ability" src={props.unfavoredAbility} alt=""/>
      </div>
    </div>
  )
}

export default GearIconFooter;