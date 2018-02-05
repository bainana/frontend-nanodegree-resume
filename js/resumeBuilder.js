/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    'name' :'白娜娜',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '15801122553',
        'email': 'smile_bai@sina.cn',
        'github': 'https://github.com/bainana',
        'address': '北京市东城区中关村航星科技园'
    },
    'picture': 'images/logo.jpg',
    'welcome':'欢迎访问我的个人简历！我对web前端有浓厚的兴趣，这驱使我不断学习，积累知识，不断去了解新的前沿技术。',
    'skills': ['JavaScript', 'Angularjs', 'Ionic', 'Front-end Development','Photoshop', 'Php']
};

var work = {
    'job': [
        {
            'employer': '北京六合科技有限公司',
            'title': '高级H5开发',
            'location': '北京市东城区中关村航星科技园',
            'date': '2016-至今',
            'description': '使用原生JS和angularJS开发门户级别项目；使用angularJS＋ionic开发移动端APP；使用node＋bower＋gulp搭建环境，包含打包功能；使用git进行代码管理，版本控制。'
        },
        {
            'employer': '北京华昊联合科技有限公司',
            'title': '前端开发',
            'location': '北京市朝阳区金泉时代广场',
            'date': '2014-2016',
            'description': '根据客户需求，使用Bootstrap编写响应式页面；使用HTML5，CSS3，Animate.css，Zepto，Swiper，Isroll等技术进行移动端网站的前端开发；根据项目需求对代码进行封装，实现代码复用；配合后台开发人员，使用AJAX、JSONP完成页面的数据交互功能。'
        },
        {
            'employer': '北京阳光盛景科技有限公司',
            'title': '网页制作开发',
            'location': '北京市西城区',
            'date': '2010-2013',
            'description': '把设计师制作的效果图，用HTML、CSS编写静态页面，使用原生JS，jQuery完成特效的制作。制作团购网站，根据效果图进行模板编写，嵌套，在最土团购程序基础上使用PHP进行二次开发。使用HTML和CSS编写discuz前台页面，配合PHP工程师完成整个网站的制作调试。'
        }
    ]
};

var project = {
    list: [
        {
            'title': '启迪园区云PC门户',
            'date': '2017/09 -- 2017/11',
            'description' : '该项目为清华启迪集团旗下启迪园区的PC门户项目，拥有展厅预约，活动服务，物业管理，审批事项等多种功能，是一个可跨园区登录，切换，管理的大型项目，可管理清华启迪集团名下的所有科技园区。',
            'image': 'images/project1.png'
        },
        {
            'title': '启迪园区云APP',
            'date': '2017/06 -- 2017/09',
            'description' : '该项目为清华启迪集团旗下启迪园区的智能APP项目，拥有展厅预约，活动服务，物业管理，审批事项等多种功能，是一个可跨园区登录，切换，管理的大型项目，可管理清华启迪集团名下的所有科技园区。',
            'image': 'images/project3.jpg'
        },
        {
            'title': '启迪园区云大屏驾驶舱',
            'date': '2017/01 -- 2017/05',
            'description' : '该项目为清华启迪集团旗下启迪园区的大屏驾驶舱项目，可以实时展示园区大数据。',
            'image': 'images/project2.png'
        }
    ]
};

var education = {
    schools: [
        {
            'title': '枣庄学院',
            'degree': '专科',
            'location': '山东省枣庄市',
            'date': '2003-2006',
            'major' : '网络技术与信息处理'
        }
    ]
}

var online = {
    list: [
        {
            'title': 'Front-End Web Developer Nanodegree - Udacity',
            'school': 'Udacity',
            'date': '2003-2006',
            'url' : 'https://classroom.udacity.com/nanodegrees/nd001'
        }
    ]
}

bio.display = function(){
    //header
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName,formattedRole);

    //contacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.address);

    $('#topContacts').prepend(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
    $('#footerContacts').prepend(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
    //biopic
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
    $("#header").append(formattedBioPic);

    //welcomemessage
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $("#header").append(formattedWelcome);

    //skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for(var i = 0; i < bio.skills.length; i++){
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

}

work.display = function(){
    var jobs = work.job;
    if(jobs.length > 0){
        for(var i = 0; i < jobs.length; i++){
            workdEmployer = HTMLworkEmployer.replace('%data%',jobs[i].employer);
            workTitle = HTMLworkTitle.replace('%data%',jobs[i].title);
            workDates = HTMLworkDates.replace('%data%',jobs[i].date);
            workLocation = HTMLworkLocation.replace('%data%',jobs[i].location);
            workDescription = HTMLworkDescription.replace('%data%',jobs[i].description);
            // $('.work-entry:last').append(workdEmployer + workTitle + workDates + workLocation + workDescription)
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(workdEmployer + workTitle);
            $('.work-entry:last').append(workDates);
            $('.work-entry:last').append(workLocation);
            $('.work-entry:last').append(workDescription);
        }
    }
}

project.display = function(){
    var projects = project.list;
    if(projects.length > 0){
        for(var i = 0; i < projects.length; i++){
            projectTitle = HTMLprojectTitle.replace('%data%',projects[i].title);
            projectDates = HTMLprojectDates.replace('%data%',projects[i].date);
            projectDescription = HTMLprojectDescription.replace('%data%',projects[i].description);
            projectImage = HTMLprojectImage.replace('%data%',projects[i].image);
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(projectTitle);
            $('.project-entry:last').append(projectDates);
            $('.project-entry:last').append(projectDescription);
            $('.project-entry:last').append(projectImage);
        }
    }
}

education.display = function(){
    var list = education.schools;
    if(list.length > 0){
        for(var i = 0; i < list.length; i++){
            schoolName = HTMLschoolName.replace('%data%',list[i].title);
            schoolDegree = HTMLschoolDegree.replace('%data%',list[i].degree);
            schoolDates = HTMLschoolDates.replace('%data%',list[i].date);
            schoolLocation = HTMLschoolLocation.replace('%data%',list[i].location);
            schoolMajor = HTMLschoolMajor.replace('%data%',list[i].major);
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(schoolName + schoolDegree);
            $('.education-entry:last').append(schoolDates);
            $('.education-entry:last').append(schoolLocation);
            $('.education-entry:last').append(schoolMajor);
        }
    }
}

online.display = function(){
    var list = online.list;
    if(list.length > 0){
        for(var i = 0; i < list.length; i++){
            onlineTitle = HTMLonlineTitle.replace('%data%',list[i].title);
            onlineSchool = HTMLonlineSchool.replace('%data%',list[i].school);
            onlineDates = HTMLonlineDates.replace('%data%',list[i].date);
            onlineURL = HTMLonlineURL.replace('%data%',list[i].url);
            $('#online').append(HTMLonlineStart);
            $('.online-entry:last').append(HTMLonlineClasses);
            $('.online-entry:last').append(onlineTitle);
            $('.online-entry:last').append(onlineSchool);
            $('.online-entry:last').append(onlineDates);
            $('.online-entry:last').append(onlineURL);
        }
    }
}

bio.display();
work.display();
project.display();
education.display();
online.display();
$("#mapDiv").append(googleMap);
