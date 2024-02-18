import $ from "jquery";
import {app} from "./../../modules/firebase"
import { getFirestore, getDoc, doc,  } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export class PullData{
    app: typeof app
    currentUrl: URL
    id : string | null
    auth : any

    constructor(){
        this.app = app;
        this.currentUrl = new URL(window.location.href);
        this.id =  this.currentUrl.searchParams.get("id") || null;



        this.auth = getAuth();


        



        this.init();
    }

    async init(){
        this.addQuery();
        this.getData()
        this.getSing().then(info => console.log(info))
    }

     getSing(){
        return new Promise(resolve => {
            onAuthStateChanged(this.auth, (user) => {
                if(user){
                    resolve(true)
                }else{
                    resolve(false)
                }
            })
        })
    }

    addQuery(){
        this.currentUrl.search = ''
        this.currentUrl.searchParams.append("id", "2xvc7W065aSKXG4o5mw7")
        history.replaceState({}, '', this.currentUrl);
        console.log(this.id)

        


    }

    async getData(){
        const db = getFirestore(this.app);

        const docRef = doc(db, "hotels", String(this.id));
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            console.log("No such document!");
        }
    }


}


