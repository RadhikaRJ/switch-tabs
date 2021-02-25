import Home from './Home';
import About from './About';
import Profilee from './Profile';
function ShowSelectedPage(props){
    if(props.displayComponent=="Home"){

        return(
            <Home/>
         )
    }
    else if(props.displayComponent=="About"){
        return(
            <About/>
        )
    }
    else if(props.displayComponent=="Profile"){
        return(
            <Profilee/>
        )
    }
    else return(
        <div>Click on one of the three buttons to navigate</div>
    )

   


}

export default ShowSelectedPage;