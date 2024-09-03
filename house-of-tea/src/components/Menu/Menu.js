import React, { useContext, useState, useCallback, useEffect } from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

import product1 from "../../assets/aboutus/W1.jpg";
import product2 from "../../assets/aboutus/w2.jpg";
import product3 from "../../assets/aboutus/w3.jpg";
import product4 from "../../assets/aboutus/w4.jpg";
import product5 from "../../assets/aboutus/w5.jpg";
import product6 from "../../assets/aboutus/w6.jpg";
import iced_latte_p1 from "../../assets/menuImages/Iced Latte/CHILL COFFEE (Large 15qr, Bottle 20qr).png";
import iced_latte_p2 from "../../assets/menuImages/Iced Latte/ICED CREAMY LATTE (Large 15qr, Bottle 20qr).png";
import iced_latte_p3 from "../../assets/menuImages/Iced Latte/SAFFRON LATTE (Large 17qr, Bottle 22qr).png";
import iced_latte_p4 from "../../assets/menuImages/Iced Latte/SPANISH LATTE (Large 15qr, Bottle 20qr).png";

// CRUSHED_MILKSHAKE
import crushed_milkshake_p1 from "../../assets/menuImages/Crushed Milk/KITKAT CRUSH MILK - 18QR.png";
import crushed_milkshake_p2 from "../../assets/menuImages/Crushed Milk/LOTUS SHAKE - 18QR.png";
import crushed_milkshake_p3 from "../../assets/menuImages/Crushed Milk/OREO CRUSH SHAKE - 18qr.png";
import crushed_milkshake_p4 from "../../assets/menuImages/Crushed Milk/STRAWBERRY SHAKE - 17QR.png";

// FRESH_BURGER
import fresh_burger_p1 from "../../assets/menuImages/Fresh Burger/CHEETOS BURGER (Single 28qr, Double38qr).png";
import fresh_burger_p2 from "../../assets/menuImages/Fresh Burger/FAT BOY BURGER (Single 30qr, Double40qr).png";
import fresh_burger_p3 from "../../assets/menuImages/Fresh Burger/GRILLED TENDER (Single 23qr, Double 33qr).png";
import fresh_burger_p4 from "../../assets/menuImages/Fresh Burger/Mushroom Burger (Single 28qr, Double 38qr).png";
import fresh_burger_p5 from "../../assets/menuImages/Fresh Burger/Ruman Burger  (Single 28qr, Double 38qr).png";
import fresh_burger_p6 from "../../assets/menuImages/Fresh Burger/SPICY CRUNCHY (Single 29qr, Double 39qr).png";

//  CIABATTA_SANDWICHES

import ciabatta_sandwiches_p1 from "../../assets/menuImages/CIABATTA SANDWICH/CHICKEN HALLOUMI COMBO - 22QR.png";
import ciabatta_sandwiches_p2 from "../../assets/menuImages/CIABATTA SANDWICH/CHILLI HOT SANDWICH - 18qr.png";
import ciabatta_sandwiches_p3 from "../../assets/menuImages/CIABATTA SANDWICH/TUNA SANDWICH - 18.png";

// BURGER_SPECIAL
import burger_special_p1 from "../../assets/menuImages/Burger/CHICKEN BITES + Pepsi 20qr.png";
import burger_special_p2 from "../../assets/menuImages/Burger/DOUBLE BURGER (Chick or Beef) - 14qr.png";
import burger_special_p3 from "../../assets/menuImages/Burger/DOUBLE KHALEEJ - 17qr.png";
import burger_special_p4 from "../../assets/menuImages/Burger/HOUSE OF TEA BURGER -18qr.png";
import burger_special_p5 from "../../assets/menuImages/Burger/MEGA ZINKER - 17qr.png";
import burger_special_p6 from "../../assets/menuImages/Burger/MEXICAN BURGER - 18qr.png";

