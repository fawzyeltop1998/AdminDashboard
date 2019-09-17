import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import msgApic from "@/pages/msgApic.vue";
import audioRepoContent from "@/pages/audioRepoContent.vue";
import videoRepoContent from "@/pages/videoRepoContent.vue";
import statics from "@/pages/statics.vue";
import addAccount from "@/pages/addAccount.vue";
import editAccount from "@/pages/editAccount.vue";
import renewAccount from "@/pages/renewAccount.vue";
import deleteAccount from "@/pages/deleteAccount.vue";
import pricePlan from "@/pages/pricePlan.vue";


const routes = [{
        path: "/",
        component: DashboardLayout,
        redirect: "/home",
        children: [{
                path: "home",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path: "users",
                name: "users",
                component: UserProfile,
                children: [{
                        path: "statics",
                        component: statics
                    },
                    {
                        path: "addAccount",
                        component: addAccount
                    },
                    {
                        path: "editAccount",
                        component: editAccount
                    },
                    {
                        path: "renewAccount",
                        component: renewAccount
                    },
                    {
                        path: "deleteAccount",
                        component: deleteAccount
                    }
                ]

            },
            {
                path: "notify",
                name: "Notifications",
                component: Notifications
            },
            {
                path: "communications",
                name: "Communications",
                component: Icons
            },
            {
                path: "settings",
                name: "Settings",
                component: Maps
            },
            {
                path: "pricePlans",
                name: "Price-Plans",
                component: pricePlan
            },
            {
                path: "messages",
                name: "Messages",
                component: msgApic
            },
            {
                // audioVideo
                path: "typography",
                name: "Audio-Video",
                component: Typography,
                children: [{
                        path: "audioRepo",
                        component: audioRepoContent
                    },
                    {
                        path: "videoRepo",
                        component: videoRepoContent
                    }
                ]
            }
        ]
    },
    { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;