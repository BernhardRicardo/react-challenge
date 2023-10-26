import { TextInput, Button, Flex } from '@mantine/core';
import { useState } from "react"

export function NewTodoForm(props : any) {
    const [newItem, setNewItem] = useState("")
    
    function handleSubmit(e : any) {
        e.preventDefault()
        if (newItem === "") return
        props.onSubmit(newItem)
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Flex align={'center'} gap={'md'} mb={"0.5rem"}>
             {/* <label htmlFor="item">New Item</label> */}
            <TextInput 
                label="New Todo"
                placeholder="Go to the gym"
                w={"100%"}
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text" 
                id="item"/>
            </Flex>
            <Flex align={'center'} justify={'flex-end'}>
             <Button type='submit'>Add</Button>
            </Flex>
        </form>
    )
}