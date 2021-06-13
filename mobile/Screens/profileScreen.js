import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { Appbar, Avatar, Button, DataTable, Searchbar, Badge, Provider, Portal, Modal } from 'react-native-paper';

const profileScreen = ({ navigation, route }) => {
    const [reload, setReload] = useState(false)
    const [token, setToken] = useState({})
    const [liste, setListe] = useState([])
    const [copie, setCopie] = useState([])
    const [anomaly, setAnomaly] = useState([])
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white'};

    async function get_data() {
        const res = await axios.get("http://127.0.0.1:5000/get_patients")
        const res1 = await axios.get("http://127.0.0.1:5000/get_anomaly")
        setListe(res.data["data"])
        setCopie(res.data["data"])
        setAnomaly(res1.data["data"])
    }

    useEffect(() => {
        get_data()
        setToken(jwt_decode(route.params))
    }, [reload])


    const changeSearch = e => {
        setCopie(liste.filter(w => w["name"].startsWith(e) || w["last_name"].startsWith(e) || (w["name"] + " " + w["last_name"]).startsWith(e)))
    }

    async function handleAnomaly (e) {
          console.log(e)
          const res = await axios.put(`http://127.0.0.1:5000/update_anomaly/${e}`).then((response)=>console.log(response))    
          console.log(reload)
          setReload(!reload)
    }
    return (
        <Provider>
            <View style={styles.container1}>
                <Appbar.Header style={styles.header}>
                    <Avatar.Image size={40} source={require('../assets/logo.png')} />
                    <Appbar.Content title="iCare" subtitle={"Doctor " + token.lastname + " " + token.name} />
                    <TouchableOpacity
                        onPress={showModal}
                    >
                        <Badge style={{ alignSelf: "center", marginRight: 10 }} size={35}>{anomaly.length}</Badge>
                    </TouchableOpacity>
                    <Button icon="logout" mode="contained" onPress={() => navigation.navigate("Login")} color="#3d7bb8">
                        logout
                </Button>
                </Appbar.Header>

                <Searchbar
                    placeholder="Search"
                    onChangeText={
                        changeSearch
                    }
                />
                {
                    copie.length > 0 &&
                    (
                        <View style={styles.container2}>
                            <DataTable>
                                <DataTable.Header >
                                    <DataTable.Title>Name</DataTable.Title>
                                    <DataTable.Title >Last_name</DataTable.Title>
                                    <DataTable.Title >Room</DataTable.Title>
                                </DataTable.Header>
                                {
                                    copie.map(e => {
                                        return (
                                            <DataTable.Row key={e.patient}>
                                                <DataTable.Cell>{e.name}</DataTable.Cell>
                                                <DataTable.Cell>{e.last_name}</DataTable.Cell>
                                                <DataTable.Cell>{e.room}</DataTable.Cell>
                                            </DataTable.Row>
                                        )
                                    })
                                }
                            </DataTable>
                        </View>
                    )

                }
                {
                    copie.length == 0 &&
                    (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: "bold" }}> No such patient was found !</Text>
                        </View>
                    )
                }
            </View >
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    {
                        anomaly.length > 0 &&
                        (
                            <View style={styles.modal}>
                                <DataTable style={{ backgroundColor: "white"}}>
                                    <DataTable.Header >
                                        <DataTable.Title>Name</DataTable.Title>
                                        <DataTable.Title >Room</DataTable.Title>
                                        <DataTable.Title >Instance</DataTable.Title>
                                        <DataTable.Title >Supervise</DataTable.Title>
                                    </DataTable.Header>
                                    {
                                        anomaly.map(e => {
                                            if(e.show) return (
                                                <DataTable.Row key={e.id}>
                                                    <DataTable.Cell><Text style={styles.small}>{e.name} {e.last_name}</Text></DataTable.Cell>
                                                    <DataTable.Cell ><Text style={styles.small}>{e.room}</Text></DataTable.Cell>
                                                    <DataTable.Cell><Text style={styles.small}>{e.instance}</Text></DataTable.Cell>
                                                    <DataTable.Cell>
                                                        <Button mode="contained" style={styles.small} onPress={()=>handleAnomaly(e.patient)}>
                                                            Confirm
                                                        </Button>
                                                    </DataTable.Cell>
                                                </DataTable.Row>
                                            )
                                        })
                                    }
                                </DataTable>
                            </View>
                        )

                    }
                    {
                        anomaly.length == 0 &&
                        (
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: "bold" }}> No such patient was found !</Text>
                            </View>
                        )
                    }
                </Modal>
            </Portal>
        </Provider>
    )
}

export default profileScreen

const styles = StyleSheet.create({
    container2: {
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: "white",
        borderRadius: 10
    },
    modal: {
        backgroundColor: "#e1e9eb",
    },
    container1: {
        flex: 1,
        backgroundColor: "#e1e9eb"
    },
    header: {
        backgroundColor: '#009ABB'
    },
    small:{
        fontSize:10
    },
});
