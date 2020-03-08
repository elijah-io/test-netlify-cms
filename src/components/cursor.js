import { useEffect } from "react"
import curDot from 'cursor-dot-v2'

const Cursor = () => {
    useEffect(() => {
        const cursor = curDot({
            diameter: 30,
            borderWidth: 2,
            borderColor: '#EADEDA',
            easing: 3,
            background: '#EADEDA'
        });
        cursor.over('a', {
            scale: 2,
            background: '#EADEDA',
        });
        return () => cursor.remove();
    }, []);
    return null;
}

export default Cursor;