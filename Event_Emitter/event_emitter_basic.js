const EventEmitter = require("events");

class UserEventTracker extends EventEmitter {

    constructor() {
        super();
        this.user_login = 0;
        this.user_logout = 0;
        this.user_purchase = 0;
        this.user_update = 0;

    }
    login(username) {
        console.log("User Log In: ", username);
        this.user_login++;
        this.emit("login", username);
    }

    logout(username) {
        console.log("User Log Out: ", username);
        this.user_logout++;
        this.emit("logout", username);
    }
    update(details) {
        console.log("Profile is Updated to", details);
        this.user_update++;
        this.emit("update", details);
    }
    buy(item, username, price) {
        this.user_purchase++;
        this.emit("buy", item, username, price);
    }

    summary() {
        console.log("Number of Login", this.user_login);
        console.log("Number of Logout", this.user_logout);
        console.log("Number of Purchase", this.user_purchase);
        console.log("Number of Update", this.user_update);
    }
}
const user = new UserEventTracker();

user.on("buy", (item, username, price) => {
    console.log(`${username} bought ${item} for Rs.${price}`)
})


user.login("Aayush");
user.login("Ram");
user.buy("Laptop", "Aayush", 1314);
user.buy("Mouse", "Ram", 100);
user.buy("Key", "Ram", 12);
user.update("SHah")
user.logout("Aayush");

user.summary();
