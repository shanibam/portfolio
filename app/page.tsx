import React from "react";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-red-300 text-black min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">  hhsiue Portfolio</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-center">SHANIBA M</h2>
            <p className="text-center mt-4">
              Dynamic and enthusiastic MSc Computer Science student with a strong foundation in programming, algorithms, and data-driven solutions. Passionate about leveraging technology to solve real-world problems creatively. Eager to contribute to innovative projects and grow in the software development field.
            </p>
          </div>

          {/* Education */}
          <div id="education" className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>MSc in Computer Science</strong>, University of Calicut (2022 – 2024)
                <p>A specialized curriculum covering advanced programming, AI, algorithms, and data science.</p>
              </li>
              <li>
                <strong>Bachelor of Computer Applications (BCA)</strong>, University of Calicut (2019 – 2022)
                <p>Gained strong foundational knowledge in software engineering, application development, and database systems.</p>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div id="project" className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>Blind Cap:</strong> A cap for the blind with a website. An embedded system designed to enhance the safety of visually impaired individuals.  
                <br />Technologies: Python, Django, OpenCV, SQLite, HTML, CSS, Raspberry Pi, Camera
              </li>
              <li>
                <strong>Hotel Management System:</strong> A hotel booking site developed using PHP to manage hotel operations efficiently.
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div id="skills" className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <ul className="list-disc list-inside">
              <li>Programming Languages: Python, Java, C, C++, JavaScript</li>
              <li>Web Development: HTML, CSS, JavaScript</li>
              <li>Frameworks: Django, Flask</li>
              <li>Databases: MySQL, PostgreSQL, SQLite</li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact" className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>Email: <a href="mailto:shanibam2000@gmail.com" className="text-blue-500">shanibam2000@gmail.com</a></p>
            <p>Phone: +91 99473 29033</p>
            <p>Location: Malappuram, Kerala, India</p>
            <p>Nationality: Indian</p>
          </div>
        </div>
      </section>
<Footer />
    </div>
  );
}