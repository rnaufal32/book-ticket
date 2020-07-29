import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { bgColor, rPadding, secondColor, mainColor, navigate } from '../config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { recomendedMovie, upCommingMovies } from '../mock';

const Find = () => (
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>What are you looking for ?</Text>
)

const SearchFilter = () => (
  <View style={{ marginVertical: rPadding, flexDirection: 'row' }}>
    <View style={{ padding: rPadding - 5, backgroundColor: '#fcfcfc', flex: 1, borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
      {/* <Text style={{ color: '#aaa' }}>Search for movies, events {'&'} more...</Text> */}
      <Icon name="magnify" color="#aaa" size={25} />
      <TextInput placeholder="Search for movies, events & more..." style={{ padding: 0 }} placeholderTextColor='#aaa' />
    </View>
    <View style={{ padding: rPadding - 5, backgroundColor: mainColor, marginLeft: rPadding + 5, borderRadius: 5 }}>
      <Icon name="format-list-bulleted-square" size={26} color="white" />
    </View>
  </View>
)

const MenuItem = ({ title, selected = false, onTap }) => (
  <View>
    <TouchableOpacity onPress={onTap}>
      <Text style={{ color: selected ? 'black' : '#aaa' }}>{title}</Text>
      {
        selected && <View style={{ backgroundColor: mainColor, height: 4, width: '80%', borderRadius: 50 }} />
      }
    </TouchableOpacity>
  </View>
)

const Menu = () => {
  const [checked, setChecked] = React.useState('movies')
  return (
    <View style={{ flexDirection: 'row', marginVertical: rPadding, justifyContent: 'space-between' }}>
      {
        ['Movies', 'Events', 'Plays', 'Sports', 'Activities'].map((item, index) => (
          <MenuItem key={index} title={item} selected={checked === item.toLowerCase()} onTap={() => setChecked(item.toLowerCase())} />
        ))
      }
    </View>
  )
}

const Title = ({ value }) => (
  <View style={{ marginVertical: rPadding }}>
    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>{value}</Text>
  </View>
)

const RecomendedItem = ({ item }) => (
  <View style={{ marginRight: rPadding + 10 }}>
    <TouchableOpacity onPress={() => navigate('Detail', item)}>
      {/* <View style={{ backgroun, width: 140, height: 180, borderRadius: 10 }}></View> */}
      <Image source={{ uri: item.image }} style={{ width: 140, height: 180, borderRadius: 10 }} />
      <Text style={{ fontSize: 18, marginVertical: 10, }}>{item.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="heart" size={20} style={{ marginRight: rPadding - 10 }} color={secondColor} />
        <Text style={{ color: '#aaa' }}>89 %</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const Recomended = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {
      recomendedMovie.map((item, index) => (
        <RecomendedItem key={index} item={item} />
      ))
    }
  </ScrollView>
)

const UpcomingItem = ({ title, desc, image }) => (
  <TouchableOpacity onPress={() => navigate('Detail', { title, desc, image })}>
    <View style={{ flexDirection: 'row', marginVertical: rPadding }}>
      <Image source={{ uri: image }} style={{ width: 120, height: 140, borderRadius: 10 }} />
      <View style={{ marginLeft: rPadding, flex: 1, justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{title}</Text>
        <Text>{desc}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="heart" size={20} style={{ marginRight: rPadding - 10 }} color={secondColor} />
            <Text style={{ color: '#aaa' }}>89 %</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: rPadding }}>
            <Icon name="chat-outline" size={20} style={{ marginRight: rPadding - 10 }} color='orange' />
            <Text style={{ color: '#aaa' }}>8k</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

const Upcomming = () => (
  upCommingMovies.map((item, index) => (
    <UpcomingItem key={index} title={item.title} desc={item.description} image={item.image} />
  ))
)

const Home = () => {

  return (
    <ScrollView>
      <View style={{ padding: rPadding, backgroundColor: bgColor, flex: 1, }}>
        <Find />
        <SearchFilter />
        <Menu />
        <Title value="Recomended" />
        <Recomended />
        <Title value="Upcomming Movies" />
        <Upcomming />
      </View>
    </ScrollView>
  )

};

export default Home;