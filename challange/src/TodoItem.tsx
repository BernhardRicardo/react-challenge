import { Checkbox } from '@mantine/core';
import { List, Flex, Button } from '@mantine/core';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }: { completed: boolean, id: string, title: string, toggleTodo: (id:string, checked:boolean) => void, deleteTodo: (id:string) => void }) {
 return (
    <Flex align={'center'} gap={'md'} justify={"space-between"}>
     <List.Item icon={
          <Checkbox 
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)} />
         }>  
         {title}
     </List.Item>
         <Button color='#ED2939' mr={"sm"} onClick={() => deleteTodo(id)}>Delete</Button>
    </Flex>
 )
}