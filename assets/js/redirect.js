function redirect(){
 var urlredirect=window.location.search.substring(1);
console.log(urlredirect);
window.location=urlredirect;
}
