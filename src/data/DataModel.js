import ObservableModel from "./ObservableModel";

const URL = ""; // THE URL TO GET THE API
const httpOptions = {
  headers: { "Key": "YOUR_API_KEY" }
};

class DataModel extends ObservableModel {

  constructor() {

    super();
    this.myClasses = ["9B", "8A" , "10A" , "10B", "7C"];
    this.categories = ["Learning", "Class Atmosphere" , "Sociometrics"];

  }

//-----------------------------//
//      Questionnaires         //
//-----------------------------//
setCategory(category){

}

getCategories(){
    return this.categories;
}
//-----------------------------//
//      My Classes             //
//-----------------------------//
  setClassName(className){

  }

  getClassNames(){
      return this.myClasses;
  }

  setClassImage(classImageName){

  }
  getClassImages(){
    let start = ["test"];
    
    let classImages = this.getClassNames().map((name) =>
         "../images/"+name+".jpg"
    )  
    
    console.log("test map in datamodel", classImages);
}
//-----------------------------//
//     Other Stuff             //
//-----------------------------//


  // example of fetch method
  getAllTeachers() {
    return fetch(URL, httpOptions).then(this.processResponse);
  }

  // processResponse(response) {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   throw response;
  // }
}

// Export an instance of DataModel
const modelInstance = new DataModel();
export default modelInstance;
