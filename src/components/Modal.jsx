import { Form, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../app/crudSlice";

const FormModal = ({ show, handleClose, editTask }) => {
  const [formState, setFormState] = useState({});

  useEffect(() => {
    const stateValue = editTask
      ? editTask
      : {
          title: "",
          author: "",
          assigned_to: "",
          deadline: "",
        };

    setFormState(stateValue);
  }, [show]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask(formState));
  };

  return (
    <Modal
      className="text-dark"
      backdrop="static"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>{!editTask ? "Add New Task" : "Edit Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={formState.title}
              onChange={(e) =>
                setFormState({ ...formState, title: e.target.value })
              }
              type="text"
              placeholder="Enter Title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              value={formState.author}
              onChange={(e) =>
                setFormState({ ...formState, author: e.target.value })
              }
              type="text"
              placeholder="Enter Author"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Assigned</Form.Label>
            <Form.Control
              value={formState.assigned_to}
              onChange={(e) =>
                setFormState({ ...formState, assigned_to: e.target.value })
              }
              type="text"
              placeholder="Enter Assigned"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              value={formState.deadline}
              onChange={(e) =>
                setFormState({ ...formState, deadline: e.target.value })
              }
              type="date"
            />
            <Form.Text>Select the deadline</Form.Text>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
