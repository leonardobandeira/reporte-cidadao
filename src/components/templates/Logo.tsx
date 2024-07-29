import Image from "next/image";
import logo from './../../images/logo-texto.png'

export default function Logo() {
    return (
        <div className="w-52 h-w-52 p-4">
            <Image
                src={logo}
                alt="Logo do Reporte Cidadão"
            />
        </div>
    )
}