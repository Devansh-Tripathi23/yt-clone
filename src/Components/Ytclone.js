import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Components/Ytclone.css'
import logo from '../img/logo.PNG'
import video from '../img/video.PNG'
import bell from '../img/bell.PNG'
import explore from '../img/explore.PNG'
import grid from '../img/grid.PNG'
import history from '../img/history.PNG'
import home from '../img/home.PNG'
import library from '../img/library.PNG'
import liked from '../img/liked video.PNG'
import profile from '../img/profile-pic.png'
import search from '../img/search.PNG'
import show from '../img/show more.PNG'
import subscription from '../img/subscription.PNG'
import watch from '../img/watch-later.PNG'
import your from '../img/your-video.PNG'
import video1 from '../videos/video1.mp4'
import video2 from '../videos/video2.mp4'
import video3 from '../videos/video3.mp4'
import video4 from '../videos/video4.mp4'
import video5 from '../videos/video5.mp4'
import video6 from '../videos/video6.mp4'
import video7 from '../videos/video7.mp4'
import video8 from '../videos/video8.mp4'
import video9 from '../videos/video9.mp4'
import video10 from '../videos/video10.mp4'
import video11 from '../videos/video11.mp4'
import video12 from '../videos/video12.mp4'
import video13 from '../Css videos/Css1.mp4'
import video14 from '../Css videos/Css2.mp4'
import video15 from '../Css videos/Css3.mp4'
import video16 from '../Css videos/Css4.mp4'
import video17 from '../Css videos/Css5.mp4'
import video18 from '../Css videos/Css6.mp4'
import { Height } from '@mui/icons-material'
import { color, style, width } from '@mui/system'

const Ytclone = () => {
    // let White = '#FFFFFF';
    // let[color,setColor]=useState(White)
    // const changeColor =()=>{
    //     let Black = '#000000';
    //     setColor(Black)
    // }
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };


    return (

        <>
            <nav className="navbar" style={{backgroundColor: active ? 'black': 'white' ,color:active?'white':'black'}}>
                <div className="toggle-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={logo} class="logo" alt="" />
                <div className="search-box">
                    <input type="text" class="search-bar" placeholder="search"></input>
                    <button className="search-btn"><img src={search} alt=""/></button>
                </div>
                <div className="user-options">
                    <img src={video} className="icon" alt=""/>
                    <img src={grid} className="icon" alt=""/>
                    <img src={bell} className="icon" alt=""/>
                    <div class="user-dp">
                        <NavLink to='/Signup' target='__self'><img src={profile} alt="" /></NavLink>
                    </div>
                    <i class="fa fa-moon-o fa-2xl" aria-hidden="true" style={{marginLeft:'1rem'}} onClick={handleClick}></i>
                </div>
            </nav>


            <div className="side-bar" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}>
                <NavLink to='/Animal' className="links active" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}><img src={home} alt=""/>home </NavLink>
                <NavLink to='/' href="#" className="links" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}><img src={explore} alt=""/>Channels </NavLink>
                <NavLink to='/' href="#" className="links" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}><img src={subscription} alt=""/>subscription</NavLink>
                <hr className="seperator"/>
                <NavLink to='/' className="links" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}><img src={library} alt=""/>library </NavLink>
                <NavLink to='/' className="links" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}><img src={history} alt=""/>history </NavLink>
                <NavLink to='/' className="links" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}><img src={your} alt=""/>your video </NavLink>
                <NavLink to='/' className="links" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}><img src={watch} alt=""/>watch later </NavLink>
                <NavLink to='/' className="links" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}><img src={liked} alt=""/>like video </NavLink>
                <NavLink to='/' className="links" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}><img src={show} alt=""/>show more</NavLink>
            </div>


            <div className="filters" style={{backgroundColor: active ? 'black': 'white',color:active?'white':'black'}}>
                <NavLink to='/'><button className="filter-options active">all</button></NavLink>
                <NavLink to='/'><button className="filter-options">CSS</button></NavLink>
                <NavLink to='/'><button className="filter-options">web development</button></NavLink>
                <NavLink to='/'><button className="filter-options">python</button></NavLink>
                <NavLink to='/'><button className="filter-options">entertainment</button></NavLink>
                <NavLink to='/'><button className="filter-options">marvel</button></NavLink>
                <NavLink to='/'><button className="filter-options">javascript</button></NavLink>
                <NavLink to='/'><button className="filter-options">artificial intelligence</button></NavLink>
                <NavLink to='/'><button className="filter-options">machine learning</button></NavLink>
                <NavLink to='/'><button className="filter-options">trending</button></NavLink>
            </div>

            <div className="container-fluid youtube-container" style={{backgroundColor: active ? 'black': 'white'}}>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
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
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video7}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video8}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video9}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video10}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video11}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video12}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video class="video" controls autoPlay muted
                            src={video10}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video11}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video12}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video class="video" controls autoPlay muted
                            src={video13}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video14}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video15}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video16}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video17}></video>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src={video18}></video>
                    </div>
                    {/* <div className="col-md-4 col-sm-6 col-xs-12">
                        <video className="video" controls autoPlay muted
                            src='https://www.youtube.com/watch?v=qgpgcRU72Is'></video>
                    </div> */}
                </div>

            </div>
            
        </>

    )
}

export default Ytclone

// let sidebar= document.querySelector(".side-bar");
// let menu= document.querySelector(".toggle-btn");

// menu.addEventListener("click", () =>{
//     sidebar.classList.toggle("sidebar_2");
// }
// )

