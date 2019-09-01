

function serialEvent() {
var inString = serial.readStringUntil('\r\n');
// check to see that there's actually a string there:
//console.log(inString);

let leftState = 0;
let leftPrevState = 0;


if (inString.length > 0 ) {
  // reading data 2 times, 1 button and one sensor
    var sensors = split(inString, ',');
    // console.log(sensors) // split the string on the commas
    if (sensors.length > 1) {                      // if there are three elements
      leftState = sensors[0];  // element 0 is the button
      button_right = sensors[1];// element 2 is the sensor
      console.log(button_left + " + " + button_right); // log to console
  // if(leftState != leftPrevState){
  //     if (leftState == 0){
  //         button_left = 0;
  //         leftPrevState = leftState;
  //     } else if (leftState == 1){
  //             button_left = 1;
  //             leftPrevState = leftState;
  //     }
  //   }

    }
  }


}
function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}
