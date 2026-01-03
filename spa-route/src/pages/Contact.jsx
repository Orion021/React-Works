import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Message sent!");
  }

  return (
    <div className="page">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />

        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Message"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
