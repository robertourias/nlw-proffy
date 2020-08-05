import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/2049373?s=460&u=a32908dcb5d3441e58eb296f2cd04a7cb68eaa57&v=4" alt="Roberto Nicoletti"/>
                        <div>
                            <strong>Roberto Nicoletti</strong>
                            <span>Quimica</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 30,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;