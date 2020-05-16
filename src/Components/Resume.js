import React from 'react'
import PdfViewer from './PdfViewer'
import PDFJSBackend from '../backends/pdfjs';


function Resume(){

    return (
        <div className="resume__container" id="resume">
            <PdfViewer 
                backend={PDFJSBackend}
                src={`http://www.catie.codes/static/media/Tortorella_Cathleen.pdf`}
            ></PdfViewer>
          
        </div>
    )
}

export default Resume