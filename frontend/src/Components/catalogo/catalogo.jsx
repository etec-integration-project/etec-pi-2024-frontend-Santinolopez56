import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './catalogo.css';

function Catalogo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/app/productos');
        console.log(response)
        setProducts(response.data.productos);  
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  function añadirAlCarrito(producto) {
    console.log(producto, 'añadido')
    let cart = JSON.parse(localStorage.getItem('productos'))

    if (cart.some(p => p.id === producto.id)) {
      cart.forEach(p => {
        if (p.id === producto.id) {
          p.quantity++;
        }
      })
    } else {
      cart.push({
        id: producto.id,
        img: producto.image,
        name: producto.name,
        price: producto.price,
        quantity: 1
      })
    }

    localStorage.setItem('productos', JSON.stringify(cart))

    alert(`${producto.name} ha sido añadido a tu carrito.`);
  }

  return (
    <div className="catalog-container">
      {products.length > 0 ? (
        products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image || 'default-image-path.png'} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="catalogo-buy-button" onClick={() => añadirAlCarrito(product)}>Comprar</button>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
}

export default Catalogo;
