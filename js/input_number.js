const ipc_share = require('electron').remote.getGlobal('sharedObject');
const button1 = $('#button1');
const button2 = $('#button2');

function ok_event(){
    const input_string = $('#number_input').val();
    let input_number = parseInt(input_string);
    if(input_number>=8 && input_number<=15){
        ipc_share.total_number=input_number;
        alert('请确认人数为 ' + input_number + ' 人');
        window.location.href="random_allocate.html";
    }
    else {
        alert('请输入8~15人');
    }
}

$('#number_input').keypress(function (e) {
    if (e.which == 13) {
        ok_event();
    }
});

button1.click(ok_event);

button2.click(function () {
    window.location.href="../input_numbers.html";
});




