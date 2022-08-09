import React from 'react';
import ReactHintFactory from 'react-hint';
import { GrCircleQuestion } from "react-icons/gr";

const ReactHint = ReactHintFactory(React);
const HintPopup = () => <p style={{ position: "absolute" }}>a</p>;

export function Hint() {
  return (
    <div>
      <ReactHint
        // persist
        autoPosition
        attribute="data-custom"
        events={{ hover: true, click: true, focus: true }}
        onRenderContent={HintPopup}
      />
      <GrCircleQuestion data-custom size={25} />
    </div>
  );
}
