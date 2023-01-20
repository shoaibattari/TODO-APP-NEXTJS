"use client"
import { Button, Flex, ListItem, UnorderedList, Text, Input, Box } from '@chakra-ui/react'
import { use, useState } from 'react'
export default function Home() {
  const [tasks, setTasks] = useState(['first'])
  const [Item, setItem] = useState("")
  function removeItem(taskName: string) {
    setTasks(tasks.filter(task => {
      return task != taskName
    }))
  }


  function AddItem() {
    if (Item != "" && !tasks.includes(Item)) {
      let temp = tasks;
      temp.push(Item)
      setTasks(temp)
      setItem("")
    }
  }
  return (
    <>
      <Flex
        padding='2'
        flexDirection="column">
        <Text fontSize='3xl' textAlign='center' color='blue.400'>AWESOME TODO APP </Text>
        <Text fontSize='3xl' color='purple'>PLEASE ENTER YOUR TODOS: </Text>
        <Input
          placeholder='Item Name'
          value={Item}
          color="black"
          // border='solid'
          onChange={(e) => {
            setItem(e.target.value)
          }}
        >
        </Input>


        <Button size='lg' m='5' bgColor='blue.400' color='white'
          onClick={AddItem}>Add Item</Button>
      </Flex>
      <Box>
        <UnorderedList
          p="1"
        >
          {tasks.map((task) => {
            return (<ListItem key={task} p='1' m='1'  >
              {task}
              <Button size='md' bgColor='red.400' color='black'
                ml={['80%', "80%", "90%"]}
                mt={['-5',"-5",'0']}
                onClick={() => {
                  removeItem(task)
                }}>
                Delete
                
              </Button>


            </ListItem>)
          })}
        </UnorderedList></Box>

    </>)

}