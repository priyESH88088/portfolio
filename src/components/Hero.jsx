export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">Priyesh Dwivedi</h1>
      <p className="text-xl mt-2">MERN Stack Developer</p>

      <p className="max-w-xl mt-4 text-gray-300">
        I build scalable full-stack web applications using React, Node.js,
        Express and MongoDB.
      </p>

      <div className="mt-6 flex gap-4">
        <a href="https://github.com/priyESH88088" className="px-4 py-2 bg-white text-black rounded">
          GitHub
        </a>
        <a href="https://linkedin.com" className="px-4 py-2 bg-blue-500 rounded">
          LinkedIn
        </a>
      </div>
    </div>
  );
}