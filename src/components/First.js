import React, { useState } from 'react'

export const First = () => {
    const [tabList, setTabList] = useState([
        { id: 1, content: 'Pierwsza notatka' }
    ])
    const [stateInput, setStateInput] = useState('')
    const handleInput = (e) => {
        e.preventDefault();
        setStateInput(e.target.value)
    }
    const handleTab = () => {
        const newObject = {
            id: tabList.length + 1,
            content: stateInput
        }
        setTabList([...tabList, newObject])
    }
    const handleDelete = (id) => {
        const newList = tabList.filter(item => item.id !== id)
        setTabList([...newList])
    }
    return (
        <>
            <p>{stateInput}</p>
            <input type="text" value={stateInput} onChange={handleInput} />
            <button onClick={handleTab}>Add</button>
            {tabList.map(item => (
                <div key={item.id} onClick={() => handleDelete(item.id)}>
                    <p>{item.id}</p>
                    <p>{item.content}</p>
                </div>
            ))}
        </>
    )
}