import React from 'react'
import { collection, doc, getDoc, getDocs, query, where } from '@firebase/firestore';
import { db } from '../../src/config/firebase'
import Product from '../../share/components/Porduct';


const Rest = ({ data, restById }) => {
    const ProductData = {
        product: data,
        restaurant: restById
    }
    return (
        <div style={{ border: '1px solid red' }}>
            <Product ProductData={ProductData} />
        </div>
    )
}


export default Rest

export async function getServerSideProps(context) {
    const { name, id } = context.query;
    const product = await getDocs(query(collection(db, "products"), where('belongRestaurant', "==", name)));
    const res = await getDoc(doc(db, "restaurants", id));
    const restById = res.data()
    const data = product.docs.map(doc => {
        return {
            ...doc.data(),
            uid: doc.id
        }
    })

    return {
        props: {
            data, restById
            // resData
        }
    }
}

