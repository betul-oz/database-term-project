# database-term-project

1- admin olarak powersheel başlat ve mysql e gir
 ```mysql -u root -p```

2- veritabanını oluştur
```CREATE DATABASE inventory;```

3- veritabanını kullanma
```USE inventory;```

4- tabloları oluşturma
```
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Quantity INT NOT NULL
);

CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerName VARCHAR(255) NOT NULL,
    ContactNumber VARCHAR(20),
    Email VARCHAR(255)
);

CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    TotalAmount DECIMAL(10, 2),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderDetails (
    OrderDetailID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE Suppliers (
    SupplierID INT AUTO_INCREMENT PRIMARY KEY,
    SupplierName VARCHAR(255) NOT NULL,
    ContactNumber VARCHAR(20),
    Email VARCHAR(255)
);
```


5- örnek datalarla doldurma
```
INSERT INTO Products (ProductName, Price, Quantity) VALUES ('Product A', 10.00, 100);
INSERT INTO Products (ProductName, Price, Quantity) VALUES ('Product B', 20.00, 200);

INSERT INTO Customers (CustomerName, ContactNumber, Email) VALUES ('Customer A', '1234567890', 'customerA@example.com');
INSERT INTO Customers (CustomerName, ContactNumber, Email) VALUES ('Customer B', '0987654321', 'customerB@example.com');

INSERT INTO Orders (CustomerID, OrderDate, TotalAmount) VALUES (1, '2024-01-01', 100.00);
INSERT INTO Orders (CustomerID, OrderDate, TotalAmount) VALUES (2, '2024-01-02', 200.00);

INSERT INTO OrderDetails (OrderID, ProductID, Quantity, Price) VALUES (1, 1, 10, 10.00);
INSERT INTO OrderDetails (OrderID, ProductID, Quantity, Price) VALUES (2, 2, 20, 20.00);

INSERT INTO Suppliers (SupplierName, ContactNumber, Email) VALUES ('Supplier A', '1234567890', 'supplierA@example.com');
INSERT INTO Suppliers (SupplierName, ContactNumber, Email) VALUES ('Supplier B', '0987654321', 'supplierB@example.com');

```

6- Veritabanındaki dataları kontrol etmek için:
```
SHOW TABLES;

SELECT * FROM Products;
SELECT * FROM Customers;
SELECT * FROM Orders;
SELECT * FROM OrderDetails;
SELECT * FROM Suppliers;
```

7- backendi çalıştırma
```npm i```
```npm start```

8- frontendi ```ìndex.html``` dosyasını açarsanız çalıştırırsınız. böylece proje baştan aşağı çalışmış olur
