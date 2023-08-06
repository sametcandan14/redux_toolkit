import React from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { useState } from "react";
import FormModal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../app/crudSlice";

const CrudPage = () => {
  const state = useSelector((store) => store.crudReducer);

  const [showModal, setShowModal] = useState(false);

  const [editTask, setEditTask] = useState(null);

  const handleClose = () => {
    setEditTask(null);
    setShowModal(false);
  };

  const dispatch = useDispatch();

  return (
    <div className="px-3">
      <FormModal
        editTask={editTask}
        show={showModal}
        handleClose={handleClose}
      />
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
            <th>No</th>
            <th>Task</th>
            <th>Author</th>
            <th>Assigned</th>
            <th>Date</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task, i) => (
            <tr key={task.id}>
              <td>{i + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.deadline}</td>
              <td>
                <ButtonGroup>
                  <Button
                    onClick={() => dispatch(removeTask(task.id))}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      setEditTask(task);
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
