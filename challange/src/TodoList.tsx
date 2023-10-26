import { TodoProps } from "./App"
import { TodoItem } from "./TodoItem"
import { Flex, List } from '@mantine/core';

export function TodoList( {todos, toggleTodo, deleteTodo} : {todos: TodoProps[], toggleTodo: (id:string, completed:boolean) => void, deleteTodo: (id:string) => void} ) {
    return (
       <Flex h={"63vh"} style={{overflowY:'scroll'}}>
         <List style={{display:"flex", flexDirection:"column", gap:"1rem", width:"100%"}}>
         {todos.length === 0 && 'No Todos'}
         {todos.map(todo => {
          return (
           <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
           )
          })}
       </List>
      </Flex>
    )
}