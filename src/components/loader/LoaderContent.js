import React from "react";
import { Loader } from "rsuite";

const LoaderContent = () => {
  return (
    <>
      <Loader />
      <div>
        <Loader speed="fast" content="Fast" />
        <hr />
        <Loader speed="normal" content="Normal" />
        <hr />
        <Loader speed="slow" content="Slow" />
      </div>
    </>
  );
};

export default LoaderContent;
