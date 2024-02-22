import ModuleList from "../Modules/List";
import ModulesNavTop from "../ModulesNavTop";
import CourseStatus from "./Status";

function Home() {
    return (
        <>
            <ModulesNavTop/>
            <div className="row">
                <div className="col wd-bg-color-blue d-md-block d-lg-block" >
                    <ModuleList />
                </div>
                <div className="col-lg-3 col-xl-2 d-none d-lg-block wd-bg-color-green">
                    <CourseStatus />
            </div>
        </div>
    </>
  );
}
export default Home;