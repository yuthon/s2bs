import AbilityPoint from './AbilityPoint';

const AbilityEffect = (props) => {
  return(
    <AbilityPoint
      weaponStatus={props.weaponStatus}
      mainAbilityName0={props.passMainAbilityName0}
      mainAbilityName1={props.passMainAbilityName1}
      mainAbilityName2={props.passMainAbilityName2}
      subAbilityName0={props.passSubAbilityName0}
      subAbilityName1={props.passSubAbilityName1}
      subAbilityName2={props.passSubAbilityName2}
      subAbilityName3={props.passSubAbilityName3}
      subAbilityName4={props.passSubAbilityName4}
      subAbilityName5={props.passSubAbilityName5}
      subAbilityName6={props.passSubAbilityName6}
      subAbilityName7={props.passSubAbilityName7}
      subAbilityName8={props.passSubAbilityName8}
    />
  );
};

export default AbilityEffect;