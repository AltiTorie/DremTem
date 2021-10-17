unsigned long tempReadingInterval;
unsigned long tempLastMeasurementTime;
bool tempSensorOn;

unsigned long lightReadingInterval;
unsigned long lightLastMeasurementTime;
bool lightSensorOn;

void setup() {
  // TODO: read reading intervals from config file

  Serial.begin(9600);

  tempLastMeasurementTime = millis();
  tempReadingInterval = 2000;
  tempSensorOn = true;

  lightLastMeasurementTime = millis();
  lightReadingInterval = 5000;
  lightSensorOn = true;
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
