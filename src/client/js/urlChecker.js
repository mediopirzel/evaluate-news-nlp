function checkUrl(inputUrl) {
 
    const urlField = document.getElementById('url-field');
    const urlStatus = document.getElementById('url-status');
    const status = document.getElementById('status');
    const main = document.querySelector('main').classList;
 
    status.innerHTML = '';

    if(main.contains('show_results')){
        main.remove('show_results');
    }
    
    Client.updateStatus('stat_ok', 'Checking the url');
   
    const pattern =  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    
    if(pattern.test(inputUrl)) {
        urlField.className = 'input-ok';
        urlStatus.innerText = 'The URL is correct';

        Client.updateStatus('stat_ok', 'The URL format is valid');
        return true;
    } else {
        urlField.className = 'input-error';
        urlStatus.innerText = 'Please enter a valid url';

        Client.updateStatus('stat_error', `The URL is not valid`);
        return false;
    }

}

export { checkUrl }
 