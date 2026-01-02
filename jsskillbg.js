const skills = document.querySelectorAll(".skill");

const effect = document.getElementById("effect-layer");
const rain = document.getElementById("frontend-rain");
const java = document.getElementById("java-tasks");
const dsa = document.getElementById("dsa-lab");
const cpp = document.getElementById("cpp-game");

function clearAll() {
  effect.className = "";
  rain.innerHTML = "";
  java.innerHTML = "";
  dsa.innerHTML = "";
  cpp.innerHTML = "";

  document.body.classList.remove(
    "frontend-active",
    "java-active",
    "dsa-active",
    "cpp-active"
  );
}

skills.forEach(skill => {
  skill.addEventListener("mouseenter", () => {
    const tech = skill.dataset.skill;
    clearAll();

    if (tech === "frontend") {
      document.body.classList.add("frontend-active");

      for (let i = 0; i < 20; i++) {
        const card = document.createElement("div");
        card.className = "page-card";
        card.style.left = Math.random() * 100 + "vw";
        card.style.animationDuration = (3 + Math.random() * 3) + "s";
        rain.appendChild(card);
      }
    }

    else if (tech === "java") {
      document.body.classList.add("java-active");
      const tasks = ["JVM", "Server", "Thread", "API", "App"];

      for (let i = 0; i < 10; i++) {
        const box = document.createElement("div");
        box.className = "java-box";
        box.textContent = tasks[Math.floor(Math.random() * tasks.length)];
        box.style.top = Math.random() * 90 + "vh";
        box.style.animationDuration = (4 + Math.random() * 4) + "s";
        java.appendChild(box);
      }
    }

    else if (tech === "dsa") {
      document.body.classList.add("dsa-active");

      const items = [
        "Shortest Route", "Graphs", "Dijkstra", "A*",
        "Instant Search", "HashMap", "Tries",
        "Priority Queue", "Heap",
        "Stack", "Undo",
        "Music Playlist",
        "Linked List",
        "Binary Tree",
        "Greedy Algo"
      ];

      for (let i = 0; i < 25; i++) {
        const node = document.createElement("div");
        node.className = "dsa-node";
        node.textContent = items[Math.floor(Math.random() * items.length)];
        node.style.left = Math.random() * 100 + "vw";
        node.style.animationDuration = (4 + Math.random() * 6) + "s";
        dsa.appendChild(node);
      }
    }

    else if (tech === "cpp") {
      document.body.classList.add("cpp-active");

      const score = document.createElement("div");
      score.className = "score";
      score.textContent = "SCORE: 9999";
      cpp.appendChild(score);

      for (let i = 0; i < 8; i++) {
        const enemy = document.createElement("div");
        enemy.className = "enemy";
        enemy.style.top = Math.random() * 90 + "vh";
        enemy.style.animationDuration = (3 + Math.random() * 3) + "s";
        cpp.appendChild(enemy);
      }

      for (let i = 0; i < 12; i++) {
        const bullet = document.createElement("div");
        bullet.className = "bullet";
        bullet.style.top = Math.random() * 90 + "vh";
        bullet.style.animationDuration = (2 + Math.random() * 2) + "s";
        cpp.appendChild(bullet);
      }
    }

    else {
      effect.classList.add(tech + "-effect");
    }
  });

  skill.addEventListener("mouseleave", clearAll);
});


/* ===== ACHIEVEMENTS ===== */
const achievementBox = document.querySelector(".achievement-box");
const achievementLayer = document.getElementById("achievement-layer");

if (achievementBox && achievementLayer) {
  achievementBox.addEventListener("mouseenter", () => {
    document.body.classList.add("achievement-active");

    for (let i = 0; i < 20; i++) {
      const trophy = document.createElement("div");
      trophy.className = "trophy";
      trophy.textContent = "🏆";
      trophy.style.left = Math.random() * 100 + "vw";
      trophy.style.animationDuration = (3 + Math.random() * 3) + "s";
      achievementLayer.appendChild(trophy);
    }
  });

  achievementBox.addEventListener("mouseleave", () => {
    document.body.classList.remove("achievement-active");
    achievementLayer.innerHTML = "";
  });
}


/* ===== CERTIFICATES ===== */
const certBox = document.querySelector(".cert-box");
const certLayer = document.getElementById("cert-layer");

if (certBox && certLayer) {
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
}
// ===== PROJECTS (Hacker Terminal Effect) =====
const projectBox = document.querySelector(".project-box");
const projectLayer = document.getElementById("project-layer");

if (projectBox && projectLayer) {
  projectBox.addEventListener("mouseenter", () => {
    document.body.classList.add("project-active");

    // Create terminal
    const terminal = document.createElement("div");
    terminal.className = "terminal";
    terminal.innerHTML = `
      > npm start<br>
      > Building project...<br>
      > Compiling modules...<br>
      > Running server...<br>
      ✔ Project Live
    `;
    projectLayer.appendChild(terminal);

    // Code streams
    const code = [
      "function runProject() {",
      "const server = start();",
      "fetch('/api/data')",
      "renderUI();",
      "console.log('Build Success');",
      "deploy();"
    ];

    for (let i = 0; i < 30; i++) {
      const line = document.createElement("div");
      line.className = "code-line";
      line.textContent = code[Math.floor(Math.random() * code.length)];
      line.style.top = Math.random() * 100 + "vh";
      line.style.animationDuration = (5 + Math.random() * 5) + "s";
      projectLayer.appendChild(line);
    }
  });

  projectBox.addEventListener("mouseleave", () => {
    document.body.classList.remove("project-active");
    projectLayer.innerHTML = "";
  });
}
// ===== EDUCATION (Neural Brain Network) =====
const eduBox = document.querySelector(".edu-box");
const eduLayer = document.getElementById("edu-layer");

if (eduBox && eduLayer) {
  eduBox.addEventListener("mouseenter", () => {
    document.body.classList.add("edu-active");

    const nodes = [];

    // Create neurons
    for (let i = 0; i < 25; i++) {
      const n = document.createElement("div");
      n.className = "neuron";
      n.style.left = Math.random() * 100 + "vw";
      n.style.top = Math.random() * 100 + "vh";
      eduLayer.appendChild(n);
      nodes.push(n);
    }

    // Connect neurons
    for (let i = 0; i < 40; i++) {
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const b = nodes[Math.floor(Math.random() * nodes.length)];

      const line = document.createElement("div");
      line.className = "synapse";

      const ax = a.offsetLeft;
      const ay = a.offsetTop;
      const bx = b.offsetLeft;
      const by = b.offsetTop;

      const length = Math.hypot(bx - ax, by - ay);
      const angle = Math.atan2(by - ay, bx - ax) * 180 / Math.PI;

      line.style.width = length + "px";
      line.style.left = ax + "px";
      line.style.top = ay + "px";
      line.style.transform = `rotate(${angle}deg)`;

      eduLayer.appendChild(line);
    }
  });

  eduBox.addEventListener("mouseleave", () => {
    document.body.classList.remove("edu-active");
    eduLayer.innerHTML = "";
  });
}
