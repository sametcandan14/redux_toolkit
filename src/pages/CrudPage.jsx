import React from "react";
import { Button, Table } from "react-bootstrap";

const CrudPage = () => {
  return (
    <div>
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
