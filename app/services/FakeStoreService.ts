import { FakeStoreAxios } from "./Axios";
import { FAKESTORE_ENDPOINTS } from "./Endpoints";
import { getHttpService } from "./HttpService";



export class FakeStoreService {
  static httpService = getHttpService(FakeStoreAxios);

  static getProducts = (queryData = {}, config = {}) => {
    return FakeStoreService.httpService.get({url: FAKESTORE_ENDPOINTS.ALL_PRODUCTS, data: queryData, headers: config, cacheData:true});
  };

  // static postUserResponse = (queryData = {}, config = {}) => {
  //   return ConversationService.httpService.post({url:CH_BOT_ENDPOINTS.QUERY, data:queryData,  headers: config});
  // };

 
  // static updateFaqQuestion = (qid: string, queryData = {}, config = {}) => {
  //   return ConversationService.httpService.put({url:CH_BOT_ENDPOINTS.FAQ_QUESTION_DETAIL, data:queryData,  headers: config, pathParams: [qid]});
  // };

  
}

