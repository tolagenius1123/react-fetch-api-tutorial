import { useState } from "react";
import User from "./components/User";

function App() {
	// const fetchData = () => {
	// 	const data = fetch("https://fakestoreapi.com/users");
	// 	data.then((response) => response.json())
	// 		.then((users) => console.log(users))
	// 		.catch((error) => console.log(error));
	// };

	const [usersData, setUsersData] = useState([]);

	const fetchData = async () => {
		try {
			const data = await fetch("https://fakestoreapi.com/users");
			const users = await data.json();
			setUsersData(users);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(usersData);

	fetchData();

	return (
		<>
			<main>Hello React</main>
			{usersData.map((userData) => (
				<li key={userData.id}>
					<User user={userData} />
				</li>
			))}
		</>
	);
}

export default App;
