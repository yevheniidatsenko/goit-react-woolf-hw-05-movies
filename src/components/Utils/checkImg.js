import noImg from '../Images/noImg.png';

export const checkImg = img =>
  `${img ? `https://image.tmdb.org/t/p/original/${img}` : `${noImg}`}`;
