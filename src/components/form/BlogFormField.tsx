import React from "react";
import {Field, Form, Formik} from "formik";
import {Button, TextField} from "@mui/material";

function BlogFormField(props: { value: string, setContent: React.Dispatch<React.SetStateAction<string>>, onSubmit: () => void }) {
  return <Formik initialValues={{content: ''}} onSubmit={props.onSubmit}>
    <Form>
      <Field
          as={TextField}
          type="text"
          multiline
          className="form-field"
          name="content"
          value={props.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setContent(e.target.value)}
          sx={{
            width: "100%",
          }}
          InputProps={{
            inputProps: {
              maxLength: 1000,
            },
          }}
      />
      <Button type="submit" variant="contained" color="success">
        post
      </Button>
    </Form>
  </Formik>;
}

export default BlogFormField;