export default function Contact() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Contact</h2>

      <div className="mt-4 space-y-2 text-gray-300">
        <p>
          📧 Email:{" "}
          <a href="mailto:priyesh88088@gmail.com" className="text-blue-400">
            priyesh88088@gmail.com
          </a>
        </p>

        <p>
          📱 Mobile:{" "}
          <a href="tel:+919140391718" className="text-blue-400">
            +91 9140391718
          </a>
        </p>

        <p>
          💻 GitHub:{" "}
          <a href="https://github.com/priyESH88088" className="text-blue-400">
            github.com/priyESH88088
          </a>
        </p>

        <p>
          🔗 LinkedIn:{" "}
          <a href="https://linkedin.com" className="text-blue-400">
            linkedin.com/in/priyesh
          </a>
        </p>
      </div>
    </div>
  );
}