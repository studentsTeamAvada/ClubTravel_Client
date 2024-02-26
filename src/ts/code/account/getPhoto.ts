import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export async function uploadImageToFirebaseStorage(photo: File) {
  try {
    const storageRef = ref(storage, 'images/' + photo.name);
    const snapshot = await uploadBytes(storageRef, photo);
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
  } catch (error) {
    console.error("Failed to upload image to Firebase Storage:", error);
    throw error;
  }
}
