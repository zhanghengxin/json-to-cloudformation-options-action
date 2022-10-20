const fs = require('fs');
const core = require('@actions/core');

(async () => {
    try {
        const path = core.getInput('path');
        const property = core.getInput('property');
        const data = await fs.promises.readFile(path);
        const json = JSON.parse(data);
        let toReturn = ''

        for(const prop in json) {
            if(toReturn.length > 0) {
                toReturn += ' ';
            }
            toReturn += `"${prop}=${json[prop]}"`
        }
        core.setOutput("value", toReturn);
        core.setOutput("property", json[property]
    } catch (error) {
   		core.setFailed(error.message);
    }
})();
