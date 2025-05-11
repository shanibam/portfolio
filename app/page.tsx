import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">SHANIBA M</h2>
        <p className="text-gray-700 text-center mb-8">
          Dynamic and enthusiastic MSc Computer Science student with a strong foundation in programming, algorithms, and data-driven solutions. Passionate about leveraging technology to solve real-world problems creatively. Eager to contribute to innovative projects and grow in the software development field.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>
            <strong>MSc in Computer Science</strong>, University of Calicut (2022 – 2024)
            <p>A specialized curriculum covering advanced programming, AI, algorithms, and data science.</p>
          </li>
          <li>
            <strong>Bachelor of Computer Applications (BCA)</strong>, University of Calicut (2019 – 2022)
            <p>Gained strong foundational knowledge in software engineering, application development, and database systems.</p>
          </li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Projects</h3>
        <div className="mb-8">
          <h4 className="font-bold text-gray-800">Blind Cap – A Cap for the Visually Impaired</h4>
          <p className="text-gray-700">
            An embedded system-based wearable device that helps visually impaired users detect obstacles via sensors and alert systems.
          </p>
          <p className="text-gray-600 text-sm">Technologies Used: Python (Django), OpenCV, SQLite, HTML/CSS, Raspberry Pi, Camera</p>
        </div>
        <div className="mb-8">
          <h4 className="font-bold text-gray-800">Hotel Management System – Booking Website</h4>
          <p className="text-gray-700">
            Developed a fully functional hotel booking website to manage rooms, reservations, and user accounts.
          </p>
          <p className="text-gray-600 text-sm">Technologies Used: PHP, HTML/CSS, JavaScript, MySQL</p>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Programming Languages: Python, Java, C, C++, JavaScript</li>
          <li>Web Development: HTML, CSS, JavaScript</li>
          <li>Frameworks: Django, Flask</li>
          <li>Databases: MySQL, PostgreSQL, SQLite</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Skills</h3>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Strong Communication</li>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Creativity and Innovation</li>
          <li>Emotional Intelligence</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Languages</h3>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>English</li>
          <li>Hindi</li>
          <li>Malayalam</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact</h3>
        <p className="text-gray-700">
          Email: <a href="mailto:shanibam2000@gmail.com" className="text-blue-500">shanibam2000@gmail.com</a>
        </p>
        <p className="text-gray-700">Phone: +91 99473 29033</p>
        <p className="text-gray-700">Location: Malappuram, Kerala, India</p>
        <p className="text-gray-700">Nationality: Indian</p>
      </div>
    </section>
  );
}

