const Resume = () => {
    const resumeData = {
      personalInfo: {
        name: 'Tara Means',
        title: 'Web Developer',
        email: 'tmeans01@gmail.com',
        phone: '(913) 530-7197',
      },
      education: [
        {
          degree: 'Bachelor of Science, Accounting',
          university: 'University of Kansas',
          dates: '2010 - 2013',
        },
      ],
      certifications: [
        {
            certification: 'Salesforce Administrator',
            date: 'May 2019',
        },
      ],
      workExperience: [
        {
          title: 'Frontend Developer',
          company: 'Ran a Laptop Once inc.',
          dates: '2019 - Present',
          description: 'Develop and maintain web applications using React and JavaScript.',
        },
      ],
      skills: ['JavaScript', 'React', 'HTML/CSS', 'Git'],
    };

return (
    <div className="resume">
      <header>
        <h1>{resumeData.personalInfo.name}</h1>
        <h2>{resumeData.personalInfo.title}</h2>
        <p>Email: {resumeData.personalInfo.email}</p>
        <p>Phone: {resumeData.personalInfo.phone}</p>
      </header>
      <section>
        <h3>Education</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.degree}</h4>
            <p>{edu.university}</p>
            <p>{edu.dates}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Certifications</h3>
        {resumeData.certifications.map((cert, index) => (
        <div key={index}>
            <h4>{cert.certification}</h4>
            <p>{cert.date}</p>
        </div>
        ))}
      </section>
      <section>
        <h3>Work Experience</h3>
        {resumeData.workExperience.map((job, index) => (
          <div key={index}>
            <h4>{job.title}</h4>
            <p>{job.company}</p>
            <p>{job.dates}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resume;