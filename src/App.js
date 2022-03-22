import React from "react";
import ButtonContent from "./components/button/ButtonContent";
import DrawerContent from "./components/drawer/DrawerContent";
import LoaderContent from "./components/loader/LoaderContent";
import MessageContent from "./components/message/MessageContent";
import ModalContent from "./components/modal/ModalContent";
import PlachelhContent from "./components/placheholder/PlachelhContent";
import ProgresContent from "./components/progress/ProgresContent";
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
      <hr />
      <TooltipContent />
      <br />
      <hr />
      <ProgresContent />
      <br />
      <hr />
      <PlachelhContent />
    </>
  );
}
export default App;
