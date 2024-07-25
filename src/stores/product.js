
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
     state : () => ({

  products: [
    {
      "id": 1,
      "slug": "yx1-earphones",
      "name": "YX1 Wireless Earphones",
      "image": {
        "mobile": "assets/product-yx1-earphones/mobile/image-product.jpg",
        "tablet": "assets/product-yx1-earphones/tablet/image-product.jpg",
        "desktop": "assets/product-yx1-earphones/desktop/image-product.jpg"
      },
      "category": "earphones",
      "categoryImage": {
        "mobile": "assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
        "tablet": "assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
        "desktop": "assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
      },
      "new": true,
      "price": 599,
      "description": "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      "features": "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
      "includes": [
        {
          "quantity": 2,
          "item": "Earphone unit"
        },
        {
          "quantity": 6,
          "item": "Multi-size earplugs"
        },
        {
          "quantity": 1,
          "item": "User manual"
        },
        {
          "quantity": 1,
          "item": "USB-C charging cable"
        },
        {
          "quantity": 1,
          "item": "Travel pouch"
        }
      ],
      "gallery": {
        "first": {
          "mobile": "assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
          "tablet": "assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
          "desktop": "assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
        },
        "second": {
          "mobile": "assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
          "tablet": "assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
          "desktop": "assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
        },
        "third": {
          "mobile": "assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
          "tablet": "assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
          "desktop": "assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
        }
      },
      "others": [
        {
          "slug": "xx99-mark-one-headphones",
          "name": "XX99 Mark I",
          "image": {
            "mobile": "assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
          }
        },
        {
          "slug": "xx59-headphones",
          "name": "XX59",
          "image": {
            "mobile": "assets/shared/mobile/image-xx59-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx59-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx59-headphones.jpg"
          }
        },
        {
          "slug": "zx9-speaker",
          "name": "ZX9 Speaker",
          "image": {
            "mobile": "assets/shared/mobile/image-zx9-speaker.jpg",
            "tablet": "assets/shared/tablet/image-zx9-speaker.jpg",
            "desktop": "assets/shared/desktop/image-zx9-speaker.jpg"
          }
        }
      ]
    },
    {
      "id": 2,
      "slug": "xx59-headphones",
      "name": "XX59 Headphones",
      "image": {
        "mobile": "assets/product-xx59-headphones/mobile/image-product.jpg",
        "tablet": "assets/product-xx59-headphones/tablet/image-product.jpg",
        "desktop": "assets/product-xx59-headphones/desktop/image-product.jpg"
      },
      "category": "headphones",
      "categoryImage": {
        "mobile": "assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
        "tablet": "assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
        "desktop": "assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
      },
      "new": false,
      "price": 899,
      "description": "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      "features": "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
      "includes": [
        {
          "quantity": 1,
          "item": "Headphone unit"
        },
        {
          "quantity": 2,
          "item": "Replacement earcups"
        },
        {
          "quantity": 1,
          "item": "User manual"
        },
        {
          "quantity": 1,
          "item": "3.5mm 5m audio cable"
        }
      ],
      "gallery": {
        "first": {
          "mobile": "assets/product-xx59-headphones/mobile/image-gallery-1.jpg",
          "tablet": "assets/product-xx59-headphones/tablet/image-gallery-1.jpg",
          "desktop": "assets/product-xx59-headphones/desktop/image-gallery-1.jpg"
        },
        "second": {
          "mobile": "assets/product-xx59-headphones/mobile/image-gallery-2.jpg",
          "tablet": "assets/product-xx59-headphones/tablet/image-gallery-2.jpg",
          "desktop": "assets/product-xx59-headphones/desktop/image-gallery-2.jpg"
        },
        "third": {
          "mobile": "assets/product-xx59-headphones/mobile/image-gallery-3.jpg",
          "tablet": "assets/product-xx59-headphones/tablet/image-gallery-3.jpg",
          "desktop": "assets/product-xx59-headphones/desktop/image-gallery-3.jpg"
        }
      },
      "others": [
        {
          "slug": "xx99-mark-two-headphones",
          "name": "XX99 Mark II",
          "image": {
            "mobile": "assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
          }
        },
        {
          "slug": "xx99-mark-one-headphones",
          "name": "XX99 Mark I",
          "image": {
            "mobile": "assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
          }
        },
        {
          "slug": "zx9-speaker",
          "name": "ZX9 Speaker",
          "image": {
            "mobile": "assets/shared/mobile/image-zx9-speaker.jpg",
            "tablet": "assets/shared/tablet/image-zx9-speaker.jpg",
            "desktop": "assets/shared/desktop/image-zx9-speaker.jpg"
          }
        }
      ]
    },
    {
      "id": 3,
      "slug": "xx99-mark-one-headphones",
      "name": "XX99 Mark I Headphones",
      "image": {
        "mobile": "assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
        "tablet": "assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
        "desktop": "assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
      },
      "category": "headphones",
      "categoryImage": {
        "mobile": "assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
        "tablet": "assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
        "desktop": "assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
      },
      "new": true,
      "price": 1750,
      "description": "Experience the ultimate in sound quality and comfort with the XX99 Mark I headphones. Crafted for audiophiles who demand the best, these headphones offer the finest sound experience with exceptional clarity and accuracy.",
      "features": "Designed for the discerning listener, the XX99 Mark I headphones feature advanced acoustic technology that ensures pure, rich sound. The ergonomically designed ear cups provide superior comfort, while the noise-cancellation technology enhances your listening experience by blocking out external sounds.\n\nWith a premium build and high-quality materials, these headphones are built to last. The plush memory foam ear pads and adjustable headband ensure a perfect fit for long listening sessions. The XX99 Mark I also includes a detachable cable with a built-in microphone for convenient hands-free calling and voice commands.",
      "includes": [
        {
          "quantity": 1,
          "item": "Headphone unit"
        },
        {
          "quantity": 1,
          "item": "3.5mm cable with remote and mic"
        },
        {
          "quantity": 1,
          "item": "1/4” adapter"
        },
        {
          "quantity": 1,
          "item": "Hard carrying case"
        },
        {
          "quantity": 1,
          "item": "User manual"
        }
      ],
      "gallery": {
        "first": {
          "mobile": "assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg",
          "tablet": "assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg",
          "desktop": "assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
        },
        "second": {
          "mobile": "assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg",
          "tablet": "assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg",
          "desktop": "assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
        },
        "third": {
          "mobile": "assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg",
          "tablet": "assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg",
          "desktop": "assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
        }
      },
      "others": [
        {
          "slug": "xx99-mark-two-headphones",
          "name": "XX99 Mark II",
          "image": {
            "mobile": "assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
          }
        },
        {
          "slug": "xx59-headphones",
          "name": "XX59",
          "image": {
            "mobile": "assets/shared/mobile/image-xx59-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx59-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx59-headphones.jpg"
          }
        },
        {
          "slug": "zx9-speaker",
          "name": "ZX9 Speaker",
          "image": {
            "mobile": "assets/shared/mobile/image-zx9-speaker.jpg",
            "tablet": "assets/shared/tablet/image-zx9-speaker.jpg",
            "desktop": "assets/shared/desktop/image-zx9-speaker.jpg"
          }
        }
      ]
    },
    {
      "id": 4,
      "slug": "xx99-mark-two-headphones",
      "name": "XX99 Mark II Headphones",
      "image": {
        "mobile": "assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
        "tablet": "assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
        "desktop": "assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
      },
      "category": "headphones",
      "categoryImage": {
        "mobile": "assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
        "tablet": "assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
        "desktop": "assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
      },
      "new": true,
      "price": 2999,
      "description": "Elevate your audio experience with the XX99 Mark II headphones. Engineered for audiophiles, these headphones deliver the highest fidelity sound with stunning accuracy and depth, providing an unparalleled listening experience.",
      "features": "The XX99 Mark II headphones are crafted with state-of-the-art technology to produce crystal-clear sound with remarkable detail. The advanced noise-cancellation feature ensures that you hear every nuance of your music without interference from the outside world.\n\nThe headphones are designed for ultimate comfort with plush memory foam ear cushions and an adjustable headband for a perfect fit. The durable build and premium materials ensure longevity and resilience, while the detachable cable with inline controls and microphone offers convenience for hands-free calls and music control.",
      "includes": [
        {
          "quantity": 1,
          "item": "Headphone unit"
        },
        {
          "quantity": 1,
          "item": "3.5mm cable with remote and mic"
        },
        {
          "quantity": 1,
          "item": "6.35mm adapter"
        },
        {
          "quantity": 1,
          "item": "Hard carrying case"
        },
        {
          "quantity": 1,
          "item": "User manual"
        }
      ],
      "gallery": {
        "first": {
          "mobile": "assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
          "tablet": "assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg",
          "desktop": "assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
        },
        "second": {
          "mobile": "assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
          "tablet": "assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg",
          "desktop": "assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
        },
        "third": {
          "mobile": "assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg",
          "tablet": "assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg",
          "desktop": "assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
        }
      },
      "others": [
        {
          "slug": "xx99-mark-one-headphones",
          "name": "XX99 Mark I",
          "image": {
            "mobile": "assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
          }
        },
        {
          "slug": "xx59-headphones",
          "name": "XX59",
          "image": {
            "mobile": "assets/shared/mobile/image-xx59-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx59-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx59-headphones.jpg"
          }
        },
        {
          "slug": "zx9-speaker",
          "name": "ZX9 Speaker",
          "image": {
            "mobile": "assets/shared/mobile/image-zx9-speaker.jpg",
            "tablet": "assets/shared/tablet/image-zx9-speaker.jpg",
            "desktop": "assets/shared/desktop/image-zx9-speaker.jpg"
          }
        }
      ]
    },
    {
      "id": 5,
      "slug": "zx9-speaker",
      "name": "ZX9 Speaker",
      "image": {
        "mobile": "assets/product-zx9-speaker/mobile/image-product.jpg",
        "tablet": "assets/product-zx9-speaker/tablet/image-product.jpg",
        "desktop": "assets/product-zx9-speaker/desktop/image-product.jpg"
      },
      "category": "speakers",
      "categoryImage": {
        "mobile": "assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
        "tablet": "assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
        "desktop": "assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
      },
      "new": true,
      "price": 4500,
      "description": "Experience the most immersive sound with the ZX9 speaker. Designed to deliver unparalleled audio performance, this speaker is perfect for any audiophile looking to elevate their sound experience.",
      "features": "The ZX9 speaker features advanced acoustic technology that provides a rich and dynamic sound experience. Its powerful drivers and advanced sound processing ensure clear, balanced audio with deep bass and crisp highs.\n\nBuilt with high-quality materials and a sleek design, the ZX9 speaker is not only a high-performance audio device but also a stylish addition to any space. The speaker supports wireless connectivity for convenient streaming and includes a range of connectivity options for various devices.",
      "includes": [
        {
          "quantity": 1,
          "item": "Speaker unit"
        },
        {
          "quantity": 1,
          "item": "Power cable"
        },
        {
          "quantity": 1,
          "item": "User manual"
        }
      ],
      "gallery": {
        "first": {
          "mobile": "assets/product-zx9-speaker/mobile/image-gallery-1.jpg",
          "tablet": "assets/product-zx9-speaker/tablet/image-gallery-1.jpg",
          "desktop": "assets/product-zx9-speaker/desktop/image-gallery-1.jpg"
        },
        "second": {
          "mobile": "assets/product-zx9-speaker/mobile/image-gallery-2.jpg",
          "tablet": "assets/product-zx9-speaker/tablet/image-gallery-2.jpg",
          "desktop": "assets/product-zx9-speaker/desktop/image-gallery-2.jpg"
        },
        "third": {
          "mobile": "assets/product-zx9-speaker/mobile/image-gallery-3.jpg",
          "tablet": "assets/product-zx9-speaker/tablet/image-gallery-3.jpg",
          "desktop": "assets/product-zx9-speaker/desktop/image-gallery-3.jpg"
        }
      },
      "others": [
        {
          "slug": "xx99-mark-one-headphones",
          "name": "XX99 Mark I",
          "image": {
            "mobile": "assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
          }
        },
        {
          "slug": "xx59-headphones",
          "name": "XX59",
          "image": {
            "mobile": "assets/shared/mobile/image-xx59-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx59-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx59-headphones.jpg"
          }
        },
        {
          "slug": "xx99-mark-two-headphones",
          "name": "XX99 Mark II",
          "image": {
            "mobile": "assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
            "tablet": "assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
            "desktop": "assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
          }
        }
      ]
    }
  ]
,
// url : "http://localhost:3000/api/audiophile/products"
}),
     getters : {
          categorySpeaker(){
               return this.products.filter(product => product.category === "speakers");
          },
          categoryHeadphones(){
               return this.products.filter(product => product.category === "headphones");
          },
          categoryEarphones(){
               return this.products.filter(product => product.category === "earphones");
          }, 
     },
     actions : {
          // async fetchProducts() {
          //      try {
          //           const response = await fetch("http://localhost:3000/api/audiophile/products");
          //           const data = await response.json();
          //           this.products = data.products;
          //           console.log(this.products)
          //      } catch (error) {
          //           console.log("Error" , error)
          //      }
          // } , 
          getProduct(value){
               const product = this.products.find(product  => { 
                    return  product.slug === value;
               });
               
               return product;
          }
     }
})

