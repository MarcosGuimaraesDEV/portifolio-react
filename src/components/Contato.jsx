import './Contato.css'
const Contato = ()=>{
    return (
        <div className='back-contato'>
        <div id="contato">
           <p className='texto-contato'>Desenvolvedor disponível para desafios em empresas consolidadas ou startups.
                Aberto a novas oportunidades e ansioso por colaborações.
            </p>
            <ul>
                <li><a href="mailto:guimararesmarcosuft@gmail.com" rel="noreferrer noopener">guimaraesmarcosuft@gmail.com</a></li>
                <li><a href="https://wa.me/6399175735" target="_blank" rel="noreferrer noopener">63 9 9917-5735</a></li>
                <li><a href="https://www.linkedin.com/in/marcosviniciusguimaraes/"  target="_blank" rel="noreferrer noopener">Linkedin</a></li>
            </ul>
        </div>
        </div>
    );
}

export default Contato;