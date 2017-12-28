import React from "react";
import { Heading, Slide, List, ListItem, Code } from "spectacle";

export default (
  <Slide
    transition={["slide"]}
    bgColor="secondary"
    align="flex-start flex-start"
  >
    <Heading size={6} textColor="white" textAlign="left">
      Review: Overview
    </Heading>
    <List textColor="white">
      <ListItem>Single data store</ListItem>
      <ListItem>
        Everything is a dispatched action or a received prop to components
      </ListItem>
      <ListItem>Check it out now in Author ✏️</ListItem>
    </List>
  </Slide>
);
