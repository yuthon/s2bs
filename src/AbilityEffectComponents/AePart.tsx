import { ReactElement, FC } from "react";

interface AePartProps {
  aeText: string;
  aeEffect: string;
  col?: string;
}

const AePart: FC<AePartProps> = (props): ReactElement => {
  return (
    <div className={`ae-part ${props.col} row`}>
      <div className="col-7 px-0 m-auto">
        <p className="ae-text">{props.aeText}</p>
      </div>
      <p className="col-1 ae-colon">:</p>
      <div className="col-4 px-0 m-auto">
        <p className="ae-effect">{props.aeEffect}</p>
      </div>
    </div>
  )
}

export default AePart;