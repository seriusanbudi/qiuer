import "../styles/globals.css";
import "styles/tailwind.css";
import Nav from "components/Nav";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-poppins">
      <Nav />
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
