#include <ArduinoJson.h>
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
    if (cmd == "GETFROMDEVICE") {
      sendDeviceConfig();
    }
    else {
      Serial.println("ERROR: Incorrect CMD provided. CMD should consist of 3 args.");
    }
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
    config.tempReadingInterval = interval;
  }
  else if (sensorId == LIGHT_SENSOR_ID) {
    config.lightReadingInterval = interval;
  }
}

void setSensorState(String sensorId, bool state) {
  Serial.println("Setting " + sensorId + " state to " + state);

  if (sensorId == TEMP_SENSOR_ID) {
    config.tempSensorOn = state;
  }
  else if (sensorId == LIGHT_SENSOR_ID) {
    config.lightSensorOn = state;
  }
}


void loadConfiguration(const char *filename, Config &config) {
  Serial.println(F("Loading configuration"));

  File file = SD.open(filename);

  StaticJsonDocument<256> doc;

  DeserializationError err = deserializeJson(doc, file);

  if (err)
    Serial.println(F("Failed to read file, using default configuration"));

  config.tempReadingInterval = doc["tempReadingInterval"] | 1000;
  config.lightReadingInterval = doc["lightReadingInterval"] | 1000;
  config.tempSensorOn = doc["tempSensorOn"] | true;
  config.lightSensorOn = doc["lightSensorOn"] | false;

  file.close();
}

void saveConfiguration(const char *filename, Config &config) {
  Serial.println(F("Saving configuration"));

  SD.remove(filename);

  File file = SD.open(filename, FILE_WRITE);
  if (!file) {
    Serial.println(F("Failed to create file"));
    return;
  }

  StaticJsonDocument<256> doc;

  doc["tempReadingInterval"] = config.tempReadingInterval;
  doc["lightReadingInterval"] = config.lightReadingInterval;
  doc["tempSensorOn"] = config.tempSensorOn;
  doc["lightSensorOn"] = config.lightSensorOn;


  if (serializeJson(doc, file) == 0) {
    Serial.println(F("Failed to write to file"));
  }

  file.close();
}

void sendDeviceConfig() {
  Serial.println("START");
  printFile(deviceConfigfilename);
  Serial.println('#');
}


void printFile(const char *filename) {
  File file = SD.open(filename);
  if (!file) {
    Serial.println(F("Failed to read file"));
    return;
  }

  while (file.available()) {
    Serial.print((char)file.read());
  }
  Serial.println();

  file.close();
}


void printConfig() {
  Serial.println("Printing config");
  Serial.println(config.tempReadingInterval);
  Serial.println(config.lightReadingInterval);
  Serial.println(config.tempSensorOn);
  Serial.println(config.lightSensorOn);
}
