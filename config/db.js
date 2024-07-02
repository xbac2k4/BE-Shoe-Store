const mongoose = require('mongoose');

const local = "mongodb+srv://admin:nxb29122k4@cluster0.t3xxdmo.mongodb.net/ShoeStore";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

// const connect = async () => {
//     try {
//         await mongoose.connect(local).then(() => {
//             console.log('Connected to MongoDB');
            
//             // Thực hiện lệnh dropIndex
//             return mongoose.connection.db.collection('users').dropIndex('username_1');
            
//         })
//         .then(() => {
//             console.log('Index dropped');
//             // mongoose.connection.close();
//         })
//         .catch(err => {
//             console.error('Error:', err);
//             // mongoose.connection.close();
//         });;
//         console.log('Connect success');
//     } catch (error) {
//         console.error('Connection to MongoDB failed:', error);
//     }
// }
    
module.exports = { connect };
