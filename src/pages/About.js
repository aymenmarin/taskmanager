import React from "react";
import "../styles/About.css"; // Ensure this CSS file is linked

function About() {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      <p>
        Welcome to our Task Manager! This application is designed to help you
        organize your daily tasks efficiently. With features like task
        categorization, filtering, and dark mode, managing your to-dos has
        never been easier.
      </p>

      <h2>Features</h2>
      <ul>
        <li>✔ Add, edit, and delete tasks</li>
        <li>✔ Mark tasks as completed or unfinished</li>
        <li>✔ Filter tasks (All, Completed, Unfinished)</li>
        <li>✔ Dark mode for better night-time visibility</li>
        <li>✔ User authentication (Login/Signup)</li>
        <li>✔ Responsive and easy-to-use interface</li>
      </ul>

      <h2>Why Use This App?</h2>
      <p>
        Whether you are a student, professional, or just someone who loves to
        stay organized, this app will help you track your daily activities
        efficiently. Give it a try and boost your productivity!
      </p>

      <h2>Contact</h2>
      <p>
        Have feedback or need support? Reach out at{" "}
        <a href="mailto:support@taskmanager.com">support@taskmanager.com</a>
      </p>
    </div>
  );
}

export default About;
