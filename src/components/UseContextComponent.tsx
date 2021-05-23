import { useState, useContext } from "react";
import UserContext, { UserState } from "../store/store";

function ConsumerComponent() {
  const user: UserState = useContext(UserContext);

  return (
    <div>
      <div>{user.first}</div>
      <div>{user.last}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState({
    first: "Jane",
    last: "Smith",
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          setUser({
            first: "Jaene",
            last: "Smasdfith",
          })
        }
      >
        Change Context
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
