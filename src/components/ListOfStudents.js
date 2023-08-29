export default function ListOfStudents({ students, isChosen, sortStudent }) {
  return (
    <div style={{ maxWidth: "700px", margin: " 50px auto" }}>
      <h1 className="mb20">Liste des apprenants</h1>
      <div className="d-flex mb20">
        <button
          onClick={() => sortStudent("all")}
          className="btn btn-primary-reverse mr10"
        >
          ALL
        </button>
        <button
          onClick={() => sortStudent("down")}
          className="btn btn-primary-reverse mr10"
        >
          Before 2010
        </button>
        <button
          onClick={() => sortStudent("up")}
          className="btn btn-primary-reverse mr10"
        >
          After 2010
        </button>
      </div>
      {students.map((s, i) => (
        <div key={i} className="card p20 mb20 cp" onClick={() => isChosen(i)}>
          <h2 className={`mb10 ${s.chosen ? "backLight" : ""}`}>
            {s.name} <span style={{ color: "red" }}>{s.year}</span>
          </h2>
          <p> {s.content}</p>
        </div>
      ))}
    </div>
  );
}
