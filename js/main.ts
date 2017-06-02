/**
 * technophilia.club typescript
 */
namespace Technophilia {

    export class Main {

        protected appName: string;
        protected assetsAmount: number = 0;
        protected assetsLoaded: number = 0;

        protected layer: Element;

        constructor(appName: string) {

            this.appName = appName;
            this.layer   = document.querySelector('.layer');

            this.preLoadInit();

        }

        preLoadInit() {

            let self   = this;
            let images = document.querySelectorAll('img');

            this.assetsAmount += images.length;

            for (let i=0; i<this.assetsAmount; i++) {

                images[i].addEventListener('load', function() {



                    if (self.assetsLoaded === 0 || self.assetsLoaded === self.assetsAmount - 1) {
                        self.preLoadDone();
                    }

                    self.assetsLoaded += 1;

                });

            }

        }

        preLoadDone() {
            this.layer.classList.add('hidden');

            this.layer.addEventListener('transitionend', function() {
                this.style.display = 'none';
            });

        }

        test() {

            let request = new Technophilia.Request('/test');
            let response = request.send();

            alert(response);

        }

    }

}

new Technophilia.Main("test");



