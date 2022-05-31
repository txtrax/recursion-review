// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = []
  // input is element
  var innerFunc = function(node) {
    // check for calssList at node
    // check that classList at node has className
    if (node.classList && node.classList.contains(className)) {
      // if node at classList exists and node at classList contains classname / push to elements array
      elements.push(node);
    }
    // check if node has children
    if (node.childNodes) {
      // iterate over children (forEach) calling innerFunc on each child node
      node.childNodes.forEach(function(childNode) {
        innerFunc(childNode);
      })
    }
  };
  innerFunc(document.body);
  // return elements array;
  return elements;
};

  // old code ///


    // if (!node.childNodes) {
    //   //check current node for presense of classname

    //   if (classArray.contains(className)) {

    //     elements.push(node)
    //   }
    // }
    //grab childNodes
    // var children = node.childNodes;


    //call innerfunc on child node
    //input as array