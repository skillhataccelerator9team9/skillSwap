import React, { useEffect, useState } from "react";
import axios from "axios";

import Login from "./Login";


const Introduction = () => {
  const [message, setMessage] = useState("");
  const [appName, setAppName] = useState("Skill Swap");

  useEffect(() => {
    // axios
    //   .get("http://localhost:80")
    //   .then((response) => {
    //     // setMessage(response.data.message);
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error("There was an error fetching the data!", error);
    //   });
  }, []);

  return (
    <div style={styles.container}>
      <h1>{appName}</h1>

      <Login />
    </div>

  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  header: {
    color: "#2a9d8f",
  },
  paragraph: {
    fontSize: "18px",
    color: "#264653",
  },
};

export default Introduction;
