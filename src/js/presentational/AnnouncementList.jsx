import React, {Component} from 'react';
import BozenaHandzlik from './BozenaHandzlik.jsx'
import SzczepionkiGrypa from './SzczepionkiGrypa.jsx';


//zmienne konfiguracyjne sliding w lewo
const SLIDE_INTERVAL_MS = 3000;

class AnnouncementList extends Component{
    constructor(props){
        super(props)

        this.state = {
            announcements : [
                <BozenaHandzlik/>,
                <SzczepionkiGrypa/>
            ],
            styleConfig: {   
                transition: '0',
                right:'0px'
            }
        }

        this.announcements = [
            <BozenaHandzlik/>,
            <SzczepionkiGrypa/>
        ]

        this.reorderedAnnouncements = [];
    }

    firstToLast(array){
        let newArray = array.slice(0);
        newArray.push(newArray.shift());
        return newArray;
    }

    componentDidMount(){
        
        // this.slideListIntervalID = setInterval(()=>{
        //     this.setState({styleConfig: {transition: 'right 1.5s',right:`${window.screen.width}px`}},
        //         ()=> {
        //                 console.log("at interval " + this.state.styleConfig);
        //                 this.reappendLiTimeoutID = setTimeout(()=>{
        //                     this.setState({styleConfig: {transition: '0',right:`${window.screen.width}px`}},
        //                         ()=> {
        //                             this.announcements = this.firstToLast(this.announcements);
        //                             console.log(this.announcements);
        //                             this.setState({styleConfig: {transition: '0',right:'0px'}});
        //                         }
        //                     )
        //                 },SLIDE_INTERVAL_MS/2);
        //             }
        //     )
        // },SLIDE_INTERVAL_MS);

        // this.slideListIntervalID = setInterval(()=>{
        //     this.setState({styleConfig: {transition: 'right 1.5s',right:`${window.screen.width}px`}},
        //         ()=> {
        //                 console.log("at interval " + this.state.styleConfig);
        //         }
        //     )
        // },SLIDE_INTERVAL_MS);

        this.slideListIntervalID = setInterval(()=>{
            this.reorderedAnnouncements = this.firstToLast(this.state.announcements);
            console.log(this.reorderedAnnouncements);
            this.setState({
                announcements : this.reorderedAnnouncements
            })
        },SLIDE_INTERVAL_MS);
    }

    render(){
        //console.log("component rendered")
        return (
            <section className="mainListContainer">
                <ul className="mainList">
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
        // console.log('component did Update')
        // setTimeout(()=>{
        //     console.log("Timeout Activating")
        //     this.announcements = this.firstToLast(this.announcements);
        // },3000);
    }

    componentWillUnmount(){
        
        clearInterval(this.slideListIntervalID);
    }
}

export default AnnouncementList;
