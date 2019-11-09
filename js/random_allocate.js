const ipc_share = require('electron').remote.getGlobal('sharedObject');

function allocate() {
    const total_number = ipc_share.total_number;

    const gods = ['预言家','女巫','猎人','守卫'];
    const devil = ['恶魔'];

    let good_guys=4+Math.ceil((total_number-5)/2);

    let bad_guys=1+parseInt((total_number-5)/2);

    console.log(good_guys);
    console.log(bad_guys);


    for (let i=4; i<good_guys; i++){
        gods.unshift('村民');
    }


    for (let i=1; i<bad_guys; i++){
        devil.unshift('狼人');
    }

    console.log(gods);
    console.log(devil);

    let num_list=[];

    for (let i=1; i<total_number+1; i++){
        num_list.push(i);
    }

    console.log(num_list);
    console.log(num_list.sort(function() { return Math.random() - 0.5 }));

    const table1 = $('#table1');
    const table2 = $('#table2');

    for (let i=0; i<good_guys; i++){
        table1.append(`<tr><td>${gods[i]}</td><td>${num_list[i]}</td></tr>`);
    }

    for (let i=0; i<bad_guys; i++){
        table2.append(`<tr><td>${devil[i]}</td><td>${num_list[i+good_guys]}</td></tr>`);
    }
}

allocate();


