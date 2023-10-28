const axios = require('axios')

const httpClientPlugin = {
  get: async (url) => {
    // usando fetch
    // const resp = await fetch(url);
    // return await resp.json();

    // usando axios
    const {data} = await axios.get(url);
    return data;
  },

  //   post:
  //   put:
  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url, body) => {},
};

module.exports = {
 http: httpClientPlugin,
};
