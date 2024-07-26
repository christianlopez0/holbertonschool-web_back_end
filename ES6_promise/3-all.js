import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoResult, userResult] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photoResult.photoUrl} ${userResult.firstName} ${userResult.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
