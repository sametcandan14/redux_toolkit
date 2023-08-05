import { Form, Button, Modal } from "react-bootstrap";

const FormModal = ({ show, handleClose }) => {
  return (
    <Modal
      className="text-dark"
      backdrop="static"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Enter Author" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Assigned</Form.Label>
            <Form.Control type="text" placeholder="Enter Assigned" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" />
            <Form.Text>Select the deadline</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
