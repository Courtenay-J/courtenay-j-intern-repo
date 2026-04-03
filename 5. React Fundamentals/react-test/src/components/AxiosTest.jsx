import axios from "axios";
//import { v4 as uuidv4 } from 'uuid';

//Generate unique ID for request... somehow?
function generateID(){
    var ID = Date.now() + Math.floor(Math.random() * 1000); // Combine timestamp with random number
    return ID;
}

const fetchPage = async () => {
    axios.defaults.baseURL = "https://icanhazdadjoke.com/"; //TODO: change this to http://localhost:
    const url = " ";         //TODO: append user input to URL?
  // Set up request
  try {
    const { data } = await axios.get(url, {     //URL to check
      headers: { Accept: "application/json", }, //Format of response
      //params: { ID: id },                     //Request ID
      signal: AbortSignal.timeout(5000),        // Set a timeout of 5 seconds
    });

    //Display response

    //alert("Request ID: " + data.ID); //Display request ID
    alert(data.joke);
  } catch (error) {
    alert(error.response);
  }
};

//Click button to fetch API
export function AxiosTest(props){
    return (
        <div class="center">
            <button 
                class="bg-blue-900 hover:bg-blue-300 active:bg-blue-600 w-100"
                onClick={fetchPage }>
                    {props.text}
            </button>
        </div>
    )
}