// SPECIAL_FRIES
import special_fries_p1 from '../../assets/menuImages/SPECIAL FRIES/ANIMAL FRIES - 25QR.png'
import special_fries_p2 from '../../assets/menuImages/SPECIAL FRIES/RUMAN FRIES - 25QR.png'
import special_fries_p3 from '../../assets/menuImages/SPECIAL FRIES/SIGNATURE FRIES - 30QR.png'

// CREPES
import crepes_p1 from '../../assets/menuImages/Crepes/CREPES HALWIYATH - 18qr.png'
import crepes_p2 from '../../assets/menuImages/Crepes/CREPES LOTUS - 18qr.png'
import crepes_p3 from '../../assets/menuImages/Crepes/CREPES OREO - 15qr.png'
import crepes_p4 from '../../assets/menuImages/Crepes/CREPES STRAWBERRY - 15qr.png'

// CLUB_SANDWICH

import club_sandwich_p1 from '../../assets/menuImages/Club Sandwiches/FALAFEL CLUB - 14qr.png'
import club_sandwich_p2 from '../../assets/menuImages/Club Sandwiches/FRESH BEEF CLUB - 40qr.png'
import club_sandwich_p3 from '../../assets/menuImages/Club Sandwiches/PISTASO BAHRAIN - 15qr.png'
import club_sandwich_p4 from '../../assets/menuImages/Club Sandwiches/Ruman Club - 20qr.png'
import club_sandwich_p5 from '../../assets/menuImages/Club Sandwiches/ZINKER CLUB - 20qr.png'
import { baseUrl } from "../../constants";


// const productData = {
//   ENGLISH_BREAKFAST: [
//     {
//       id: 1,
//       name: "green_tea",
//       description: "Refreshing green tea.",
//       image: product4,
//       sizes: [
//         { size: "Small", price: 10.99 },
//         { size: "Medium", price: 12.99 },

//       ],
//     },
//     {
//       id: 2,
//       name: "black_tea",
//       description: "Strong black tea.",
//       image: product3,
//       sizes: [
//         { size: "Small", price: 10.99 },
//         { size: "Medium", price: 12.99 },

