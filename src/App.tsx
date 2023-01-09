import "./App.css";
import { useState } from "react";
import React from "react";
import { AppProps, User } from "./interfaces";

//interface used to define the entity, example props

function App({ headerText, extraText = "default text" }: AppProps) {
  const [user, setUser] = useState<User | null>(null);
  const inputRef = React.createRef<HTMLInputElement>();
  const [updated, setUpdated] = useState<any | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
    console.log(inputRef.current?.value);
    setUpdated(inputRef.current?.value);
  };

  const fetchUser = () =>
    setUser({
      name: "bob",
      age: "26",
      admin: false,
    });

  return (
    <div className="demo">
      <button onClick={fetchUser}> Fetch user on click </button>
      <h1> {headerText} </h1>
      <p>{extraText} </p>
      <p>user name is {user?.name}</p>
      <p>
        Name : <input ref={inputRef}></input>
      </p>

      <h1>Updated: {updated}</h1>
      <button onClick={handleClick}> update user </button>
    </div>
  );
}

export default App;
