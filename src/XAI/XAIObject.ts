
import XUtils from "../XUtils"
import XData from "../XData"
import XObject, { IXObjectData } from "../XObject"
import * as _XC from "../XConst"

// import _xuiobject_basic_nano_commands from "./XUINanoCommands"
const reservedWords = { _children:"child objects" }



export class XAIObject extends XObject {
    [k:string]: string | null | [] | undefined | Function | boolean | {}
    _ignore: {[k:string]:string}
    


    constructor(data, defaults) {
        super(data,defaults,true)
        this._ignore = reservedWords;
        
        //this._base_display = "block"

        if (data) {
            if (data.hasOwnProperty("_ignore")) {
                this._ignore = XUtils.createIgnoreList(data["_ignore"],reservedWords)
            }
            this.parse(data, this._ignore);
        }

        // this.addNanoCommandPack(_xuiobject_basic_nano_commands)
    }

    /**
     * Dispose all object memory (destructor)
     */
     async dispose(){
        this._children = null
    }

    /**
     * occurs on Xpell.init
     * @override 
     */
    init() {
        
    }


    // parse(data, ignore:{[k:string]:string} = reservedWords) {
    //     let cdata = Object.keys(data);
    //     cdata.forEach(field => {
            
    //         if (!ignore.hasOwnProperty(field) && data.hasOwnProperty(field)) {
    //             this[field] = data[field];
    //         }
    //     });
    // }

    

    
    append(xObject:XAIObject | IXObjectData | any) {
        this._children.push(<XObject>xObject)
        
    }

    
    
    
    
    
   


    /**
     * triggers from Xpell main engine onFrame
     * @param {int} frameNumber 
     * 
     * object that extends XUIObject can override this method and call super.onFrame
     * to bubble the event to child objects 
     */
    async onFrame(frameNumber){
      
        
        super.onFrame(frameNumber)
        //console.log(this._id + " frame " + frame_number)
    }
}

export default XAIObject