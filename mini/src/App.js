import React from "react";
import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.updatePicture = this.updatePicture.bind(this);
		this.updateName = this.updateName.bind(this);
		this.addFriend = this.addFriend.bind(this);
		this.state = {
			friends: [],
			picture: "",
			name: ""
		};
	}

	updatePicture(e) {
		this.setState({ picture: e.target.value });
	}

	updateName(e) {
		this.setState({ name: e.target.value });
	}

	addFriend() {
		const myNewFriendArray = [
			...this.state.friends,
			{
				name: this.state.name,
				picture: this.state.picture
			}
		];
		this.setState({
			friends: myNewFriendArray,
			name: "",
			picture: ""
		});
	}

	render() {
		let num = 0;
		const friends = this.state.friends.map(({ name, picture }) => {
			num++;
			return (
				<div key={num}>
					<img src={picture} alt='fake alt' height='100px;' />
					{name}
				</div>
			);
		});

		return (
			<div>
				<label htmlFor='picture'>Picture</label>
				<input
					onChange={this.updatePicture}
					id='picture'
					value={this.state.picture}
				/>
				<label htmlFor='name'>Name</label>
				<input onChange={this.updateName} id='name' value={this.state.name} />
				<button onClick={this.addFriend}>Add Friend</button>
				{friends}
			</div>
		);
	}
}

export default App;
