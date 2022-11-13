import { View, Text, StyleSheet, ScrollView, Image, Pressable, FlatList, TouchableHighlight, Button, TouchableWithoutFeedback, Modal, TextInput, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import ShowMore from './ShowMore';
import SelectionBar from './SelectionBar';


const TitleInformation = () => {
  const [showMore, setShowMore] = useState(false);
  const [current, setCurrent] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const inputRange = [0, 100];
  const outputRange = ["0%", "100%"];
  const animatedHeight = fadeAnim.interpolate({ inputRange, outputRange });

  const eps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  const DATA = [{ image: 'https://pic.bstarstatic.com/ogv/cc498a980f26cd699f82b63e8cbe463872378f6d.jpg@720w_405h_1e_1c_1f.webp', title: 'ONE PIECE', view: '1.3B Views', genre: 'Adventure / Action', episode: 'Up to 1039 eps' },
  { image: 'https://pic.bstarstatic.com/ogv/64cbeb2058145f1eb1ec575f4ef7ec86a05531bc.png@720w_405h_1e_1c_1f.webp', title: 'Naruto Shippuden', view: '474.6M Views', genre: 'Adventure / Action', episode: 'Full 500 eps' },
  { image: 'https://pic.bstarstatic.com/ogv/6638e4ada4fc056eaed63f060ec7cb4ec71e3ee8.png@720w_405h_1e_1c_1f.webp', title: 'Bleach: Thousand year blood war', view: '8.3M Views', genre: 'Supernatural / Action', episode: 'Up to 5 eps' },
  { image: 'https://pic.bstarstatic.com/ogv/bb773a7dd56520ac4b27a9f7feaf4f3d5dda8f9f.png@720w_405h_1e_1c_1f.webp', title: 'Boruto: Naruto next generations', view: '294.0M Views', genre: 'Adventure / Action', episode: 'Up to 274 eps' },
  { image: 'https://pic.bstarstatic.com/ogv/c453cd4484ad66daae05366b816a9fda4e0c370d.png@720w_405h_1e_1c_1f.webp', title: 'Naruto', view: '162.3M Views', genre: 'Adventure / Action', episode: 'Full 220 eps' },
  { image: 'https://pic.bstarstatic.com/ogv/ddd82d7eead64fea113c3c5828afc16c4de875e1.png@720w_405h_1e_1c_1f.webp', title: 'SPY×FAMILY', view: '132.6M Views', genre: 'Adventure / Action', episode: 'Up to 18 eps' },
  { image: 'https://pic.bstarstatic.com/ogv/4fe49be820fab9a3a80abea89595dfa2e39ba407.jpg@720w_405h_1e_1c_1f.webp', title: 'Bleach', view: '67.2M Views', genre: 'Supernatural / Action', episode: 'Full 366 eps' },
  { image: 'https://pic.bstarstatic.com/ogv/d1e0dde4547db281a58ec217435b3a6cf65bd9ee.jpg@720w_405h_1e_1c_1f.webp', title: 'Eminence Shadow', view: '8.7M Views', genre: 'Supernatural / Action', episode: 'Up to 6 eps' },
  ];

  const topFilm = [
    {
      image:
        "https://pic.bstarstatic.com/ogv/c39ea1bd938f0996ad3297839ebad75e1b61200a.jpg@348w_464h_1e_1c_1f.webp",
      filmName: "One Piece",
      rank: 1,
      view: '1.3B Views',
      genre: 'Adventure / Action',
      episode: 'Up to 1039 eps'
    },
    {
      image:
        "https://pic6.iqiyipic.com/image/20210502/e8/51/a_100457958_m_601_zh-CN_m2_260_360.webp",
      filmName: "BORUTO-NARUTO NEXT GENERATIONS",
      rank: 2,
      view: '294.0M Views',
      genre: 'Adventure / Action',
      episode: 'Up to 274 eps'
    },
    {
      image:
        "https://pic.bstarstatic.com/ogv/c4edb8de5a3c507024d87480df50fd97f043911d.jpg@348w_464h_1e_1c_1f.webp",
      filmName: "Naruto",
      rank: 3,
      view: '162.3M Views',
      genre: 'Adventure / Action',
      episode: 'Full 500 eps'
    },
    {
      image:
        "https://pic.bstarstatic.com/ogv/e063ec98188ba56aa5ce58d16156385bca83cd9b.png@348w_464h_1e_1c_1f.webp",
      filmName: "Demon Slayer: Kimetsu no Yaiba",
      rank: 4,
      view: '111.5M Views',
      genre: 'Supernatural / Action',
      episode: 'Full 26 eps'
    },
    {
      image:
        "https://pic.bstarstatic.com/ogv/7a4e667cba6f3fe3deb4ddb758cfea41adec7e1c.png@348w_464h_1e_1c_1f.webp",
      filmName: "Dragon Ball Super",
      rank: 5,
      view: '100M Views',
      genre: 'Supernatural / Action',
      episode: 'Full 131 eps'
    },
    {
      image:
        "https://pic2.iqiyipic.com/image/20201031/64/01/a_100426612_m_601_en_260_360.webp",
      filmName: "Haikyu!!TO THE TOP",
      rank: 6,
      view: '97.2M Views',
      genre: 'Sport / School',
      episode: 'Full 13 eps'
    },
    {
      image:
        "https://pic5.iqiyipic.com/image/20210629/0d/8d/a_100455595_m_601_zh-CN_m1_260_360.webp",
      filmName: "Pretty Guardian Sailor Moon Crystal",
      rank: 7,
      view: '69.1M Views',
      genre: 'Adventure / Action',
      episode: 'Full 39 eps'
    },
    {
      image:
        "https://pic1.iqiyipic.com/image/20201210/e4/77/a_100425585_m_601_zh-CN_m4_260_360.webp",
      filmName: "Haikyu!!",
      rank: 8,
      view: '52.8M Views',
      genre: 'Sport / School',
      episode: 'Full 25 eps'
    },
    {
      image:
        "https://pic8.iqiyipic.com/image/20201210/ae/d7/a_100425586_m_601_zh-CN_m4_260_360.webp",
      filmName: "Haikyu!! Second Season",
      rank: 9,
      view: '42.7M Views',
      genre: 'Sport / School',
      episode: 'Full 25 eps'
    },
    {
      image:
        "https://pic4.iqiyipic.com/image/20210121/5f/15/a_100444857_m_601_zh-CN_260_360.webp",
      filmName: "The Legend of Sky Lord",
      rank: 10,
      view: '36.4M Views',
      genre: 'Supernatural / Action',
      episode: 'Up to 134 eps'
    },
  ];

  const commentList = [{ image: 'https://drive.google.com/drive/u/1/folders/1WWrgq1z_bgaLnXZANJC2J_6wxH5UpBWM', name: 'Pháp Nguyễn', timeComment: '2 days ago', content: 'Tập phim khá cuốn <3', like: '3', response: '' },
  { image: 'https://img7.iqiyipic.com/passport/20220817/49/8e/passport_34024722240_166070254580085_130_130.jpg', name: 'I found you🙂', timeComment: '3 days ago', content: 'I can\'t play the vid because there\'s a join vip🙄', like: '3', response: '3' },
  { image: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/312885762_104043855845073_8132235754234723262_n.jpg?stp=c15.0.160.160a_dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=-sitfQ_3AekAX_9ZMf4&_nc_oc=AQn55HEqnAWc_lOBdV2teI0bmI-o2ZZS-nG3J0jDzAk8gHlqmt5yEMaGGEpxr_EyzuU&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCjVC7kycozwBbij3D1S4d9PM3A4nuaDSDB_hSp1aEi0w&oe=63759FAB', name: 'Bad_Man', timeComment: '1 month(s)', content: 'very annoying ads right', like: '3', response: '1' },
  { image: '', name: 'Khang sama', timeComment: '2 month(s)', content: 'very annoying ads right', like: '3', response: '5' },
  { image: '', name: 'ethananimelover78', timeComment: '2022-06-28', content: 'so good', like: '3', response: '4' },
  ];

  const slideIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 300,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300
    }).start();
  };

  return (
    <>
      <ScrollView style={{ position: 'relative' }}>

        <View style={styles.titlebar}>
          <Text style={styles.title}>JUJUTSU KAISEN</Text>
          <Icon name='chevron-forward' size={24} color={'#f1f1f1'} />
          <Text style={styles.titleEps}>Eps 1</Text>
        </View>

        <View style={styles.titlebar}>
          <Icon style={styles.icon} name='ios-star' size={18} color={'#16C60C'} />
          <Text style={styles.rating}>9.3</Text>
          <Icon name='chevron-forward' size={18} color={'#16C60C'} />
          <Text style={{ color: '#808080', fontSize: 18 }}> | </Text>
          <Text style={styles.text}>2020</Text>

          <Text style={{ color: '#808080', fontSize: 18 }}> | </Text>
          <View style={styles.holder}>
            <Text style={styles.text}>C13</Text>
          </View>

          <Text style={{ color: '#808080', fontSize: 18 }}> | </Text>
          <View style={styles.holder}>
            <Text style={styles.text}>Japan</Text>
          </View>

          <Text style={{ color: '#808080', fontSize: 18 }}> | </Text>
          <View style={styles.holder}>
            <Text style={styles.text}>Adventure</Text>
          </View>
        </View>

        <View style={styles.titlebar}>
          <Text style={styles.text}>100.3M Views</Text>
        </View>

        <TouchableWithoutFeedback onPress={() => setShowMore(true)} touchSoundDisabled={true}>
          <View style={[styles.titlebar, { marginBottom: showMore ? 20 : 0, }]}>
            <LinearGradient colors={['rgba(15, 15, 15, 0)', 'rgba(15, 15, 15, 1)']}
              start={{ x: -1, y: 0 }}
              style={[{
                position: 'absolute',
                ...(showMore ? { left: -30 } : { right: 0 }),
                bottom: showMore ? -26 : -1,
                paddingLeft: 22,
                zIndex: 1
              }]}>
              <Pressable
                style={{ backgroundColor: '#0f0f0f', paddingLeft: 8 }}
                onPress={() => setShowMore(!showMore)}
                hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
              >
                <Text style={{ fontSize: 18, color: '#fff', fontWeight: '700' }}
                >
                  {showMore ? 'Show less' : 'Show more'}
                </Text>
              </Pressable>
            </LinearGradient>

            <ShowMore showMore={showMore}>
              Yuji Itadori is an athletic genius in high school. One day, to save a senior from “the cursed”, he swallows and then absorbs the cursed “Ryomen Sukura’s Finger(s)”. Later, he goes to an institute for sorcerers, as his grandpa’s last word, to help others. Itadori will keep fighting with the curse.
            </ShowMore>
          </View>

        </TouchableWithoutFeedback>

        <ScrollView horizontal style={[styles.selectionbar]}>
          <TouchableHighlight
            onPress={() => { }}
            activeOpacity={1}
            underlayColor="#3b3c42"
            style={styles.button}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='md-bookmark-outline' size={24} color={'#fff'} />
              <Text style={styles.textbutton}>Favorite</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => { }}
            activeOpacity={1}
            underlayColor="#3b3c42"
            style={styles.button}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='md-open-outline' size={24} color={'#fff'} />
              <Text style={styles.textbutton}>Share</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => { }}
            activeOpacity={1}
            underlayColor="#3b3c42"
            style={styles.button}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='ios-download-outline' size={24} color={'#fff'} />
              <Text style={styles.textbutton}>Download</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => { }}
            activeOpacity={1}
            underlayColor="#3b3c42"
            style={styles.button}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='ios-cut-outline' size={24} color={'#fff'} />
              <Text style={styles.textbutton}>Make highlight</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>

        <TouchableHighlight
          onPress={slideIn}
          activeOpacity={1}
          underlayColor='#3b3c42'
          style={styles.commentbar}
        >
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#f1f1f1', marginRight: 8 }}>Comments</Text>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#f1f1f1', opacity: 0.7 }}>5</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{ uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/277856363_708039440336369_7510005833701091522_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=IX4nMKrsAScAX9D1Lvu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdReeH0GmMp6JXn_Fd7RfRU4K_3tiZ9HmHxKVZOC-I2Jfg&oe=639279AD" }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    marginRight: 8
                  }}
                />
                <Text style={styles.textcomment}>Chúc mọi người ngày mới zui zẻ</Text>
              </View>

              <Icon
                name='ios-chevron-down-outline'
                size={24}
                color={'#f1f1f1'}
              />

            </View>
          </View>
        </TouchableHighlight>

        <View style={styles.epsbar}>
          <Text style={styles.title}>Episodes</Text>

          <ScrollView style={{ marginVertical: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
            {eps.map((value, index) => {
              return (
                <Pressable
                  onPress={() => { setCurrent(value) }}
                  style={({ pressed }) => [
                    {
                      display: 'flex',
                      borderRadius: 8,
                      backgroundColor: '#2e2f34',
                      paddingHorizontal: 22,
                      paddingVertical: 18,
                      marginRight: 8
                    },
                    {
                      backgroundColor: pressed
                        ? '#3b3c42'
                        : '#2e2f34'
                    }
                  ]}
                  key={index}
                >
                  <Text style={[
                    styles.textcomment,
                    {
                      color: current === (index + 1)
                        ? '#16C60C'
                        : '#f1f1f1'
                    }
                  ]}>
                    {value}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        <View style={{ marginTop: 8 }}>
          <Text style={[styles.title, { marginHorizontal: 8 }]}>Recommend</Text>

          <FlatList
            horizontal
            keyExtractor={(item, index) => index.toString()}
            data={DATA}
            renderItem={({ item }) => (
              <Pressable style={({ pressed }) => [styles.item, {
                backgroundColor: pressed
                    ? '#2e2f34'
                    : '#0f0f0f'
              }, {borderRadius: 10}]}>
                <Image
                  source={{ uri: `${item.image}` }}
                  style={{
                    borderRadius: 10,
                    width: 230,
                    height: 125,
                  }}
                />
                <Text style={styles.itemTitle} numberOfLines={1}>{((item.title).length > 27) ?
                  (((item.title).substring(0, 27 - 3)) + '...') :
                  item.title}</Text>
                <Text style={styles.itemtext}>{item.view}</Text>
                <Text style={styles.itemtext}>{item.genre}</Text>
                <Text style={styles.itemtext}>{item.episode}</Text>
              </Pressable>
            )}
            style={{ marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
          />

        </View>

        <View style={[styles.epsbar]}>
          <Text style={styles.title}>Top Anime</Text>

          <View style={{ marginTop: 10 }}>
            {topFilm.map((value, index) => {
              return (
                <Pressable style={({ pressed }) => [styles.item, { flexDirection: 'row', borderRadius: 10 }, {
                  backgroundColor: pressed
                    ? '#2e2f34'
                    : '#0f0f0f'
                }]} key={index}>
                  <Image
                    source={{ uri: `${value.image}` }}
                    style={{
                      borderRadius: 10,
                      width: 160,
                      height: 220,
                    }}
                  />
                  <View>
                    <Text style={[styles.titlerating, { color: '#16C60C' }]}>#{value.rank}</Text>
                    <Text style={[styles.titlerating]}>{((value.filmName).length > 27) ?
                      (((value.filmName).substring(0, 27 - 3)) + '...') :
                      value.filmName}</Text>

                    <Text style={{ fontSize: 18, color: '#f1f1f1', marginLeft: 8, marginTop: 8 }}>{value.view}</Text>
                    <Text style={{ fontSize: 18, color: '#f1f1f1', marginLeft: 8 }}>{value.genre}</Text>
                    <Text style={{ fontSize: 18, color: '#f1f1f1', marginLeft: 8 }}>{value.episode}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <Animated.View
        style={{ backgroundColor: '#0f0f0f', height: animatedHeight }}
      >
        <View>
          <View style={{ paddingHorizontal: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12 }}>
              <Text style={[styles.titleEps, { fontWeight: '700', marginHorizontal: 12 }]}>Comment</Text>
              <TouchableWithoutFeedback
                touchSoundDisabled={true}
                onPress={slideOut}
              >
                <Icon
                  name='md-close-outline'
                  color={'#fff'}
                  size={48}
                />
              </TouchableWithoutFeedback>
            </View>

            <View style={{ flexDirection: 'row', paddingHorizontal: 12, marginBottom: 8 }}>
              <Pressable
                android_disableSound={true}
                style={[styles.buttonModal, { marginRight: 12 }]}
              >
                <Text style={styles.textbutton}>Most prominent</Text>
              </Pressable>

              <Pressable
                android_disableSound={true}
                style={styles.buttonModal}
              >
                <Text style={styles.textbutton}>Latest</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ borderBottomColor: '#2e2f34', borderBottomWidth: 1 }}></View>

          <ScrollView>
            <View style={{ paddingHorizontal: 8, flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/277856363_708039440336369_7510005833701091522_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=IX4nMKrsAScAX9D1Lvu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdReeH0GmMp6JXn_Fd7RfRU4K_3tiZ9HmHxKVZOC-I2Jfg&oe=639279AD" }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  marginHorizontal: 14,
                  marginVertical: 12
                }}
              />

              <TextInput
                style={[styles.itemtext, { fontWeight: '500' }]}
                placeholder="Write your comment..."
                placeholderTextColor="#fff"
                keyboardType="default"
              />
            </View>
            <View style={{ borderBottomColor: '#2e2f34', borderBottomWidth: 1, marginBottom: 12 }}></View>

            {commentList.map((value, index) => (
              <ScrollView key={index}>
                <View key={index} style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Image
                      source={{ uri: value.image }}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 30 / 2,
                        marginHorizontal: 12,
                        top: 5
                      }}
                    />
                    <View>
                      <Text style={[styles.text, { fontSize: 16 }]}>{value.name} • {value.timeComment}</Text>
                      <Text style={[styles.textcomment, { textAlign: 'justify', marginVertical: 4, paddingRight: 44 }]}>{value.content}</Text>

                      <SelectionBar like={value.like}></SelectionBar>

                      {value.response === '' ? console.log('hello') :
                        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 16 , color: '#16C60C'}}>{value.response} responses</Text>
                      }

                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 8, marginHorizontal: 12 }}>
                    <TouchableWithoutFeedback>
                      <Icon name='ellipsis-vertical-sharp' color={'#f1f1f1'} size={16} />
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </ScrollView>
            ))}



          </ScrollView>
        </View>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    margin: 8
  },
  itemTitle: {
    color: '#f1f1f1',
    marginVertical: 8,
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemtext: {
    color: '#f1f1f1',
    fontSize: 16,
  },
  titlebar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 8,
  },
  selectionbar: {
    marginTop: 8,
    marginHorizontal: 4
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f1f1f1',
    marginRight: 4,
  },
  titleEps: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f1f1f1',
  },
  icon: {
    marginRight: 4,
  },
  button: {
    justifyContent: 'center',
    marginVertical: 8,
    backgroundColor: '#2e2f34',
    margin: 4,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  buttonModal: {
    backgroundColor: '#2e2f34',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  rating: {
    fontSize: 18,
    fontWeight: '700',
    color: '#16C60C',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#808080',
    textAlign: 'justify',
  },
  holder: {
    backgroundColor: '#2e2f34',
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  textbutton: {
    fontSize: 18,
    fontWeight: '500',
    color: '#f1f1f1',
    paddingHorizontal: 8,
    textAlign: 'justify'
  },
  commentbar: {
    marginTop: 12,
    marginHorizontal: 8,
    backgroundColor: '#2e2f34',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingTop: 6
  },
  textcomment: {
    fontSize: 16,
    fontWeight: '500',
    color: '#f1f1f1',
  },
  epsbar: {
    marginTop: 12,
    marginHorizontal: 8,
  },
  titlerating: {
    marginLeft: 8,
    textAlign: 'justify',
    fontSize: 22,
    color: '#f1f1f1',
    fontWeight: '700',
  },
})

export default TitleInformation;