// libraries
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import axios from 'axios';
// style
import './home.scss';
// components
import { BlogItem, Button, Gap } from '../../components';
// actions
import { setDataBlog } from '../../config/redux/action';


const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  console.log('page', page);

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const history = useHistory();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    console.log(counter);
  }

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
    console.log(counter);
  }

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Apakah anda yakin ingin menghapus post ini?',
      buttons: [
        {
          label: 'YA',
          onClick: () => {
            axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
              .then(res => {
                console.log('Delete Success', res.data);
                dispatch(setDataBlog(counter));
              })
              .catch(err => {
                console.log('error: ', err);
              })
          }
        },
        {
          label: 'TIDAK',
          onClick: () => console.log('user tidak setuju')
        }
      ]
    });
  }

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="create blog" onClick={() => history.push('/create-blog')} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map(blog => {
          return <BlogItem
            key={blog._id}
            image={`http://localhost:4000/${blog.image}`}
            title={blog.title}
            body={blog.body}
            name={blog.author.name}
            date={blog.createdAt}
            _id={blog._id}
            onDelete={confirmDelete}
          />
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">{page.currentPage} / {page.totalPage}</p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home;