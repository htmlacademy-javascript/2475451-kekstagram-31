const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Василий',
  'Мария',
  'Денис',
  'Дарья',
  'Максим',
  'Данил',
  'Александр',
  'Полина'
];

const PHOTOS_COUNT = 25;

const getRandomInteger = (minValue, maxValue) => {
  const lower = Math.ceil(Math.min(minValue, maxValue));
  const upper = Math.floor(Math.max(minValue, maxValue));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


let idComment = 0;
const createComment = () => {
  const avatarId = getRandomInteger(1, 6);
  const avatar = `img/avatar-${avatarId}.svg`;

  const messageCount = getRandomInteger(1, 2);
  let message = '';
  for (let i = 1; i <= messageCount; i++){
    message += `${getRandomArrayElement(MESSAGES)} `;
  }

  return {
    'id': ++idComment,
    'avatar': avatar,
    'message': message.trimEnd(),
    'name': getRandomArrayElement(NAMES)
  };
};

let idPhoto = 0;
const createPhoto = () => {
  const url = `photos/${idPhoto}.jpg`;
  const description = '';
  const likes = getRandomInteger(15, 200);

  const comments = [];
  const commentCount = getRandomInteger(0, 30);
  for (let i = 0; i < commentCount; i++){
    comments.push(createComment());
  }

  return {
    'id': ++idPhoto,
    'url': url,
    'description': description,
    'likes': likes,
    'comments': comments
  };
};
const photos = Array.from({length: PHOTOS_COUNT}, createPhoto);
console.log(photos);


