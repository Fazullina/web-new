import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Input, Button, Image, Strong, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, StackItem, Stack, Formspree } from "@quarkly/components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section height="30px">
			<Override slot="SectionContent" />
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
				<Box height="50px" width="350px" text-align="right">
					<Link
						text-decoration-line="initial"
						color="#000000"
						padding="8px 18px 8px 18px"
						font="normal 600 22px/1.5 --fontFamily-googlePlayfairDisplay"
						letter-spacing="0.5px"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						text-align="center"
						margin="48px 0px 0px 0px"
						background="#ffffff"
						hover-transform="translateY(-4px)"
						lg-margin="24px 0px 0px 0px"
						md-margin="36px 0px 0px 0px"
						width="1250px"
					>
						Главная
					</Link>
					<Link
						href="/work"
						text-decoration-line="initial"
						color="#000000"
						padding="8px 18px 8px 18px"
						font="normal 600 22px/1.5 --fontFamily-googlePlayfairDisplay"
						letter-spacing="0.5px"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						text-align="center"
						margin="48px 0px 0px 0px"
						background="#ffffff"
						hover-transform="translateY(-4px)"
						lg-margin="24px 0px 0px 0px"
						md-margin="36px 0px 0px 0px"
						width="1250px"
					>
						Цены и Услуги
					</Link>
				</Box>
			</Box>
		</Section>
		<Section
			padding="px 0 50px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				background="linear-gradient(180deg,rgba(0, 82, 54, 0.78) 100%,transparent 100%) 0 0 no-repeat,#005236 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/zelenaya-zerkalnaya-zdanie_1.jpg?v=2020-11-29T20:35:48.218Z) center center/cover repeat scroll padding-box"
				align-items="center"
				justify-content="center"
				sm-width="100%"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				md-margin="0px 16px 0px 16px"
				margin="0px 0px 0px 0px"
				min-width="auto"
				height="620px"
				mix-blend-mode="normal"
				display="flex"
				padding="0px 100px 0px 100px"
			/>
			<Section color="--light" padding="100px 150px 70px 0" sm-padding="40px 0" position="relative">
				<Stack>
					<StackItem width="50%" md-width="100%">
						<Override slot="StackItemContent" />
						<Text font="46px --fontFamily-googleOswald" padding="30px 0px 0px 100px" text-align="center">
							Вам требуется юридическая помощь?
						</Text>
					</StackItem>
					<Box
						max-width="360px"
						padding="56px 48px 56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="--color-light linear-gradient(0deg,rgba(0,0,0,0) 0%,#6bc4a6 45.7%)"
						height="310px"
						border-style="double"
						width="330px"
						border-color="#fe982a"
						position="static"
						bottom="auto"
						left="auto"
						right="189px"
						top="160px"
					>
						<Text
							as="h3"
							font="normal 500 34px/1.2 --fontFamily-googlePlayfairDisplay"
							margin="0 0 20px 0"
							text-align="center"
							color="--dark"
						>
							Свяжитесь с нами!
						</Text>
						<Formspree endpoint="https://formspree.io/f/mgeplyzz">
							<Stack gap="16px">
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="normal 400 16px/1.5 --fontFamily-googleOswald" margin="0 0 4px 0" color="--dark">
										ФИО
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="normal 400 16px/1.5 --fontFamily-googleOswald" margin="0 0 4px 0" color="--dark">
										Телефон
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="normal 400 16px/1.5 --fontFamily-googleOswald" margin="0 0 4px 0" color="--dark">
										Почта
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" padding="0px 0px 0px 90px" />
									<Button
										background="#fe982a"
										padding="8px 24px 8px 24px"
										width="160px"
										color="#000000"
										font="normal 600 18px/1.5 --fontFamily-googleOswald"
										text-align="center"
									>
										Отправить
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</Stack>
				<Text font="normal 24px --fontFamily-googleOswald" padding="200px 0px 100px 150px" width="500px" sm-font="normal 10px --fontFamily-googleOswald">
					Наши специалисты могут Вам помочь!
				</Text>
			</Section>
			<Text padding="0px 0px 10px 0px" font="24px --fontFamily-googleOswald" color="#fe982a">
				Мы продоставляем бесплатную консультацию с лучшими юристами!
			</Text>
		</Section>
		<Section
			padding="10px 0px 40px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="Works"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
			height="830px"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				font="normal 900 42px/1.2 --fontFamily-googlePlayfairDisplay"
				margin="0px 0px 48px 0px"
				color="#005236"
				text-align="center"
				lg-text-align="center"
				md-margin="0px 0px 36px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				Мы помогаем в решении{" "}
				<br />
				следующих вопросов:
			</Text>
			<Stack width="100%">
				{"    "}
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="16px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-light url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/4.png?v=2020-11-29T18:40:52.254Z) center center/100% no-repeat"
						padding="0px 0px 60% 1px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/1_1.png?v=2020-12-04T05:21:15.891Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						border-width="0px"
						border-radius="px"
						cursor="auto"
						overflow-x="visible"
						display="inline"
					/>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/5.png?v=2020-11-29T18:44:57.933Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/1_2.png?v=2020-12-04T05:25:08.794Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/6.png?v=2020-11-29T18:45:11.642Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/1_31.png?v=2020-12-04T05:29:49.201Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/7.png?v=2020-11-29T18:45:26.353Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/1_4.png?v=2020-12-04T05:33:04.196Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/8.png?v=2020-11-29T18:45:38.497Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/1_5.png?v=2020-12-04T05:35:22.221Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 16px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/9.png?v=2020-11-29T18:45:52.494Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/16.png?v=2020-12-04T05:17:30.008Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Link
				href="/work"
				text-decoration-line="initial"
				color="#04080C"
				padding="8px 18px 8px 18px"
				font="normal 600 16px/1.5 --fontFamily-googleOswald"
				letter-spacing="0.5px"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				text-align="center"
				margin="48px 0px 0px 0px"
				background="#6bc4a6"
				hover-transform="translateY(-4px)"
				lg-margin="24px 0px 0px 0px"
				md-margin="36px 0px 0px 0px"
				width="1250px"
			>
				Полный перечень услуг
			</Link>
		</Section>
		<Section padding="50px 0 50px 0" sm-padding="40px 0" background="#50f10c url(https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center/cover">
			<Box
				max-width="500px"
				padding="10px 80px 90px 50px"
				background="--color-light"
				color="--dark"
				display="initial"
				width="435px"
				height="650px"
			>
				<Text
					as="h4"
					font="normal normal 500 24px/1.5 --fontFamily-googlePlayfairDisplay"
					color="#005236"
					letter-spacing="4px"
					text-transform="uppercase"
					margin="6px 0"
					white-space="normal"
					text-align="center"
				>
					О компании
				</Text>
				<Text
					font="normal 300 21px/1.5 --fontFamily-googleOswald"
					color="#005236"
					text-align="justify"
					width="470px"
					padding="0px 10px 0px 0px"
				>
					{"  "}"Юрист.ру" молодая, перспективная компания в сфере оказания юридических услуг.
					<br />
					{"     "}Наша команда состоит из юристов и адвокатов с достойным стажем работы, который позволяет решать задачи различной сложности.
					<br />
					{"   "}Главным вектором деятельности являются актуальные проблемы взыскания и возврата долгового обязательства физических и юридических лиц.
					<br />
					{"   "}Мы дорожим нашей репутацией, поэтому прикладываем максимум усилий для положительного результата по каждому делу, рассматривая все случаи в индивидуальном порядке.
					<br />
					{"  "}Мы гарантируем конфиденциальность, так как безопасность и сохранность личных данных это гарантия качества.
				</Text>
				<Image width="480px" height="260px" src="https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/%D1%81%D1%85%D0%B5%D0%BC%D0%B0.png?v=2020-11-29T20:22:15.227Z" padding="0px px 0px 0px" />
			</Box>
		</Section>
		<Section text-align="center" padding="50px 0 100px 0" sm-padding="40px 0">
			<Text
				as="h1"
				font="normal 900 60px/1.2 --fontFamily-googlePlayfairDisplay"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#005236"
			>
				Достижения
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/7564db3d6af51bba798e4cfea344e0fe_xl.jpg?v=2020-11-27T10:11:41.058Z" width="340px" max-width="100%" height="480px" />
				</Box>
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/7564db3d6af51bba798e4cfea344e0fe_xl.jpg?v=2020-11-27T10:11:41.058Z" width="340px" max-width="100%" height="480px" />
				</Box>
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/7564db3d6af51bba798e4cfea344e0fe_xl.jpg?v=2020-11-27T10:11:41.058Z" width="340px" max-width="100%" height="480px" />
				</Box>
			</Box>
		</Section>
		<Section background="--color-light url(https://uploads.quarkly.io/5fc0b4b179530b001fd2cf31/images/zelenaya-zerkalnaya-zdanie_1.jpg?v=2020-11-29T20:35:48.218Z)" color="--dark" padding="34px 0 34px 0" lazy-load>
			<Override slot="SectionContent" width="800px" padding="0px 100px 0px px" background="#ffffff" />
			<Stack width="500px">
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" width="500px" />
					<Text
						font="normal 900 42px/1.2 --fontFamily-googlePlayfairDisplay"
						max-width="10000px"
						margin="10px 0 0 0"
						text-align="center"
						padding="0px 0px 0px px"
						width="800px"
						border-color="#005236"
						color="#005236"
					>
						Записаться на приём
					</Text>
				</StackItem>
				<StackItem width="100%" lg-width="100%">
					<Formspree display="block" endpoint="https://formspree.io/f/mgeplyzz">
						<Stack gap="16px">
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" flex-direction="column" width="1150px" padding="0px 230px 0px 60px" />
								<Text font="normal 400 16px/1.5 --fontFamily-googleOswald" margin="0 0 4px 0" color="#005236">
									ФИО
								</Text>
								<Input max-width="700px" width="700px" name="name" />
								<Text font="normal 400 16px/1.5 --fontFamily-googleOswald" margin="0 0 4px 0" color="#005236">
									Телефон
								</Text>
								<Input max-width="800px" width="700px" type="email" name="email" />
								<Text font="normal 400 16px/1.5 --fontFamily-googleOswald" margin="0 0 4px 0" color="#005236">
									Сообщение
								</Text>
								<Input as="textarea" rows="4" width="700px" name="message" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" padding="0px 0px 0px 300px" />
								<Button
									text-align="center"
									width="200px"
									padding="8px 24px px 450"
									margin="0px 0px 10px 0px"
									background="#6bc4a6"
									font="normal 600 16px/1.5 --fontFamily-googleOswald"
								>
									Отправить
								</Button>
							</StackItem>
						</Stack>
					</Formspree>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="normal 900 60px/1.2 --fontFamily-googlePlayfairDisplay"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
				color="#005236"
			>
				Отзывы
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1457732815361-daa98277e9c8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="normal 500 28px/1.2 --fontFamily-googlePlayfairDisplay" margin="5px 0 20px 0" color="--orange">
						Симонова А. И.
					</Text>
					<Text as="p" margin="20px 0 5px 0" text-align="justify" font="300 19px/24px --fontFamily-googleOswald">
						Благодарю сплоченный коллектив юристов вашей юридической компании «Юрист.ру» за плодотворное сотрудничество! Моя проблема решена положительно благодаря вашей команде! Желаю успехов в непростом деле защиты прав и законных интересов граждан.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="normal 500 28px/1.2 --fontFamily-googlePlayfairDisplay" margin="5px 0 20px 0" color="--orange">
						Егоров В. Н.
					</Text>
					<Text as="p" margin="20px 0 5px 0" text-align="justify" font="300 19px/24px --fontFamily-googleOswald">
						Выражаю благодарность сотрудникам юридической компании “Юрист.ру”, за квалифицированную помощь и профессионализм, оказанные в решении моего вопроса. Удачи и процветания Вам.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1566761284295-af58908238bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="normal 500 28px/1.2 --fontFamily-googlePlayfairDisplay" margin="5px 0 20px 0" color="--orange">
						Антонов А. А.
					</Text>
					<Text as="p" margin="20px 0 5px 0" text-align="justify">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Strong
								font="300 19px/24px --fontFamily-googleOswald"
								text-align="justify"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Выражаю огромную благодарность  Юридической компании "Юрист.ру" за квалифицированный юридический подход к решению наших проблем по вопросу наследства.{" "}
							</Strong>
						</Strong>
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1517800249805-f3d51bd0b07f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="normal 500 28px/1.2 --fontFamily-googlePlayfairDisplay" margin="5px 0 20px 0" color="--orange">
						Иванова Л. Г.
					</Text>
					<Text as="p" margin="20px 0 5px 0" text-align="justify" font="300 19px/24px --fontFamily-googleOswald">
						Юрист компании внимательно меня выслушал, изучил мою проблему и подобрал решение.
						<br />
						Представитель от компании  оказался настоящим профессионалом, во много благодаря ему дело завершилось успешно.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			color="--light"
			padding="100px 0 50px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 34, 25, 0.62) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1474405273094-b668656721eb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Box />
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="h4" margin="6px 0" font="normal 300 20px/1.5 --fontFamily-googlePlayfairDisplay">
							Адрес
						</Text>
						<Text as="p" margin="6px 0" font="normal 500 28px/1.2 --fontFamily-googleOswald">
							г.Самара, ул. Ново-Садовая 00
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="h4" margin="6px 0" font="normal 300 20px/1.5 --fontFamily-googlePlayfairDisplay">
							Email
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link
								href="mailto:hello@company.com"
								text-decoration="none"
								hover-text-decoration="underline"
								color="--light"
								font="500 28px/33.6px --fontFamily-googleOswald"
							>
								urist@company.com
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
						/>
						<Text as="h4" margin="6px 0" font="normal 300 20px/1.5 --fontFamily-googlePlayfairDisplay">
							Контакты
						</Text>
						<Text as="p" margin="6px 0" font="normal 500 28px/1.2 --fontFamily-googleOswald">
							+8 (111) 098-00-00
							<br />
							+8 (111) 098-00-00
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="0"
						margin="48px 0"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Icon
							category="fa"
							icon={FaFacebookF}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-orange"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaTwitter}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-orange"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaLinkedinIn}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-orange"
							border-radius="50%"
						/>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<StackItem />
		<Box />
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