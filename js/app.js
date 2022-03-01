const searchMessage= document.getElementById('noResultMessage');
// Search & Load data from API
const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    if(searchText == ''){
        searchMessage.style.display='block';
        
    }
    else{
    searchMessage.style.display='none';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => ShowPhone(data.data))
    }

}

// Search Result
const ShowPhone = phones =>{
    const showResult = document.getElementById('search-result');
    showResult.textContent = ''; 
       if(phones.length == 0){
           searchMessage.style.display='block';
       }
       else{
        phones.forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card rounded">
            <div class="w-50 mx-auto">
            <img src="${phone.image}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <h3 class="card-title text-center">${phone.phone_name.slice(0,20)}</h3>
                <h4 class="card-text text-center text-primary">${phone.brand}</h4>
                <div class="d-flex justify-content-center btn-lg">
                <button onclick="phoneDetails('${phone.slug}')" type="button" class="btn btn-primary btn-lg">Details</button>
                </div>
            </div> 
        </div>
            `;
            showResult.appendChild(div);
        });
       }
    }
    
    // Phone Details
    const phoneDetails = id =>{
        const url = `https://openapi.programming-hero.com/api/phone/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => moreDetails(data.data))
    };
    
    // Details About Phone
    const moreDetails = data =>{
        console.log(data);
        if(data.releaseDate !=0){
        const details =  document.getElementById('phone-details');
        details.textContent='';
        details.style.backgroundColor = '#fff7e0a1';
        const PhoneImg = document.createElement('div');
        PhoneImg.classList.add('child');
        PhoneImg.innerHTML = `
        <image src="${data.image}">
        `;
        const phoneDetails = document.createElement('div');
        phoneDetails.classList.add('child')
        phoneDetails.innerHTML = `
        <h5>Name: ${data.name}</h5>
        <h5>Realease Date: ${data.releaseDate}</h5>
        <h5 class="fw-bold">Main Features:-</h5>
        <h5>Chipset: ${data.mainFeatures.chipSet}</h5>
        <h5>Display: ${data.mainFeatures.displaySize}</h5>
        <h5>Memory: ${data.mainFeatures.memory}</h5>
        `;
        details.appendChild(PhoneImg);
        details.appendChild(phoneDetails);
        }
        else{
        const details =  document.getElementById('phone-details');
        details.textContent='';
        details.style.backgroundColor = '#fff7e0a1';
        const PhoneImg = document.createElement('div');
        PhoneImg.classList.add('child');
        PhoneImg.innerHTML = `
        <image src="${data.image}">
        `;
        const phoneDetails = document.createElement('div');
        phoneDetails.classList.add('child')
        phoneDetails.innerHTML = `
        <h5>Name: ${data.name}</h5>
        <h5>Realease Date: Not Published</h5>
        <h5 class="fw-bold">Main Features:-</h5>
        <h5>Chipset: ${data.mainFeatures.chipSet}</h5>
        <h5>Display: ${data.mainFeatures.displaySize}</h5>
        <h5>Memory: ${data.mainFeatures.memory}</h5>
        `;
        details.appendChild(PhoneImg);
        details.appendChild(phoneDetails);
        }
}






