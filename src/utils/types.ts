
// The Actual Data Type For User That will Store in Database
export class CreateUserParam{
    email : string;
    password:string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    nationalID: number;
}

// The Actual Data Type For User (inCase Update) That will Store in Database

export class UpdateUserParam{
    email?: string;
    Password?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: number;
    nationalID?: number;
}

// The Actual Data Type For walet That will Store in Database
export class CreateWalletParam {
    cash: number;
  }
// The Actual Data Type For walet (inCaseUpdate) That will Store in Database

export class UpdateWalletParam {
    cash: number;
}

// The Actual Data Type For History That will Store in Database

export class CreateHistoryParam{
    idReceive: number;
    cash: number;
}