const selectedTrida = parseInt(localStorage.getItem("selectedTrida"));
const selectedUnit = parseInt(localStorage.getItem("selectedUnit"));
const selectedSubunit = localStorage.getItem("selectedSubunit");


const words = [
    { cz: "dům", en: "house", en_vyslovnost: "/haʊs/", trida: 1, unit: 1, subunit: "a" },
    { cz: "škola", en: "school", en_vyslovnost: "/skuːl/", trida: 2, unit: 2, subunit: "b" },
    { cz: "pes", en: "dog", en_vyslovnost: "/dɒɡ/", trida: 3, unit: 3, subunit: "c" },
    { cz: "kočka", en: "cat", en_vyslovnost: "/kæt/", trida: 4, unit: 4, subunit: "d" },
    { cz: "auto", en: "car", en_vyslovnost: "/kɑːr/", trida: 5, unit: 5, subunit: "a" },
    { cz: "kolo", en: "bike", en_vyslovnost: "/baɪk/", trida: 6, unit: 6, subunit: "b" },
    { cz: "kniha", en: "book", en_vyslovnost: "/bʊk/", trida: 7, unit: 1, subunit: "c" },
    { cz: "tužka", en: "pencil", en_vyslovnost: "/ˈpensl/", trida: 8, unit: 2, subunit: "d" },
    { cz: "jablko", en: "apple", en_vyslovnost: "/ˈæpl/", trida: 9, unit: 3, subunit: "a" },
    { cz: "banán", en: "banana", en_vyslovnost: "/bəˈnɑːnə/", trida: 1, unit: 4, subunit: "b" },
    { cz: "voda", en: "water", en_vyslovnost: "/ˈwɔːtər/", trida: 2, unit: 5, subunit: "c" },
    { cz: "mléko", en: "milk", en_vyslovnost: "/mɪlk/", trida: 3, unit: 6, subunit: "d" },
    { cz: "chléb", en: "bread", en_vyslovnost: "/brɛd/", trida: 4, unit: 1, subunit: "a" },
    { cz: "sýr", en: "cheese", en_vyslovnost: "/tʃiːz/", trida: 5, unit: 2, subunit: "b" },
    { cz: "míč", en: "ball", en_vyslovnost: "/bɔːl/", trida: 6, unit: 3, subunit: "c" },
    { cz: "slunce", en: "sun", en_vyslovnost: "/sʌn/", trida: 7, unit: 4, subunit: "d" },
    { cz: "měsíc", en: "moon", en_vyslovnost: "/muːn/", trida: 8, unit: 5, subunit: "a" },
    { cz: "hvězda", en: "star", en_vyslovnost: "/stɑːr/", trida: 9, unit: 6, subunit: "b" },
    { cz: "počítač", en: "computer", en_vyslovnost: "/kəmˈpjuːtər/", trida: 1, unit: 1, subunit: "c" },
    { cz: "telefon", en: "phone", en_vyslovnost: "/fəʊn/", trida: 2, unit: 2, subunit: "d" },
    { cz: "okno", en: "window", en_vyslovnost: "/ˈwɪndəʊ/", trida: 3, unit: 3, subunit: "a" },
    { cz: "dveře", en: "door", en_vyslovnost: "/dɔːr/", trida: 4, unit: 4, subunit: "b" },
    { cz: "stůl", en: "table", en_vyslovnost: "/ˈteɪbl/", trida: 5, unit: 5, subunit: "c" },
    { cz: "židle", en: "chair", en_vyslovnost: "/tʃeər/", trida: 6, unit: 6, subunit: "d" },
    { cz: "postel", en: "bed", en_vyslovnost: "/bɛd/", trida: 7, unit: 1, subunit: "a" }
];


const filteredWords = words.filter(word =>
    word.trida === selectedTrida &&
    word.unit === selectedUnit &&
    word.subunit === selectedSubunit
);

let currentWord = null;
let previousWord = null;
let active = true;
let numberOfAnswers = 0;
let numberOfCorrectAnswers = 0;

