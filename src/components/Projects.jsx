export default function Projects() {
  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-4">

        {/* StudyNotion */}
        <div className="p-4 bg-gray-800 rounded">
          <h3 className="font-semibold text-xl">StudyNotion (MERN LMS)</h3>
          <p className="text-gray-300 mt-2">
            Full-stack learning platform with authentication, payments, and role-based access.
          </p>
        </div>

        {/* File Sharing */}
        <div className="p-4 bg-gray-800 rounded">
          <h3 className="font-semibold text-xl">File Sharing App</h3>
          <p className="text-gray-300 mt-2">
            Secure file upload & sharing system using Node.js and cloud storage.
          </p>
        </div>

        {/* Job App */}
        <div className="p-4 bg-gray-800 rounded">
          <h3 className="font-semibold text-xl">Job Application Platform</h3>
          <p className="text-gray-300 mt-2">
            Job listing and application system with filtering and user management.
          </p>
        </div>

        {/* Movie Search */}
        <div className="p-4 bg-gray-800 rounded">
          <h3 className="font-semibold text-xl">Movie Search App</h3>
          <p className="text-gray-300 mt-2">
            Real-time movie search using API integration and React frontend.
          </p>
        </div>

      </div>
    </div>
  );
}