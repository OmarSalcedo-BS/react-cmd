import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Imagen from "../components/Imagen";

export function Home() {
  return (
    <div className="home-container">
      <SideBar />
      <div className="home-container-galeria">
        <Header />
        <section className="home-container-imagen">
          <Imagen />
        </section>
      </div>
    </div>
  );
}
