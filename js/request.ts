namespace Technophilia {

    export class Request {

        private url: string;

        constructor(url: string) {
            this.url = url;
        }

        send() {
            return this.url;
        }

    }

}