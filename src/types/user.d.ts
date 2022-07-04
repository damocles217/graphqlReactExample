export type GetMyUser = {
	getMyUser: string;
};

export type NewUserInput = {
	email: string;
	lastname: string;
	name: string;
	password: string;
};

export type Response = {
	user: User;
	errors: Error[];
	sucess: boolean;
};

export type User = {
	_id?: string;
	name?: string;
	lastname?: string;
	userId?: string;
	admin?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
};

export type Error = {
	message: string;
	path: string;
};
