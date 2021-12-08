import type { NextPage } from "next";

import { useAppDispatch, useAppSelector, useInterval } from "@/app/hooks";
import { increment } from "@/features/counter/counterSlice";

import { selectClock, startClock, serverRenderClock } from "@/features/clock/clockSlice";

import Counter from "@/features/counter/Counter";
import Clock from "@/features/clock/Clock";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

import { wrapper } from "@/app/store";

const Other: NextPage = () => {
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
					<Link href="/">
						<a className={styles.link}>Home &gt;</a>
					</Link>
				</nav>
			</header>
		</div>
	);
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
	store.dispatch(serverRenderClock(true));
	store.dispatch(increment());

	return {
		props: {},
	};
});

export default Other;
