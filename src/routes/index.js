import homePage from "../pages/homePage";
import NotfoundPage from "../pages/NotpundPage/NotfoundPage";
import orderPage from "../pages/orderPage";
import ProfilePage from "../pages/ProfilePage";

export const routes = [
    {
        path : '/',
        page: homePage ,
        isShowHeader: true
    } ,
     {
        path : '/profile',
        page: ProfilePage , 
        isShowHeader: true
    } ,
     {
        path : '/order',
        page: orderPage,
        isShowHeader: true
    } ,
     
      {
        path : '*',
        page: NotfoundPage ,
          isShowHeader: false
    } ,

]