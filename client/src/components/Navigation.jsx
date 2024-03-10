import { Link, useLocation } from "react-router-dom";
import style from './css/navigation.module.css';
import { useState, useEffect } from "react";

export function Navigation() {
    const [key, setKey] = useState(0);
    const location = useLocation();

    useEffect(() => {
        // Cambiar la clave para forzar el remontaje del componente
        setKey(prevKey => prevKey + 1);
    }, [location.pathname]);

    // Función para comprobar si se debe mostrar el botón de añadir
    const shouldShowAddButton = () => {
        // Lista de rutas en las que se mostrará el botón de añadir
        const allowedPaths = ['/tasks']; // Agrega las rutas deseadas aquí

        // Comprueba si la ubicación actual está en la lista de rutas permitidas
        return allowedPaths.includes(location.pathname);
    };

    return (
        <div key={key} className={`${style.containerNavigation} ${style.enhanceAnimation}`}>
            <Link to='/tasks'>
                <h1>Task App</h1>
            </Link>
            {shouldShowAddButton() && (
                <Link to='/tasks-create'>
                    <button className={style.addTaskButton}>+</button>
                </Link>
            )}
            <Link to='/tasks-done'>
                <h1>Tasks Done</h1>
            </Link>
        </div>
    )
}
