import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../CSS/Menu.css';

const Menu = () => {
  const slice = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (slice.isLogedin === false) {
      navigate('/', { replace: true });
    }
  }, [navigate, slice.isLogedin]);

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-body text-center'>
            <div className="card-img d-flex align-items-center justify-content-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
              <label htmlFor='username'>Kullanıcı Adı</label>
              <input
                id='username'
                className='form-control'
                placeholder='Kullanıcı Adı'
                value={slice.username}
              />
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                className='form-control'
                placeholder='Email'
                value={slice.email}
              />
              <label htmlFor='password'>Şifre</label>
              <input
                id='password'
                className='form-control'
                placeholder='Şifre'
                value={slice.password}
              />
              <label htmlFor='birthdate'>Doğum Tarihi</label>
              <input
                id='birthdate'
                className='form-control'
                placeholder='Doğum Tarihi'
                value={slice.date}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
