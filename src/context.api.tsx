import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }: { children: JSX.Element }) {
	const [state, setState] = useState({
		photo: "",
		name: "",
		lastname: "",
		email: "",
	});
	return (
		<React.Fragment>
			<UserContext.Provider value={[state, setState]}>
				{children}
			</UserContext.Provider>
		</React.Fragment>
	);
}
