const menu =  document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-sidebar');
const h = document.querySelector('.sidebar');
h.style.display = 'none';
const menuItem = document.querySelectorAll('.menu-items');

menuItem.forEach((item)=> {
  item.addEventListener('click', () => {
    removeActive();
    item.classList.add('active');
  });
});

function removeActive(){
  menuItem.forEach((item) => {
    item.classList.remove('active');
  });
}

menu.addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
});

const projects = [
  {
    title: 'Rock Paper scrissors',
    description: 'A simple game implemented with HTML, CSS and Javascrpt, showcasing DOM manipulation and event handling',
    image: 'images/rock-paper-scissors.jpg'
  },
  {
    title: 'Calculator',
    description: 'A fully functional calculator built with JavaScript, demonstrating logic implementation and user interface design.',
    image: 'images/Best-Online-Calculators.jpg'
  },
  {
    title: 'To do list',
    description: 'A responsive to-do-list application for task management, utilizing local storage and interactive UI features',
    image: 'images/to-do-list.jpg'
  },
  {
    title: 'try hack me',
    description: 'Hands-on cybersecurity labs exploring penetration testing, vulnerability assessment, and ethical hacking techniques..',
    image: 'images/laptop.jpg'
  },
  {
    title: 'Portswigger labs',
    description: 'Practical labs focused on web application security, covering topics like SQL injection and cross-site scripting (XSS).',
    image: 'images/cyber-mask.jpg'
  },
  {
    title: 'Network simulator',
    description: 'Simulated network environments using Cisco Packet Tracer and Metasploit for secure network design and testing.',
    image: 'images/cisco-packet-tracer.png'
  },
  {
    title: 'Password strength checker',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/cyber-hoodie.webp'
  },
  {
    title: 'blogger website',
    description: 'A static blogger website utilizing html css javascript and React components',
    image: 'images/golden-chess-king.jpg'
  },
  {
    title: ' Active directory configuration',
    description: 'configuration of user authentication and authorization using windows server ',
    image: 'images/active directory.webp'
  }
]
let projectsHtml = '';


projects.forEach((project) => {
 projectsHtml += `
   <div class="projects js-projects">
              <div class="img-div">
                <img src="${project.image}">
              </div>
              <div class="title-description">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div><a>view project</a></div>
              </div>
            </div>
  
 `
});
console.log(projectsHtml);

document.querySelector('.js-projects-container').innerHTML = projectsHtml;

