import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterBg } from '../../assets';
import { Gap, Link } from '../../components/atoms';
import './detailBlog.scss';


const DetailBlog = () => {
  const history = useHistory()
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date post</p>
      <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed magnam eveniet nemo hic itaque cupiditate, optio dolorum odio aliquid saepe doloribus fugiat illum corporis iusto cum quis incidunt nam voluptas! Vero tenetur, veritatis saepe similique officia nisi quisquam amet fugiat ea maxime accusamus laudantium doloribus quaerat exercitationem. Voluptatum asperiores, commodi saepe enim et vel maiores delectus voluptates quaerat pariatur odit nobis adipisci repellendus recusandae voluptas optio ab animi facilis ut odio expedita nemo temporibus? Blanditiis neque nobis assumenda dicta in qui, placeat eveniet ipsum illum obcaecati velit magni ab modi culpa impedit beatae mollitia atque vitae quia natus adipisci?</p>
      <Gap height={20} />
      <Link title="Kembali ke Home" onClick={() => history.push('/')} />
    </div>
  )
}

export default DetailBlog
