import ('../DATA.json').then(({default: jsonData}) => {
   
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach(function(data) {
        dataList +=`
        <div class="list_item">
            <img class="list_item_thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="city">${data['city']}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : 
                    <span href="#" class="list_item_rating_value">${data['rating']}</span>
                </p>
                <h1 class="list_item_title"><a href="#">${data['name']}</a></h1>
                <div class="list_item_desc">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector('#dft').innerHTML = dataList;  
});