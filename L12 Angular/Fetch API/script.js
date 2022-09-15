//text

function getText() {
    fetch('text.txt').then(response => {
        return response.text();
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    })
}

getText();

//json

function getJson() {
    fetch('products.json').then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(errror);
    })
}

getJson();



//external api


function getExternalAPI() {
    fetch('https://randomuser.me/api/?results=5')
        .then(data => {
            return data.json();
        }).then(users => {
            var html = "";
            users.results.forEach(user => {
                html += `
                <div>
                    <img src="${user.picture.medium}">
                    <div>
                    ${user.name.first} 
                    ${user.name.last}
                    </div>
                </div>`;
            });

            document.querySelector('#users').innerHTML = html;

        }).catch(error => {
            console.log(error);
        })
}

getExternalAPI();