const NotFound = () => import('./views/common/404.vue');
const Login = () => import('./views/common/Login.vue');
const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');
const projectList = () => import('./views/Projectlist.vue');
const ProjectInfo = () => import('./views/Project.vue');
const globalHost = () => import('./views/project/global/Globalhost.vue');
const API = () => import('./views/project/api/API.vue');
const ApiList = () => import('./views/project/api/ApiList.vue');
const ApiListGroup = () => import('./views/project/api/ApiListGroup.vue');
const FestTest = () => import('./views/project/api/FestTest.vue');
const addApi = () => import('./views/project/api/Addapi.vue');
const detail = () => import('./views/project/api/updateApi/ApiForm.vue');
const ApiInfo = () => import('./views/project/api/updateApi/ApiInfo.vue');
const testApi = () => import('./views/project/api/updateApi/TestApi.vue');
const UpdateApi = () => import('./views/project/api/updateApi/UpdateApi.vue');
const ApiDynamic = () => import('./views/project/api/updateApi/ApiDynamic.vue');
const AutomationTest = () => import('./views/project/automation/AutomationTest.vue');
const CaseList = () => import('./views/project/automation/CaseList.vue');
const CaseListGroup = () => import('./views/project/automation/CaseListGroup.vue');
const CaseApiList = () => import('./views/project/automation/CaseApiList.vue');
const AddCaseApi = () => import('./views/project/automation/AddCaseApi.vue');
const UpdateCaseApi = () => import('./views/project/automation/UpdateCaseApi.vue');
const TestReport = () => import('./views/project/automation/TestReport.vue');
const ProjectMember = () => import('./views/project/ProjectMember.vue');
const ProjectDynamic = () => import('./views/project/ProjectDynamic.vue');
const ProjectTitle = () => import('./views/project/projectTitle/ProjectTitle.vue');
const ProjectReport = () => import('./views/project/ProjectReport.vue');
const register = () => import('./views/Register.vue')

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true,
        projectHidden: true
    },
        {
        path: '/register',
        component: register,
        name: '',
        hidden: true,
        projectHidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true,
        projectHidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        projectHidden: true,
        children: [
            { path: '/projectList', component: projectList, iconCls:'el-icon-message', name: '????????????'},
            // { path: '/robot', component: robot, iconCls:'fa fa-id-card-o', name: '???????????????', meta: { keepAlive: false }},
            { path: '/title', component: About, iconCls:'fa fa-address-card', name: '????????????'},
            { path: '/tianyan', component: About, iconCls:'fa fa-address-card', name: '??????????????????????????????'},
            { path: '/nerpa', component: About, iconCls:'fa fa-address-card', name: 'nerpa?????????'},
            { path: '/calibration', component: About, iconCls:'fa fa-address-card', name: 'calibration?????????'},
            { path: '/Grafana', component: About, iconCls:'fa fa-address-card', name: 'Grafana'},
            { path: '/about', component: About, iconCls:'fa fa-address-card', name: '????????????'},
            ]
    },
    {
        path: '*',
        hidden: true,
        projectHidden: true,
        redirect: { path: '/404' }
    },
    {
        path: '/project/project=:project_id',
        component: ProjectInfo,
        name: '??????',
        hidden: true,
        children: [
            {   path: '/ProjectTitle/project=:project_id', component: ProjectTitle, name: '????????????', leaf: true},
            {   path: '/GlobalHost/project=:project_id', component: globalHost, name: 'Host??????', leaf: true},
            {   path: '/api/project=:project_id',
                    component: API,
                    name: 'API??????',
                    leaf: true,
                    child: true,
                    children: [
                        {   path: '/apiList/project=:project_id', component: ApiList, name: '????????????'},
                        {   path: '/apiList/project=:project_id/first=:firstGroup', component: ApiListGroup, name: '??????????????????'},
                        {   path: '/fastTest/project=:project_id', component: FestTest, name: '????????????'},
                        {   path: '/addApi/project=:project_id', component: addApi, name: '????????????'},
                        {   path: '/detail/project=:project_id/api=:api_id',
                            component: detail,
                            name: '??????',
                            children: [
                                { path: '/apiInfo/project=:project_id/api=:api_id', component: ApiInfo, name: '????????????'},
                                { path: '/testApi/project=:project_id/api=:api_id', component: testApi, name: '??????'},
                                { path: '/apiDynamic/project=:project_id/api=:api_id', component: ApiDynamic, name: '??????'},
                            ]
                        },
                        { path: '/updateApi/project=:project_id/api=:api_id', component: UpdateApi, name: '??????'},
                    ]},
            {   path: '/automationTest/project=:project_id',
                    component: AutomationTest,
                    name: '???????????????',
                    leaf: true,
                    child: true,
                    children: [
                        {   path: '/caseList/project=:project_id', component: CaseList, name: '????????????'},
                        {   path: '/caseList/project=:project_id/first=:firstGroup', component: CaseListGroup, name: '??????????????????'},
                        {   path: '/caseApiList/project=:project_id/case=:case_id', component: CaseApiList, name: '??????????????????'},
                        {   path: '/addCaseApi/project=:project_id/case=:case_id', component: AddCaseApi, name: '???????????????'},
                        {   path: '/updateCaseApi/project=:project_id/case=:case_id/api=:api_id', component: UpdateCaseApi, name: '????????????'},
                        {   path: '/testReport/project=:project_id', component: TestReport, name: '????????????'},
                    ]
            },
            {   path: '/projectMember/project=:project_id', component: ProjectMember, name: '????????????', leaf: true},
            {   path: '/projectDynamic/project=:project_id', component: ProjectDynamic, name: '????????????', leaf: true},
            {   path: '/projectReport/project=:project_id', component: ProjectReport, name: '?????????????????????', leaf: true},
            ]
    },
];

export default routes;