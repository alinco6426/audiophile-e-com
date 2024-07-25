<template>
     <div class="brand">
          <section class="brand-details-container">
               <h1>
                    Bringing you the <br> <span>best</span> audio gear
               </h1>
               <p>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                    available for you to browse and experience a wide range of our products. Stop by our store to meet
                    some of the fantastic people who make Audiophile the best place to buy your portable audio
                    equipment.
               </p>
          </section>

          <section class="illustration-image-container">
               <img src="../assets/shared/desktop/image-best-gear.jpg" alt="image-best-gear">
          </section>
     </div>
</template>
<script>
export default {
     
}
</script>
<style scoped>
  @import url("../assets/main.css");

  .brand{
     width: 80%;
     height: auto;
     display: flex;
     margin-top: 200px;
     margin-inline: auto;
  }
  .brand-details-container{
     width: 48%;
     height: inherit;
     display: flex;
     align-content: center;
     justify-content: center;
     flex-direction: column;
     padding: 20px;
  }
  .brand-details-container h1{
     color: var(--black);
     text-transform: uppercase;
     font-size: 55px;
     font-weight: 700;
     margin-bottom: 50px;
     letter-spacing: 2px;
  }
  .brand-details-container h1 span{
     color: var(--orange);
  }
  .brand-details-container p{
     color: var(--sooth-black);
     font-size: 16px;
     line-height: 35px;
  }
  .illustration-image-container{
     width: 50%;
     height: auto;
     display: flex;
     justify-content: flex-end;
  }
  .illustration-image-container img{
     width: 40pc;
     height: 40pc;
     border-radius: 10px;
  }


 @media screen and (max-width: 760px) {
 .brand{
     width: 100%;
     height: auto;
     display: flex;
     flex-direction: column-reverse;
     margin-top: 200px;
     padding-inline: 20px;
  }
  .brand-details-container{
     width: 100%;
     height: inherit;
     display: flex;
     align-content: center;
     justify-content: center;
     flex-direction: column;
     padding: 20px;
  }
  .brand-details-container h1{
     color: var(--black);
     text-transform: uppercase;
     font-size: 35px;
     font-weight: 700;
     margin: 40px 0;
     letter-spacing: 2px;
  }
  .brand-details-container h1 br{
   display: none;
  }
  .brand-details-container h1 span{
     color: var(--orange);
  }
  .brand-details-container p{
     color: var(--sooth-black);
     font-size: 16px;
     line-height: 35px;
  }
  .illustration-image-container{
     width: 100%;
     height: auto;
     display: flex;
     justify-content: center
  }
  .illustration-image-container img{
     width: 30pc;
     height: 30pc;
     border-radius: 10px;
  }

 } 

</style>