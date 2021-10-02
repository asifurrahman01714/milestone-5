// JSON  means Javascript Object Notation 

const user = {
    id: 12,
    name: 'John',
    school: 'florida school',
    gf:{
        name: 'ema',
    }
};

const userJSON = JSON.stringify(user);
console.log(userJSON) // {"id":12,"name":"John","school":"florida school","gf":{"name":"ema"}}

const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON); // { id: 12, name: 'John', school: 'florida school', gf: { name: 'ema' } }
