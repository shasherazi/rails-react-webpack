import React from "react";
import { useEffect, useState } from "react";

function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("/random")
      .then((response) => response.json())
      .then((data) => setGreeting(data.greeting));
  }, []);

  return (
    <>
      <p>{greeting}</p>

      <a className="underline text-blue-600" href="/">Home</a>
    </>
  )
}

export default Greeting;
