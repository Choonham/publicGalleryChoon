import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, StyleSheet} from 'react-native';
import PostCard from '../components/PostCard';
import events from '../lib/events';

const PostScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {post} = route.params;

  useEffect(() => {
    const handler = ({description}) => {
      navigation.setParams({post: {...post, description}});
    };
    events.addListener('updatePost', handler);
    return () => {
      events.removeListener('updatePost', handler);
    };
  }, [post, navigation]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <PostCard
        user={post.user}
        photoURL={post.photoURL}
        description={post.description}
        createdAt={post.createAt}
        id={post.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
  contentContainer: {
    paddingBottom: 40,
  },
});

export default PostScreen;
