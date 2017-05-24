console.log("Starting nodes.js");

module.exports.age = 27;

module.exports.addNote = () => {
    console.log('addNote');
    return 'new note'
};

module.exports.add = (x, y) => {
    console.log(x+y);
    return x+y;
};
