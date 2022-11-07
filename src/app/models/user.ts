export class User {

    id!: number;
    username!: string;
    email!: string;
    password!: string;
    roles!: Role[];
}

export class Role {
    id!: number;
    name!: string;
}
