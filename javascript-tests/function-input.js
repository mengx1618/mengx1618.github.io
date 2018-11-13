window.onload = () => {
    const feetToInchesAction = 
        document.getElementById('feet-to-inches-action');

    const milesToFeetAction = 
        document.getElementById('miles-to-feet-action');

    const areaOfCircleAction = 
        document.getElementById('area-of-circle-action');

    const areaOfTriangleAction = 
        document.getElementById('area-of-triangle-action');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feet-to-inches-input');
        const feetToInchesDisplay = document.getElementById('feet-to-inches-display');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    }

    milesToFeetAction.onclick = () => {
        const milesToFeetInput = document.getElementById('miles-to-feet-input');
        const milesToFeetDisplay = document.getElementById('miles-to-feet-display');

        milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value);
    }
    
    areaOfCircleAction.onclick = () => {
        const areaOfCircleInput = document.getElementById('area-of-circle-input');
        const areaOfCircleDisplay = document.getElementById('area-of-circle-display');
        
        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
    };

    areaOfTriangleAction.onclick = () => {
        const areaOfTriangleInputBase = document.getElementById('area-of-triangle-input-base');
        const areaOfTriangleInputHeight = document.getElementById('area-of-triangle-input-height');
        const areaOfTriangleDisplay = document.getElementById('area-of-triangle-display');
        
        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleInputBase.value, areaOfTriangleInputHeight.value);
    };
    
};

const feetToInches = (feet) => {
    return feet * 12;
};

const milesToFeet = (miles) => {
        return miles * 5280;
};

const areaOfCircle = (radius) => {
        return (Math.PI) * (radius * radius);
};

const areaOfTriangle = (base, height) => {
        return 1/2 * base * height;
};




