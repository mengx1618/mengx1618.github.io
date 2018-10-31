window.onload = () => {
    const listButton = document.getElementById('run-for-loop');

    listButton.onclick = () => {
        const myList = document.getElementById('mylist');
        for (let i = 1; i < 10; i ++)
        {
       
        
            // WRAP THE NEXT LINE IN A for-loop that iterates over a variable named i. 
            // The loop should iterate 5 times (count from zero to five).

            elfCode.appendToList(mylist, i);
        }
            // END LOOP
    }
}               