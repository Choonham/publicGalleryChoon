import firestore from '@react-native-firebase/firestore';
const postsCollection = firestore().collection('posts');

export const PAGE_SIZE = 12;
export const createPost = ({user, photoURL, description}) => {
  return postsCollection.add({
    user,
    photoURL,
    description,
    createAt: firestore.FieldValue.serverTimestamp(),
  });
};

export const getPosts = async ({userId, mode, id}) => {
  let query = postsCollection.orderBy('createAt', 'desc').limit(PAGE_SIZE);
  if (userId) {
    query = query.where('user.id', '==', userId);
  }
  if (id) {
    const cursorDoc = await postsCollection.doc(id).get();
    query =
      mode === 'older'
        ? query.startAfter(cursorDoc)
        : query.endBefore(cursorDoc);
  }
  const snapshot = await query.get();
  const posts = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return posts;
};

export const getOlderPosts = async (id, userId) => {
  return getPosts({
    id,
    mode: 'older',
    userId,
  });
};

export const getNewerPosts = async (id, userId) => {
  return getPosts({
    id,
    mode: 'newer',
    userId,
  });
};

export function removePost(id) {
  return postsCollection.doc(id).delete();
}

export function updatePost({id, description}) {
  return postsCollection.doc(id).update({
    description,
  });
}
