import React, { useState, useEffect } from "react";
import { Button, Box, TextField, Stack, IconButton, Checkbox, Typography } from "@mui/material"
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';

const ToDoList = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        const todosFromLs = localStorage.getItem("todos")
        if (todosFromLs) {
            setTodos(JSON.parse(todosFromLs))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleInputChange = (newInputValue) => {
        setInputValue(newInputValue)
    }

    const handleAddBtnClick = () => {
        if(inputValue.replace(/ /g, "")!=="") {
            const newTodo = {
                id: `${new Date().getTime()}-${Math.random()}`,
                text: inputValue,
                isCompleted: false,
            }
            setTodos([...todos, newTodo])
            setInputValue("")
        }
    }

    const handleSetCompleted = (obj) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id === obj.id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                }
            }
            return todo
        }))
    }

    const handleDelete = (obj) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== obj.id))
    }

    return (
        <Stack sx={{
            alignItems: "center",
            margin: "auto",
            padding: "2rem",
            width: 500,
            maxWidth: "90%",
            borderRadius: "10px",
            border: ({palette}) => `1px solid ${palette.divider}`,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            background: "#00101fda"
        }}>
            <Stack direction="row" spacing={2} sx={{
                mb: "2rem",
                alignItems: "center"
            }}>
                <ListAltRoundedIcon sx={{fontSize: 32}} color="primary" />
                <Typography variant="h5" sx={{
                    fontWeight: 700,
                    color: ({palette}) => palette.background.paper
                }}>ToDoList</Typography>
            </Stack>
            <Box sx={{
                display: "flex",
                gap: "1rem",
                width: "100%",
                mb: "4rem",
            }}>
                <TextField
                    value={inputValue}
                    onChange={(event) => {
                        handleInputChange(event.target.value)
                    }}
                    placeholder="Enter To Do"
                    sx={{
                        flex: 1,
                    }}
                    InputProps={{
                        sx: {
                            background: ({palette}) => palette.background.paper
                        }
                    }}
                />
                <Button variant="contained" onClick={handleAddBtnClick}>Add</Button>
            </Box>
            <Stack sx={{
                flex: 1,
                width: "100%",
                gap: "1rem",
            }}>
            {todos.map((obj) => (
                <Stack key={`obj.id`} direction="row" sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                    borderRadius: "8px",
                    width: "100%",
                    border: ({palette}) => `1px solid ${palette.divider}`,
                    background: ({palette}) => obj.isCompleted ? `#00e087` : palette.background.paper
                }}>
                    <Box style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                    }}>
                        <Checkbox checked={obj.isCompleted} onChange={() => handleSetCompleted(obj)} />
                        <Typography sx={{ textDecoration: obj.isCompleted ? "line-through" : "none" }}>{obj.text}</Typography>
                    </Box>
                    <IconButton onClick={() => handleDelete(obj)} color="error"><DeleteTwoToneIcon /></IconButton>
                </Stack>
            ))}
            </Stack>
        </Stack>
    )
}

export default ToDoList