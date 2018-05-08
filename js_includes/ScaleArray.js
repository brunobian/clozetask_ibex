(function () {

function norm256(x) {
    if (x < 0)
        return 0;
    else if (x > 255)
        return 255;
    return x;
}

function rgbToS(col) {
    function pad0(s) {
        if (s.length == 1)
            s = '0' + s;
        return s;
    }

    var cols = '#';
    cols += pad0(col[0].toString(16));
    cols += pad0(col[1].toString(16));
    cols += pad0(col[2].toString(16));

    return cols;
}

function parseColor(col) {
    var m;
    if ($.isArray(col)) {
        return col;
    }
    else if (typeof(col) == 'string') {
        if (col.length > 0 && col[0] == '#') {
            var r,g,b;
            if (col.length == 7) {
                r = parseInt(col.substr(1,2), 16);
                g = parseInt(col.substr(3,2), 16);
                b = parseInt(col.substr(5,2), 16);
                if (isNaN(r) || isNaN(g) || isNaN(b))
                    assert(false, "Could not parse color '" + col + "'");
                return [r,g,b];
            }
            else if (col.length == 4) {
                r = parseInt(col.substr(1,1), 16);
                g = parseInt(col.substr(1,1), 16);
                b = parseInt(col.substr(1,1), 16)
                if (isNaN(r) || isNaN(g) || isNaN(b))
                    assert(false, "Could not parse color '" + col + "'");
                return [r,g,b];
            }
            else {
                assert(false, "Could not parse color '" + col + "'");
            }
        }
        else if (m = col.match(/\s*rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\)\s*/)) {
            var r = parseFloat(m[1]);
            var g = parseFloat(m[2]);
            var b = parseFloat(m[3]);
            if (isNaN(r) || isNaN(g) || isNaN(b))
                assert(false, "Could not parse color '" + col + "'");
            r = parseInt(Math.round(r * 256.0));
            g = parseInt(Math.round(g * 256.0));
            b = parseInt(Math.round(b * 256.0));
            r = norm256(r);
            g = norm256(g);
            b = norm256(b);
            return [r,g,b];
        }
        else {
            // Support standard HTML color names.
            var map = {
                red: [255,0,0],
                green: [0,255,0],
                blue: [0,0,255],
                aqua: [0,255,255],
                black: [0,0,0],
                fuchsia: [255,0,255],
                gray: [128,128,128],
                lime: [0,255,0],
                maroon: [128,0,0],
                navy: [0,0,128],
                olive: [128,128,0],
                orange: [256,165,0],
                purple: [128,0,128],
                silver: [192,192,192],
                teal: [0, 128,128],
                white: [255,255,255],
                yellow: [255,255,0]
            };
            var u = col.toLowerCase();
            if (map[u])
                return map[u];
            assert(false, "Could not parse color '" + col + "'");
        }
    }
    else {
        assert(false, "Could not parse color '" + col + "'");
    }
}

define_ibex_controller({
name: "ScaleArray",

jqueryWidget: {
    _init: function () {
        var self = this;

        this.cssPrefix = this.options._cssPrefix;
        this.finishedCallback = this.options._finishedCallback;

        this.html = this.options.html;
        this.labels = this.options.labels;
        this.mainLabel = this.options.mainLabel;
        this.decimalPlaces = (this.options.decimalPlaces == null ? 2 : this.options.decimalPlaces);
        this.startColor = this.options.startColor ? parseColor(this.options.startColor) : parseColor("#5947FD");
        this.endColor = this.options.endColor ? parseColor(this.options.endColor) : parseColor("#59BAFD");

        this.startValue = this.options.startValue;
        assert(typeof(this.startValue) == "number", "'startValue' option must be a number");
        this.endValue = this.options.endValue;
        assert(typeof(this.endValue) == "number", "'endValue' option must be a number");
        this.buttonMessage = this.options.buttonMessage || "Fortfahren";

        this.$html = htmlCodeToDOM(this.html);
        this.element.append($("<div>").addClass(this.cssPrefix + 'html').append(this.$html));
        

        this.currentMousePos = { x: 0, y: 0};

        var labLen = this.labels.length;

        var $SliderArray = $("<table></table>").addClass(this.cssPrefix + 'slider-array');
        var $SliderRow = $("<tr><td></td></tr>").addClass(this.cssPrefix + 'slider-array-tr');
        var $LabelRow = $("<tr><td id='mainLabel'>"+this.mainLabel+"</td></tr>").addClass(this.cssPrefix + 'slider-array-tr');
        var $Cells = [];
        var $Labels = [];
        var $Bars = [];
        var $handles = [];
        var $handleBarClickArray = [];
        
        for (var i = 0; i < labLen; i++) {
            $Cells[i] = $("<td></td>").addClass(this.cssPrefix + 'slider-array-td');
            $Labels[i] = $("<td>"+this.labels[i]+"</td>").addClass(this.cssPrefix + 'slider-array-td');
            $Bars[i] = $("<div>").addClass(this.cssPrefix + 'bar');
            $handles[i] = $("<div>").addClass(this.cssPrefix + 'handle');
            $handleBarClickArray[$handleBarClickArray.length] = (function(val){
                return function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    self.handleBarClick(e,val);
                };
            })(i)
        };
            
        console.log($handleBarClickArray.length);


        this.$SliderArray = $SliderArray;
        this.$SliderRow = $SliderRow;
        this.$LabelRow = $LabelRow;
        this.$Cells = $Cells;
        this.$Labels = $Labels;
        this.$Bars = $Bars;
        this.$handles = $handles;
        this.$handleBarClickArray = $handleBarClickArray;
        

        this.scaleWidth = this.options.scaleWidth || 20;
        this.scaleHeight = this.options.scaleHeight || 300;
        this.handleWidth = this.options.handleWidth || 30;
        this.handleHeight = this.options.handleHeight || 30;
        this.scaleWidth = parseInt(this.scaleWidth);
        this.scaleHeight = parseInt(this.scaleHeight);
        this.handleWidth = parseInt(this.handleWidth);
        this.handleHeight = parseInt(this.handleWidth);

        for (var i = 0; i < labLen; i++) {
            //var Cell = $Cells[i];
            //var Bar = $Bars[i];
            //var handle = $handles[i];
            //var Label = $Labels[i];
            $Bars[i].css('width', this.scaleWidth + 'px');
            $Bars[i].css('height', this.scaleHeight + 'px');
            $handles[i].css({ width: this.handleWith + 'px',
                      height: this.handleHeight + 'px' });
            $Bars[i].append($handles[i]);
            $Cells[i].append($Bars[i]);
            $SliderRow.append($Cells[i]);
            $LabelRow.append($Labels[i]);
        };
        
        $SliderArray.append($LabelRow);
        $SliderArray.append($SliderRow);
        //$SliderArray.append($LabelRow.clone()); // clones the slider labels to the bottom
        this.element.append($SliderArray);

        this.handleTop = [];
        this.fractions = [];
        
        
        for (var i = 0; i < labLen; i++) {
            //var $bar = this.SliderArray.childNodes[0].childNodes[i+1].childNodes[0];
            //this.handleTop[i] = parseInt(this.scaleHeight / 2);
            this.handleTop[i] = parseInt(this.scaleHeight ); // this and the next line change the start position of the handle
            //this.fractions[i] = 0.5;
            this.fractions[i] = 1;
            this.setHandlePos(i);
            this.setLinearGradient(this.$Bars[i], this.startColor, this.endColor);
            this.setupDragHandler(i);
            self.safeBind($Bars[i], 'click', $handleBarClickArray[i]);
        };

        this.$button = $("<div>").addClass(this.cssPrefix + 'button');
        this.$button.text(this.buttonMessage);
        this.element.append(this.$button);
        self.safeBind(this.$button, 'click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            self.handleButtonClick(e);
        });

        this.safeBind($(window), 'resize', function (e) {
            for (var i = 0; i<labLen; i++) {self.setHandlePos(i);};
        });
    },

    handleButtonClick: function () {
        var Values = [];
        var Results = [["html", csv_url_encode(this.$html.innerHTML)],
            ["startValue", this.startValue.toFixed(this.decimalPlaces)],
            ["endValue", this.endValue.toFixed(this.decimalPlaces)]];
        for (var i = 0; i < this.fractions.length; i++) {
            Values[i] = ((1-this.fractions[i]) * (this.endValue - this.startValue)) + this.startValue;
            Results.push(["value_"+String(i), Values[i].toFixed(this.decimalPlaces)]);
        };
        this.finishedCallback([Results]);
    },

    handleBarClick: function (e,i) {
        console.log("started handleBarClick "+i);
        console.log("click bar "+i+" at "+e.pageY);
        var self = this;
        // Calculate handle screen position.
        //var $bar = this.SliderArray.childNodes[0].childNodes[i+1].childNodes[0];
        //var $handle = this.childNodes[0];
        var o = self.$handles[i].offset();
        var x = o.left;
        var y = o.top;
        x += $(window).scrollLeft();
        y += $(window).scrollTop();
        console.log('handle '+i+' is at '+y);
        console.log('scrolling is '+$(window).scrollTop());
        var clickedBar = false;
        if (e.pageX > x - 4 && e.pageX < x + self.handleWidth + 4) {
            if (e.pageY > y - 4 && e.pageY < y + self.handleHeight + 4)
                clickedBar = true;
        }

        if (! clickedBar) {
            // Move the handle to the position on the bar where user clicked.
            var barTop = self.$Bars[i].offset().top// +$(window).scrollTop() ; //
            self.handleTop[i] = e.pageY - barTop;
            if (self.handleTop[i] < 0)
                self.handleTop[i] = 0;
            else if (self.handleTop[i] > self.scaleHeight)
                self.handleTop[i] = self.scaleHeight;
            console.log("clicked at "+e.pageY+" set fraction to "+self.handleTop[i]);
            self.setFraction(self.handleTop[i],i);
            self.setHandlePos(i);
        }
    },
    
    

    setFraction: function (y,i) {
        this.fractions[i] = (y / this.scaleHeight);
    },

    setHandlePos: function (i) {
        var y = this.fractions[i] * this.scaleHeight;
        //var y = 0; // this freezes the handles at the top
        //var $bar = this.SliderArray.childNodes[0].childNodes[i+1].childNodes[0];
        var barO = this.$Bars[i].offset();
        var barLeft = barO.left;
        var barTop = barO.top;
        //barLeft += $(window).scrollLeft();
        //barTop += $(window).scrollTop();
        var hleft = (barLeft - 6.25);//+0.5*this.scaleWidth- parseInt(Math.round((this.handleWidth - this.scaleWidth)/2.0))
        var htop = (barTop + parseInt(y) - parseInt(Math.round((this.handleHeight))));
        console.log("adjust handle "+i+" by "+y+" ending up at "+htop);
        console.log("bar offset is "+barTop);
        this.$handles[i].css('left', hleft + 'px');
        this.$handles[i].css('top', htop + 'px');
    },

   
    setupDragHandler: function (i) {
        var self = this;
        //var $handle = self.SliderArray.childNodes[0].childNodes[i+1].childNodes[0].childNodes[0];
        var mouseIsDown = false;
        self.currentMousePos = { x: 0, y: 0 };
        var refMousePos = { x: 0, y: 0};
        var alreadyMoved = 0;
        self.safeBind($(document), 'mousemove', function (e) {
            self.currentMousePos.x = e.pageX;
            self.currentMousePos.y = e.pageY;

            if (mouseIsDown) {
                var offset = self.currentMousePos.y - refMousePos.y;
                self.handleTop[i] += offset - alreadyMoved;
                alreadyMoved = offset;
                if (self.handleTop[i] < 0)
                    self.handleTop[i] = 0;
                else if (self.handleTop[i] >= self.scaleHeight)
                    self.handleTop[i] = self.scaleHeight;
                self.setFraction(self.handleTop[i],i);
                self.setHandlePos(i);
            }
        });

        self.safeBind(self.$handles[i], 'mousedown', function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (! mouseIsDown) {
                mouseIsDown = true;
                refMousePos.x = self.currentMousePos.x;
                refMousePos.y = self.currentMousePos.y;
                alreadyMoved = 0;
            }
        });
        self.safeBind($(document), 'mouseup', function () {
            mouseIsDown = false;
        });
    },

    setLinearGradient: function ($elem, startColor, endColor) {
        var scol = rgbToS(startColor);
        var ecol = rgbToS(endColor);

        $elem.css('filter', "progid:DXImageTransform.Microsoft.Gradient(startColorstr='" + scol + "', endColorstr='" + ecol + "', GradientType=1)");
        $elem.css('background-image', '-ms-linear-gradient(top,' + scol + ' 0%, ' + ecol + ' 100%)');
        $elem.css('background-image', '-webkit-gradient(linear, left rop, right top, color-stop(0, ' + scol + '), color-stop(1,' + ecol + '))');
        $elem.css('background-image', '-webkit-linear-gradient(top, ' + scol + ' 0%,' + ecol + ' 100%)');
        $elem.css('background-image', '-o-linear-gradient(top, ' + scol + ',' + ecol + ')');
        $elem.css('background-image', '-moz-linear-gradient(top, ' + scol + ',' + ecol + ')');
        $elem.css('background-image', 'linear-gradient(to bottom' + scol + ',' + ecol + ')');
    }
},

properties: {
    obligatory: ["html", "startValue", "endValue"],
    htmlDescription: function(opts) {
        return $(document.createElement("div")).text(opts.s || "");
    }
}
});

})();