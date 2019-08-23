const validatePhoneNumber = () => {
    const inputData = document.querySelector('input').value;
    const output = document.querySelector('p');
    
    let first = inputData.substring(0, 3);
    let second = inputData.substring(inputData.length - 4);
    if(inputData.length == 7 || (inputData.length == 8 && inputData.charAt(3) == '-')) {
        for(i=0; i<inputData.length; i++){
            if(isNaN(first) || isNaN(second) || (inputData.length==7 && inputData.charAt(i) =='-')) {
                output.classList = 'try-again';
                return output.innerHTML = 'Please enter valid digits';
            } else {
                output.classList = 'right';
                return output.innerHTML = inputData;
            }
        }
        
    } else {
        output.classList = 'try-again';
        return output.innerHTML = 'Please enter valid digits';
    }

};

const Validatebtn = document.querySelector('button');
Validatebtn.addEventListener('click', validatePhoneNumber);

