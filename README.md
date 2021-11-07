# DremTem

Documentation (Confluence): https://dremtem.atlassian.net/wiki/spaces/ZPI/overview

## WERSJE!

- node: 16.13.0
- npm: 8.1.0

## Usage

2. Uruchomienie emulatora lub podłączenie androida do PC (pamiętajcie o włączeniu USB Debugging w smartfonie) - powinien też sam sobie uruchomić emulator w razie czego
3. Instalacja dependencies

```powershell
cd .\AwesomeProject\
npm install
```

4. (!!!) Zakomentowanie "@Override" w 23 linijce pliku: AwesomeProject\node_modules\react-native-bluetooth-serial\android\src\main\java\com\rusel\RCTBluetoothSerial\RCTBluetoothSerialPackage.java
5. Odpalenie Metro

```powershell
npx react-native start
```

6. Odpalenie apki - W NOWYM TERMINALU

```powershell
npx react-native run-android
```

7. Happy hacking :)
