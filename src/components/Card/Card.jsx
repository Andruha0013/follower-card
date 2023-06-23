import css from "./Card.module.css";
import icons from "../../images/icons.svg";
const headerImg = require("../../images/picture2 1.png");
const defAvatar = require("../../images/Hansel.png");

export default function Card(props) {
	//================================================================================
	return (
		<li key={props.id} className={css.card}>
			<svg width="76" height="22" className={css.logo}>
				<use href={icons + "#icon-GoIt-logo"}></use>
			</svg>
			<img className={css.card_hero} src={headerImg} alt="header img"></img>
			<div className={css.card_line}>
				<img
					className={css.avatar}
					src={props.avatar ? props.avatar : defAvatar}
					alt="avatar"
				></img>
			</div>
			<ul className={css.cardInfo}>
				<li className="cardInfo_item">{props.twets} tweets</li>
				<li className="cardInfo_item">100,500 Followers</li>
			</ul>
			<button className={css.follow_btn}>follow</button>
		</li>
	);
}
//
