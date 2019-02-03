import React, {Component} from 'react';
import BozenaHandzlik from './BozenaHandzlik.jsx'
import SzczepionkiGrypa from './SzczepionkiGrypa.jsx';
import PSP from "./PSP.jsx";


//zmienne konfiguracyjne sliding w lewo
const SLIDE_INTERVAL_MS = 3000;
const SLIDE_DISTANCE = window.screen.width;

//zmienne pomocnicze
let psp_slide_id = 1;

class AnnouncementList extends Component{
    constructor(props){
        super(props)

        this.state = {
            announcements : [
                <BozenaHandzlik/>,
                <SzczepionkiGrypa/>,
                <PSP id={psp_slide_id}/>
            ],
            movedLeft: false
        }

        //buffer array for sliding
        this.reorderedAnnouncements = [];
    }

    copyFirstToLast(array){
        let newArray = array.slice(0);
        newArray.push(newArray[0]);
        return newArray;
    }

    removeFirst(array){
        let newArray = array.slice(0);
        newArray.shift();
        return newArray;
    }

    componentDidMount(){

        this.slideListIntervalID = setInterval(()=>{
            if (!this.state.movedLeft){
                this.reorderedAnnouncements = this.copyFirstToLast(this.state.announcements);
                this.setState({
                    movedLeft : true,
                    announcements : this.reorderedAnnouncements
                }, ()=> {
                    setTimeout(()=>{
                        if(this.state.movedLeft){
                            this.reorderedAnnouncements = this.removeFirst(this.state.announcements);
                            //console.log(this.reorderedAnnouncements);
                            this.setState({
                                announcements : this.reorderedAnnouncements,
                                movedLeft : false
                                
                            });
                        } 
                    },SLIDE_INTERVAL_MS/2);
                });
            }
            
        },SLIDE_INTERVAL_MS);
    }

    render(){
        //console.log("component rendered")
        return (
            <section className="mainListContainer">
                <ul className="mainList"
                    style={this.state.movedLeft === false ? {transition: 'right 0s', right: '0px'} : 
                                                            {transition: 'right 1.5s', right: `${SLIDE_DISTANCE}px`}}
                >
                    {this.state.announcements.map((el,index)=>(
                        <li key={index} className="announcementRoot">
                            {el}
                        </li>))
                    }
                </ul>
            </section>
            
        )
    }

    componentDidUpdate(){
    
    }

    componentWillUnmount(){
        
        clearInterval(this.slideListIntervalID);
    }
}

export default AnnouncementList;
