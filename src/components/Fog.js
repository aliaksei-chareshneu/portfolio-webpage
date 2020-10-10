import React from 'react'

const Fog = () => {
    return (
        <div id="fog-wrapper" style={{"overflow-x": "hidden", position: "absolute", "max-height": "75vh", height: "60vw", width: "100vw"}}>
            <div id="foglayer_01" className="fog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>
            <div id="foglayer_02" className="fog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>
            <div id="foglayer_03" className="fog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>
        </div>
    )
}

export default Fog