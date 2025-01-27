
const searchLinks = (htmlContent) => {

    //const nospacesContent = htmlContent.replace(/ /g,'');
    const contentArr = htmlContent.split(/[\r\n\s]+/);

    console.log('Parsing html to json format');
    parseJson(contentArr);
}

const parseJson = (content) =>{
    const tagNameRegExp = new RegExp(/<(\/?|!?)([a-zA-Z][\w-]*)/g);
    const selfClosingRegex = /<([a-zA-Z][\w-]*)\s*[^>]*\/>/;

    const response = {};
    let currentItem;
    let isSelfClosingTag = false;

    for(let i = 0; i < content.length; i++){

        console.log(`Testing ${content[i]}`);
        
        const match = tagNameRegExp.exec(content[i]);
        console.log(match);
        if(tagNameRegExp.test(content[i])){

            const match = tagNameRegExp.exec(content[i]);
            console.log(match);

            response[match[1] != '!' ? match[1] : match[2]] = {};
            console.log(response);
        }else{
            console.log("Element doesn't match with a valid tag")
        }

        break;
    }

}

module.exports = {searchLinks};