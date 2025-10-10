import Image from "next/image";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import PrinterSupportOptions from "./Components/PrinterSupportOptions";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Banner/>
      <PrinterSupportOptions/>
      <Footer/>
    </>
  );
}
