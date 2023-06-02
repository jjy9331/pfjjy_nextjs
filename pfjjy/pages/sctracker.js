import { useEffect } from "react";

export default function Sctracker(){
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            document.getElementById('sctk').innerHTML = scrollY;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <h3 id="sctk"></h3>
        </div>
    )
}