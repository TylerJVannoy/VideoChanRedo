// import axios from "axios";

// const KEY = "AIzaSyBN5lAH6urB5MNq0rBsXTYADdaKjjw-E-g";

// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3",
//   params: {
//     part: "snippet",
//     type: "video",
//     maxResults: 4,
//     key: KEY,
//   },
// });

import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 1,
    key: "AIzaSyBa5QzFzNzaolYPk-PriB4Tpu3A34FpKIA",
  },
});
