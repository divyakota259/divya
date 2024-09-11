 function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}


function showJobDetails(jobTitle) {
    const jobDetailsContent = document.getElementById('job-details-content');
    jobDetailsContent.textContent = `Details for the job: ${jobTitle}`;
}

const jobDescriptions = {
    "1": "Software Engineer: Responsible for developing software solutions, debugging issues, and maintaining system performance.",
    "2": "Node.js developer: Responsible for developing software solutions, debugging issues, and maintaining system performance.",
    "3": "Javascript developer: Responsible for developing software solutions, debugging issues, and maintaining system performance.",
    "4": "Web developer: Responsible for developing software solutions, debugging issues, and maintaining system performance.",
    "5": "Java developer: Responsible for developing software solutions, debugging issues, and maintaining system performance.",
    "6": "Data Analyst: Responsible for analyzing and interpreting complex data, creating reports, and providing actionable insights."
};

$('#jobDescriptionModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); 
    var jobId = button.data('job-id'); 
    var jobDescription = jobDescriptions[jobId] || "Description not available."; 

    var modal = $(this);
    modal.find('.modal-body #job-description-text').text(jobDescription);
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzXG8ZVf9XimdOQZjWkPMAXdNYaSLPa97pCKpHdDovhDtHTROhf6iFotf8tSkV5FW5AWA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your form is submitted successfully." ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})




function takevalue(){
var name = document.getElementById("job-title").value;

var jobdescription = document.getElementById("job-description").value;

var jobRequirement = document.getElementById("job-requirements").value;

var jobTravel = document.getElementById("job-travel").value;

var jobShift = document.getElementById("job-shift").value;


document.write(" job title  = " +name + "<br>");

document.write(" jobdescription  = " +jobdescription + "<br>");

document.write(" jobRequirement  = " +jobRequirement + "<br>");

document.write(" jobTravel  = " +jobTravel + "<br>");

document.write(" jobShift  = " +jobShift + "<br>");

}