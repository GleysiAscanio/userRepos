const valueLocalUser = window.localStorage.getItem("setUserName");
const valueLocalToken = window.localStorage.getItem("setPasswordUser");

const bodySearch = {
  query: `
              query { 
                  user(login: "${valueLocalUser}"){
                    repositories(last:10, orderBy: {field: CREATED_AT, direction:ASC}){
                      nodes{
                        id,
                        name,
                        description,
                      }
                    }
                  }
                }`,
};
const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + valueLocalToken,
};

export { bodySearch, headers };
