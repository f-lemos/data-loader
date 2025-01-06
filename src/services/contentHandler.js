
const searchLinks = (htmlContent) => {

    var nospacesContent = htmlContent.replace(/ /g,'');
    var contentArr = nospacesContent.split(/[\r\n\s]+/);
    console.log(contentArr[0]);

}

module.exports = {searchLinks};