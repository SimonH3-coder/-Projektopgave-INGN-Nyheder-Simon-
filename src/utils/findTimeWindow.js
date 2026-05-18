export function findTimeWindow(inputDatestart, inputDateEnd) {
    const timeStart = new Date(inputDatestart);
    const timeEnd = new Date(inputDateEnd);
    const localTime = new Date();

    console.log(localTime.getHours());
    
    if (localTime >= timeStart && localTime <= timeEnd) {
        console.log("NU ER DET INDEN FOR TIDEN");
        return true;
    } 
    else return false
}
        

