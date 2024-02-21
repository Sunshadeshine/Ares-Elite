import React from "react";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";

const Step2 = ({
  formData,
  step,
  formFields,
  onPrevStep,
  onNextStep,
  onChange,
  next,
  prev,
  now,
  submit,
  form_name,
}) => {
  const isFetching = useSelector((state) => state.fetch_app.isFetching);

  const handleChange = (fieldName, value) => {
    onChange(fieldName, value);
  };

  return (
    <div className="mt-4 client-form">
      <h2 className="text-center">
        {form_name == "pres" ? <>Prescription</> : <>Evaluation</>} Form
      </h2>
      <ProgressBar
        now={now}
        label={`${now}%`}
        visuallyHidden
        style={{
          height: "7px",
          margin: "auto",
          marginBottom: "40px",
          marginTop: "20px",
          width: "500px",
        }}
      />{" "}
      {/* <h5 className="mb-4">Step {step} </h5> */}
      <Form onSubmit={(e) => e.preventDefault()} className="form-form">
        {isFetching ? (
          <>
            <div className="text-center m-auto w-100 h-100 mt-5">
              <Spinner />
            </div>
          </>
        ) : (
          <>
            {formFields.map((field, index) =>
              index % 2 === 0 ? (
                <Row key={index}>
                  <Col sm={6}>
                    <Form.Group controlId={field.field}>
                      <Form.Label>{field.field}</Form.Label>
                      <Form.Control
                        as="select"
                        value={formData[field.field] || ""}
                        onChange={(e) =>
                          handleChange(field.field, e.target.value)
                        }
                      >
                        <option value="">Select an option</option>
                        {field.enumValues.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  {formFields[index + 1] && (
                    <Col sm={6}>
                      <Form.Group controlId={formFields[index + 1].field}>
                        <Form.Label>{formFields[index + 1].field}</Form.Label>
                        <Form.Control
                          as="select"
                          value={formData[formFields[index + 1].field] || ""}
                          onChange={(e) =>
                            handleChange(
                              formFields[index + 1].field,
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select an option</option>
                          {formFields[index + 1].enumValues.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  )}
                </Row>
              ) : null
            )}
          </>
        )}
      </Form>
      <div className="w-100 mt-4" style={{ display: "ruby-text" }}>
        {prev && (
          <button onClick={onPrevStep} className="purple-button w-25 mr-2">
            PREVIOUS
          </button>
        )}
        {next && (
          <button onClick={onNextStep} className="purple-button w-25">
            {submit ? <>SUBMIT</> : <>NEXT</>}
          </button>
        )}
      </div>
    </div>
  );
};

export default Step2;
