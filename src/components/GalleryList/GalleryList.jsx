import css from "./GalleryList.module.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

export default function GalleryList({ items, func }) {
	return (
		<ul className={css.galleryList}>
			{items.map((item) => {
				return <Card key={item.id} item={item} btnFunc={func} />;
			})}
		</ul>
	);
}

GalleryList.prototypes = {
	items: PropTypes.array,
	func: PropTypes.func,
};
