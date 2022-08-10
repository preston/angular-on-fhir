// Since this is considered a static asset, it is not compiled but copied verbatim.
// These values are set at application _start_ time but the server and then read by browser clients.
// https://pumpingco.de/blog/environment-variables-angular-docker/
(function(window) {
    window["configuration"] = window["configuration"] || {};

    // environment variables
    window["configuration"]["clientId"] = "${EXAMPLE_CLIENT_ID}";
    window["configuration"]["debug"] = "${EXAMPLE_DEBUG}" == "true";
})(this);