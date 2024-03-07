import { useState } from "react";
import Menubutton from "../../images/menu.png";
import Filter from "../../images/filter.png";
import Logos from "../../images/logose.svg";
import Logoes from "../../images/logost.svg";
import Dinner from "./Dinner";
import Slider from "./Carousal";

import Menu from "../../components/popups/Profile";

import Filters from "../../components/popups/Filter";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const [reqData, setReqData] = useState({
    user_id: 2,
    event_id: 3,
  });

  const [filters, setFilters] = useState(false);
  const [filterization, setFilterization] = useState(false);
  console.log("🚀 ~ Home ~ filterization:", filterization);
  const handleMenu = () => {
    setMenu(!menu);
    document.body.style.overflow = "hidden";
  };

  const handleFilters = () => {
    setFilters(!filters);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      {menu && <Menu setMenu={setMenu} />}
      {menu && (
        <div
          className="side_bar_background"
          onClick={() => {
            setMenu(false);
            document.body.style.overflow = "visible";
          }}
        />
      )}

      {filters && (
        <Filters setFilterization={setFilterization} setFilters={setFilters} />
      )}
      {filters && (
        <div
          onClick={() => {
            setFilters(false);
          }}
        />
      )}

      <div className="Homepage">
        <div className="home_inner">
          <div className="home_top">
            <div className="home_logo">
              <div className="log_top">
                <img src={Logoes} alt="" />
                <img src={Logos} alt="" />
              </div>
              <div className="logo_down">
                <span>Local Deals</span>
              </div>
            </div>
          </div>
          <div className="home_top_icon">
            <img src={Filter} alt="" onClick={handleFilters} />
            <img src={Menubutton} alt="" onClick={handleMenu} />
          </div>
        </div>
        <div>
          <Slider reqData={reqData} setReqData={setReqData} />
        </div>
        <div>
          <Dinner />
        </div>
      </div>
    </>
  );
};

export default Home;
