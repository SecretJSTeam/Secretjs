const fs = require('fs');

async function exportSecret({name, secret}) {
    if(!fs.existsSync('./distrox_secrets')) {
         fs.mkdirSync('./distrox_secrets')
         fs.writeFileSync(`./distrox_secrets/${name}.distrox`, `${secret}`)
    } else {
        fs.writeFileSync(`./distrox_secrets/${name}.distrox`, `${secret}`)
    }
    await console.log(`Secret saved on path: ${__dirname}/distrox_secrets/${name}.distrox`);
}

function importSecret(name) {
    if(!fs.existsSync('./distrox_secrets/')) {
        console.log(Error(`The distrox_secrets directorie wasn't found. \nUse exportSecret function to create this dir and the file of the secret`))
    }

    if(!fs.existsSync('./distrox_secrets/' + name + '.distrox')) {
        console.log(Error(`No file called ${name} was found \nUse exportSecret function to create the file of the secret`))
    }

    if(fs.existsSync('./distrox_secrets/' + name + '.distrox') || fs.existsSync('./distrox_secrets')) {
        const file = fs.readFileSync('./distrox_secrets/' + name + '.distrox').toString();
        if(file === 'undefined') console.log(Error('File was undefined this happends when the dir or the file is not created or is empty')) 
        return file; 
    }
}

function LogSecret(name) {
    if(!fs.existsSync('./distrox_secrets/')) {
        console.log(Error(`The distrox_secrets directorie wasn't found. \nUse exportSecret function to create this dir and the file of the secret`))
    }

    if(!fs.existsSync('./distrox_secrets/' + name + '.distrox')) {
        console.log(Error(`No file called ${name} was found \nUse exportSecret function to create the file of the secret`))
    }

    if(fs.existsSync('./distrox_secrets/' + name + '.distrox') || fs.existsSync('./distrox_secrets')) {
        const file = fs.readFileSync('./distrox_secrets/' + name + '.distrox').toString();
        if(file === 'undefined') console.log(Error('File was undefined this happends when the dir or the file is not created or is empty')) 
        console.log(file);
    }
}





module.exports = {exportSecret, importSecret, LogSecret};