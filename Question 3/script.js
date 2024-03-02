window.onload = function () {
  localStorage.setItem("IsSubmitted", "false");
};
function handleSubmit(event) {
  event.preventDefault();
  localStorage.setItem("IsSubmitted", "false");
  const zip = document.getElementById("zip");
  const zipValue = parseInt(zip.value);
  if (zipValue < 0) {
    alert("Zip code cannot be less than 0");
    return false;
  }
  const gyear = document.getElementById("year");
  const gyearVal = parseInt(gyear.value);
  if (gyearVal < 0) {
    alert("Graduation Year cannot be Negative");
    return false;
  }
  const startDate = document.getElementById("sdate").value;
  const endDate = document.getElementById("edate").value;
  if (startDate >= endDate) {
    alert("End date must be greater than the start date");
    return false;
  }
  const phoneInput = document.getElementById("phone");
  const phoneValid = /^\d{4}-\d{7}$/;
  if (!phoneValid.test(phoneInput.value)) {
    alert("Phone number must be in the format XXXX-XXXXXXX");
    return false;
  }
  const JobForm = document.getElementById("Job-form");
  const formData = {
    fName: JobForm.fname.value,
    lName: JobForm.lname.value,
    phoneNo: JobForm.phone.value,
    email_: JobForm.email.value,
    street_: JobForm.street.value,
    city_: JobForm.city.value,
    state_: JobForm.state.value,
    zip_: JobForm.zip.value,
    resume_: JobForm.resume.value,
    cletter: JobForm.coverLetter.value,
    edu: JobForm.education.value,
    institution_: JobForm.institution.value,
    major_: JobForm.major.value,
    gyear: JobForm.year.value,
    employment_: JobForm.employment.value,
    company_: JobForm.company.value,
    sDate: JobForm.sdate.value,
    eDate: JobForm.edate.value,
    job_: JobForm.job.value,
    skills_: JobForm.skills.value,
    cert: JobForm.certificates.value,
    stDate: JobForm.stdate.value,
    work_: JobForm.work.value,
    relocate: JobForm.choice,
    rName: JobForm.referenceName.value,
    rContact: JobForm.referenceContact.value,
    relationship_: JobForm.relationship.value,
    question_: JobForm.question.value,
    tc: JobForm.tC.value,
    policy_: JobForm.policy.value,
  };
  const radio = document.getElementsByClassName("option");
  if (radio[0].checked) {
    formData.relocate = "Yes";
  } else {
    formData.relocate = "No";
  }
  alert("Form Submitted Successfully");
  console.log(formData);
  localStorage.setItem("FormData", JSON.stringify(formData));
  Object.keys(formData).map((key) => console.log(key, formData[key]));
  localStorage.setItem("IsSubmitted", "true");
}

function viewTable() {
  let isSubmitted = JSON.parse(localStorage.getItem("IsSubmitted"));
  if (isSubmitted) {
    localStorage.setItem("IsSubmitted", "false");
    var page = "ViewTable.html";
    window.open(page, "_blank");
  } else {
    alert("Please fill and submit form first");
  }
}
