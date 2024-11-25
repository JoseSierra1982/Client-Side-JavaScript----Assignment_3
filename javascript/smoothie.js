// Define the Smoothie class
class Smoothie {
    constructor(name, email, base, size, flavor, addIns, specialRequest) {
        this.name = name;
        this.email = email;
        this.base = base;
        this.size = size;
        this.flavor = flavor;
        this.addIns = addIns;
        this.specialRequest = specialRequest;
    }

    // Method to generate the order summary
    getOrderSummary() {
        return `Order Summary:
        Name: ${this.name}
        Email: ${this.email}
        Smoothie Base: ${this.base}
        Size: ${this.size}
        Flavor: ${this.flavor}
        Add-ins: ${this.addIns.join(', ')}
        Special Requests: ${this.specialRequest}`;
    }
}

// Add event listener to form submission
document.getElementById('smoothie-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting to the server
    event.preventDefault();

    // Capture form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const smoothieBase = document.getElementById('smoothie-base').value;
    const size = document.getElementById('size').value;
    const flavor = document.getElementById('flavor').value;
    const addIns = Array.from(document.getElementById('add-ins').selectedOptions).map(option => option.value);
    const specialRequest = document.getElementById('special-request').value;

    // Create a new Smoothie object
    const smoothieOrder = new Smoothie(name, email, smoothieBase, size, flavor, addIns, specialRequest);

    // Display the order summary
    alert(smoothieOrder.getOrderSummary());
});
