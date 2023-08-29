import styles from "./App.module.scss";
import Button from "./components/Button";
import ListOfStudents from "./components/ListOfStudents";
import { students } from "./student";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [student, setStudent] = useState(students);

  console.log(student);

  function Login() {
    setIsLogged(!isLogged);
  }

  function isChosen(i) {
    setStudent(
      student.map((s) =>
        s.id === i
          ? {
              ...s,
              chosen: !s.chosen,
            }
          : s
      )
    );
  }

  function sortStudent(sort) {
    if (sort === "up") {
      setStudent(students.filter((s) => s.year >= 2010));
    }
    if (sort === "down") {
      setStudent(students.filter((s) => s.year < 2010));
    }
    if (sort === "all") {
      setStudent(students);
    }
  }
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.appContainer}`}
    >
      {isLogged ? (
        <div
          className={`d-flex flex-column justify-content-center align-items-center`}
        >
          <ListOfStudents
            students={student}
            isChosen={isChosen}
            sortStudent={sortStudent}
          />
          <Button login={Login} isLogged={isLogged} />
        </div>
      ) : (
        <Button login={Login} isLogged={isLogged} />
      )}
    </div>
  );
}
export default App;
