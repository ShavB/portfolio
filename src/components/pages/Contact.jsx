import ContactForm from "../../features/ContactForm";

export default function Contact() {
  return (
    <div>
      <div className="flex items-center mx-4 md:mx-40 justify-center mb-10">
        <div className="mt-30 mx-10 flex flex-col sm:mx-24 md:mx-30 lg:mx-60 xl:mx-88 w-full">
          <div className="">
            <div>
              <h1 className="flex flex-col text-4xl">
                <span>Work.</span>
                <span>Contact.</span>
              </h1>
            </div>
            <div className="mt-2">
              <p>
                Get in touch with me anytime, through social media or e-mail,
              </p>
            </div>
          </div>
          <div className="flex m-6">
            <div className="md:border-l-1"></div>
            <div className="flex flex-col">
              <div className="md:mx-30 mt-10 mb-10">
                <h1 className="text-3xl mb-4">Connect with me.</h1>
                <table className="border overflow-hidden border-gray-300 rounded-2xl table-auto w-full text-left">
                  <thead>
                    <tr className="bg-gray-600 text-black">
                      <th className="border border-gray-500 px-4 py-2">
                        Contact
                      </th>
                      <th className="border border-gray-500 px-4 py-2">
                        Detail
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-500 px-4 py-2">
                        LinkedIn
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <a
                          href="https://www.linkedin.com/in/shyambisht/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          https://www.linkedin.com/in/shyambisht
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-500 px-4 py-2">
                        GitHub
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <a
                          href="https://github.com/shavb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          https://github.com/shavb
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-500 px-4 py-2">
                        Email
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        <a
                          href="mailto:bishtshyam135@gmail.com"
                          className="text-blue-600 hover:underline"
                        >
                          bishtshyam135@gmail.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="md:mx-30">
                <h1 className="text-3xl mb-7">Contact</h1>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
