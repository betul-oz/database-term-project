// document.addEventListener('DOMContentLoaded', () => {
//     fetch('http://localhost:3000/products')
//         .then(response => response.json())
//         .then(data => {
//             const productTable = document.getElementById('product-table');
//             data.forEach(product => {
//                 const li = document.createElement('li');
//                 li.textContent = `${product.ProductName}: ${product.Description} - $${product.Price}`;
//                 productList.appendChild(li);
//             });
//         })
//         .catch(error => console.error('Error fetching products:', error));
// });

// document.addEventListener('DOMContentLoaded', () => {
//     fetch('http://localhost:3000/customers')
//         .then(response => response.json())
//         .then(data => {
//             const customerList = document.getElementById('customer-list');
//             data.forEach(customer => {
//                 const li = document.createElement('li');
//                 li.textContent = `${customer.CustomerName}: ${customer.Email}`;
//                 customerList.appendChild(li);
//             });
//         })
//         .catch(error => console.error('Error fetching customers:', error));
// });

// document.addEventListener('DOMContentLoaded', () => {
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(data => {
//             const orderList = document.getElementById('order-list');
//             data.forEach(order => {
//                 const li = document.createElement('li');
//                 li.textContent = `Order ID: ${order.OrderID}, Customer ID: ${order.CustomerID}, Date: ${order.OrderDate}, Status: ${order.OrderStatus}, Total Amount: $${order.TotalAmount}`;
//                 orderList.appendChild(li);
//             });
//         })
//         .catch(error => console.error('Error fetching orders:', error));
// });


async function fetchData(endpoint) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        displayData(endpoint, data);
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('data-container').innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}


function displayData(endpoint, data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous data

    if (data.length === 0) {
        container.innerHTML = '<p>No data available</p>';
        return;
    }

    // Create a table to display the data
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Get table headers from the first object's keys
    const headers = Object.keys(data[0]);
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Populate table rows with data
    data.forEach(item => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = item[header];
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
}


