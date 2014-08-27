/**
 * @md_page: main, name: My Awesome Page Documentation!
 * @md_section: main.intro
 * @md_begin
    ##Introduction
    This is a small test of how to create a new page and section. If you are
    a developer, then you should know that the entire application code is
    inside the global namespace `window.app`
 */

var app = {}

/**
 * @md_section: main.xhr
 * @md_begin
  ##Cache module
  Module to handle different kind of caches in the client-side. All the logic
  is wrapped in the `app.xhr` namespace.
 */
app.xhr = function(){

  /**
   * @md_section: main.xhr
   * @method get, static: true
   * @param String url: the relative url
   * @param JSON params: JSON object to configure the request behaviour
   * @param Function params.success: Function: Callback to execute with the successful response from the server
   * @param Function params.fail: Function: Callback to execute when the request fails
   * @md_begin
      It sends a GET request to the the server via AJAX
      **example**
      ```js
      app.xhr.get('/users.json', {
        success: function(res) { console.log(res); },
        fail: function() { console.log('Error!') }
      })```
  */
  this.get = function(url, params){}

}
