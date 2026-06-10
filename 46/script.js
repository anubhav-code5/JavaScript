const users = [
  {
    username: "RAHUL",
    jobProfile: "Frontend Developer",
    description:
      "Builds responsive web applications using React, JavaScript, and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    username: "SNEHA",
    jobProfile: "UI/UX Designer",
    description:
      "Designs clean mobile and web interfaces with focus on user experience and accessibility.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    username: "ARJUN",
    jobProfile: "Data Analyst",
    description:
      "Analyzes business data, creates dashboards, and generates insights using SQL and Python.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    username: "MEERA",
    jobProfile: "Cloud Engineer",
    description:
      "Manages cloud infrastructure, deployment pipelines, and server monitoring on AWS.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
  }
];


let sum = '' ;
users.forEach(function(elem){
    sum = sum + `<div class="box">
        <img src="${elem.image}" alt="">
        <h2>${elem.username}</h2>
        <H3>${elem.jobProfile}</H3>
        <P>${elem.description}</P>
        </div>`
    
})
var main = document.querySelector('main')
main.innerHTML = sum;
console.log(sum);
