import {Link} from 'react-router-dom';
import logof1 from '../../multimedia/formula-1.png'
import './header.css';

export default function Header() {
  return (
    <header>

        <div className="contenedor-header">
            <div className="logo">
            <Link to='/'><img src={logof1} alt="logo tienda" className="logoImg"/> </Link>
            
                <h2 className="F1Shop">F1 Shop</h2>            
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/catalogo'>Catalogo</Link></li>
                        <li><Link to='/carrito'>Carrito</Link></li>
                        <li><Link to='/login'>Iniciar Sesión</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}