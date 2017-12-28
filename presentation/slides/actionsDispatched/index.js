import React from "react";
import { Heading, Slide, Text, Image } from "spectacle";
import actionsDispatched from "./actionsDispatched.png";

export default (
  <Slide
    transition={["slide"]}
    bgColor="secondary"
    align="flex-start flex-start"
  >
    <Heading size={6} textColor="white" textAlign="left">
      Setup: Actions Dispatched
    </Heading>
    <Text textColor="white" style={{ fontSize: 24 }} textAlign="left">
      Load the app, see actions dispatched from redux first router.
    </Text>
    <Image src={actionsDispatched} height="75vh" />
  </Slide>
);
