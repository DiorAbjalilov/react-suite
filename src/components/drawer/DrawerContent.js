import React, { useState } from "react";
import { Drawer } from "rsuite";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";

const DrawerContent = () => {
  const [open, setOpen] = useState(false);
  const [openWithHeader, setOpenWithHeader] = useState(false);

  return (
    <div>
      <ButtonToolbar>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Button onClick={() => setOpenWithHeader(true)}>
          Open with header
        </Button>
      </ButtonToolbar>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Drawer.Body>{/* <Paragraph /> */}</Drawer.Body>
      </Drawer>

      <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpenWithHeader(false)}>Cancel</Button>
            <Button
              onClick={() => setOpenWithHeader(false)}
              appearance="primary"
            >
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>{/* <Paragraph /> */}</Drawer.Body>
      </Drawer>
    </div>
  );
};

export default DrawerContent;
