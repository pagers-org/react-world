import { Banner } from "./banner";
import { Feed } from "./feed";
import { SideBar } from "./side-bar";

export const Home = () => {
  return (
    <>
      <Banner />

      <div className="flex justify-center">
        <div className="page relative">
          <Feed />
          <SideBar />
        </div>
      </div>
    </>
  );
};
