/************ 01_DOCUMENT OBJECT ***********/

/**
 * Document is The Root Object of any html page and javascript can manipulate the parts of the object.
 */

 console.log(document);

 console.log(document.all);
 /**
  * @GOTCHA
  * HtmlCollections are Array Like Entity and we can access the items using index, but we can't use array methods because these are HtmlCollections not the Array.
  */
 console.log(document.all[2]);
 console.log(document.all.length);
 console.log(document.head);
 console.log(document.body);
 console.log(document.doctype);
 console.log(document.domain);
 console.log(document.URL);
 console.log(document.characterSet);
 console.log(document.contentType);
 
 /**
  * It is possible to select the items in the dom without selectors but "It's Not Recommended"
  */
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].id);
console.log(document.forms[0].method);

console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].id);
console.log(document.links[0].className);
console.log(document.links[0].classList);
console.log(document.links[0].classList[0]);

console.log(document.images);

console.log(document.scripts);
console.log(document.scripts[2].getAttribute('src'));

/**
 * HtmlCollection To Array
 *  --> So That we can use array methods in order to loop through those list of html nodes.
 */

 let scripts = document.scripts;
 let scriptsArr = Array.from(scripts);
 scriptsArr.forEach(function(script) {
    console.log(script);
 });