//       ],
//     },
//     {
//       id: 3,
//       name: "oolong_tea",
//       description: "A traditional Chinese tea.",
//       image: product2,
//       price: 9.99,
//     },
//     {
//       id: 4,
//       name: "herbal_tea",
//       description: "Naturally caffeine-free tea.",
//       image: product5,
//       price: 4.99,
//     },
//     {
//       id: 5,
//       name: "matcha",
//       description: "Powdered green tea.",
//       image: product1,
//       price: 9.99,
//     },
//     {
//       id: 6,
//       name: "chai",
//       description: "Spiced tea from India.",
//       image: product6,
//       price: 7.99,
//     },
//   ],
//   ICED_LATTE: [
//     {
//       id: 7,
//       name: "CHILL_COFFEE",
//       description: "Delicious chocolate cookies.",
//       image: iced_latte_p1,
//       sizes: [
//         { size: "Large", price: 15 },
//         { size: "Bottle", price: 20 },
//       ],
//     },
//     {
//       id: 8,
//       name: "ICED_CREAMY_LATTE",
//       description: "Freshly made sandwiches.",
//       image: iced_latte_p2,
//       sizes: [
//         { size: "Large", price: 17 },
//         { size: "Bottle", price: 22 },
//       ],
//     },
//     {
//       id: 9,
//       name: "SAFFRON_LATTE",
//       description: "Crunchy potato chips.",
//       image: iced_latte_p3,
//       sizes: [
//         { size: "Large", price: 15 },
//         { size: "Bottle", price: 20 },
//       ],
//     },
//     {
//       id: 10,
//       name: "SPANISH_LATTE",
//       description: "Salty pretzels.",
//       image: iced_latte_p4,
//       sizes: [
//         { size: "Large", price: 15 },
//         { size: "Bottle", price: 20 },
//       ],
//     },
//   ],
//   CRUSHED_MILKSHAKE: [
//     {
//       id: 13,
//       name: "KITKAT_CRUSH_MILK",
//       description: "Creamy cheesecake.",
//       image: crushed_milkshake_p1,
//       price: 18,
//     },
//     {
//       id: 14,
//       name: "LOTUS_SHAKE",
//       description: "Chewy chocolate brownies.",
//       image: crushed_milkshake_p2,
//       price: 18,
//     },
//     {
//       id: 15,
//       name: "OREO_CRUSH_SHAKE",
//       description: "Sweet French cookies.",
//       image: crushed_milkshake_p3,
//       price: 18,
//     },
//     {
//       id: 16,
//       name: "STRAWBERRY_SHAKE",
//       description: "Coffee-flavored Italian dessert.",
//       image: crushed_milkshake_p4,
//       price: 17,
//     },
//   ],
//   FRESH_BURGER: [
//     {
//       id: 19,
//       name: "CHEETOS_BURGER",
//       description: "Smoothies made with seasonal fruits.",
//       image: fresh_burger_p1,
//       sizes: [
//         { size: "Single", price: 28 },
//         { size: "Double", price: 38 },
//       ],
//     },
//     {
//       id: 20,
//       name: "FAT_BOY_BURGER",
//       description: "Special cookies for the holidays.",
//       image: fresh_burger_p2,
//       sizes: [
//         { size: "Single", price: 30 },
//         { size: "Double", price: 40 },
//       ],
//     },
//     {
//       id: 21,
//       name: "GRILLED_TENDER",
//       description: "Cakes available for a limited time.",
//       image: fresh_burger_p3,
//       sizes: [
//         { size: "Single", price: 23 },
//         { size: "Double", price: 33 },
//       ],
//     },
//     {
//       id: 212,
//       name: "Mushroom_Burger",
//       description: "Cakes available for a limited time.",
//       image: fresh_burger_p4,
//       sizes: [
//         { size: "Single", price: 28 },
//         { size: "Double", price: 38 },
//       ],
//     },
//     {
//       id: 213,
//       name: "Ruman_Burger",
//       description: "Cakes available for a limited time.",
//       image: fresh_burger_p5,
//       sizes: [
//         { size: "Single", price: 28 },
//         { size: "Double", price: 38 },
//       ],
//     },
//     {
//       id: 214,
//       name: " SPICY_CRUNCHY",
//       description: "Cakes available for a limited time.",
//       image: fresh_burger_p6,
//       sizes: [
//         { size: "Single", price: 29 },
//         { size: "Double", price: 39 },
//       ],
//     },
//   ],
//   CIABATTA_SANDWICHES: [
//     {
//       id: 23,
//       name: "CHICKEN_HALLOUMI_COMBO",
//       description: "Smoothies made with seasonal fruits.",
//       image: ciabatta_sandwiches_p1,
//       price: 22,
//     },
//     {
//       id: 24,
//       name: "CHILLI_HOT_SANDWICH",
//       description: "Special cookies for the holidays.",
//       image: ciabatta_sandwiches_p2,
//       price: 18,
//     },
//     {
//       id: 25,
//       name: "TUNA_SANDWICH",
//       description: "Cakes available for a limited time.",
//       image: ciabatta_sandwiches_p3,
//       price: 18,
//     },
//   ],
//   WHEAT_SANDWICH: [
//     {
//       id: 26,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product2,
//       price: 4.99,
//     },
//     {
//       id: 27,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product4,
//       price: 2.99,
//     },
//     {
//       id: 28,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product6,
//       price: 3.99,
//     },
//   ],
//   BAKED_POTATO: [
//     {
//       id: 29,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 30,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 31,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   CHINESE_TASTE: [
//     {
//       id: 32,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 33,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 34,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   BURGER_SPECIAL: [
//     {
//       id: 35,
//       name: "CHICKEN_BITES_Pepsi",
//       description: "Smoothies made with seasonal fruits.",
//       image: burger_special_p1,
//       price: 20,
//     },
//     {
//       id: 36,
//       name: "DOUBLE_BURGER",
//       description: "Special cookies for the holidays.",
//       image: burger_special_p2,
//       sizes: [
//         { size: "Chicken", price: 14 },
//         { size: "Beef", price: 14 },
//       ],
//     },
//     {
//       id: 37,
//       name: "DOUBLE_KHALEEJ",
//       description: "Cakes available for a limited time.",
//       image: burger_special_p3,
//       price: 17,
//     },
//     {
//       id: 371,
//       name: "HOUSE_OF_TEA_BURGER",
//       description: "Cakes available for a limited time.",
//       image: burger_special_p4,
//       price: 18,
//     },
//     {
//       id: 372,
//       name: "MEGA_ZINKER",
//       description: "Cakes available for a limited time.",
//       image: burger_special_p5,
//       price: 17,
//     },
//     {
//       id: 373,
//       name: "MEXICAN_BURGER",
//       description: "Cakes available for a limited time.",
//       image: burger_special_p6,
//       price: 17,
//     },
//   ],
//   PHILIPPINES_DISHES: [
//     {
//       id: 38,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 39,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 40,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   CROISSANT_SANDWICH: [
//     {
//       id: 41,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 42,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 43,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   COMBO_SANDWICH: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   CLUB_SANDWICH: [
//     {
//       id: 201,
//       name: "FALAFEL_CLUB",
//       description: "Smoothies made with seasonal fruits.",
//       image: club_sandwich_p1,
//       price: 14,
//     },
//     {
//       id: 202,
//       name: "FRESH_BEEF_CLUB",
//       description: "Special cookies for the holidays.",
//       image: club_sandwich_p2,
//       price: 40,
//     },
//     {
//       id: 203,
//       name: "PISTASO_BAHRAIN",
//       description: "Cakes available for a limited time.",
//       image: club_sandwich_p3,
//       price: 15,
//     },
//     {
//       id: 204,
//       name: "Ruman_Club",
//       description: "Cakes available for a limited time.",
//       image: club_sandwich_p4,
//       price: 20,
//     },
//     {
//       id: 205,
//       name: "ZINKER_CLUB",
//       description: "Cakes available for a limited time.",
//       image: club_sandwich_p5,
//       price: 20,
//     },
//   ],
//   MAJLIS: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   WRAP: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   PARATHA_SANDWICH: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   TORTILLA_SANDWICH: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   SLICE_SANDWICHES: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   SPECIAL_FRIES: [
//     {
//       id: 1,
//       name: "ANIMAL_FRIES",
//       description: "Smoothies made with seasonal fruits.",
//       image: special_fries_p1,
//       price: 25,
//     },
//     {
//       id: 2,
//       name: "RUMAN_FRIES",
//       description: "Special cookies for the holidays.",
//       image: special_fries_p2,
//       price: 25,
//     },
//     {
//       id: 3,
//       name: "SIGNATURE_FRIES",
//       description: "Cakes available for a limited time.",
//       image: special_fries_p3,
//       price: 30,
//     },
//   ],
//   CREPES: [
//     {
//       id: 111,
//       name: "CREPES_HALWIYATH",
//       description: "Smoothies made with seasonal fruits.",
//       image: crepes_p1,
//       price: 18,
//     },
//     {
//       id: 112,
//       name: "CREPES_LOTUS",
//       description: "Special cookies for the holidays.",
//       image: crepes_p2,
//       price: 18,
//     },
//     {
//       id: 113,
//       name: "CREPES_OREO",
//       description: "Cakes available for a limited time.",
//       image: crepes_p3,
//       price: 15,
//     },
//     {
//       id: 114,
//       name: "CREPES_STRAWBERRY",
//       description: "Cakes available for a limited time.",
//       image: crepes_p4,
//       price: 15,
//     },
//   ],
//   SALAD: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   DESSERT_SPECIAL: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   JUICES: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   ICE_CREAM_DESSERT: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   MOJITO: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   SIGNATURE_JUICE: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   SUMMER_COOL: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   REFRESHERS: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   SPECIAL_JUICE: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   HEALTHY_JUICE: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
//   HOT_DRINKS: [
//     {
//       id: 1,
//       name: "seasonal_smoothies",
//       description: "Smoothies made with seasonal fruits.",
//       image: product1,
//       price: 4.99,
//     },
//     {
//       id: 2,
//       name: "holiday_cookies",
//       description: "Special cookies for the holidays.",
//       image: product3,
//       price: 3.99,
//     },
//     {
//       id: 3,
//       name: "limited_edition_cakes",
//       description: "Cakes available for a limited time.",
//       image: product5,
//       price: 2.99,
//     },
//   ],
// };

