const path = require('path'); require('dotenv').config({ path: path.resolve(__dirname, '.env') }); console.log(process.env.GITHUB_EMAIL, process.env.GITHUB_PASSWORD);
