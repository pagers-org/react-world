interface HomePageContainerProps {
  children: React.ReactNode;
}

const HomePageContainer: React.FC<HomePageContainerProps> = ({ children }) => {
  return <div className="home-page">{children}</div>;
};

export default HomePageContainer;
