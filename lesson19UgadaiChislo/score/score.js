const tBody = document.getElementById(`tbody`);
const score = JSON.parse(localStorage.getItem(`score`));
console.log(score);
tBody.innerHTML = ``
score
.sort(a,b) => (b.score - a.score)
.slice(0,10)

.forEach (data =>{
    const tr = document.createElement(`tr`);
    const tdName = document.createElement(`td`);
    tdName.innerText = data.name;
    const tdScore = document.createElement(`td`);
    tdScore.innerText = data.score;
    tr.appendChild(tdName, tdScore);
    tBody.append(tr);
})