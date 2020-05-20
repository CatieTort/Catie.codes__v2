const publicURL = process.env.PUBLIC_URL

export const image = 
[
    {
        multiple: true,
        src: [`${publicURL}/assets/Login_Default.png`, `${publicURL}/assets/login_entered.png`, `${publicURL}/assets/Access.png`],
        altDesc: "login-flow",
        descTitle: "User Login",
        description: "An updated user login flow with a single login and multiple acess options after successful authentication.",
    },
    {
        multiple: true,
        src: [`${publicURL}/assets/forgot_pw_link.png`, `${publicURL}/assets/forgot_pw.png`, `${publicURL}/assets/forgot_pwSuccess.png`],
        altDesc: "forgot-password-flow",
        descTitle: "Forgot Password",
        description: "An updated forgot password flow with improved UI messaging",
    },
    {
        multiple: true,
        src: [`${publicURL}/assets/Tags_Default.png`, `${publicURL}/assets/Post_Tags.png`],
        altDesc: "Tag Management",
        descTitle: "Tag Management",
        description: "Admin Dashboard aggregate and detailed view of social tags being tracked",
    },
    {
        multiple: true,
        src: [`${publicURL}/assets/Checkboxes.png`, `${publicURL}/assets/User_details.png`, `${publicURL}/assets/Role_added.png`],
        altDesc: "User Management",
        descTitle: "User Management",
        description: "Admin Dashboard for creation and maintenance of user access and roles",
    },
    {
        multiple: false,
        src: `${publicURL}/assets/Auth_Status.png`,
        altDesc: "Auth Status",
        descTitle: "Authentication Status",
        description: "Admin Dashoard to track social account authentications",
    },
    {
        multiple: false,
        src: `${publicURL}/assets/Trends.png`,
        altDesc: "Trends",
        descTitle: "Trends",
        description: "Data visualization for social trending data",
    },
    {
        multiple: false,
        src: `${publicURL}/assets/Sponsor_Goals_landing.png`,
        altDesc: "Pro Account Landing Page",
        descTitle: "Pro Account Landing Page - Allow Goals",
        description: "New landing page for set up of Pro Account to confirm promotion of goal setting within the application",
    },
    {
        multiple: false,
        src: `${publicURL}/assets/Social_Detail.png`,
        altDesc: "Social Detail",
        descTitle: "Social Detail",
        description: "Data visualization and dashboard for details from various social networks",
    },
]