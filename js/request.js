var Technophilia;
(function (Technophilia) {
    var Request = (function () {
        function Request(url) {
            this.url = url;
        }
        Request.prototype.send = function () {
            return this.url;
        };
        return Request;
    }());
    Technophilia.Request = Request;
})(Technophilia || (Technophilia = {}));
