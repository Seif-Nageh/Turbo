import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("global", () => {
  let loadingScreen = false;
  const websiteLink = "https://back-aide.quetech.net/";
  const globalApi = `${websiteLink}api/`;
  const user = ref({});

  // Api Call Method
  async function apiCallMethod(
    apiEndPoint,
    method = "get",
    data = {},
    headers = {}
  ) {
    let finalRes = [];
    await axios({
      url: `${globalApi}${apiEndPoint}`,
      method: method,
      data: data,
      headers: headers,
    })
      .then((response) => {
        finalRes = response.data;
      })
      .catch((error) => {
        finalRes = error;
      });
    return finalRes;
  }

  return { loadingScreen, user, websiteLink, globalApi, apiCallMethod };
});
