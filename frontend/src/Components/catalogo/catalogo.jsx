import React from 'react';
import './catalogo.css';
import imanes from '../../multimedia/imanes.png';
import ruedas from '../../multimedia/neumaticos.png';
import GorraF from '../../multimedia/gorraF.png';
import BuzoM from '../../multimedia/buzoM.png';
import RemeraASM from '../../multimedia/remeraASM.png';
import RemeraF from '../../multimedia/ferrari.png';
import RemeraRB from '../../multimedia/redbull.png';
import CamperaMC from '../../multimedia/camperaMC.png';
import JugueteM from '../../multimedia/autoM.png';

const products = [
  { id: 1, name: 'Imanes Circuitos', price: '$100', src: imanes },
  { id: 2, name: 'Llavero Ruedas', price: '$200', src: ruedas },
  { id: 3, name: 'Gorra Ferrari', price: '$300', src: GorraF },
  { id: 4, name: 'Buzo Mercedes', price: '$400', src: BuzoM },
  { id: 5, name: 'Remera Aston Martin', price: '$500', src: RemeraASM },
  { id: 6, name: 'Remera Ferrari', price: '$600', src: RemeraF },
  { id: 7, name: 'Remera Red Bull', price: '$700', src: RemeraRB },
  { id: 8, name: 'Campera McLaren', price: '$800', src: CamperaMC },
  { id: 9, name: 'Auto de Juguete Mercedes', price: '$900', src: JugueteM },
];

function Catalogo() {
  return (
    <div className="catalog-container">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.src} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <button className="catalogo-buy-button">Comprar</button> {/* Botón con clase única */}
        </div>
      ))}
    </div>
  );
}

export default Catalogo;

