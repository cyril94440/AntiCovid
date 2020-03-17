import { Col, Checkbox, Row, Typography } from "antd";

export default function useCheckbox(title, options, defaultcheckedList) {
    const [state, setState] = React.useState({
        checkedList: defaultcheckedList,
        indeterminate: defaultcheckedList.length,
        checkAll: false
    });

    const onChange = React.useCallback(checkedList => {
        setState({
            checkedList,
            indeterminate:
                !!checkedList.length && checkedList.length < options.length,
            checkAll: checkedList.length === options.length
        });
    }, []);

    const onCheckAllChange = React.useCallback(e => {
        setState({
            checkedList: e.target.checked ? options : [],
            indeterminate: false,
            checkAll: e.target.checked
        });
    }, []);

    const Component = () => (
        <Col span={24}>
            <Row>
                <Col span={24}>
                    <Typography.Title level={3}>{title}</Typography.Title>
                </Col>
                <Col span={24}>
                    <Checkbox
                        indeterminate={state.indeterminate}
                        onChange={onCheckAllChange}
                        checked={state.checkAll}
                    >
                        Toutes
                    </Checkbox>
                    <Checkbox.Group
                        options={options}
                        value={state.checkedList}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </Col>
    );

    return [Component, state.checkedList];
}
