import './App.css';
import '@mantine/core/styles.css';
import { useEffect, useState } from 'react'
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList'
import { Flex, MantineProvider } from '@mantine/core';

export interface TodoProps {
  id: string
  title: string
  completed: boolean
}

export default function App() {
  const [todos, setTodos] = useState<TodoProps[]>(() => {
    const localValue = localStorage.getItem('todos')
    if (localValue) {
      return JSON.parse(localValue)
    }
    return []
  })

  useEffect(() => {
    console.log('todos', todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo (title : string) {
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false}]
    })
  }

  function toggleTodo (id : string, completed : boolean)  {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo (id : string) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <MantineProvider>
      <Flex justify={'center'} pt={"5rem"}>
        <Flex direction={"column"} miw={"25%"} justify={"space-between"}>
          <NewTodoForm onSubmit={addTodo} />
          <h1 className='header'>Todo List</h1>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo= {deleteTodo}/>
        </Flex>
      </Flex>
    </MantineProvider>
  );
}

