export var config = [
    {
        id: 1,
        name: "试题管理",
        icon: "sliders",
        children: [
            {
                id: 1,
                name: "添加考试",
                path: "/main/addquestions"
            },
            {
                id: 2,
                name: "试题分类",
                path: "/main/classquestions"
            },
            {
                id: 3,
                name: "查看试题",
                path: "/main/lookquestion"
            }
        ]
    },
    {
        id: 2,
        name: "用户管理",
        icon: "user",
        children: [
            {
                id: 4,
                name: "添加用户",
                path: "/main/adduser"
            },
            {
                id: 5,
                name: "用户提示",
                path: "/main/usermessage"
            }
        ]
    },
    {
        id: 3,
        name: "考试管理",
        icon: "pic-left",
        children: [
            {
                id: 6,
                name: "添加考试",
                path: "/main/addExamination"
            },
            {
                id: 7,
                name: "试卷列表",
                path: "/main/questionslist"
            }
        ]
    },
    {
        id: 4,
        name: "班级管理",
        icon: "pic-left",
        children: [
            {
                id: 8,
                name: "班级管理",
                path: "/main/classmanagement"
            },
            {
                id: 9,
                name: "教室管理",
                path: "/main/classroommanagement"
            },
            {
                id: 10,
                name: "学生管理",
                path: "/main/studentmanaage"
            }
        ]
    },
    {
        id: 5,
        name: "阅卷管理",
        icon: "pic-left",
        children: [
            {
                id: 11,
                name: "待批班级",
                path: "/main/awaitingroom"
            }
        ]
    },
];
//# sourceMappingURL=index.js.map