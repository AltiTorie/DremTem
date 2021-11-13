# DremTem

Documentation (Confluence): https://dremtem.atlassian.net/wiki/spaces/ZPI/overview

## WERSJE!

-   node: 16.13.0
-   npm: 8.1.0

## Usage

1. Uruchomienie emulatora lub podłączenie androida do PC (pamiętajcie o włączeniu USB Debugging w smartfonie) - powinien też sam sobie uruchomić emulator w razie czego
2. Instalacja dependencies

```powershell
cd .\AwesomeProject\
npm install
```

3. (!!!) Zakomentowanie "@Override" w 23 linijce pliku: AwesomeProject\node_modules\react-native-bluetooth-serial\android\src\main\java\com\rusel\RCTBluetoothSerial\RCTBluetoothSerialPackage.java
4. Odpalenie Metro

```powershell
npx react-native start
```

5. Odpalenie apki - W NOWYM TERMINALU

```powershell
cd .\AwesomeProject\
npx react-native run-android
```

6. Happy hacking :)

7. Dodanie Plotly.js (Możliwe że niepotrzene)

    Thanks to [Deyson](https://stackoverflow.com/questions/61832232/invariant-violation-requirenativecomponent-rncwebview-was-not-found-in-the-u/64932506#64932506?newreg=2bce1754a2f049699cd4ef8e1c7953e8)

    1. Add this in your android/settings.gradle:

    ```powershell
        include ':react-native-webview'
        project(':react-native-webview').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-webview/android')
    ```

    2. Add this in your android/app/build.gradle:

    ```powershell
       dependencies {
            implementation project(':react-native-webview')
            ....
    ```

    3. In your MainApplication.java:

        ```powershell
        import com.reactnativecommunity.webview.RNCWebViewPackage;//add this import
        ```

    4. Above should work but if not you can try one more step:

        ```powershell
        public class MainApplication extends Application implements ReactApplication {
            ...

        @Override
        protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RNCWebViewPackage(), //add this line
            ....
        // or if your method looks like this:

         @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new RNCWebViewPackage()); // uncomment this
          return packages;
        }

        ```
