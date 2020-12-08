import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
import { MdHelp } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Work | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Work | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section height="30px">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="normal 600 25px/1.5 --fontFamily-googlePlayfairDisplay">
					ЮРИСТЫ.РУ
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="normal 600 22px/1.5 --fontFamily-googlePlayfairDisplay"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override
						slot="link"
						text-decoration="none"
						color="--dark"
						padding="6px 12px"
						border-color="#000000"
						font="600 22px/24px --fontFamily-googlePlayfairDisplay"
					/>
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-404">
						.
					</Override>
					<Override slot="link-index">
						Главная
					</Override>
					<Override slot="link-work">
						Цены и услуги
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section quarkly-title="Hero" padding="25px 0 25px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 61%) 0 0 no-repeat,#005236"
						sm-height="180px"
						md-height="360px"
					/>
					{"        "}
					<Text
						font="normal 900 72px/1.2 --fontFamily-googlePlayfairDisplay"
						margin="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						color="--light"
						justify-content="center"
						quarkly-title="Title"
						sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						sm-text-align="center"
						text-align="center"
						md-font="--headline2"
					>
						Перечень всех наших услуг
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Box />
		<Section color="--dark" padding="px 0 24px 0">
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="#FF7C22"
					category="md"
					icon={MdHelp}
					border-color="#ffb80b"
				/>
				<Text
					as="h3"
					font="normal 500 28px/1.2 --fontFamily-googleOswald"
					margin="10px 0"
					background="#fe982a"
					width="1000px"
				>
					Физическим лицам{"\n\n"}
				</Text>
				<Text
					as="p"
					font="normal 300 22px/1.5 --fontFamily-googleOswald"
					margin="10px 0"
					color="--dark"
					width="850px"
					padding="0px 0px 0px 100px"
				>
					1.   Юридическая консультация при личной встрече                                                                                      1 500 р.
					<br />
					2. 

Срочная юридическая консультация по телефону/мессенджеру/эл.почте                                                   0 р.
					<br />
					3.  Юридическая консультация при личной встрече                                                                                       1 500 р.
					<br />
					4. 

Автомобильные споры (ДТП, ОСАГО, КАСКО)                                                                                         10 000 р.
					<br />
					5. 

Споры по ипотечному страхованию                                                                                                          20 000 р.
					<br />
					6. 

Споры с банками                                                                                                                                        20 000 р.
					<br />
					7. 

Расторжение брака и раздел имущества                                                                                                 30 000 р.
					<br />
					8. 

Споры по наследству                                                                                                                                 20 000 р.
					<br />
					9. 

Защита прав потребителя                                                                                                                          10 000 р.
					<br />
					10. Возврат денежных средств за путевки и авиабилеты
                              


                              

           20 000 р.
					<br />
					11. Жилищные споры (приватизация, снятие с регистрации и т.д.)                                                           25 000 р.
					<br />
					12. Земельные споры                                                                                                                                      20 000 р.
					<br />
					13. Юридические услуги в области медицины                                                                                               5 000 р.{"\n\n"}
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--orange"
					category="md"
					icon={MdHelp}
				/>
				<Text
					as="h3"
					font="normal 500 28px/1.2 --fontFamily-googleOswald"
					margin="10px 0"
					background="#fe982a"
					width="1000px"
				>
					Юридическим лицам{"\n\n"}
				</Text>
				<Text
					as="p"
					font="normal 300 22px/1.5 --fontFamily-googleOswald"
					margin="10px 0"
					color="--dark"
					padding="0px 0px 0px 100px"
					width="856px"
				>
					1. Представительство в арбитражном суде Самарской области                                                                 15 000 р.
					<br />
					2. Представительство в Арбитражном и 11 апелляционном судах для иногородних фирм                    15 000 р.
					<br />
					3. Взыскание долгов                                                                                                                                         15 000 р.{" "}
					<br />
					4. Арбитражные споры по подряду                                                                                                                 50 000р.{"\n\n"}
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			/>
		</Section>
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Footer"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});