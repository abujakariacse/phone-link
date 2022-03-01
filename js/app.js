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
        details.style.backgroundColor = '#fff7e0a1';
        const PhoneImg = document.createElement('div');
        PhoneImg.classList.add('child');
        PhoneImg.innerHTML = `
        <image src="${data.image}">`;
        const phoneDetails = document.createElement('div');
        phoneDetails.classList.add('child');
        phoneDetails.innerHTML = `
        <h5>Name: ${data.name}</h5>
        <h5>Realease Date: ${data.releaseDate}</h5>
        <h5 class="fw-bold">Main Features:-</h5>
        <h5>Chipset: ${data.mainFeatures.chipSet}</h5>
        <h5>Display: ${data.mainFeatures.displaySize}</h5>
        <h5>Memory: ${data.mainFeatures.memory}</h5>
        <h5>Bluetooth: ${data.others.Bluetooth} </h5>
        <h5>GPS: ${data.others.GPS} </h5>
        <h5>NFC: ${data.others.NFC} </h5>
        <h5>Radio: ${data.others.Radio} </h5>
        <h5>USB: ${data.others.USB} </h5>
        <h5>WLAN: ${data.others.WLAN} </h5>
        <h5 class="fw-bold">Sensors:-</h5>
        <h5>1.${data.mainFeatures.sensors[0]} </h5>
        <h5>2.${data.mainFeatures.sensors[1]} </h5>
        <h5>3.${data.mainFeatures.sensors[2]} </h5>
        <h5>4.${data.mainFeatures.sensors[3]} </h5>
        <h5>5.${data.mainFeatures.sensors[4]} </h5>
        <h5>6.${data.mainFeatures.sensors[5]} </h5>`;
        details.appendChild(PhoneImg);
        details.appendChild(phoneDetails);
        }

    else if(data.slug != 'apple_iphone_13_mini-11104' && data.others != 0){
        const details =  document.getElementById('phone-details');
        details.textContent='';
        details.style.backgroundColor = '#fff7e0a1';
        const PhoneImg = document.createElement('div');
        PhoneImg.classList.add('child');
        PhoneImg.innerHTML = `
        <image src="${data.image}">`;
        const phoneDetails = document.createElement('div');
        phoneDetails.classList.add('child')
        phoneDetails.innerHTML = `
        <h5>Name: ${data.name}</h5>
        <h5>Realease Date: Not Publish Yet</h5>
        <h5 class="fw-bold">Main Features:-</h5>
        <h5>Chipset: ${data.mainFeatures.chipSet}</h5>
        <h5>Display: ${data.mainFeatures.displaySize}</h5>
        <h5>Memory: ${data.mainFeatures.memory}</h5>
        <h5>Bluetooth: ${data.others.Bluetooth} </h5>
        <h5>GPS: ${data.others.GPS} </h5>
        <h5>NFC: ${data.others.NFC} </h5>
        <h5>Radio: ${data.others.Radio} </h5>
        <h5>USB: ${data.others.USB} </h5>
        <h5>WLAN: ${data.others.WLAN} </h5>
        <h5 class="fw-bold">Sensors:-</h5>
        <h5>1.${data.mainFeatures.sensors[0]} </h5>
        <h5>2.${data.mainFeatures.sensors[1]} </h5>
        <h5>3.${data.mainFeatures.sensors[2]} </h5>
        <h5>4.${data.mainFeatures.sensors[3]} </h5>
        <h5>5.${data.mainFeatures.sensors[4]} </h5>
        <h5>6.${data.mainFeatures.sensors[5]} </h5>`;
        details.appendChild(PhoneImg);
        details.appendChild(phoneDetails);
        }

        else if(data.releaseDate != 0 && data.others !=0){
            const details =  document.getElementById('phone-details');
            details.textContent='';
            details.style.backgroundColor = '#fff7e0a1';
            const PhoneImg = document.createElement('div');
            PhoneImg.classList.add('child');
            PhoneImg.innerHTML = `
            <image src="${data.image}">`;
            const phoneDetails = document.createElement('div');
            phoneDetails.classList.add('child')
            phoneDetails.innerHTML = `
            <h5>Name: ${data.name}</h5>
            <h5>Realease Date: ${data.releaseDate}</h5>
            <h5 class="fw-bold">Main Features:-</h5>
            <h5>Chipset: ${data.mainFeatures.chipSet}</h5>
            <h5>Display: ${data.mainFeatures.displaySize}</h5>
            <h5>Memory: ${data.mainFeatures.memory}</h5>
            <h5>Bluetooth: Not Available</h5>
            <h5>GPS: Not Available </h5>
            <h5>NFC: Not Available </h5>
            <h5>Radio: Not Available </h5>
            <h5>USB: Not Available </h5>
            <h5>WLAN: Not Available </h5>
            <h5 class="fw-bold">Sensors:-</h5>
            <h5>1.${data.mainFeatures.sensors[0]} </h5>
            <h5>2.${data.mainFeatures.sensors[1]} </h5>
            <h5>3.${data.mainFeatures.sensors[2]} </h5>
            <h5>4.${data.mainFeatures.sensors[3]} </h5>
            <h5>5.${data.mainFeatures.sensors[4]} </h5>
            <h5>6.${data.mainFeatures.sensors[5]} </h5>`;
            details.appendChild(PhoneImg);
            details.appendChild(phoneDetails);
            
    }
}







