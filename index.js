// create template of id page-template
// that will represent the page of a blog post
// including a sidebar element and post element
function createPost(){
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)
}
