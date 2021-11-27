import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import Navbar from '../../components/Navbar';
import Dropzone from 'react-dropzone';
import ScreenTitle from '../../components/ScreenTitle';
import AppButton from '../../components/Button_main';
import SecondButton from '../../components/Button_second';
import {FlatList} from 'react-native-gesture-handler';

const UploadCsvScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  _show_modal = () => {
    setModalOpen(true);
  };

  _hide_modal = () => {
    setModalOpen(false);
  };

  _upload_files = () => {
    console.log('Uploading files');
    setSelectedFiles(selectedFiles => []);

    // TODO: add sending proper request to server app one its available
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    var names = [];
    for (var i = 0; i < acceptedFiles.length; i++) {
      console.log('filename ' + acceptedFiles[i].path);
      names.push(acceptedFiles[i].path);
    }
    setSelectedFiles(selectedFiles => [...selectedFiles, ...names]);
  };
  return (
    <View style={{height: '100%', alignItems: 'center'}}>
      <View style={styles.navbar}>
        <Navbar />
      </View>
      <View style={styles.cat}>
        <ScreenTitle title="Upload data from device"></ScreenTitle>
      </View>
      <View style={styles.dropzone}>
        <Dropzone onDrop={files => onDrop(files)} accept=".csv, text/csv">
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <View
                style={{
                  height: '10vw',
                  width: '80vw',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.dragndrop}>
                  {"Click or drag'n'drop to select files"}
                </Text>
              </View>
            </div>
          )}
        </Dropzone>
      </View>
      {selectedFiles.length > 0 && (
        <View style={{height: '50%', alignItems: 'center'}}>
          <Text style={{fontSize: '2vw'}}>{'\nSelected files:\n'}</Text>
          <FlatList
            data={selectedFiles}
            extraData={selectedFiles}
            renderItem={({item}) => (
              <Text style={{fontSize: '1vw'}}>📝 {item}</Text>
            )}></FlatList>
          <View style={styles.bottom}>
            <AppButton
              title="Upload files"
              onPress={() => {
                _show_modal();
              }}></AppButton>
            <SecondButton
              title="Unselect files"
              onPress={() => {
                setSelectedFiles(() => []);
              }}></SecondButton>
          </View>
        </View>
      )}

      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {'This will upload all selected files. Proceed?'}
            </Text>
            <AppButton
              title="Yes, upload data"
              onPress={() => {
                _hide_modal();
                _upload_files();
              }}
            />
            <SecondButton
              title="No"
              onPress={() => {
                _hide_modal();
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  cat: {
    alignItems: 'center',
    marginTop: 80,
  },
  dropzone: {
    borderWidth: 2,
    borderColor: '#adadad',
    borderStyle: 'dashed',
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragndrop: {
    fontSize: '2.5vw',
    color: '#757575',
  },
  modalView: {
    marginTop: 200,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: '15vw',
    width: '35vw',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: '1vw',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default UploadCsvScreen;
