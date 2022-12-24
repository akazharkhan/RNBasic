import { FlatList, StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import Paragraph from '../../components/UI/Paragraph'
import Clickable from '../../components/HOC/Clickable'
import Card from '../../components/UI/Card'

const GetApi = () => {
    const [url, seturl] = useState([])
    const first = useRef(null)
    console.log('first.current', first.current)
    const GetData = async () => {

        let get_import = await fetch('https://jsonplaceholder.typicode.com/photos')
        let data = await get_import.json()
        seturl(data)
    }
    useEffect(() => {
        GetData()
        //  component did mount 
    }, [])
    // useEffect(() => {
    // setLoading(false)     
    //     //  component did update 
    // }, [url])
    // useEffect(() => {
    //   return () => {
    //     seturl()
    //   };
    // //   componentwillunmount
    // }, [])
    return (
        <ViewContainer>

            {/* <Clickable  onPress={GetData()}></Clickable> */}
            <Text>hi</Text>

            <FlatList
                ref={first}
                data={url}
                renderItem={({ item, index }) => {
                    if (index % 2 == 0) {
                        return index.id
                    }
                    return (
                        <Card>
                            <Paragraph style={{ color: "black" }}>{item.id}</Paragraph>
                            <Paragraph style={{ color: "black" }}>{item?.title}</Paragraph>
                            <Image source={{ uri: item?.url }} style={{ width: 400, height: 400, borderWidth: 1 }} />
                        </Card>
                    )
                }}
            />

        </ViewContainer>
    )
}

export default GetApi

const styles = StyleSheet.create({})