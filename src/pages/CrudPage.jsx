import React from "react";
import { Button, Table } from "react-bootstrap";
import { useState } from "react";
import FormModal from "../components/Modal";

const CrudPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="px-3">
      <FormModal show={showModal} handleClose={handleClose} />
      <Button
        onClick={() => setShowModal(true)}
        variant="success"
        className="my-3"
      >
        Add New Task
      </Button>
      <Table variant="dark" hover bordered striped>
        <thead>
          <tr>
            <th>id</th>
            <th>Task</th>
            <th>Author</th>
            <th>Assigned</th>
            <th>Date</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Editing Navbar</td>
            <td>Mehmet</td>
            <td>Samet</td>
            <td>05/01/2023</td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
