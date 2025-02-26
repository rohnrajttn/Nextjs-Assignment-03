import "@/styles/globals.css";
import Header from "../pages/Header.js";
export default function App({ Component, pageProps }) {
  return(
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  ) 
}
