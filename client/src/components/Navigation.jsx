import { Link, useLocation } from "react-router-dom";
import style from './css/navigation.module.css';
import { useState, useEffect } from "react";

export function Navigation() {
    const [key, setKey] = useState(0);
    const location = useLocation();

    useEffect(() => {
        // Cambiar la clave para forzar la remontaje del componente
        setKey(prevKey => prevKey + 1);
    }, [location.pathname]);

    return (
        <div key={key} className={`${style.containerNavigation} ${style.enhanceAnimation}`}>
            <Link to='/tasks'>
                <h1>Task App</h1>
            </Link>
            <Link to='/tasks-create'>
                <button className={style.addTaskButton}>+</button>
            </Link>
        </div>
    )
}
