#include <stdio.h>
#include <string.h>

const int EXPECTED_NUM_OF_CMD_ARGS = 3;

const String CHANGE_INTERVAL_CMD_ARG = "INTERVAL";
const String CHAGNE_STATE_CMD_ARG = "STATE";

const String TEMP_SENSOR_ID = "TEMP";
const String LIGHT_SENSOR_ID = "LIGHT";



int getNumOfCmdArgs() {
  int i, count;
  for (i = 0, count = 0; cmd[i]; i++) {
    count += (cmd[i] == ':');
  }

  return count + 1;
}


void execCmd() {
  int numOfCmdArgs = getNumOfCmdArgs();

  if (numOfCmdArgs != EXPECTED_NUM_OF_CMD_ARGS) {
    Serial.println("ERROR: Incorrect CMD provided. CMD should consist of 3 args.");
  }
  else {
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

    String operation = cmdArgs[0];
    String sensorId = cmdArgs[1];

    if (operation == CHANGE_INTERVAL_CMD_ARG) {
      int newInterval = cmdArgs[2].toInt();
      setInterval(sensorId, newInterval);
    }
    else if (operation == CHAGNE_STATE_CMD_ARG) {
      bool newState;
      if (cmdArgs[2] == "ON") {
        newState = true;
      }
      if (cmdArgs[2] == "OFF") {
        newState = false;
      }

      setSensorState(sensorId, newState);
    }
  }
}


void setInterval(String sensorId, int interval) {
  Serial.println("Setting " + sensorId + " interval to " + interval);

  if (sensorId == TEMP_SENSOR_ID) {
    tempReadingInterval = interval;
  }
  else if (sensorId == LIGHT_SENSOR_ID) {
    lightReadingInterval = interval;
  }
}

void setSensorState(String sensorId, bool state) {
  Serial.println("Setting " + sensorId + " state to " + state);

  if (sensorId == TEMP_SENSOR_ID) {
    tempSensorOn = state;
  }
  else if (sensorId == LIGHT_SENSOR_ID) {
    lightSensorOn = state;
  }

}
