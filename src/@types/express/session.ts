declare namespace Express {
    export interface Request {
      session:{
       user?: {name:string}
      }
    }

 }