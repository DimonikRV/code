const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const formBtnElem = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');

const getRequest = userName => {
  return fetch(`https://api.github.com/users/${userName}`).then(userData => userData.json());
};

const renderUser = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};
const onClickRequest = () => {
  const userName = inputElem.value;
  getRequest(userName).then(userData => renderUser(userData));
};

formBtnElem.addEventListener('click', onClickRequest);
