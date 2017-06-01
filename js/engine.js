/**
 * technophilia.club javascript
 *
 * @author Florian Knapp <office@florianknapp.de>
 * @copyright 2017 technophilia.club
 */

var Technophilia = function() {
    this.common.init();
};

Technophilia.prototype.common = {

    init: function() {

        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.layer').classList.add('hidden');
        });

    }

};


(function() {
    new Technophilia();
})();