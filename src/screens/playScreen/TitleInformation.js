import { View, Text, StyleSheet, ScrollView, Image, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import ShowMore from './ShowMore';


const TitleInformation = () => {
  const [showMore, setShowMore] = useState(false);

  const eps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  const DATA = [{ image: 'https://pic.bstarstatic.com/ogv/cc498a980f26cd699f82b63e8cbe463872378f6d.jpg@720w_405h_1e_1c_1f.webp', title: 'ONE PIECE', view: '1.3B Views', genre: 'Adventure / Action' },
  { image: 'https://pic.bstarstatic.com/ogv/64cbeb2058145f1eb1ec575f4ef7ec86a05531bc.png@720w_405h_1e_1c_1f.webp', title: 'Naruto Shippuden', view: '474.6M Views', genre: 'Adventure / Action' },
  { image: 'https://pic.bstarstatic.com/ogv/6638e4ada4fc056eaed63f060ec7cb4ec71e3ee8.png@720w_405h_1e_1c_1f.webp', title: 'Bleach: Thousand year blood war', view: '8.3M Views', genre: 'Supernatural / Action' },
  { image: 'https://pic.bstarstatic.com/ogv/bb773a7dd56520ac4b27a9f7feaf4f3d5dda8f9f.png@720w_405h_1e_1c_1f.webp', title: 'Boruto: Naruto next generations', view: '294.0M Views', genre: 'Adventure / Action' },
  { image: 'https://pic.bstarstatic.com/ogv/c453cd4484ad66daae05366b816a9fda4e0c370d.png@720w_405h_1e_1c_1f.webp', title: 'Naruto', view: '162.3M Views', genre: 'Adventure / Action' },
  { image: 'https://pic.bstarstatic.com/ogv/ddd82d7eead64fea113c3c5828afc16c4de875e1.png@720w_405h_1e_1c_1f.webp', title: 'SPY×FAMILY', view: '132.6M Views', genre: 'Adventure / Action' },
  { image: 'https://pic.bstarstatic.com/ogv/4fe49be820fab9a3a80abea89595dfa2e39ba407.jpg@720w_405h_1e_1c_1f.webp', title: 'Bleach', view: '67.2M Views', genre: 'Supernatural / Action' },
  { image: 'https://pic.bstarstatic.com/ogv/d1e0dde4547db281a58ec217435b3a6cf65bd9ee.jpg@720w_405h_1e_1c_1f.webp', title: 'Eminence Shadow', view: '8.7M Views', genre: 'Supernatural / Action' },
  ];

  const topFilm = [
    {
      image:
        "https://pic.bstarstatic.com/ogv/c39ea1bd938f0996ad3297839ebad75e1b61200a.jpg@348w_464h_1e_1c_1f.webp",
      filmName: "One Piece",
      rank: 1,
      view: '1.3B Views',
      genre: 'Adventure / Action'
    },
    {
      image:
        "https://pic6.iqiyipic.com/image/20210502/e8/51/a_100457958_m_601_zh-CN_m2_260_360.webp",
      filmName: "BORUTO-NARUTO NEXT GENERATIONS",
      rank: 2,
      view: '294.0M Views',
      genre: 'Adventure / Action'
    },
    {
      image:
        "https://pic.bstarstatic.com/ogv/c4edb8de5a3c507024d87480df50fd97f043911d.jpg@348w_464h_1e_1c_1f.webp",
      filmName: "Naruto",
      rank: 3,
      view: '162.3M Views',
      genre: 'Adventure / Action'
    },
    {
      image:
        "https://pic.bstarstatic.com/ogv/e063ec98188ba56aa5ce58d16156385bca83cd9b.png@348w_464h_1e_1c_1f.webp",
      filmName: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      rank: 4,
      view: '111.5M Views',
      genre: 'Supernatural / Action'
    },
    {
      image:
        "https://pic.bstarstatic.com/ogv/7a4e667cba6f3fe3deb4ddb758cfea41adec7e1c.png@348w_464h_1e_1c_1f.webp",
      filmName: "Dragon Ball Super",
      rank: 5,
      view: '100M Views',
      genre: 'Supernatural / Action'
    },
    {
      image:
        "https://pic2.iqiyipic.com/image/20201031/64/01/a_100426612_m_601_en_260_360.webp",
      filmName: "Haikyu!!TO THE TOP",
      rank: 6,
      view: '97.2M Views',
      genre: 'Sport / School'
    },
    {
      image:
        "https://pic5.iqiyipic.com/image/20210629/0d/8d/a_100455595_m_601_zh-CN_m1_260_360.webp",
      filmName: "Pretty Guardian Sailor Moon Crystal",
      rank: 7,
      view: '69.1M Views',
      genre: 'Adventure / Action'
    },
    {
      image:
        "https://pic1.iqiyipic.com/image/20201210/e4/77/a_100425585_m_601_zh-CN_m4_260_360.webp",
      filmName: "Haikyu!!",
      rank: 8,
      view: '52.8M Views',
      genre: 'Sport / School'
    },
    {
      image:
        "https://pic8.iqiyipic.com/image/20201210/ae/d7/a_100425586_m_601_zh-CN_m4_260_360.webp",
      filmName: "Haikyu!! Second Season",
      rank: 9,
      view: '42.7M Views',
      genre: 'Sport / School'
    },
    {
      image:
        "https://pic4.iqiyipic.com/image/20210121/5f/15/a_100444857_m_601_zh-CN_260_360.webp",
      filmName: "The Legend of Sky Lord",
      rank: 10,
      view: '36.4M Views',
      genre: 'Supernatural / Action'
    },
  ];

  return (
    <ScrollView style={styles.body}>
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

      <View style={styles.titlebar}>
        <Text style={styles.text}>Yuji Itadori is an athletic genius in high school. One day, to save a senior from “the cursed”, he swallows and then absorbs the cursed “Ryomen Sukura’s Finger(s)”. Later, he goes to an institute for sorcerers, as his grandpa’s last word, to help others. Itadori will keep fighting with the curse.</Text>
        {/* <ShowMore showMore={showMore}>
          Yuji Itadori is an athletic genius in high school. One day, to save a senior from “the cursed”, he swallows and then absorbs the cursed “Ryomen Sukura’s Finger(s)”. Later, he goes to an institute for sorcerers, as his grandpa’s last word, to help others. Itadori will keep fighting with the curse.
        </ShowMore> */}
      </View>

      <View style={styles.titlebar}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: 8 }}>
          <Icon name='md-bookmark-outline' size={24} color={'#fff'} />
          <Text style={styles.textbutton}>Favorite</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: 8 }}>
          <Icon name='md-open-outline' size={24} color={'#fff'} />
          <Text style={styles.textbutton}>Share</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: 8 }}>
          <Icon name='ios-download-outline' size={24} color={'#fff'} />
          <Text style={styles.textbutton}>Download</Text>
        </View>
      </View>

      <View style={styles.commentbar}>
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

      <View style={styles.epsbar}>
        <Text style={styles.title}>Episodes</Text>

        <ScrollView style={{ marginVertical: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
          {eps.map((value, index) => {
            return (
              <Pressable
                style={({ pressed }) => [
                  {
                    display: 'flex',
                    borderRadius: 8,
                    backgroundColor: '#2e2f34',
                    paddingHorizontal: 22,
                    paddingVertical: 18,
                    marginRight: 8
                  },
                ]}
                key={index}
              >
                <Text style={styles.textcomment}>
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
            <View style={styles.item}>
              <Image
                source={{ uri: `${item.image}` }}
                style={{
                  borderRadius: 10,
                  width: 230,
                  height: 125,
                }}
              />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemtext}>{item.view}</Text>
              <Text style={styles.itemtext}>{item.genre}</Text>
            </View>
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
              <View style={[styles.item, { flexDirection: 'row' }]} key={index}>
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
                  <Text style={styles.titlerating}>{value.filmName}</Text>

                  <Text style={{fontSize: 18, color: '#f1f1f1', marginLeft: 8, marginTop: 8}}>{value.view}</Text>
                  <Text style={{fontSize: 18, color: '#f1f1f1', marginLeft: 8}}>{value.genre}</Text>
                  <Text style={{fontSize: 18, color: '#f1f1f1', marginLeft: 8}}>Updating...</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  body: {
    // marginTop: 4,
    // marginHorizontal: 8,
  },
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
  rating: {
    fontSize: 18,
    fontWeight: '700',
    color: '#16C60C',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f1f1f1',
    opacity: 0.7,
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