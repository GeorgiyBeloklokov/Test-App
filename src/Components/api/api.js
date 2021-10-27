import axios from "axios";


export const userAPI = {

    savePhotos(imageCustom) {
        const formData = new FormData();
        formData.append("image", imageCustom);
        return axios.put(`gs://question-editor-ba3f9.appspot.com/images`, formData,);
    }
}