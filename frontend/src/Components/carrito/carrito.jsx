import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Carrito() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('productos')) || [];
        setCart(products);
        calcularPrecioTotal(products);
    }, []);

    function actualizarCarrito(newCart) {
        setCart(newCart);
        localStorage.setItem('productos', JSON.stringify(newCart));
        calcularPrecioTotal(newCart);
    }

    function calcularPrecioTotal(cart) {
        const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
        setTotalPrice(total);
    }

    function añadirUnaUnidad(id) {
        const newCart = cart.map(product => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });
        actualizarCarrito(newCart);
    }

    function restarUnaUnidad(id) {
        const newCart = cart
            .map(product => {
                if (product.id === id) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            })
            .filter(product => product.quantity > 0); // Elimina productos con cantidad 0
        actualizarCarrito(newCart);
    }

    function eliminarProducto(id) {
        const newCart = cart.filter(product => product.id !== id);
        actualizarCarrito(newCart);
    }

    function realizarCompra() {
        const carrito = localStorage.getItem('productos');
        console.log("Compra realizada con el carrito:", carrito);
        axios.post("/app/realizarCompra",{
            cart:JSON.stringify(localStorage.getItem("productos"))
        })
    }

    return (
        <div>
            {cart.length > 0 ? (
                cart.map(product => (
                    <div key={product.id}>
                        <img src={product.image || 'default-image-path.png'} alt={product.name} className="product-image" />
                        <p>Nombre: {product.name}</p>
                        <p>Precio: ${product.price}</p>
                        <p>Cantidad: {product.quantity}</p>
                        <button onClick={() => añadirUnaUnidad(product.id)}>+</button>
                        <button onClick={() => restarUnaUnidad(product.id)}>-</button>
                        <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                    </div>
                ))
            ) : (
                <p>El carrito está vacío</p>
            )}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={() => realizarCompra()}>Realizar compra</button>
        </div>
    );
}

export default Carrito;