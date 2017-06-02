/**
 * technophilia.club typescript
 */
var Technophilia;
(function (Technophilia) {
    var Main = (function () {
        function Main(appName) {
            this.assetsAmount = 0;
            this.assetsLoaded = 0;
            this.appName = appName;
            this.layer = document.querySelector('.layer');
            this.preLoadInit();
        }
        Main.prototype.preLoadInit = function () {
            var self = this;
            var images = document.querySelectorAll('img');
            this.assetsAmount += images.length;
            for (var i = 0; i < this.assetsAmount; i++) {
                images[i].addEventListener('load', function () {
                    if (self.assetsLoaded === 0 || self.assetsLoaded === self.assetsAmount - 1) {
                        self.preLoadDone();
                    }
                    self.assetsLoaded += 1;
                });
            }
        };
        Main.prototype.preLoadDone = function () {
            this.layer.classList.add('hidden');
            this.layer.addEventListener('transitionend', function () {
                this.style.display = 'none';
            });
        };
        Main.prototype.test = function () {
            var request = new Technophilia.Request('/test');
            var response = request.send();
            alert(response);
        };
        return Main;
    }());
    Technophilia.Main = Main;
})(Technophilia || (Technophilia = {}));
new Technophilia.Main("test");
