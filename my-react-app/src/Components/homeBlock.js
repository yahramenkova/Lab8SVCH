import React from 'react';
import "./homeBlock.css"
import Home from "../Pictures/home.jpg"
import { motion } from "framer-motion";

const HomeBlock = () => {
  return (
    <motion.div
      className="welcome"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="welcome-image"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={Home} alt="Склад интернет-магазина" />
      </motion.div>
      <motion.div
        className="welcome-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>Добро пожаловать на наш склад!</h2>
        <p>
          Мы рады приветствовать вас на нашем современном складе, где мы храним огромный ассортимент товаров для вашего удобства. Наши товары всегда готовы к доставке прямо к вам.
        </p>
        <p>
          Наша команда гарантирует высокое качество и быструю доставку. Вы можете быть уверены, что у нас вы найдете все необходимое.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HomeBlock;
