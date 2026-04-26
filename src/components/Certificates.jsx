import aiml from "../assets/AIML.pdf";
import bigData from "../assets/BigData_and_CloudComputing.pdf";
import dataScience from "../assets/DataScience_and_MachineLearning.pdf";
import fullStack from "../assets/FullStackCertificate.pdf";

export default function Certificates() {
  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl font-bold">Certificates</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-4">

        {/* Certificate 1 */}
        <div className="p-4 bg-gray-800 rounded hover:scale-105 transition-all duration-300">
          <h3 className="font-semibold">AI & ML Certificate</h3>
          <a href={aiml} target="_blank" className="text-blue-400">
            View Certificate
          </a>
        </div>

        {/* Certificate 2 */}
        <div className="p-4 bg-gray-800 rounded hover:scale-105 transition-all duration-300">
          <h3 className="font-semibold">Big Data & Cloud Computing</h3>
          <a href={bigData} target="_blank" className="text-blue-400">
            View Certificate
          </a>
        </div>

        {/* Certificate 3 */}
        <div className="p-4 bg-gray-800 rounded hover:scale-105 transition-all duration-300">
          <h3 className="font-semibold">Data Science & Machine Learning</h3>
          <a href={dataScience} target="_blank" className="text-blue-400">
            View Certificate
          </a>
        </div>

        {/* Certificate 4 */}
        <div className="p-4 bg-gray-800 rounded hover:scale-105 transition-all duration-300">
          <h3 className="font-semibold">Full Stack Development</h3>
          <a href={fullStack} target="_blank" className="text-blue-400">
            View Certificate
          </a>
        </div>

      </div>
    </div>
  );
}