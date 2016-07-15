$(document).ready(function(){
console.log("test");    
    
var print = $('.print');
var clean = $('.clean');
$(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = 400;
        var a = 40;
        var load = 1;
        var height = (y - 200);
        var prints = 0;
        //var x = 400;
        //console.log(y);
        console.log(height);
        if (y >= z) {
            //
           // $("body").append("<img class='print' src='img/print.svg'></img>");
            print.removeClass('print').addClass('print2');
            //$.playSound('niceprint.mp3');
            load = 0;
            console.log("print coming out, load =" + load);
            prints += 1;
            console.log("you have made " + prints + " prints");

        }
        else if (y <= a){
            clean.removeClass('clean').addClass('clean2');   
            load = 1;
            console.log("new page coming in, load =" + load);

        }
        else{
            //if it's anywhere else, the prints are reset
            print.removeClass('print2').addClass('print');
            clean.removeClass('clean2').addClass('clean');   

        }
            });

        $('.ink').css("height", y + 'px');
});

