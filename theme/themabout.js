window.onload = () => {
    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;

        const defaults = document.getElementById('default');
        const basic = document.getElementById('alt_themestyle');

        if (value.toLowerCase() === 'white') {

            disableStylesheet(defaults);
            enableStylesheet(basic);
            showChoice(value);
        } 

        else if (value.toLowerCase() === 'default') {
            enableStylesheet1(basic);
            disableStylesheet1(defaults);
            showChoice(value);
        }

    });

}

// define function showChoice

function showChoice(value){
    console.log(value);
    const userDisplay = document.getElementById("user-choice");
    userDisplay.textContent = value;
}

function enableStylesheet (node) {
    node.rel = 'stylesheet';
    }

function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
    }           

function enableStylesheet1 (node) {
    node.rel = 'alternate stylesheet';
    }

function disableStylesheet1 (node) {
    node.rel = 'stylesheet';
    }           
            
          


