jQuery(document).ready(function ($) {

  let slideCount = $('#images ul li').length;
	let slideWidth = $('#images ul li').width();
	let slideHeight = $('#images ul li').height();
	let sliderUlWidth = slideCount * slideWidth;
	
	$('#images').css({ width: slideWidth, height: slideHeight });
	
	$('#images ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#images ul li:last-child').prependTo('#images ul');

    function moveLeft() {
        $('#images ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#images ul li:last-child').prependTo('#images ul');
            $('#images ul').css('left', '');
        });
    };

    function moveRight() {
        $('#images ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#images ul li:first-child').appendTo('#images ul');
            $('#images ul').css('left', '');
        });
    };

    $('a.previous').click(function () {
        moveLeft();
    });

    $('a.next').click(function () {
        moveRight();
    });

});    
