import ModuleList from "./List";
import ModulesNavTop from "../ModulesNavTop";

function Modules() {
  return (
    <>
      <ModulesNavTop/>
      <div className="row">
        <div>
            <ModuleList />
        </div>
      </div>
    </>
  );
}
export default Modules;