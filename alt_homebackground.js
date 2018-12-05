window.onload = () => {

    const appearanceButton = document.getElementById('appearanceAction');
    const defaultButton = document.getElementById('defaultAction')

    appearanceButton.onclick = () => {
        const defaults = document.getElementById('default');
        const basic = document.getElementById('alt_homestyle');

        disableStylesheet(defaults);
        enableStylesheet(basic);
    }

    defaultButton.onclick = () => {
        const defaults1 = document.getElementById('default');
        const basic1 = document.getElementById('alt_homestyle');

        enableStylesheet1(defaults1);
        disableStylesheet1(basic1);
    }

}

function enableStylesheet (node) {
    node.rel = 'stylesheet';
    }
    
function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
}                
        
function enableStylesheet1 (node) {
    node.rel = 'stylesheet';
    }
    
function disableStylesheet1 (node) {
    node.rel = 'alternate stylesheet';
}                
        