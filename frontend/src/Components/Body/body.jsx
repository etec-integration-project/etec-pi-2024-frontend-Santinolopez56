
import './body.css';
import redbull from '../../multimedia/redbull.png';

export default function Body() {
  return (
    <body>
        <section id="hero">
            <div className="contenedor-body">
                <h1>Bienvenido a "F1 shop"<br />"Velocidad y Estilo"</h1>
                <form action="/catalogo">
                    <button id="mid">Mire Nuestro Catálogo</button>
                </form>
            </div>
        </section>

        <section id="f1-shop">
            <div className="contenedor-info">
                <div className="img-sobre-nosotros">
                    <img src={redbull} alt="imagen-sobre-nosotros" className="redbull" />
                </div>
                <p id='about-us'>
                    Somos apasionados por la Fórmula 1 y dedicados a ofrecer la mejor experiencia de compra para los fanáticos de este emocionante deporte. Nuestro compromiso es proporcionar productos de alta calidad que reflejen la velocidad, innovación y pasión de la Fórmula 1. Únete a nosotros y siente la emoción de la pista en cada compra.
                </p>
            </div>
        </section>
    </body>
  );
}
