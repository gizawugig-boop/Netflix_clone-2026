import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import RowList from "../../components/Rows/RowLists/RowList";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
}
