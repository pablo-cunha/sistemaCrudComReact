import { useState } from "react";

export default function useComponentChange() {
    const [component, setChange] = useState<'table' | 'form'>('table')

    const showTable  = () => setChange('table')
    const showForm = () => setChange('form')


    return {
        setForm: component === 'form',
        setTable: component === 'table',
        showForm,
        showTable
    }
}