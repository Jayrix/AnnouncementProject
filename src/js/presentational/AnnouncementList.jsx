import React, {Component} from 'react';
import BozenaHandzlik from './BozenaHandzlik.jsx'
import SzczepionkiGrypa from './SzczepionkiGrypa.jsx';
import PSP from "./PSP.jsx";


//zmienne konfiguracyjne sliding w lewo
const SLIDE_INTERVAL_MS = 60000;
const PSP_SLIDE_INTERVAL_MS = 10000;
const FIRST_ANN_REMOVAL_MS = 4000;
const SLIDE_DISTANCE = window.screen.width;

//zmienne pomocnicze
let psp_slide_id;
let psp_array = [];

//incjalizacja tablicy z ogloszeniami PSP
for (psp_slide_id = 1; psp_slide_id < 12; psp_slide_id++){
    psp_array.push(<PSP key={psp_slide_id} id={psp_slide_id} />);
}

//console.log(psp_array);

class AnnouncementList extends Component{
    constructor(props){
        super(props)

        this.state = {
            announcements : [
                <BozenaHandzlik/>,
                <SzczepionkiGrypa/>,
                ...psp_array
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

    //function responsible for sliding
    slideTimeout(timeout){
        this.slideListTimeoutID = setTimeout(()=>{
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
                    },FIRST_ANN_REMOVAL_MS);
                });
            }
            if (this.state.announcements[1].type.name === "PSP"){
                this.slideTimeout(PSP_SLIDE_INTERVAL_MS);
            } else{
                this.slideTimeout(SLIDE_INTERVAL_MS);
            }
                
        },timeout);
    }

    componentDidMount(){

        this.slideTimeout(SLIDE_INTERVAL_MS);

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
        // if(this.state.announcements[1].type.name === "PSP"){
        //     console.log('teraz PSP');
        // }
    }

    componentWillUnmount(){
        
        clearTimeout(this.slideListTimeoutID);
    }
}

export default AnnouncementList;
