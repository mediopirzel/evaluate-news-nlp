function  submitForm(event) {
    event.preventDefault()

    // URL to test
    const formUrl = document.getElementById('url-field').value

    const main = document.querySelector('main').classList;

    // Only send to API if url is correct
    if (Client.checkUrl(formUrl)==true){
        Client.updateStatus('stat_ok', 'submitting to Aylien');
       fetch('http://localhost:8081/aylien',{
        method: "POST",
        credentials: "same-origin",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({url:formUrl})
        })
        .then(res => res.json())
        .then(function(res) {

            //Update status
            Client.updateStatus('stat_ok', 'Data Recived');

            //show results
            main.toggle('show_results');
            
            //If values are < 1 we keep only to decimals
            let polarOrigin = res.polarity_confidence;
            let subjOrigin = res.subjectivity_confidence;

            if(polarOrigin < 1) {
                polarOrigin = polarOrigin.toFixed(2)
            } 

            if(subjOrigin < 1) {
                subjOrigin = subjOrigin.toFixed(2)
            }

            //Show results
            document.getElementById('polarity').innerHTML = res.polarity
            document.getElementById('subjectivity').innerHTML = res.subjectivity
            document.getElementById('polar-confidence').innerHTML = polarOrigin
            document.getElementById('subj-confidence').innerHTML = subjOrigin
            
        })
    } 
}


export { submitForm }
