export default function ContactForm() {
  console.log(import.meta.env.VITE_EMAIL_API_KEY);
  const submitForm = () => {
    return "";
  };
  return (
    <main className="border-l-1 border-b-1 rounded-2xl p-6">
      <form action={submitForm} className="flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <input
              type="name"
              placeholder="Your name..."
              className="border-1 p-4 rounded-xl"
            />
            <input
              type="email"
              name=""
              placeholder="your-email@xyz.com"
              className="border-1 p-4 rounded-xl"
            />
            <textarea
              name="email-body"
              rows={5}
              id=""
              className="border-1 rounded-xl p-3"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="border-1 p-2 rounded-2xl cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
