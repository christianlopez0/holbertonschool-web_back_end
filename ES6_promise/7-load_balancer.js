export default function loadBalancer(chinaDownload, USDownload) {
    // Use Promise.race to return the value of the promise that resolves first
    return Promise.race([chinaDownload, USDownload]);
  }
  