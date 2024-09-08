
// import React, { useState } from 'react';
// import StarRatings from 'react-star-ratings';
// import { useTranslation } from 'react-i18next';
// import './ReviewForm.css';

// const ReviewForm = () => {
//   const { t } = useTranslation();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     review: '',
//     rating: 0
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const onStarClick = (nextValue) => {
//     setFormData({
//       ...formData,
//       rating: nextValue
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, review, rating } = formData;

//     if (!name || !email || !review) {
//       alert(t('fillOutAllFields'));
//       return;
//     }

//     const mailtoLink = `mailto:muhdzahal123@gmail.com?subject=Review from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ARating: ${encodeURIComponent(rating)}%0D%0AReview: ${encodeURIComponent(review)}`;
//     window.location.href = mailtoLink;

//     setFormData({
//       name: '',
//       email: '',
//       review: '',
//       rating: 0
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="review-form">
//       <div className="form-group">
//         <label htmlFor="name">{t('Review.name')}</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           aria-label={t('Review.name')}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">{t('Review.email')}</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           aria-label={t('Review.email')}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="rating">{t('Review.rating')}</label>
//         <StarRatings
//           rating={formData.rating}
//           starRatedColor="gold"
//           changeRating={onStarClick}
//           numberOfStars={5}
//           name='rating'
//           starDimension="30px"
//           starSpacing="5px"
//           starEmptyColor="gray"
//           starHoverColor="gold"
//           starSelectColor="gold"
//           isHalfStar={true}
//           aria-label={t('Review.rating')}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="review">{t('Review.review')}</label>
//         <textarea
//           name="review"
//           value={formData.review}
//           onChange={handleChange}
//           required
//           aria-label={t('Review.review')}
//         />
//       </div>
//       <button type="submit" className="submit-button">
//         {t('Review.submit')}
//       </button>
//     </form>
//   );
// };

// export default ReviewForm;


import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { useTranslation } from 'react-i18next';
import './ReviewForm.css';
import { baseUrl } from '../../constants';

const ReviewForm = () => {
  const { t } = useTranslation();
  const [loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    rating: 0
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onStarClick = (nextValue) => {
    setFormData({
      ...formData,
      rating: nextValue
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, review, rating } = formData;

    if (!name || !email || !review) {
      alert(t('fillOutAllFields'));
      return;
    }

    // const mailtoLink = `mailto:muhdzahal123@gmail.com?subject=Review from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ARating: ${encodeURIComponent(rating)}%0D%0AReview: ${encodeURIComponent(review)}`;
    const mailtoLink = `mailto:ingo@houseoftea.qa?subject=Review from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ARating: ${encodeURIComponent(rating)}%0D%0AReview: ${encodeURIComponent(review)}`;
    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: '',
      review: '',
      rating: 0
    });
  };
  // const handleSubmit = (e) => {
  //   if(loading){
  //     return;
  //   }
  //   e.preventDefault();
  //   const { name, email, review, rating } = formData;

  //   if (!name || !email || !review) {
  //     alert(t('fillOutAllFields'));
  //     return;
  //   }
    
  //   // const mailtoLink = `mailto:muhdzahal123@gmail.com?subject=Review from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ARating: ${encodeURIComponent(rating)}%0D%0AReview: ${encodeURIComponent(review)}`;
  //   // const mailtoLink = `mailto:ingo@houseoftea.qa?subject=Review from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ARating: ${encodeURIComponent(rating)}%0D%0AReview: ${encodeURIComponent(review)}`;
  //   // window.location.href = mailtoLink;
  //   setLoading(true)
  //   fetch(baseUrl()+'/contact-us/send',{
  //     method:'POST',
  //     body: JSON.stringify({...formData}), 
  //     headers: { 
  //       "Content-type": "application/json; charset=UTF-8"
  //   } 
  //   }).then(res=>{
  //     setFormData({
  //     name: '',
  //     email: '',
  //     review: '',
  //     rating: 0
  //   });
  //   setLoading(false)
  //   }).catch(()=>{
  //     setLoading(false)
  //   })

    
  // };

  return (
    <div className="review-form-container" >
      <h2 className="review-heading">{t('Review.Review')}</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="name">{t('Review.name')}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label={t('Review.name')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('Review.email')}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label={t('Review.email')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">{t('Review.rating')}</label>
          <StarRatings
            rating={formData.rating}
            starRatedColor="gold"
            changeRating={onStarClick}
            numberOfStars={5}
            name='rating'
            starDimension="30px"
            starSpacing="5px"
            starEmptyColor="gray"
            starHoverColor="gold"
            starSelectColor="gold"
            isHalfStar={true}
            aria-label={t('Review.rating')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">{t('Review.review')}</label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            required
            aria-label={t('Review.review')}
          />
        </div>
        <button type="submit" className="submit-button">
          {loading?'Loading...':t('Review.submit')}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
