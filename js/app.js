// Global Variable for throwing error
const searchMessage= document.getElementById('noResultMessage');
const showResult = document.getElementById('search-result');
const details =  document.getElementById('phone-details');

// Search & Load data from API
const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    if(searchText == ''){
        searchMessage.style.display='block';
        details.textContent = '';
        showResult.textContent = '';

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
    details.textContent = '';
       
    if(phones.length == 0){
           searchMessage.style.display='block';
           showResult.textContent = '';
       }
       
       else{
         phones.slice(0,20).forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card rounded">
            <div class="w-50 mx-auto">
            <img src="${phone.image}" class="card-img-top" alt="...">
            </div>
            <div class="card-body alert-secondary">
                <h3 class="card-title text-center">${phone.phone_name.slice(0,20)}</h3>
                <h4 class="card-text text-center text-primary">${phone.brand}</h4>
                <div class="d-flex justify-content-center btn-lg">
                <button onclick="phoneDetails('${phone.slug}')" type="button" class="btn btn-lg btn-primary">Details</button>
                </div>
            </div> 
        </div>`;
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
        if(data.releaseDate != 0 && data.others !=0 && data.slug != 'apple_iphone_13_mini-11104'){
        const details =  document.getElementById('phone-details');
        details.textContent='';
        const PhoneImg = document.createElement('div');
        PhoneImg.classList.add('child');
        PhoneImg.innerHTML = `
        <image src="${data.image}">`;
        const phoneDetails = document.createElement('div');
        phoneDetails.classList.add('child');
        phoneDetails.innerHTML = `
        <h5 class="fw-bold">About Phone:-</h5>
        <h6>Name: ${data.name}</h6>
        <h6>Realease Date: ${data.releaseDate}</h6>
        <hr>
        <h5 class="fw-bold">Main Features:-</h5>
        <h6>Chipset: ${data.mainFeatures.chipSet}</h6>
        <h6>Storage: ${data.mainFeatures.storage}</h6>
        <hr>
        <h6>Display: ${data.mainFeatures.displaySize}</h6>
        <h6>Memory: ${data.mainFeatures.memory}</h6>
        <hr>
        <h6>Bluetooth: ${data.others.Bluetooth} </h6>
        <h6>GPS: ${data.others.GPS} </h6>
        <h6>NFC: ${data.others.NFC} </h6>
        <hr>
        <h6>Radio: ${data.others.Radio} </h6>
        <h6>USB: ${data.others.USB} </h6>
        <h6>WLAN: ${data.others.WLAN} </h6>
        <hr>
        <h5 class="fw-bold">Sensors:-</h5>
        <h6>
        ${data.mainFeatures.sensors[0]},${data.mainFeatures.sensors[1]},
        ${data.mainFeatures.sensors[2]},${data.mainFeatures.sensors[3]},
        ${data.mainFeatures.sensors[4]},${data.mainFeatures.sensors[5]}
        </h6>`;
        details.appendChild(PhoneImg);
        details.appendChild(phoneDetails);
        }

    else if(data.slug != 'apple_iphone_13_mini-11104' && data.others != 0){
        const details =  document.getElementById('phone-details');
        details.textContent='';
        const PhoneImg = document.createElement('div');
        PhoneImg.classList.add('child');
        PhoneImg.innerHTML = `
        <image src="${data.image}">`;
        const phoneDetails = document.createElement('div');
        phoneDetails.classList.add('child')
        phoneDetails.innerHTML = `
        <h5 class="fw-bold">About Phone:-</h5>
        <h6>Name: ${data.name}</h6>
        <h6>Realease Date: Not Found!</h6>
        <hr>
        <h5 class="fw-bold">Main Features:-</h5>
        <h6>Chipset: ${data.mainFeatures.chipSet}</h6>
        <h6>Storage: ${data.mainFeatures.storage}</h6>
        <hr>
        <h6>Display: ${data.mainFeatures.displaySize}</h6>
        <h6>Memory: ${data.mainFeatures.memory}</h6>
        <hr>
        <h6>Bluetooth: ${data.others.Bluetooth} </h6>
        <h6>GPS: ${data.others.GPS} </h6>
        <h6>NFC: ${data.others.NFC} </h6>
        <hr>
        <h6>Radio: ${data.others.Radio} </h6>
        <h6>USB: ${data.others.USB} </h6>
        <h6>WLAN: ${data.others.WLAN} </h6>
        <hr>
        <h5 class="fw-bold">Sensors:-</h5>
        <h6>
        ${data.mainFeatures.sensors[0]},${data.mainFeatures.sensors[1]},
        ${data.mainFeatures.sensors[2]},${data.mainFeatures.sensors[3]},
        ${data.mainFeatures.sensors[4]},${data.mainFeatures.sensors[5]}
        </h6>`;
        details.appendChild(PhoneImg);
        details.appendChild(phoneDetails);
        }

        else if(data.releaseDate != 0 && data.others !=0){
            const details =  document.getElementById('phone-details');
            details.textContent='';
            const PhoneImg = document.createElement('div');
            PhoneImg.classList.add('child');
            PhoneImg.innerHTML = `
            <image src="${data.image}">`;
            const phoneDetails = document.createElement('div');
            phoneDetails.classList.add('child')
            phoneDetails.innerHTML = `
            <h5 class="fw-bold">About Phone:-</h5>
        <h6>Name: ${data.name}</h6>
        <h6>Realease Date: ${data.releaseDate}</h6>
        <hr>
        <h5 class="fw-bold">Main Features:-</h5>
        <h6>Chipset: ${data.mainFeatures.chipSet}</h6>
        <h6>Storage: ${data.mainFeatures.storage}</h6>
        <hr>
        <h6>Display: ${data.mainFeatures.displaySize}</h6>
        <h6>Memory: ${data.mainFeatures.memory}</h6>
        <hr>
        <h6>Bluetooth: Not Available</h6>
        <h6>GPS: Not Available</h6>
        <h6>NFC: Not Available</h6>
        <hr>
        <h6>Radio: Not Available</h6>
        <h6>USB: Not Available</h6>
        <h6>WLAN: Not Available</h6>
        <hr>
        <h5 class="fw-bold">Sensors:-</h5>
        <h6>
        ${data.mainFeatures.sensors[0]},${data.mainFeatures.sensors[1]},
        ${data.mainFeatures.sensors[2]},${data.mainFeatures.sensors[3]},
        ${data.mainFeatures.sensors[4]},${data.mainFeatures.sensors[5]}
        </h6>`;
            details.appendChild(PhoneImg);
            details.appendChild(phoneDetails);
            
    }
}
