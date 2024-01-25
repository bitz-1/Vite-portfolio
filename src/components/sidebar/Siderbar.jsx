import "../../scss/siderbar.scss"
import Links from "./Links";
import ToggleBar from "./ToggleButton";
const Siderbar = () => {
  return (
    <div className="sidebar">
        <div className="bg">
            <Links/>
        </div>
        <ToggleBar/>
    </div>

  )
}
export default Siderbar;
