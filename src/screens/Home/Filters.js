import { Select, Form } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react";

import { BLUE, BLUE_BACKGROUND } from "@constants/style";

import aidStore from "@stores/aids/aidStore";

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
			<h3 style={{ color: "white", marginLeft: 30 }}>Mon entreprise</h3>

			<Observer>
				{() => (
					<StyledForm form={form} onValuesChange={onFormValuesChange}>
						<Form.Item name={aidStore.filterType.key}>
							<Select
								placeholder={aidStore.filterType.title}
								onChange={onTypeChange}
							>
								{[...aidStore.filterType.data].map(value => (
									<Option value={value}>{value}</Option>
								))}
							</Select>
						</Form.Item>
						<Form.Item name={aidStore.filterActivity.key}>
							<Select
								placeholder={aidStore.filterActivity.title}
								disabled={activeType === "default"}
							>
								{[
									...aidStore.filterActivity.data[activeType]
								].map(value => (
									<Option value={value}>{value}</Option>
								))}
							</Select>
						</Form.Item>
						<Form.Item name={aidStore.filterLocalisation.key}>
							<Select
								placeholder={aidStore.filterLocalisation.title}
							>
								{[...aidStore.filterLocalisation.data].map(
									value => (
										<Option value={value}>{value}</Option>
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
	-webkit-box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	-moz-box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	border-radius: 20px;
	overflow: hidden;
	padding: 20px;
	margin-bottom: 20px;

	.ant-select-selector {
		background-color: ${BLUE_BACKGROUND} !important;
		border: none !important;
		border-radius: 20px !important;
		height: 40px !important;
	}

	.ant-select-single {
		height: 40px !important;
		line-height: 40px !important;
		font-weight: 700;
	}

	.ant-select-selection-item {
		position: relative !important;
		left: 20px !important;
		top: 5px;
	}

	.ant-select-selection-placeholder {
		line-height: 40px !important;
		color: ${BLUE};
		font-weight: 500;
		opacity: 1;
		position: relative;
		left: 20px;
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
