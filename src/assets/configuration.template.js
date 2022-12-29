// Since this is considered a static asset, it is not compiled but copied verbatim.
// These values are set at application _start_ time but the server and then read by browser clients.
(function(window) {
    window["configuration"] = window["configuration"] || {};

    // Environment variables
    window["configuration"]["clientId"] = "${FHIR_CLIENT_ID}";
    window["configuration"]["debug"] = "${FHIR_DEBUG}" == "true";
})(this);