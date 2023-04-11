const padToTwo = (number)=> (number <= 9 ? `0${number}` : number);

export const displayTime = (centiSeconds) =>{

    centiSeconds = new Date(centiSeconds).getMilliseconds()
    console.log('centiSeconds:: ',centiSeconds)

    let minutes = 0;
    let seconds = 0;

    if(centiSeconds<0)
    centiSeconds = 0;

    if(centiSeconds<100)
    return `00:00:${padToTwo(centiSeconds)}`

    let remainingCentiSeconds = centiSeconds %100

    seconds = (centiSeconds - remainingCentiSeconds) / 100

    if (seconds < 60)
    return `00:${padToTwo(seconds)}:${padToTwo(remainingCentiSeconds)}}`

    let remainSeconds = seconds % 60
    minutes = (seconds - remainSeconds) / 60

    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}:${padToTwo(remainingCentiSeconds)}`

}