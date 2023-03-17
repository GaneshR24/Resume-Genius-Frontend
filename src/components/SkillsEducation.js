import React from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const SkillsEducation = () => {
  return (
    <>
      <div>
        <h5>
          <b>Education</b>
        </h5>
        <hr />
        <Form.List name="education">
          {(fields, { add, remove }) => (
            <>
              <div className="row">
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <div className="col-md-3">
                      <Form.Item
                        {...restField}
                        name={[name, "qualification"]}
                        rules={[
                          { required: true, message: "education qualification is required" },
                        ]}
                      >
                        <Input placeholder="Qualification" />
                      </Form.Item>
                    </div>

                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "percentage"]}
                        rules={[
                          { required: true, message: "education percentage is required" },
                        ]}
                      >
                        <Input placeholder="Percentage" />
                      </Form.Item>
                    </div>

                    <div className="col-md-3">
                      <Form.Item
                        {...restField}
                        name={[name, "institution"]}
                        rules={[
                          { required: true, message: "education institution is required" },
                        ]}
                      >
                        <Input placeholder="Institution" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "range"]}
                        rules={[
                          { required: true, message: "education year is required" },
                        ]}
                      >
                        <Input placeholder="Year Range" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: "tomato" }}
                        onClick={() => remove(name)}
                      />
                    </div>
                  </>
                ))}
              </div>

              <Form.Item>
                <Button
                  className="btn-add"
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Education
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <h5>
          <b>Skills</b>
        </h5>
        <hr />
        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              <div className="row">
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <div className="col-md-4">
                      <Form.Item
                        {...restField}
                        name={[name, "technology"]}
                        rules={[
                          { required: true, message: "skills technology is required" },
                        ]}
                      >
                        <Input placeholder="Technology" />
                      </Form.Item>
                    </div>

                    <div className="col-md-4">
                      <Form.Item
                        {...restField}
                        name={[name, "rating"]}
                        rules={[
                          { required: true, message: "skills rating is requirede" },
                        ]}
                      >
                        <Input placeholder="Rating" />
                      </Form.Item>
                    </div>

                    <div className="col-md-2">
                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: "tomato" }}
                        onClick={() => remove(name)}
                      />
                    </div>
                  </>
                ))}
              </div>

              <Form.Item>
                <Button
                  className="btn-add"
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Skill
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
    </>
  );
};

export default SkillsEducation;
