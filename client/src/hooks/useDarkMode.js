import React, { useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function useDarkMode() {

    const [someValue, someSetValue ] = useLocalStorage(false)

    useEffect(()=>{
        if (someValue) {

            document.querySelector('body').classList.add('dark-mode')
        } else {

            document.querySelector('body').classList.remove('dark-mode')

        }

    }, [someValue])

    return [someValue, someSetValue]
}

export default useDarkMode
