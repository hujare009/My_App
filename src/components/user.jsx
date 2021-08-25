import React from "react";

class User extends React.Component {
  //User is component.
  constructor(props) {
    //when you use props you need constructor.
    super(props);

    this.state = {
      planet: "earth",
    };
    console.log("Hey I'm from Constructor");
  }
  //1-update
  static getDerivedStateFromProps(prop, state) {
    console.log("I'm from get derived state from props");
    return { planet: "jupiter" };
  }

  //2-update
  shouldComponentUpdate(nextProp, nextState) {
    console.log({
      nextProp,
      nextState,
    });
    return true;
  }

  //4--update
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log({ prevProp, prevState });
    return true;
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  //render is the view.
  // we use here Life-cycle Methods.
  render() {
    console.log("Hey I'm from render()");
    return (
      //components and states are used here.
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
        <h4>{this.state.planet}</h4>
      </div>
    );
  }
}

export default User;
