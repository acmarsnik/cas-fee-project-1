export default function addCompiledTemplatesToHandlebars(Handlebars) {
    var template = Handlebars.template,
        templates = (Handlebars.templates = Handlebars.templates || {});
    templates['createEditNote'] = template({
        compiler: [8, '>= 4.3.0'],
        main: function (container, depth0, helpers, partials, data) {
            var stack1,
                helper,
                alias1 = depth0 != null ? depth0 : container.nullContext || {},
                alias2 = container.hooks.helperMissing,
                alias3 = 'function',
                alias4 = container.escapeExpression,
                alias5 = container.lambda,
                lookupProperty =
                    container.lookupProperty ||
                    function (parent, propertyName) {
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                            return parent[propertyName];
                        }
                        return undefined;
                    };

            return (
                "<label id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: { start: { line: 1, column: 11 }, end: { line: 1, column: 31 } },
                          })
                        : helper),
                ) +
                "title-label' class='title-label'>Title</label>\r\n<input\r\n    type='text'\r\n    id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: { start: { line: 4, column: 8 }, end: { line: 4, column: 28 } },
                          })
                        : helper),
                ) +
                "title-input'\r\n    class='title-input'\r\n    value='" +
                alias4(
                    alias5(
                        (stack1 = depth0 != null ? lookupProperty(depth0, 'note') : depth0) != null
                            ? lookupProperty(stack1, 'title')
                            : stack1,
                        depth0,
                    ),
                ) +
                "'\r\n/>\r\n<label\r\n    id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: { start: { line: 9, column: 8 }, end: { line: 9, column: 28 } },
                          })
                        : helper),
                ) +
                "description-label'\r\n    class='description-label'\r\n>Beschreibung</label>\r\n<textarea\r\n    id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 13, column: 8 },
                                  end: { line: 13, column: 28 },
                              },
                          })
                        : helper),
                ) +
                "description-input'\r\n    class='description-input'\r\n>" +
                alias4(
                    alias5(
                        (stack1 = depth0 != null ? lookupProperty(depth0, 'note') : depth0) != null
                            ? lookupProperty(stack1, 'fullDescription')
                            : stack1,
                        depth0,
                    ),
                ) +
                "</textarea>\r\n\r\n<div\r\n    id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 18, column: 8 },
                                  end: { line: 18, column: 28 },
                              },
                          })
                        : helper),
                ) +
                "space-between-description-and-importance-labels'\r\n    class='space-between-description-and-importance-labels'\r\n></div>\r\n<label\r\n    id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 22, column: 8 },
                                  end: { line: 22, column: 28 },
                              },
                          })
                        : helper),
                ) +
                "importance-label'\r\n    class='importance-label'\r\n>Wichtigkeit</label>\r\n<div id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 25, column: 9 },
                                  end: { line: 25, column: 29 },
                              },
                          })
                        : helper),
                ) +
                "importance' class='importance'>\r\n</div>\r\n<label\r\n    id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 28, column: 8 },
                                  end: { line: 28, column: 28 },
                              },
                          })
                        : helper),
                ) +
                "finished-by-label'\r\n    class='finished-by-label'\r\n>Erledigt bis:</label>\r\n<input\r\n    id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 32, column: 8 },
                                  end: { line: 32, column: 28 },
                              },
                          })
                        : helper),
                ) +
                "finished-by-input'\r\n    class='finished-by-input'\r\n    type='date'\r\n    value='" +
                alias4(
                    alias5(
                        (stack1 = depth0 != null ? lookupProperty(depth0, 'note') : depth0) != null
                            ? lookupProperty(stack1, 'finishByDate')
                            : stack1,
                        depth0,
                    ),
                ) +
                "'\r\n/>\r\n<button id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 37, column: 12 },
                                  end: { line: 37, column: 32 },
                              },
                          })
                        : helper),
                ) +
                "speichern' class='speichern'>Speichern</button>\r\n<button id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 38, column: 12 },
                                  end: { line: 38, column: 32 },
                              },
                          })
                        : helper),
                ) +
                "cancel' class='cancel'>Cancel</button>"
            );
        },
        useData: true,
    });
    templates['importance'] = template({
        compiler: [8, '>= 4.3.0'],
        main: function (container, depth0, helpers, partials, data) {
            var helper,
                alias1 = depth0 != null ? depth0 : container.nullContext || {},
                alias2 = container.hooks.helperMissing,
                alias3 = 'function',
                alias4 = container.escapeExpression,
                lookupProperty =
                    container.lookupProperty ||
                    function (parent, propertyName) {
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                            return parent[propertyName];
                        }
                        return undefined;
                    };

            return (
                "<div class='bolt-container " +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'editability') ||
                            (depth0 != null ? lookupProperty(depth0, 'editability') : depth0)) !=
                        null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'editability',
                              hash: {},
                              data: data,
                              loc: { start: { line: 1, column: 27 }, end: { line: 1, column: 42 } },
                          })
                        : helper),
                ) +
                "' data-bolt-number=" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'boltNumber') ||
                            (depth0 != null ? lookupProperty(depth0, 'boltNumber') : depth0)) !=
                        null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'boltNumber',
                              hash: {},
                              data: data,
                              loc: { start: { line: 1, column: 61 }, end: { line: 1, column: 75 } },
                          })
                        : helper),
                ) +
                ">\r\n    <div class='bolt " +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'colorAndVisibility') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'colorAndVisibility')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'colorAndVisibility',
                              hash: {},
                              data: data,
                              loc: { start: { line: 2, column: 21 }, end: { line: 2, column: 43 } },
                          })
                        : helper),
                ) +
                "'></div>\r\n</div>"
            );
        },
        useData: true,
    });
    templates['notes'] = template({
        1: function (container, depth0, helpers, partials, data) {
            return 'selected';
        },
        3: function (container, depth0, helpers, partials, data) {
            return '            Show all\r\n';
        },
        5: function (container, depth0, helpers, partials, data) {
            return '            Show finished\r\n';
        },
        7: function (container, depth0, helpers, partials, data, blockParams, depths) {
            var stack1,
                helper,
                alias1 = container.lambda,
                alias2 = container.escapeExpression,
                alias3 = depth0 != null ? depth0 : container.nullContext || {},
                alias4 = container.hooks.helperMissing,
                alias5 = 'function',
                lookupProperty =
                    container.lookupProperty ||
                    function (parent, propertyName) {
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                            return parent[propertyName];
                        }
                        return undefined;
                    };

            return (
                "    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'finish-by-date-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 26, column: 50 },
                                  end: { line: 26, column: 56 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='finish-by-date'\r\n    >\r\n        <p>" +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'finishByDate') ||
                            (depth0 != null ? lookupProperty(depth0, 'finishByDate') : depth0)) !=
                        null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'finishByDate',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 29, column: 11 },
                                  end: { line: 29, column: 27 },
                              },
                          })
                        : helper),
                ) +
                "</p>\r\n    </div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'title-padding-left-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 32, column: 54 },
                                  end: { line: 32, column: 60 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='title-padding-left'\r\n    ></div>\r\n    <div id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'title-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 35, column: 42 },
                                  end: { line: 35, column: 48 },
                              },
                          })
                        : helper),
                ) +
                "' class='title'>\r\n        <p>" +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'title') ||
                            (depth0 != null ? lookupProperty(depth0, 'title') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'title',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 36, column: 11 },
                                  end: { line: 36, column: 20 },
                              },
                          })
                        : helper),
                ) +
                "</p>\r\n    </div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'space-between-title-and-importance-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 39, column: 70 },
                                  end: { line: 39, column: 76 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='space-between-title-and-importance'\r\n    ></div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'importance-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 43, column: 46 },
                                  end: { line: 43, column: 52 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='importance'\r\n    >\r\n    </div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'importance-padding-right-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 48, column: 60 },
                                  end: { line: 48, column: 66 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='importance-padding-right'\r\n    ></div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'finished-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 52, column: 44 },
                                  end: { line: 52, column: 50 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='finished'\r\n    >\r\n" +
                ((stack1 = lookupProperty(helpers, 'if').call(
                    alias3,
                    depth0 != null ? lookupProperty(depth0, 'isFinished') : depth0,
                    {
                        name: 'if',
                        hash: {},
                        fn: container.program(8, data, 0, blockParams, depths),
                        inverse: container.program(10, data, 0, blockParams, depths),
                        data: data,
                        loc: { start: { line: 55, column: 8 }, end: { line: 59, column: 15 } },
                    },
                )) != null
                    ? stack1
                    : '') +
                "        <span>Finished</span>\r\n        <span class='date'>" +
                ((stack1 = lookupProperty(helpers, 'if').call(
                    alias3,
                    depth0 != null ? lookupProperty(depth0, 'finishedDate') : depth0,
                    {
                        name: 'if',
                        hash: {},
                        fn: container.program(12, data, 0, blockParams, depths),
                        inverse: container.noop,
                        data: data,
                        loc: { start: { line: 61, column: 27 }, end: { line: 63, column: 24 } },
                    },
                )) != null
                    ? stack1
                    : '') +
                "</span>\r\n    </div>\r\n\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'description-padding-left-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 67, column: 60 },
                                  end: { line: 67, column: 66 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='description-padding-left'\r\n    ></div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'description-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 71, column: 47 },
                                  end: { line: 71, column: 53 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='description'\r\n    >\r\n" +
                ((stack1 = lookupProperty(helpers, 'if').call(
                    alias3,
                    depth0 != null ? lookupProperty(depth0, 'shortDescription') : depth0,
                    {
                        name: 'if',
                        hash: {},
                        fn: container.program(14, data, 0, blockParams, depths),
                        inverse: container.program(16, data, 0, blockParams, depths),
                        data: data,
                        loc: { start: { line: 74, column: 8 }, end: { line: 88, column: 15 } },
                    },
                )) != null
                    ? stack1
                    : '') +
                "    </div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'space-between-description-and-arrow-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 91, column: 71 },
                                  end: { line: 91, column: 77 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='space-between-description-and-arrow'\r\n    ></div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'arrow-container-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 95, column: 51 },
                                  end: { line: 95, column: 57 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='arrow-container'\r\n    >\r\n" +
                ((stack1 = lookupProperty(helpers, 'if').call(
                    alias3,
                    depth0 != null ? lookupProperty(depth0, 'hasExpand') : depth0,
                    {
                        name: 'if',
                        hash: {},
                        fn: container.program(18, data, 0, blockParams, depths),
                        inverse: container.noop,
                        data: data,
                        loc: { start: { line: 98, column: 8 }, end: { line: 109, column: 15 } },
                    },
                )) != null
                    ? stack1
                    : '') +
                "    </div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'arrow-padding-right-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 112, column: 55 },
                                  end: { line: 112, column: 61 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='arrow-padding-right'\r\n    ></div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'move-edit-down-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 116, column: 50 },
                                  end: { line: 116, column: 56 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='move-edit-down'\r\n    ></div>\r\n    <div\r\n        id='" +
                alias2(
                    alias1(
                        depths[1] != null
                            ? lookupProperty(depths[1], 'topLevelIdPrefix')
                            : depths[1],
                        depth0,
                    ),
                ) +
                'edit-button-' +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 120, column: 47 },
                                  end: { line: 120, column: 53 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n        class='edit-button'\r\n    >\r\n        <button note-id='" +
                alias2(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias4),
                    typeof helper === alias5
                        ? helper.call(alias3, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 123, column: 25 },
                                  end: { line: 123, column: 31 },
                              },
                          })
                        : helper),
                ) +
                "'>Edit</button>\r\n    </div>\r\n"
            );
        },
        8: function (container, depth0, helpers, partials, data) {
            return "            <input type='checkbox' checked />\r\n";
        },
        10: function (container, depth0, helpers, partials, data) {
            return "            <input type='checkbox' />\r\n";
        },
        12: function (container, depth0, helpers, partials, data) {
            var helper,
                lookupProperty =
                    container.lookupProperty ||
                    function (parent, propertyName) {
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                            return parent[propertyName];
                        }
                        return undefined;
                    };

            return (
                '&nbsp;[\r\n                ' +
                container.escapeExpression(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'finishedDate') ||
                            (depth0 != null ? lookupProperty(depth0, 'finishedDate') : depth0)) !=
                        null
                            ? helper
                            : container.hooks.helperMissing),
                    typeof helper === 'function'
                        ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
                              name: 'finishedDate',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 62, column: 16 },
                                  end: { line: 62, column: 32 },
                              },
                          })
                        : helper),
                ) +
                '\r\n                ]'
            );
        },
        14: function (container, depth0, helpers, partials, data) {
            var stack1,
                helper,
                alias1 = depth0 != null ? depth0 : container.nullContext || {},
                alias2 = container.hooks.helperMissing,
                alias3 = 'function',
                alias4 = container.escapeExpression,
                lookupProperty =
                    container.lookupProperty ||
                    function (parent, propertyName) {
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                            return parent[propertyName];
                        }
                        return undefined;
                    };

            return (
                "            <p id='description-" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 75, column: 31 },
                                  end: { line: 75, column: 37 },
                              },
                          })
                        : helper),
                ) +
                "-short'>\r\n                " +
                ((stack1 =
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'shortDescription') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'shortDescription')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'shortDescription',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 76, column: 16 },
                                  end: { line: 76, column: 38 },
                              },
                          })
                        : helper)) != null
                    ? stack1
                    : '') +
                "\r\n            </p>\r\n            <p id='description-" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 78, column: 31 },
                                  end: { line: 78, column: 37 },
                              },
                          })
                        : helper),
                ) +
                "-full' class='hidden'>\r\n                " +
                ((stack1 =
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'fullDescription') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'fullDescription')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'fullDescription',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 79, column: 16 },
                                  end: { line: 79, column: 37 },
                              },
                          })
                        : helper)) != null
                    ? stack1
                    : '') +
                '\r\n            </p>\r\n'
            );
        },
        16: function (container, depth0, helpers, partials, data) {
            var stack1,
                helper,
                alias1 = depth0 != null ? depth0 : container.nullContext || {},
                alias2 = container.hooks.helperMissing,
                alias3 = 'function',
                alias4 = container.escapeExpression,
                lookupProperty =
                    container.lookupProperty ||
                    function (parent, propertyName) {
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                            return parent[propertyName];
                        }
                        return undefined;
                    };

            return (
                "            <p id='description-" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 82, column: 31 },
                                  end: { line: 82, column: 37 },
                              },
                          })
                        : helper),
                ) +
                "-short' class='hidden'>\r\n                " +
                ((stack1 =
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'shortDescription') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'shortDescription')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'shortDescription',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 83, column: 16 },
                                  end: { line: 83, column: 38 },
                              },
                          })
                        : helper)) != null
                    ? stack1
                    : '') +
                "\r\n            </p>\r\n            <p id='description-" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 85, column: 31 },
                                  end: { line: 85, column: 37 },
                              },
                          })
                        : helper),
                ) +
                "-full'>\r\n                " +
                ((stack1 =
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'fullDescription') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'fullDescription')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'fullDescription',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 86, column: 16 },
                                  end: { line: 86, column: 37 },
                              },
                          })
                        : helper)) != null
                    ? stack1
                    : '') +
                '\r\n            </p>\r\n'
            );
        },
        18: function (container, depth0, helpers, partials, data) {
            var helper,
                alias1 = depth0 != null ? depth0 : container.nullContext || {},
                alias2 = container.hooks.helperMissing,
                alias3 = 'function',
                alias4 = container.escapeExpression,
                lookupProperty =
                    container.lookupProperty ||
                    function (parent, propertyName) {
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                            return parent[propertyName];
                        }
                        return undefined;
                    };

            return (
                "            <div\r\n                id='arrow-" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 100, column: 26 },
                                  end: { line: 100, column: 32 },
                              },
                          })
                        : helper),
                ) +
                "-down'\r\n                note-id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 101, column: 25 },
                                  end: { line: 101, column: 31 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n                class='arrow-down'\r\n            ></div>\r\n            <div\r\n                id='arrow-" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 105, column: 26 },
                                  end: { line: 105, column: 32 },
                              },
                          })
                        : helper),
                ) +
                "-up'\r\n                note-id='" +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'id') ||
                            (depth0 != null ? lookupProperty(depth0, 'id') : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'id',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 106, column: 25 },
                                  end: { line: 106, column: 31 },
                              },
                          })
                        : helper),
                ) +
                "'\r\n                class='arrow-up hidden'\r\n            ></div>\r\n"
            );
        },
        compiler: [8, '>= 4.3.0'],
        main: function (container, depth0, helpers, partials, data, blockParams, depths) {
            var stack1,
                helper,
                alias1 = depth0 != null ? depth0 : container.nullContext || {},
                alias2 = container.hooks.helperMissing,
                alias3 = 'function',
                alias4 = container.escapeExpression,
                lookupProperty =
                    container.lookupProperty ||
                    function (parent, propertyName) {
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                            return parent[propertyName];
                        }
                        return undefined;
                    };

            return (
                '<div id="' +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: { start: { line: 1, column: 9 }, end: { line: 1, column: 29 } },
                          })
                        : helper),
                ) +
                'create-note" class="create-note">\r\n    <button>Create new Note</button>\r\n</div>\r\n<div id="' +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: { start: { line: 4, column: 9 }, end: { line: 4, column: 29 } },
                          })
                        : helper),
                ) +
                'space-between-create-note-and-color-palette" class="space-between-create-note-and-color-palette"></div>\r\n<div id="' +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: { start: { line: 5, column: 9 }, end: { line: 5, column: 29 } },
                          })
                        : helper),
                ) +
                'color-palette-selector" class="color-palette-selector">\r\n<select name="colorPalette">\r\n    <option value="blackWhiteStyle" ' +
                ((stack1 = lookupProperty(helpers, 'if').call(
                    alias1,
                    depth0 != null ? lookupProperty(depth0, 'isBlackWhiteStyleSelected') : depth0,
                    {
                        name: 'if',
                        hash: {},
                        fn: container.program(1, data, 0, blockParams, depths),
                        inverse: container.noop,
                        data: data,
                        loc: { start: { line: 7, column: 36 }, end: { line: 7, column: 84 } },
                    },
                )) != null
                    ? stack1
                    : '') +
                '>BlackWhite-Style</option>\r\n    <option value="darkMode" ' +
                ((stack1 = lookupProperty(helpers, 'if').call(
                    alias1,
                    depth0 != null ? lookupProperty(depth0, 'isDarkModeSelected') : depth0,
                    {
                        name: 'if',
                        hash: {},
                        fn: container.program(1, data, 0, blockParams, depths),
                        inverse: container.noop,
                        data: data,
                        loc: { start: { line: 8, column: 29 }, end: { line: 8, column: 70 } },
                    },
                )) != null
                    ? stack1
                    : '') +
                '>Dark Mode</option>\r\n    <option value="rainbow" ' +
                ((stack1 = lookupProperty(helpers, 'if').call(
                    alias1,
                    depth0 != null ? lookupProperty(depth0, 'isRainbowSelected') : depth0,
                    {
                        name: 'if',
                        hash: {},
                        fn: container.program(1, data, 0, blockParams, depths),
                        inverse: container.noop,
                        data: data,
                        loc: { start: { line: 9, column: 28 }, end: { line: 9, column: 68 } },
                    },
                )) != null
                    ? stack1
                    : '') +
                '>Rainbow</option>\r\n</select>\r\n</div>\r\n<div id="' +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 12, column: 9 },
                                  end: { line: 12, column: 29 },
                              },
                          })
                        : helper),
                ) +
                'by-finish-date" class="by-finish-date"><button>By finish Date</button></div>\r\n<div id="' +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 13, column: 9 },
                                  end: { line: 13, column: 29 },
                              },
                          })
                        : helper),
                ) +
                'by-created-date" class="by-created-date"><button>By created Date</button></div>\r\n<div id="' +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 14, column: 9 },
                                  end: { line: 14, column: 29 },
                              },
                          })
                        : helper),
                ) +
                'by-importance" class="by-importance"><button>By Importance</button></div>\r\n<div id="' +
                alias4(
                    ((helper =
                        (helper =
                            lookupProperty(helpers, 'topLevelIdPrefix') ||
                            (depth0 != null
                                ? lookupProperty(depth0, 'topLevelIdPrefix')
                                : depth0)) != null
                            ? helper
                            : alias2),
                    typeof helper === alias3
                        ? helper.call(alias1, {
                              name: 'topLevelIdPrefix',
                              hash: {},
                              data: data,
                              loc: {
                                  start: { line: 15, column: 9 },
                                  end: { line: 15, column: 29 },
                              },
                          })
                        : helper),
                ) +
                'show-finished" class="show-finished">\r\n    <button>\r\n' +
                ((stack1 = lookupProperty(helpers, 'if').call(
                    alias1,
                    depth0 != null ? lookupProperty(depth0, 'isFiltered') : depth0,
                    {
                        name: 'if',
                        hash: {},
                        fn: container.program(3, data, 0, blockParams, depths),
                        inverse: container.program(5, data, 0, blockParams, depths),
                        data: data,
                        loc: { start: { line: 17, column: 8 }, end: { line: 21, column: 15 } },
                    },
                )) != null
                    ? stack1
                    : '') +
                '    </button>\r\n    </div>\r\n' +
                ((stack1 = lookupProperty(helpers, 'each').call(
                    alias1,
                    depth0 != null ? lookupProperty(depth0, 'notes') : depth0,
                    {
                        name: 'each',
                        hash: {},
                        fn: container.program(7, data, 0, blockParams, depths),
                        inverse: container.noop,
                        data: data,
                        loc: { start: { line: 24, column: 0 }, end: { line: 125, column: 9 } },
                    },
                )) != null
                    ? stack1
                    : '')
            );
        },
        useData: true,
        useDepths: true,
    });
}
