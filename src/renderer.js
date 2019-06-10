const electron = require('electron');

const ipc = electron.ipcRenderer

document.getElementById('start').onclick = ()=>{
    ipc.send('countdown-start');
}

ipc.on('countdown', (evt, count) => {
    document.querySelector('#count').innerHTML = count;
})