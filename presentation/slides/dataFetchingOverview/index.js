import React from 'react';
import { Heading, Slide, List, ListItem, Code } from 'spectacle';

export default (
  <Slide
    transition={['slide']}
    bgColor="secondary"
    align="flex-start flex-start"
  >
    <Heading size={6} textColor="white" textAlign="left">
      Data: Fetching
    </Heading>
    <List textColor="white">
      <ListItem>All client side data exists in one store.</ListItem>
      <ListItem>
        No need to fetch data with{' '}
        <Code textColor="#ffc107">componentDidMount</Code> (but you still can)
      </ListItem>
      <ListItem>
        Components only need to receive/present data and dispatch what happened
      </ListItem>
      <ListItem>Works great with sagas</ListItem>
    </List>
  </Slide>
);
