import React, { useEffect, useState } from 'react';

function Carrito() {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('productos')) || [];
        setCart(products);
    }, [])

    function actualizarCarrito(newCart) {
        setCart(newCart)
        localStorage.setItem('productos', JSON.stringify(newCart))
    }

    function añadirUnaUnidad(id) {
        const newCart = cart.map(product => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        })
        actualizarCarrito(newCart);
    }

    function restarUnaUnidad(id) {
        const newCart = cart.map(product => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        }).filter(product => product.quantity > 0); 
        actualizarCarrito(newCart);
    }

    function eliminarProducto(id) {
        const newCart = cart.filter(p => p.id !== id)
        actualizarCarrito(newCart)
    }

    return (<div>
        {cart.map(product => {
            <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
                <button onClick={() => añadirUnaUnidad(product.id)}>+</button>
                <button onClick={() => restarUnaUnidad(product.id)}>-</button>
                <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
            </div>
        })}
    </div>)
}

export default Carrito