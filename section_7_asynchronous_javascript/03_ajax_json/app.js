/**
 * Ajax & JSON
 */

document.querySelector('#button1').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customer = JSON.parse(this.response);

            document.querySelector('#customer').innerHTML = `
                <ul>
                    <li>Id: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;
        }
    }

    xhr.send();
});

document.querySelector('#button2').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json');

    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.response);

            customers.forEach(function (customer) {
                const ul = document.createElement('ul');

                const liId = document.createElement('li');
                liId.appendChild(document.createTextNode('Id: ' + customer.id));
                ul.appendChild(liId);

                const liName = document.createElement('li');
                liName.appendChild(document.createTextNode(`Name: ${customer.name}`));
                ul.appendChild(liName);

                const liPhone = document.createElement('li');
                liPhone.appendChild(document.createTextNode(`Phone: ${customer.phone}`));
                ul.appendChild(liPhone);

                document.querySelector('#customers').appendChild(ul);
            });
        }

    }

    xhr.send();
});