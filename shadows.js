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

var resultX = [0, 0];
var resultY = [0, 0];

var turn = 0;

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    switch (bombDir) {
      case 'UR':
        resultY = [batmanY, 0];
        heightBuild = batmanY;
        resultX = [batmanX, widthBuild];
        break;

      case 'DR':
        resultY = [batmanY, heightBuild];
        resultX = [batmanX, widthBuild];
        break;

      case 'DL':
        resultY = [batmanY, heightBuild];
        resultX = [batmanX, 0];
        widthBuild = batmanX;
        break;

      case 'UL':
        resultY = [batmanY, 0];
        heightBuild = batmanY;
        resultX = [batmanX, 0];
        widthBuild = batmanX;
        break;

      case 'U':
        resultY = [batmanY, 0];
        heightBuild = batmanY;
        break;

      case 'D':
        resultY = [batmanY, heightBuild];
        break;

      case 'R':
        resultX = [batmanX, widthBuild];
        break;

      case 'L':
        resultX = [batmanX, 0];
        widthBuild = batmanX;
        break;
      default:
    }

    // Special traitment for windows 0
    if (batmanX === 0 && turn !== 0) {
      batmanX = 0;
    }
    else if (batmanX === 1 && (bombDir === 'L' || bombDir === 'UL' || bombDir === 'DL')) {
      batmanX = 0;
    } else {
      batmanX = Math.ceil((resultX[0] + resultX[1]) / 2);
    }

    if (batmanY === 0 && turn !== 0) {
      batmanY = 0;
    }
    else if (batmanY === 1 && (bombDir === 'U' || bombDir === 'UL' || bombDir === 'UR')) {
      batmanY = 0;
    } else {
      batmanY = Math.ceil((resultY[0] + resultY[1]) / 2);
    }

    printErr(batmanX + ' ' +bombDir);

    // the location of the next window Batman should jump to.
    turn ++;
    print(batmanX + ' ' + batmanY);
}
