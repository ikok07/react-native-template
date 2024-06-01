import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../../components/ui/PrimaryButton'
import {useGetPostsQuery} from "../../store/slices/posts";
import {useDispatch, useSelector} from "react-redux";
import {savePosts} from "../../store/slices/posts";

function MainScreen() {
    const [postId, setPostId] = useState()
    const dispatch = useDispatch()
    const {data: posts, isLoading, refetch, isSuccess, isError} = useGetPostsQuery(postId ? postId : undefined)

    async function fetchItemsHandler() {
        setPostId(Math.round(Math.random() * 10))
        refetch()
    }
    useEffect(() => {
        if (!posts) return
        if (posts?.length > 0) {
            dispatch(savePosts(posts))
            return
        }
        dispatch(savePosts([posts]))
    }, [posts]);

    if (isError) return <Text>Error loading posts!</Text>

    if (isLoading) return <Text>Loading...</Text>

    return <View style={styles.rootContainer}>
        <Text>The main app tab screen</Text>
        <PrimaryButton onPress={fetchItemsHandler}>Load random post</PrimaryButton>
        <Text>Fetch status: {isSuccess ? "success" : "fail"}</Text>
    </View>
}

export default MainScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    }
})