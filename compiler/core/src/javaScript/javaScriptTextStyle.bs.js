// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                              = require("bs-platform/lib/js/list.js");
var Block                             = require("bs-platform/lib/js/block.js");
var Curry                             = require("bs-platform/lib/js/curry.js");
var Color$LonaCompilerCore            = require("../core/color.bs.js");
var Types$LonaCompilerCore            = require("../core/types.bs.js");
var TextStyle$LonaCompilerCore        = require("../core/textStyle.bs.js");
var JavaScriptFormat$LonaCompilerCore = require("./javaScriptFormat.bs.js");
var JavaScriptRender$LonaCompilerCore = require("./javaScriptRender.bs.js");

function render(colors, textStyles) {
  var unwrapOptional = function (f, a) {
    if (a) {
      return /* :: */[
              Curry._1(f, a[0]),
              /* [] */0
            ];
    } else {
      return /* [] */0;
    }
  };
  var propertyDoc = function (textStyle) {
    var lookup = function (f) {
      return TextStyle$LonaCompilerCore.lookup(textStyles[/* styles */0], textStyle, f);
    };
    var variables = List.concat(/* :: */[
          unwrapOptional((function (value) {
                  var lonaValue = /* record */[
                    /* ltype */Types$LonaCompilerCore.stringType,
                    /* data */value
                  ];
                  return /* Property */Block.__(21, [{
                              key: /* Identifier */Block.__(3, [/* :: */[
                                    "family",
                                    /* [] */0
                                  ]]),
                              value: /* Literal */Block.__(1, [lonaValue])
                            }]);
                }), lookup((function (style) {
                      return style[/* fontFamily */3];
                    }))),
          /* :: */[
            unwrapOptional((function (value) {
                    var lonaValue = /* record */[
                      /* ltype */Types$LonaCompilerCore.stringType,
                      /* data */value
                    ];
                    return /* Property */Block.__(21, [{
                                key: /* Identifier */Block.__(3, [/* :: */[
                                      "fontWeight",
                                      /* [] */0
                                    ]]),
                                value: /* Literal */Block.__(1, [lonaValue])
                              }]);
                  }), lookup((function (style) {
                        return style[/* fontWeight */4];
                      }))),
            /* :: */[
              unwrapOptional((function (value) {
                      var lonaValue = /* record */[
                        /* ltype */Types$LonaCompilerCore.numberType,
                        /* data */value
                      ];
                      return /* Property */Block.__(21, [{
                                  key: /* Identifier */Block.__(3, [/* :: */[
                                        "fontSize",
                                        /* [] */0
                                      ]]),
                                  value: /* Literal */Block.__(1, [lonaValue])
                                }]);
                    }), lookup((function (style) {
                          return style[/* fontSize */5];
                        }))),
              /* :: */[
                unwrapOptional((function (value) {
                        var lonaValue = /* record */[
                          /* ltype */Types$LonaCompilerCore.numberType,
                          /* data */value
                        ];
                        return /* Property */Block.__(21, [{
                                    key: /* Identifier */Block.__(3, [/* :: */[
                                          "lineHeight",
                                          /* [] */0
                                        ]]),
                                    value: /* Literal */Block.__(1, [lonaValue])
                                  }]);
                      }), lookup((function (style) {
                            return style[/* lineHeight */6];
                          }))),
                /* :: */[
                  unwrapOptional((function (value) {
                          var lonaValue = /* record */[
                            /* ltype */Types$LonaCompilerCore.numberType,
                            /* data */value
                          ];
                          return /* Property */Block.__(21, [{
                                      key: /* Identifier */Block.__(3, [/* :: */[
                                            "letterSpacing",
                                            /* [] */0
                                          ]]),
                                      value: /* Literal */Block.__(1, [lonaValue])
                                    }]);
                        }), lookup((function (style) {
                              return style[/* letterSpacing */7];
                            }))),
                  /* :: */[
                    unwrapOptional((function (value) {
                            var match = Color$LonaCompilerCore.find(colors, value);
                            var value$1;
                            if (match) {
                              value$1 = /* Identifier */Block.__(3, [/* :: */[
                                    "colors",
                                    /* :: */[
                                      match[0][/* id */0],
                                      /* [] */0
                                    ]
                                  ]]);
                            } else {
                              var lonaValue = /* record */[
                                /* ltype */Types$LonaCompilerCore.colorType,
                                /* data */value
                              ];
                              value$1 = /* Literal */Block.__(1, [lonaValue]);
                            }
                            return /* Property */Block.__(21, [{
                                        key: /* Identifier */Block.__(3, [/* :: */[
                                              "color",
                                              /* [] */0
                                            ]]),
                                        value: value$1
                                      }]);
                          }), lookup((function (style) {
                                return style[/* color */8];
                              }))),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]);
    return /* Property */Block.__(21, [{
                key: /* Identifier */Block.__(3, [/* :: */[
                      JavaScriptFormat$LonaCompilerCore.styleVariableName(textStyle[/* id */0]),
                      /* [] */0
                    ]]),
                value: /* ObjectLiteral */Block.__(20, [variables])
              }]);
  };
  return JavaScriptRender$LonaCompilerCore.toString(/* Program */Block.__(24, [/* :: */[
                  /* ImportDeclaration */Block.__(4, [{
                        source: "./colors",
                        specifiers: /* :: */[
                          /* ImportDefaultSpecifier */Block.__(6, ["colors"]),
                          /* [] */0
                        ]
                      }]),
                  /* :: */[
                    /* Empty */0,
                    /* :: */[
                      /* ExportDefaultDeclaration */Block.__(22, [/* ObjectLiteral */Block.__(20, [List.map(propertyDoc, textStyles[/* styles */0])])]),
                      /* :: */[
                        /* Empty */0,
                        /* [] */0
                      ]
                    ]
                  ]
                ]]));
}

exports.render = render;
/* JavaScriptFormat-LonaCompilerCore Not a pure module */
