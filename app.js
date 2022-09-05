
window.onload = () => {
    getAdvice();
}

function getAdvice() {

    fetch('https://api.adviceslip.com/advice').then(response => 
    {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        //  document.getElementById('advice-number').innerHTML = `<p>Advice #${Adviceobj.slip_id.toString()}</p>`;
        document.getElementById('advice').innerHTML = `<p>"${Adviceobj.advice}"</p>`;
    }).catch(error => {
        console.log(error);
    });

}