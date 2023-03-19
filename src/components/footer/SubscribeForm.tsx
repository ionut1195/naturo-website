import { Button, Form, Input, message } from "antd";
import styles from "./SubscribeForm.module.css";

const SubscribeForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onFinish = () => {
    messageApi.open({
      type: "success",
      content: "You have subscribed",
    });
    form.resetFields();
  };
  return (
    <div>
      {contextHolder}
      <p className={styles.description}>Subscribe</p>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          style={{ marginBottom: "5px" }}
          name={"email"}
          rules={[
            {
              required: true,
              type: "email",
              message: "Enter a valid e-mail address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button
          htmlType="submit"
          className={styles.submitButton}
          type="primary"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default SubscribeForm;
