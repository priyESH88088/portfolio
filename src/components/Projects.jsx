export default function Projects() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className="mt-4 space-y-4">

        <div>
          <h3 className="text-xl font-semibold">StudyNotion</h3>
          <p className="text-gray-400">
            Full-stack LMS with authentication, payments, and cloud storage.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Task Manager</h3>
          <p className="text-gray-400">
            CRUD app using React and Redux Toolkit.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Weather App</h3>
          <p className="text-gray-400">
            Real-time weather dashboard using API.
          </p>
        </div>

      </div>
    </div>
  );
}