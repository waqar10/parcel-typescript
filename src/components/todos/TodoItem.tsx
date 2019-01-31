
import * as React from "react";
// import ES from "./EmptySpace";

const TodoItem = (props) => {
  const {text, done, id} = props;
  return(
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{text}</td>
            <td>{done ? "Done " : "Due"}</td>
            <td><button className="btn btn-secondary list-btn">
             {done ? "Delete" : "Done"}</button></td>
          </tr>
        </tbody>
        )
};
export default TodoItem;