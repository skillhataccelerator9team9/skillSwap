import React from "react";

const Introduction = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Skill Swap</h1>
      <p style={styles.paragraph}>
        Skill Swap is a platform where you can exchange skills with others. Sign
        up, showcase your skills, and connect with people who have the skills
        you need. Together, we can help each other grow and learn!
      </p>
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
