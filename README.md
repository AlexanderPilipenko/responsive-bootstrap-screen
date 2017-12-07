# Responsive Bootstrap Screen

Responsive Bootstrap Screen provides an easy way of breakpoint detection in JavaScript based on css, detecting changes in currently active breakpoint, as well as executing any breakpoint-specific JavaScript code.

Current version: **1.0.0** (2017-10-12)

#### Support browsers
* Firefox: 4 and up
* Safari:  4 and up
* Chrome: All version
* Opera: 6 and up
* IE: 8 and up

#### Basic usage:

````javascript
(function($){
    $(document).ready(function() {

        // Executes only in XS breakpoint
        if(isViewport('xs')) {
            // ...
        }

        // Executes in SM, MD and LG breakpoints
        if(isViewport('>xs')) {
            // ...
        }

        // Executes only in SM breakpoint
        if(isViewport('sm')) {
            // ...
        }

        // Executes in MD and LG breakpoints
        if(isViewport('>sm')) {
            // ...
        }

        // Executes only in XS breakpoint
        if(isViewport('<sm')) {
            // ...
        }

        // Executes only in MD breakpoint
        if(isViewport('md')) {
            // ...
        }

        // Executes in LG breakpoints
        if(isViewport('>md')) {
            // ...
        }

        // Executes in XS and SM breakpoints
        if(isViewport('<md')) {
            // ...
        }

        // Executes in LG breakpoints
        if(isViewport('lg')) {
            // ...
        }

        // Executes in XS, SM and MD breakpoints
        if(isViewport('<lg')) {
            // ...
        }

        // Execute code each time window size changes
        $(window).resize(function() {
            if(isViewport('xs')) {
                // ...
            }
        });
    });
})(jQuery);
````

# License
The MIT License (MIT)

Copyright (c) 2017 Alexander Pilipenko (Demid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.