import React, {Component} from 'react';
import BozenaHandzlik from './BozenaHandzlik.jsx'
import SzczepionkiGrypa from './SzczepionkiGrypa.jsx';


//zmienne konfiguracyjne sliding w lewo
const SLIDE_INTERVAL_MS = 3000;

class AnnouncementList extends Component{
    constructor(props){
        super(props)

        this.state = {
            styleConfig: {   
                transition: 'right 1.5s',
                right:'1920px'
            }
        }
    }

    componentDidMount(){
        
        // this.slideListIntervalID = setTimeout(()=>{
        //     this.setState({styleConfig: {transition: 'right 1.5s',right:`${window.screen.width}px`}},
        //      ()=> {console.log(this.state.styleConfig)})
        // },SLIDE_INTERVAL_MS)
    }

    componentWillUnmount(){

        clearTimeout(this.slideListIntervalID);
    }

    render(){
        console.log(this.state.styleConfig)
        return (
            <section className="mainListContainer">
                <ul className="mainList" style={this.state.styleConfig}>
                    <BozenaHandzlik/>
                    <SzczepionkiGrypa/>
                </ul>
            </section>
            
        )
    }
}

export default AnnouncementList;


// const AnnouncementList = (props) => {

//     return (
//         <BozenaHandzlik/>
//     )
    
// }

// export default AnnouncementList;