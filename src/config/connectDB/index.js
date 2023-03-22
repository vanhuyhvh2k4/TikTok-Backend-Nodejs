const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

    async function connect() {
        try {
        await mongoose.connect('mongodb://127.0.0.1:27017/tiktok-react_project');
        console.log('successfully');
        } catch (error) {
            console.log('failed');
        }        
      }

module.exports = {connect};