import { ReactElement, FC} from 'react';

interface ToggleSwitchProps {
  abilityName: string;
  btnToggle: Function;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleSwitch: FC<ToggleSwitchProps> = (props): ReactElement => {
  return (
    <div 
      className={props.isActive ? 'turned-on' : 'turned-off'}
      id={`switch-${props.abilityName}`}
      onClick={()=>{
        props.btnToggle(props.abilityName);
        if (props.isActive) {
          props.setIsActive(false);
        } else {
          props.setIsActive(true);
        }
      }}
    >
      <div className="switch-base"></div>
      <div id="switch-circle"></div>
    </div>
  )
}