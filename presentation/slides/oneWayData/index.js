import React from "react";
import { Heading, Slide, Text, Image } from "spectacle";
import oneWayData from "./oneWayData.png";

export default (
  <Slide
    transition={["slide"]}
    bgColor="secondary"
    align="flex-start flex-start"
  >
    <Heading size={6} textColor="white" textAlign="left">
      Data: Structure
    </Heading>
    <Image src={oneWayData} height="75vh" />
  </Slide>
);
