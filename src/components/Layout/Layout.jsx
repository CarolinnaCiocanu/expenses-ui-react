import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="aside">
        <Navigation />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
