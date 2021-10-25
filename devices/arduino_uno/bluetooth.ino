const char END_OF_THE_CMD_INDICATOR = '#';
char character;
String cmd;


void readBluetooth() {
  if (Serial.available()) {
    character = Serial.read();
    if (character == END_OF_THE_CMD_INDICATOR) {
      execCmd();
      saveConfiguration(filename, config);
      cmd = "";
    }
    else {
      cmd = cmd + character;
    }
  }
}
