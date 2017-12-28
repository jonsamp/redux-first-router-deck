import React from "react";
import { Heading, Slide, CodePane } from "spectacle";
import thunks from "./thunks";

export default (
  <Slide
    transition={["slide"]}
    bgColor="secondary"
    align="flex-start flex-start"
  >
    <Heading size={6} textColor="white" textAlign="left">
      Data: RFR Thunks
    </Heading>
    <div
      style={{
        maxHeight: "90vh",
        overflow: "scroll",
        paddingBottom: "20vh"
      }}
    >
      <CodePane theme="dark" lang="javascript" source={thunks} textSize={25} />
    </div>
  </Slide>
);
