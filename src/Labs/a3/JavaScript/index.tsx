import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import ImpliedReturn from "./functions/ImpliedReturn";
import House from "./json/House";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "./arrays/ForLoops";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./string/TemplateLiterals";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";
function JavaScript() {
  console.log("Hello, JavaScript!");
  return (
    <div>
      <h1>JavaScript</h1>
      <FunctionDestructing />
      <Destructing />
      <Spreading />
      <House />
      <TemplateLiterals />
      <FilterFunction />
      <FindIndex />
      <FindFunction />
      <JsonStringify />
      <MapFunction />
      <ForLoops />
      <AddingAndRemovingDataToFromArrays />
      <ArrayIndexAndLength />
      <WorkingWithArrays />
      <FunctionParenthesisAndParameters />
      <ImpliedReturn />
      <ArrowFunctions />
      <ES5Functions />
      <TernaryOperator />
      <IfElse />
      <BooleanVariables />
      <VariableTypes />
      <VariablesAndConstants />
    </div>
  );
}
export default JavaScript;
