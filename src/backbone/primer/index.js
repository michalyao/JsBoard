var KermitModel = Backbone.Model.extend({
  url: '/muppets/1', // defines a restful url to sync wiht
  defaulst: {   // default attributes
    id: null,
    name: null,
    occupation: null
  }
});

// extend a backbone component, and then get back a constructor function.
// call fetch return a Promise Object
var kermit = new KermitModel();
// get request
kermit.fetch().then(() => {
  kermit.get('name');
  kermit.get('occupation');
  kermit.set('occupation', 'muppet ringleader');
  kermit.save();
});


var MuppetsCollection = Backbone.Collection.extend({
  url: '/muppets',
  model: KermitModel
})