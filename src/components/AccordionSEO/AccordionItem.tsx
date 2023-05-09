import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { H3, P } from "components";

import arrowSrc from "./img/Arrow.svg";
import minusSrc from "./img/Minus.svg";
import plusSrc from "./img/Plus.svg";
import styles from "./accordionSEO.module.scss";

type TProps = {
  title: string;
  content: string;
	activeTab: string;
	setActiveTab: Dispatch<SetStateAction<string>>;
}

export const AccordionItem = ({
	title,
	content,
	activeTab,
	setActiveTab
}: TProps) => {
	const isActive = title === activeTab;

	const handleClick = () => {
		if (isActive) {
			setActiveTab('');
			return;
		}

		setActiveTab(title);
	};

	return (
		<>
			<div className={styles.accordionTitle} onClick={handleClick}>
        <div className={styles.titleLogo}>
          <Image className={styles.logoArrow} src={arrowSrc} alt="Arrow" />
          <H3 className={styles.title}>{title}</H3>
        </div>
        {isActive ? <Image className={styles.logo} src={minusSrc} alt='Minus' /> : <Image className={styles.logo} src={plusSrc} alt='Plus' />}
			</div>
			{isActive && <div className={styles.accordionContent}>
				<P className={styles.subtitle}>{content}</P>
			</div>
			}
		</>
	);
};
