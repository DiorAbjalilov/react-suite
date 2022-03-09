import React from "react";
import { Progress, Button, ButtonGroup, Row, Col } from "rsuite";

const style = {
  width: 120,
  display: "inline-block",
  marginRight: 10,
};

const ProgresContent = () => {
  const [percent, setPercent] = React.useState(30);

  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };

  const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#52c41a" : "#3385ff";

  return (
    <>
      <div>
        <Progress.Line />
        <Progress.Line percent={30} strokeColor="#ffc107" />
        <Progress.Line percent={30} status="active" />
        <Progress.Line percent={50} status="fail" />
        <Progress.Line percent={100} status="success" />
        <Progress.Line percent={80} showInfo={false} />
      </div>
      <div>
        <div style={style}>
          <Progress.Circle />
        </div>
        <div style={style}>
          <Progress.Circle percent={30} strokeColor="#ffc107" />
        </div>
        <div style={style}>
          <Progress.Circle percent={100} status="success" />
        </div>
        <div style={style}>
          <Progress.Circle percent={30} status="fail" />
        </div>
        <div style={style}>
          <Progress.Circle percent={30} showInfo={false} />
        </div>
      </div>
      <div>
        <ButtonGroup>
          <Button onClick={decline}>-</Button>
          <Button onClick={increase}>+</Button>
        </ButtonGroup>
        <hr />
        <Progress.Line percent={percent} strokeColor={color} status={status} />
        <Row>
          <Col md={6}>
            <Progress.Line
              vertical
              percent={percent}
              strokeColor={color}
              status={status}
            />
          </Col>
          <Col md={6}>
            <div style={{ width: 120, marginTop: 10 }}>
              <Progress.Circle
                percent={percent}
                strokeColor={color}
                status={status}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProgresContent;
