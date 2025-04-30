import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { isComplete,deleteTodo } from "../features/Todos/TodoSlice";

type TodoListProps = {
  text: string;
  id: number,
  completed:boolean
};


export const TodoList: React.FC<TodoListProps> = ({ text,id,completed }:TodoListProps) => {
  const dispatch = useAppDispatch()
const handleDelete=()=>{
dispatch(deleteTodo(id))
  }
  const handleIscomplete = () => {
    dispatch(isComplete(id))
  }
  return (
    <Card
      bg="dark"
      text="white"
      className="mb-3"
      style={{ maxHeight: "100px", overflow: "hidden" }}
    >
      <Card.Body className="d-flex justify-content-between align-items-center p-2">
        <Form.Check
          type="checkbox"
          checked={completed}
          className="me-3"
          aria-label="Mark todo as complete"
        />
        <Card.Text
          className={`mb-0 text-truncate ${
            completed ? "text-decoration-line-through" : ""
          }`}
          style={{ flex: 1 }}
        >
          {text}
        </Card.Text>
        <div>
          <Button
            variant="danger"
            size="sm"
            className="me-2"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button variant="success" size="sm" onClick={handleIscomplete}>
            {completed ? "undo" : " Mark as Complete"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
