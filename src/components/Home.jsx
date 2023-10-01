import React from 'react';
import ProductCard from './ProductCard';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {

    // List of products
    const products = [
        {
            name: 'Macbook Pro',
            price: '1000',
            imgSrc: 'https://img.freepik.com/premium-photo/modern-slim-design-laptop-with-blank-screen-aluminum-material-isolated-white-background-template-laptop-mock-up-file-contains-with-clipping-path-so-easy-work_24076-884.jpg?w=740',
            id: 'djhvuusidvui'
        },
        {
            name: 'iPhone 15',
            price: '260',
            imgSrc: 'https://img.freepik.com/premium-photo/phone-isolated-white-screen-with-empty-background-mockup_752648-24.jpg?w=740',
            id: 'sdufvisbdf'
        },
        {
            name: 'iPad Air',
            price: '500',
            imgSrc: 'https://img.freepik.com/premium-photo/white-tablet-computer_143683-3296.jpg?w=740',
            id: 'ubfusbfuis'
        },
        {
            name: 'Apple Watch 5',
            price: '90',
            imgSrc: 'https://img.freepik.com/premium-photo/black-modern-smart-watch-mockup-with-strap-white-background-3d-rendering_476612-18548.jpg',
            id: 'ubfusbfuisu'
        },
        {
            name: 'Airpods Pro',
            price: '50',
            imgSrc: 'https://img.freepik.com/premium-photo/wireless-headphones-white-right-left-white-isolated-background_297535-4424.jpg?w=740',
            id: 'iurgibiufb'
        },
        {
            name: 'iPad Mini',
            price: '150',
            imgSrc: 'https://img.freepik.com/premium-photo/white-digital-tablet-white-isolated-background-side-view_270100-1400.jpg?w=740',
            id: 'iusdbuibsdib'
        },
        {
            name: 'Lightning Cable',
            price: '20',
            imgSrc: 'https://img.freepik.com/premium-photo/white-usb-type-c-charger-cable-smartphone-white-background-3d-rendering_476612-19172.jpg?w=740',
            id: 'usudvukfbweif'
        },
        {
            name: 'iMac',
            price: '2200',
            imgSrc: 'https://img.freepik.com/premium-photo/computer_1205-717.jpg?1&w=740',
            id: 'kweblfuiwkjsbjf'
        }  
    ];

    // Dispatch reducers from redux store
    const dispatch = useDispatch();

    // Function to add item to cart
    const addToCartHandler = (options) => {

        // Add to cart reducer
        dispatch({
            type: "addToCart",
            payload: options
        })

        // Final price reducer
        dispatch({
            type: 'calculatePrice',
        })
        toast.success('Added to Cart');
    }

    return (
        <div className='home'>
        {
            products.map(product => (<ProductCard key={product.id} id={product.id} name={product.name} price={product.price} imgSrc={product.imgSrc} handler={addToCartHandler} />))
        }
        </div>
    )
}

export default Home;
