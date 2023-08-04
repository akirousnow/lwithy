import axios, {AxiosRequestHeaders} from "axios";
const requests = axios.create({
  baseURL: "https://xiaolai0913.oss-cn-shenzhen.aliyuncs.com/%20",
});
export default requests;
