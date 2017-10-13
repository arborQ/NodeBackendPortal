var database = require("../../database");

exports.default = {
    path: "",
    method: 'GET', 
    handler: ( request ) => {
        return [
            { Id: 1, FirstName: "Łukasz", LastName: "Wojcik" },
            { Id: 2, FirstName: "Aleksandra", LastName: "Wojcik" },
            { Id: 3, FirstName: "Julia", LastName: "Wojcik" },
            { Id: 4, FirstName: "Maciej", LastName: "Kos" },
        ];
    }    
};