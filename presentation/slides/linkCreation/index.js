import React from "react";
import { Heading, Slide, CodePane } from "spectacle";
import linkCreation from "./linkCreation";

export default (
  <Slide
    transition={["slide"]}
    bgColor="secondary"
    align="flex-start flex-start"
  >
    <Heading size={6} textColor="white" textAlign="left">
      Links: Creation
    </Heading>
    <div
      style={{
        maxHeight: "90vh",
        overflow: "scroll",
        paddingBottom: "20vh"
      }}
    >
      <CodePane lang="javascript" source={linkCreation} textSize={32} />
    </div>
  </Slide>
);
