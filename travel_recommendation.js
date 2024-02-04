const btnSearch = document.getElementById("btnSearch");
const btnReset = document.getElementById("btnReset");
const btnSubmitForm = document.getElementById("btnSubmitForm");

const countries = [];

function resetSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("result").value = "";
}

function resetForm() {
    document.getElementById("name").value = "";    
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function searchGroup() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    fetch('travel_recommendation_api.json').then(response => response.json()).then(data => {
        if (input === "temples") {
            const temples = data.temples;
            if (temples) {
                temples.forEach(item => {
                    const name = item.name;
                    const imageUrl = item.imageUrl;
                    const description = item.description;
                    resultDiv.innerHTML += `<img style="width: 100%" src="./images/${imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<h2>${name}</h2>`;
                    resultDiv.innerHTML += `<p>${description}</p>`;               
                });                
            } else {
                resultDiv.innerHTML = 'Temples not found.';        
            }
        }
        if (input === "beaches") {
            const beaches = data.beaches;
            if (beaches) {
                beaches.forEach(item => {
                    const name = item.name;
                    const imageUrl = item.imageUrl;
                    const description = item.description;
                    resultDiv.innerHTML += `<img style="width: 100%" src="./images/${imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<h2>${name}</h2>`;
                    resultDiv.innerHTML += `<p>${description}</p>`;
                });                
            } else {
                resultDiv.innerHTML = 'Beaches not found.';        
            }
        }
        if (input === "countries") {
            const countries = data.countries;
            if (countries) {
                countries.forEach(country => {
                    country.cities.forEach(item => {
                        const name = item.name;
                        const imageUrl = item.imageUrl;
                        const description = item.description;
                        resultDiv.innerHTML += `<img style="width: 100%" src="./images/${imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<h2>${name}</h2>`;
                        resultDiv.innerHTML += `<p>${description}</p>`;
                    })                                        
                });                
            } else {
                resultDiv.innerHTML = 'Countries not found.';        
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}

btnSearch.addEventListener('click', searchGroup);
btnReset.addEventListener('click', resetSearch);