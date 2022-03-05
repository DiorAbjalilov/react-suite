import React from "react";
import { Message, toaster, ButtonToolbar, Button, SelectPicker } from "rsuite";

const MessageContent = () => {
  const [type, setType] = React.useState("info");
  const [placement, setPlacement] = React.useState("topCenter");
  const message = (
    <Message showIcon type={type}>
      {type}: The message appears on the {placement}.
    </Message>
  );

  return (
    <>
      <div>
        <Message showIcon type="info">
          Informational
        </Message>
        <Message showIcon type="success">
          Success
        </Message>
        <Message showIcon type="warning">
          Warning
        </Message>
        <Message showIcon type="error">
          Error
        </Message>

        <Message showIcon type="info" header="Informational">
          Additional description and informations about copywriting.
        </Message>

        <Message showIcon type="success" header="Success">
          Detailed description and advices about successful copywriting.
        </Message>

        <Message showIcon type="warning" header="Warning">
          This is a warning notice about copywriting.
        </Message>

        <Message showIcon type="error" header="Error">
          This is an error message about copywriting.
        </Message>
      </div>
      <div>
        {message}
        <hr />
        <ButtonToolbar>
          <SelectPicker
            cleanable={false}
            value={type}
            data={[
              { label: "info", value: "info" },
              { label: "success", value: "success" },
              { label: "warning", value: "warning" },
              { label: "error", value: "error" },
            ]}
            onChange={setType}
            style={{ width: 200 }}
          />
          <SelectPicker
            cleanable={false}
            value={placement}
            data={[
              { label: "topStart", value: "topStart" },
              { label: "topCenter", value: "topCenter" },
              { label: "topEnd", value: "topEnd" },
              { label: "bottomStart", value: "bottomStart" },
              { label: "bottomCenter", value: "bottomCenter" },
              { label: "bottomEnd", value: "bottomEnd" },
            ]}
            onChange={setPlacement}
            style={{ width: 200 }}
          />
          <Button onClick={() => toaster.push(message, { placement })}>
            Push
          </Button>
          <Button onClick={() => toaster.remove()}>Remove</Button>
          <Button onClick={() => toaster.clear()}>Clear</Button>
        </ButtonToolbar>
      </div>
    </>
  );
};

export default MessageContent;
