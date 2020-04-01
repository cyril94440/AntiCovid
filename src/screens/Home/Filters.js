import { Select, Form } from "antd";
import { UserOutlined, ToolOutlined, CompassOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Observer } from "mobx-react";

import { BLUE, BLUE_BACKGROUND, YELLOW, RED } from "@constants/style";
import aidStore from "@stores/aids/aidStore";
import { DARK_BLUE } from "../../constants/style";
const { Option } = Select;

const PlansFilters = ({ filters, setFilters }) => {
	const [activeType, setActiveType] = React.useState("default");

	const [form] = Form.useForm();

	const onTypeChange = value => {
		form.resetFields(["Activité"]);
		if (value.startsWith("Soc")) {
			setActiveType("Soc");
		} else if (value.startsWith("Ind")) {
			setActiveType("Ind");
		} else if (value.startsWith("Auto")) {
			setActiveType("Auto");
		} else {
			setActiveType("default");
			alert("Unknown type. Please contact us");
		}
	};

	const onFormValuesChange = (changedValues, allValues) => {
		const newFilters = { ...allValues };
		if ("Type structure" in changedValues) {
			delete newFilters["Activité"];
		}
		if (newFilters["Activité"]) {
			newFilters[aidStore.activitiesFullKey[activeType]] =
				newFilters["Activité"];
		}
		delete newFilters["Activité"];
		setFilters({
			...newFilters,
			"Nature de l'aide": filters["Nature de l'aide"]
		});
	};

	return (
		<Container>
			<AntiCovidDiv>
				<span className="description">
					AntiCovid est une plateforme solidaire pour aider les
					entrepreneurs à surmonter la crise du Covid 19.{" "}
				</span>
			</AntiCovidDiv>
			<h3
				style={{
					marginLeft: 30
				}}
			>
				Mon entreprise
			</h3>

			<Observer>
				{() => (
					<StyledForm
						form={form}
						onValuesChange={onFormValuesChange}
						size="large"
					>
						<Form.Item name={aidStore.filterType.key}>
							<Select
								placeholder={
									<span>
										<UserOutlined
											style={{
												color: `${RED}`,
												marginRight: 15
											}}
										/>
										{aidStore.filterType.title}
									</span>
								}
								onChange={onTypeChange}
							>
								{[...aidStore.filterType.data].map(value => (
									<Option key={value} value={value}>
										{value}
									</Option>
								))}
							</Select>
						</Form.Item>
						<Form.Item name={aidStore.filterActivity.key}>
							<Select
								placeholder={
									<span>
										<ToolOutlined
											style={{
												color: `${YELLOW}`,
												marginRight: 15
											}}
										/>
										{aidStore.filterActivity.title}
									</span>
								}
								disabled={activeType === "default"}
							>
								{[
									...aidStore.filterActivity.data[activeType]
								].map(value => (
									<Option key={value} value={value}>
										{value}
									</Option>
								))}
							</Select>
						</Form.Item>
						<Form.Item name={aidStore.filterLocalisation.key}>
							<Select
								placeholder={
									<span>
										<CompassOutlined
											style={{
												color: `${BLUE}`,
												marginRight: 15
											}}
										/>
										{aidStore.filterLocalisation.title}
									</span>
								}
							>
								{[...aidStore.filterLocalisation.data].map(
									value => (
										<Option key={value} value={value}>
											{value}
										</Option>
									)
								)}
							</Select>
						</Form.Item>
					</StyledForm>
				)}
			</Observer>
		</Container>
	);
};

const Container = styled.div``;
const StyledForm = styled(Form)`
	margin-left: 10px;
	background-color: white;
	// max-width: 600px;

	// overflow: hidden;
	padding: 20px;
	margin-bottom: 20px;
	display: grid;
	grid-gap: 15px;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

	.ant-select-selector {
		background-color: ${BLUE_BACKGROUND} !important;
		border: none !important;
		border-radius: 20px !important;
	}

	.ant-select-selection-placeholder {
		color: black !important;
	}
`;

const AntiCovidDiv = styled.div`
	text-align: center;
	padding-top: 40px;
	padding-bottom: 40px;
	max-width: 800px;
	margin: auto;

	.description {
		font-size: 24px;
		margin: auto;
		font-weight: 300;
	}
`;

export default PlansFilters;
