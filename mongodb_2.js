USE zenclass

db.users.insertMany([{
    id:1,
    name:"bala",
    email:"bala@gmail.com",
    placement_apperence:"yes"
},
{
    id:12,
    name:"kaviya",
    email:"kaviya@gmail.com",
    placement_apperence:"yes"

},
{
    id:3,
    name:"faiz",
    email:"faiz@gmail.com",
    placement_apperence:"yes"

},
{
    id:4,
    name:"arun",
    email:"arun@gmail.com",
    placement_apperence:"yes"

},
{
    id:5,
    name:"abi",
    email:"abi@gmail.com",
    placement_apperence:"yes"

}
]);

db.codekata.insertMany([
    {
        id:1,
        total_problems:200,
        solved_problems:150,
        pending:50
    },
    {
        id:2,
        total_problems:200,
        solved_problems:160,
        pending:40
    },
    {
        id:3,
        total_problems:200,
        solved_problems:140,
        pending:60
    },
    {
        id:4,
        total_problems:200,
        solved_problems:180,
        pending:20
    },
    {
        id:5,
        total_problems:200,
        solved_problems:150,
        pending:50
    }
]);

db.attendance.insertMany([
    {
        id:1,
        attendance:80,
        absent:"no",
        task_submit:"yes",
        batch:"wd"
    },
    
        {
        id:2,
        attendance:70,
        absent:"no",
        task_submit:"yes",
        batch:"wd"
    },
    
        {
        id:3,
        attendance:92,
        absent:"yes",
        task_submit:"no",
        batch:"we"
    },
    
        {
        id:4,
        attendance:95,
        absent:"yes",
        task_submit:"no",
        batch:"wd"
    },
        {
        id:5,
        attendance:72,
        absent:"no",
        task_submit:"yes",
        batch:"wd"
        }
])

 db.topics.insertMany([
    {
        batch:"wd",
        topics:"node filesystem",
        tasks:"writefile",
        month:"nov"
    },
    
    {
        batch:"wd",
        topics:"js functions",
        tasks:"anonymous functions",
        month:"oct"

    },
        {
        batch:"wd",
        topics:"react components",
        tasks:"create components",
        month:"dec"
    },
        {
        batch:"wd",
        topics:"node modules",
        tasks:"create server",
        month:"nov"
    },
        {
        batch:"wd",
        topics:"git",
        tasks:"push files",
        month:"oct"
    }
])

db.tasks.insertMany([
    {
       name:"bala",
       tasks:"nodejs",
       month:"oct"
    },
    {
       name:"kaviya",
       tasks:"js",
       month:"oct"
    },
    {
       name:"arun",
       tasks:"snowflake",
       month:"oct"
    },
    {
       name:"abi",
       tasks:"nodejs",
       month:"oct"
    },
    {
       name:"faiz",
       tasks:"sql",
       month:"oct"
    }
])

db.insertMany.companyDrives([
    {
        company_name:"google",
        month:"dec",
        positions:30,
        date:ISODate("2020-10-10T08:00:00.000")

    },
    {
        company_name:"qualcomm",
        month:"dec",
        positions:30,
        date:ISODate("2020-10-10T08:00:00.000")

    },
    {
        company_name:"apple",
        month:"dec",
        positions:05,
        date:ISODate("2020-10-15T08:00:00.000")

    },
    {
        company_name:"nvidia",
        month:"dec",
        positions:07,
        date:ISODate("2020-10-17T08:00:00.000")

    },
    {
        company_name:"hypr",
        month:"jan",
        positions:20,
        date:ISODate("2020-10-20T08:00:00.000")

    }
]);

db.mentors.insertMany([
    {
     mentor_name:"karthick",
     mentee_count:35,
     batch:"wd"
    },
    {
     mentor_name:"ananth",
     mentee_count:25,
     batch:"wd"
    },
    {
     mentor_name:"ananth",
     mentee_count:35,
     batch:"wd"
    },
    {
     mentor_name:"vignesh",
     mentee_count:10,
     batch:"wd"
    },
    {
     mentor_name:"faheema",
     mentee_count:40,
     batch:"wd"
    },
    {
     mentor_name:"prakash",
     mentee_count:50,
     batch:"wd"
    }
]);


QUERIES : 

> db.mentors.find({mentee_count:{$gt:15}}).pretty()

> db.attendance.find({$and:[{absent:"yes"},{task_submit:"no"}]}).pretty()

> db.codekata.find().pretty()

> db.users.find({placement_apperence:"yes"}).pretty()

> db.tasks.find({"tasks":{"$exsits":true}}).pretty()

> db.companyDrives.find({date:{$gt:ISODate(“2020-10-15”),$lt:ISODate(“2020-10-31”)}})

> db.topics.find({"topics":{"$exsits":true}}).pretty()










