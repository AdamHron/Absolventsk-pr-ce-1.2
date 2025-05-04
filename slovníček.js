const slovicka = [
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
  
  




  const tbody = document.getElementById("slovnicek-body");

  slovicka.forEach(slovo => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${slovo.en}</td>
      <td>${slovo.cz}</td>
      <td>${slovo.en_vyslovnost}</td>
    `;
    tbody.appendChild(row);
  });
  
























  document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById("slovnicek-body");
    const tridaSelect = document.getElementById("trida");
    const unitSelect = document.getElementById("unit");
    const subunitSelect = document.getElementById("subunit");
    const button = document.getElementById("button");
  
    const renderTable = (slovicka) => {
      tbody.innerHTML = '';
      slovicka.forEach(slovo => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${slovo.en}</td>
          <td>${slovo.cz}</td>
          <td>${slovo.en_vyslovnost}</td>
        `;
        tbody.appendChild(row);
      });
    };
  
    const filterSlovicka = () => {
      document.getElementById("zpráva").innerHTML = "";
  
      const tridaValue = tridaSelect.value;
      const unitValue = unitSelect.value;
      const subunitValue = subunitSelect.value;
  
      if (tridaValue === '0') {
        document.getElementById("zpráva").innerHTML = "Žádná lekce pro toto vyhledávání.";
        renderTable(slovicka); // zobraz všechna slovíčka
        return;
      }
  
      if (unitValue === '0' && subunitValue !== '0') {
        document.getElementById("zpráva").innerHTML = "Žádná lekce pro toto vyhledávání.";
        renderTable(slovicka); // zobraz všechna slovíčka
        return;
      }
  
      const filteredSlovicka = slovicka.filter(slovo => {
        const matchesTrida = slovo.trida == tridaValue;
        const matchesUnit = unitValue === '0' || slovo.unit == unitValue;
        const matchesSubunit = subunitValue === '0' || slovo.subunit === subunitValue;
  
        return matchesTrida && matchesUnit && matchesSubunit;
      });
  
      renderTable(filteredSlovicka);
    };
  
    renderTable(slovicka);
  
    button.addEventListener("click", (event) => {
      event.preventDefault();
      filterSlovicka();
    });
  });
  