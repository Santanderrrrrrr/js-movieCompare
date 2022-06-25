//axios fetch requests for the search and the actual details
const fetchData = async (searchTerm) =>{
    const response = await axios.get("http://www.omdbapi.com", {
        params:{
            apikey: "d4d2e92b",
            s: searchTerm.toLowerCase()
        }
    })
    if(response.data.Response === 'True'){    
        let data = response.data.Search
        console.log(data)
        return data    
        }else{
            console.log('no such movie')
            return []
        } 

}




let leftData;
let rightData;
const onMovieSelect = async (movieID, summary)=>{
    const movieDeets = await axios.get("http://www.omdbapi.com", {
        params:{
            apikey: "d4d2e92b",
            i: movieID.toLowerCase()
        }
    })


    if(movieDeets.status === 200){    
        document.querySelector(`${summary}`).innerHTML = movieTemplate(movieDeets.data)

        if (summary.indexOf('left')>=0) {
            leftData = movieDeets.data;
          } else if (summary.indexOf('right')>=0) {
            rightData = movieDeets.data;
          }
        
          if (leftData || rightData) {
            console.log('still to pick second')
          } 
    }   
    if (leftData && rightData){
        console.log('doing the comparison, now')
        runComparison();
      }
    console.log(movieDeets.data)
    
}