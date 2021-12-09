import axios from "axios";


const getCarsAction = () => async (dispatch)=>{
    
    try{
       const response = await axios.get('http://unfilteredfreedom.com/api/public/api/applied_auction/applied/sell', {
        headers: {
         APP_KEY:"asdljipwiasdlkgsdogjr"
        }}).then((response)=>{
       dispatch({type:"FETCH_CARS_SUCCESS",payload:response.data});
        }); 
    }
    catch(err){
        

    }
}

 

export default getCarsAction;