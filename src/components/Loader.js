import React from 'react';
import  "./Loader.css";
import scuola_logo2a from '../assets/images/logo/scuola_logo2a.svg'
import scuola_logo2b from '../assets/images/logo/scuola_logo2b.svg'


export const Transition = () => { 
    return ( 
        <section>
            <img className="bottom"
            src={ scuola_logo2a }>
            </img>
            <img className="top"
            src={ scuola_logo2b }>
            </img>
        </section>

    )
}