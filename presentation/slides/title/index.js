import React from "react";
import { Heading, Slide, Text } from "spectacle";

const coverImage =
  "https://images.unsplash.com/photo-1508930883516-7f594c5b68b9?auto=format&fit=crop&w=2250&q=80";

export default (
  <Slide
    transition={["slide"]}
    bgColor="secondary"
    bgImage={coverImage}
    align="flex-start flex-start"
  >
    <Heading size={1} lineHeight={1} textColor="black" textAlign="left">
      Redux First Router
    </Heading>
    <Text textColor="black" textAlign="left">
      Routing, actions, and loading data
    </Text>
  </Slide>
);
