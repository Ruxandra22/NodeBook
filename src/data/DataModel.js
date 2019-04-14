import ObservableModel from "./ObservableModel";

const URL = ""; // THE URL TO GET THE API
const httpOptions = {
  headers: { "Key": "YOUR_API_KEY" }
};

class DataModel extends ObservableModel {
  constructor() {
    super();
  }

  // example of fetch method
  getAllTeachers() {
    return fetch(URL, httpOptions).then(this.processResponse);
  }

  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }
}

// Export an instance of DataModel
const modelInstance = new DataModel();
export default modelInstance;
