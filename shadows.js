/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

// Init batman position and building
var widthBuild = W;
var heightBuild = H;
var batmanX = X0;
var batmanY = Y0;

// Init table search
var resultX = [-1, widthBuild];
var resultY = [-1, heightBuild];

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    switch (bombDir) {
      case 'U':
        resultX = [batmanX, batmanX];
        resultY = [resultY[0], batmanY];
        break;

      case 'D':
        resultX = [batmanX, batmanX];
        resultY = [batmanY, resultY[1]];
        break;

      case 'L':
        resultX = [resultX[0], batmanX];
        resultY = [batmanY, batmanY];
        break;

      case 'R':
        resultX = [batmanX, resultX[1]];
        resultY = [batmanY, batmanY];
        break;

      case 'UL':
        resultX = [resultX[0], batmanX];
        resultY = [resultY[0], batmanY];
        break;

      case 'UR':
        resultX = [batmanX, resultX[1]];
        resultY = [resultY[0], batmanY];
        break;

      case 'DL':
        resultX = [resultX[0], batmanX];
        resultY = [batmanY, resultY[1]];
        break;

      case 'DR':
        resultX = [batmanX, resultX[1]];
        resultY = [batmanY, resultY[1]];
        break;
      default:
    }

    batmanX = Math.ceil((resultX[0] + resultX[1]) / 2);
    batmanY = Math.ceil((resultY[0] + resultY[1]) / 2);

    // the location of the next window Batman should jump to.
    print(batmanX + ' ' + batmanY);
}
