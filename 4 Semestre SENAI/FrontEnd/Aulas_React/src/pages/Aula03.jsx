import { PiHouseBold } from "react-icons/pi";
import { AiFillAliwangwang } from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi2";


export default function Aula03(){
    return(
        <div>
            <h1 className="text-3xl font-bold mt-4 text-slate-800" >Trabalhando com Icones e criando o Menu Sidebar</h1>
            <p>
                <PiHouseBold className="inline w-10 h-10 text-slate-800" />
                <AiFillAliwangwang className="inline w-10 h-10 text-slate-800"/>
                <HiAcademicCap  className="inline w-10 h-10 text-slate-800" />
            </p>
        </div>
    )
}