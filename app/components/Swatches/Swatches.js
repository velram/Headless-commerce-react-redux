import React, {Component,Fragment} from "react";
import { isNullOrUndefined } from "util";


class Swatches extends Component{

    displayStorageSwatch(storage){
        return(
            <div class="storage-swatches padding5 row margin0 ">
                <div class="col-3 swatchesStorageLabel">
                   Storage Capacity:
                </div>
                <div class="col-9 padding0 storageBox">
                     {storage} 
                </div> 
           </div>
        )
     }
        
    displayColorSwatch(color){
        return(
        <div class="Qty col-12 row margin0 padding5 color-box">
            <div class="col-3 padding0 swatchesColorLabel">Select Color:</div>
            <div class="col-9 col-lg-9 row nopadding margin0 selectColor">
                    {color}
            </div>
        </div>
        )
    }

    render(){
        const colorLists = this.props.colors
        const color = !isNullOrUndefined(colorLists) && Object.entries(colorLists).map(([key,value])=>{
            return (
                <button class="storage-capa margin-left" style={{backgroundColor: value.toString()}}>{key}</button>         
              )
            })

        const storage =  !isNullOrUndefined(this.props.storage) && this.props.storage.length >0 &&
                        this.props.storage.map((storage =>{
                            return(
                                <button class="storage-capa margin-left">{storage}</button>     
                                // <a href="#"><span class="storage-capa margin-left">{storage}</span></a>
                            )
                        }))

        return(
            <div>
               {color!= false && this.displayColorSwatch(color)}
               {storage != false && this.displayStorageSwatch(storage)}
            </div>
        );
    }
}
export default Swatches;