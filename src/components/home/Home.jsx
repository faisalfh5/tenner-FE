import { useEffect, useState } from "react";
import Menubutton from "../../images/menu.png";
import Filter from "../../images/filter.png";
import Logos from "../../images/logose.svg";
import Logoes from "../../images/logost.svg";
import Dinner from "./Dinner";
import Slider from "./Carousal";
import { toast } from "react-toastify";
import Menu from "../../components/popups/Profile";

import Filters from "../../components/popups/Filter";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const [sliderData, setSliderData] = useState([]);
  console.log("🚀 ~ Home ~ sliderData:", sliderData);

  const [filters, setFilters] = useState(false);
  const [filterization, setFilterization] = useState("");
  console.log("🚀 ~ Home ~ filterization:", filterization);
  const handleMenu = () => {
    setMenu(!menu);
    document.body.style.overflow = "hidden";
  };

  const handleFilters = () => {
    setFilters(!filters);
    document.body.style.overflow = "hidden";
  };
  const applyFilterization = () => {
    let sortedData = [...sliderData];

    if (filterization === "Favorites") {
      sortedData.filter((item) => item.is_featured === 1);
    } else if (filterization === "Newest") {
      // Sort based on newest (created_at)
      sortedData.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    } else if (filterization === "Alphabetically") {
      sliderData.slice().sort((a, b) => {
        const nameA = (a.name || "").toLowerCase();
        const nameB = (b.name || "").toLowerCase();
        return nameA.localeCompare(nameB);
      });
    }

    // Update filtered data
    setSliderData(sortedData);
    toast.success("Filterization Apply");
  };
  useEffect(() => {
    // Apply filterization when sliderData changes
    applyFilterization();
  }, [filterization]);

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
          <Slider sliderData={sliderData} setSliderData={setSliderData} />
        </div>
        <div>
          <Dinner />
        </div>
      </div>
    </>
  );
};

export default Home;
