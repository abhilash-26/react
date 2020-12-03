import React from 'react';
import './App.css';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
function App() {
  return (
   <div className="app">
     <div className="app-header"> 
     <AddAPhotoOutlinedIcon className="camera"/>
     <img className="app-headerImage"
     src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
     alt="instagram_logo"
     />
     <SearchIcon/>
     <SendIcon/>

     </div>
     <div className="app-body">
     <h1>Hello geeks</h1>
     </div>
     
     <footer className="icn" >
       
       <HomeIcon/>
       <FeaturedVideoIcon/>
       <AddBoxOutlinedIcon/>
       <FavoriteBorderOutlinedIcon/>
       <AccountCircleOutlinedIcon/>
      
       
     </footer>
   </div>
  );
}

export default App;
