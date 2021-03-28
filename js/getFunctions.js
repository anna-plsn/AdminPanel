function getPeople() {
    var url, peopleOption;
    url = 'https://pandawok.guprint.ru/user/all';

    $.getJSON(url, function(data) {
        $(data.result).each(function() {
            peopleOption = "<option value=\"" + this.fullName + "\">" + this.id + "</option>";
            $('#peopleList').append(peopleOption);
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