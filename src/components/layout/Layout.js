import Header from "@/layout/Footer";
import Footer from "@/layout/Header";

function Layout({ children }) {
  const style = { minHeight: "700px" };

  return (
    <>
      <Footer />
      <div style={style}>{children}</div>
      <Header />
    </>
  );
}

export default Layout;
