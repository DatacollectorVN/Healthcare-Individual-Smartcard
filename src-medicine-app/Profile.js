import React from "react";
// import jisooImage from "../assets/jisoo/avt.jpeg";
// import hoangImage from "../assets/hoang-nguyen/avt.jpg";
// import binhImage from "../assets/binh-ngo/avt.jpg";

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
export default function ProfileUser({navigation, route}) {
    const user = route.params.user
    const existUsers = [
        'Jisoo',
        '<User2>',
        '<User3>'
    ]
    let jisooImage, hoangImage, binhImage
    const existavts = [
        jisooImage = require('../assets/jisoo/avt.jpeg'),
        hoangImage = require('../assets/<User2_avt>'),
        binhImage =  require('../assets/<User3_avt>')
    ]
    const existPhones = [
        '09123456jqk',
        '<phoneUser2>',
        '<phoneUser3>'
    ]
    const existMails = [
        'jisoo@blackpink.blink',
        '<mailUser2>',
        '<mailUser3>'
    ]
    let idx
    idx = existUsers.indexOf(user)

    const existavt = existavts[idx]
    const existPhone = existPhones[idx]
    const existMail = existMails[idx]
    console.log(existavt)
    return (
        
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={existavt} style={styles.image} resizeMode="center"></Image>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{user}</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Singer</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 20 }]}>Email</Text>
                        <Text style={[styles.text, styles.subText]}>{existMail}</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 20 }]}>Phone</Text>
                        <Text style={[styles.text, styles.subText]}>{existPhone}</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 20 }]}>Medical Visits</Text>
                        <Text style={[styles.text, styles.subText]}>5</Text>
                    </View>
                </View>
                <View style={styles.statsContainer2}>
                  <Text style={[styles.text, { fontSize: 20 }]}> Medical Records</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../assets/media1.jpeg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../assets/media2.jpeg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../assets/media3.jpeg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                    </ScrollView>
                </View>
                <Text style={[styles.subText, styles.recent, {color: "#00008b"}]}>Recent Medical Activities</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Visit <Text style={{ fontWeight: "400" }}>Seoul Hospital</Text> with <Text style={{ fontWeight: "400" }}>cosmetology department</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            Visit <Text style={{ fontWeight: "400" }}>Seoul Hospital</Text> with <Text style={{ fontWeight: "400" }}>cosmetology department</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#6495ed"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsContainer2: {
      marginLeft: 10,
      marginTop: 10
  },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#6495ed",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});