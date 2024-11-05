import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

const HomepageHeader = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroContent}>
				<div className={styles.announcementContainer}>
					<span className={styles.emoji}>🚁</span>
					<span className={styles.announcement}>UAVcast-Pro 5.0 is out!</span>
					<span className={styles.emoji}>🎉</span>
				</div>

				<div className={styles.titleContainer}>
					<h1 className={styles.heroTitle}>
						Beyond Line of <span className={styles.highlight}>sight</span>
					</h1>
					<h2 className={styles.heroSubtitle}>
						Always in <span className={styles.highlight}>Control</span>
					</h2>
				</div>

				<div className={styles.buttonContainer}>
					<Link className={styles.buttonPrimary} to="/docs/5.x/quick-start">
						Quick Tutorial - Get Started
					</Link>
					{/* <Link className={styles.buttonSecondary} to="/demo">
						Try a Demo
					</Link> */}
				</div>
			</div>
		</div>
	);
};

const Feature = ({ title, icon, description }) => {
	return (
		<div className={styles.feature}>
			<div className={styles.featureIcon}>{icon}</div>
			<h3 className={styles.featureTitle}>{title}</h3>
			<p className={styles.featureDescription}>{description}</p>
		</div>
	);
};

const HomepageFeatures = () => {
	const features = [
		{
			title: "Powered by Linux",
			icon: <span className={styles.featureIconEmoji}>🐧</span>,
			description:
				"Built on robust Linux systems. Deploy your drone control station with confidence using our thoroughly tested platform.",
		},
		{
			title: "Built Using Modern Tech",
			icon: <span className={styles.featureIconEmoji}>⚡</span>,
			description:
				"Leverage the latest drone control technologies. Built with modern frameworks for reliability and performance.",
		},
		{
			title: "Ready for Any Mission",
			icon: <span className={styles.featureIconEmoji}>🎯</span>,
			description:
				"From hobby flights to professional missions, UAVcast-Pro adapts to your needs with extensive customization options.",
		},
	];

	return (
		<section className={styles.featuresSection}>
			<div className={styles.featuresContainer}>
				<div className={styles.featuresGrid}>
					{features.map((feature, idx) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Feature key={idx} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
};

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={siteConfig.title}
			description="UAVcast-Pro - Professional Drone Control System"
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
