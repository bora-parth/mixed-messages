// create a program that randomly outputs messages composed of three strings

const mixedMessages = {
    // create  arrays that will store the messages
    _times : ['Today', 'Tommorow', 'In a week', 'In 6 months', 'In a year'],
    get times() {
        return this._times;
    },
    addTime(item) {
        this._times.push(item);
    },
    getRandomTime() {
        return this._times[Math.floor(Math.random() * this._times.length)];
    },

    _persons : [{type: 'plural', person: 'you'}, {type: 'singular', person: 'one of your friends'}, {type: 'singular', person: 'someone in your family'}, {type: 'plural', person: 'multiple people in your life'}],
    get persons() {
        return this._persons;
    },
    addPerson(item) {
        this._persons.push(item);
    },
    getRandomPerson() {
        return this._persons[Math.floor(Math.random() * this._persons.length)];
    },

    _verbs : [{type: 'singular', verb: 'will'}, {type: 'singular', verb: 'is going to'}, {type: 'plural', verb: 'are going to'}, {type: 'plural', verb: 'will'}],
    get verbs() {
        return this._verbs;
    },
    addVerb(item) {
        this._verbs.push(item);
    },
    getRandomVerb(type) {
        do{
            randomVerb =  this._verbs[Math.floor(Math.random() * this._verbs.length)];
        } while(randomVerb.type != type);
        return randomVerb;
    },

    _events : ['earn a million dollars in the lottery', 'slip on a stairwell & die', 'win a ticket to go to space', 'get explosive diarrohea', 'die of cocaine overdose', 'get cheated on', 'fall in love', "...nothing significant is going to happen lol (your life is too boring)", 'Sorry, your future is unpredictable.'],
    get events() {
        return this._events;
    },
    addEvent(item) {
        this._events.push(item);
    },
    getRandomEvent() {
        return this._events[Math.floor(Math.random() * this._events.length)];
    },

    createMessage() {
        const randomTime = this.getRandomTime();
        const randomPerson = this.getRandomPerson();
        const randomVerb = this.getRandomVerb(randomPerson.type);
        const randomEvent = this.getRandomEvent();
        
        switch(randomEvent) {
            case 'Sorry, your future is unpredictable.':
                return randomEvent;
            case "...nothing significant is going to happen lol (your life is too boring)":
                return `${randomTime}, ${randomEvent}.`;
            default:
                return `${randomTime}, ${randomPerson.person} ${randomVerb.verb} ${randomEvent}.`
        };
    },

    predictFuture() {
        console.log("Hello user!\nToday we are going to try and predict your future.");
        console.log('Are you ready? Let\'s do it then.');
        console.log('Here\'s your future:');
        console.log(this.createMessage());
    }


};

mixedMessages.predictFuture();