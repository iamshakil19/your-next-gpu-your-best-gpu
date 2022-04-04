import React from 'react';
import './Home.css'
import image from '../../Resources/gpu.jpg'
import { Link } from 'react-router-dom';
import useReviews from '../Hooks/useReviews';
import Review from '../HomeReview/HomeReview';


const Home = () => {
    const [reviews, setReviews] = useReviews()
    const topReviews = reviews.slice(0, 3)
    console.log(topReviews);
    return (
        <div>
            <section className='text-center product-container'>
                <div className='mb-4 gpu-image'>
                    <img className='object-cover w-80' src={image} alt="ASUS TUF Gaming GeForce RTX 3090 OC Edition Graphics Card" title='ASUS TUF Gaming GeForce RTX 3090 OC Edition Graphics Card' />
                </div>
                <div className='px-5 product-details-container'>
                    <h1 className='text-5xl font-bold'>Your Next GPU <br /> <span className='orange'>Your Best GPU</span></h1>
                    <br />
                    <p className='product-details'>ASUS TUF Gaming GeForce RTX 3090 OC Edition Graphics Card features NVIDIA Ampere Streaming Multiprocessors: The building blocks for the world’s fastest, most efficient GPU, the all-new Ampere SM brings 2X the FP32 throughput and improved power efficiency. It comes with 2nd Generation RT Cores: Experience 2X the throughput of 1st gen RT Cores, plus concurrent RT and shading for a whole new level of ray tracing performance.</p>
                    <br />
                    <button className='demo-btn'>Live Demo</button>
                </div>
            </section>

            <section className='mt-8 mb-10 reviews-container'>
                <div>
                    <h2 className='text-center text-3xl font-semibold '>Customer Reviews (3)</h2>
                </div>

                <div className='text-center top-reviews-container'>
                    {
                        topReviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>

                <div className='all-reviews-btn-container mt-5'>
                    <Link className='all-reviews-btn' to='/reviews'>See All Reviews</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;