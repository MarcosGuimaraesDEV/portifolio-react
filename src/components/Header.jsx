import './Header.css'
const Header = ()=>{
   return(
    <div className='back-header'>
        <div className='header-container'>
            <span className='header-nome'>Marcos Guimarães</span>
            <ul className='header-list'>
                <li><a href="#experiencia">Experiência</a> </li>
                <li><a href="#formacao">Formação</a> </li>
                <li><a href="#contato">Contato</a> </li>
            </ul> 
        </div>
    </div>
   ); 
}

export default Header;