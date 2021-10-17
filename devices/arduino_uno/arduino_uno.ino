#include <stdio.h>
#include <string.h>

char END_OF_THE_CMD_INDICATOR = '#';
char character;
String cmd;
unsigned long readingInterval;
unsigned long lastMeasurementTime;
bool ledOn;

void setup() {
  Serial.begin(9600);
  lastMeasurementTime = millis();
  readingInterval = 2000;
  ledOn = false;
  pinMode(13, OUTPUT);
}


int readIntervalCmd() {
  int init_size = cmd.length()+1;
  char str[init_size];
  cmd.toCharArray(str, init_size);
  char delim[] = ":";
  char *ptr = strtok(str, delim);

  String newInterval;
  
  while (ptr != NULL)
  {
    newInterval = ptr;
    ptr = strtok(NULL, delim);
  }
  
  return newInterval.toInt();
}

void setInterval(int newInterval) {
  Serial.print("Setting reading interval to: ");
  Serial.println(newInterval);
  
  readingInterval = newInterval;
}


void execCmd() {
  if (cmd.startsWith("INTERVAL")) {
        int newInterval = readIntervalCmd();
        setInterval(newInterval);
      }
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


void doMeasurement() {
  if(ledOn){
    digitalWrite(13, LOW);
    ledOn = false;
  }
  else{
    digitalWrite(13, HIGH);
    ledOn = true;
  }
}


bool shouldMeasure() {
  if (millis() - lastMeasurementTime > readingInterval) {
    return true;
  }
  return false;
}

void loop() {
  readBluetooth();
  
  if (shouldMeasure()) {
    doMeasurement();
    lastMeasurementTime = millis();
  }
  
  delay(200);
}
