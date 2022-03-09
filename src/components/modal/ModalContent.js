import React, { useState } from "react";
import { Modal, ButtonToolbar, Button } from "rsuite";

const ModalContent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // 2
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  return (
    <>
      <div className="modal-container">
        <ButtonToolbar>
          <Button onClick={handleOpen2}> Open</Button>
        </ButtonToolbar>

        <Modal open={open2} onClose={handleClose2}>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>{/* <Paragraph /> */}</Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose2} appearance="primary">
              Ok
            </Button>
            <Button onClick={handleClose2} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="modal-container">
        <ButtonToolbar>
          <Button onClick={handleOpen}>Disable</Button>
        </ButtonToolbar>

        <Modal
          backdrop="static"
          role="alertdialog"
          open={open}
          onClose={handleClose}
          size="xs"
        >
          <Modal.Body>
            Once a project is disabled, there will be no update on project
            report, and project members can access history data only. Are you
            sure you want to proceed ?
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} appearance="primary">
              Ok
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalContent;
