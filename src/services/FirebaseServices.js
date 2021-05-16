
import db from '../Utils/firebase';

export async function doesUsernameExist(username) {
    const result = await db
      .firestore()
      .collection('users')
      .where('username', '==', username)
      .get();
  
    return result.docs.map((user) => user.data().length > 0);
  }

export async function getUserByUsername(username){
    const result = await db
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();

        return result.docs.map((item) => ({
                ...item.daya(),
                docId: item.id
        }));
}