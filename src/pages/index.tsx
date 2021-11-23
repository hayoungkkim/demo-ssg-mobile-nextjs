import type { NextPage } from "next";

import { useAppDispatch, useAppSelector, useInterval } from "../app/hooks";

import { selectClock, startClock, serverRenderClock } from "../features/clock/clockSlice";

import Counter from "../features/counter/Counter";
import Clock from "../features/clock/Clock";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { wrapper } from "../app/store";

const IndexPage: NextPage = () => {
	const dispatch = useAppDispatch();
	const { lastUpdate, light } = useAppSelector(selectClock);

	useInterval(() => {
		dispatch(startClock());
	}, 1000);

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<Counter />
				<br />
				<br />
				<br />
				<Clock lastUpdate={lastUpdate} light={light} />
				<br />
				<br />
				<br />
				<nav>
					<Link href="/other">
						<a className={styles.link}>Other &gt;</a>
					</Link>
				</nav>
			</header>
		</div>
	);
};

export const getStaticProps = wrapper.getStaticProps((store) => () => {
	store.dispatch(serverRenderClock(true));
});

export default IndexPage;
