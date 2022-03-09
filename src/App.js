import React from "react";
import ButtonContent from "./components/button/ButtonContent";
import DrawerContent from "./components/drawer/DrawerContent";
import LoaderContent from "./components/loader/LoaderContent";
import MessageContent from "./components/message/MessageContent";
import ModalContent from "./components/modal/ModalContent";
import TooltipContent from "./components/tooltip/TooltipContent";
function App() {
  return (
    <>
      <DrawerContent />
      <br />
      <hr />
      <ButtonContent />
      <br />
      <hr />
      <LoaderContent />
      <br />
      <hr />
      <MessageContent />
      <br />
      <hr />
      <ModalContent />
      <br />
      <hr />
      <TooltipContent />
    </>
  );
}
export default App;
