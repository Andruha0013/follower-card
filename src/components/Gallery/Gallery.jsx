import React, { Component } from "react";
import axios from "axios";
import LocalStorApp from "../../helpers/LocalStoregeApp";
import GalleryList from "../GalleryList/GalleryList";

import css from "./Gallery.module.css";

const followingStor = new LocalStorApp("follow");

const instance = axios.create({
	baseURL: "https://643062afc26d69edc890e903.mockapi.io/",
	headers: { "content-type": "application/json" },
});

export default class Gallery extends Component {
	state = {
		items: [],
		currentPage: 1,
		isLoading: false,
		error: null,
	};
	//---------------------------------------------------------
	async componentDidMount() {
		let followList = followingStor.getData();
		if (!followList) {
			followingStor.setData([]);
		}

		const response = await instance.get(
			`followers?page=${this.state.currentPage}&limit=3`
		);
		console.log(response);

		if (followList) {
			const list = response.data.map((item) => {
				let status = followList.find((element) => {
					return element.id === item.id;
				});
				if (!status) {
					return item;
				}
				item.follow = true;
				return item;
			});
			this.setState({ items: list });
		} else {
			this.setState({ items: response.data });
		}
	}
	//--------------------------------------------------------------
	async componentDidUpdate(prevProps, prevState) {
		if (prevState.currentPage !== this.state.currentPage) {
			console.log("update");
			const response = await instance.get(
				`followers?page=${this.state.currentPage}&limit=3`
			);
			const prevList = prevState.items.concat(response.data);
			console.log(prevList);
			console.log(response.data);
			let followList = followingStor.getData();
			if (followList) {
				const list = prevList.map((item) => {
					let status = followList.find((element) => {
						return element.id === item.id;
					});
					if (!status) {
						return item;
					}
					item.follow = true;
					return item;
				});

				this.setState({ items: list });
			} else {
				this.setState({ items: prevList });
			}
		}
	}
	//--------------------------------------------------------------
	toogleFollower = async (id) => {
		let followList = followingStor.getData();
		if (followList) {
			const indexfollower = followList.findIndex((element) => {
				return element.id === id;
			});
			let list = this.state.items;
			let itemIndex;
			//---------have-such-id-in-local--dell-----
			if (indexfollower >= 0) {
				followList = followList.filter((element) => {
					console.log(element.id);
					return element.id !== id;
				});
				list = this.state.items.map((item, index) => {
					if (item.id === id) {
						item.follow = false;
						itemIndex = index;
						item.followers--;
					}
					return item;
				});
			} //---------have-not-such-id-in-local--add-----
			else {
				followList.push({ id: id });
				list = this.state.items.map((item, index) => {
					if (item.id === id) {
						item.follow = true;
						itemIndex = index;
						item.followers++;
					}
					return item;
				});
			}
			console.log(list[itemIndex].followers);
			await instance.put(`followers/${id}`, {
				followers: list[itemIndex].followers,
			});
			followingStor.setData(followList);
			this.setState({ items: list });
		}
	};
	//--------------------------------------------------------------

	nextPage = () => {
		let x = this.state.currentPage + 1;
		this.setState({ currentPage: x });
	};

	render() {
		const { items } = this.state;
		return (
			<div className={css.gallery}>
				<GalleryList items={items} func={this.toogleFollower}></GalleryList>
				<button onClick={this.nextPage}>Load more</button>
			</div>
		);
	}
}