const Menu = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true)
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [productData, setProductData] = useState({})
  const [trans, setTrans] = useState(0)
  

  useEffect(() => {
    setLoading(true)
    let data = {}
    console.log(baseUrl(),i18n.language)
    fetch(baseUrl() + '/products/menu', { headers: { 'Accept-Language': i18n.language } }).then(function (a) {
      return a.json();
    }).then((res) => {
      //setTimeout(() => {
      console.log(res.data)

      res.data.map(e => {
        e.products.map((product, idx) => {
          e.products[idx].image = baseUrl() + e.products[idx].image

        })
        data[e.name] = [...e.products]
      })
      setProductData({ ...data })
      setSelectedCategory(Object.keys(data)[0])
      setLoading(false)

      //}, 6000)

    })
  }, [i18n.language])
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const isMobileView = () => window.innerWidth <= 768;

  const showToastMessage = useCallback(() => {
    toast.success(t("Menu.product_added"), {
      position: "bottom-right",
      autoClose: 5000,
    });
  }, [t]);

  const handleMenuClick = useCallback((category) => {
    setSelectedCategory(category);
    if (isMobileView()) {
      setSidebarVisible(false);
    }
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarVisible((prev) => !prev);
  }, []);

  // const handleAddToCart = useCallback(
  //   (product) => {
  //     if (selectedSize && product.sizes) {
  //       const sizeDetails = product.sizes.find((s) => s.size === selectedSize);
  //       if (sizeDetails) {
  //         addToCart({ ...product, selectedSize, price: sizeDetails.price });
  //         showToastMessage();
  //       } else {
  //         toast.error(t("Menu.size_not_found"));
  //       }
  //     } else {
  //       toast.error(t("Menu.select_size"));
  //     }
  //   },
  //   [addToCart, showToastMessage, selectedSize, t]
  // );

  // const handleAddToCart = useCallback(
  //   (product) => {
  //     if (product.sizes) {
  //       // If the product has sizes, check if a size is selected
  //       if (selectedSize) {
  //         const sizeDetails = product.sizes.find((s) => s.size === selectedSize);
  //         if (sizeDetails) {
  //           addToCart({ ...product, selectedSize, price: sizeDetails.price });
  //           showToastMessage();
  //         } else {
  //           toast.error(t("Menu.size_not_found"));
  //         }
  //       } else {
  //         toast.error(t("Menu.select_size"));
  //       }
  //     } else {
  //       // If the product does not have sizes, add it directly
  //       addToCart(product);
  //       showToastMessage();
  //     }
  //   },
  //   [addToCart, showToastMessage, selectedSize, t]
  // );
  const [selectedSize, setSelectedSize] = useState({});
  useEffect(() => {
    console.log(selectedSize)
  }, [selectedSize])
  const handleSizeChange = (productId, size) => {
    if (selectedSize[productId]) {
      if (selectedSize[productId].includes(size)) {
        selectedSize[productId].splice(selectedSize[productId].indexOf(size), 1)
        setSelectedSize((prev) => ({ ...prev, [productId]: [...selectedSize[productId],] }));
      } else
        setSelectedSize((prev) => ({ ...prev, [productId]: [...selectedSize[productId], size] }));
    }
    else
      setSelectedSize((prev) => ({ ...prev, [productId]: [size] }));


  };

  const handleAddToCart = (product) => {
    const selectedSizeForProduct = selectedSize[product.id];

    if (product.sizes && product.sizes.length > 0) {
      // Product has multiple sizes, check if size is selected
      if (selectedSizeForProduct.length>0) {
        const sizeDetails = product.sizes.filter(
          (s) => selectedSizeForProduct.includes(s.size)
        );
        console.log(sizeDetails, selectedSizeForProduct)
        if (sizeDetails) {

          addToCart({
            ...product,
            selectedSize: selectedSizeForProduct,
            price: product.sizes.filter(
              obj => selectedSizeForProduct.includes(obj.size)
            ).map(obj=>obj.price).reduce((sum, price) => {

              return sum + price


            })

          });
          setSelectedSize((prev) => ({ ...prev, [product.id]: [] }));
          showToastMessage();
        } else {
          toast.error("Selected size is not available.", {
            position: "bottom-right",
            autoClose: 5000,
          });
        }
      } else {
        toast.error("Please select a size.", {
          position: "bottom-right",
          autoClose: 5000,
        });
      }
    } else {
      // Product does not have sizes, add directly
      addToCart(product);
      showToastMessage();
    }
  };

  const currentProduct = productData[selectedCategory]?.find(
    (p) => p.id === selectedProduct
  );

  return (
    <div className="menu-container">
      <ToastContainer />
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarVisible ? t("Menu.close_menu") : t("Menu.open_menu")}
      </button>

      <div className={`sidebar ${!sidebarVisible ? "hidden" : ""}`}>
        <h2 className="menu-title">{t("Menu.menu")}</h2>
        {loading ?
          <p style={{ textAlign: 'center', width: '100%', margin: 'auto' }}>loading...</p>
          : <div className="menu-list">
            {Object.keys(productData).map((category) => (
              <div
                key={category}
                onClick={() => handleMenuClick(category)}
                className={`menu-item ${selectedCategory === category ? "active" : ""
                  }`}
              >
                {category}
              </div>
            ))}
          </div>}
      </div>

      <div className={`content ${!sidebarVisible ? "expanded" : ""}`}>
        <h2 className="category-title">{loading && !sidebarVisible ? 'loading..' : selectedCategory}</h2>
        {loading ?
          <p style={{ textAlign: 'center', width: '100%', margin: 'auto' }}>loading...</p>
          :
          <div className="product-grid">
            {
              productData[selectedCategory]?.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => setSelectedProduct(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                  />
                  <h3 className="product-name">{t(`${product.name}`)}</h3>
                  {/* <p className="product-description">
                {t(`Products.${product.description}`)}
              </p> */}

                  {product.sizes ? (
                    <div className="size-options">
                      {product.sizes.map((sizeOption) => (
                        // <button
                        //   key={sizeOption.size}
                        //   className={`size-option ${selectedSize[product.id] === sizeOption.size
                        //     ? "selected"
                        //     : ""
                        //     }`}
                        //   onClick={() =>
                        //     
                        //   }
                        // >
                        //   {sizeOption.size} ({sizeOption.price.toFixed(2)} QR)
                        // </button>
                        <div style={{ display: 'flex', }}>
                          <input type="checkbox" name="" id="" style={{ marginTop: 'auto', marginBottom: 'auto' }}
                            checked={selectedSize.hasOwnProperty(product.id) && selectedSize[product.id].includes(sizeOption.size)}
                            
                            onChange={() => {
                              handleSizeChange(product.id, sizeOption.size)
                            }} />
                          <p style={{ alignItems: 'center', marginTop: 'auto', marginBottom: 'auto' }}>{sizeOption.size}  ({sizeOption.price.toFixed(2)} QR)</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="product-price">
                      Price: {product.price.toFixed(2)} QR
                    </p>
                  )}
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    {t("Menu.add_to_cart")}
                  </button>
                </div>
              ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Menu;
