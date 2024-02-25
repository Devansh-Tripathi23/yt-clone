import React from 'react'
import video1 from '../videos/video1.mp4'
import video2 from '../videos/video2.mp4'
import video3 from '../videos/video3.mp4'
import video4 from '../videos/video4.mp4'
import video5 from '../videos/video5.mp4'
import video6 from '../videos/video6.mp4'

const Animal = () => {
  return (
    <>
        <div className="container-fluid youtube-container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video class="video" controls autoPlay muted
                            src={video1}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video2}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video3}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video4}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video5}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video6}></video>
                    </div>
                </div>

            
    </div>
    </>
  )
}

export default Animal