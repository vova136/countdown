$(document).ready(function () {
    $('#countdown').countDown({
//        endDate: '2017-06-05 17:10'
//        format: 'yyyy-MM-dd HH:mm:ss' 
        callBack: function(){
            $('<div class="message">Time is over</div>').appendTo('#countdown');
        }
    });
});