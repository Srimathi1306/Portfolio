import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-container">{children}</main>
    </div>
  );
}

export default Layout;
