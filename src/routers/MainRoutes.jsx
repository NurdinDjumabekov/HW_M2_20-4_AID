////hooks
import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//// pages
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import MainPage from "../pages/MainPage/MainPage";
import MicroticPage from "../pages/MicroticPage/MicroticPage";
import NetworksPage from "../pages/NetworksPage/NetworksPage";
import HaProxy from "../pages/HaProxyPage/HaProxyPage";
import IpAddresPage from "../pages/IpAddresPage/IpAddresPage";

//// components
// import { Preloader } from "../components/Preloader/Preloader";
// import Alerts from "../components/Alerts/Alerts";

////fns

const MainRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<SignIn />} /> */}
        <Route element={<MainLayouts />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/microtic" element={<MicroticPage />} />
          <Route path="/networks" element={<NetworksPage />} />
          <Route path="/ha-proxy" element={<HaProxy />} />
          <Route path="/ip-addres" element={<IpAddresPage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <Alerts />
      <Preloader /> */}
    </>
  );
};

export default MainRoutes;
