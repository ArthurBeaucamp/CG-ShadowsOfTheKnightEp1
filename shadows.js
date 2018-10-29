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

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    switch (bombDir) {
      case 'UR':
        batmanY -= jumpBuilding(heightBuild);
        batmanX += jumpBuilding(widthBuild);
        break;

      case 'DR':
        batmanX += jumpBuilding(widthBuild);
        batmanY += jumpBuilding(heightBuild);
        break;

      case 'DL':
        batmanX -= jumpBuilding(widthBuild);
        batmanY += jumpBuilding(heightBuild);
        break;

      case 'UL':
        batmanX -= jumpBuilding(widthBuild);
        batmanY -= jumpBuilding(heightBuild);
        break;

      case 'U':
        batmanY -= jumpBuilding(heightBuild);
        break;

      case 'D':
        batmanY += jumpBuilding(heightBuild);
        break;

      case 'R':
        batmanX += jumpBuilding(widthBuild);
        break;

      case 'L':
        batmanX -= jumpBuilding(widthBuild);
        break;
      default:
    }

    widthBuild = Math.ceil(widthBuild / 2);
    heightBuild = Math.ceil(heightBuild / 2);

    // the location of the next window Batman should jump to.
    print(batmanX + ' ' + batmanY);
}

function jumpBuilding(jumpValue) {
  return Math.ceil(jumpValue / 2) - 1;
}
