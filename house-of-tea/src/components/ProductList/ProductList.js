
// import React from "react";
// import { useParams } from "react-router-dom";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import cardImage from "../../assets/content-img/image 39.png";
// import cardImage2 from "../../assets/content-img/image 13.png";
// import "./ProductList.css";

// const ProductList = () => {
//   const { category } = useParams();

//   const productSections = {
//     "safety-products": {
//       heading: "Safety Products",
//       sections: [
//         {
//           sectionTitle: "Head Safety Products",
//           products: [
//             {
//               id: 1,
//               title: "Helmet 1",
//               description: "Description of Helmet 1",
//               image: cardImage,
//             },
//             {
//               id: 2,
//               title: "Cap 1",
//               description: "Description of Cap 1",
//               image: cardImage2,
//             },
//             {
//               id: 3,
//               title: "Hat 1",
//               description: "Description of Hat 1",
//               image: cardImage,
//             },
//             {
//               id: 4,
//               title: "Hat 2",
//               description: "Description of Hat 2",
//               image: cardImage,
//             },
//           ],
//         },
//         {
//           sectionTitle: "Hand Safety Products",
//           products: [
//             {
//               id: 5,
//               title: "Glove 1",
//               description: "Description of Glove 1",
//               image: "path/to/glove1.png",
//             },
//           ],
//         },
//       ],
//     },
//   };

//   const categorySections = productSections[category] || { sections: [] };

//   const encodeText = (str) => encodeURIComponent(str).replace(/%20/g, "+");

//   // Specify the WhatsApp number
//   const whatsappNumber = "+97431608138"; // Replace with the specific number

//   const createWhatsAppLink = (title, description, imageUrl) => {
//     const text = `${title}\n${description}\n${imageUrl}`;
//     return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeText(
//       text
//     )}`;
//   };

//   return (
//     <Container>
//       <h1 className="category-heading">{categorySections.heading}</h1>
//       {categorySections.sections.length > 0 ? (
//         categorySections.sections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="section-card">
//             <h2 className="section-title">{section.sectionTitle}</h2>
//             <Row>
//               {section.products.length > 0 ? (
//                 section.products.map((product) => (
//                   <Col key={product.id} md={3} sm={6} xs={12} className="mb-4">
//                     <Card className="product-card">
//                       <Card.Img
//                         variant="top"
//                         src={product.image}
//                         alt={product.title}
//                         className="product-image"
//                       />
//                       <Card.Body>
//                         <Card.Title>{product.title}</Card.Title>
//                         {/* <Card.Text>{product.description}</Card.Text> */}
//                         <a
//                           href={createWhatsAppLink(
//                             product.title,
//                             product.description,
//                             product.image
//                           )}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="btn btn-success"
//                         >
//                           Share on WhatsApp
//                         </a>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))
//               ) : (
//                 <p>No products found for this section.</p>
//               )}
//             </Row>
//           </div>
//         ))
//       ) : (
//         <p>No sections found for this category.</p>
//       )}
//     </Container>
//   );
// };

// export default ProductList;

import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import cardImage from "../../assets/content-img/image 39.png";
import cardImage2 from "../../assets/content-img/image 13.png";
import "./ProductList.css";

