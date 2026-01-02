const params = new URLSearchParams(window.location.search);
const level = params.get("level");

const data = {
  school1: {
    title: "1st – 7th | Saraswati Vidyalaya, Niphad",
    location: "📍 Niphad, Nashik District, Maharashtra",
    photos: ["school1-1.jpeg","school1-2.jpeg","school1-3.jpeg"],
    results: []
  },
  school2: {
    title: "8th – 10th | K.V.N. Naik Madhyamik Vidyalaya, Sarole Thadi",
    location: "📍 Sarole Thadi, Nashik, Maharashtra",
    photos: ["school2-1.jpg","school2-2.jpeg","school2-3.jpeg"],
    results: ["10th-result.jpeg"]
  },
  school3: {
    title: "11th – 12th | Karmveer Bhaurao Patil Vidyalaya, Vinchur",
    location: "📍 Vinchur, Nashik District, Maharashtra",
    photos: ["school3-1.jpeg","school3-2.jpeg","school3-3.jpeg"],
    results: ["12th-result.jpeg"]
  },
  btech: {
    title: "B.Tech | Gokhale Education Society’s College of Engineering, Nashik",
    location: "📍 Nashik, Maharashtra",
    photos: ["college1.jpeg","college2.jpeg","college3.jpeg"],
    results: [
      "btech-year1.jpeg",
      "btech-year2.jpeg",
      "btech-year3.jpeg",
      "btech-year4.jpeg"
    ],

    /* ADDING GESCOE CS INFORMATION */
    collegeInfo: `
    <h2>🔹 GESCOE CS – Gokhale Education Society’s R. H. Sapat College of Engineering</h2>

    <p>
    GESCOE stands for <b>Gokhale Education Society’s R. H. Sapat College of Engineering, Management Studies and Research</b>,
    a reputed technical institute in Nashik, Maharashtra offering engineering and computer science programs.
    </p>

    <p>
    The institute was <b>established in 2009</b> under the prestigious <b>Gokhale Education Society</b>,
    one of the oldest educational organizations in India.
    </p>

    <p>
    The college is <b>AICTE-approved</b> and <b>affiliated to Savitribai Phule Pune University</b>,
    and has a modern <b>10-acre campus</b> located in Nashik.
    </p>

    <h3>👨‍💻 Computer Science Department Highlights</h3>
    <ul>
      <li>Undergraduate program in Computer Engineering.</li>
      <li>Focus on modern computing, programming, and software engineering.</li>
      <li>Students actively participate in technical events, clubs and practical projects.</li>
      <li>Strong emphasis on Data Structures, Algorithms, and Industry-ready skills.</li>
    </ul>
    `
  }
};

document.getElementById("title").innerText = data[level].title;
document.getElementById("location").innerText = data[level].location;

const photoBox = document.getElementById("photos");
data[level].photos.forEach(img => {
  photoBox.innerHTML += `<img src="${img}" loading="lazy">`;
});

const resultBox = document.getElementById("results");
data[level].results.forEach(img => {
  resultBox.innerHTML += `<img src="${img}" loading="lazy">`;
});

/* Show college info only for B.Tech */
const collegeInfoBox = document.getElementById("college-info");
if (data[level].collegeInfo) {
  collegeInfoBox.innerHTML = data[level].collegeInfo;
} else {
  collegeInfoBox.innerHTML = "";
}
const certBox = document.querySelector(".cert-box");
const certLayer = document.getElementById("cert-layer");

certBox.addEventListener("mouseenter", () => {
  document.body.classList.add("cert-active");

  for (let i = 0; i < 20; i++) {
    const paper = document.createElement("div");
    paper.className = "cert-paper";
    paper.style.left = Math.random() * 100 + "vw";
    paper.style.animationDuration = (4 + Math.random() * 3) + "s";
    certLayer.appendChild(paper);
  }
});

certBox.addEventListener("mouseleave", () => {
  document.body.classList.remove("cert-active");
  certLayer.innerHTML = "";
});
