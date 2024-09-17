let jobs = [];

// Replace with your API endpoint
const apiEndpoint = 'https://example.com/api/jobs';

fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        jobs = data;
    })
    .catch(error => {
        console.error('Error fetching job list from API:', error);
    });

function generateJob() {
    const dobInput = document.getElementById('dob').value;
    
    if (!dobInput) {
        document.getElementById('job-result').innerText = 'Please enter a date of birth.';
        return;
    }
    
    const dob = new Date(dobInput);
    const dayOfYear = getDayOfYear(dob);
    const jobIndex = dayOfYear % jobs.length;
    const job = jobs[jobIndex];
    
    document.getElementById('job-result').innerText = `Your random job is: ${job}`;
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}
