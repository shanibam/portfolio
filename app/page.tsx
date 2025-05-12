
  import React from "react"
  export default function Home() {
return (
    <div> 
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">SHANIBA M</h2>
            <p className="text-gray-700 text-center mb-8">
              Dynamic and enthusiastic MSc Computer Science student with a strong foundation in programming, algorithms, and data-driven solutions. Passionate about leveraging technology to solve real-world problems creatively. Eager to contribute to innovative projects and grow in the software development field.
            </p>
          </div>
          <div id="education" className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-700">
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
          <div id="project" className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
             <h3 className="text-xl font-semibold text-gray-800 mb-4">projects</h3>
             <li> BLIND CAP: A cap for a blind with a website
The blind cap with embedded system is a revolutionary device designed to enhance the safety and
independence of visually impaired individuals. Equipped with sensors and a microcontroller, the cap
detects obstacles and alerts the wearer through vibrations or auditory signals.
Requirements Python Django, Open Cv,Sqlite ,HTML,CSS ,Raspberry pi ,Camera</li>
<li>Hotel management: A web site for hotel booking
The Hotel Management System developed using PHP offers a comprehensive solution for efficiently
managing various aspects of hotel operations.</li>
          </div>
          <div id="skills" className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
            <ul className="list-disc list-inside text-gray-700"></ul>
              <li>Programming Languages: Python, Java, C, C++, JavaScript</li>
              <li>Web Development: HTML, CSS, JavaScript</li>
              <li>Frameworks: Django, Flask</li>
              <li>Databases: MySQL, PostgreSQL, SQLite</li>
          </div>
          <div id="contact" className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="list-disc list-inside text-gray-700"></ul>
            <p className="text-gray-700">fhjhhu 
              Email: <a href="mailto:shanibam2000@gmail.com" className="text-blue-500">shanibam2000@gmail.com</a>
            </p>
            <p className="text-gray-700">Phone: +91 99473 29033</p>
            <p className="text-gray-700">Location: Malappuram, Kerala, India</p>
            <p className="text-gray-700">Nationality: Indian</p>
          </div>
        </div>
      </section>
    </div> 
);
  }