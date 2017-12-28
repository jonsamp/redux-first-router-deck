import React from "react";
import { Heading, Slide, List, ListItem, Code } from "spectacle";

export default (
  <Slide
    transition={["slide"]}
    bgColor="secondary"
    align="flex-start flex-start"
  >
    <Heading size={6} textColor="white" textAlign="left">
      Review: Disadvantages
    </Heading>
    <List textColor="white">
      <ListItem>Somewhat random options to fix very specific issues</ListItem>
      <ListItem>
        Relatively new repo with one main (kind of whacky) contributor.
      </ListItem>
      <ListItem>New version coming named "Rudy"?</ListItem>
      <ListItem>Only one other big player uses this: freeCodeCamp 👻</ListItem>
    </List>
  </Slide>
);
