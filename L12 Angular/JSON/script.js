document.querySelector('#getEmployee').addEventListener('click', loadEmployee);

function loadEmployee() {

    setTimeout(() => {

    }, 1580);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json', true);


    var loadImage = document.querySelector('#loadImage');
    // loadImage.style.display = 'block';

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);

            // loadImage.style.display = "none";
            let employees = JSON.parse(this.responseText)
            let html = "";
            employees.forEach(employee => {

                html += `<tr>
                <td>${employee.firstname}</td>
                <td>${employee.lastname}</td>
                <td>${employee.age}</td>
                <td>${employee.retired}</td>
                </tr>`;
            });

            document.querySelector('#employees').innerHTML = html;
        }
    }

    xhr.send();
}