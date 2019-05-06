import ObservableModel from "./ObservableModel";

//http://redtachyon.eu.pythonanywhere.com/api/teacher/get_classes/1
// /api/teacher/get_classes/<teacher_id>
//test with teacher id = 1


const BASE_URL = "http://redtachyon.eu.pythonanywhere.com/"; // THE URL TO GET THE API
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


  getClassNamesTest(teacher_id){
      //return this.myClasses;
      const url = `${BASE_URL}api/teacher/get_classes/` + teacher_id;
      console.log("inside GetClassNamesTest");
        return fetch(url).then(this.processResponse);
 
  }

//test API
getStudents(classID) {
  const url = `${BASE_URL}api/teacher/get_students/` + classID;
  console.log("getStudents");
  return fetch(url).then(this.processResponse);
}


  getClassNames(teacher_id){
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
