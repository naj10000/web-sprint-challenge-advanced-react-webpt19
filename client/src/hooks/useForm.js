// write your custom hook here to control your checkout form

import React, { useState }from 'react'

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue)

    const handleChanges = updatedValue => {
        setValues(updatedValue)
    }
    return [ values, setValues, handleChanges]
}

export default useForm
