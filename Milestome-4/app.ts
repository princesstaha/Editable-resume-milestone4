// Get form elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const resumeOutput = document.getElementById('resume-output') as HTMLElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;

// Event listener for button click
generateBtn.addEventListener('click', () => {
  // Get input values
  const name = nameInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;
  const experience = experienceInput.value;
  const education = educationInput.value;
  const skills = skillsInput.value;

  // Generate the resume output HTML
  resumeOutput.innerHTML = `
    <h2><p>Resume<p></h2>
    <p>${name}<p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Skills:</strong> ${skills}</p>
  `;

  // Optional: Clear form fields after generation
  form.reset();
});