#include <SD.h>
#include <SPI.h>


unsigned long tempLastMeasurementTime;
unsigned long lightLastMeasurementTime;


struct Config {
  unsigned long tempReadingInterval;
  unsigned long lightReadingInterval;
  bool tempSensorOn;
  bool lightSensorOn;
};


const char *filename = "/config.txt";
Config config;

void setup() {
  Serial.begin(9600);
  while (!Serial) continue;

  while (!SD.begin()) {
    Serial.println(F("Failed to initialize SD library"));
    delay(1000);
  }

  loadConfiguration(filename, config);
  printConfig();
  
  tempLastMeasurementTime = millis();
  lightLastMeasurementTime = millis();
}

void loop() {
  readBluetooth();

  if (shouldMeasureTemp()) {
    measureTemp();
  }
  if (shouldMeasureLight()) {
    measureLight();
  }
}
