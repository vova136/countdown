(function ($) {
    jQuery.fn.countDown = function (options) {
        var options = $.extend({
                endDate: new Date().setSeconds(+new Date().getSeconds() + 10),
                format: 'DD/MM/YYYY HH:mm:ss',
                callBack: function () {
                    alert('time is over');
                }
            },
            options);

        return this.each(function () {
            var $this = $(this);

            $('<div class="box" id="days"></div>').appendTo($this);
            $('<div class="box" id="hours"></div>').appendTo($this);
            $('<div class="box" id="minutes"></div>').appendTo($this);
            $('<div class="box" id="seconds"></div>').appendTo($this);




var timeSegment;

            function timer() {
                var currentdate = new Date();
                var endDate = new Date(options.endDate);

                timeSegment = endDate.getTime() - currentdate.getTime();


                var timeSegmentInSeconds = timeSegment / 1000;

                var timeSegmentInDays = timeSegmentInSeconds / 86400;
                timeSegmentInDays = Math.floor(timeSegmentInDays);
                timeSegmentInSeconds = timeSegmentInSeconds - timeSegmentInDays * 86400;


                var timeSegmentInHours = timeSegmentInSeconds / 3600;
                timeSegmentInHours = Math.floor(timeSegmentInHours);
                timeSegmentInSeconds = timeSegmentInSeconds - timeSegmentInHours * 3600;
                if (timeSegmentInHours < 10) {
                    timeSegmentInHours = "0" + timeSegmentInHours
                }

                var timeSegmentInMinutes = timeSegmentInSeconds / 60;
                timeSegmentInMinutes = Math.floor(timeSegmentInMinutes);
                timeSegmentInSeconds = timeSegmentInSeconds - timeSegmentInMinutes * 60;
                if (timeSegmentInMinutes < 10) {
                    timeSegmentInMinutes = "0" + timeSegmentInMinutes
                }

                timeSegmentInSeconds = Math.floor(timeSegmentInSeconds);
                if (timeSegmentInSeconds < 10) {
                    timeSegmentInSeconds = "0" + timeSegmentInSeconds
                }

                $('#days').html(timeSegmentInDays);
                $('#hours').html(timeSegmentInHours);
                $('#minutes').html(timeSegmentInMinutes);
                $('#seconds').html(timeSegmentInSeconds);
                
                if(timeSegment < 1000){
                    clearInterval(interval);
                    options.callBack(this);

                }
            }
            var interval=setInterval(timer,1000);

        });
    };
})(jQuery);
