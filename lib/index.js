const fs = require('fs');
const { SaveFileDir, SaveExtension } = require('./config.js');
//Configuration
const SAVE_FILE_DIR = SaveFileDir;
const SAVE_EXTENSION = SaveExtension;

const amountExportSecret = 0;
const amountImportSecret = 0;
const amountLogSecret = 0;


async function exportSecret({name, secret}) {
  if (!fs.existsSync(SAVE_FILE_DIR)) {
    fs.mkdirSync(SAVE_FILE_DIR);
    fs.writeFileSync(`${SAVE_FILE_DIR}/${name}.${SAVE_EXTENSION}`, `${secret}`);
  } else {
    fs.writeFileSync(`${SAVE_FILE_DIR}/${name}.${SAVE_EXTENSION}`, `${secret}`);
  }
  await console.log(
    `Secret saved on path: ${__dirname}/secretjs_secrets/${name}.${SAVE_EXTENSION}`
  );
  await amountExportSecret++;
}

async function importSecret(name) {
    if(!fs.existsSync(`${SAVE_FILE_DIR}/`)) {
        console.log(Error(`The secretjs_secrets dir wasn't found. \nUse exportSecret function to create this dir and the file of the secret`))
    }

    if(!fs.existsSync(`${SAVE_FILE_DIR}/` + name + `.${SAVE_EXTENSION}`)) {
        console.log(Error(`No file called ${name} was found \nUse exportSecret function to create the file of the secret`))
    }

    if(fs.existsSync(`${SAVE_FILE_DIR}/` + name + `.${SAVE_EXTENSION}`) || fs.existsSync(`${SAVE_FILE_DIR}/`)) {
        const file = fs.readFileSync(`${SAVE_FILE_DIR}/` + name + `.${SAVE_EXTENSION}`).toString();
        if(file === 'undefined') console.log(Error('File was undefined this happends when the dir or the file is not created or is empty')) 
        await amountImportSecret++;
        return file; 
    }
}

async function LogSecret(name) {
    if(!fs.existsSync(`${SAVE_FILE_DIR}/`)) {
        console.log(Error(`The distrox_secrets directorie wasn't found. \nUse exportSecret function to create this dir and the file of the secret`))
    }

    if(!fs.existsSync(`${SAVE_FILE_DIR}/` + name + `.${SAVE_EXTENSION}`)) {
        console.log(Error(`No file called ${name} was found \nUse exportSecret function to create the file of the secret`))
    }

    if(fs.existsSync(`${SAVE_FILE_DIR}/` + name + `.${SAVE_EXTENSION}`) || fs.existsSync(`${SAVE_FILE_DIR}/`)) {
        const file = fs.readFileSync('./distrox_secrets/' + name + `.${SAVE_EXTENSION}`).toString();
        if(file === 'undefined') console.log(Error('File was undefined this happends when the dir or the file is not created or is empty')) 
        await amountLogSecret++;
        console.log(file);
    }
}





module.exports = {exportSecret, importSecret, LogSecret};