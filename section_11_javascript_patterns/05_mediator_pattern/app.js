/**
 * Mediator Pattern
 */
const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype.send = function(message, to) {
    this.chatroom.send(message, this, to);
}

User.prototype.recieve = function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
}

const Chatroom = function() {
    let users = {}; // List of Users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if (to) {
                // Single User Message
                to.recieve(message, from);
            } else {
                for(key in users) {
                    if (users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const abhi = new User('Abhi');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(abhi);
chatroom.register(jeff);
chatroom.register(sara);

abhi.send('Hello Jeff', jeff);
sara.send('Hello Abhishek', abhi);
abhi.send('Hello Everyone');
