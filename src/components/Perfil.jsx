import FotoPerfil from '../img/perfil.jpg'
import './Perfil.css'
const Perfil = ()=>{
    return(
        <div className='back-perfil'>
        <div className='perfil-container'>
            <img src={FotoPerfil} alt="Foto do Perfil" width={640} height={625}/>
            <div>
                <h1>Desenvolvedor Front End && Back End</h1>
                <h3>Palmas - To 🌞</h3>
            </div>
        </div>
        </div>
    );
}

export default Perfil;