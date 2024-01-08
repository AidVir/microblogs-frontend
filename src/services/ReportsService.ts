import http from "../http-common";
import authHeader from "../helper/AuthHeader";

const getBlogWordCount = (blogId: number) => {
  return http.get(`/reports/word-count/${blogId}`, {headers: authHeader()});
}

const getMostUsedWordsByUser = (userId: number) => {
  return http.get(`/reports/most-used-words/${userId}`, {headers: authHeader()});
}

const ReportsService = {
  getBlogWordCount,
  getMostUsedWordsByUser,
}

export default ReportsService;