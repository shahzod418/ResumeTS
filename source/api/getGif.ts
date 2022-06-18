import gifs from '../../_data/projects/gifs';

const getGif = (id) => gifs.find((gif) => gif.id === id).gif;

export default getGif;
