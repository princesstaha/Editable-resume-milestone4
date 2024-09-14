// Get form elements
var form = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var phoneInput = document.getElementById('phone');
var emailInput = document.getElementById('email');
var experienceInput = document.getElementById('experience');
var educationInput = document.getElementById('education');
var skillsInput = document.getElementById('skills');
var resumeOutput = document.getElementById('resume-output');
var generateBtn = document.getElementById('generate-btn');
// Event listener for button click
generateBtn.addEventListener('click', function () {
    // Get input values
    var name = nameInput.value;
    var phone = phoneInput.value;
    var email = emailInput.value;
    var experience = experienceInput.value;
    var education = educationInput.value;
    var skills = skillsInput.value;
    // Generate the resume output HTML
    resumeOutput.innerHTML = "\n    <h2>".concat(name, " Resume</h2>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Experience:</strong> ").concat(experience, "</p>\n    <p><strong>Education:</strong> ").concat(education, "</p>\n    <p><strong>Skills:</strong> ").concat(skills, "</p>\n  ");
    // Optional: Clear form fields after generation
    form.reset();
});
