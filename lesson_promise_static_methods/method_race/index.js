const getRandomNumber = (from, to) => {
  return from + Math.random() * (to - from);
};

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(
      () =>
        resolve({
          userData: {
            name: 'Tom',
            age: 17,
          },
          source: url,
        }),
      randomDelay,
    );
  });
const servers = ['https://server.com/us/', 'https://server.com/eu/', 'https://server.com/au/'];
export const getUserASAP = userId => {
  const usersUrls = servers.map(serverUrl => `${serverUrl}/users/${userId}`);
  const requests = usersUrls.map(requestUrl => request(requestUrl));
  return Promise.race(requests);
};
