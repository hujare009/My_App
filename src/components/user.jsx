/*import React from "react";


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
*/
import React, { useEffect, useState } from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("earth");

  //componentDidMount
  useEffect(() => {
    setPlanet("jupiter");
    console.log("component mounting");
    //return console.log("bye bye");
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log("planet changed");
  }, [planet]);

  return (
    //components and states are used here.
    //this is how HOOKS work and hlp to reduse the code but same output--------------IMP---------------------
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button onClick={() => setPlanet("pluto")}>{planet}</button>
    </div>
  );
};

export default User;
