import React from 'react'
import video13 from '../Css videos/Css1.mp4'
import video14 from '../Css videos/Css2.mp4'
import video15 from '../Css videos/Css3.mp4'
import video16 from '../Css videos/Css4.mp4'
import video17 from '../Css videos/Css5.mp4'
import video18 from '../Css videos/Css6.mp4'


const New = () => {
  return (
    <>
        <div className="container-fluid youtube-container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video class="video" controls autoplay muted
                            src={video13}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoplay muted
                            src={video14}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoplay muted
                            src={video15}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoplay muted
                            src={video16}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoplay muted
                            src={video17}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoplay muted
                            src={video18}></video>
                    </div>
                </div>

            </div>

    </>
  )
}

export default New;