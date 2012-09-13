/*jshint debug:true*/

require('ember-handlebars/ext');

/**
@module ember
@submodule ember-handlebars
*/

var getPath = Ember.Handlebars.getPath, normalizePath = Ember.Handlebars.normalizePath;

/**
  `log` allows you to output the value of a value in the current rendering
  context.

  ``` handlebars
  {{log myVariable}}
  ```

  @method log
  @for Ember.Handlebars.helpers
  @param {String} property
*/
Ember.Handlebars.registerHelper('log', function(property, options) {
  var context = (options.contexts && options.contexts[0]) || this,
      normalized = normalizePath(context, property, options.data),
      pathRoot = normalized.root,
      path = normalized.path,
      value = (path === 'this') ? pathRoot : getPath(pathRoot, path, options);
  Ember.Logger.log(value);
});

/**
  The `debugger` helper executes the `debugger` statement in the current
  context.

  ``` handlebars
  {{debugger}}
  ```

  @method debugger
  @for Ember.Handlebars.helpers
  @param {String} property
*/
Ember.Handlebars.registerHelper('debugger', function() {
  debugger;
});
