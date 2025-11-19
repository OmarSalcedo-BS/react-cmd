import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Imagen from "../components/Imagen";
import { imagenes } from "../api/dataBase";

export function Home() {
  return (
    <div className="home-container">
      <SideBar />
      <div className="home-container-galeria">
        <Header />
        <section className="home-container-imagen">
          {imagenes.map((item) => {
              return <Imagen imagen={item} />;
            })}
        </section>
      </div>
    </div>
  );
}
