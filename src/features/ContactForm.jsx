import { useState } from "react";

export default function ContactForm() {
  const EMAIL_API = import.meta.env.VITE_API_BASE_URL;
  const [resMessage, setResMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailData, setEmailData] = useState({
    username: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    setLoading(true);
    const response = await fetch(`${EMAIL_API}/emailService`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: emailData.username,
        email: emailData.email,
        description: emailData.description,
      }),
    });
    if (!response.ok) {
      const errResult = await response.text();
      throw new Error(`Error ${response.status}`, errResult);
    }
    const result = await response.json();
    setEmailData({ username: "", email: "", description: "" });
    setResMessage(result.message);
    setLoading(false);
  };
  return (
    <main className="border-l-1 border-b-1 rounded-2xl p-6">
      <form action={submitForm} className="flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              placeholder="Your name..."
              className="border-1 p-4 rounded-xl"
              value={emailData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="your-email@xyz.com"
              className="border-1 p-4 rounded-xl"
              value={emailData.email}
              onChange={handleChange}
            />
            <textarea
              name="description"
              rows={5}
              id=""
              className="border-1 rounded-xl p-3"
              value={emailData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              className={` ${loading ? "bg-red-500" : ""} border-1 p-2 rounded-2xl cursor-pointer`}
              type="submit"
            >
              Submit
            </button>
            <div>
              <p>{resMessage}</p>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
