import { Banner } from "./banner";
import { Feed } from "./feed/feed";
import { SideBar } from "./side-bar";

export const Home = () => {
  return (
    <div className="home-page">
      <Banner />

      <div className="page container">
        <div className="row">
          <Feed />
          <SideBar />
        </div>
      </div>
    </div>
  );
};
