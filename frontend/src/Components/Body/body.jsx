import React from 'react';
import './body.css';

export default function Body() {
  return (
    <body>
      <section id="hero">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="frontend\src\multimedia\remera ferrari.png" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="frontend\src\multimedia\llavero neumaticos.png" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="frontend\src\multimedia\imanes.png" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Siguiente</span>
          </a>
        </div>
        <div className="contenedor-body">
          <h1>Bienvenido a F1 Shop<br />"Velocidad y Estilo"</h1>
          <form action="/catalogo">
            <button>Mire Nuestro Catálogo</button>
          </form>
        </div>
      </section>

      <section id="about-us">
        <div className="contenedor-info">
          <h2>Somos F1 Shop</h2>
          <p>F1 Shop ofrece una amplia gama de productos de Fórmula 1. Desde ropa y accesorios hasta modelos de autos a escala, tenemos todo lo que necesitas para mostrar tu pasión por la F1. Descubre la velocidad y el estilo con nosotros.</p>
          <div className="img-sobre-nosotros">
            <img src="" alt="frontend\src\multimedia\remera red bull.png" className="imagen-producto" />
          </div>
        </div>
      </section>
    </body>
  );
}

