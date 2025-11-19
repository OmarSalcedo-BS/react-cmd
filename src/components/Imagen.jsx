import './Imagen.css';

const Imagen = ({ imagen }) => {
  return (
    <>
      <div class="stack">
        <div class="card">
          <div class="image">
            <img src={imagen} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Imagen