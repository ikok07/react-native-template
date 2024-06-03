import {StyleSheet, Text, View} from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import {useDispatch, useSelector} from "react-redux";
import {togglePost} from "../../store/slices/posts";
import {useCreatePostMutation} from "../../store/slices/posts";

export default function PostDetails ({route}) {
    const post = route.params.post
    const dispatch = useDispatch()
    const [createPost, {data, status, isLoading, error}] = useCreatePostMutation()
    const {selectedItems} = useSelector(state => state.postsReducer)
    const selected = selectedItems.findIndex(i => i.id === post?.id) >= 0
    function selectPostHandler() {
        dispatch(togglePost(post))
    }

    function savePostHandler() {
        createPost(post)
    }

    return <View style={styles.container}>
        <Text>Title: {post.title}</Text>
        <Text>Body: {post.body}</Text>
        <PrimaryButton style={{backgroundColor: selected ? "green" : "gray"}} onPress={selectPostHandler}>{selected ? "Deselect" : "Select"}</PrimaryButton>
        <PrimaryButton onPress={savePostHandler} isLoading={isLoading}>Save post</PrimaryButton>
        <Text>Save status: {status}</Text>
        <Text>Response data: {JSON.stringify(data)}</Text>
        {error && <Text>Error: {JSON.stringify(error)}</Text>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        gap: 20
    }
})