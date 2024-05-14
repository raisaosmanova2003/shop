import SiteRoot from "../Pages/site/SiteRoot";
import Home from './../Pages/site/Home/Home';
import Add from './../Pages/admin/Add/Add';
import Error from "../Pages/Error/Error";
import AdminRoot from "../Pages/admin/AdminRoot";
import Products from "../Pages/admin/Products/Products";
import Details from "../Pages/site/Details/Details";
import Shop from "../Pages/site/Shop/Shop";

const ROUTES=[{
     path:"/",
     element:<SiteRoot/>,
     children:[{
          path:"",
          element:<Home/>
     },{
          path:"shop",
          element:<Shop/>
     },
     {
          path:"details/:id",
          element:<Details/>
     },
     {
          path:"*",
          element:<Error/>
     }
]
}, {
     path:"/admin",
     element:<AdminRoot/>,
     children:[{
          path:"",
          element:<Add/>
     },
     {
          path:"products",
          element:<Products/>
     }
]
}

     ]
     export default ROUTES



