import axios from 'axios';

let config = {
    api_host: process.env.REACT_APP_API_HOST || 'https://eu-api.contentstack.io',
    cdn_host: process.env.REACT_APP_CDN_HOST || 'https://eu-cdn.contentstack.com',
    env: process.env.REACT_APP_ENV || 'development',
    lang: process.env.REACT_APP_LANG || 'en-us',
};

const ContentStack = () => {
      let instance = axios.create();

    //   instance.interceptors.request.use(config => {
    //     config.headers.post['api_key'] = process.env.REACT_APP_API_KEY;
    //     config.headers.post['access_token'] = process.env.REACT_APP_ACCESS_TOKEN;
    //     return config;
    //   });

      return instance;
};

let instance = ContentStack();

instance.getEntry = (entry, projectId, include) => {
    const project = projectId ? projectId : '';
    const toInclude = include ? `include[]=${include}&` : "";
    return axios.get(config.api_host + '/v3/content_types/' + entry + '/entries/'+project+'?'+ toInclude +'locale=' + config.lang + '&environment=' + config.env, {
        'headers': {
            'api_key': process.env.REACT_APP_API_KEY,
            'access_token': process.env.REACT_APP_ACCESS_TOKEN
        }
    });
  };

export default instance;