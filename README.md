# Suspect Registration System for Money Laundering Involved in Betting Games 🚓 ( Fictício ) 

## Context 
This project was developed to meet a request from the Federal Police, with the goal of creating a system for the registration of famous suspects involved in money laundering schemes through betting games.

##  Used Languages in this Repository

 - ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
 - ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
 - ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)  
 - ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)  


### 👩‍💻 The system meets the following requirements: 

#### Register Suspects: 🏃‍♂️
- **Mandatory Information**: Name, profession, involvement in betting (yes/no), and suspicion level (low, medium, high).
- **Validation**: Name and profession are mandatory. The suspicion level must be classified as "low", "medium", or "high".

#### List Suspects: 👮‍♂️
- List all registered suspects with their respective suspicion levels.

#### Search Specific Suspect: 🕵️‍♀️
- Search for a specific suspect by their ID.

#### Update Suspect: 🏃‍♀️
- Update the information of a specific suspect, except the ID.
- **Validation**: The same registration rules must be applied.

#### Delete Suspect: 🧍‍♂️
- Delete a specific suspect from the system by their ID.

### Instructions 
#### To use with Postman, pay attention to the Routes: 🗺️

##### Specific routes for each functionality:

- **POST /suspects** - Register a new suspect.
- **GET /suspects** - List all suspects.
- **GET /suspects/:id** - Search for a specific suspect by ID.
- **PUT /suspects/:id** - Update a suspect's information.
- **DELETE /suspects/:id** - Remove a suspect from the system.

Choose the Request Methods:

- **POST**: To register a new suspect.
- **GET**: To list and search suspects.
- **PUT**: To update a suspect's information.
- **DELETE**: To remove a suspect.

**Validation**: 🚨

- Ensure all mandatory fields (nome, profissao, and nivelSuspeita) are filled.
- Involvement in betting must be "sim" or "não", and the suspicion level must be "baixo", "médio", or "alto".

**HTTP Status Codes**: 🖥️

- ✔️ **200 OK**: Successful listing, search, update, and deletion operations.
- ✔️ **201 Created**: Suspect successfully registered.
- ❌ **400 Bad Request**: Validation error (e.g., mandatory fields not filled).
- ❌ **404 Not Found**: Suspect not found.
- ❌ **500 Internal Server Error**: Unexpected server errors.

### How to Run the Project 🏠 💻

1. **Clone the repository**:
```bash
git clone https://github.com/viniciusValverde1410/atividadebets
```
   
Navigate to the project directory:

 ```bash
cd <directory-name>
```

Install the dependencies:

 ```bash
npm install
````

Start the server:

 ```bash
npm run dev
```

Create the dotenv file with port 4000:
Create a file named .env in the root of your project and add the following content:

  ``` plaintext

PORT=4000

```

# Now you're ready to use it! 👮‍♂️🕵️‍♀️🚓

## Always pay attention to the address and routes  👩‍💻
