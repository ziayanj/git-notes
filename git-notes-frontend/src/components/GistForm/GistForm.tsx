import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input } from 'antd';

import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';
import CustomButton from "../CustomButton/CustomButton";
import type { GistFormDetailsType } from '../../types/gistFormDetails.type';
import type { GistFileType } from "../../types/gistFile.type";
import type { GistApiType } from "../../types/gistApiType";
import { createGist, getGist, updateGist } from "../../services/github/gistsService";

import {
  GistFormContainer,
  GistFormHeader,
  GistFormContent,
  GistFileContainer,
  GistFileHeader,
  InputContainer,
  FormActionsContainer,
  AddFileButton,
} from './GistForm.styles';

const GistForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const [gistDetails, setGistDetails] = useState<GistFormDetailsType>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
  
      getGist(id)
        .then(data => {
          const files: GistFileType[] = [];

          Object.entries(data.files).forEach(([ key, val ]: [string, any]) => {
            files.push({ filename: key, content: val.content });
          })

          setGistDetails({ description: data.description, files });
        })
        .catch(_ => setError(true))
        .finally(() => setLoading(false));
    }
  }, [id]);

  useEffect(() => {
    form.setFieldsValue(gistDetails);
  }, [form, gistDetails]);


  const handleCreate = (values: GistFormDetailsType) => {
    const submitVals: GistApiType = {
      public: true, files: {}, description: values.description,
    };

    values.files.forEach((file: GistFileType) => {
      submitVals.files[file.filename] = { 'content': file.content, 'filename': file.filename }
    });

    createGist(submitVals)
      .then(resp => navigate(`/gists/${resp.id}`))
      .catch(err => console.error(err))
  };

  const handleUpdate = (values: GistFormDetailsType) => {
    const submitVals: GistApiType = {
      public: true, files: {}, description: values.description,
    };

    if (gistDetails?.files) {
      gistDetails.files.forEach((file, index) => {
        if (values.files[index]) {
          submitVals['files'][file.filename] = { 'content': values.files[index].content, 'filename': values.files[index].filename }
        } else {
          submitVals['files'][file.filename] = null;
        }
      });
    }

    if (id) {
      updateGist(submitVals, id)
        .then(resp => navigate(`/gists/${id}`))
        .catch(err => console.error(err))
    }
  }

  if (error) {
    return <p>Invalid gist selected!</p>;
  }

  if (loading) {
    return <p>Loading gist details...</p>;
  }

  return (
    <GistFormContainer>
      <GistFormHeader>{id ? 'Update' : 'Create'} Gist</GistFormHeader>

      <GistFormContent>
        <Form
          layout='vertical'
          onFinish={id ? handleUpdate : handleCreate}
          form={form}
          initialValues={{files: [{}]}}
        >
          <Form.Item name="description">
            <Input size='large' type="text" placeholder="Gist Description" />
          </Form.Item>

          <Form.List name="files">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <GistFileContainer key={field.key}>
                    <GistFileHeader>
                      <InputContainer>
                        <Form.Item name={[field.name, 'filename']}>
                          <Input placeholder="Filename including extension..." />
                        </Form.Item>
                      </InputContainer>
                      {fields.length > 1 && <DeleteIcon onClick={() => remove(index)} />}
              
                    </GistFileHeader>
                    <Form.Item
                      name={[field.name, 'content']}
                      rules={[{ required: true, message: "Contents can't be empty"}]}
                    >
                      <TextArea style={{ height: 200, resize: 'none' }} />
                    </Form.Item>
                  </GistFileContainer>
                ))}

                <FormActionsContainer>
                  {!id && (
                    <AddFileButton onClick={add}>
                      Add file
                    </AddFileButton>
                  )}
                  <CustomButton inverted="true" htmlType="submit">
                    {id ? 'Update' : 'Create'} Gist
                  </CustomButton>
                </FormActionsContainer>
              </>
            )}
          </Form.List>
        </Form>
      </GistFormContent>
    </GistFormContainer>
  );
};

export default GistForm;
