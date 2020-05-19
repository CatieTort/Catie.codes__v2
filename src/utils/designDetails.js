const publicURL = process.env.PUBLIC_URL

export const image = 
[
    {
        multiple: true,
        src: [`${publicURL}/assets/Login_Default.png`, `${publicURL}/assets/login_entered.png`, `${publicURL}/assets/Access.png`],
        altDesc: "login-flow",
        descTitle: "User Login",
        description: "What am I looking at?",
    },
    {
        multiple: true,
        src: [`${publicURL}/assets/forgot_pw_link.png`, `${publicURL}/assets/forgot_pw.png`, `${publicURL}/assets/forgot_pwSuccess.png`],
        altDesc: "forgot-password-flow",
        descTitle: "Forgot Password",
        description: "What am I looking at?",
    },
    {
        multiple: true,
        src: [`${publicURL}/assets/Tags_Default.png`, `${publicURL}/assets/Post_Tags.png`],
        altDesc: "Tag Management",
        descTitle: "Tag Management",
        description: "What am I looking at?",
    },
    {
        multiple: true,
        src: [`${publicURL}/assets/Checkboxes.png`, `${publicURL}/assets/User_details.png`, `${publicURL}/assets/Role_added.png`],
        altDesc: "User Management",
        descTitle: "User Management",
        description: "What am I looking at?",
    },
    {
        multiple: false,
        src: `${publicURL}/assets/Auth_Status.png`,
        altDesc: "Auth Status",
        descTitle: "Authentication Status",
        description: "What am I looking at?",
    },
    {
        multiple: false,
        src: `${publicURL}/assets/Trends.png`,
        altDesc: "Trends",
        descTitle: "Trends",
        description: "What am I looking at?",
    },
    {
        multiple: false,
        src: `${publicURL}/assets/Sponsor_Goals_landing.png`,
        altDesc: "Pro Account Landing Page",
        descTitle: "Pro Account Landing Page - Allow Goals",
        description: "What am I looking at?",
    },
    {
        multiple: false,
        src: `${publicURL}/assets/Social_Detail.png`,
        altDesc: "Social Detail",
        descTitle: "Social Detail",
        description: "What am I looking at?",
    },
]