import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import Navbar from '../components/Navbar';
import Dupa from '../components/Button';
import ProductsScreen from './ProductsScreen';

const HomeScreen = props => {
  return (
    <View>
      <View style={styles.navbar}>
        <Navbar />
      </View>
      <View style={styles.cat}>
        <Avatar.Image
          source={{
            uri: 'https://www.logoground.com/uploads6/dv6y2020448282020-01-224858473catwithfish.jpg',
          }}
          size={400}
        />
      </View>
      <View>
        <Dupa title="Produkty" screen="Products" />
      </View>

      <View style={styles.text}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat
          pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mollis
          nunc sed id semper risus in hendrerit. Purus in massa tempor nec
          feugiat nisl pretium fusce. Ut sem nulla pharetra diam sit amet nisl.
          Interdum posuere lorem ipsum dolor sit amet. Ac turpis egestas integer
          eget aliquet nibh. Suspendisse potenti nullam ac tortor vitae purus.
          Euismod nisi porta lorem mollis aliquam ut. Nec dui nunc mattis enim
          ut tellus. At augue eget arcu dictum varius. At tempor commodo
          ullamcorper a lacus vestibulum sed arcu non. Malesuada fames ac turpis
          egestas maecenas pharetra. Augue neque gravida in fermentum et
          sollicitudin ac orci. Pellentesque eu tincidunt tortor aliquam nulla
          facilisi cras fermentum odio. Malesuada fames ac turpis egestas. In
          aliquam sem fringilla ut morbi tincidunt. Lectus nulla at volutpat
          diam ut. Etiam sit amet nisl purus in. Venenatis a condimentum vitae
          sapien pellentesque. Dignissim sodales ut eu sem integer vitae justo
          eget. Justo eget magna fermentum iaculis eu. In hendrerit gravida
          rutrum quisque non. Sed cras ornare arcu dui vivamus arcu felis
          bibendum ut. Volutpat diam ut venenatis tellus. Nulla facilisi cras
          fermentum odio eu feugiat pretium. Non curabitur gravida arcu ac
          tortor. Libero volutpat sed cras ornare arcu dui vivamus. Diam
          phasellus vestibulum lorem sed risus ultricies tristique. Adipiscing
          tristique risus nec feugiat in fermentum posuere. Lorem mollis aliquam
          ut porttitor leo a diam sollicitudin tempor. Neque viverra justo nec
          ultrices dui sapien eget mi proin. Amet venenatis urna cursus eget
          nunc scelerisque viverra mauris. Aliquam faucibus purus in massa
          tempor. A iaculis at erat pellentesque adipiscing. Nibh sed pulvinar
          proin gravida hendrerit lectus a. Nibh tellus molestie nunc non.
          Pellentesque elit ullamcorper dignissim cras tincidunt lobortis
          feugiat vivamus at. Sit amet venenatis urna cursus. Nulla facilisi
          nullam vehicula ipsum a. Erat nam at lectus urna duis convallis. Duis
          ultricies lacus sed turpis tincidunt id aliquet. Interdum velit
          euismod in pellentesque massa placerat duis. Mauris vitae ultricies
          leo integer malesuada. Id volutpat lacus laoreet non curabitur. Diam
          vulputate ut pharetra sit amet aliquam id diam maecenas. Laoreet non
          curabitur gravida arcu ac. Sit amet nisl purus in mollis. Posuere
          morbi leo urna molestie at elementum eu facilisis. Dictum non
          consectetur a erat. Nibh sed pulvinar proin gravida hendrerit. Dictum
          sit amet justo donec enim diam vulputate ut. Sed libero enim sed
          faucibus. Ullamcorper a lacus vestibulum sed arcu non odio euismod
          lacinia. Id cursus metus aliquam eleifend mi in nulla. Eu tincidunt
          tortor aliquam nulla. Eget est lorem ipsum dolor sit. Quisque sagittis
          purus sit amet. Lectus sit amet est placerat in egestas. At quis risus
          sed vulputate odio. Nec feugiat nisl pretium fusce id velit ut.
          Aliquam sem et tortor consequat id porta nibh venenatis cras. Ipsum
          faucibus vitae aliquet nec ullamcorper sit amet risus. Congue quisque
          egestas diam in. Aliquet eget sit amet tellus cras adipiscing enim eu
          turpis. Faucibus nisl tincidunt eget nullam non nisi. Lorem dolor sed
          viverra ipsum nunc. Arcu felis bibendum ut tristique. Sit amet nulla
          facilisi morbi tempus. Nisl condimentum id venenatis a condimentum
          vitae sapien. Aliquam faucibus purus in massa tempor. Pulvinar etiam
          non quam lacus suspendisse faucibus. Odio pellentesque diam volutpat
          commodo sed. Fermentum posuere urna nec tincidunt praesent semper
          feugiat. Tellus id interdum velit laoreet id donec ultrices. Eu sem
          integer vitae justo eget magna fermentum. Nisl suscipit adipiscing
          bibendum est ultricies integer quis auctor. Vulputate ut pharetra sit
          amet aliquam. Ultricies mi eget mauris pharetra. Ante metus dictum at
          tempor. Mollis aliquam ut porttitor leo a diam. Amet dictum sit amet
          justo donec. Vitae purus faucibus ornare suspendisse sed nisi lacus
          sed viverra. Sed viverra tellus in hac habitasse platea. Eu augue ut
          lectus arcu bibendum at varius. Aenean sed adipiscing diam donec. A
          arcu cursus vitae congue. Et ultrices neque ornare aenean euismod
          elementum nisi. Felis eget nunc lobortis mattis aliquam. Gravida
          rutrum quisque non tellus orci ac auctor augue mauris. Ut enim blandit
          volutpat maecenas volutpat blandit aliquam etiam. Vitae et leo duis ut
          diam quam nulla porttitor massa. Enim tortor at auctor urna nunc.
          Viverra maecenas accumsan lacus vel facilisis volutpat est. Ut diam
          quam nulla porttitor massa id neque aliquam vestibulum. Nulla
          porttitor massa id neque aliquam vestibulum. Mattis ullamcorper velit
          sed ullamcorper. Volutpat est velit egestas dui id ornare arcu odio.
          Condimentum lacinia quis vel eros donec ac odio tempor orci. Semper
          risus in hendrerit gravida rutrum quisque non. Elementum nisi quis
          eleifend quam adipiscing. Sed sed risus pretium quam vulputate
          dignissim suspendisse. Leo a diam sollicitudin tempor id. Augue eget
          arcu dictum varius duis at. Vitae auctor eu augue ut lectus arcu
          bibendum at. Dignissim convallis aenean et tortor at risus. Molestie
          ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.
          Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam
          vehicula. Lobortis elementum nibh tellus molestie nunc non blandit.
          Volutpat ac tincidunt vitae semper quis. Luctus accumsan tortor
          posuere ac ut consequat. Ut tortor pretium viverra suspendisse
          potenti. Habitasse platea dictumst quisque sagittis purus. Fames ac
          turpis egestas integer eget aliquet. Massa tincidunt dui ut ornare
          lectus. Amet consectetur adipiscing elit duis tristique. Dui nunc
          mattis enim ut tellus elementum sagittis. Quis eleifend quam
          adipiscing vitae proin. Nulla facilisi nullam vehicula ipsum a arcu
          cursus vitae congue. Vitae sapien pellentesque habitant morbi
          tristique senectus et netus et. Commodo elit at imperdiet dui accumsan
          sit amet nulla facilisi. Quisque id diam vel quam elementum. Dui id
          ornare arcu odio ut. Gravida dictum fusce ut placerat orci. Tellus in
          hac habitasse platea dictumst vestibulum rhoncus. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi. Imperdiet proin fermentum leo
          vel orci. Eget aliquet nibh praesent tristique magna sit amet. Congue
          nisi vitae suscipit tellus mauris a. Ac felis donec et odio
          pellentesque diam volutpat commodo sed. Eleifend mi in nulla posuere.
          Sed euismod nisi porta lorem. Donec massa sapien faucibus et molestie
          ac feugiat sed. Nisl suscipit adipiscing bibendum est ultricies
          integer quis auctor elit. Libero justo laoreet sit amet cursus sit.
          Arcu dictum varius duis at consectetur lorem donec massa sapien. Ut
          consequat semper viverra nam libero. Pretium viverra suspendisse
          potenti nullam ac tortor vitae purus. Diam maecenas sed enim ut sem
          viverra aliquet eget sit. Nec sagittis aliquam malesuada bibendum arcu
          vitae. Non sodales neque sodales ut etiam sit. Erat nam at lectus urna
          duis convallis convallis tellus id. Adipiscing at in tellus integer
          feugiat scelerisque varius morbi enim. Vulputate enim nulla aliquet
          porttitor lacus luctus accumsan. Eu scelerisque felis imperdiet proin
          fermentum leo vel. Cursus in hac habitasse platea dictumst quisque
          sagittis. Non pulvinar neque laoreet suspendisse. Ultricies lacus sed
          turpis tincidunt. Nulla aliquet enim tortor at auctor urna nunc id
          cursus. Semper eget duis at tellus. Sagittis eu volutpat odio
          facilisis. Morbi enim nunc faucibus a pellentesque sit amet porttitor.
          Ridiculus mus mauris vitae ultricies leo integer. Morbi enim nunc
          faucibus a pellentesque sit amet. Dignissim convallis aenean et tortor
          at risus. Etiam erat velit scelerisque in dictum non consectetur. Nunc
          mi ipsum faucibus vitae aliquet nec ullamcorper sit. Non nisi est sit
          amet facilisis. Iaculis urna id volutpat lacus laoreet non. Morbi leo
          urna molestie at elementum. Id diam vel quam elementum pulvinar etiam.
          Vitae et leo duis ut diam quam nulla porttitor massa. Eget aliquet
          nibh praesent tristique magna sit. tristique senectus et netus et.
          Commodo elit at imperdiet dui accumsan sit amet nulla facilisi.
          Quisque id diam vel quam elementum. Dui id ornare arcu odio ut.
          Gravida dictum fusce ut placerat orci. Tellus in hac habitasse platea
          dictumst vestibulum rhoncus. Pellentesque eu tincidunt tortor aliquam
          nulla facilisi. Imperdiet proin fermentum leo vel orci. Eget aliquet
          nibh praesent tristique magna sit amet. Congue nisi vitae suscipit
          tellus mauris a. Ac felis donec et odio pellentesque diam volutpat
          commodo sed. Eleifend mi in nulla posuere. Sed euismod nisi porta
          lorem. Donec massa sapien faucibus et molestie ac feugiat sed. Nisl
          suscipit adipiscing bibendum est ultricies integer quis auctor elit.
          Libero justo laoreet sit amet cursus sit. Arcu dictum varius duis at
          consectetur lorem donec massa sapien. Ut consequat semper viverra nam
          libero. Pretium viverra suspendisse potenti nullam ac tortor vitae
          purus. Diam maecenas sed enim ut sem viverra aliquet eget sit. Nec
          sagittis aliquam malesuada bibendum arcu vitae. Non sodales neque
          sodales ut etiam sit. Erat nam at lectus urna duis convallis convallis
          tellus id. Adipiscing at in tellus integer feugiat scelerisque varius
          morbi enim. Vulputate enim nulla aliquet porttitor lacus luctus
          accumsan. Eu scelerisque felis imperdiet proin fermentum leo vel.
          Cursus in hac habitasse platea dictumst quisque sagittis. Non pulvinar
          neque laoreet suspendisse. Ultricies lacus sed turpis tincidunt. Nulla
          aliquet enim tortor at auctor urna nunc id cursus. Semper eget duis at
          tellus. Sagittis eu volutpat odio facilisis. Morbi enim nunc faucibus
          a pellentesque sit amet porttitor. Ridiculus mus mauris vitae
          ultricies leo integer. Morbi enim nunc faucibus a pellentesque sit
          amet. Dignissim convallis aenean et tortor at risus. Etiam erat velit
          scelerisque in dictum non consectetur. Nunc mi ipsum faucibus vitae
          aliquet nec ullamcorper sit. Non nisi est sit amet facilisis. Iaculis
          urna id volutpat lacus laoreet non. Morbi leo urna molestie at
          elementum. Id diam vel quam elementum pulvinar etiam. Vitae et leo
          duis ut diam quam nulla porttitor massa. Eget aliquet nibh praesent
          tristique magna sit.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 100,
  },
  cat: {
    alignItems: 'center',
    margin: 80,
  },
  text: {
    margin: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#FFC163',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 150,
    heigh: 51,
    margin: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default HomeScreen;
