const employees=[
    {
  "employees": [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "1234",
      "tasks": [
        {
          "active": true,
          "completed": false,
          "failed": false,
          "title": "Prepare presentation",
          "description": "Prepare slides for the upcoming client meeting.",
          "date": "2024-11-01",
          "category": "Work"
        },
        {
          "active": false,
          "completed": true,
          "failed": false,
          "title": "Submit timesheet",
          "description": "Complete and submit the weekly timesheet.",
          "date": "2024-10-30",
          "category": "Admin"
        },
        {
          "active": true,
          "completed": false,
          "failed": false,
          "title": "Code review",
          "description": "Review the code of the new feature implementation.",
          "date": "2024-11-05",
          "category": "Development"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "1234",
      "tasks": [
        {
          "active": true,
          "completed": false,
          "failed": false,
          "title": "Update documentation",
          "description": "Update the user manual with the new feature details.",
          "date": "2024-11-03",
          "category": "Documentation"
        },
        {
          "active": false,
          "completed": true,
          "failed": false,
          "title": "Attend workshop",
          "description": "Participate in the React.js workshop.",
          "date": "2024-10-28",
          "category": "Training"
        },
        {
          "active": true,
          "completed": false,
          "failed": false,
          "title": "Team meeting",
          "description": "Attend the weekly team meeting.",
          "date": "2024-11-02",
          "category": "Work"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "1234",
      "tasks": [
        {
          "active": true,
          "completed": false,
          "failed": false,
          "title": "Fix bugs",
          "description": "Resolve bugs in the user authentication module.",
          "date": "2024-11-04",
          "category": "Development"
        },
        {
          "active": false,
          "completed": false,
          "failed": true,
          "title": "Deploy app",
          "description": "Deploy the latest version of the web app.",
          "date": "2024-10-31",
          "category": "DevOps"
        },
        {
          "active": true,
          "completed": false,
          "failed": false,
          "title": "Database backup",
          "description": "Backup the production database.",
          "date": "2024-11-05",
          "category": "Admin"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "1234",
      "tasks": [
        {
          "active": false,
          "completed": true,
          "failed": false,
          "title": "Client feedback",
          "description": "Gather feedback from the client after product demo.",
          "date": "2024-10-29",
          "category": "Work"
        },
        {
          "active": true,
          "completed": false,
          "failed": false,
          "title": "Code optimization",
          "description": "Optimize the performance of the front-end code.",
          "date": "2024-11-05",
          "category": "Development"
        },
        {
          "active": false,
          "completed": true,
          "failed": false,
          "title": "Write blog post",
          "description": "Write a blog post on new web development trends.",
          "date": "2024-10-30",
          "category": "Content"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "1234",
      "tasks": [
        {
          "active": true,
          "completed": false,
          "failed": false,
          "title": "Conduct training",
          "description": "Host a training session for the new interns.",
          "date": "2024-11-06",
          "category": "Training"
        },
        {
          "active": false,
          "completed": false,
          "failed": true,
          "title": "Fix deployment error",
          "description": "Investigate and fix the deployment error on the production server.",
          "date": "2024-10-31",
          "category": "DevOps"
        },
        {
          "active": true,
          "completed": false,
          "failed": false,
          "title": "Design logo",
          "description": "Create a new logo for the product.",
          "date": "2024-11-04",
          "category": "Design"
        }
      ]
    }
  ]
}

]
const admin=[
    {
  "admin": {
    "id": 1,
    "email": "admin@example.com",
    "password": "1234"
  }
}

]
export const setlocalStorage=()=>{
    localStorage.setItem('employees ',JSON.stringify(employees) )
    localStorage.setItem('admin ',JSON.stringify(admin) )


}
export const getlocalStorage=()=>{
    localStorage.getItem('employees ',JSON.stringify(employees) )
    console.log(employees)
    localStorage.getItem('admin ',JSON.stringify(admin) )
    console.log(admin)
    return {employees,admin}


} 