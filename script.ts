document.addEventListener('DOMContentLoaded', () => {
  // Get reference to the form and display area..
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

  // Handle form submission..
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();   //prevent page reload..

    // Collect input values..
    const Name = (document.getElementById("Name") as HTMLInputElement).value;
    const Email = (document.getElementById("Email") as HTMLInputElement).value;
    const Phone = (document.getElementById("Phone") as HTMLInputElement).value;
    const Education = (document.getElementById("Education") as HTMLInputElement).value;
    const Experience = (document.getElementById("Experience") as HTMLInputElement).value;
    const Skills = (document.getElementById("Skills") as HTMLInputElement).value;

    // Generate the resume content dynamically..
    const resumeHTML = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${Name}</span></P>
    <p><b>Email:</b><span contenteditable="true">${Email}</span></P>
    <p><b>Phone:</b><span contenteditable="true">${Phone}</span></P>
    <h3>Education</h3>
    <p contenteditable="true">${Education}</p>
    <h3>Work Experience</h3>
    <p contenteditable="true">${Experience}</p>
    <h3>Skills</h3>
    <p contenteditable="true">${Skills}</p>
    `;

    // Display the generated resume..
    if (resumeDisplayElement) {
      resumeDisplayElement.innerHTML = resumeHTML;
    } else {
      console.error('The Resume Display Element Is Missing.');
    }
  });
});
