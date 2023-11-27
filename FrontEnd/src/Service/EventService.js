import axios from 'axios'

const URL = 'http://localhost:8080/event';
const url='/get?page=${currentPage}&size=${itemsPerPage}'
class EventService{

    getAllEvents(){
        return axios.get('http://localhost:8080/event/get')
    }
    getEventPage(){
        return axios.get(URL+url);
    }

    createEvent(eventt){
        return axios.post(URL,eventt)
    }

    getEventById(eId){
        return axios.get(URL + '/' + eId);
    }

    updateEvent(eId, eventt){
        return axios.put(URL + '/' +eId, eventt);
    }

    deleteEvent(eId){
        return axios.delete(URL + '/' + eId);
    }
    deleteAllEvent(eId){
        return axios.delete(URL);
    }
}

export default new EventService();