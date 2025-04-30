import React from "react";
import { Card, Button } from "react-bootstrap";

type TodoListProps = {
  text: string;
};

export const TodoList: React.FC<TodoListProps> = ({ text }) => {
  return (
    <Card
      bg="dark"
      text="white"
      className="mb-3"
      style={{ maxHeight: "100px", overflow: "hidden" }}
    >
      <Card.Body className="d-flex justify-content-between align-items-center p-2">
        <Card.Text className="mb-0 text-truncate" style={{ flex: 1 }}>
          {text}
        </Card.Text>
        <div>
          <Button variant="danger" size="sm" className="me-2">
            Delete
          </Button>
          <Button variant="success" size="sm">
            Mark as Complete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
