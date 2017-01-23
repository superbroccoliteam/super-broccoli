 var socket = io.connect('https://nameless-harbor-45973.herokuapp.com');

    socket.on('connect', function(){
        socket.emit('adduser', "guest"); //Vervangen door de username van de gebruiker
    });

    socket.on('updatechat', function (username, data) {
        $('#conversation').append('<b>'+username + ':</b> ' + data + '<br>');
    });


    socket.on('updaterooms', function(rooms, current_room) {
        $('#rooms').empty();
        $.each(rooms, function(key, value) {
            if(value == current_room){
                $('#rooms').append('<div>' + value + '</div>');
            }
            else {
                $('#rooms').append('<div><a href="#" onclick="switchRoom(\''+value+'\')">' + value + '</a></div>');
            }
        });
    });

    function switchRoom(room){
        socket.emit('switchRoom', room);
    }

    // on load of page
    $(function(){
        // when the client clicks SEND
        $('#datasend').click( function() {
            var message = $('#data').val();
            $('#data').val('');
            socket.emit('sendchat', message);
        });

        // when the client hits ENTER on their keyboard
        $('#data').keypress(function(e) {
            if(e.which == 13) {
                $(this).blur();
                $('#datasend').focus().click();
            }
        });
    });