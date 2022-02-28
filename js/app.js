// Search & Load data from API
const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => ShowPhone(data.data))

}

const ShowPhone = phones =>{
    const showResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card rounded">
        <div class="w-50 mx-auto">
        <img src="${phone.image}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h3 class="card-title text-center">${phone.phone_name}</h3>
            <h4 class="card-text text-center text-primary">${phone.brand}</h4>
            <div class="d-flex justify-content-center btn-lg"><button type="button" class="btn btn-primary btn-lg">Details</button></div>
        </div>
        
    </div>
        `;
        showResult.appendChild(div);
    });
}