const ProductList = () => {
  const { category } = useParams();

  const productSections = {
    "safety-products": {
      heading: "Safety Products",
      sections: [
        {
          sectionTitle: "Head Safety Products",
          products: [
            {
              id: 1,
              title: "Helmet 1",
              description: "Description of Helmet 1",
              image: cardImage,
            },
            {
              id: 2,
              title: "Cap 1",
              description: "Description of Cap 1",
              image: cardImage2,
            },
            {
              id: 3,
              title: "Hat 1",
              description: "Description of Hat 1",
              image: cardImage,
            },
            {
              id: 4,
              title: "Hat 2",
              description: "Description of Hat 2",
              image: cardImage2,
            },
          ],
        },
        {
          sectionTitle: "Hand Safety Products",
          products: [
            {
              id: 5,
              title: "Glove 1",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 6,
              title: "Glove 2",
              description: "Description of Glove 1",
              image: cardImage,
            },
            {
              id: 7,
              title: "Glove 3",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 8,
              title: "Glove 4",
              description: "Description of Glove 1",
              image: cardImage,
            },
          ],
        },
        {
          sectionTitle: "EAR Safety Products",
          products: [
            {
              id: 5,
              title: "Glove 1",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 6,
              title: "Glove 2",
              description: "Description of Glove 1",
              image: cardImage,
            },
            {
              id: 7,
              title: "Glove 3",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 8,
              title: "Glove 4",
              description: "Description of Glove 1",
              image: cardImage,
            },
          ],
        },
        {
          sectionTitle: "EYE Safety Products",
          products: [
            {
              id: 5,
              title: "Glove 1",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 6,
              title: "Glove 2",
              description: "Description of Glove 1",
              image: cardImage,
            },
            {
              id: 7,
              title: "Glove 3",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 8,
              title: "Glove 4",
              description: "Description of Glove 1",
              image: cardImage,
            },
          ],
        },
      ],
    },
    "specialised-products": {
      heading: "specialised Products",
      sections: [
        {
          sectionTitle: "Head Safety Products",
          products: [
            {
              id: 1,
              title: "Helmet 1",
              description: "Description of Helmet 1",
              image: cardImage,
            },
            {
              id: 2,
              title: "Cap 1",
              description: "Description of Cap 1",
              image: cardImage2,
            },
            {
              id: 3,
              title: "Hat 1",
              description: "Description of Hat 1",
              image: cardImage,
            },
            {
              id: 4,
              title: "Hat 2",
              description: "Description of Hat 2",
              image: cardImage2,
            },
          ],
        },
        {
          sectionTitle: "Hand Safety Products",
          products: [
            {
              id: 5,
              title: "Glove 1",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 6,
              title: "Glove 2",
              description: "Description of Glove 1",
              image: cardImage,
            },
            {
              id: 7,
              title: "Glove 3",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 8,
              title: "Glove 4",
              description: "Description of Glove 1",
              image: cardImage,
            },
          ],
        },
        {
          sectionTitle: "EAR Safety Products",
          products: [
            {
              id: 5,
              title: "Glove 1",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 6,
              title: "Glove 2",
              description: "Description of Glove 1",
              image: cardImage,
            },
            {
              id: 7,
              title: "Glove 3",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 8,
              title: "Glove 4",
              description: "Description of Glove 1",
              image: cardImage,
            },
          ],
        },
        {
          sectionTitle: "EYE Safety Products",
          products: [
            {
              id: 5,
              title: "Glove 1",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 6,
              title: "Glove 2",
              description: "Description of Glove 1",
              image: cardImage,
            },
            {
              id: 7,
              title: "Glove 3",
              description: "Description of Glove 1",
              image: cardImage2,
            },
            {
              id: 8,
              title: "Glove 4",
              description: "Description of Glove 1",
              image: cardImage,
            },
          ],
        },
      ],
    },
  };

  const categorySections = productSections[category] || { sections: [] };

  const encodeText = (str) => encodeURIComponent(str).replace(/%20/g, "+");

  const whatsappNumber = "+97431602060"; 

  const createWhatsAppLink = (title, description, imageUrl) => {
    const text = `${title}\n${description}\n${imageUrl}`;
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeText(text)}`;
  };

  return (
    <Container>
      <h1 className="category-heading">{categorySections.heading}</h1>
      {categorySections.sections.length > 0 ? (
        categorySections.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="section-card">
            <h2 className="section-title">{section.sectionTitle}</h2>
            <div className="img-grid">
              {section.products.length > 0 ? (
                section.products.map((product) => (
                  <div key={product.id} className="img-wrap">
                    <img src={product.image} alt={product.title} />
                    <div className="product-info">
                      <p className="product-title">{product.title}</p>
                      <p className="product-description">{product.description}</p>
                      <a
                        href={createWhatsAppLink(product.title, product.description, product.image)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success"
                      >
                        Share on WhatsApp
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found for this section.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No sections found for this category.</p>
      )}
    </Container>
  );
};

export default ProductList;
