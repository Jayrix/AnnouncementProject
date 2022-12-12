import React, {Component} from 'react';
import PSP from "./PSP.jsx";
import Geers from "./Geers.jsx";
import CR from "./CR.jsx";
import Podomedis from "./Podomedis.jsx";
import Medea from "./Medea.jsx";
//import CovidInfo from "./CovidInfo.jsx";
import SzczepieniaCovid from "./SzczepieniaCovid.jsx";
import Antiviral from "./Antiviral.jsx";
import DrFiedor from "./DrFiedor.jsx";
import Profilaktyka40plus from "./Profilaktyka40plus.jsx";
import Recepty from "./Recepty.jsx";
import TestNaPrzeciwciala from "./TestNaPrzeciwciala.jsx";
//import TrzeciaSzczepionka from "./TrzeciaSzczepionka.jsx";
import Maseczki from "./Maseczki.jsx";
import WstrzymanieSzczepien from "./WstrzymanieSzczepien.jsx";
//import ProgramSzczepien from "./ProgramSzczepien.jsx";
import Maseczki_Ukraina from "./Maseczki_Ukraina.jsx";
import Rejestracja from "./Rejestracja.jsx";
import CzwartaDawka from './CzwartaDawka.jsx';
//import TestyNaGrype from "./TestyNaGrype.jsx";
import Kardiolog from "./Kardiolog.jsx";
import GabinetNeurologiczny from "./GabinetNeurologiczny.jsx";
import GabinetChirurgiiDzieciecej from "./GabinetChirurgiiDzieciecej.jsx";
//import BozenaHandzlik from "./BozenaHandzlik.jsx";
import PracowniaUSG from "./PracowniaUSG.jsx";
import PoradniaKardiologiczna from "./PoradniaKardiologiczna.jsx";


//zmienne konfiguracyjne sliding w lewo
const SLIDE_INTERVAL_MS = 40000;
const PSP_SLIDE_INTERVAL_MS = 10000;
const GEERS_SLIDE_INTERVAL_MS = 12000;
const FIRST_ANN_REMOVAL_MS = 4000;
const SLIDE_DISTANCE = window.screen.width;

//zmienne pomocnicze
let psp_slide_id;
let psp_array = [];
let geers_slide_id;
let geers_array=[];

//incjalizacja tablic z ogloszeniami złożonymi 
for (psp_slide_id = 1; psp_slide_id < 12; psp_slide_id++){
    psp_array.push(<PSP key={psp_slide_id} id={psp_slide_id} />);
}

for (geers_slide_id = 1; geers_slide_id < 4; geers_slide_id++){
    geers_array.push(<Geers key={geers_slide_id} id={geers_slide_id} />);
}

//console.log(psp_array);

class AnnouncementList extends Component{
    constructor(props){
        super(props)

        this.state = {
            announcements : [
                <PoradniaKardiologiczna/>,
                <GabinetNeurologiczny/>,
                <SzczepieniaCovid/>,
                <WstrzymanieSzczepien/>, 
                <CzwartaDawka/>,
                <Rejestracja/>,
                <Kardiolog/>,
                <PracowniaUSG/>,
                <Maseczki/>,
                <Maseczki_Ukraina/>,
                <TestNaPrzeciwciala/>,
                <Recepty/>,
                <Profilaktyka40plus/>,
                <Antiviral/>,
                <GabinetChirurgiiDzieciecej/>,
                <CzwartaDawka/>,
                <SzczepieniaCovid/>,
                <Maseczki/>,
                <Maseczki_Ukraina/>,
                <Medea/>,
                <DrFiedor/>,
                <Podomedis/>,
                <CR />,
                ...geers_array,
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
            } else if(this.state.announcements[1].type.name === "Geers"){
                this.slideTimeout(GEERS_SLIDE_INTERVAL_MS);
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
