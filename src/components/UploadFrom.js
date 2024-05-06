'use client'
import UploadIcon from "@/components/UploadIcon";

export default function UploadForm(){
    function upload(ev){
        ev.preventDefult();
        console.log(ev);
      }
    return(
        <button className="bg-green-400 py-2 px-4 rounded-full inline-flex gap-2 border-2 border-purple-700 cursor-pointer">
          <UploadIcon/>
          <span>Choose file</span>
          <input onChange={upload} type="file" className="hidden"/>
        </button>
    )
}