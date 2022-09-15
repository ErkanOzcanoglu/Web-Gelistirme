var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhe.responseText);
        } else if (xhr.status === 404) {
            console.log('Page not found');
        }
    }
}

xhr.open('GET', 'msg.txt', true);
xhr.send();