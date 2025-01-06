
const searchLinks = (htmlContent) => {

    const nospacesContent = htmlContent.replace(/ /g,'');
    const contentArr = nospacesContent.split(/[\r\n\s]+/);
    console.log(contentArr[0]);

}

const parseJson = (content) =>{
    const tagNameRegExp = '/<\/?([a-zA-Z][\w-]*)/g';
    const selfClosingRegex = /<([a-zA-Z][\w-]*)\s*[^>]*\/>/;

    const response = {};
    let currentItem;
    let isSelfClosingTag = false;

    for(let i = 0; i < content.length; i++){
        const match = content[i].test(tagNameRegExp)
        if(match){
            console.log(march[1]);
        }
    }

}

module.exports = {searchLinks};