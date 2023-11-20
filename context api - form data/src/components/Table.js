import React from "react";
import { useEntryContext } from "../context/TableContext";

const Table = () => {
  const data = useEntryContext();
  const {removeEntry} = useEntryContext()

  return (
    <div>
      <h2>Table</h2>
      <table>
        <thead>
          <tr>
            <th> name </th>
            <th> email </th>
            <th> phone </th>
            <th> message </th>
          </tr>
        </thead>
        <tbody>
          {data.state.entries &&
            data.state.entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                <td>{entry.phone}</td>
                <td onClick={() => removeEntry(entry)}>remove me</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
