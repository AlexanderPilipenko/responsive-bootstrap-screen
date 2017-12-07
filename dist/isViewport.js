"use strict";

/*!
 * Responsive Bootstrap Screen
 *
 * Author:    Alexander Pilipenko (Demid)
 * License:   MIT
 * Version:   1.0.0 (2017-10-12)
 * Origin:    https://github.com/AlexanderPilipenko/responsive-bootstrap-screen
 */

;(function(window) {

    /*
    html::before{
        display:none !important
    }

    @media (max-width:575px) {
        html::before {
            content:'xs:<sm<md<lg<xl'
        }
    }

    @media (min-width:575px) and (max-width:767px) {
        html::before {
            content:'sm:>xs<md<lg<xl'
        }
    }

    @media (min-width:767px) and (max-width:991px) {
        html::before {
            content:'md:>xs>sm<lg<xl'
        }
    }

    @media (min-width:991px) and (max-width:1199px) {
        html::before {
            content:'lg:>xs>sm>md<xl'
        }
    }

    @media (min-width:1199px) {
        html::before {
            content:'xl:>xs>sm>md>lg>'
        }
    }
    */
    var css = "html::before{display:none !important}@media (max-width:575px){html::before{content:'xs:<sm<md<lg<xl'}}@media (min-width:575px) and (max-width:767px){html::before{content:'sm:>xs<md<lg<xl'}}@media (min-width:767px) and (max-width:991px){html::before{content:'md:>xs>sm<lg<xl'}}@media (min-width:991px) and (max-width:1199px){html::before{content:'lg:>xs>sm>md<xl'}}@media (min-width:1199px){html::before{content:'xl:>xs>sm>md>lg>'}}";

    // This was tested in IE (7-9), Firefox, Opera and Chrome:
    var head  = head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);

    /**
     * Responsive Bootstrap Screen
     * https://github.com/AlexanderPilipenko/responsive-bootstrap-screen
     * License: MIT
     *
     * isViewport('xs')
     * isViewport('>xs')
     * isViewport('sm')
     * isViewport('<sm')
     * isViewport('>sm')
     * isViewport('md')
     * isViewport('<md')
     * isViewport('>md')
     * isViewport('lg')
     * isViewport('<lg')
     * isViewport('>lg')
     * isViewport('xl')
     * isViewport('<xl')
     *
     * @param  string viewport
     * @return boolean
     */
    window.isViewport = function(viewport) {
        if (viewport.search(/[\:|\>|\<]/) == -1) {
            viewport += ':';
        }
        return (getComputedStyle(document.querySelector('html'), ':before').content).search(viewport) !== -1;
    }

})(window);