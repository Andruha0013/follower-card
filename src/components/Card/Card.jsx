import css from "./Card.module.css";
import icons from "../../images/icons.svg";
import convertNum from "../../helpers/conveNumber";
const headerImg = require("../../images/picture2 1.png");
const defAvatar = require("../../images/Hansel.png");

export default function Card(props) {
	const { item, btnFunc } = props;

	return (
		<li key={item.id} className={css.card}>
			<svg width="76" height="22" className={css.logo}>
				<use href={icons + "#icon-GoIt-logo"}></use>
			</svg>
			<img className={css.card_hero} src={headerImg} alt="header img"></img>
			<div className={css.card_line}>
				<img
					className={css.avatar}
					src={item.avatar ? item.avatar : defAvatar}
					alt="avatar"
				></img>
			</div>
			<ul className={css.cardInfo}>
				<li className="cardInfo_item">{item.tweets} tweets</li>
				<li className="cardInfo_item">
					{convertNum(item.followers)} Followers
				</li>
			</ul>
			<button
				className={item.follow ? css.follow_btn__following : css.follow_btn}
				value={item.id}
				onClick={async (evt) => {
					btnFunc(evt.currentTarget.value);
				}}
			>
				{item.follow ? "Following" : "Follow"}
			</button>
		</li>
	);
}
