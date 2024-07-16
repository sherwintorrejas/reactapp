import React from "react";
import Employee from "./Employee";

const Employees = () => {
  const employees = [
    { name: "John Doe", position: "Manager", salary: 80000, status: "Active" },
    {
      name: "Jane Smith",
      position: "Developer",
      salary: 60000,
      status: "Active",
    },
    {
      name: "Mike Johnson",
      position: "Designer",
      salary: 55000,
      status: "Active",
    },
    {
      name: "Emily Davis",
      position: "Developer",
      salary: 65000,
      status: "Active",
    },
    {
      name: "James Wilson",
      position: "Designer",
      salary: 52000,
      status: "Active",
    },
    {
      name: "Patricia Brown",
      position: "Manager",
      salary: 90000,
      status: "Active",
    },
    {
      name: "Robert Jones",
      position: "Developer",
      salary: 63000,
      status: "Active",
    },
    {
      name: "Linda Garcia",
      position: "Designer",
      salary: 57000,
      status: "Active",
    },
    {
      name: "Sarah Miller",
      position: "Manager",
      salary: null,
      status: "Not Active",
    },
    {
      name: "David Martinez",
      position: "Developer",
      salary: null,
      status: "Not Active",
    },
  ];

  return (
    <div>
      <h2>Employees</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Employee Names</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Employee key={index} index={index + 1} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
