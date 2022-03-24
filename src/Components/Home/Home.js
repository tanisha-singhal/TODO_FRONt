import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Todoform from "../todo/Todoform";
import TodoList from "../todo/TodoList";
import axios from "axios";
import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";

function Home() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("tokenId")) {
      async function fetchData() {
        try {
          const data = await axios.get(
            `http://localhost:5000/api/todo/fetchtodo`,
            {
              headers: {
                tokenId: localStorage.getItem("tokenId"),
              },
            }
          );

          setTodos(data.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    } else {
      navigate("/");
    }
  }, [navigate]);
  const addTodoHandler = async (todo) => {
    let { data } = await axios.post(
      `http://localhost:5000/api/todo/addtodo`,
      { value: todo },
      {
        headers: {
          tokenId: localStorage.getItem("tokenId"),
        },
      }
    );

    setTodos((prevTodo) => {
      return [data, ...prevTodo];
    });
  };

  const checkHandler = (_id) => {
    let x = { ...todos.find((todo) => todo._id === _id) };
    let newTodos = [...todos].map((todo) => {
      if (todo._id === _id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });
    axios
      .put(
        `http://localhost:5000/api/todo/updatetodo/${_id}`,
        { todoToBeUpdated: x },
        {
          headers: {
            tokenId: localStorage.getItem("tokenId"),
          },
        }
      )
      .then((response) => {
        console.log(response.data.todo);
        setTodos(newTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteHandler = (_id) => {
    axios
      .delete(`http://localhost:5000/api/todo/deletetodo/${_id}`, {
        headers: {
          tokenId: localStorage.getItem("tokenId"),
        },
      })
      .then((res) => {
        console.log(res.data);
      });
    let copy = [...todos].filter((todo) => {
      return todo._id !== _id;
    });
    setTodos(copy);
  };
  const logoutHandler = () => {
    localStorage.removeItem("tokenId");
  };
  return (
    <div className={classes.home}>
      <Todoform onAddTodo={addTodoHandler} />
      <TodoList todos={todos} onCheck={checkHandler} onDelete={deleteHandler} />
      <NavLink to="/" className={classes.logout} onClick={logoutHandler}>
        Logout
      </NavLink>
    </div>
  );
}

export default Home;
