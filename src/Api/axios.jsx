import axios from "axios";

const create =  axios.create({
  baseURL: "https://fathomless-forest-77755-b0efcb8183c4.herokuapp.com",
});

export default create;