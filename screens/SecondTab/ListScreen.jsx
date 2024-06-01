import React, {useEffect} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {useSelector} from "react-redux";
import {useGetPostsQuery} from "../../store/slices/posts";
import PostsRow from "../../components/Posts/PostsRow";

function ListScreen() {
    // const {data: posts, isLoading} = useGetPostsQuery()
    const {posts} = useSelector(state => state.postsReducer)
    if (!posts || posts.length === 0) return <Text>No posts loaded!</Text>

    return <View style={styles.rootContainer}>
        <Text style={styles.heading}>Tap post to view details</Text>
        <FlatList
            data={posts}
            renderItem={({item}) => {
                return <PostsRow post={item} />
            }}
            keyExtractor={item => item.id}
            style={styles.list}
        />
    </View>
}

export default ListScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        gap: 20
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    }
})