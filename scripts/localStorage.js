class Storage{

    constructor(){
        this.city=city;
        this.state=state;
        this.defaultState='MA';
        this.defaultCity='Boston';
    }

    getStorageLocation(){

        if(localStorage.getItem("state")===null && localStorage.getItem("city")===null){
            this.state=this.defaultState;
            this.city=this.defaultCity;
        }else{
            this.state=localStorage.getItem("state");
            this.city=localStorage.getItem("city");
            console.log(`Saved location in local storage State:${localStorage.getItem("state")} , City:${localStorage.getItem("city")}`);
        }
        
        return {state:this.state,city:this.city};
    }
    
    //Save location to local storage from values inside change location form.
    setStorageLocation(state,city){
        localStorage.setItem("state",state);
        localStorage.setItem("city",city);
    }


}