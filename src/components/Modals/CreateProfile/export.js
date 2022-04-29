document.querySelector('#do_backup').addEventListener('click', () => {
    let exportBackup = JSON.stringify(localStorage);
    let blob = new Blob([exportBackup], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'Backup-relation' + '.json');
})