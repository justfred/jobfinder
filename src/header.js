import React from "react";

class Title extends React.Component {
  render() {
    return <h1>Jobfinder</h1>;
  }
}

class SubTitle extends React.Component {
  render() {
    return <div>Find a job</div>;
  }
}

export class Header extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <Title />
        <SubTitle />
      </div>
    );
  }
}
