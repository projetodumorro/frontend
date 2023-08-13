let Reviews = () => {
      let min = 1;
      let max = 50;
      let randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomInteger;
  };
  
  export default Reviews;