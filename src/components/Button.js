export default function Button({ login, isLogged }) {
  return (
    <div className="d-flex">
      <button onClick={login} className="btn btn-primary">
        {isLogged ? "Logout" : "Login"}
      </button>
    </div>
  );
}
