/**************** 11_SWITCHES  ***********/

const day = 'MoN';

switch (day.toLowerCase()) {
    case 'mon':
        console.log("It's Monday");
        break;
    case 'tue':
        console.log("It's Tuesday");
        break;
    case 'wed':
        console.log("It's Wednesday");
        break;
    case 'thu':
        console.log("It's Thursday");
        break;
    case 'fri':
        console.log("It's Friday");
        break;
    case 'sat':
        console.log("It's Saturday");
        break;
    case 'sun':
        console.log("It's Sunday")
        break;
    default:
        console.log('Invalid Parameters');
        break;
}