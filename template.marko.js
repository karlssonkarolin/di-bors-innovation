// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/di-bors-innovation$1.0.0/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h1>Välkommen till " +
    marko_escapeXml(input.label) +
    "</h1><p>" +
    marko_escapeXml(input.msData) +
    "</p>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/di-bors-innovation$1.0.0/template.marko"
  };