function getRandomWord() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * filteredWords.length);
        currentWord = filteredWords[randomIndex];
    } while (previousWord === currentWord && filteredWords.length > 1);

    document.getElementById("h2").textContent = currentWord.en;
    previousWord = currentWord;
}


document.getElementById("myPieChart").style.display = "none";
document.getElementById("button3").style.display = "none";
document.getElementById("button4").style.display = "none";



function updateChart() {
    // Aktualizujte data grafu podle počtu správných a nesprávných odpovědí
    myPieChart.data.datasets[0].data = [numberOfCorrectAnswers, numberOfAnswers + 1 - numberOfCorrectAnswers];
    myPieChart.update(); // Aktualizujte graf, aby se změny projevily
}


function button() {
    const userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
    const correctAnswer = currentWord.cz.toLowerCase().trim();
    const result = document.getElementById("result");

    if (active) {
        if (userAnswer === "") {
            result.innerHTML = "Vyplňte pole";
            result.style.color = "red";
        } else if (userAnswer === correctAnswer) {
            result.innerHTML = "Správně!";
            result.style.color = "green";
            numberOfCorrectAnswers++;
            document.getElementById("button2").style.display = "block";
            active = false;
        } else {
            result.innerHTML = `Špatně. Správná odpověď je: ${currentWord.cz}`;
            result.style.color = "red";
            document.getElementById("button2").style.display = "block";
            active = false;
        }
        updateChart();
    }
    else{

    }
    
}

getRandomWord();
document.getElementById("button2").style.display = "none";

function finish() {
    document.getElementById("button2").style.display = "none";
    document.getElementById("button1").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("userAnswer").style.display = "none";
    document.getElementById("tabulka").style.display = "none";
    document.getElementById("h2").style.display = "none";
    document.getElementById("překlad-nápis").style.display = "none";

        const nadpis = document.getElementById("nadpis");
        nadpis.innerHTML = `Vyhodnocení`;

    document.getElementById("myPieChart").style.display = "block";

    document.getElementById("numberOfCorrectAnswers").innerHTML = `Správně: ${numberOfCorrectAnswers}`;
    document.getElementById("numberOfIncorrectAnswers").innerHTML = `Špatně: ${15 - numberOfCorrectAnswers}`;
    document.getElementById("úspěšnost").innerHTML = `Úspěšnost: ${Math.round(numberOfCorrectAnswers / 15 * 100)}%`;

    document.getElementById("button3").style.display = "block";
    document.getElementById("button4").style.display = "block";    
}


function next() {    
    numberOfAnswers++;

    const button2 = document.getElementById("button2");
    if (numberOfAnswers === 14) {
        button2.innerHTML = `Dokončit`;
    }
    else if(numberOfAnswers === 15) {
        finish();
    }
    else {
        button2.innerHTML = `Další`;
    }

    document.getElementById("userAnswer").value = "";
    result.innerHTML = ``;
    getRandomWord();
    document.getElementById("button2").style.display = "none";
    document.getElementById("userAnswer").value = "";
    active = true;
}




        // Data pro koláčový graf
        const data = {
            labels: ['Správně', 'Špatně'],
            datasets: [{
                data: [numberOfCorrectAnswers, 15 - numberOfCorrectAnswers], // Počet nebo procenta
                backgroundColor: ['#33FF57', '#FF5733'], // Barvy pro jednotlivé díly
                borderColor: ['#fff', '#fff'], // Barvy okrajů
                borderWidth: 2
            }]
        };

        // Možnosti grafu (volitelné)
        const options = {
            responsive: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true, // Zobrazit tooltip při najetí na graf
                }
            }
        };

        // Vytvoření grafu
        const ctx = document.getElementById('myPieChart').getContext('2d');
        const myPieChart = new Chart(ctx, {
            type: 'pie',  // Typ grafu: 'pie' pro kulatý graf
            data: data,
            options: options
        });
