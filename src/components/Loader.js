import React from 'react';
import  "./Loader.css";
import scuola_logo2a from 'C:/Users/loki/Desktop/projects/scuola/src/assets/images/logo/scuola_logo2a.svg';
import scuola_logo2b from 'C:/Users/loki/Desktop/projects/scuola/src/assets/images/logo/scuola_logo2b.svg';

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