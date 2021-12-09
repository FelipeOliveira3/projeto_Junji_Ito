import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Junji Ito</Link>
                </li>
                <li>
                    <Link to="/UseState">Como funcionam as suas obras</Link>
                </li>
                <li>
                    <Link to="/UseEffect">Sobre o autor</Link>
                </li>
                <li>
                    <Link to="/UseContext">Principais obras</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu