import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button, Upload, Textarea, Gap, Link } from '../../components';
import './createBlog.scss';


const CreateBlog = () => {
  const history = useHistory()
  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push('/')} />
      <p className="title">Create blog page</p>
      <Input label="Post Title" />
      <Upload />
      <Textarea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default CreateBlog;
