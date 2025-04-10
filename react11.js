"use client";
import React, { Component } from 'react';

type props = object;

type state = {
  message: string;
  count: number;
  displayBio: boolean;
};

class App extends Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      message: 'hello, world',
      count: 0,
      displayBio: true,
    };
  }

  render() {
    const bio = this.state.displayBio ? (
      <div>
        <h3>coding is fun</h3>
      </div>
    ) : null;

    return (
      <div>
        <h1>i like coding</h1>
        {bio}
      </div>
    );
  }
}

export default App;
