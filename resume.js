const urlParams = new URLSearchParams(window.location.search);

document.getElementById('resumeName').textContent = urlParams.get('fullName');
document.getElementById('resumeEmail').textContent = `Email: ${urlParams.get('email')}`;
document.getElementById('resumePhone').textContent = `Phone: ${urlParams.get('phone')}`;
document.getElementById('resumeSummary').textContent = urlParams.get('summary');
document.getElementById('resumeTenth').textContent = `10th: ${urlParams.get('tenth')}`;
document.getElementById('resumeTwelfth').textContent = `12th: ${urlParams.get('twelfth')}`;
document.getElementById('resumeHigherEducation').textContent = `Higher Education: ${urlParams.get('higherEducation')}`;
document.getElementById('resumeExperience').textContent = urlParams.get('experience');
document.getElementById('resumeProjects').textContent = urlParams.get('projects');

// Skills
const skills = urlParams.get('skills')?.split(',');
const skillsList = document.getElementById('resumeSkills');
skills?.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    skillsList.appendChild(li);
});

// Add photo
const photoInput = document.getElementById('resumePhoto');
photoInput.src = urlParams.get('photo');

// PDF Download
document.getElementById('downloadResume').addEventListener('click', () => {
    const element = document.querySelector('.resume-preview');
    html2pdf().from(element).save('resume.pdf');
});
