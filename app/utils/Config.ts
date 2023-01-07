// import dotenv from "dotenv";
// dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@anmol.keynylf.mongodb.net/?retryWrites=true&w=majority`;

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 9001;


const FakeStoreBaseUrl = process.env.REACT_APP_FAKESTORE_API_BASE_URL ? process.env.REACT_APP_FAKESTORE_API_BASE_URL : 'https://fakestoreapi.com/';


export const CONFIG = {

 MONGO: {
    URL: MONGO_URL,
  },

  SERVER: {
    PORT: SERVER_PORT,
  },
  
  URLS: {
    FakeStoreBaseUrl:FakeStoreBaseUrl
  },

  getCurrentToken: () => {
    // const user_str = localStorage.get('loggedInUser') || false;
      // if (user_str) {
      //     const user_details = JSON.parse(user_str);
      //     return user_details.token;
      // }
      return null;
  }
};
