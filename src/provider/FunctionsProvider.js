export const API_URL = "https://api.spacexdata.com/v4/";

function getCapsules() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${API_URL}capsules`, requestOptions);
}

const FunctionsProvider = {
  getCapsules,
};

export default FunctionsProvider;
