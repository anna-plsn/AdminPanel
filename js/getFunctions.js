var peopleArray = [];

function getPeople() {
    var url = 'https://pandawok.guprint.ru/user/all';

    $.getJSON(url, function(data) {
        $(data.result).each(function() {
            peopleArray.push({fullName: this.fullName, id: this.id});
        });
    });
}

function login(){
    $.ajax(
        'https://pandawok.guprint.ru/login',
        {
            success: function(data) {
                alert('Data from the server' + data);
            }
        }
    );
}