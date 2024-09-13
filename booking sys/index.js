class Booking {
    constructor(bookingId, customerName, date, time) {
        this.bookingId = bookingId;
        this.customerName = customerName;
        this.date = date;
        this.time = time;
    }

    getDetails() {
        return `Booking ID: ${this.bookingId}, Customer: ${this.customerName}, Date: ${this.date}, Time: ${this.time}`;
    }
}

class BookingSystem {
    constructor() {
        this.bookings = [];
        this.nextId = 1;  
    }

    addBooking(customerName, date, time) {
        const newBooking = new Booking(this.nextId++, customerName, date, time);
        this.bookings.push(newBooking);
        console.log(`Booking added: ${newBooking.getDetails()}`);
        return newBooking;
    }

    listBookings() {
        if (this.bookings.length === 0) {
            console.log('No bookings available.');
            return;
        }
        console.log('Current bookings:');
        this.bookings.forEach(booking => {
            console.log(booking.getDetails());
        });
    }

    cancelBooking(bookingId) {
        const index = this.bookings.findIndex(booking => booking.bookingId === bookingId);
        if (index !== -1) {
            const [canceledBooking] = this.bookings.splice(index, 1);
            console.log(`Booking canceled: ${canceledBooking.getDetails()}`);
            return canceledBooking;
        } else {
            console.log('Booking not found.');
            return null;
        }
    }
}


const bookingSystem = new BookingSystem();


bookingSystem.addBooking('Alice guo', '2024-09-15', '10:00 AM');
bookingSystem.addBooking('busano kulot', '2024-09-16', '2:00 PM');


bookingSystem.listBookings();


bookingSystem.cancelBooking(1); 

bookingSystem.listBookings();