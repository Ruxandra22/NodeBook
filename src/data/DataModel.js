const BASE_URL = "https://redtachyon.eu.pythonanywhere.com"; // THE URL TO GET THE API
const httpOptions = {
    headers: { "Authorization": "SKELETON_KEY"}
};


class DataModel {

    constructor() {
        this.myClasses = ["9B", "8A" , "10A" , "10B", "7C"];
        this.categories = ["Learning", "Class Atmosphere" , "Sociometrics"];
    }

    resetDatabase() {
        const url = `${BASE_URL}/api/reset`;
        return fetch(url, httpOptions).then(this.processResponse);
    }

    setCategory(category) {
    }

    getCategories(teacherId) {
        const url = `${BASE_URL}/api/teacher/list_categories/` + teacherId;
        return fetch(url, httpOptions).then(this.processResponse);
    }

    postQuestionnaire(classId, content) {
        const url = `${BASE_URL}/api/teacher/create_experiment/` + classId;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': "SKELETON_KEY",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: content
        }).then(res => {
            return res;
        }).catch(err => err);
    }

    postTemplate(categoryId, content) {
        const url = `${BASE_URL}/api/teacher/save_template/` + categoryId;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': "SKELETON_KEY",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: content
        }).then(res => {
            return res;
        }).catch(err => err);
    }


    getClassNames(teacher_id) {
        const url = `${BASE_URL}/api/teacher/get_classes/` + teacher_id;
        return fetch(url, httpOptions).then(this.processResponse);
    }

    getClassOverviewData(classID) {
        const url = `${BASE_URL}/api/teacher/get_experiments/` + classID;
        return fetch(url ,httpOptions).then(this.processResponse);
    }

    setClassImage(classImageName) {
    }

    getClassImages() {
        let start = ["test"];
        let classImages = this.getClassNames().map((name) =>
            "../images/" + name + ".jpg"
        )
    }

    getStudents(classID) {
        const url = `${BASE_URL}/api/teacher/get_students/` + classID;
        console.log("getStudents");
        return fetch(url,httpOptions).then(this.processResponse);
    }

    getQuestionnaireResults(experimentId){
        const url = `${BASE_URL}/api/teacher/replies_graph/` + experimentId;
        console.log("getQuestionnaireResults");
        return fetch(url,httpOptions).then(this.processResponse);
    }

    createClass(className, description) {
        // for now, the teacher ID is hardcoded
        // will be changed after the authentication feature
        console.log("creating a new class");
        let teacherID = 1;
        const url = `${BASE_URL}/api/teacher/create_class/` + teacherID;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': "SKELETON_KEY",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: className,
                description: description,
            })
        }).then(res => {
            return res;
        }).catch(err => err);
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
