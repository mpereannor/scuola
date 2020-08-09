import React, { useState } from 'react';

const useCookie = ( key, defaultValue ) => { 
    const getCookie = () => getItem(key) || defaultValue;
    const [ cookie, setCookie ] = useState(getCookie());
    const updateCookie = (value, numberOfDays) => { 
        setCookie(value);
        setItem(key, value, numberOfDays);
    };
    return [cookie, updateCookie];
}

const getItem = key => 
document.cookie.split(";").reduce(( total, currentCookie ) => { 
    const item = currentCookie.split("=");
    const storedKey = item[0];
    const storedValue = item[1];
    
    return key === storedKey
    ? decodeURIComponent(storedValue)
    : total;
}, '')

const HALF_HOUR = 1000 * 60 * 60;


const setItem = (key, value, numberOfDays) => { 
    const now = new Date();

    now.setTime(now.getTime() + ( numberOfDays * HALF_HOUR ));

    document.cookie = `${key} = ${value};
    expires=${now.toUTCString()}; path=/`;
}
export default useCookie;