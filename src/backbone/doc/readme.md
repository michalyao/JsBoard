# Backbone

### Model

### Collection

### Router

### View

**View is actually a controller.**

- el: View will inject content into this element as reference to the DOM. `el`,
    `tagName`, `className`, `id`, `attributes`. $el is a cached jQuery object of the View.el

- Initialize/constructor: pass parameters that will be attached to a model, el or collection.

- render: a function which injects the markup the elemetns. needs to be override when needed.

- delegate events:
``` javascript
{"<event type> <event id>: <callback>"}
e.g.
events: {'keypress #new-todo': 'createTodoOnEnter'}
```
### Sync