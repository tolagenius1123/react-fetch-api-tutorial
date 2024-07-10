const User = ({ user }) => {
	return (
		<div className="">
			<h1>{user.username}</h1>
			<p>{user.email}</p>
		</div>
	);
};

export default User;
