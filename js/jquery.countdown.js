(function ($) {
    jQuery.fn.countDown = function (options) {
        var options = $.extend({
                endDate: '2017-06-10'
            },
            options);
        console.log(options.endDate);

        return this.each(function () {
            var $this = $(this);

            $('<div class="box" id="hours"></div>').appendTo($this);
            $('<div class="box" id="minutes"></div>').appendTo($this);
            $('<div class="box" id="seconds"></div>').appendTo($this);

            function timer(){
                var currentdate = new Date();
                var endDate = new Date(options.endDate);

                var timeSegment = endDate.getTime() - currentdate.getTime();


                var timeSegmentInSeconds = timeSegment / 1000;

                var timeSegmentInHours = timeSegmentInSeconds / 3600;
                timeSegmentInHours = Math.floor(timeSegmentInHours);
                timeSegmentInSeconds = timeSegmentInSeconds - timeSegmentInHours * 3600;

                var timeSegmentInMinutes = timeSegmentInSeconds / 60;
                timeSegmentInMinutes = Math.floor(timeSegmentInMinutes);
                timeSegmentInSeconds = timeSegmentInSeconds - timeSegmentInMinutes * 60;

                timeSegmentInSeconds = Math.floor(timeSegmentInSeconds);

                $('#hours').html(timeSegmentInHours);
                $('#minutes').html(timeSegmentInMinutes);
                $('#seconds').html(timeSegmentInSeconds);
            }
                
            setInterval(timer, 1000);









//            console.log(currentdate.getTime());
//            console.log(endDate.getTime());
//            console.log(timeSegment);
//            console.log(timeSegmentInHours);
//            console.log(timeSegmentInMinutes);
//            console.log(timeSegmentInSeconds);

        });


    };
})(jQuery);
