import { useState } from "react";
import { TodoList } from "./TodoList";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addTodo } from "../features/Todos/TodoSlice";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";

export const AddTodoForm = () => {
  const [TodoText, setTodoText] = useState<string>("");
  const dispatch = useAppDispatch();
  const Todos = useAppSelector((state) => state.todo.todo);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (TodoText.trim()) {
      dispatch(addTodo(TodoText));
      setTodoText("");
    }
  }

  return (
      <Container className="mt-4">
          <div><h1>MY-TASKS</h1></div>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form onSubmit={handleFormSubmit}>
            <InputGroup className="mb-3 shadow-sm">
              <Form.Control
                placeholder="What needs doing?"
                value={TodoText}
                onChange={(e) => setTodoText(e.target.value)}
                style={{ height: "50px" }}
              />
              <Button variant="primary" type="submit">
                Add Todo
              </Button>
            </InputGroup>
          </Form>
          <div>
            {Todos.map((todo) => (
              <TodoList key={todo.id} text={todo.text} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
