import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation();

  const { getCartItems, removeFromCart, updateQuantity, clearCart,updateSize } =
    useContext(CartContext);
  const cartItems = getCartItems();
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [address, setAddress] = useState({
    zone: "",
    street: "",
    building: "",
    details: "",
  });
  const [showAddressForm, setShowAddressForm] = useState(false);
  const deliveryCharge = 10;

  // const storeLocations = [
  //   { name: "Al Nasr", latitude: 25.27039, longitude: 51.500554 },
  //   { name: "Al doha Al Jadeeda", latitude: 25.2776, longitude: 51.5321 },
  //   { name: "Wakra", latitude: 25.1314, longitude: 51.6169 },
  //   { name: "Ain Kaledh", latitude: 25.296987, longitude: 51.540008 },
  //   { name: "Thumama", latitude: 25.2347, longitude: 51.5597 },
  //   { name: "Lusail", latitude: 25.5, longitude: 51.4833 },
  // ];

  const storeLocations = [
    {
      name: "Thumama",
      latitude: 41.684769,
      longitude: -71.374588,
      whatsappNumber: "+97431235757",
    },
    {
      name: "Muaithar  ",
      latitude: 41.68477,
      longitude: -71.37459,
      whatsappNumber: "+97431462211",
    },
    {
      name: "Wakrah ",
      latitude: 41.684769,
      longitude: -71.374588,
      whatsappNumber: "+97431366767",
    },
    {
      name: " Aziziya",
      latitude: 25.2526,
      longitude: 51.4467,
      whatsappNumber: "+97474410010",
    },
    {
      name: "Markhiya ",
      latitude: 25.3388,
      longitude: 51.4992,
      whatsappNumber: "+97477298787",
    },
    {
      name: "Al Khor ",
      latitude: 25.6839,
      longitude: 51.5017,
      whatsappNumber: "+97470377366",
    },
    {
      name: "Lekhdaira ",
      latitude: 25.8396,
      longitude: 51.3662,
      whatsappNumber: "+97477289797",
    },
    {
      name: "Zubara ",
      latitude: 25.977,
      longitude: 51.0455,
      whatsappNumber: "+97470602132",
    },
  ];

  const removeFromCartMessage = () => {
    toast.success("Product Successfully Removed From Cart!", {
      position: "bottom-right",
      autoClose: 5000,
    });
  };

  const removeQtyCartMessage = () => {
    toast.success("Removed Product Quantity Successfully!", {
      position: "bottom-right",
      autoClose: 5000,
    });
  };

  const addQtyCartMessage = () => {
    toast.success("Added Product Quantity Successfully!", {
      position: "bottom-right",
      autoClose: 5000,
    });
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleQuantityChange = (index, change) => {
    const newQuantity = Math.max(1, cartItems[index].quantity + change);
    updateQuantity(index, newQuantity);
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const handleOrderNow = () => {
    if (!selectedStore) {
      toast.error("Please select a store before proceeding with the order.", {
        position: "bottom-right",
        autoClose: 5000,
      });
      return;
    }


    if (!address.zone || !address.street || !address.building) {
      toast.error(
        "Please enter your address before proceeding with the order.",
        {
          position: "bottom-right",
          autoClose: 5000,
        }
      );
      return;
    }
    const totalPrice = getTotalPrice();
    const totalQuantity = getTotalQuantity();
    const deliveryFee = distance > 10 ? deliveryCharge : 0;
    const grandTotal = totalPrice + deliveryFee;

    const storeLocationInfo = selectedStore
      ? `Store Location: ${selectedStore.name}\n\nLocation Link: https://maps.google.com/?q=${selectedStore.latitude},${selectedStore.longitude}`
      : "";

    // const whatsappNumber = "+97431608138";
    const whatsappNumber = selectedStore.whatsappNumber;
    const baseUrl = "https://wa.me/";
    const encodedMessage = encodeURIComponent(
      `Order Details:\n\n${cartItems
        .map(
          (item, index) =>
            `${index + 1}. Product: ${item.name}\n Size : ${item.selectedSize}\nQuantity: ${item.quantity
            }\nPrice: ${item.price} QAR\n\n`
        )
        .join(
          "\n\n"
        )}\n\nTotal Quantity: ${totalQuantity}\nTotal Price: ${totalPrice.toFixed(
          2
        )} QAR\nGrand Total: ${grandTotal.toFixed(2)} QAR\n\nAddress: \n\nZone: ${address.zone
      }, \n\nStreet: ${address.street}, \n\nBuildin NO: ${address.building
      },\n\n LandMark: ${address.details}\n\n\n`
    );

    const locationMessage = location
      ? `\n\nCustomer Location: https://maps.google.com/?q=${location.latitude},${location.longitude}`
      : "";

    const sendMessage = (locationMessage) => {
      const whatsappUrl = `${baseUrl}${whatsappNumber}?text=${encodedMessage}${storeLocationInfo}${locationMessage}`;
      window.open(whatsappUrl, "_blank");
    };
    clearCart();
    if (location) {
      sendMessage(locationMessage);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          if (selectedStore) {
            const calculatedDistance = calculateDistance(
              selectedStore.latitude,
              selectedStore.longitude,
              latitude,
              longitude
            );
            setDistance(calculatedDistance);
          }
          const locationMessage = `\n\nCustomer Location: https://maps.google.com/?q=${latitude},${longitude}`;
          sendMessage(locationMessage);
        },
        (error) => {
          console.error("Error getting location:", error);
          sendMessage("");
        }
      );
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    if (selectedStore && location) {
      const calculatedDistance = calculateDistance(
        selectedStore.latitude,
        selectedStore.longitude,
        location.latitude,
        location.longitude
      );
      setDistance(calculatedDistance);
    }
  }, [selectedStore, location]);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const saveAddress = () => {
    setShowAddressForm(false);
  };
  const cartmenu = cartItems.map((items) => (items.sizes))
  console.log('cartMenuss:', cartmenu);
  console.log(cartItems)

  return (
    <div className="cart-container">
      <ToastContainer />
      {cartItems.length === 0 ? (
        <div className="empty-cart-text">
          <h4> {t("cart.empty_cart")}</h4>
          <Link
            to="/menu"
            style={{ color: "white", textDecoration: "underline" }}
          >
            {t("cart.Continue_Shopping")}
          </Link>
        </div>
      ) : (
        <>
          <h2 style={{ marginTop: "8rem" }}> {t("cart.Your_Cart")}</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>
                      {item.name}
                      { }
                    </h3>
                    {item.selectedSize && (
                      <p className="cart-item-size">
                        Size: {item.selectedSize}
                      </p>
                    )}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div className="quantity-control">
                        <button
                          className="quantity-button"
                          onClick={() => {
                            handleQuantityChange(index, -1);
                            removeQtyCartMessage();
                          }}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-button"
                          onClick={() => {
                            handleQuantityChange(index, 1);
                            addQtyCartMessage();
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="remove-button"
                        onClick={() => {
                          handleRemoveItem(index);
                          removeFromCartMessage();
                        }}
                      >
                        <FaTrash />
                      </button>
                    </div>
                    {item.price && <div className="item-price">
                      {t("Menu.price", { price: item.price?.toFixed(2) })}
                      {/* Price: {item.price.toFixed(2)} QAR */}
                    </div>}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>
                {t("cart.total_quantity")}
                <span style={{ fontWeight: "700" }}>
                  {getTotalQuantity()} Qty
                </span>
              </h3>
              <h3>
                {t("cart.total_price")}{" "}
                <span style={{ fontWeight: "700" }}>
                  {getTotalPrice().toFixed(2)} QAR{" "}
                </span>
              </h3>
              {distance > 10 && (
                <h3>
                  Delivery Fee: <span>{deliveryCharge} </span>
                </h3>
              )}
              <div className="store-selection">
                <h3> {t("cart.select_store")}</h3>
                <select
                  value={selectedStore ? selectedStore.name : ""}
                  onChange={(e) => {
                    const store = storeLocations.find(
                      (store) => store.name === e.target.value
                    );
                    setSelectedStore(store);
                    setDistance(null);
                  }}
                >
                  <option value="" disabled>
                    {t("cart.select_store")}
                    {/* Select a store */}
                  </option>
                  {storeLocations.map((store, index) => (
                    <option key={index} value={store.name}>
                      {store.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="address-section">
                <button
                  className="add-address-button"
                  onClick={() => setShowAddressForm(true)}
                >
                  {t("cart.add_address")}
                </button>
                {showAddressForm && (
                  <div className="address-form">
                    <h3>Enter Your Address</h3>
                    <form>
                      <input
                        type="text"
                        name="zone"
                        placeholder="Zone"
                        value={address.zone}
                        onChange={handleAddressChange}
                      />
                      <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        value={address.street}
                        onChange={handleAddressChange}
                      />
                      <input
                        type="text"
                        name="building"
                        placeholder="Building"
                        value={address.building}
                        onChange={handleAddressChange}
                      />
                      <textarea
                        name="details"
                        placeholder="Additional Details"
                        value={address.details}
                        onChange={handleAddressChange}
                      />
                      <button
                        type="button"
                        onClick={saveAddress}
                        className="save-address-button"
                      >
                        Save Address
                      </button>
                    </form>
                  </div>
                )}
                {!showAddressForm && address.zone && (
                  <div className="address-card">
                    <h3>Address Details</h3>
                    <p>{address.zone}</p>
                    <p>{address.street}</p>
                    <p>{address.building}</p>
                    <p>{address.details}</p>
                  </div>
                )}
              </div>
              <button className="order-now-button" onClick={handleOrderNow}>
                {t("cart.order_now")}
                {/* Order Now */}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

// import React, { useContext, useState, useEffect } from "react";
// import { CartContext } from "../../Context/CartContext";
// import "./Cart.css";
// import { Link } from "react-router-dom";
// import { FaTrash } from "react-icons/fa6";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useTranslation } from "react-i18next";

// const Cart = () => {
//   const { t } = useTranslation();

//   const { getCartItems, removeFromCart, updateQuantity, clearCart } =
//     useContext(CartContext);
//   const cartItems = getCartItems();
//   const [location, setLocation] = useState(null);
//   const [distance, setDistance] = useState(null);
//   const [selectedStore, setSelectedStore] = useState(null);
//   const [address, setAddress] = useState({
//     zone: "",
//     street: "",
//     building: "",
//     details: "",
//   });
//   const [showAddressForm, setShowAddressForm] = useState(false);
//   const deliveryCharge = 10;

//   const storeLocations = [
//     { name: "Al Nasr", latitude: 25.27039, longitude: 51.500554, whatsappNumber: "+97431608138" },
//     { name: "Al doha Al Jadeeda", latitude: 25.2776, longitude: 51.5321, whatsappNumber: "+97431602060" },
//     { name: "Wakra", latitude: 25.1314, longitude: 51.6169, whatsappNumber: "+97431608138" },
//     { name: "Ain Kaledh", latitude: 25.296987, longitude: 51.540008, whatsappNumber: "+97431062060" },
//     { name: "Thumama", latitude: 25.2347, longitude: 51.5597, whatsappNumber: "+97470911657" },
//     { name: "Lusail", latitude: 25.5, longitude: 51.4833, whatsappNumber: "+97431608138" },
//   ];

//   const removeFromCartMessage = () => {
//     toast.success("Product Successfully Removed From Cart!", {
//       position: "bottom-right",
//       autoClose: 5000,
//     });
//   };

//   const removeQtyCartMessage = () => {
//     toast.success("Removed Product Quantity Successfully!", {
//       position: "bottom-right",
//       autoClose: 5000,
//     });
//   };

//   const addQtyCartMessage = () => {
//     toast.success("Added Product Quantity Successfully!", {
//       position: "bottom-right",
//       autoClose: 5000,
//     });
//   };

//   const getTotalQuantity = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const handleQuantityChange = (index, change) => {
//     const newQuantity = Math.max(1, cartItems[index].quantity + change);
//     updateQuantity(index, newQuantity);
//   };

//   const handleRemoveItem = (index) => {
//     removeFromCart(index);
//   };

//   const handleOrderNow = () => {
//     if (!selectedStore) {
//       toast.error("Please select a store before proceeding with the order.", {
//         position: "bottom-right",
//         autoClose: 5000,
//       });
//       return;
//     }

//     if (!address.zone || !address.street || !address.building) {
//       toast.error(
//         "Please enter your address before proceeding with the order.",
//         {
//           position: "bottom-right",
//           autoClose: 5000,
//         }
//       );
//       return;
//     }
//     const totalPrice = getTotalPrice();
//     const totalQuantity = getTotalQuantity();
//     const deliveryFee = distance > 10 ? deliveryCharge : 0;
//     const grandTotal = totalPrice + deliveryFee;

//     const storeLocationInfo = selectedStore
//       ? `Store Location: ${selectedStore.name}\n\nLocation Link: https://maps.google.com/?q=${selectedStore.latitude},${selectedStore.longitude}`
//       : "";

//     const whatsappNumber = selectedStore.whatsappNumber;
//     const baseUrl = "https://wa.me/";
//     const encodedMessage = encodeURIComponent(
//       `Order Details:\n\n${cartItems
//         .map(
//           (item, index) =>
//             `${index + 1}. Product: ${item.name}\nQuantity: ${
//               item.quantity
//             }\nPrice: ${item.price} QAR\n\n`
//         )
//         .join(
//           "\n\n"
//         )}\n\nTotal Quantity: ${totalQuantity}\nTotal Price: ${totalPrice.toFixed(
//         2
//       )} QAR\nGrand Total: ${grandTotal.toFixed(2)} QAR\n\nAddress: \n\nZone: ${
//         address.zone
//       }, \n\nStreet: ${address.street}, \n\nBuildin NO: ${
//         address.building
//       },\n\n LandMark: ${address.details}\n\n\n`
//     );

//     const locationMessage = location
//       ? `\n\nCustomer Location: https://maps.google.com/?q=${location.latitude},${location.longitude}`
//       : "";

//     const sendMessage = (locationMessage) => {
//       const whatsappUrl = `${baseUrl}${whatsappNumber}?text=${encodedMessage}${storeLocationInfo}${locationMessage}`;
//       window.open(whatsappUrl, "_blank");
//     };
//     clearCart();
//     if (location) {
//       sendMessage(locationMessage);
//     } else {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation({ latitude, longitude });
//           if (selectedStore) {
//             const calculatedDistance = calculateDistance(
//               selectedStore.latitude,
//               selectedStore.longitude,
//               latitude,
//               longitude
//             );
//             setDistance(calculatedDistance);
//           }
//           const locationMessage = `\n\nCustomer Location: https://maps.google.com/?q=${latitude},${longitude}`;
//           sendMessage(locationMessage);
//         },
//         (error) => {
//           console.error("Error getting location:", error);
//           sendMessage("");
//         }
//       );
//     }
//   };

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371;
//     const dLat = ((lat2 - lat1) * Math.PI) / 180;
//     const dLon = ((lon2 - lon1) * Math.PI) / 180;
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos((lat1 * Math.PI) / 180) *
//         Math.cos((lat2 * Math.PI) / 180) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return R * c;
//   };

//   useEffect(() => {
//     if (selectedStore && location) {
//       const calculatedDistance = calculateDistance(
//         selectedStore.latitude,
//         selectedStore.longitude,
//         location.latitude,
//         location.longitude
//       );
//       setDistance(calculatedDistance);
//     }
//   }, [selectedStore, location]);

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setAddress({
//       ...address,
//       [name]: value,
//     });
//   };

//   const saveAddress = () => {
//     setShowAddressForm(false);
//   };

//   return (
//     // <div className="cart-container">
//     //   <ToastContainer />
//     //   {cartItems.length === 0 ? (
//     //     <div className="empty-cart-text">
//     //       <h4> {t("cart.empty_cart")}</h4>
//     //       <Link
//     //         to="/menu"
//     //         style={{ color: "black", textDecoration: "underline" }}
//     //       >
//     //         {t("cart.Continue_Shopping")}
//     //       </Link>
//     //     </div>
//     //   ) : (
//     //     <>
//     //       <h2 style={{ marginTop: "8rem" }}> {t("cart.Your_Cart")}</h2>
//     //       <div
//     //         style={{
//     //           display: "flex",
//     //           flexDirection: "column",
//     //           alignItems: "center",
//     //           width: "100%",
//     //         }}
//     //       >
//     //         <div className="cart-items">
//     //           {cartItems.map((item, index) => (
//     //             <div key={index} className="cart-item">
//     //               <img
//     //                 src={item.image}
//     //                 alt={item.name}
//     //                 className="cart-item-image"
//     //               />
//     //               <div className="cart-item-details">
//     //                 <h3>
//     //                   {t(`Products.${item.name}`)}
//     //                   {}
//     //                 </h3>
//     //                 <div
//     //                   style={{
//     //                     display: "flex",
//     //                     justifyContent: "space-between",
//     //                     gap: "1rem",
//     //                   }}
//     //                 >
//     //                   <div className="quantity-control">
//     //                     <button
//     //                       className="quantity-button"
//     //                       onClick={() => {
//     //                         handleQuantityChange(index, -1);
//     //                         removeQtyCartMessage();
//     //                       }}
//     //                     >
//     //                       -
//     //                     </button>
//     //                     <span>{item.quantity}</span>
//     //                     <button
//     //                       className="quantity-button"
//     //                       onClick={() => {
//     //                         handleQuantityChange(index, 1);
//     //                         addQtyCartMessage();
//     //                       }}
//     //                     >
//     //                       +
//     //                     </button>
//     //                   </div>
//     //                   <button
//     //                     className="remove-button"
//     //                     onClick={() => {
//     //                       handleRemoveItem(index);
//     //                       removeFromCartMessage();
//     //                     }}
//     //                   >
//     //                     <FaTrash />
//     //                   </button>
//     //                 </div>
//     //                 <p className="price">QAR {item.price}</p>
//     //               </div>
//     //             </div>
//     //           ))}
//     //         </div>
//     //         <div className="order-summary">
//     //           <div>
//     //             <h3> {t("cart.Order_Summary")}</h3>
//     //             <p>
//     //               {t("cart.Total_Quantity")}: {getTotalQuantity()}
//     //             </p>
//     //             <p>
//     //               {t("cart.Total_Price")}: QAR {getTotalPrice().toFixed(2)}
//     //             </p>
//     //             {distance && distance > 10 && (
//     //               <p>
//     //                 {t("cart.Delivery_Charge")}: QAR {deliveryCharge.toFixed(2)}
//     //               </p>
//     //             )}
//     //             <h3>
//     //               {t("cart.Grand_Total")}: QAR
//     //               {(
//     //                 getTotalPrice() + (distance && distance > 10 ? 10 : 0)
//     //               ).toFixed(2)}
//     //             </h3>
//     //           </div>
//     //           <div className="address-section">
//     //             <button
//     //               onClick={() => setShowAddressForm(true)}
//     //               className="address-button"
//     //             >
//     //               {t("cart.Add_Address")}
//     //             </button>
//     //             {showAddressForm && (
//     //               <div className="address-form">
//     //                 <input
//     //                   type="text"
//     //                   name="zone"
//     //                   placeholder="Zone"
//     //                   value={address.zone}
//     //                   onChange={handleAddressChange}
//     //                 />
//     //                 <input
//     //                   type="text"
//     //                   name="street"
//     //                   placeholder="Street"
//     //                   value={address.street}
//     //                   onChange={handleAddressChange}
//     //                 />
//     //                 <input
//     //                   type="text"
//     //                   name="building"
//     //                   placeholder="Building"
//     //                   value={address.building}
//     //                   onChange={handleAddressChange}
//     //                 />
//     //                 <input
//     //                   type="text"
//     //                   name="details"
//     //                   placeholder="Details"
//     //                   value={address.details}
//     //                   onChange={handleAddressChange}
//     //                 />
//     //                 <button
//     //                   onClick={saveAddress}
//     //                   className="save-address-button"
//     //                 >
//     //                   {t("cart.Save_Address")}
//     //                 </button>
//     //               </div>
//     //             )}
//     //           </div>
//     //           <select
//     //             value={selectedStore ? selectedStore.name : ""}
//     //             onChange={(e) => {
//     //               const store = storeLocations.find(
//     //                 (store) => store.name === e.target.value
//     //               );
//     //               setSelectedStore(store);
//     //             }}
//     //             className="store-selector"
//     //           >
//     //             <option value="" disabled>
//     //               Select Store
//     //             </option>
//     //             {storeLocations.map((store, index) => (
//     //               <option key={index} value={store.name}>
//     //                 {store.name}
//     //               </option>
//     //             ))}
//     //           </select>
//     //           <button onClick={handleOrderNow} className="order-button">
//     //             {t("cart.Order_Now")}
//     //           </button>
//     //         </div>
//     //       </div>
//     //     </>
//     //   )}
//     // </div>

//     <div className="cart-container">
//     {cartItems.length === 0 ? (
//       <div className="empty-cart">
//         <p>{t("cart.Empty_Cart")}</p>
//       </div>
//     ) : (
//       <>
//         <div className="cart-items">
//           {cartItems.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img src={item.image} alt={item.name} className="item-image" />
//               <div className="item-details">
//                 <h3>{item.name}</h3>
//                 <div className="quantity-controls">
//                   <button
//                     className="quantity-button"
//                     onClick={() => {
//                       handleQuantityChange(index, -1);
//                       addQtyCartMessage();
//                     }}
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     className="quantity-button"
//                     onClick={() => {
//                       handleQuantityChange(index, 1);
//                       addQtyCartMessage();
//                     }}
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button
//                   className="remove-button"
//                   onClick={() => {
//                     handleRemoveItem(index);
//                     removeFromCartMessage();
//                   }}
//                 >
//                   <FaTrash />
//                 </button>
//                 <p className="price">QAR {item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="order-summary">
//           <div>
//             <h3>{t("cart.Order_Summary")}</h3>
//             <p>
//               {t("cart.Total_Quantity")}: {getTotalQuantity()}
//             </p>
//             <p>
//               {t("cart.Total_Price")}: QAR {getTotalPrice().toFixed(2)}
//             </p>
//             {distance > 10 && (
//               <p>
//                 {t("cart.Delivery_Charge")}: QAR {deliveryCharge.toFixed(2)}
//               </p>
//             )}
//             <h3>
//               {t("cart.Grand_Total")}: QAR
//               {(getTotalPrice() + (distance > 10 ? deliveryCharge : 0)).toFixed(2)}
//             </h3>
//           </div>
//           <div className="address-section">
//             <button
//               onClick={() => setShowAddressForm(true)}
//               className="address-button"
//             >
//               {t("cart.Add_Address")}
//             </button>
//             {showAddressForm && (
//               <div className="address-form">
//                 <input
//                   type="text"
//                   name="zone"
//                   placeholder="Zone"
//                   value={address.zone}
//                   onChange={handleAddressChange}
//                 />
//                 <input
//                   type="text"
//                   name="street"
//                   placeholder="Street"
//                   value={address.street}
//                   onChange={handleAddressChange}
//                 />
//                 <input
//                   type="text"
//                   name="building"
//                   placeholder="Building"
//                   value={address.building}
//                   onChange={handleAddressChange}
//                 />
//                 <input
//                   type="text"
//                   name="details"
//                   placeholder="Details"
//                   value={address.details}
//                   onChange={handleAddressChange}
//                 />
//                 <button
//                   onClick={saveAddress}
//                   className="save-address-button"
//                 >
//                   {t("cart.Save_Address")}
//                 </button>
//               </div>
//             )}
//           </div>
//           <select
//             value={selectedStore ? selectedStore.name : ""}
//             onChange={(e) => {
//               const store = storeLocations.find(
//                 (store) => store.name === e.target.value
//               );
//               setSelectedStore(store);
//             }}
//             className="store-selector"
//           >
//             <option value="" disabled>
//               Select Store
//             </option>
//             {storeLocations.map((store, index) => (
//               <option key={index} value={store.name}>
//                 {store.name}
//               </option>
//             ))}
//           </select>
//           <button onClick={handleOrderNow} className="order-button">
//             {t("cart.Order_Now")}
//           </button>
//         </div>
//       </>
//     )}
//   </div>

//   );
// };

// export default Cart;

// const storeLocations = [
//   { name: "Al Nasr", latitude: 25.27039, longitude: 51.500554, whatsappNumber: "+97431608138" },
//   { name: "Al doha Al Jadeeda", latitude: 25.2776, longitude: 51.5321, whatsappNumber: "+97431602060" },
//   { name: "Wakra", latitude: 25.1314, longitude: 51.6169, whatsappNumber: "+97431608138" },
//   { name: "Ain Kaledh", latitude: 25.296987, longitude: 51.540008, whatsappNumber: "+97431062060" },
//   { name: "Thumama", latitude: 25.2347, longitude: 51.5597, whatsappNumber: "+97470911657" },
//   { name: "Lusail", latitude: 25.5, longitude: 51.4833, whatsappNumber: "+97431608138" },
// ];
