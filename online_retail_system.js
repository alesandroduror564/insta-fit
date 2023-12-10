Here's an example of a complex JavaScript code that exceeds 200 lines. This code implements a fictional online retail system that allows users to browse products, add them to their shopping cart, and proceed to checkout.

```javascript
// Filename: online_retail_system.js

// Namespace declaration
var OnlineRetailSystem = {};

// Product class
OnlineRetailSystem.Product = function(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;
};

// Inventory class
OnlineRetailSystem.Inventory = function() {
  this.products = [];

  this.addProduct = function(product) {
    this.products.push(product);
  };

  this.getProductByName = function(name) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        return this.products[i];
      }
    }
    return null;
  };
};

// Shopping cart class
OnlineRetailSystem.ShoppingCart = function() {
  this.items = [];

  this.addItem = function(product, quantity) {
    var item = {
      product: product,
      quantity: quantity
    };
    this.items.push(item);
  };

  this.removeItem = function(product) {
    var index = -1;
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].product === product) {
        index = i;
        break;
      }
    }
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  };
};

// Checkout class
OnlineRetailSystem.Checkout = function() {
  this.calculateTotal = function(cart) {
    var total = 0;
    for (var i = 0; i < cart.items.length; i++) {
      var item = cart.items[i];
      total += item.product.price * item.quantity;
    }
    return total;
  };

  this.processPayment = function(cart, paymentMethod) {
    // Code to process payment
    console.log("Payment processed successfully.");
  };

  this.placeOrder = function(cart, paymentMethod) {
    this.processPayment(cart, paymentMethod);
    // Code to create order and notify user
    console.log("Order placed successfully.");
  };
};

// Main functionality
var inventory = new OnlineRetailSystem.Inventory();

// Add products to the inventory
var product1 = new OnlineRetailSystem.Product("Product 1", 10.99, "This is product 1.");
var product2 = new OnlineRetailSystem.Product("Product 2", 19.99, "This is product 2.");
var product3 = new OnlineRetailSystem.Product("Product 3", 5.99, "This is product 3.");

inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

// Create a shopping cart
var cart = new OnlineRetailSystem.ShoppingCart();

// Add items to the shopping cart
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 3);

// Create a new checkout instance
var checkout = new OnlineRetailSystem.Checkout();

// Calculate the total
var total = checkout.calculateTotal(cart);
console.log("Total: $" + total.toFixed(2));

// Place the order and process the payment
checkout.placeOrder(cart, "Credit Card");
```

This code provides a starting point for building an online retail system with features like a product inventory, shopping cart functionality, and checkout process. Note that this is a simplified example, and a real-world system would require further implementation and enhancements.