import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, } from 'react-native'
import { rPadding, mainColor, secondColor, back, } from '../config'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { cast } from '../mock'

const TitleScore = ({ title }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ color: '#aaa' }}>UA | Nov 22, 2020</Text>
    </View>
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="heart" size={20} style={{ marginRight: rPadding - 10 }} color={secondColor} />
        <Text style={{ color: '#aaa' }}>89 %</Text>
      </View>
      <Text style={{ color: '#aaa' }}>12,780 votes</Text>
    </View>
  </View>
)

const TimeStudio = () => (

  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: rPadding }}>
    <Text style={{ color: mainColor }}>1hr 43min | Drama, Fantasy</Text>
    <Text>English 2D</Text>
  </View>
)

const Description = ({ desc }) => (
  <View style={{ marginVertical: rPadding }}>
    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Movie Description</Text>
    <Text>{desc}</Text>
  </View>
)

const CastItem = ({ image, name }) => (
  <View style={{ marginRight: rPadding }}>
    <Image source={{ uri: image }} style={{ width: 120, height: 130, borderRadius: 10 }} />
    <Text style={{ marginTop: rPadding, fontWeight: 'bold' }}>{name}</Text>
  </View>
)

const Cast = () => (
  <View style={{ marginVertical: rPadding }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: rPadding, alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Cast</Text>
      <Text style={{ color: secondColor, fontWeight: 'bold' }}>View all</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        cast.map((item, index) => (
          <CastItem key={index} image={item.image} name={item.name} />
        ))
      }
    </ScrollView>
  </View>
)

const Book = () => (
  <View style={{ alignItems: 'center', padding: rPadding + 10 }}>
    <Text style={{ fontSize: 23, color: 'white', fontWeight: 'bold' }}>Book Tickets</Text>
  </View>
)

const Detail = ({ route }) => {
  const { params } = route
  return (
    <View style={{ backgroundColor: mainColor }}>
      <View style={{ position: 'absolute', zIndex: 10, top: rPadding * 2, left: rPadding }}>
        <TouchableOpacity onPress={() => back()}>
          <Icon name="chevron-left" size={40} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ backgroundColor: 'white', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
          {/* <View style={{ height: 250, width: '100%', backgroundColor: '#aaa', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, }}></View> */}
          <Image source={{ uri: params.image }} style={{ height: 250, width: '100%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
          <View style={{ padding: rPadding, marginVertical: rPadding }}>
            <TitleScore title={params.title} />
            <TimeStudio />
            <Description desc={params.description} />
            <Cast />
          </View>
        </View>

        <Book />
      </ScrollView>
    </View>
  )

}

export default Detail