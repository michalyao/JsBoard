/**
 * Created by Michael on 2016/10/30.
 */

  // define a model
var SideBar = Backbone.Model.extend({
  // set attribute
  promptColor: function() {
    var cssColor = prompt("Please enter a CSS color:");
    this.set({color: cssColor});
  }
});

  // new model
window.sidebar = new SideBar;

 // add event
sidebar.on('change:color', (model, color) => {
  $('#sidebar').css({background: color});
});

sidebar.set({color: 'white'});

sidebar.promptColor();