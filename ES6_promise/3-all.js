import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  // Use Promise.all to handle multiple promises
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      // Log the desired output
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      // Handle any errors
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
