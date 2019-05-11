const BASE_URL = "http://redtachyon.eu.pythonanywhere.com/"; // THE URL TO GET THE API

class DataModel {

  constructor() {
    this.myClasses = ["9B", "8A" , "10A" , "10B", "7C"];
    this.categories = ["Learning", "Class Atmosphere" , "Sociometrics"];
  }


// Questionnaires

  setCategory(category){
  }

  getCategories(teacherId){
    const url = `${BASE_URL}/api/teacher/list_categories/` + teacherId;
    console.log("inside getCategories");
    return fetch(url).then(this.processResponse);
}

  //-----------------------------//
  //      My Classes             //
  //-----------------------------//

  setClassName(className){
  }

  getClassNames(teacher_id){
      const url = `${BASE_URL}api/teacher/get_classes/` + teacher_id;
      return fetch(url).then(this.processResponse);
 
  }

  getClassOverviewData(classID) {
    const url = `${BASE_URL}api/teacher/get_experiments/` + classID;
    return fetch(url).then(this.processResponse);
  }


  setClassImage(classImageName){
  }

  getClassImages(){
    let start = ["test"];
    let classImages = this.getClassNames().map((name) =>
         "../images/" + name + ".jpg"
    )  
    console.log("test map in datamodel", classImages);
  }

  getStudents(classID) {
    const url = `${BASE_URL}api/teacher/get_students/` + classID;
    console.log("getStudents");
    return fetch(url).then(this.processResponse);
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
