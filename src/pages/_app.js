import "../components/layout/layout.css";
import Header from "../components/layout/header";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import Footer from "../components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
