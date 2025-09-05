'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation'
export default function Nav(){
    const pathname = usePathname();
    const isActive = (path) => path === pathname;
    return (
       <nav>
            <ul>
                <li><Link  className={isActive ("/") ? 'activo' : '' } href="/">Casa</Link></li>
                <li><Link className={isActive ("/referentes") ? 'activo' : '' }href="/referentes">Referentes</Link></li>
                <li><Link className={isActive ("/Contactos") ? 'activo' : '' }href="/Contactos">Regsitros</Link></li>
                <li><Link className={isActive ("/fechas") ? 'activo' : '' }href="/fechas">Fechas</Link></li>
            </ul>
        
    </nav>
    )
}