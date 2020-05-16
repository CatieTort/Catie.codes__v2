import React, {useEffect} from 'react'

function PdfViewer(props) {
    let viewerRef = React.createRef();
    let backend = new props.backend();

    useEffect(() => {
        const { src } = props;
        const element = viewerRef.current;
     
        backend.init(src, element);
    })

    return (
        <div ref={viewerRef} id='viewer' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', margin: '20px 0px'}}>
        </div>
    )
}

export default PdfViewer