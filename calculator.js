var input = [], result = [];
var click = 1;

$(document).ready(function() {
    $('button').on('click', display);
    $('.power-c').on('click', clear);
    $('.power').on('click', equations);
});

function display() {
    if(parseInt($(this).val(), 10) && input.length < 10) {
        input.push($(this).val());
}   else if($(this).val() === '0' && input.length < 10) {
        input.push(0);
}   else if($(this).val() === '.' && input.length < 10 && input.indexOf('.') === -1) {
        input.push('.');
}

    $('.input').text(input.join(''));
}

function clear() {
    if($(this).val() === 'CA') {
        $('span').empty();
        input.length = 0;
        result.length = 0;
    } else {
        input.pop();
        $('.input').text(input.join(''));
    }
}

function equations() {
    var display = [];
    var joined;
    var tempResult;

    if($(this).val() === '=') {
        result = result.concat(input);
        joined = result.join('');
        console.log(result);
        var endResult = joined.match(/([-+*/%.]?\d+)/g).reduce(function (a,v) {
	return eval((a+''+v),'');
});
        //var endResult = eval(joined);
        //console.log(endResult);
        input.length = 0;
        result.length = 0;
        $('.input').text(endResult);
    } else if(click === 1) {
        result = result.concat(input);
        result.push($(this).val());
        console.log(result);
        display = input;
        $('.input').text(display.join(''));
        input.length = 0;
        click++;
    } else {
        result = result.concat(input);

        console.log('else ' + result);
        joined = result.join('');
        tempResult = joined.match(/([-+*/%.]?\d+)/g).reduce(function (a,v) {
	return eval((a+''+v),'');
});
        input.length = 0;
        $('.input').text(tempResult);
        result.push($(this).val());
    }
}
