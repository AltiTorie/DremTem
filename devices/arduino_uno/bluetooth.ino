#include <stdio.h>
#include <string.h>

const char END_OF_THE_CMD_INDICATOR = '#';
char character;
String cmd;


void setInterval() {
  int init_size = cmd.length() + 1;
  char str[init_size];
  cmd.toCharArray(str, init_size);
  char delim[] = ":";
  char *ptr = strtok(str, delim);

  String cmdArgs[3];

  int pos = 0;

  while (ptr != NULL)
  {
    cmdArgs[pos] = ptr;
    ptr = strtok(NULL, delim);
    pos = pos + 1;
  }

  String sensorId = cmdArgs[1];
  int newInterval = cmdArgs[2].toInt();

  Serial.print("Setting ");
  Serial.print(sensorId);
  Serial.print(" reading interval to: ");
  Serial.println(newInterval);

  if (sensorId == "TEMP") {
    tempReadingInterval = newInterval;
  }
  if (sensorId == "LIGHT") {
    lightReadingInterval = newInterval;
  }
}

void setSensorState() {
  int init_size = cmd.length() + 1;
  char str[init_size];
  cmd.toCharArray(str, init_size);
  char delim[] = ":";
  char *ptr = strtok(str, delim);

  String cmdArgs[3];

  int pos = 0;

  while (ptr != NULL)
  {
    cmdArgs[pos] = ptr;
    ptr = strtok(NULL, delim);
    pos = pos + 1;
  }

  String sensorId = cmdArgs[1];
  bool newState;
  if (cmdArgs[2] == "ON") {
    newState = true;
  }
  if (cmdArgs[2] == "OFF") {
    newState = false;
  }


  Serial.print("Setting ");
  Serial.print(sensorId);
  Serial.print(" state to: ");
  Serial.println(newState);

  if (sensorId == "TEMP") {
    tempSensorOn = newState;
  }
  if (sensorId == "LIGHT") {
    lightSensorOn = newState;
  }
}


void execCmd() {
  if (cmd.startsWith("INTERVAL")) {
    setInterval();
  }
  if (cmd.startsWith("TURN"))
    setSensorState();
}

void readBluetooth() {
  if (Serial.available()) {
    character = Serial.read();
    if (character == END_OF_THE_CMD_INDICATOR) {
      execCmd();
      cmd = "";
    }
    else {
      cmd = cmd + character;
    }
  }
}
