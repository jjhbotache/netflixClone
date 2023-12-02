import React, { useEffect } from 'react';
import { Wrapper } from './ProductSC';
import { buyBot } from '../../functions/paymentFunctions';

const Product = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.epayco.co/checkout.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Wrapper>
      <h1>Robot</h1>
      <hr />
      <h2>
        Price: <em>$40.000</em>
      </h2>
      <img src="https://th.bing.com/th/id/OIP.Nacv3vBOZ5n713Zc9isSTwAAAA?rs=1&pid=ImgDetMain" alt="Robot image" />
      <button onClick={buyBot}>Comprar</button>
    </Wrapper>
  );
};

export default Product;
