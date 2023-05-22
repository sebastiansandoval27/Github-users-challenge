import axios from 'axios';

type BaseURL = 'github' | 'local';

const baseURLs = {
  github: 'https://api.github.com',
  local: 'http://localhost:3000',
};

const githubAPI = (baseURLType: BaseURL) => axios.create({
  baseURL: baseURLType ? baseURLs[baseURLType] : baseURLs.github,
});

export default githubAPI;