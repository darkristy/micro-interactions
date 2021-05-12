/* eslint-disable no-unused-expressions */
import { Container, H } from "@/components/UI";
import { NextPage } from "next";
import { FC, Fragment, useCallback } from "react";
import tw, { styled } from "twin.macro";
import anime from "animejs";

interface FakeLinkProps {
	name: string;
	index: number;
}

const FakeLink: FC<FakeLinkProps> = ({ name, index }) => {
	const LinkWrapper = styled.div(() => [tw`mx-8 h-12  overflow-hidden cursor-pointer`]);

	const targets = [`.text${index} .letter`, `.text${index + 4} .letter`];
	const classNames = [`text${index}`, `text${index + 4}`];

	const animateLetters = useCallback((yValue) => {
		targets.map((target) => {
			anime.remove(target);
			anime({
				targets: target,
				translateY: yValue,
				easing: "easeOutExpo",
				duration: 1000,
				delay: (_, i) => 40 * i,
			});
		});
	}, []);

	const linkInner = (
		<>
			{name.split(" ").map((word, wordI) => (
				<div key={`word-${word}-${wordI}`} tw="inline-block mr-4">
					{Array.from(word).map((c, i) => (
						<span key={i} tw="w-auto relative inline-block" className="letter">
							{c === " " ? "\u00A0" : c}
						</span>
					))}
				</div>
			))}
		</>
	);

	return (
		<LinkWrapper
			key={index}
			onMouseEnter={(): void => animateLetters(-48)}
			onMouseLeave={(): void => animateLetters(0)}
		>
			{classNames.map((className, i) => (
				<Fragment key={i}>
					<H priority={2} className={className} customStyles={tw`uppercase `}>
						{linkInner}
					</H>
				</Fragment>
			))}
		</LinkWrapper>
	);
};

const HoverWaveEffect: NextPage = () => {
	const fakeLinks = [{ name: "Gucci" }, { name: "Balenciaga" }, { name: "Versace" }];

	const LinksContainer = styled.div`
		${tw`h-screen flex items-center justify-center`}
		h2 {
			&:first-of-type {
				opacity: 0.2;
			}
		}
	`;

	return (
		<Container size="large">
			<LinksContainer>
				{fakeLinks.map((link, index) => (
					<Fragment key={index}>
						<FakeLink name={link.name} index={index} />
					</Fragment>
				))}
			</LinksContainer>
		</Container>
	);
};

export default HoverWaveEffect;
