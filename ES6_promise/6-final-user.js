// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create promises for signUpUser and uploadPhoto
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both promises
  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then(results => {
      // Map the results to the desired format
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason.message  // Extract error message
      }));
    });
}
