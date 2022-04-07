## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Introduction 
TekPartners Pro Services Wed Developer Coding Excercise<br>

Depending on the postion/project/role you're being considered for, you will be asked to one or both of these exercies. If you are only asked to done, you are still free to do both if you like.<br>

Unless otherwise directed, please use the libraries outlined below. If you would like to bring in an additional library that is not listed here to help accomplish the task, please feel free to do so. We're always lookig for people who can bring new ideas and ways of doing things to our teams, and this extends to our technical stack!<br>

Our current stack can be found [here](https://stackshare.io/jamesbender/v1/main). If there is library/framework you would like to use that is not listed here or has an alternative listed here (i.e. instead of Bootstrap we use Tailwind) please provide a description of the library in the README and why you chose it.

## Instructions
You have received this directory within the .zip archive.

1. Create a repo out of the directory with this README.md in the root of it.
2. Work on either task following the guidelines in README.md within chosen directory.
3. Follow best practices of saving changes to the repo.
4. Upload the repo to your personal Github account and share it with one collaborator:
    * JamesBender - James Bender, Lead Application Architect, TekPartners.

# Front-end
* Should be in React unless instructed otherwise
    *  Bonus points for using NextJS
    * If not using NextJS, react-router should be used for routing.
* Routes:
    * / - simple landing page, links to the other routes
    * /books - for requesting a list of all books in the dataset
    * /books/(:id) - for request detailed information about a specific book
    * Bonus routes:
        * /authors - list of authors
        * /authors/(:id) - detailed information about a specific author
* In the "front-end" directory you fill find a Datastore.json file. This is your "database".
    * In a normal app, you would get this data via a backend service. If you are doing the back-end exercise as well, you can use that servcie to get your data.
    * If you're not using a true back-end, you can implement whatever sort of in-memory/ad hoc data server you like. However, it MUST be decoupled from the front-end components as a traditaionl service would be.
* Visual design is up to the developer, but there must be some design done
    * Bonus points for responsive design
* The list at /books must contain the title of the book, the authors name, the cover images, and the year published
* Routes should be a direct link. If I paste /books/123 into a browser, the book with the id of 123 should be displayed

# Back-end
* Create a Node-based front end. You can use one of these options:
    * Create an Express server, but include an /graphql endpoint using Apollo
    * Create an Apollo Server to serve GraphQL
* You will be provided with a Datastore.json file. This is your "database". You should implement an in-memory "database" to store this information. This can be hand-rolled, or you can use a package. 
* You must provide queries to return the list of books and the book details. Do not over/under fetch! Bonus for providing queries for author/authors
    * Schema:<br>
    ```
        {
            books {
                id
                title
                author
                year
                publisher
                isbn 
                coverImageUrl                
                author {
                    id
                    firstName
                    lastName
                    imageUrl
                    books
                }
            
        }
    ```
* You must add a mutation to add a new book. You can use an existing author, or for bonus points you can provide a mutation to add an author. (do not worry about providing a valid URL for the book cover)
* Bonus:
    * Provide a mutation for creating/authenticating users: 
    ```
        mutation createUser($username: String), $password: String) {
            createUser(username: $username, password: $password) {
                token
                user {
                    id
                    name
                }
            }
        }
    ```
    * Provide a mutation to enable users to login:
    ```
        mutation login($username: String, $password: String) {
            login(username: $username, password: $password) {
                token 
                user {
                    id
                    name
                }
            }
        }
    ```
    * Update the mutation to only allow authenticated users to add/change data
* The /graphql endpoint must be accessible to external clients
