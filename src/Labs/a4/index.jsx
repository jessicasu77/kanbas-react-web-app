import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h2>Assignment 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
    </div>
  );
}

export default Assignment4;
