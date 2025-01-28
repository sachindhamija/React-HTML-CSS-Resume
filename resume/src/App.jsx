import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Sachin Dhamija</h1>
        <p>Dedicated Full Stack Developer | React, .NET, Shopify E-commerce</p>
      </header>
      <nav style={navStyle}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="about" style={sectionStyle}>
        <h2>About Me</h2>
        <p>Experienced Full Stack Developer with expertise in React, .NET, Shopify E-commerce, and Project Management. Proficient in Agile methodologies and delivering scalable solutions.</p>
      </section>
      <section id="experience" style={sectionStyle}>
        <h2>Professional Experience</h2>
        <Experience title="Shopify Developer | Technical Project Manager" company="HCD Furniture, Toronto" date="April 2024 – Present" tasks={["E-commerce Management", "Project Leadership", "Digital Marketing Oversight"]} />
        <Experience title="Project Manager & Developer" company="GeekyBones Lab Pvt. Ltd." date="2022–January 2024" tasks={["Managed high-level e-commerce projects", "Led a team of developers and testers", "Ensured seamless collaboration and client satisfaction"]} />
        <Experience title=".Net Core + React Developer" company="XDuss Consulting Private Limited" date="June 2022–December 2022" tasks={["Developed web applications", "Collaborated on API integration", "Delivered scalable solutions"]} />
      </section>
      <section id="skills" style={sectionStyle}>
        <h2>Technical Skills</h2>
        <div style={flexContainerStyle}>
          {['HTML, CSS, Bootstrap, Tailwind', 'JavaScript, React, TypeScript', '.NET Web API, ASP.NET Core MVC', 'Entity Framework Core, ADO.NET', 'Shopify, E-commerce', 'Azure', 'MS SQL, MySQL'].map(skill => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </section>
      <section id="projects" style={sectionStyle}>
        <h2>Core Projects</h2>
        <div style={gridContainerStyle}>
          <Project title="Shopify" link="https://crafthomedecor.com" />
          <Project title=".NET Web API & React" link="https://thepsoftware.com" />
          <Project title="Project Management" link="https://sportsgearswag.com" />
        </div>
      </section>
      <section id="contact" style={sectionStyle}>
        <h2>Contact</h2>
        <p><strong>Address:</strong> 59 Verne Cres, Toronto</p>
        <p><strong>Phone:</strong> (647) 213-0079</p>
        <p><strong>Email:</strong> <a href="mailto:sachin.ca647@gmail.com">sachin.ca647@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sachin-dhamija-13a974179/" target="_blank">LinkedIn Profile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/sachindhamija" target="_blank">GitHub Profile</a></p>
      </section>
      <footer style={footerStyle}>
        <p>&copy; 2025 Sachin Dhamija. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  background: '#444',
  padding: '0.5rem',
  color: '#fff'
};

const sectionStyle = {
  padding: '2rem'
};

const flexContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem'
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem'
};

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  marginTop: '2rem'
};

const Experience = ({ title, company, date, tasks }) => (
  <div>
    <h3>{title}</h3>
    <p>{company} ({date})</p>
    <ul>
      {tasks.map(task => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  </div>
);

const Skill = ({ skill }) => <div style={{ background: '#f4f4f4', padding: '0.5rem 1rem', borderRadius: '5px' }}>{skill}</div>;

const Project = ({ title, link }) => (
  <div style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '5px' }}>
    <h3>{title}</h3>
    <p><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
  </div>
);

export default App;
