document.addEventListener("DOMContentLoaded", populateData);

function populateData() {
  const Form_Data = JSON.parse(localStorage.getItem("FormData"));

  const fName = document.getElementById("fname");
  fName.textContent = Form_Data.fName;

  const lName = document.getElementById("lname");
  lName.textContent = Form_Data.lName;

  const phone = document.getElementById("phone");
  console.log(Form_Data.phoneNo);
  phone.textContent = Form_Data.phoneNo;

  const email = document.getElementById("email");
  email.textContent = Form_Data.email_;

  const street = document.getElementById("street");
  street.textContent = Form_Data.street_;

  const city = document.getElementById("city");
  city.textContent = Form_Data.city_;

  const state = document.getElementById("state");
  state.textContent = Form_Data.state_;

  const zip = document.getElementById("zip");
  zip.textContent = Form_Data.zip_;

  const resume = document.getElementById("resume");
  resume.textContent = Form_Data.resume_;

  const cletter = document.getElementById("cletter");
  cletter.textContent = Form_Data.cletter;

  const edu = document.getElementById("edu");
  edu.textContent = Form_Data.edu;

  const institution = document.getElementById("institution");
  institution.textContent = Form_Data.institution_;

  const major = document.getElementById("major");
  major.textContent = Form_Data.major_;

  const gyear = document.getElementById("gyear");
  gyear.textContent = Form_Data.gyear;

  const employment = document.getElementById("employment");
  employment.textContent = Form_Data.employment_;

  const company = document.getElementById("company");
  company.textContent = Form_Data.company_;

  const esdate = document.getElementById("esdate");
  esdate.textContent = Form_Data.sDate;

  const eedate = document.getElementById("eedate");
  eedate.textContent = Form_Data.eDate;

  const job = document.getElementById("job");
  job.textContent = Form_Data.job_;

  const skill = document.getElementById("skill");
  skill.textContent = Form_Data.skills_;

  const cert = document.getElementById("cert");
  cert.textContent = Form_Data.cert;

  const stdate = document.getElementById("stdate");
  stdate.textContent = Form_Data.stDate;

  const work = document.getElementById("work");
  work.textContent = Form_Data.work_;

  const relocate = document.getElementById("relocate");
  relocate.textContent = Form_Data.relocate;

  const r_name = document.getElementById("r_name");
  r_name.textContent = Form_Data.rName;

  const r_contact = document.getElementById("r_contact");
  r_contact.textContent = Form_Data.rContact;

  const relationship = document.getElementById("relationship");
  relationship.textContent = Form_Data.relationship_;

  const question = document.getElementById("question");
  question.textContent = Form_Data.question_;

  document.getElementById("t&C").textContent = Form_Data.tc;
  if (document.getElementById("t&C").textContent.length > 0) {
    document.getElementById("t&C").textContent = "Yes";
  }

  document.getElementById("policy").textContent = Form_Data.policy_;
  if (document.getElementById("policy").textContent.length > 0) {
    document.getElementById("policy").textContent = "Yes";
  }
}
