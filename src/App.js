import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log(user);
  return (
    <div>
      <h1>Hi {user?.name}</h1>
      {isAuthenticated ? (
        <>
          <button onClick={(e) => logout()}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={(e) => loginWithRedirect()}>
            Login with redirect
          </button>
        </>
      )}
    </div>
  );
}

export default App;
