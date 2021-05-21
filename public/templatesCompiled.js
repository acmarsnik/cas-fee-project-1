/* eslint-disable */

(function () {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['notes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class='finish-by-date'>\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"finishByDate") || (depth0 != null ? lookupProperty(depth0,"finishByDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"finishByDate","hash":{},"data":data,"loc":{"start":{"line":3,"column":11},"end":{"line":3,"column":27}}}) : helper)))
    + "</p>\r\n    </div>\r\n    <div class='title-padding-left'></div>\r\n    <div class='title'>\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":20}}}) : helper)))
    + "</p>\r\n    </div>\r\n    <div class='space-between-title-and-importance'></div>\r\n    <div class='importance'>\r\n    </div>\r\n    <div class='importance-padding-right'></div>\r\n    <div class='finished'>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isFinished") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":18,"column":15}}})) != null ? stack1 : "")
    + "        <span>Finished</span>\r\n        <span class='date'>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"finishedDateDisplay") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":27},"end":{"line":22,"column":24}}})) != null ? stack1 : "")
    + "</span>\r\n    </div>\r\n\r\n    <div class='description-padding-left'></div>\r\n    <div class='description'>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"shortDescription") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":41,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n    <div class='space-between-description-and-arrow'></div>\r\n    <div class='arrow-container'>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"hasExpand") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":8},"end":{"line":56,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n    <div class='arrow-padding-right'></div>\r\n    <div class='move-edit-down'></div>\r\n    <div class='edit-button'>\r\n        <button note-id='"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":61,"column":25},"end":{"line":61,"column":31}}}) : helper)))
    + "'>Edit</button>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <input type='checkbox' checked />\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <input type='checkbox' />\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&nbsp;[\r\n                "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"finishedDateDisplay") || (depth0 != null ? lookupProperty(depth0,"finishedDateDisplay") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"finishedDateDisplay","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":39}}}) : helper)))
    + "\r\n                ]";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p id='description-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":28,"column":31},"end":{"line":28,"column":37}}}) : helper)))
    + "-short'>\r\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"shortDescription") || (depth0 != null ? lookupProperty(depth0,"shortDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shortDescription","hash":{},"data":data,"loc":{"start":{"line":29,"column":16},"end":{"line":29,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </p>\r\n            <p id='description-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":31},"end":{"line":31,"column":37}}}) : helper)))
    + "-full' class='hidden'>\r\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"fullDescription") || (depth0 != null ? lookupProperty(depth0,"fullDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullDescription","hash":{},"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":32,"column":37}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </p>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p id='description-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":35,"column":31},"end":{"line":35,"column":37}}}) : helper)))
    + "-short' class='hidden'>\r\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"shortDescription") || (depth0 != null ? lookupProperty(depth0,"shortDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shortDescription","hash":{},"data":data,"loc":{"start":{"line":36,"column":16},"end":{"line":36,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </p>\r\n            <p id='description-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":38,"column":31},"end":{"line":38,"column":37}}}) : helper)))
    + "-full'>\r\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"fullDescription") || (depth0 != null ? lookupProperty(depth0,"fullDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullDescription","hash":{},"data":data,"loc":{"start":{"line":39,"column":16},"end":{"line":39,"column":37}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </p>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div\r\n                id='arrow-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":47,"column":26},"end":{"line":47,"column":32}}}) : helper)))
    + "-down'\r\n                note-id='"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":48,"column":25},"end":{"line":48,"column":31}}}) : helper)))
    + "'\r\n                class='arrow-down'\r\n            ></div>\r\n            <div\r\n                id='arrow-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":52,"column":26},"end":{"line":52,"column":32}}}) : helper)))
    + "-up'\r\n                note-id='"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":53,"column":25},"end":{"line":53,"column":31}}}) : helper)))
    + "'\r\n                class='arrow-up hidden'\r\n            ></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"notes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":63,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();