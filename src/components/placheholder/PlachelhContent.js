import React from "react";
import { Placeholder } from "rsuite";
const { Paragraph } = Placeholder;
const PlachelhContent = () => {
  return (
    <>
      <div>
        <p>Default:</p>
        <Paragraph style={{ marginTop: 30 }} />
        <hr />
        <p>You can also add a round or square icon to the left:</p>
        <Paragraph style={{ marginTop: 30 }} graph="circle" />
        <Paragraph style={{ marginTop: 30 }} graph="square" />
        <Paragraph style={{ marginTop: 30 }} graph="image" />
        <hr />
        <p>You can also customize the number of lines, spacing, etc.:</p>
        <Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
      </div>
    </>
  );
};

export default PlachelhContent;
